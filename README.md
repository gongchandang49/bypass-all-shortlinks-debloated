# Bypass All Shortlinks Debloated
## Save time with automation or bypasses for many link shorteners.

A fork of *Bypass All Shortlinks* (originally by *bloggerpemula*), with some additional bypasses and fixes.

([supported shorteners](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/supported_sites.txt)) ([changelog](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/commits/branch/main/Bypass_All_Shortlinks.user.js))

## Install from [OpenUserJS](https://openuserjs.org/install/gongchandang49/Bypass_All_Shortlinks_Debloated.user.js) / [Github](https://github.com/gongchandang49/bypass-all-shortlinks-debloated/raw/refs/heads/main/Bypass_All_Shortlinks.user.js) / [Codeberg](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js)

> To avoid potential issues, please remember to disable Amm0ni4/BloggerPemula's version in case you have it installed.

**Requirements:** Firefox/Brave + [Violentmonkey](https://violentmonkey.github.io/) + [uBlock Origin](https://ublockorigin.com)

*Note for Chrome, Edge or other Chromium browsers: Userscripts and uBO may not work at all or stop working at any time. Only Brave will work because it supports MV2. Disable Brave Shields adblocker for uBlock Origin to work correctly.*

## Help make this better
You can help by:
- Reporting issues on the [issues](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/issues) tab. **Post examples with the source link shortener and link source website.** All types of links and destinations are allowed.
- Editing/Adding fixes on the issues tab.
- Suggesting to merge other scripts / extra bypasses into this one.
- If while using [uBlock Origin (recommended adblocker)](https://ublockorigin.com), a link shortener is showing ads or detecting you have adblock, report it [here](https://github.com/uBlockOrigin/uAssets/discussions/27472).

## How this repo works / How to add new patches
You need to execute these python scripts in order:
- 1_download_untouched.py   -   Most fixes and new shortlinks should be added here.
- 2_generate_includes.py    -   Don't touch, this generates the txt match rules.
- 3_patch.py                -   This does most of the debloating (donation begging, etc), and also handles versioning logic.
- 4_add_extra_bypasses.py   -   Merges the scripts from `extra_bypasses` directory into the main script.

Then, you will get a brand new `Bypass_All_Shortlinks.user.js` file that you can copy-paste into Violentmonkey and test your changes.

## FAQ
- **How effective is this?** It depends on each website. Sometimes it can bypass completely, sometimes it only accelerates the timers, other times it can only auto-click the buttons for you after waiting for the timers to run out. People who contribute here need to add new specific code for each website after we find the weak points.
- **Why is this called "debloated" when now it's a bigger script than the original one?** Read "Improvements in this fork" below.
- **What are *shortlinks*, where do I need this script if at all?** Intermediate CPM pages that users are forced to go through, before getting to the final destination. They often require you to click ads or perform certain actions, so the creator gets paid 1 or 2 cents each time somebody clicks them. This is used often in [piracy websites that offer direct downloads](https://fmhy.net/downloadpiracyguide#video-sites).
- **How do I use the settings menu this script has?** Some useful features are Fast Timer (speed up countdowns), remove Adblock Detections, and Enable Auto Download (mostly on file storage sites). They are disabled by default because they break some sites.
- **How regularly can we expect updates?** It purely depends on my spare time. I believe in free work and will never ask for donations of any sort (unlike BP). However, since it is volunteer work, commitment or maintainance is not guaranteed. TLDR: Usually a couple fixes a month, but there could be months with no updates.
- **Can I copy "your" code and place it on X product?** Absolutely. Code licensing is dumb, and copyright more so. (License is only added to dismiss some annoying banners.) Most of us are here due to piracy, so go ahead and copy whatever you want. No attribution required. (Expect me to do the same.)

## Improvements in this fork
- **Added more bypasses and some fixes** through the scripts in the [extra_bypasses](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/extra_bypasses) directory.
- **No loading the script indiscriminately on every site.** The script will be loaded only for the sites that are supported (the original userscript is loaded in most of the sites you visit, which is not necessary). Also, by default the script won't run on some sites that have optional bypasses made, but are sensitive like YouTube or Google. These can be re-enabled manually in your userscript manager, adding [optional matching rules](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/docs/optional_matching_rules.md) in the script _settings_.
- **Removed non-latin non-unicode characters** to avoid potential bug warnings.
- Removed tracking redirects. The script will not redirect to `sl1bas.blogspot.com` which is a site set by BP for tracking / collecting analytics and showing ads.
- Disabled injection of _"adcopy_response"_.
- Added versioning logic (`-patch{version}` suffix), not present in Amm0ni4's repo.
- Removed all rants, complaints, and shameless donation begging messages added by BP.

## How to patch the original script yourself
Paste the content of the files [include_rules.txt](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/include_rules.txt) and [match_rules.txt](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/src/branch/main/match_rules.txt) in the ViolentMonkey settings for the [original script](https://greasyfork.org/scripts/431691), like this:

<img src="https://i.imgur.com/qiJekvg.jpeg" height="500">

This would not include the extra bypasses into the original script. But at least this makes it run only on the necessary sites, instead of running on every site.

Original script by *Bloggerpemula*: [Bypass All Shortlinks | GreasyFork](https://greasyfork.org/scripts/431691) / [OpenUserJS](https://openuserjs.org/scripts/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha)


## Credits
This script contains code I took, or redirects to free services from other developers for certain bypasses.
Thanks to:
- [Amm0ni4](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated)
- [BloggerPemula](https://greasyfork.org/users/810571-bloggerpemula)
- [bypass.city](https://bypass.city/) / [2](https://adbypass.org/) used for linkv3rtise, Admaven and Loot-link.
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
