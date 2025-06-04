// ==UserScript==
// @name         PSA Bypasser through moviezapiya.fun
// @match        https://psa.wf/goto/*
// @match        https://moviezapiya.fun/
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_deleteValue
// @run-at       document-start
// ==/UserScript==

//---PSA Bypasser through moviezapiya.fun----
(function() {
    'use strict';
    const currentURL = window.location.href;


    // Functions to pause the script if the 3rd party site moviezapita.fun is not working
    const PAUSE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const STORAGE_KEY = 'userscript_pause_until';

    function isPaused() {
        const pauseUntil = GM_getValue(STORAGE_KEY, 0);
        return Date.now() < pauseUntil;
    }
    
    function pauseScript() {
        const pauseUntil = Date.now() + PAUSE_DURATION;
        GM_setValue(STORAGE_KEY, pauseUntil);
        
        const resumeTime = new Date(pauseUntil).toLocaleString();
        console.log(`Userscript paused due to bad condition. Will resume at: ${resumeTime}`);
    }
    
    function unpauseScript() {
        GM_deleteValue(STORAGE_KEY);
        console.log('Userscript unpaused - bad condition no longer detected');
    }
    
    function getRemainingPauseTime() {
        const pauseUntil = GM_getValue(STORAGE_KEY, 0);
        const remaining = pauseUntil - Date.now();
        return remaining > 0 ? remaining : 0;
    }

    function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    }

    // First site: psa.wf/goto/*
    if (currentURL.match(/https:\/\/psa\.wf\/goto\/.*/)) {
        // Check if the script is paused before redirecting to moviezapiya.fun
        if (isPaused()) {
            const remainingTime = getRemainingPauseTime();
            alert(`Redirects to moviezapiya.fun have been paused. Remaining time: ${formatTime(remainingTime)}. Continuing to the original PSA link without direct bypass...`);
            return; // Exit the script if paused
        } else {
            // Immediately save the current URL without waiting
            GM_setValue('savedLink', currentURL);
            console.log('Saved URL:', currentURL);

            // Redirect to the second site
            window.location.href = 'https://moviezapiya.fun/';
        }
    }
    // Second site: moviezapiya.fun
    else if (currentURL.match(/https:\/\/moviezapiya\.fun\/.*/)) {
        // Wait for the page to be fully loaded before proceeding
        document.addEventListener('DOMContentLoaded', function() {
            // Add additional delay to handle any Cloudflare or other protections
            setTimeout(processMoviezApiyaSite, 1000);
        });
    }

    function processMoviezApiyaSite() {
        const savedLink = GM_getValue('savedLink', null);
        console.log('Retrieved saved URL:', savedLink);

        if (!savedLink) {
            console.error('No saved link found.');
            return;
        }

        // Check if the form exists
        const inputField = document.querySelector('#userLink');
        const bypassButton = document.querySelector('.container > button:nth-child(4)');

        if (!inputField || !bypassButton) {
            console.log('Required elements not found. Retrying in 1 second...');
            setTimeout(processMoviezApiyaSite, 1000);
            return;
        }

        // Fill the form with the saved link
        inputField.value = savedLink;

        // Click the bypass button
        console.log('Clicking bypass button...');
        bypassButton.click();

        // Start checking for the result link
        checkForResultLink();
    }

    function checkForResultLink() {
        const resultLink = document.querySelector('#resultLink');

        if (resultLink && resultLink.href && resultLink.href.includes('get-to.link')) {
            console.log('Final link found:', resultLink.href);
            GM_deleteValue('savedLink');
            window.location.assign(resultLink.href);
        } else if (resultLink && resultLink.href && resultLink.href.includes('example.com')) {
            // The site is not working, pause the script
            alert('The bypass site is not working. Pausing redirects to moviezapiya.fun for 24 hours.');
            pauseScript();
            const remainingTime = getRemainingPauseTime();
            console.log(`Script paused for 24 hours. Remaining time: ${formatTime(remainingTime)}`);
            // Redirect to the original PSA link (savedLink)
            const savedLink = GM_getValue('savedLink', null);
            GM_deleteValue('savedLink');
            window.location.assign(savedLink);
        } else {
            console.log('Final link not found yet. Checking again in 2 seconds...');
            setTimeout(checkForResultLink, 2000); // Check again in 2 seconds
        }
    }
})();
//-------
