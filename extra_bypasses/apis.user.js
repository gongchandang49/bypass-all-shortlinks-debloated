// ==UserScript==
// @name          bypass.vip and bypass.city APIs
// @include       /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/
// @match         *://linkvertise.com/*
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @run-at        document-start
// ==/UserScript==

// ----- bypass.vip and bypass.city APIs------
(function() {
    'use strict';
    const admavenRegex = /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/;
    const linkvertiseRegex = /^https:\/\/linkvertise\.com\/.+$/;
    const lootlinkRegex = /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/

    const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);

    // Linkvertise easy case
    if (linkvertiseRegex.test(window.location.href) && window.location.search.includes('r=')) {
        const rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {redirect(atob(rParam));};

    // Linkvertise hard case and Admaven using bypass.city
    } else if (admavenRegex.test(window.location.href) || linkvertiseRegex.test(window.location.href) || lootlinkRegex.test(window.location.href)) {
        redirect(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
    }
})();
// ----- ------ ----------

