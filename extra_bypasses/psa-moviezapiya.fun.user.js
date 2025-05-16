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

    // First site: psa.wf/goto/*
    if (currentURL.match(/https:\/\/psa\.wf\/goto\/.*/)) {
        // Immediately save the current URL without waiting
        GM_setValue('savedLink', currentURL);
        console.log('Saved URL:', currentURL);

        // Redirect to the second site
        window.location.href = 'https://moviezapiya.fun/';
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

        // Clear the variable
        GM_deleteValue('savedLink');

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
            // Redirect to the final link
            window.location.href = resultLink.href;
        } else {
            console.log('Final link not found yet. Checking again in 2 seconds...');
            setTimeout(checkForResultLink, 2000); // Check again in 2 seconds
        }
    }
})();
//-------
