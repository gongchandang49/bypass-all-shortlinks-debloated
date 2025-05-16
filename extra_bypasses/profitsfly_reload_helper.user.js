// ==UserScript==
// @name        profitsfly reload helper
// @include     /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/
// @run-at      document-start
// ==/UserScript==

//---profitsfly reload helper----
(function() {
    "use strict";

    const domainRegex = /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/;
    if (domainRegex.test(window.location.href)) {

        // ---RELOAD DEAD-END PAGES---
        if (document.readyState === "complete") {
            onWindowLoad();
        } else {
            window.addEventListener('load', onWindowLoad);
        }

        function onWindowLoad() {

            // Continue immediately on the "Shortened link (Waiting)" page
            if (document.title === "Shortened link (Waiting)" && !window.location.href.includes("continue=true")) {
                // add continue=true to the URL
                window.location.href = window.location.href + '&continue=true';
            }

            // Function to check for messages like "Click any ad & keep it open for 15 seconds to continue" and reload the page if one exists
            let reloading = false;
            function checkForMessage() {

                // "Click on ad to continue" can be ignored for now
                // const paragraphs = document.getElementsByTagName("p");
                // for (let p of paragraphs) {
                //     if (/.*click.+ad.*to.+continue.*/is.test(p.textContent) && isElementVisibleAndEnabled(p)) {
                //         if (!reloading) location.reload(); // Reload the page
                //         reloading = true;
                //         return; // Exit the function after reloading
                //     }
                // }

                if (/Less than.+passed between actions.+try again/.test(document.body.textContent)) {
                    if (!reloading) location.reload(); // Reload the page
                    reloading = true;
                    return; // Exit the function after reloading
                }
            }

            // Helper function to determine if an element is visible and enabled
            function isElementVisibleAndEnabled(el) {
                // Check if the element and all its parents are visible
                let currentElement = el;
                while (currentElement) {
                    const style = getComputedStyle(currentElement);
                    if (style.display === "none" || style.visibility === "hidden") {
                        return false; // Element or parent is not visible
                    }
                    currentElement = currentElement.parentElement; // Move up the DOM tree
                }
                // Check if the button is enabled
                return !el.disabled;
            }

            setInterval(checkForMessage, 1000);
        }

        // -- Open captchas
        function openHCaptchaWhenVisible() {
            let intervalId = setInterval(() => {
                let hCaptchaWidget = document.querySelector('iframe[src*="hcaptcha.com"]');
                if (hCaptchaWidget && hCaptchaWidget.offsetParent !== null) {
                    clearInterval(intervalId);
                    window.hcaptcha.execute();
                }
            }, 500);
        }
        openHCaptchaWhenVisible();

        // ---After DOM loaded---
        document.addEventListener('DOMContentLoaded', function() {

            // Set auxiliary variables
            window.assDidCkeDone = true;

            // Hide adblock detection; alternative with uBO: historyofyesterday.com##.unblocker-container
            setInterval(() => {
                const unblockerContainer = document.querySelector(".unblocker-container");
                if (unblockerContainer) {unblockerContainer.style.display = "none";}
            }, 1000);

            // ---Remove YouTube modal and banner--- 
            // (alternative with uBO : https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11864776)
            if (unsafeWindow.youtubeVideoStepProceed) { unsafeWindow.youtubeVideoStepProceed();}
            const stickyBanner = document.querySelector(".mg-sticky-banner");
            if (stickyBanner) {stickyBanner.style.display = "none";}

            // ---Skip timers---
            const forcedTimerInitialValue = 7;
            function setTimer() {
                if (window.wT9882 > forcedTimerInitialValue) {
                    window.wT9882 = 1;
                }
            }
            window.wT9882 = forcedTimerInitialValue;
            setInterval(setTimer, 1000); //This function exists because if the site detects an adblocker, it switches the timer to 30, and that only happens in the last second or so

            /* ------------ Protect buttons from being removed ------------ */
            // Protect all buttons currently in the DOM
            function protectButtons() {
                const buttons = document.querySelectorAll("button");
                buttons.forEach((button) => protectElement(button));
            }

            // Protect a specific button by overriding its removal methods
            function protectElement(element) {
                if (element.__protected) return; // Avoid double protection

                // Override remove()
                const originalRemove = element.remove;
                element.remove = () => {};

                // Flag element as protected
                element.__protected = true;
            }

            // Monitor the DOM for dynamically added buttons
            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {
                            // Protect new button
                            protectElement(node);
                        }
                    });

                    mutation.removedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {
                            // A button was removed. Re-add it:
                            mutation.target.appendChild(node); // Re-add the button
                            protectElement(node); // Re-protect it
                        }
                    });
                });
            });

            // Start observing the document for changes
            observer.observe(document.body, { childList: true, subtree: true });

            // Protect buttons already in the DOM
            protectButtons();
        });

    }
})();
//-------
