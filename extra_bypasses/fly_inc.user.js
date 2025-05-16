// ==UserScript==
// @name         Fly Inc autoclick (rinku.me .pro, 7mb.io, ...)
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop)(\/.*)/
// @run-at       document-start
// ==/UserScript==

// ----- Bypass Fly Inc (rinku.me .pro, 7mb.io, ...) ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop/
    if (domainRegex.test(window.location.href)) {

        // Anti anti-adblock
        const interceptOnload = () => {
            // Store the original descriptor
            const originalDescriptor = Object.getOwnPropertyDescriptor(window, 'onload');
    
            // Define a new property descriptor that intercepts attempts to set onload
            Object.defineProperty(window, 'onload', {
                configurable: true,
                enumerable: true,
                get: function() {
                    return originalDescriptor ? originalDescriptor.get.call(this) : null;
                },
                set: function(newValue) {
                    // Check if the function contains 'handleFailure'
                    if (newValue && newValue.toString().includes('handleFailure')) {
                        console.log('Blocked assignment of onload handler containing handleFailure');
                        return; // Block the assignment
                    }
    
                    // Allow other onload handlers
                    if (originalDescriptor && originalDescriptor.set) {
                        originalDescriptor.set.call(this, newValue);
                    }
                }
            });
        };
        interceptOnload();

        // Replace addEventListener to prevent adblock detection
            // This replicates "aeld" from uBO - https://github.com/gorhill/ublock/wiki/Resources-Library#addeventlistener-defuserjs-
            // Based on filter by Suurp from https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-12079375
            // Save the original addEventListener method
                const originalAddEventListener = document.addEventListener;
                // Override the addEventListener method
                document.addEventListener = function(type, listener, options) {
                    // Check if the event type is 'DOMContentLoaded' and the listener matches the one we want to block
                    if (type === 'DOMContentLoaded' && listener.toString().includes('function(e)')) {
                        console.log('Blocked DOMContentLoaded event listener:', listener);
                        return; // Prevent the listener from being added
                    }
                    // Call the original addEventListener method for other cases
                    originalAddEventListener.call(document, type, listener, options);
                };

        // Backup the current Rinku.me Code in case we get to 404 and we need to try again
            // Function to get rinku code from URL parameters (example: https://listofthis.com/backup/w/?get=uPmc5&short=rinku.me)
            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                const results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
            // Save rinku code in memory
            if (window.location.href.includes('/backup/w/')) {
                const codeParameter = 'get';
                //alert('Saving Rinku.me code in memory... The code is ' + getUrlParameter(codeParameter));
                localStorage.setItem('getParam', getUrlParameter(codeParameter));
            }
        // Try again when getting to 404 page (example: https://listofthis.com/bypass.php)
        if (window.location.href.includes('/bypass.php')) {
            const savedGetParam = localStorage.getItem('getParam');
            if (savedGetParam) {
                //Wait for the DOM to be fully loaded (to see that it is a 404 page)
                window.addEventListener('load', function() {
                    //alert('Press OK to try again going to:\n' + `https://rinku.me/${savedGetParam}`);
                    window.location.href = `https://rinku.me/${savedGetParam}`;
                });
            }
        }

        // Wait for page to be fully loaded
        window.addEventListener('load', function() {

            // Override the hasFocus function
            document.hasFocus = function() {
                return true; // Always return true
            };

            // Functions to check for "Click Any Ad & Keep It Open For 15 Seconds To Continue" and reload the page if it exists
            function checkForMessage_fallback() {
                const paragraphs = document.getElementsByTagName("p");
                for (let p of paragraphs) {
                    if ((/.*Click.+Ad.*To.+Continue.*/is.test(p.textContent) || /.*Click.+Ad.*To.+Unlock.+Captcha.*/is.test(p.textContent) || /.*Open.*To.+Unlock.+Captcha.*/is.test(p.textContent) || /.*Open.*To.+Continue.*/is.test(p.textContent)) && isElementVisibleAndEnabled(p)) {
                        location.reload(); // Reload the page
                        return; // Exit the function after reloading
                    }
                }
            }

            function checkForMessage() {
                const p = document.getElementById("click");
                if (!p) {
                    checkForMessage_fallback();
                } else if (p.textContent.trim() !== "" && isElementVisibleAndEnabled(p)) {
                    location.reload(); // Reload the page
                }
            }

            // Function to check and click the button
            function clickStepButton() {
                const buttons = document.querySelectorAll("button");
                for (let button of buttons) {
                    if (button.textContent.includes("Step") && isElementVisibleAndEnabled(button)) {
                        button.click();
                        console.log("Clicked the button: ", button);
                        return; // Stop after clicking the first found button
                    }
                }
            }

            // Function to observe button changes
            function observeButtons() {
                const buttons = document.querySelectorAll("button");
                buttons.forEach(button => {
                    const observer = new MutationObserver(() => {
                        // Check if the button is enabled or visibility changed
                        if (isElementVisibleAndEnabled(button)) {
                            clickStepButton(); // Attempt to click if it meets criteria
                        }
                    });
                    observer.observe(button, {
                        attributes: true,
                        attributeFilter: ["disabled"] // Observe changes to the disabled attribute
                    });
                });
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

            // Create a MutationObserver to detect DOM changes
            const observer = new MutationObserver(clickStepButton);

            // Observe changes in the entire document
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            // Initial checks
            observeButtons();
            checkForMessage();
            clickStepButton();

            // Hide "Hey, thanks for your visit, good day!!" modal
            const interstitial = document.getElementById("interstitial");
            if (interstitial) {
                interstitial.style.display = "none";
            }

        });

    }
})();
// ----- End Bypass Rinku -----
