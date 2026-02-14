// ==UserScript==
// @name         Fly Inc autoclick (rinku.me .pro, 7mb.io, ...)
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me)(\/.*)/
// @run-at       document-start
// ==/UserScript==

// ----- Bypass Fly Inc (rinku.me .pro, 7mb.io, ...) ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja|djbassking|telefonzilsesi|csyildizi|verli|thejessiek|fabriksite|mealold|nameortho|ebanglapro|gyoblog|zulgame|arabe-tech|mclox|anlikgb|yogatrick|barlianta|desimonthdate|jobpagol|cararabic|esladvice).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me|postalcode.com.pk|teknoventure|stellar\.|echo\.|halo\./
    if (domainRegex.test(window.location.href)) {
        const e = unsafeWindow.location.href.includes("/posts/"),
            t = [...document.querySelectorAll("style")].some((e => e.textContent.includes("card-container"))),
            s = [...document.scripts].some((e => e.src.startsWith("https://static.cloudflareinsights.com/beacon.min.js")));
        e && t && s && (! function() {
            const e = new MutationObserver((() => {
                const t = document.getElementById("delulu-overlay");
                t && (t.style.display = "none", e.disconnect())
            }));
            e.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }(), function() {
            const e = [...document.querySelectorAll(['[class^="btn-"]', '[src*="/recaptcha/"]', "#captcha-container", "#click", "#redirect-link", "#switchCaptcha", "#debugStatus"].join(","))],
                t = new Set;
            e.forEach((e => {
                t.add(e);
                let n = e.parentElement;
                for (; n;) t.add(n), n = n.parentElement;
                e.querySelectorAll("*").forEach((e => t.add(e)))
            })), [...document.querySelectorAll("*")].forEach((e => {
                t.has(e) || (e.style.display = "none")
            }))
        }(), unsafeWindow.dispatchEvent(new Event("scroll")), function() {
            const e = document.querySelector('button[class*="btn-"]'),
                t = new MutationObserver((() => {
                    if (!e) return;
                    const n = getComputedStyle(e.parentElement.parentElement).display;
                    e.disabled || "none" === n || (e.click(), t.disconnect())
                }));
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), e && t.observe(e, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }(), function() {
            for (let e = 0; e < 3; e++) {
                const t = "mustClickAd" + e;
                "1" === sessionStorage.getItem(t) && (sessionStorage.setItem(t, "0"), unsafeWindow.location.replace(unsafeWindow.location.href)), sessionStorage.setItem(t, "0")
            }
        }(), setTimeout((() => {
            const e = document.querySelector('button[class*="btn-"]');
            e && (e.parentElement.parentElement.style.display = "block")
        }), 1e4))
    }
})();
// ----- End Bypass Rinku -----
