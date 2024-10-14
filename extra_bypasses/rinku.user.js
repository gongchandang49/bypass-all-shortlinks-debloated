// ==UserScript==
// @name         Rinku autoclick
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|bikerlynn|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv).com|(makego|sakazi).net|askerlikforum.com.tr|(pulse3d|1side|vibe21).xyz|clk.skin)(\/.*)/
// @run-at       document-start
// ==/UserScript==

// ----- Bypass Rinku ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
// example: https://rinku.me/0XLi6
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|bikerlynn|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv).com|(makego|sakazi).net|askerlikforum.com.tr|(pulse3d|1side|vibe21).xyz|clk.skin/
    if (domainRegex.test(window.location.href)) {

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

            // Function to check for "Click Any Ad & Keep It Open For 15 Seconds To Continue" and reload the page if it exists
            function checkForMessage() {
                const paragraphs = document.getElementsByTagName("p");
                for (let p of paragraphs) {
                    if (/.*Click.+Ad.*To Continue.*/is.test(p.textContent) || (/.*Click.+Ad.*To.+Unlock.+Captcha.*/is.test(p.textContent) && isElementVisibleAndEnabled(p))) {
                        location.reload(); // Reload the page
                        return; // Exit the function after reloading
                    }
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

        });

    }
})();
// ----- End Bypass Rinku -----
