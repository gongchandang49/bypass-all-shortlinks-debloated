# Bypass All Shortlinks Debloated
## Save time with automation or bypasses for many link shorteners. ([supported shorteners](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/supported_sites.txt)) ([changelog](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/commits/branch/main/Bypass_All_Shortlinks.user.js))

A fork of *Bypass All Shortlinks* (originally by *bloggerpemula*), with some additional bypasses and fixes.

## Install
**Install with [this link](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js)**

> To avoid potential issues, please remember to disable Amm0ni4's version in case you have it installed.

(you need a userscript manager like [Violentmonkey](https://violentmonkey.github.io/) installed in your web browser)

*I test the script with Brave/Firefox + uBlock Origin + Violentmonkey, so that is the supported setup.*

*Note for Chrome, Edge (or any similar MV3 browser) users: uBO Lite and uBlock Origin are NOT the same. Only Brave will work because it supports MV2. Disable Brave Shields adblocker for uBO to work.*

## Help make this better
You can help by:
- Reporting issues here on the [issues](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/issues) tab. **Post examples with the source link shortener and link source website.** I do not care what type of content the shortlink leads to. Fuck ethics.
- Suggesting to merge other scripts into this one.
- Editing/Adding code with pull requests.
- If while using [uBlock Origin (recommended adblocker)](https://ublockorigin.com), a link shortener is showing ads or detecting you have adblock, report it [here](https://github.com/uBlockOrigin/uAssets/discussions/27472).

## FAQ
- **How effective is this?** It depends on each website. Sometimes it can bypass completely, sometimes it only accelerates the timers, other times it can only auto-click the buttons for you after waiting for the timers to run out. People who contribute here need to add new specific code for each website after we find the vulnerabilities.
- **Why is this called "debloated" when now it's a bigger script than the original one?** It only loads for the websites that are supposed to be bypassed, instead of loading for every site, so your pages are less bloated. Also the redirection to `sl1bas.blogspot.com`, a tracking site, is revmoed.
- **What are *shortlinks*, where do I need this script if at all?** The type of *shortlinks* or *link shorteners* that we care about here are intermediate pages that users are forced to go through before getting to the page that we really want. They often force you to click ads so that the person posting these links can make a bit of money, 1 or 2 cents, each time somebody clicks them. This is used often in [piracy websites that offer direct downloads](https://fmhy.net/downloadpiracyguide#video-sites).
- **How do I use the settings menu this script has?** I would leave all those settings on default, some can break some sites. When I see that one of those is useful for a site, I enable it for that site (even if it doesn't show on the menu). That menu was added by bloggerpemula, the original dev, and I simply left it there, but I don't use it myself.

## How I modify the original userscript
Executing these python scripts in order:
- 1_download_untouched.py
- 2_generate_includes.py
- 3_patch.py
- 4_add_extra_bypasses.py

## How to patch the original script yourself
Paste the content of the files [include_rules.txt](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/include_rules.txt) and [match_rules.txt](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/match_rules.txt) in the ViolentMonkey settings for the [original script](https://greasyfork.org/scripts/431691), like this:

![](https://i.imgur.com/qiJekvg.jpeg)

This would not include the extra bypasses into the original script. But at least this makes it run only on the necessary sites, instead of running on every site.


## Improvements in this fork
- **Added more bypasses and some fixes** through the scripts in the [extra_bypasses](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/extra_bypasses) directory.
- **No loading the script indiscriminately on every site.** The script will be loaded only for the sites that are supported (the original userscript is loaded in most of the sites you visit, which is not necessary). Also, by default the script won't run on some sites that have optional bypasses made, but are sensitive like YouTube or Google. These can be re-enabled manually in your userscript manager, adding [optional matching rules](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/docs/optional_matching_rules.md) in the script _settings_.
- **Removed non-latin non-unicode characters** to avoid potential bug warnings.
- No added tracking redirects. The script will not redirect to `sl1bas.blogspot.com` which is a site set by the developer for tracking / collecting analytics and showing ads. Note: removing this could break "faucet" (crypto rewards) sites, according to Bloggerpemula, since they add a sometimes necessary delay. I don't try to support those sites with this fork.
- The script will not inject this weird _"adcopy_response"_. (I don't see a clear purpose for this, since it doesn't seem related in the script to any specific link shortener)

BloggerPemula recently removed these tracking antifeatures in the original script too:
- _No injecting tracking in every site._
    - _The script will not inject that _iframe_ linking to `menrealitycalc.com`. (Recently, this _iframe_ was removed from the OpenUserJS version, and was only present in the GreasyFork version.)
    _Tip: this can be avoided in the original script adding this filter to uBlock Origin: `||menrealitycalc.com^$third-party`__

Original script by *Bloggerpemula*: [Bypass All Shortlinks | GreasyFork](https://greasyfork.org/scripts/431691) / [OpenUserJS](https://openuserjs.org/scripts/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha)


## Credits
This script contains code I took, or redirects to free services from other developers for certain bypasses.
Thanks to:
- [Amm0ni4](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated)
- [BloggerPemula](https://greasyfork.org/users/810571-bloggerpemula)
- [bypass.city](https://bypass.city/) / [2](https://adbypass.org/) used for l1nkv3rt1s3, Admaven and Loot-link.
- Contributers to this repository who have submitted pull requests: Anon991299, mouro, trapgod1, CaptainCaffeine, IntNinja, Dxian.
- [moviezapiya.fun](https://moviezapiya.fun/) used for PSA links.
- [Rust1667](https://greasyfork.org/users/980489-rust1667) for some bypasses.
- [AdamWr](https://github.com/AdamWr) from AdGuard for the mega-enlace and acortalink.me bypasses.
- Every user that has reported issues to this repository.

## Optional extra tools
- [einaregilsson/Redirector](https://einaregilsson.com/redirector/), configured for AdMaven links (example: `best-links.org/s?...`). These can't be easily bypassed with an userscript, because the page redirects you before the userscript has the chance to run.
In the extension settings, create a new redirect rule. Use the following settings:
    - Example URL : `https://best-links.org/s?9ced8af4`
    - Include pattern: `^https:\/\/([^\/]*)\/s\?([a-zA-Z0-9]{1,8})$`
    - Redirect to: `https://adbypass.org/bypass?bypass=https://$1/s?$2`
    - Pattern Type: `Regular expression`
- [StephenP/Bypass FileCrypt](https://greasyfork.org/en/scripts/403170-bypass-filecrypt)
- [fr0stb1rd/ublock_filters](https://gitlab.com/fr0stb1rd/ublock_filters/)
- [Pixeldrain Download Bypass](https://greasyfork.org/en/scripts/491326-pixeldrain-download-bypass)
- [1Fichier Redirect to Fastdebrid](https://greasyfork.org/en/scripts/528673-1fichier-redirect-to-fastdebrid)
- [GoFile Bypass](https://greasyfork.org/en/scripts/527711)
- [Terabox video link unlock](https://greasyfork.org/en/scripts/528908-terabox-video-link-unlock-redirect-to-embed)
