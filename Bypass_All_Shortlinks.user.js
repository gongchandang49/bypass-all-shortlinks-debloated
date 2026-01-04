// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4, gongchandang49
// @noframes
// @version    96.5-patch0.0.5
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require    https://update.greasyfork.org/scripts/528923/1599357/MonkeyConfig%20Mod.js
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @homepageURL    https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/issues
// @include /^(?:https?:\/\/)?(?:www\.)?(?:google\.com|recaptcha\.net)\/recaptcha\/api2\/.*$/
// @match *://*/recaptcha/api2/*
// @match *://*.gocmod.com/*
// @match *://*.api.gplinks.com/*
// @match *://*.rfaucet.com/*
// @match *://*.maloma3arbi.blogspot.com/*
// @match *://*.financenuz.com/*
// @include /^(https?:\/\/)(.+)?((inshort|youlinks|adrinolinks).in|(linkcents|nitro-link).com|clk.sh)(\/.*)/
// @match *://*.thepragatishilclasses.com/*
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech|retrocove|vaultfind|geotides|renovatehub|playallgames|countriesguide).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian|lifeprovy|chownest|mythnest|homesteadfeast|gizmoera|tastywhiz|speakzyo).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(headlinerpost.com|posterify.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @match *://*.coinilium.net/*
// @match *://*.blog.klublog.com/*
// @match *://*.dutchycorp.space/*
// @match *://*.financedoze.com/*
// @match *://*.shortfaster.net/*
// @match *://*.triggeredplay.com/*
// @match *://*.ouo.io/*
// @match *://*.adbtc.top/*
// @match *://*.linkbox.to/*
// @match *://*.modsfire.com/*
// @match *://*.the2.link/*
// @match *://*.keeplinks.org/*
// @match *://*.forex-22.com/*
// @match *://*.1shortlink.com/*
// @match *://*.1short.io/*
// @match *://*.disheye.com/*
// @match *://*.aysodamag.com/*
// @match *://*.cryptonewssite.rf.gd/*
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.revlink.pro/*
// @match *://*.panyhealth.com/*
// @match *://*.minhapostagem.top/*
// @match *://*.playpaste.com/*
// @match *://*.sfl.gl/*
// @match *://*.lanza.me/*
// @match *://*.jioupload.icu/*
// @match *://*.lolinez.com/*
// @match *://*.shortlinks2btc.somee.com/*
// @match *://*.kisalt.digital/*
// @match *://*.linksly.co/*
// @match *://*.lksfy.com/*
// @match *://*.almontsf.com/*
// @match *://*.rotizer.net/*
// @match *://*.render-state.to/*
// @match *://*.linkforearn.com/*
// @match *://*.downfile.site/*
// @match *://*.enlacito.com/*
// @match *://*.adtival.network/*
// @match *://*.imagereviser.com/*
// @match *://*.amanguides.com/*
// @match *://*.stockmarg.com/*
// @match *://*.8tm.net/*
// @match *://*.bestfonts.pro/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.paycut.pro/*
// @match *://*.forex-trnd.com/*
// @match *://*.mohtawaa.com/*
// @match *://*.knowiz0.blogspot.com/*
// @match *://*.sharetext.me/*
// @match *://*.apkw.ru/*
// @match *://*.comohoy.com/*
// @match *://*.4fnet.org/*
// @match *://*.alorra.com/*
// @match *://*.adoc.pub/*
// @match *://*.programasvirtualespc.net/*
// @match *://*.pdfcoffee.com/*
// @match *://*.boost.ink/*
// @match *://*.fansonlinehub.com/*
// @match *://*.mirrored.to/*
// @match *://*.mboost.me/*
// @match *://*.karyawan.co.id/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.creditsgoal.com/*
// @match *://*.adfoc.us/*
// @match *://*.zegtrends.com/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.bigbtc.win/*
// @match *://*.linkspy.cc/*
// @match *://*.dinheiromoney.com/*
// @match *://*.flamebook.eu.org/*
// @match *://*.rekonise.com/*
// @match *://*.vosan.co/*
// @match *://*.exblog.jp/*
// @match *://*.modcombo.com/*
// @match *://*.sub2get.com/*
// @match *://*.o-pro.online/*
// @match *://*.jobzhub.store/*
// @match *://*.curto.win/*
// @match *://*.infonerd.org/*
// @match *://*.yitarx.com/*
// @match *://*.videolyrics.in/*
// @match *://*.f2h.io/*
// @match *://*.dbree.me/*
// @match *://*.upload.ee/*
// @match *://*.gofile.io/*
// @match *://*.dddrive.me/*
// @match *://*.1fichier.com/*
// @match *://*.mp4upload.com/*
// @match *://*.takefile.link/*
// @match *://*.drop.download/*
// @match *://*.easyupload.io/*
// @match *://*.rapidgator.net/*
// @match *://*.coinsrev.com/*
// @match *://*.dropgalaxy.com/*
// @match *://*.dayuploads.com/*
// @match *://*.workupload.com/*
// @match *://*.freepreset.net/*
// @match *://*.krakenfiles.com/*
// @match *://*.file-upload.net/*
// @match *://*.uploadhaven.com/*
// @match *://*.fileresources.net/*
// @match *://*.indobo.com/*
// @match *://*.techxploitz.eu.org/*
// @match *://*.jobinmeghalaya.in/*
// @match *://*.playnano.online/*
// @match *://*.2linkes.com/*
// @match *://*.mazen-ve3.com/*
// @match *://*.apkadmin.com/*
// @match *://*.filemoon.sx/*
// @match *://*.files.fm/*
// @match *://*.k2s.cc/*
// @match *://*.katfile.com/*
// @match *://*.udrop.com/*
// @match *://*.megaupto.com/*
// @match *://*.karanpc.com/*
// @match *://*.douploads.net/*
// @match *://*.send.now/*
// @match *://*.dataupload.net/*
// @match *://*.buzzheavier.com/*
// @match *://*.bowfile.com/*
// @match *://*.dailyuploads.net/*
// @match *://*.uploadev.org/*
// @match *://*.megaup.net/*
// @match *://*.gdflix.dad/*
// @match *://*.mega4upload.net/*
// @match *://*.filespayouts.com/*
// @match *://*.uploady.io/*
// @match *://*.file-upload.org/*
// @match *://*.mexa.sh/*
// @match *://*.up-4ever.net/*
// @match *://*.hitfile.net/*
// @match *://*.servicemassar.ma/*
// @match *://*.upfion.com/*
// @match *://*.m.flyad.vip/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.mediafire.com/*
// @match *://*.downloader.tips/*
// @match *://*.modsbase.com/*
// @match *://*.filedm.com/*
// @match *://*.anonym.ninja/*
// @match *://*.oydir.com/*
// @match *://*.doodrive.com/*
// @match *://*.firefaucet.win/*
// @match *://*.cryptorotator.website/*
// @match *://*.qiwi.gg/*
// @match *://*.turbobit.net/*
// @match *://*.sharemods.com/*
// @match *://*.onlinetechsolution.link/*
// @match *://*.desiupload.co/*
// @match *://*.tempatwisata.pro/*
// @match *://*.bewbin.com/*
// @match *://*.lajangspot.web.id/*
// @match *://*.inshortnote.com/*
// @match *://*.jioupload.com/*
// @match *://*.teknoasian.com/*
// @match *://*.socialwolvez.com/*
// @match *://*.bitcotasks.com/*
// @match *://*.shortit.pw/*
// @match *://*.newsminer.uno/*
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.flickr.com/*
// @include /^(https?:\/\/)(.+)?((g34new|dlgamingvn|v34down|phimsubmoi|almontsf).com|(nashib|timbertales).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(earnbee.xyz|zippynest.online|getunic.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fc-lc|thotpacks).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offerwall.me|ewall.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(surl.li|surl.gd)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dogefury.com|thanks.tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogsward|coinjest).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((dramaticqueen|emubliss).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((grtjobs|jksb).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(askpaccosi.com|cryptomonitor.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((techleets|bonloan).xyz|sharphindi.in|nyushuemu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((jobmatric|carjankaari).com|techsl.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((devnote|formshelp|rcccn).in|djbassking.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cutnet.net|(cutyion|cutynow|cuttlinks).com|(exego|cety).app|(jixo|jizo|gamco).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((zygina|jansamparks).com|(loanifyt|getknldgg).site|topshare.in|btcon.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financewada|utkarshonlinetest).com|financenova.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(setroom.biz.id|travelinian.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(wp.thunder-appz.eu.org|blog.adscryp.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in|vi-music.app)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech|cointox.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(solidcoins.net|fishingbreeze.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((superheromaniac|spatsify|mastkhabre|ukrupdate).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bestloansoffers|worldzc).com|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techkhulasha.com|itijobalert.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lakhisarainews|vahanmitra24).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(autodime.com|cryptorex.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bchlink|usdlink).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(pubghighdamage.com|anmolbetiyojana.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(aylink.co|cpmlink.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|owoanime|hyperkhabar).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(litecoin.host|cekip.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ify.ac|go.linkify.ru)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financedoze|topjanakri|stockbhoomi).com|techhype.in|getpdf.net|cryptly.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((importantclass|hamroguide).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tejtime24|drinkspartner|sportswordz|newspute).com|(raftarsamachar|gadialert|jobinmeghalaya|raftarwords).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(anonymfile.com|sharefile.co|gofile.to)(\/.*)/
// @include /^(https?:\/\/)(.+)?((carbikesupdate|carbikenation).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ez4mods|game5s|sharedp|fastcars1|carbikenation).com|tech5s.co|a4a.site|rcccn.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(4hi.in|(10short|animerigel|encurt4|encurtacash).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site|tfly.link|oii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ecryptly|equickle).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((down.fast-down|down.mdiaload).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?(revly.click|(clikern|kiddyshort|adsssy).com|mitly.us|link.whf.bz|shortex.in|(easyshort|shorturlearn).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((wellness4live|akash.classicoder).com|2the.space|inicerita.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps|healthylifez|insurancemyst).com|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|sproutworkers.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinybc|phimne).com|(mgame|sportweb|bitcrypto).info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((marketrook|governmentjobvacancies|swachataparnibandh|goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub|arkarinaukrinetwork|topgeninsurance).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp|dvjobs|techawaaz).in|(biharhelp|biharkhabar).co|wastenews.xyz|biharkhabar.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot|thepragatishilclasses|indobo|pdfvale|templeshelp).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp|coinilium).net|atomicatlas.xyz|gadifeed.in|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lyricsbaazaar|ezeviral).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|(encurt4|10short).com|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|beinglink.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|(techforu|studywithsanjeet).in|uprwssp.org|gkfun.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?((suaurl|lixapk|reidoplacar|lapviral|minhamoto).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stly.link|(snaplessons|atravan|airevue|carribo|amalot).net|(stfly|shrtlk).biz|veroan.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb).com|(allnotes|sewdamp3.com|motahone|mukhyasamachar|techrain).in|(pisple|cirdro|panscu).xyz|taiyxd.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|(cegen|thunder-appz.eu).org|zaku.pro|veganab.co|skyfreecoins.top|manga4nx.site)(\/.*)/
// @match *://*.go.paylinks.cloud/*
// @match *://*.multiup.io/*
// @match *://*.social-unlock.com/*
// @match *://*.gamezigg.com/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.bloggerpemula.pythonanywhere.com/*
// @match        https://acortalink.me/*
// @match         *://linkvertise.com/*
// @match        *://bstlar.com/*
// @match        https://bypass.city/bypass?bypass=*
// @match        https://adbypass.org/bypass?bypass=*
// @match       https://fc-lc.xyz/*
// @match       https://datanodes.to/download
// @match       *://www.ryuugames.com/?eroge=*
// @match       *://anchoreth.com/r-adsh?t=i&v=*
// @match        https://paster.so/*
// @include       /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/
// @include     /comohoy.com/
// @include     /privatenudes.com\/model/
// @include     /sphinxanime.com\/short/
// @include     /japanpaw.com\/out/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /(cybercityhelp|akcartoons).in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.(us|site|cc|vip|dev|ink|click)/
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /linkspy.cc\/\/a/
// @include     /www.ovagames.com\/.*\.html$/
// @include     /((infytips|remixodiadj|bgmiaimassist).in|(cybertyrant|profitshort|technorozen|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt|betsatta|stockwallah|gtxhosty|anyrojgar).com|mphealth.online|hubdrive.me|advisecreate.fun|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|offerboom.top|kvkparbhani.org)/
// @include     /short-ly.co/
// @include     /uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/
// @include     /blogging.techworldx.net|10beasts.biz/
// @include     /starsddl.me\/short/
// @include     /(tech|technews).unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /epicload.com\/files/
// @include     /www.gtaall.com\/get-manual/
// @include     /woowebtools.com|pallabmobile.in/
// @include     /doodrive.com\/f/
// @include     /ipamod.com\/redirect-to/
// @include     /9xflix\.(\w+)\/m\/goto/
// @include     /bookszone.in/
// @include     /yoshare.net/
// @include     /blog.disheye.com/
// @include     /reminimod.co/
// @include     /techrayzer.com/
// @include     /techfizia.com/
// @include     /tech5s.co/
// @include     /ez4mods.com/
// @include     /ez4short.com|zshort.io|lkfms.pro/
// @include     /learnmany.in/
// @include     /lksfy.in/
// @include     /droplink.co/
// @include     /lnks.primarchweb.in/
// @include     /highkeyfinance.com/
// @include     /toonhub4u.net\/redirect\/main.php\?url=/
// @include     /toonhub4u\.net\/([^\/]+)\/$/
// @include     /mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/
// @include     /aipebel.com/
// @include     /raretoonsindia.rtilinks.com/
// @include     /(do|fast).rtilinks.com/
// @include     /vidhidepro.com\/d/
// @include     /www.mirrored.to\/files\/(?!.*\?hash=)/
// @include     /skyve.io/
// @include     /(itradercoin|nichapk|easyworldbusiness|riveh).com/
// @include     /blog.filepresident.com/
// @include     /gyanigurus.net\/view/
// @include     /mkvmoviespoint.casa\/goto/
// @include     /w.linkspoint.net/
// @include     /kingshortener.com/
// @include     /gdslink.xyz/
// @include     /financeyogi.net/
// @include     /jrlinks.in/
// @include     /go.tnshort.net/
// @include     /www.4fnet.org\/goto/
// @include     /(linkmo.net|adpayl.ink)\/[^?]+\?data=.+$/
// @include     /musicc.xyz/
// @include     /(cravesandflames|codesnse|cloutgist|kecapku).com/
// @include     /empebau.eu\/s/
// @include     /cpmlink.net\/go/
// @include     /10short.com/
// @include     /zegtrends.com/
// @include     /icutlink.com/
// @include     /motakhokhara.blogspot.com/
// @include     /xpshort.com/
// @include     /jobzspk.xyz/
// @include     /urls.cx/
// @include     /sunci.net/
// @include     /(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url/
// @include     /antonimos.de|tiktokcounter.net|tiktokrealtime.com|tpayr.xyz|quesignifi.ca|lifgam.online|waezf.xyz|ashrfd.xyz/
// @include     /minimilionario.com\/noticia.php\?token=/
// @include     /usandoapp.com/
// @include     /v2links.(com|me)/
// @include     /(newsbawa|utkarshonlinetest|techbezzie|financewada).com/
// @include     /techtnet.com/
// @include     /asideway.com/
// @include     /web1s.asia\/api-mode/
// @include     /(linkvip|blitly).io/
// @include     /^https:\/\/megalink.pro\/[a-zA-Z0-9]+$/
// @include     /lnbz.la/
// @include     /dekhe.click|indianshortner.com|lnbz.la|oii.la|falpus.com|4ace.online|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|wordcount.im|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com|exe-urls.com|linkjust.com/
// @include     /ez4short.com\/[^\/]+\/\?token=[^\/]+$/
// @include     /shon.xyz/
// @include     /veganab.co\/\?link=/
// @include     /veganab.co/
// @include     /camdigest.com/
// @include     /tawda.xyz\/tag/
// @include     /pastebin.com\/raw/
// @include     /spacetica.com/
// @include     /linegee.net/
// @include     /(loanoffering|djmp3world).in|moonplusnews.com/
// @include     /4hi.in/
// @include     /lnk.news/
// @include     /imagereviser.com/
// @include     /upshrink.com/
// @include     /bangclinic.life/
// @include     /dow-dow-dow-dow-dow.xyz\/download\/\?id=/
// @include     /ofilmetorrent.com\/download\/\?id=/
// @include     /librospdfgratismundo.net/
// @include     /besargaji.com/
// @include     /moneyblink.com\/ready\/go\?u=/
// @include     /dw-anime.net\/short\/\?anonym=/
// @include     /fiuxy2.co\/threads/
// @include     /megalinks.info\/index.php\?v=/
// @include     /ocultandoo.blogspot.com/
// @include     /rodimalam.com/
// @include     /platinsport.com/
// @include     /(ay.live|aylink.co|gitlink.pro)\/[^\/]+$/
// @include     /(lopteapi.com|1link.vip|blitly.io|web1s.com|megalink.pro)\/[^\/]+$/
// @include     /short-url.link\/[^\/]+$/
// @include     /urlx.one\/[^\/]+$/
// @include     /trimorspacks.com|pastescript.com|updrop.link/
// @include     /earnmoneyyt.com/
// @include     /sheralinks.com/
// @include     /go.bloggingaro.com/
// @include     /land.povathemes.com/
// @include     /pahe.plus/
// @include     /www.(sinsitio.site|dixva.com)\/code\/\?go=/
// @include     /www.yitarx.com/
// @include     /myshrinker.com/
// @include     /thotpacks.xyz/
// @include     /tumangasdd.com/
// @include     /sexyforums.com\/redirect/
// @include     /forum.(sexyegirls|sorrymother).to\/redirect\?to=/
// @include     /paste.japan-paw.net\/\?v=/
// @include     /pastesmkv.xyz\/\?v=/
// @include     /ikramlar.online|segurosdevida.site/
// @include     /mh.gourlpro.com/
// @include     /playpastelinks.com/
// @include     /stfly.(cc|xyz|biz|me)|stly.link|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons|airevue).net/
// @include     /ielts-isa.edu.vn/
// @include     /flash.getpczone.com|get.rahim-soft.com/
// @include     /(surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online/
// @include     /cgsonglyricz.in|www.techhubcap.com/
// @include     /cryptings.in|vbnmx.online/
// @include     /techyblogs.in|readytechflip.com/
// @include     /wp2host.com/
// @include     /pahe.win/
// @include     /ontechhindi.com/
// @include     /thelatintwistcafe.com/
// @include     /(newshuta|5ghindi|gujaratalert|mahitimanch|gujmitra).in|(indiamaja|thespotifypremium).com|mtmanagers.pro/
// @include     /mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org|constanteonline.com/
// @include     /animesgd.net/
// @include     /tucinehd.com\/links/
// @include     /render-state.to\/download\/\?link=/
// @include     /www.lanoticia.cc/
// @include     /altearnativasa.com/
// @include     /importantclass.com/
// @include     /bebkub.com/
// @include     /kbconlinegame.com/
// @include     /owoanime.com/
// @include     /keedabankingnews.com/
// @include     /secure.moderngyan.com/
// @include     /earnbox.sattakingcharts.in/
// @include     /set.seturl.in/
// @include     /links.kmhd.net/
// @include     /mastramstories.com\/api.php\?api/
// @include     /onlinetntextbooks.com/
// @include     /www.saferoms.com\/\?go=/
// @include     /hdpastes.com\/\?v=/
// @include     /shrinkforearn.in/
// @include     /encurtads.net|financacerta.com/
// @include     /shrtbr.com/
// @include     /dramaday.me\/[^\/]+\/$/
// @include     /^https:\/\/(fitdynamos.com|labgame.io)\/.*$/
// @include     /mobilenagari.com|defencewallah.in/
// @include     /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime|careersides).com|(sabarpratham|pubprofit|sarkariyojnaa|reliablesp).in|dear-lottery.org/
// @include     /rocklinks.in/
// @include     /www.udlinks.com/
// @include     /techkhulasha.com|blog.bloggerishyt.in/
// @include     /golink.bloggerishyt.in/
// @include     /skillheadlines.in/
// @include     /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in|payalgaming.co.in/
// @include     /www.spaste.com/
// @include     /click.convertkit-mail.com/
// @include     /hubcloud.(club|dad)\/tg\/go.php\?re=/
// @include     /bgmiaimassist.in|(stockwallah|inventoryidea).com/
// @include     /^https:\/\/relampagomovies\.com\/.+/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|(tejtime24|cyberlynews|quizrent).com/
// @include     /linkshortify.in|lksfy.com/
// @include     /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/
// @include     /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /delpez.com/
// @include     /mendationforc.info/
// @include     /paster.gg/
// @include     /go.zovo.ink/
// @include     /^https:\/\/kisalt\.com\/.*/
// @include     /((ukrupdate|mastkhabre).com|aryx.xyz)/
// @include     /app.link2unlock.com/
// @include     /freemodsapp.in/
// @include     /pandaznetwork.com/
// @include     /(upfiles.app|haxi.online|upfion.com)/
// @include     /dailyuploads.net/
// @include     /app2.olamovies.download\/generate\/\?id=/
// @include     /((btcut|linkslice|zshort).io|easy4skip.com|lkfms.pro|droplink.co)\/.*\?token=.*/
// @include     /foodtechnos.in/
// @include     /mixrootmod.com/
// @include     /zaku.pro/
// @include     /aylink.co|cpmlink.pro/
// @include     /hypershort.com/
// @include     /instaserve.net|gomob.xyz|gamechilly.online|instanders.app/
// @include     /(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/
// @include     /tech.hipsonyc.com|itijobalert.in/
// @include     /golink.(gyanitheme.com|bloggerishyt.in)/
// @include     /pxanimeurdu.com/
// @include     /techarmor.xyz/
// @include     /get.cloudfam.io/
// @include     /monoschinos.club/
// @include     /(pelistop.xyz|tuconstanteonline.com|librolandia.cc|posicionamientoweb.click|dietadisociada.info)/
// @include     /subtituladas.org\/enlace/
// @include     /flycutlink.com/
// @include     /drop.download/
// @include     /file-upload.org/
// @include     /up-4ever.net/
// @include     /frdl.is/
// @include     /mega4upload.net/
// @include     /filespayouts.com/
// @include     /loanoffer.cc/
// @include     /count.vipurl.in/
// @include     /(smartfeecalculator|thecubexguide).com|(djxmaza|jytechs|gujjukhabar).in/
// @include     /goo.st/
// @include     /safez.es/
// @include     /acorte.xyz/
// @include     /sastainsurance.xyz/
// @include     /link4earn.com/
// @include     /kaomojihub.com/
// @include     /vplink.in/
// @include     /^https:\/\/devuploads\.com\/.*/
// @include     /link.paid4link.com/
// @include     /smallshorts.com/
// @include     /ffindia.in/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me)(\/.*)/
// @include     /^(https?:\/\/)(.+)?((mega-enlace|acortados).com|tulink.org)/
// @include     /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/
// @include     /quickeemail.com/
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|(accounts|studio).youtube|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/(?!(www\.google\.com\/(recaptcha\/|url)|docs\.google\.com\/|drive\.google\.com\/)).*google\..*/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
// ================================================================================================================================================================
//                                          PLEASE READ SCRIPT INFO BEFORE USE
//                                      PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                 PLEASE DON'T REMOVE OR CHANGE MY BLOG, DISABLE YOUR ADBLOCK IN MY BLOG , THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 , @juansi , @NotYou , @cunaqr And @Rust1667 for Helping me , make my script even better
//                        Thanks so much to @varram for providing a Great Bypass Site bypass.city and adbypass.org
//                                And also Thank you to everyone who has Contributed with Good Feedback.
// =================================================================================================================================================================
// NOTES
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
// What do you think if I move all the code to my own server, so people who can only duplicate my script and change the code as they wish, will not be able to do it anymore?
// Say thank you to the donors by leaving good feedback, because of them I am more enthusiastic to improve the quality and add new features to the script.
// My Scripts Works in All Browsers and All Userscript Extensions , But Better if You Use Firefox Browser and Violentmonkey

(function() {
'use strict';
  const ScInfo = "1. Support Me Via https://saweria.co/Bloggerpemula or Crypto(Check Homepage)\n2. Teal Features=> Sometimes Causes Problems , use Your own Trial Error\n3. Red Features=> I Turned Off the Feature until the Duplicate Script was Removed. (Read Script Info)";
  const cfg = new MonkeyConfig({title: 'Bypass All Shortlinks Version 96.5 Settings',menuCommand: 'Open Bypass Settings',shadowWidth: '630px',shadowHeight: '450px',iframeWidth: '600px',iframeHeight: '400px',
  params: {Announcements: {type: 'textarea',label: 'Announcements',fontColor: "#0000ff",default: ScInfo,column: 'top',labelAlign: 'center',rows: 5,cols: 50},
    BlogDelay: {label: 'Auto Delay in My Blog', type: 'checkbox', default: false,column: 'right&top'},
    SetDelay: {label: '=', type: 'number', default: 5,column: 'right&top', inputWidth: '40px'},
    TimerFC: {label: 'Enable Fast Timer', type: 'checkbox', fontColor: "#008080", default: false, column: 'left&top'},
    TDelay: {label: '=', type: 'number', fontColor: "#008080", default: 1000, column: 'left&top'},
    RightFC: {label: 'Enable Context Menu',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    BlockFC: {label: 'Enable Always Ready',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    BlockPop: {label: 'Enable Popup Blocker',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    AntiDebug: {label: 'Enable Anti Debug & Log Cleared',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    Audio: {label: 'Auto Solve Recaptcha Audio Mode',type: 'checkbox',fontColor: "#FF0000",default: false,column: 'left'},
    YTShort: {label: 'Disable Youtube Short',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#008080"},
    Adblock: {label: 'Disable Adblock Detections',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#008080"},
    Prompt: {label: 'Disable Prompts & Notifications',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#008080"},
    Anima: {label: 'Disable All Animations',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#008080"},
    hCaptcha: {label: 'Auto Open Hcaptcha',type: 'checkbox',default: false,column: 'right'},
    SameTab: {label: 'Auto Open Links Same Tabs',type: 'checkbox',default: false,column: 'right'},
    Flickr: {label: 'Auto Save Images From Flickr',type: 'checkbox',default: false,column: 'right'},
    YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'},
    AutoDL: {label: 'Auto Download For Supported Sites',type: 'checkbox',default: true,column: 'right'}}});
  const bp = function(query, all = false) {const containsMatch = query.match(/:contains\("([^"]+)"\)$/);const innerTextMatch = query.match(/:innerText\("([^"]+)"\)$/);const hasMatch = query.match(/:has\(([^)]+)\)$/);let baseQuery, text, childSelector, useInnerText;
    if (containsMatch) {baseQuery = query.replace(/:contains\("[^"]+"\)$/, '');text = containsMatch[1];useInnerText = false;} else if (innerTextMatch) {baseQuery = query.replace(/:innerText\("[^"]+"\)$/, '');text = innerTextMatch[1];useInnerText = true;} else if (hasMatch) {
    baseQuery = query.replace(/:has\([^)]+\)$/, '');childSelector = hasMatch[1];text = null;useInnerText = false;} else {baseQuery = query;text = null;useInnerText = false;}const elements = document.querySelectorAll(baseQuery);if (!text && !childSelector && !all) return document.querySelector(baseQuery);
    if (all && !text && !childSelector) return elements;if (hasMatch) {const filtered = Array.from(elements).filter(el => el.querySelector(childSelector));return all ? filtered : filtered[0] || null;}
    if (text) {const filtered = Array.from(elements).filter(el => {const content = (useInnerText ? el.innerText : el.textContent).trim();return content.toLowerCase().includes(text.toLowerCase());});return all ? filtered : filtered[0] || null;}return all ? elements : elements[0] || null;};
  const BpParams = new URLSearchParams(location.search);const elementExists = query => bp(query) !== null;const BpT = query => document.getElementsByTagName(query);
  function BpBlock() {return 1;}
  function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}
  function fakeHidden() {Object.defineProperty(document, "hidden", {get: () => true,configurable: true});}
  function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), {name: 'referrer',content: 'origin'}));
    Object.assign(document.createElement('a'), {href}).click();}
  function redirect(url, blog = false) {location = blog && cfg.get('BlogDelay') ? '' + url : url;}
  function setActiveElement(selector) {elementReady(selector).then(element => {const temp = element.tabIndex;element.tabIndex = 0;element.focus();element.tabIndex = temp;});}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function DecodeBase64(string, times = 1) {let decodedString = string;for (let i = 0; i < times; i++) {decodedString = atob(decodedString);}return decodedString;}
  function Decrypter(string, shift = 13) {return string.replace(/[a-z]/gi, c => {const base = c <= 'Z' ? 90 : 122;return String.fromCharCode(base >= (c = c.charCodeAt(0) + shift) ? c : c - 26);});}
  function waitForElm(query, callback, maxWaitTime = 15, initialDelay = 5) {const startTime = Date.now();const maxWaitTimeMs = maxWaitTime * 1000;const initialDelayMs = initialDelay * 1000;
    setTimeout(() => {const observer = new MutationObserver(() => {if (elementExists(query)) {observer.disconnect();callback(bp(query));} else if (Date.now() - startTime >= maxWaitTimeMs + initialDelayMs) {
          observer.disconnect();BpNote(`Element ${query} not found within ${maxWaitTime + initialDelay} seconds`, 'warn');}});observer.observe(document.body, {childList: true,subtree: true});
      if (elementExists(query)) {observer.disconnect();callback(bp(query));}}, initialDelayMs);}
  function SameTab() {Object.defineProperty(unsafeWindow, 'open', {value: function(url) {if (url) {location.href = url;BpNote(`Forced window.open to same tab: ${url}`);}return null;},writable: false,configurable: false});
    document.addEventListener('click', (e) => {const target = e.target.closest('a[target="_blank"]');if (target && target.href) {e.preventDefault();location.href = target.href;BpNote(`Redirected target="_blank" to same tab: ${target.href}`);}}, true);
    document.addEventListener('submit', (e) => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();location.href = form.action;BpNote(`Redirected form target="_blank" to same tab: ${form.action}`);}}, true);}
  function BlockRead(SearchString, nameFunc) {if (CloudPS(true, true, false)) return;try {if (typeof window[nameFunc] !== 'function') {BpNote(`Function ${nameFunc} not found or not a function`, 'warn');return;}const target = window[nameFunc];
    window[nameFunc] = function(...args) {try {const callback = args[0];const stringFunc = callback && typeof callback === 'function' ? callback.toString() : '';const regex = new RegExp(SearchString, 'i');if (regex.test(stringFunc)) {args[0] = function() {};}
    return target.call(this, ...args);} catch (err) {console.error(`Error in overridden ${nameFunc}:`, err);return target.call(this, ...args);}};} catch (err) {console.error('Error in BlockRead:', err);}}
  function strBetween(s, front, back, trim = false) {if (typeof s !== 'string' || s.indexOf(front) === -1 || s.indexOf(back) === -1) return '';const start = s.indexOf(front) + front.length;const end = s.indexOf(back, start);
    if (start >= end) return '';let result = s.slice(start, end);if (trim) {result = result.replaceAll(' ', '');result = result.trim();result = result.replaceAll('\n', ' ');} else {result = result.trim();}return result.replace(/['"]/g, '');}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const userEvents = ["mousemove", "touchstart"];const selectors = selector.split(', ');if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}
    if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}userEvents.forEach(eventName => {const eventObject = new Event(eventName, {bubbles: true});document.dispatchEvent(eventObject);});
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true,cancelable: true,});element.dispatchEvent(eventObject);});});}
  function StopAnima() {const addStyles = () => {const style = document.createElement('style');style.textContent = '* { animation: none !important; transition: none !important; }';(document.head || document.documentElement).appendChild(style);};
    const removeAnimationClasses = () => {bp('[class*="animate"], [class*="fade"], [class*="slide"], [class*="particles-js"], [class*="background"], [id*="animate"], [id*="fade"], [id*="slide"], [id*="particles-js"], [id="canvas"], [id="background"]',true).forEach(el => {
    el.classList.remove(...Array.from(el.classList).filter(cls => cls.includes('animate') || cls.includes('fade') || cls.includes('slide') || cls.includes('particles-js') || cls.includes('background')));if (el.classList.contains('particles-js-canvas-el') ||
    el.id === 'particles-js' || el.id === 'canvas' || el.id === 'background' || el.tagName.toLowerCase() === 'canvas') {el.remove();}});};const disableParticleEngines = () => {if (unsafeWindow.particlesJS) {unsafeWindow.particlesJS = () => {BpNote('Particles.js initialization blocked');};}
    if (unsafeWindow.tsParticles) {unsafeWindow.tsParticles.load = () => {BpNote('tsParticles initialization blocked');return Promise.resolve();};unsafeWindow.tsParticles.domItem = () => null;}};const execute = () => {addStyles();removeAnimationClasses();disableParticleEngines();};
    if (document.readyState !== 'loading' && document.head && document.body) {execute();} else {document.addEventListener('DOMContentLoaded', execute, { once: true });}new MutationObserver(removeAnimationClasses).observe(document, { childList: true, subtree: true });}
  function BpNote(message, level = 'info', caller = 'BloggerPemula') {const timestamp = new Date().toLocaleTimeString();const context = window.self === window.top ? 'top' : 'iframe';
    const BpMessage = `[BASS V96.5] ${timestamp} [${context}] - ${level.toUpperCase()} From ${caller}: ${message}`;switch (level) {case 'warn':console.warn(BpMessage);break;case 'error':console.error(BpMessage);break;case 'debug':console.log(BpMessage);break;default:console.log(BpMessage);}}
  function EnableRCF() {if (CloudPS(true, true, false)) return;var events = ['contextmenu', 'copy', 'cut', 'paste', 'select', 'selectstart','dragstart', 'drop'];function preventDefaultActions(event) {event.stopPropagation();}events.forEach(function(eventName) {document.addEventListener(eventName, preventDefaultActions, true);});}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function Listener(callback) {if (CloudPS(true, true, true)) return;const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", () => { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function RSCookie(action, name, value = null, days = null) {if (action === 'set') {if (!name || value === null) {BpNote('Nama cookie dan nilai harus disediakan untuk mode "set".', 'error');return;}const date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = days ? `; expires=${date.toUTCString()}` : '';document.cookie = `${name}=${value}${expires}; path=/`;BpNote(`Cookie "${name}" telah diatur dengan nilai "${value}".`);} else if (action === 'read') {
    if (!name) {BpNote('Nama cookie harus disediakan untuk mode "read".', 'error');return;}const cookieName = name + "=";const decodedCookie = decodeURIComponent(document.cookie);const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {let cookie = cookieArray[i];while (cookie.charAt(0) === ' ') {cookie = cookie.substring(1);}if (cookie.indexOf(cookieName) === 0) {return cookie.substring(cookieName.length, cookie.length);}}return "";} else {BpNote('Mode tidak valid. Gunakan "set" atau "read".', 'error');}}
  function CloudPS(checkFrames = false, captchaSite = false, checkFlare = true) {if (checkFrames && window.self !== window.top) {BpNote('Bypass Function Canceled Because Iframe Detected ', 'info');return true;}if (checkFlare && document.title === 'Just a moment...' || elementExists('.spacer-top.spacer.core-msg')) {BpNote("Bypass Function Canceled on Cloudflare Page ", 'info');return true;}
    if (captchaSite) {const captchaDomains = [/\.google\.com$/,/\.recaptcha\.net$/,/\.hcaptcha\.com$/,/\.cloudflare\.com$/];const host = location.host.toLowerCase();if (captchaDomains.some(regex => regex.test(host))) {BpNote(`Bypass Function Canceled on This Sites`, 'info');return true;}}return false;}
  function notify(txt, clicktocopy = false, clicktoclose = false, duration = cfg.get('SetDelay')) {const m = document.createElement('div');m.style.padding = '10px 20px';m.style.zIndex = 10000;m.style.position = 'fixed';m.style.width = `970px`;m.style.top = '10px';m.style.transform = 'translateX(-50%)';
    m.style.left = '50%';m.style.fontFamily = 'Arial, sans-serif';m.style.fontSize = '16px';m.style.color = 'white';m.style.textAlign = 'center';m.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';m.style.boxSizing = 'border-box';m.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';m.style.cursor = 'pointer';
    const mainText = document.createElement('div');mainText.innerText = txt.replace('@', duration);m.appendChild(mainText);const actionText = document.createElement('span');actionText.style.position = 'absolute';actionText.style.right = '10px';actionText.style.bottom = '5px';actionText.style.fontSize = '12px';actionText.style.color = 'white';actionText.style.userSelect = 'none';
    if (clicktocopy) {actionText.innerText = 'Click to Copy';} else if (clicktoclose) {actionText.innerText = 'Click to Close';}m.appendChild(actionText);document.body.appendChild(m);m.addEventListener('click', () => {if (clicktocopy) {navigator.clipboard.writeText(txt.replace('@', duration)).then(() => {mainText.innerText = 'Copied to clipboard!';
    setTimeout(() => {document.body.removeChild(m);clearInterval(timerId);}, 1000);}).catch(err => {console.error('Failed to copy text: ', err);});}if (clicktoclose) {document.body.removeChild(m);clearInterval(timerId);}});const timerId = setInterval(() => {duration -= 1;if (duration <= 0) {clearInterval(timerId);} else {mainText.innerText = txt.replace('@', duration);}}, 1000);}
  function NoFocus() {if (CloudPS(true, true, false)) return;window.mouseleave = true;window.onmouseover = true;document.hasFocus = () => true;if (!Object.getOwnPropertyDescriptor(document, 'webkitVisibilityState')?.get) {Object.defineProperty(document, 'webkitVisibilityState', {get: () => 'visible',configurable: true});}
    if (!Object.getOwnPropertyDescriptor(document, 'visibilityState')?.get) {Object.defineProperty(document, 'visibilityState', {get: () => 'visible',configurable: true});}if (!Object.getOwnPropertyDescriptor(document, 'hidden')?.get) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}
    const eventOptions = {capture: true,passive: true};const ensureVisibility = () => {if (document.hidden !== false) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}};ensureVisibility();window.addEventListener('focus', e => e.stopImmediatePropagation(), eventOptions);window.addEventListener('blur', e => e.stopImmediatePropagation(), eventOptions);}
  function CaptchaDone(callback, checkInterval = 1000) {if (CloudPS()) return;const window = unsafeWindow;if (typeof callback !== 'function') {BpNote('Callback harus berupa fungsi', 'error');return;}let intervalId;
    const checkCaptcha = () => {try {if (elementExists('.iconcaptcha-modal__body-checkmark')) {clearInterval(intervalId);callback();return;}
    if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {if (window.hcaptcha && typeof window.hcaptcha.getResponse === 'function') {const response = window.hcaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("input[name='cf-turnstile-response']")) {if (window.turnstile && typeof window.turnstile.getResponse === 'function') {const response = window.turnstile.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("iframe[title='reCAPTCHA']")) {if (window.grecaptcha && typeof window.grecaptcha.getResponse === 'function') {const response = window.grecaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}} catch (error) {console.error('Error checking captcha:', error);}};intervalId = setInterval(checkCaptcha, checkInterval);}
  function BpAnswer(input, mode = 'math') {if (mode === 'math') {let text = input.replace(/^(Solve:|What is)\s*/i, '').replace(/[=?]/g, '').trim();text = text.replace(/[x×]/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');if (text.startsWith('sqrt(')) {const num = parseFloat(text.match(/sqrt\((\d+\.?\d*)\)/)?.[1]);return { result: num ? Math.floor(Math.sqrt(num)) : null, op: null, a: null, b: null };}
    const match = text.match(/(\d+\.?\d*)\s*([+\-*/%^])\s*(\d+\.?\d*)/);if (!match) return { result: null, op: null, a: null, b: null };const [, n1, op, n2] = match, a = parseFloat(n1), b = parseFloat(n2);const isRounded = text.includes('rounded to integer');let result;switch (op) {case '+': result = a + b; break;case '-': result = a - b; break;case '*': result = a * b; break;case '/': result = isRounded ? Math.floor(a / b) : a / b; break;
    case '%': result = a % b; break;case '**': result = Math.pow(a, b); break;default:BpNote('Operator tidak dikenal: ' + op, 'error');result = null;}return { result, op, a, b };} else if (mode === 'sum') {const numbers = input.replace(/\s/g, '').match(/[+\-]?(\d+\.?\d*)/g) || [];return numbers.reduce((sum, val) => parseFloat(sum) + parseFloat(val), 0);} else if (mode === 'captcha') {const numcode = bp('input.captcha_code');
    if (!numcode) return null;const digits = numcode.parentElement.previousElementSibling.children[0].children;return Array.from(digits).sort((d1, d2) => parseInt(d1.style.paddingLeft) - parseInt(d2.style.paddingLeft)).map(d => d.textContent).join('');}return null;}
  function DebugLog() {if (CloudPS(true, true, true)) return;const STORAGE_KEY = 'protection_tracker';let attemptCount = GM_getValue(STORAGE_KEY, 0);if (attemptCount > 0) setTimeout(() => GM_setValue(STORAGE_KEY, 0), 60000);const SavedMethods = {
    output: BpNote,trace: typeof console.debug === 'function' ? console.debug : BpNote,alert: console.warn,notice: console.info,issue: console.error,grid: typeof console.table === 'function' ? console.table : BpNote,wipe: console.clear,funcBuilder: Function.prototype.constructor,makeElement: document.createElement};
    const limits = {grid: { max: 5, timeframe: 5000 },wipe: { max: 5, timeframe: 5000 },filteredOutput: { max: 5, timeframe: 5000 },blocker: { max: 1, timeframe: 15000, count: 0, timestamp: 0 }};function canReport(category) {const restriction = limits[category] || {count: 0};if (restriction.stopped) return false;
    const currentTime = Date.now();restriction.timestamp = restriction.timestamp || currentTime;if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count > restriction.max) {restriction.stopped = true;SavedMethods.alert(`Max limit hit for ${category}`);return false;}return true;}
    Object.defineProperty(window, 'onbeforeunload', { configurable: false, writable: false, value: null });['output', 'trace', 'alert', 'notice', 'issue', 'grid'].forEach(method => {if (typeof SavedMethods[method] === 'function') {console[method] = new Proxy(SavedMethods[method], {apply: (target, context, params) => {const adjustedParams = params.map(item => {if (typeof item === 'function') return "Hidden Function";
    if (typeof item !== 'object' || !item) return item;const attributes = Object.getOwnPropertyDescriptors(item);if (attributes.toString || 'get' in attributes) return "Hidden Accessor";if (Array.isArray(item) && item.length === 50 && typeof item[0] === "object") return "Hidden BigArray";return item;});if (params.length - adjustedParams.filter(x => x === params[params.indexOf(x)]).length >= Math.max(params.length - 1, 1)) {
    if (!canReport("filteredOutput")) return;}return SavedMethods[method].apply(context, adjustedParams);}});}});['wipe'].forEach(method => {console[method] = () => canReport(method) && SavedMethods.alert(`Blocked ${method}`);});window.Function.prototype.constructor = new Proxy(SavedMethods.funcBuilder, {apply: (target, context, inputs) => {const codeText = inputs[0];if (codeText?.includes('debugger')) {attemptCount++;
    GM_setValue(STORAGE_KEY, attemptCount);if (canReport("blocker")) SavedMethods.alert(`Blocked debugger (count: ${attemptCount})`);if (attemptCount > 100) {GM_setValue(STORAGE_KEY, 0);throw new Error("Debugger overload detected");}setTimeout(() => GM_setValue(STORAGE_KEY, Math.max(0, attemptCount - 1)), 1);inputs[0] = codeText.replaceAll("debugger", "");}return target.apply(context, inputs);}});
    document.createElement = new Proxy(SavedMethods.makeElement, {apply: (target, context, args) => {const newNode = target.apply(context, args);if (args[0].toLowerCase() === "iframe") {newNode.addEventListener("load", () => {try {newNode.contentWindow.console = { ...console };newNode.contentWindow.Function.prototype.constructor = window.Function.prototype.constructor;} catch (err) {}});}return newNode;}});
    Object.keys(SavedMethods).forEach(method => {if (method in console) Object.defineProperty(console, method, { configurable: false, writable: false });});if (cfg.get('AntiDebug')) {const baseTiming = performance.now;BpNote("Performance Modified For Anti-Debug Protection");performance.now = () => baseTiming() + Math.random() * 2;}}
  function CheckVisibility(selector, operatorOrCallback, textCondition, callback, actionOnVisible = true) {if (CloudPS()) return;function isElementVisible(elem) {if (!elem) return false;if (!elem.offsetHeight && !elem.offsetWidth) return false;if (getComputedStyle(elem).visibility === 'hidden') return false;return true;}
    function checkTextCondition(textCondition) {try {const conditionParts = textCondition.split(/(==|!=)/);if (conditionParts.length !== 3) {console.error('Invalid text condition format:', textCondition);return false;}const selectorPart = conditionParts[0].trim();const selector = selectorPart.replace("bp('", "").replace("').innerText", "").trim();
    const expectedValue = conditionParts[2].trim().replace(/['"]/g, '');const elem = bp(selector);if (!elem) return false;const actualValue = elem.innerText.trim();if (conditionParts[1].trim() === '==') {return actualValue.includes(expectedValue);} else if (conditionParts[1].trim() === '!=') {return !actualValue.includes(expectedValue);}return false;} catch (error) {
    console.error('Error evaluating text condition:', error);return false;}}if (typeof operatorOrCallback === 'function') {const callbackFn = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);if ((actionOnVisible && isVisible) || (!actionOnVisible && !isVisible)) {clearInterval(intervalId);callbackFn();}} catch (error) {
    console.error('Error checking visibility:', error);}}, checkInterval);} else if (typeof operatorOrCallback === 'string' && (operatorOrCallback === '&&' || operatorOrCallback === '||')) {const operator = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);const isTextConditionMet = checkTextCondition(textCondition);
    if ((operator === '&&' && isVisible && isTextConditionMet) || (operator === '||' && (isVisible || isTextConditionMet))) {clearInterval(intervalId);callback();}} catch (error) {console.error('Error checking visibility and text condition:', error);}}, checkInterval);} else {console.error('Parameter tidak valid.');}}
  function TrustMe() {if (CloudPS(true, true, true)) return;const sandbox = new Proxy(window, {get(target, key) {if (key === 'Object') {return new Proxy(Object, {get(objTarget, objKey) {if (objKey === 'freeze') {return function(obj) {BpNote("Object.freeze disabled in sandbox.", 'warn');return obj;};}return Reflect.get(objTarget, objKey);}});}return Reflect.get(target, key);}});
    const originalAddEventListener = EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener = function(type, listener, options) {if (type === 'message' || typeof listener !== 'function') {return originalAddEventListener.call(this, type, listener, options);}const wrappedListener = function(event) {let clonedEvent;try {if (event instanceof MessageEvent) {
    clonedEvent = new MessageEvent(event.type, {data: event.data,origin: event.origin,source: event.source,lastEventId: event.lastEventId,ports: event.ports,bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});} else if (event instanceof MouseEvent) {clonedEvent = new MouseEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,clientX: event.clientX,
    clientY: event.clientY,button: event.button,buttons: event.buttons,target: event.target,currentTarget: event.currentTarget,relatedTarget: event.relatedTarget});} else if (event instanceof KeyboardEvent) {clonedEvent = new KeyboardEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,key: event.key,code: event.code,ctrlKey: event.ctrlKey,shiftKey: event.shiftKey,altKey: event.altKey,
    metaKey: event.metaKey});} else {clonedEvent = new Event(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});['target', 'currentTarget', 'eventPhase', 'timeStamp'].forEach(prop => {if (event[prop] !== undefined) {Object.defineProperty(clonedEvent, prop, {value: event[prop],writable: true,configurable: true});}});}clonedEvent = new Proxy(clonedEvent, {
    get(target, prop) {if (prop === 'isTrusted') {return true;}return Reflect.get(target, prop);}});} catch (e) {BpNote(`Failed to clone event: ${e.message}`, 'error');return listener.call(this, event);}return listener.call(this, clonedEvent);};return originalAddEventListener.call(this, type, wrappedListener, options);};return sandbox;}
  function NoPrompts() {let timeoutInterval = 1000;unsafeWindow.onbeforeunload = null;timeoutInterval = (timeoutInterval + timeoutInterval) || 1000;setTimeout(NoPrompts, timeoutInterval);window.alert = () => {};window.confirm = () => true;window.prompt = () => null;if (window.Notification) {Notification.requestPermission = () => Promise.resolve('denied');Object.defineProperty(window, 'Notification', {value: null,writable: false});}if (document.readyState !== 'loading' && document.body) {
    bp('[class*="cookie"], [id*="cookie"], [class*="consent"], [id*="consent"], [class*="banner"], [id*="banner"], [class*="gdpr"], [id*="gdpr"], [class*="privacy"], [id*="privacy"], [role="dialog"], [aria-label*="cookie"], [aria-label*="consent"], [aria-label*="privacy"], [class*="notice"], [id*="notice"]',true).forEach(banner => {if (banner.textContent.match(/cookie|consent|tracking|gdpr|privacy|accept|agree|decline|manage|preferences/i)) {banner.style.display = 'none';banner.remove();}});}}
  function BoostTimers(targetDelay) {if (CloudPS(true, true, true)) return;const limits = {setTimeout: { max: 1, timeframe: 5000, count: 0, timestamp: 0 },setInterval: { max: 1, timeframe: 5000, count: 0, timestamp: 0 }};function canLog(type) {const restriction = limits[type];const currentTime = Date.now();
    if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count <= restriction.max) {return true;}return false;}const wrapTimer = (orig, type) => (func, delay, ...args) => orig(func, (typeof delay === 'number' && delay >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${delay}ms to ${targetDelay}ms`), 50) : delay, ...args);
    try {Object.defineProperties(unsafeWindow, {setTimeout: { value: wrapTimer(unsafeWindow.setTimeout, 'setTimeout'), writable: true, configurable: true },setInterval: { value: wrapTimer(unsafeWindow.setInterval, 'setInterval'), writable: true, configurable: true }});} catch (e) {const proxyTimer = (orig, type) => new Proxy(orig, {
            apply: (t, _, a) => t(a[0], (typeof a[1] === 'number' && a[1] >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${a[1]}ms to ${targetDelay}ms`), 50) : a[1], ...a.slice(2))});unsafeWindow.setTimeout = proxyTimer(unsafeWindow.setTimeout, 'setTimeout');unsafeWindow.setInterval = proxyTimer(unsafeWindow.setInterval, 'setInterval');}}
  function AIORemover(action, target = null, attributes = null) {switch (action) {case 'removeRef':delete document.referrer;document.__defineGetter__('referrer', () => target || '');BpNote('Referrer removed or set to:', target || 'empty');break;case 'removeBp':if (!target) {BpNote('Selector is required for removeBp action.', 'error');return;}var elements = bp(target, true);elements.forEach(element => element.remove());BpNote(`Elements with selector "${target}" removed.`);break;
    case 'delCookie':if (!target) {BpNote('Cookie name is required for delCookie action.', 'error');return;}document.cookie = `${target}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;BpNote(`Cookie "${target}" deleted.`);break;case 'removeAttr':if (!target || !attributes) {BpNote('Selector and attributes are required for removeAttr action.', 'error');return;}var attrs = Array.isArray(attributes) ? attributes : [attributes];var validAttrs = ['onclick', 'class', 'target', 'id'];var invalidAttrs = attrs.filter(a => !validAttrs.includes(a));
    if (invalidAttrs.length) {BpNote(`Invalid attributes: ${invalidAttrs.join(', ')}`, 'error');return;}var attrElements = bp(target, true);if (!attrElements.length) {BpNote(`No elements found for selector "${target}"`, 'error');return;}attrElements.forEach(element => {attrs.forEach(attr => element.removeAttribute(attr));});BpNote(`Attributes ${attrs.join(', ')} Removed`);break;case 'noAdb':var blockPattern, allowedDomains = null;if (target instanceof RegExp) {blockPattern = target;} else if (target && target.blockPattern) {
    blockPattern = target.blockPattern;allowedDomains = target.allowedDomains || null;} else {BpNote('blockPattern is required for noAdb action.', 'error');return;}var currentDomain = window.location.hostname;if (allowedDomains && !allowedDomains.test(currentDomain)) {BpNote(`NoAdb: Domain ${currentDomain} not allowed.`, 'info');return;}var regAdb = new RegExp(blockPattern);new MutationObserver(mutations => {mutations.forEach(mutation => {mutation.addedNodes.forEach(node => {
    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {const source = node.src || node.textContent || '';if (regAdb.test(source)) {node.remove();}}});});}).observe(document, {childList: true,subtree: true});bp('script, iframe', true).forEach(element => {const source = element.src || element.textContent || '';if (regAdb.test(source)) {element.remove();}});BpNote(`NoAdb: Initialized blocking for pattern "${blockPattern}".`);break;default: BpNote('Invalid action. Use Existing Cases', 'error');}}
  function DoIfExists(query, actionOrTime = 'click', timeInSecOrFuncName = 1, funcName = 'setTimeout') {let action = 'click';let time = 1;let timerFuncName = 'setTimeout';if (typeof actionOrTime === 'number') {time = actionOrTime;timerFuncName = typeof timeInSecOrFuncName === 'string' ? timeInSecOrFuncName : 'setTimeout';} else if (typeof actionOrTime === 'string') {action = actionOrTime;time = typeof timeInSecOrFuncName === 'number' ? timeInSecOrFuncName : 1;timerFuncName = typeof funcName === 'string' ? funcName : 'setTimeout';}
    function GetForm(FormName) {const forms = document.forms;for (let i = 0; i < forms.length; i++) {if (FormName === 'mdn') {const form = forms[i].innerHTML;if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {const bait = forms[i].action;if (/bypass.html|adblock.html/.test(bait)) continue;return forms[i];}}return null;}
    let element;if (query === 'mdn' || query === 'Allin1') {element = GetForm(query);} else {element = bp(query);}if (element) {if (typeof element[action] === 'function') {if (timerFuncName === 'setTimeout' || timerFuncName === 'setInterval') {const timerFunc = window[timerFuncName];if (timerFuncName === 'setTimeout') {timerFunc(() => {
    try {element[action]();BpNote(`Action "${action}" was successfully executed on element "${query}".`);} catch (error) {console.error(`Action "${action}" failed on element "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Action "${action}" was successfully executed on element "${query}".`);} else {BpNote(`Element "${query}" not found.`,'error');
    clearInterval(intervalId);}} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);clearInterval(intervalId);}}, time * 1000);BpNote(`Interval ID: ${intervalId}`);}} else {BpNote(`Timer tidak valid. Gunakan "setTimeout" atau "setInterval".`,'error');}} else {BpNote(`Elemen "${query}" tidak memiliki metode "${action}".`,'error');}} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');}}
  function BypassedByBloggerPemula(match, exclude, data, url = '', blog = false, all = false) {if (CloudPS()) return;if (typeof exclude === 'function') {data = exclude;exclude = null;url = '';blog = false;all = false;}if (!new RegExp(match).test(location.host)) return;if (exclude && new RegExp(exclude).test(location.host)) {BpNote(`Domain ${location.host} Excluded`, 'info');return;}if (typeof data === 'function') {try {data();} catch (e) {BpNote(`Error executing function data: ${e.message}`, 'error');}return;}
    if (typeof data === 'string') {const params = data.split(',');if (params.every(p => BpParams.has(p.replace(/\+[0-9]+/, '')))) {const use = params[0];let value = all ? BpParams.getAll(use.replace(/\+[0-9]+/, '')).find(u => new RegExp(match).test(u)) : BpParams.get(use.replace(/\+[0-9]+/, ''));if (!value || value.includes('st?')) {value = extractFlexibleUrl(use);}if (value) redirect(url + value, blog);} else {const value = extractFlexibleUrl(data);if (value) redirect(url + value, blog);}return;}let dataObj = data;
    if (Array.isArray(data)) {dataObj = {'/': data};}if (typeof dataObj !== 'object' || dataObj === null) {BpNote('Invalid data type: data must be a function, string, array, or object', 'error');return;}if (!(location.pathname in dataObj)) {BpNote(`Pathname ${location.pathname} not found in data`, 'info');return;}const [key, value] = dataObj[location.pathname];let finalValue = '';if (typeof key === 'object' && key.test(location.search)) {finalValue = value + RegExp.$1;} else if (BpParams.has(key)) {finalValue = value + BpParams.get(key);} else {finalValue = extractFlexibleUrl('url');}
    if (finalValue) redirect(url + finalValue, blog);function extractFlexibleUrl(dataString) {const currentUrl = window.location.href;const urlParams = currentUrl.split('&url=');if (urlParams.length < 2) {BpNote('Not enough URL parameters to extract', 'warn');return null;}let partsToTake = 1;if (dataString.match(/url\+(\d+)/)) {partsToTake = parseInt(dataString.match(/url\+(\d+)/)[1]);}if (partsToTake > urlParams.length - 1) {BpNote(`Requested parts (${partsToTake}) exceed available URL parameters (${urlParams.length - 1})`, 'warn');partsToTake = urlParams.length - 1;}let extractedUrl = '';
    if (partsToTake === 1) {extractedUrl = urlParams[urlParams.length - 1];} else {const startIndex = urlParams.length - partsToTake;extractedUrl = urlParams.slice(startIndex).join('&url=');}try {extractedUrl = decodeURIComponent(extractedUrl);} catch (e) {BpNote('Error decoding extracted URL: ' + e, 'error');}return extractedUrl;}}
  function BlockPopup() {const window = unsafeWindow;const originalOpen = window.open;function createNotification(url, callback) {const div = document.createElement('div');div.className = 'popup-notification';const shadow = div.attachShadow({mode: 'open'});
      shadow.innerHTML = `<style>:host { position: fixed; top: 15px; right: 15px; z-index: 9999; font-family: Arial, sans-serif; }.popup { background: #fff; border: 2px solid #333; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 350px; border-radius: 5px; }.title { font: bold 16px Arial; color: #000; margin-bottom: 10px; padding-right: 20px; position: relative; }.url { font-size: 14px; color: #222; word-break: break-all; background: #f5f5f5; padding: 8px; border-radius: 3px; margin-bottom: 15px; }.buttons { display: flex; gap: 10px; }
      button { font: bold 14px Arial; padding: 8px 15px; cursor: pointer; border: none; border-radius: 3px; transition: background 0.2s; }.allow { background: #4CAF50; color: #fff; } .allow:hover { background: #45a049; }.block { background: #f44336; color: #fff; } .block:hover { background: #da190b; }.whitelist { background: #2196F3; color: #fff; opacity: 0.6; cursor: not-allowed; }.reload { background: #FFC107; color: #000; } .reload:hover { background: #FFB300; }.close { position: absolute; top: 0; right: 0; background: none; border: none; font-size: 16px; cursor: pointer; color: #333; }.close:hover { color: #f44336; }
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector('.allow').onclick = () => {callback(true);remove();};shadow.querySelector('.block').onclick = () => {callback(false);remove();};shadow.querySelector('.reload').onclick = () => {window.location.reload();remove();};
      shadow.querySelector('.close').onclick = () => {callback(false);remove();};bp('.popup-notification')?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula('gocmod.com', null, 'urls', '');
  BypassedByBloggerPemula('api.gplinks.com', null, 'url', '');
  BypassedByBloggerPemula('rfaucet.com', null, 'linkAlias', '');
  BypassedByBloggerPemula('maloma3arbi.blogspot.com', null, 'link', '');
  BypassedByBloggerPemula('financenuz.com', null, 'url', 'https://financenuz.com/?web=');
  BypassedByBloggerPemula(/coinilium.net/, () => {if (BpParams.has('id')) {location = atob(BpParams.get('id'));}});
  BypassedByBloggerPemula('(inshort|youlinks|adrinolinks).in|(linkcents|nitro-link).com|clk.sh', null, 'url+2', '');
  BypassedByBloggerPemula('thepragatishilclasses.com', null, 'url', 'https://thepragatishilclasses.com/?adlinkfly=');
  BypassedByBloggerPemula(/blog.klublog.com/, () => {if (BpParams.has('safe')) {location = atob(BpParams.get('safe'));}});
  BypassedByBloggerPemula(/t.me/, () => {if (BpParams.has('url')) {location = decodeURIComponent(BpParams.get('url'));}});
  BypassedByBloggerPemula(/dutchycorp.space/, () => {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  //BypassedByBloggerPemula(/tiktok.com/, () => {if (BpParams.has('target')) {location = decodeURIComponent(BpParams.get('target'));}});
  //BypassedByBloggerPemula(/(facebook|instagram).com/, () => {if (BpParams.has('u')) {location = decodeURIComponent(BpParams.get('u'));}});
  BypassedByBloggerPemula(/financedoze.com/, () => {if (BpParams.has('id')) {location = 'https://www.google.com/url?q=https://financedoze.com';}});
  BypassedByBloggerPemula(/vk.com/, () => {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));}});
  BypassedByBloggerPemula(/shortfaster.net/, () => {const twoMinutesAgo = Date.now() - 2 * 60 * 1000;localStorage.setItem('lastRedirectTime_site1', twoMinutesAgo.toString());});
  BypassedByBloggerPemula(/(g34new|dlgamingvn|v34down|phimsubmoi|almontsf).com|(nashib|timbertales).xyz/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BypassedByBloggerPemula(/earnbee.xyz|zippynest.online|getunic.info/, () => {localStorage.setItem('earnbee_visit_data', JSON.stringify({firstUrl: window.location.href,timestamp: Date.now() - 180000}));});
  BypassedByBloggerPemula(/triggeredplay.com/, () => {if (location.href.includes('#')) {let trigger = new URLSearchParams(window.location.hash.substring(1));
      let redplay = trigger.get('url');if (redplay) {let decodedUrl = DecodeBase64(redplay);window.location.href = decodedUrl;}}});
  BypassedByBloggerPemula(/ouo.io/, () => {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https://' + BpParams.getAll('s');} else if (BpParams.has('s')) {location = BpParams.getAll('s');}});
  BypassedByBloggerPemula(/adbtc.top/, () => {if (CloudPS(true, true, true)) return;CaptchaDone(() => {DoIfExists("input[class^=btn]");});let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/linkbox.to/, () => {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {BpNote(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);BpNote(itemInfo); redirect(itemInfo.url, false);}});});
  BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;const features = [{key: 'Adblock',action: () => AIORemover('noAdb', /adblock|AdbModel|AdblockReg|AntiAdblock|blockAdBlock|checkAdBlock|detectAnyAdb|detectAdBlock|justDetectAdb|FuckAdBlock|TestAdBlock|DisableDevtool|devtools/),log: 'Adblock Feature'}, {
    key: 'Anima',action: StopAnima,log: 'Disable All Animations'}, {key: 'Prompt',action: () => {const runNoPrompts = () => NoPrompts();if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', runNoPrompts, {once: true});} else {runNoPrompts();}new MutationObserver(runNoPrompts).observe(document, {childList: true,subtree: true});},
    log: 'Disable Prompts & Notifications'}, {key: 'SameTab',action: SameTab,log: 'SameTab'},{key: 'TimerFC',action: () => BoostTimers(cfg.get('TDelay')),log: 'Fast Timer'}, {key: 'AntiDebug',action: DebugLog,log: 'Anti-Debug'}, {key: 'BlockFC',action: NoFocus,log: 'Focus Control'}, {key: 'RightFC',action: EnableRCF,log: 'Right Click Control'}, {key: 'BlockPop',
    action: BlockPopup,log: 'Popup Blocker'}];const activated = features.filter(({key}) => cfg.get(key)).map(({action,log}) => {action();return log;});if (activated.length) {BpNote(`Activated Features: ${activated.join(', ')}`, 'info');}});
  BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {Object.defineProperty(document, 'hidden', {value: false,writable: false});Object.defineProperty(document, 'visibilityState', {value: 'visible',writable: false});document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);const waitForEl = (sel, cb, t = 1e4) => {const start = Date.now();const check = () => {const elm = bp(sel);if (elm) return cb(elm);if (Date.now() - start > t) BpNote(`Timeout: ${sel}`, 'warn'); else setTimeout(check, 500);}; setTimeout(check, 1e3);};
    const addDownloadButton = () => waitForEl('ytd-subscribe-button-renderer', elm => {if (bp('#dl-bp-button')) return;elm.parentElement.style.cssText = 'display: flex; align-items: center; gap: 8px';elm.insertAdjacentHTML('afterend', '<button id="dl-bp-button" style="background: #ff0000; color: white; border: none; padding: 8px 12px; border-radius: 2px; cursor: pointer; font-size: 13px; line-height: 18px;">DL BP</button>');bp('#dl-bp-button').addEventListener('click', showDownloadDialog);});const showDownloadDialog = () => {if (bp('#dl-bp-dialog')) return;
    const dialog = document.createElement('div');dialog.id = 'dl-bp-dialog';const shadow = dialog.attachShadow({mode: 'open'});shadow.innerHTML = `<style>.dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.3); z-index: 1000; width: 90%; max-width: 400px; text-align: center; }.input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; }.btns { display: flex; gap: 10px; justify-content: center; }
    .btn { background: #ff0000; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; }.btn:hover { background: #cc0000; }.close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px; }</style><div class="dialog"><span class="close">X</span><h3>Download YouTube Video or Audio</h3><input class="input" type="text" value="${location.href}"><div class="btns"><button class="btn" id="video-btn">Video</button><button class="btn" id="audio-btn">Audio</button></div></div>`;
    document.body.appendChild(dialog);shadow.querySelector('.close').addEventListener('click', () => dialog.remove());shadow.querySelector('#video-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'video') && dialog.remove());shadow.querySelector('#audio-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'audio') && dialog.remove());};const startDownload = (url, type) => {const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/shorts/')[1]?.split('?')[0];
    if (!videoId) return BpNote('Invalid video ID', 'warn');const downloadUrl = type === 'video' ? `https://bloggerpemula.pythonanywhere.com/youtube/video/${videoId}` : `https://bloggerpemula.pythonanywhere.com/youtube/audio/${videoId}`;const a = document.createElement('a');a.href = downloadUrl;a.target = '_blank';a.click();};if (cfg.get('YTDown')) {addDownloadButton();document.addEventListener('yt-navigate-finish', addDownloadButton);document.addEventListener('yt-page-data-updated', addDownloadButton);}
    if (cfg.get('YTShort')) {const bypassShorts = () => {if (!location.pathname.startsWith('/shorts')) return;const vidId = location.pathname.split('/')[2];if (vidId) window.location.replace(`https://www.youtube.com/watch?v=${vidId}`);};bypassShorts();document.addEventListener('yt-navigate-start', bypassShorts);}});
  BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech|retrocove|vaultfind|geotides|renovatehub|playallgames|countriesguide).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian|lifeprovy|chownest|mythnest|homesteadfeast|gizmoera|tastywhiz|speakzyo).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si', TrustMe);
  BypassedByBloggerPemula(/modsfire.com/, () => { if (!location.pathname.startsWith('/download')) { alert("ONLY solve Cloudflare captcha and DO NOT click anything else!!!"); CaptchaDone(() => { modsfireDownload(); }); } else { modsfireDownload(); } });
  function modsfireDownload() { DoIfExists('a.download-button', 3); waitForElm("a.download-button[href]", safe => { redirect(safe.href, false); DoIfExists("a[href*='/d/']", safe => { fetch(safe.href).then(response => { if (!response.ok) throw new Error('Network response was not ok'); return response.text(); }).then(data => {}).catch(error => {}); }); }); }

  const sl = (h => {switch (h.host) {case 'go.paylinks.cloud': if (/^\/([a-zA-Z0-9]{10,12})$/.test(h.pathname)) {return 'https://paylinks.cloud/' + RegExp.$1;} break;case 'multiup.io': if (h.href.includes('/download/')) return h.href.replace('download/', 'en/mirror/'); break;//case 'pixeldrain.com': if (h.href.includes('/u/')) return h.href.replace('u/', '/api/file/') + '?download'; break;case 'social-unlock.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://social-unlock.com/redirect/' + RegExp.$1;} break;//case 'work.ink': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://adbypass.org/bypass?bypass=' + location.href.split('?')[0];} break;
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');} else if (h.pathname === '/url' && h.searchParams.has('url')) {return h.searchParams.get('url');}break;default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
    switch (h.host) {case 'gamezigg.com': if (b) {meta('https://get.megafly.in/' + RegExp.$1);} break;case 'shrs.link': case 'shareus.io':if (/^\/old\/([^\/]+)/.test(h.pathname)) {return 'https://jobform.in/?link=' + RegExp.$1;} break;
      case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));
      result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;default: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Please Wait You Will be Redirected to Your Destination in @ Seconds , Thanks`);}setTimeout(() => {location.href = link;}, redirectDelay * 1000);}

    BypassedByBloggerPemula(/the2.link/, () => {DoIfExists('#get-link-btn',3);});
    BypassedByBloggerPemula(/keeplinks.org/, () => {DoIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/forex-22.com/, () => {DoIfExists('#continuebutton',3);});
    BypassedByBloggerPemula(/1shortlink.com/, () => {DoIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, () => {DoIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/1short.io/, () => {DoIfExists('#countDownForm', 'submit', 7);});
    BypassedByBloggerPemula(/disheye.com/, () => {DoIfExists('#redirectForm', 'submit', 3);});
    BypassedByBloggerPemula(/aysodamag.com/, () => {DoIfExists('#link1s-form', 'submit',3);});
    BypassedByBloggerPemula(/cryptonewssite.rf.gd/, () => {DoIfExists('#dynamic-button a', 2);});
    BypassedByBloggerPemula(/1bitspace.com/, () => {DoIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/cshort.org/, () => {DoIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/revlink.pro/, () => {DoIfExists('#main-content-wrapper > button',2);});
    BypassedByBloggerPemula(/panyhealth.com/, () => {DoIfExists("form[method='get']", 'submit',3);});
    BypassedByBloggerPemula(/minhapostagem.top/, () => {ReadytoClick('#alf_continue.alf_button', 3);});
    BypassedByBloggerPemula(/playpaste.com/, () => {CaptchaDone(() => {DoIfExists('button.btn');});});
    BypassedByBloggerPemula(/sfl.gl/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}; DoIfExists('button:innerText("OPEN LINK")', 2);});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/jioupload.icu/, () => {CaptchaDone(() => {DoIfExists('#continueBtn');});});
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/(fc-lc|thotpacks).xyz/, () => {DoIfExists('#invisibleCaptchaShortlink', 3);});
    BypassedByBloggerPemula(/offerwall.me|ewall.biz/, () => {CaptchaDone(() => {DoIfExists('#submitBtn');});});
    BypassedByBloggerPemula(/shortlinks2btc.somee.com/, () => {CaptchaDone(() => {DoIfExists('#btLogin');});});
    BypassedByBloggerPemula(/kisalt.digital/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/surl.li|surl.gd/, () => waitForElm('#redirect-button', surl => redirect(surl.href)));
    BypassedByBloggerPemula(/dogefury.com|thanks.tinygo.co/, () => {DoIfExists('#form-continue', 'submit', 2);});
    BypassedByBloggerPemula(/lksfy.com/, () => {CaptchaDone(() => {DoIfExists('.get-link.btn-primary.btn',1);});});
    BypassedByBloggerPemula(/almontsf.com/, () => {ReadytoClick('#nextBtn',2);ReadytoClick('a.btn-moobiedat', 3);});
    BypassedByBloggerPemula(/rotizer.net/, () => {CaptchaDone(() => {DoIfExists('button:innerText("Confirm")');});});
    BypassedByBloggerPemula(/(blogsward|coinjest).com/, () => {waitForElm('#continueBtn', afBtn => afBtn.click());});
    BypassedByBloggerPemula(/render-state.to/, () => {SameTab();if (BpParams.has('link')) {unsafeWindow.goToLink();}});
    BypassedByBloggerPemula(/linkforearn.com/, () => waitForElm('#shortLinkSection a', linkf => redirect(linkf.href)));
    BypassedByBloggerPemula(/downfile.site/, () => {DoIfExists('button.h-captcha', 2);DoIfExists('#megaurl-submit', 3);});
    BypassedByBloggerPemula(/enlacito.com/, () => {setTimeout(() => {redirect(unsafeWindow.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/adtival.network/, () => {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/imagereviser.com/, () => {CheckVisibility('.tick.wgicon', () => {DoIfExists('.bottom_btn');});});
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/stockmarg.com/, () => {DoIfExists('#codexa', 'submit', 3);DoIfExists('#open-continue-btn', 4);});
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/(dramaticqueen|emubliss).com/, () => {DoIfExists('#notarobot.button',3);DoIfExists('#btn7',4);});
    BypassedByBloggerPemula(/(grtjobs|jksb).in/, () => {CheckVisibility('.step', () => {unsafeWindow.handleContinueClick();});});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/, () => {CaptchaDone(() => {DoIfExists('#continue');});});
    BypassedByBloggerPemula(/(bnbfree|freeth|freebitco).in/, () => {CaptchaDone(() => {DoIfExists('#free_play_form_button');});});
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/paycut.pro/, () => {if (location.href.includes('/ad/')) {location = location.href.replace('ad/', '');}});
    BypassedByBloggerPemula(/askpaccosi.com|cryptomonitor.in/, () => {CaptchaDone(() => {DoIfExists('form[name="dsb"]', 'submit');});});
    BypassedByBloggerPemula(/forex-trnd.com/, () => {elementReady('#exfoary-snp').then(() => DoIfExists('#exfoary-form', 'submit', 3));});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc).com/, () => {if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/knowiz0.blogspot.com/, () => {CheckVisibility('.postBody.post-body.pS', () => {DoIfExists('button#nextBtn',2);});});
    //BypassedByBloggerPemula(/financemonk.net/, () => {CaptchaDone(() => {DoIfExists('#downloadBtnClick');});DoIfExists('#dllink', 'submit', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){DoIfExists('#tp-snp2.tp-blue.tp-btn', 2);DoIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/(techleets|bonloan).xyz|sharphindi.in|nyushuemu.com/, () => waitForElm('a#tp-snp2', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/(jobmatric|carjankaari).com|techsl.online/, () => {DoIfExists("form[name='rtg']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/sharetext.me/, () => {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/apkw.ru/, () => {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw));}});
    BypassedByBloggerPemula(/(devnote|formshelp|rcccn).in|djbassking.live/, () => {CheckVisibility('.top.step', () => {DoIfExists('#getlinks.btn', 2);});});
    BypassedByBloggerPemula(/comohoy.com/, () => {if (location.href.includes('/view/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/cutnet.net|(cutyion|cutynow|cuttlinks).com|(exego|cety).app|(jixo|jizo|gamco).online/, () => {ReadytoClick("#submit-button:not([disabled])",2);});
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/4fnet.org/, () => {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, () => {if (elementExists('#divdownload')) {let oxy = bp('.ocdsf233').getAttribute('data-source_url');redirect(oxy, false);}});
    BypassedByBloggerPemula(/alorra.com/, () => {CheckVisibility('.ast-post-format- > button', () => {DoIfExists('.single-layout-1.ast-post-format- > button');});});
    BypassedByBloggerPemula(/largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in/, () => {DoIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/adoc.pub/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.mt-15.btn-block.btn-success.btn-lg.btn');});});
    BypassedByBloggerPemula(/programasvirtualespc.net/, () => {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);}});
    BypassedByBloggerPemula(/pdfcoffee.com/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.my-2.btn-block.btn-primary.btn-lg.btn');});});
    BypassedByBloggerPemula(/(zygina|jansamparks).com|(loanifyt|getknldgg).site|topshare.in|btcon.online/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/(financewada|utkarshonlinetest).com|financenova.online/, () => {DoIfExists('.get_btn.step_box > .btn', 2);ReadytoClick('.get_btn a[href]', 3);});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/setroom.biz.id|travelinian.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm(' a:nth-child(1) > button', setr => setr.click());});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/wp.thunder-appz.eu.org|blog.adscryp.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm('#button3 > a', thun => redirect(thun.href, false));});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics/, () => {DoIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/mirrored.to/, () => {waitForElm('div.col-sm.centered.extra-top a', mirr => redirect(mirr.href, false)); waitForElm('div.centerd > a', mir => redirect(mir.href, false));});
    BypassedByBloggerPemula(/(fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in/, () => {ReadytoClick('#continue-show', 3);});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks).com/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/(keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in|vi-music.app/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#tp-snp2',4);});
    BypassedByBloggerPemula(/mboost.me/, () => {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/karyawan.co.id/, () => {
      DoIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, () => {
      DoIfExists('#yuidea', 'submit', 2);DoIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/slink.bid/, () => {
      DoIfExists('#btn-generate', 1);DoIfExists('.btn-success.btn', 5);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, () => {
      DoIfExists('#wcGetLink', 2);DoIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech|cointox.net/, () => {
      waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/solidcoins.net|fishingbreeze.com/, () => {
      CaptchaDone(() => {DoIfExists('form[action]', 'submit');});
      if (!elementExists('.g-recaptcha')) {DoIfExists('mdn', 'submit', 17);}});
    BypassedByBloggerPemula(/creditsgoal.com/, () => {
      DoIfExists('#tp-snp2', 3);DoIfExists('button:innerText("Continue")', 4);});
    BypassedByBloggerPemula(/adfoc.us/, () => {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/zegtrends.com/, () => {DoIfExists('#cln', 'submit', 5);
      DoIfExists('#bt1', 5);DoIfExists('#go', 5);});
    BypassedByBloggerPemula(/ac.totsugeki.com/, () => {let $ = unsafeWindow.jQuery;
      $("a[target='_blank']").removeAttr("target");DoIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {
      if (!cfg.get('hCaptcha')) return;await sleep(2000);ReadytoClick('#checkbox');});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists('#claimbutn');});
      if (location.href.includes('/bonus')) {DoIfExists('#clickhere', 2);}});
    BypassedByBloggerPemula(/linkspy.cc/, () => {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(superheromaniac|spatsify|mastkhabre|ukrupdate).com/, () => {
      DoIfExists('#tp98', 10);DoIfExists('#btn6', 12);DoIfExists("form[name='tp']", 'submit', 11);});
    BypassedByBloggerPemula(/(bestloansoffers|worldzc).com|earningtime.in/, () => {
      DoIfExists('#rtg', 'submit', 2);DoIfExists('#rtg-form', 'submit', 3);
      DoIfExists('.rtg-blue.rtg-btn', 4);DoIfExists('#rtg-snp21 > button', 5);});
    BypassedByBloggerPemula(/(exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online/, () => {
      DoIfExists('#invisibleCaptchaShortlink', 2);DoIfExists('#before-captcha', 'submit', 3);});
    BypassedByBloggerPemula(/dinheiromoney.com/, () => {DoIfExists("div[id^='button'] form", 'submit', 3);
      waitForElm("div[id^='button'] center a", postazap => redirect(postazap.href, false));});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in/, () => {
      DoIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/flamebook.eu.org/, async () => {const flame = ['#button1', '#button2', '#button3'];
      for (const fbook of flame) {await sleep(3000);ReadytoClick(fbook);}});
    BypassedByBloggerPemula(/techkhulasha.com|itijobalert.in/, () => {
      ReadytoClick('#waiting > div > .bt-success', 2);DoIfExists('button:innerText("Open-Continue")', 3);});
    BypassedByBloggerPemula(/(lakhisarainews|vahanmitra24).in/, () => {DoIfExists("form[name='dsb']", 'submit', 3);
      waitForElm('a#btn7', earn4 => redirect(earn4.href));});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, true);xhr.send();});
    BypassedByBloggerPemula(/vosan.co/, () => {bp('.elementor-size-lg').removeAttribute('target');
      DoIfExists('.elementor-size-lg', 2);DoIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/exblog.jp/, () => {AIORemover('removeAttr', 'div.post-main div a', 'target');
      DoIfExists('a:innerText("NEST ARTICLE")', 3);DoIfExists('a:innerText("Continue To")', 4);});
    BypassedByBloggerPemula(/modcombo.com/, () => {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        DoIfExists('a.btn.btn-submit', 6);} else {DoIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/autodime.com|cryptorex.net/, () => {CaptchaDone(() => {DoIfExists('#button1');});
      elementReady('#fexkominhidden2').then(() => ReadytoClick('.mb-sm-0.mt-3.btnBgRed', 2));});
    BypassedByBloggerPemula(/(bchlink|usdlink).xyz/, () => {AIORemover('removeAttr', '#antiBotBtnBeta', 'onclick');
      DoIfExists('#antiBotBtnBeta > strong', 2);CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula(/pubghighdamage.com|anmolbetiyojana.in/, () => {SameTab();
      DoIfExists('#robot', 2);DoIfExists('#notarobot.button', 2);ReadytoClick('#gotolink.bt-success.btn', 3);});
    BypassedByBloggerPemula(/aylink.co|cpmlink.pro/, () => {DoIfExists('.btn.btn-go', 2);ReadytoClick('.btn-go', 3);
      waitForElm("#main", Aylink => redirect(strBetween(Aylink.onclick.toString(), 'window.open("', '"'), false));});
    BypassedByBloggerPemula(/sub2get.com/, () => {
      if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/o-pro.online/, () => {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/jobzhub.store/, () => {DoIfExists('#surl', 5);
      if (elementExists('#next')) {unsafeWindow.startCountdown();DoIfExists('form.text-center', 'submit', 15);}});
    BypassedByBloggerPemula(/curto.win/, () => {DoIfExists('#get-link', 2);
      CheckVisibility('span:contains("Your link is ready")', () => {let curto = bp('#get-link').href;redirect(curto);});});
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|owoanime|hyperkhabar).com/, () => {
      DoIfExists('#pro-continue', 3);waitForElm('a#pro-btn', vnshort => redirect(vnshort.href));DoIfExists('#my-btn', 5);});
    BypassedByBloggerPemula(/infonerd.org/, () => {EnableRCF();
      CheckVisibility('#redirectButton', '||', "bp('#countdown').innerText == '0'", () => {unsafeWindow.redirectToUrl();});});
    BypassedByBloggerPemula(/(blogmado|kredilerim|insuranceleadsinfo).com/, () => {
      CaptchaDone(() => {DoIfExists('button.btn');});waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/litecoin.host|cekip.site/, () => {CaptchaDone(() => {DoIfExists('#ibtn');});
      if (elementExists('.pt-5.card-header')) {CheckVisibility('.btn-primary.btn', () => {DoIfExists('.btn-primary.btn');});}});
    BypassedByBloggerPemula(/gocmod.com/, () => {
      if (elementExists('.view-app')) {bp('#no-link').removeAttribute('target');DoIfExists('.download-line-title', 2);}});
    BypassedByBloggerPemula(/yitarx.com/, () => {if (location.href.includes('enlace/')) {let yitar = location.href.split('#!')[1];
      let arxUrl = DecodeBase64(yitar,3);redirect(arxUrl);}});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com/, () => {
      CaptchaDone(() => {DoIfExists('#lview > form', 'submit');});waitForElm('.get-link > a', tig => redirect(tig.href, false));});
    BypassedByBloggerPemula(/videolyrics.in/, () => {ReadytoClick('a:contains("Continue")', 3);
      CheckVisibility("button[class^='py-2 px-4 font-semibold']", () => {DoIfExists('div[x-html="isTCompleted"] button');});});
    BypassedByBloggerPemula(/(tmail|labgame).io|(gamezizo|fitdynamos).com/, () => {DoIfExists('#surl', 5);
      if (elementExists('#next')) {DoIfExists('form.text-center', 'submit', 3);DoIfExists('#next', 2);DoIfExists('#glink', 15);}});
    BypassedByBloggerPemula(/f2h.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.download-button')) {DoIfExists('.btn-success', 2);}});
    BypassedByBloggerPemula(/dbree.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.center-block.btn-default.btn', 2);});
    BypassedByBloggerPemula(/upload.ee/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/gofile.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady('#filemanager').then(() => ReadytoClick('button.item_download', 2));});
    BypassedByBloggerPemula(/dddrive.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/1fichier.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#pass')) {} else {DoIfExists('.btn-orange.btn-general.ok', 1);DoIfExists('.alc', 'submit', 1);}});
    BypassedByBloggerPemula(/mp4upload.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#todl', 2);DoIfExists("form[name='F1']", 'submit', 1);});
    BypassedByBloggerPemula(/takefile.link/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#F1')) {DoIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 'submit', 1);}});
    BypassedByBloggerPemula(/drop.download/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#method_free', 2);DoIfExists('.btn-download', 2);});
    BypassedByBloggerPemula(/easyupload.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#download-box')) {DoIfExists('.start-download.div', 2);}});
    BypassedByBloggerPemula(/rapidgator.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.btn-free.act-link.link', 2);});
    BypassedByBloggerPemula(/coinsrev.com/, () => {parent.open = BpBlock();CaptchaDone(() => {DoIfExists('#wpsafelinkhuman > input');});
      DoIfExists('#wpsafe-generate > a > img', 3);DoIfExists('input#image3', 13);});
    BypassedByBloggerPemula(/dropgalaxy.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("button[id^='method_fre']", 2);});
    BypassedByBloggerPemula(/dayuploads.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#ad-link2', 2);});
    BypassedByBloggerPemula(/workupload.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#download')) {DoIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/freepreset.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#button_download')) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/krakenfiles.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/file-upload.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#downbild.g-recaptcha', 2);});
    BypassedByBloggerPemula(/docs.google.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#uc-dl-icon')) {DoIfExists('#downloadForm', 'submit', 1);}});
    BypassedByBloggerPemula(/uploadhaven.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.alert > a:nth-child(1)', 2);DoIfExists('#form-download', 'submit', 1);});
    BypassedByBloggerPemula(/fileresources.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.download-timer')) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/indobo.com/, () => {const scriptElement = bp('#wpsafegenerate > script:nth-child(4)');if (scriptElement) {
      const scriptContent = scriptElement.textContent;const url = strBetween(scriptContent, 'window.location.href = "', '";', true);
        if (url && url.startsWith('https://indobo.com?safelink_redirect=')) {setTimeout(() => redirect(url), 2000);}}});
    BypassedByBloggerPemula(/techxploitz.eu.org/, () => {CheckVisibility('#hmVrfy', () => {DoIfExists('.pstL.button', 2);});
      CheckVisibility('#aSlCnt', () => {DoIfExists('.pstL.button', 2);ReadytoClick('.safeGoL.button', 3);});});
    BypassedByBloggerPemula(/jobinmeghalaya.in/, () => {DoIfExists('#bottomButton',2);DoIfExists('a#btn7', 3);
      DoIfExists('#wpsafelink-landing', 'submit', 2);ReadytoClick('#open-link > .pro_btn',3);DoIfExists('#wpsafe-link > .bt-success', 3);});
    BypassedByBloggerPemula(/playnano.online/, () => {DoIfExists('#watch-link', 2);
      DoIfExists('.watch-next-btn.btn-primary.button', 2);DoIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/2linkes.com/, () => {if (elementExists('#link-view')) {CaptchaDone(() => {DoIfExists('#link-view', 'submit');});}
      else if (elementExists('button.btn.btn-primary')) {DoIfExists('.box-body > form:nth-child(2)', 'submit', 2);}});
    BypassedByBloggerPemula(/ify.ac|go.linkify.ru/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      unsafeWindow.open_href();});
    BypassedByBloggerPemula(/(financedoze|topjanakri|stockbhoomi).com|techhype.in|getpdf.net|cryptly.site/, () => {
      CheckVisibility('p:contains("Step")', () => {DoIfExists('#rtg', 'submit', 3);DoIfExists('button:innerText("Open-Continue")', 4);});});
    BypassedByBloggerPemula(/(importantclass|hamroguide).com/, () => {DoIfExists('#pro-continue', 4);
      CheckVisibility('#pro-btn', () => {DoIfExists('#pro-link a', 2);});waitForElm('#my-btn.pro_btn', vnshor => redirect(vnshor.href));});
    BypassedByBloggerPemula(/mazen-ve3.com/, () => {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/apkadmin.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('div.text.text-center a', apk => redirect(apk.href));});
    BypassedByBloggerPemula(/filemoon.sx/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('div.download2 a.button', fm => redirect(fm.href));});
    BypassedByBloggerPemula(/files.fm/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click());});
    BypassedByBloggerPemula(/k2s.cc/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.button-download-slow', 2);waitForElm('a.link-to-file', k2s => redirect(k2s.href));});
    BypassedByBloggerPemula(/katfile.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#fbtn1', 2);waitForElm('#dlink', katf => redirect(katf.href));});
    BypassedByBloggerPemula(/udrop.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`)));});
    BypassedByBloggerPemula(/megaupto.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/karanpc.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#downloadButton > form', 'submit', 2);});
    BypassedByBloggerPemula(/douploads.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/send.now/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#downloadbtn', 2);});
    BypassedByBloggerPemula(/dataupload.net/, async () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      await sleep(5000);ReadytoClick('.downloadbtn');});
    BypassedByBloggerPemula(/buzzheavier.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('#download-link', bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/bowfile.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      ReadytoClick('.download-timer > .btn--primary.btn > .btn__text', 2);});
    BypassedByBloggerPemula(/dailyuploads.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#fbtn1', 2);});
    BypassedByBloggerPemula(/uploadev.org/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#direct_link > a', 2);});
    BypassedByBloggerPemula(/megaup.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('a.btn.btn-default', muBtn => muBtn.click());DoIfExists('#btndownload', 7);});
    BypassedByBloggerPemula(/gdflix.dad/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady('#cf_captcha.card').then(() => ReadytoClick('a.btn.btn-outline-success', 2));});
    BypassedByBloggerPemula(/mega4upload.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name=mega_free]", 2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/filespayouts.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);CaptchaDone(() => {ReadytoClick('#downloadbtn');});});
    BypassedByBloggerPemula(/uploady.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#free_dwn', 2);DoIfExists('.rounded.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/file-upload.org/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("button[name='method_free']", 2);DoIfExists('.download-btn', 2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/mexa.sh/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#Downloadfre', 2);DoIfExists('#direct_link', 2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/up-4ever.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);DoIfExists('#downLoadLinkButton', 5);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);DoIfExists('.btn-dow.btn', 1);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/hitfile.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists('#submit');});DoIfExists('.nopay-btn.btn-grey', 2);waitForElm('#popunder2', hfl2 => redirect(hfl2.href), 37);});
    BypassedByBloggerPemula(/servicemassar.ma/, () => {CaptchaDone(() => {unsafeWindow.linromatic();});
      CheckVisibility('button:contains("Click here")', () => {DoIfExists('button:innerText("Next")', 2);DoIfExists('button:innerText("Redirect")', 2);});});
    BypassedByBloggerPemula(/upfion.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.file-main.form-main')) {DoIfExists('.my-2.text-center > .btn-primary.btn', 2);CaptchaDone(() => {DoIfExists('#link-button');});}});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net/, () => {
      DoIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/m.flyad.vip/, () => {
      waitForElm('#captchaDisplay', (display) => {const number = display.textContent.trim();waitForElm('#captchaInput', (input) => {input.value = number;
      waitForElm('button[onclick="validateCaptcha()"]', (button) => {sleep(1000).then(() => button.click());}, 15, 1);}, 15, 1);}, 15, 1);});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, () => {DoIfExists('#countdown', 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/mediafire.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (location.href.includes('file/')) {let mf = bp('.download_link .input').getAttribute('href');BpNote(mf);location.replace(mf);}});
    BypassedByBloggerPemula(/(tejtime24|drinkspartner|sportswordz|newspute).com|(raftarsamachar|gadialert|jobinmeghalaya|raftarwords).in/, () => {
      window.scrollTo(0, 9999);DoIfExists('#topButton.pro_btn', 2);DoIfExists('#bottomButton',3);ReadytoClick('#open-link > .pro_btn', 4);});
    BypassedByBloggerPemula(/downloader.tips/, () => {CaptchaDone(() => {DoIfExists('button.btn.btn-primary');});
      let downloader = setInterval(() => {if (bp('#count').innerText == '0') {clearInterval(downloader);DoIfExists('.btn-primary.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/modsbase.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.file-panel')) {DoIfExists('.download-file-btn', 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn/, () => {
      AIORemover('removeAttr', '#monetiza', 'onclick');CheckVisibility('#monetiza', () => {ReadytoClick('#monetiza.btn-primary.btn');});
      elementReady('#monetiza-generate').then(() => setTimeout(() => {unsafeWindow.monetizago();}, 3 * 1000));});
    BypassedByBloggerPemula(/filedm.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#dlbutton')) {waitForElm('#dlbutton', fdm => redirect('http://cdn.directfiledl.com/getfile?id=' + fdm.href.split('_')[1], false));}});
    BypassedByBloggerPemula(/anonymfile.com|sharefile.co|gofile.to/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#download')) {waitForElm('a.btn-info', anon => redirect(anon.href),8,3);}});
    BypassedByBloggerPemula(/anonym.ninja/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];redirect(`https://anonym.ninja/download/file/request/${fd}`);}});
    BypassedByBloggerPemula(/(carbikesupdate|carbikenation).com/, () => {parent.open = BpBlock();CheckVisibility('#verifyBtn', () => {DoIfExists('#getLinkBtn', 2);});
      CheckVisibility('.top.step', () => {DoIfExists('#getlinks.btn', 2);});});
    BypassedByBloggerPemula(/oydir.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('.download-now')) {unsafeWindow.triggerFreeDownload();waitForElm('.text-center.download-now > .w-100.btn-blue.btn', oydir => redirect(oydir.href));}});
    BypassedByBloggerPemula(/doodrive.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.tm-button-download.uk-button-primary.uk-button', 3);waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href));});
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.mngez-free-download', 2);let $ = unsafeWindow.jQuery;DoIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/(ez4mods|game5s|sharedp|fastcars1|carbikenation).com|tech5s.co|a4a.site|rcccn.in/, () => {DoIfExists('div.text-center form', 'submit', 2);
      ReadytoClick('#go_d', 1);waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href));waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href));});
    BypassedByBloggerPemula(/firefaucet.win/, () => {ReadytoClick('button:innerText("Continue")', 2);ReadytoClick('button:innerText("Go Home")', 2);
      CaptchaDone(() => {waitForElm('button[type=submit]:not([disabled]):innerText("Get Reward")', (element) => {ReadytoClick('button[type=submit]:not([disabled])',1);},10,1);});});
    BypassedByBloggerPemula(/drive.google.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.usercontent.google.com/download?id=${dg}&export=download`, false).replace('<br />', '');
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {DoIfExists('#download-form', 'submit', 1);}});
    BypassedByBloggerPemula(/4hi.in|(10short|animerigel|encurt4|encurtacash).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site|tfly.link|oii.si/, () => {
      DoIfExists('#form-continue', 'submit', 2);CaptchaDone(() => {DoIfExists('#link-view', 'submit');});});
    BypassedByBloggerPemula(/cryptorotator.website/, () => {DoIfExists('div.btn:contains("Click here to unlock")', 2);
      CheckVisibility('#alf_continue', () => {ReadytoClick("#alf_continue:not([disabled])");});CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula(/qiwi.gg/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists("div [class^='page_DownloadPage']")) {DoIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
      let qiwi = bp("a[class^='DownloadButton_DownloadButton']");setTimeout(() => {redirect(qiwi.href);}, 3 * 1000);}});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#turbo-table')) {let tb = bp('#nopay-btn').href;redirect(tb);}CaptchaDone(() => {DoIfExists('#submit');});
      waitForElm('#free-download-file-link', tur => redirect(tur.href));});
    BypassedByBloggerPemula(/sharemods.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#dForm', 'submit', 2);if (elementExists('.download-file-holder')) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href));}});
    BypassedByBloggerPemula('(on-scroll|diudemy|maqal360).com', () => {
      if (elementExists('.alertAd')) {notify('BloggerPemula : Try to viewing another tab if the countdown does not work');}
      ReadytoClick('#append a', 2);ReadytoClick('#_append a', 3);elementReady('.alertAd').then(function() {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});
    BypassedByBloggerPemula(/onlinetechsolution.link/, () => {let Thunder = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Thunder.value)).linkr);}, 5 * 1000);});
    BypassedByBloggerPemula(/(ecryptly|equickle).com/, () => {if (BpParams.has('id')) {meta(atob(BpParams.get('id')));}waitForElm('#open-continue-form > input:nth-child(3)', Chain => redirect(atob(Chain.value)));
      elementReady('#open-continue-btn').then(button => {sleep(3000).then(() => {window.location.href = strBetween(button.getAttribute('onclick'), "window.location.href='", "';", false);});});DoIfExists('#rtg-snp2', 2);});
    BypassedByBloggerPemula(/(down.fast-down|down.mdiaload).com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady('input.btn-info.btn').then(() => DoIfExists("input[name='method_free']", 2));elementReady('.lft.filepanel').then(() => ReadytoClick('a:innerText("Download")', 2));
      const captchaCode = BpAnswer(null, 'captcha');if (captchaCode) {const captchaInput = bp('input.captcha_code');if (captchaInput) {captchaInput.value = captchaCode;ReadytoClick('button:innerText("Create Download")', 30);}}});
    BypassedByBloggerPemula(/(horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top/, () => {CaptchaDone(() => {unsafeWindow.wpsafehuman();});
      CheckVisibility('center > .wpsafelink-button', () => {DoIfExists('center > .wpsafelink-button', 1);});CheckVisibility('#wpsafe-generate > a', '||', "bp('.base-timer').innerText == '0:00'", () => {unsafeWindow.wpsafegenerate();
        if (location.href.includes('article24.online')) {DoIfExists('#wpsafelink-landing > .wpsafelink-button', 1);} else {DoIfExists('#wpsafelink-landing2 > .wpsafelink-button', 1);}});});
    BypassedByBloggerPemula(/revly.click|(clikern|kiddyshort|adsssy).com|mitly.us|link.whf.bz|shortex.in|(easyshort|shorturlearn).xyz/, () => {
      if (elementExists('#link-view')) {CaptchaDone(() => {DoIfExists('#link-view', 'submit');});} else if (elementExists('button.btn.btn-primary')){DoIfExists('div.col-md-12 form', 'submit', 2);}});
    BypassedByBloggerPemula(/(wellness4live|akash.classicoder).com|2the.space|inicerita.online/, () => {
      var tform = bp('#landing'); redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps|healthylifez|insurancemyst).com|clk.kim|dekhe.click/, () => {DoIfExists('button.btn.btn-primary', 2);
      AIORemover('removeAttr', '.btn-captcha.btn-primary.btn', 'onclick');DoIfExists('#nextpage', 'submit', 2);DoIfExists('#getmylink', 'submit', 3);CaptchaDone(() => {DoIfExists('.btn-captcha.btn-primary.btn');});});
    BypassedByBloggerPemula(/desiupload.co/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|sproutworkers.co/, () => {let $ = unsafeWindow.jQuery;window.onscroll = BpBlock();unsafeWindow.check2();if (elementExists('#verify')) {
        $('.blog-details').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', unsafeWindow.check3);});}});
    BypassedByBloggerPemula(/(fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online/, () => {
      waitForElm("div[id^='rtg-'] > a:nth-child(1)", Linkpays => redirect(Linkpays.href, false));DoIfExists('#rtg', 'submit', 2);
      DoIfExists('#rtg-snp21 .rtg_btn', 3);DoIfExists('#rtg-snp2', 3);DoIfExists('#rtg-snp21 > button', 4);});
    BypassedByBloggerPemula(/tempatwisata.pro/, async () => {
      const buttons = ['button:innerText("Generate Link")', 'button:innerText("Continue")', 'button span:innerText("Continue")', 'button:innerText("Get Link")', 'button span:innerText("Get Link")', 'button:innerText("Next")'];
      for (const selector of buttons) {await sleep(2000);ReadytoClick(selector);}});
    BypassedByBloggerPemula(/(tinybc|phimne).com|(mgame|sportweb|bitcrypto).info/, () => {
      elementReady('#wpsafe-link a[onclick*="handleClick"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/handleClick\('([^']+)'\)/);
        if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/bewbin.com/, () => {elementReady('.wpsafe-top > script:nth-child(4)').then((script) => sleep(3000).then(() =>
      redirect('https://bewbin.com?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/bewbin\.com\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/lajangspot.web.id/, () => {elementReady('#wpsafe-link > script:nth-child(2)').then((script) => sleep(3000).then(() =>
      redirect('https://lajangspot.web.id?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/lajangspot\.web\.id\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/(marketrook|governmentjobvacancies|swachataparnibandh|goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub|arkarinaukrinetwork|topgeninsurance).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp|dvjobs|techawaaz).in|(biharhelp|biharkhabar).co|wastenews.xyz|biharkhabar.net/, () => {
      elementReady('a#btn7').then(() => DoIfExists('a#btn7', 3));ReadytoClick('#open-link > .pro_btn',3);DoIfExists("form[name='dsb']", 'submit', 3);DoIfExists('button:innerText("Continue")', 4);});
    BypassedByBloggerPemula(/inshortnote.com/, () => {let clickCount = 0;const maxClicks = 7;function clickElement() {if (clickCount >= maxClicks) {BpNote("I'm tired of clicking, I need a break");return;}let element = bp('#htag > [style="left: 0px;"]') || bp('#ftag > [style="left: 0px;"]');
      if (element) {element.click();clickCount++;return;}for (let el of bp('.gaama [style*="left:"]', true)) {if (/^[a-zA-Z0-9]{5,6}$/.test(el.textContent.trim())) {el.click();clickCount++;return;}}}const intervalId = setInterval(() => {clickElement();if (clickCount >= maxClicks) clearInterval(intervalId);}, 3000);});
    BypassedByBloggerPemula(/(admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot|thepragatishilclasses|indobo|pdfvale|templeshelp).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp|coinilium).net|atomicatlas.xyz|gadifeed.in|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id/, () => {
      elementReady('#wpsafe-link a[onclick*="window.open"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/window\.open\('([^']+)'/);if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/jioupload.com/, () => {function calculateAnswer(text) {const parts = text.replace("Solve:", "").replace(/[=?]/g, "").trim().split(/\s+/);const [num1, op, num2] = [parseInt(parts[0]), parts[1], parseInt(parts[2])];return op === "+" ? num1 + num2 : num1 - num2;}
      elementReady('.file-details').then(() => {DoIfExists('form button.btn-secondary', 'click', 2);waitForElm('a.btn.btn-secondary[href*="/file/"]', (jiou) => redirect(jiou.href, false));});
      elementReady("#challenge").then((challenge) => {const answer = calculateAnswer(challenge.textContent);BpNote(`Solved captcha: ${challenge.textContent} Answer: ${answer}`);elementReady("#captcha").then((input) => {input.value = answer;elementReady("button[type='submit']").then((button) => sleep(3000).then(() => button.click()));});});});
    BypassedByBloggerPemula(/teknoasian.com/, () => {CheckVisibility('h4 > b', () => {DoIfExists('button:innerText("Continue")', 1);});CheckVisibility('.Skipper > h4 > b', () => {DoIfExists('button:innerText("Get Link")', 1);});
      CheckVisibility('.humanVerify button', '||', "bp('.humanVerify button').innerText == 'Click To'", () => {DoIfExists('button:innerText("Click To Verify")', 1);DoIfExists('button:innerText("Generate Link")', 2);});});
    BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net/, () => {ReadytoClick('#submit-button',2);ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('#second_open_placeholder > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('a:innerText("Go to Link")', 2);});
    BypassedByBloggerPemula(/(lyricsbaazaar|ezeviral).com/, () => {CaptchaDone(() => {DoIfExists('#btn6');});
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online/, () => {const GPlinks = 2 / (24 * 60);RSCookie('set', 'adexp', '1', GPlinks);
      CheckVisibility('.VerifyBtn', () => {DoIfExists('#VerifyBtn', 2);ReadytoClick('#NextBtn', 3);});if (elementExists('#SmileyBanner')) {setActiveElement('[id="div-gpt-ad"]');fakeHidden();}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/bitcotasks.com/, () => {if (location.href.includes('/firewall')) {CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {DoIfExists('button:contains("Validate")');});}
      if (location.href.includes('/lead')) {CheckVisibility('#status .btn', () => {DoIfExists('button:contains("Start View")');});}CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {unsafeWindow.continueClicked();});
      CheckVisibility('.alert-success.alert', '||', "bp('.alert-success').innerText == 'This offer was successfully'", () => {unsafeWindow.close();});});
    BypassedByBloggerPemula(/shortit.pw/, () => {if (elementExists('#captchabox')) {
        notify('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      DoIfExists('.pulse.btn-primary.btn', 3);CaptchaDone(() => {DoIfExists('#btn2');});});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, () => {let $ = unsafeWindow.jQuery;setInterval(() => {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(() => {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(() => {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz/, () => {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/dutchycorp.ovh|(encurt4|10short).com|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|beinglink.in/, () => {if (cfg.get('Audio') && !/dutchycorp.ovh|encurt4.com/.test(window.location.host)) return;
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(() => {try {clearInterval(ticker);unsafeWindow.grecaptcha.execute();} catch (e) {BpNote(`reCAPTCHA execution failed: ${e.message}`, 'error');}}, 3000);}});
    BypassedByBloggerPemula(/(remixsounds|helpdeep|thinksrace).com|(techforu|studywithsanjeet).in|uprwssp.org|gkfun.xyz/, () => {DoIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);DoIfExists('.tpdev-btn', 3);DoIfExists("#tp98 button[class^='bt']", 3);DoIfExists("form[name='tp']", 'submit', 3);
      DoIfExists('#btn6', 4);var wssp = bp('body > center:nth-child(6) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > center:nth-child(3) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > script:nth-child(5)');
      if (wssp) {var scriptContent = wssp.textContent;var Linkc = scriptContent.match(/var\s+currentLink\s*=\s*["'](.*?)["']/);if (Linkc && Linkc[1]) {var CLink = Linkc[1];redirect(CLink);} else {BpNote("currentLink Not Found.");}} else {BpNote("Element Not Found.");}});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {const window = unsafeWindow;let adsh = setInterval(() => {if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);document.write(window._sharedData[0].destination);
      redirect(document.body.textContent);} else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/newsminer.uno/, () => {const window = unsafeWindow;CheckVisibility('#clickMessage', '&&', "bp('#clickMessage').innerText == 'Click any ad'", () => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});
      if (elementExists('input.form-control')) {notify('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually', false, true);window.onscroll = BpBlock();window.check2();elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/(suaurl|lixapk|reidoplacar|lapviral|minhamoto).com/, () => {if (!cfg.get('SameTab')) {SameTab();BpNote('SameTab activated to prevent new tabs');}waitForElm('button[type="submit"]:contains("FETCH LINK")', Btn1 => Btn1.click(), 10, 2);
      waitForElm('button:contains("START")', Btn2 => Btn2.click(), 10, 2);waitForElm('button:contains("PULAR CAPTCHA")', Btn3 => Btn3.click(), 10, 3);waitForElm('button:contains("FINAL LINK")', Btn4 => Btn4.click(), 10, 2);CheckVisibility('button:contains("CONTINUAR")', () => {ReadytoClick('button:contains("CONTINUAR")');});
      CheckVisibility('button:contains("DESBLOQUEAR")', () => {ReadytoClick('button:contains("DESBLOQUEAR")');});CheckVisibility('button[type="submit"]:contains("DESBLOQUEAR")', () => {ReadytoClick('button[type="submit"]:contains("DESBLOQUEAR")');});});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function () {let autoRoll = false;if (window.location.href.includes('/roll_game.php')) {window.scrollTo(0, 9999);
    if (!bp('#timer')) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/coin_roll.php');}, 3 * 1000);}}if (window.location.href.includes('/coin_roll.php')) {window.scrollTo(0, 9999);
    if (!bp("#timer")) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/wall.php');}, 3 * 1000);}}
    if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = bp(".col.s10.m6.l4 a[name='claim']", true);if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red';let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space' + hrefValue);}, 3 * 1000);} else {CheckVisibility('div.col.s12.m12.l8 center div p', () => {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/');}, 3 * 1000);});}}
    if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {BpNote('Viewing Available Ads');if (elementExists('.fa-check-double')) {BpNote('All Available Ads Watched');
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/dashboard.php');}, 3 * 1000);}CaptchaDone(() => {CheckVisibility('#submit_captcha', () => {bp("button[type='submit']").click();});});}});
    BypassedByBloggerPemula(/stly.link|(snaplessons|atravan|airevue|carribo|amalot).net|(stfly|shrtlk).biz|veroan.com/, () => {CaptchaDone(() => {ReadytoClick('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});CheckVisibility('button[class^=rounded]', () => {if (!bp('.g-recaptcha') || !bp('.cf-turnstile')) {DoIfExists('button[class^=rounded]', 2);}});
      CheckVisibility('button[class^=mt-4]', '&&', "bp('.progress-done').innerText == '100'", () => {ReadytoClick('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 4);});CheckVisibility('button[class^=mt-4]', '&&', "bp('#countdown-number').innerText == '✓'", () => {DoIfExists('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 3);});});
    BypassedByBloggerPemula(/(playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz/, () => {CaptchaDone(() => {DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);});
      let playonpc = setInterval(() => {if (!elementExists('.h-captcha') && !elementExists('.core-msg.spacer.spacer-top') && bp('#formButtomMessage').textContent == "Well done! You're ready to continue!" && !bp('#cbt').hasAttribute('disabled')) {clearInterval(playonpc);DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro/, async function() {const window = unsafeWindow;const executor = async () => {let El = window?.livewire?.components?.components()[0];while (!El) {await sleep(100);BpNote(1);El = window?.livewire?.components?.components()[0];}
      const payload = {fingerprint: El.fingerprint,serverMemo: El.serverMemo,updates: [{payload: {event: 'getData',id: 'whathappen',params: [],},type: 'fireEvent',}, ],};const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json','X-Livewire': 'true','X-CSRF-TOKEN': window.livewire_token,},method: 'POST',body: JSON.stringify(payload),});
      const json = await response.json();const url = new URL(json.effects.emits[0].params[0]);redirect(url.href);};if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']");BpNote('addRecord...');const input = document.createElement('input');input.value = window.livewire_token;input.name = '_token';input.hidden = true;a.appendChild(input);a.submit();}
      if (elementExists("button[x-text]")) {BpNote('getLink..');executor();}return;}if (elementExists("div[class='max-w-5xl mx-auto']")) {BpNote('Executing..');executor();}});
    //BypassedByBloggerPemula(/(shrinke|shrinkme)\.\w+|(paid4link|linkbulks|linclik|up4cash|smoner|minimonetize|encurtadorcashlinks|yeifly|themesilk|linkpayu).com|(wordcounter|shrink).icu|(dutchycorp|galaxy-link).space|dutchycorp.ovh|pahe.plus|(pwrpa|snipn).cc|paylinks.cloud|oke.io|tinygo.co|tlin.me|wordcount.im|link.freebtc.my.id|get.megafly.in|skyfreeshrt.top|learncrypto.blog|link4rev.site/, () => {
      //CaptchaDone(() => {if (/^(shrinke|shrinkme)\.\w+/.test(window.location.host)) {DoIfExists('#invisibleCaptchaShortlink');}else {DoIfExists('#link-view', 'submit');}});});
    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}
      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists('#btn_link_start', 2);CaptchaDone(() => {DoIfExists('#btn_link_continue');});CheckVisibility('#btn_link_continue', () => {if (!elementExists('.iconcaptcha-modal')) {DoIfExists('#btn_link_continue');} else {DoIfExists('.iconcaptcha-modal__body');}});
      CheckVisibility('.alert-success.alert-inline.alert', () => {DoIfExists('#btn_lpcont');});sleep(1000).then(() => {const input = bp('#link_input.form-control');if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'], $ = unsafeWindow.jQuery;if (elementExists('form[id=go-link]') && List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (elementExists('form[id=go-link]')){$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();
      let form = $(this),url = form.attr('action'),pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"),blogger = $(".main-header"),pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST",url: url,data: form.serialize(),dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>';notforsale.replaceWith(btn);blogger.replaceWith(btn);pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes('swiftcut.xyz')) {
      finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;} else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
    BypassedByBloggerPemula('headlinerpost.com|posterify.net', () => {let dataValue = '';for (let script of bp('script', true)) {if (script.textContent.includes('data:')) {dataValue = strBetween(script.textContent, "data: '", "'", true); break;}}let stepValue = '', planValue = '';try {const plan = JSON.parse(RSCookie('read', 'plan') || '{}');stepValue = plan.lid || '';planValue = plan.page || '';} catch {}if (!dataValue || !stepValue) return;
      const postData = {data: dataValue};const sid = RSCookie('read', 'sid');postData[sid ? 'step_2' : 'step_1'] = stepValue;if (sid) postData.id = sid;const isHeadliner = location.host === 'headlinerpost.com';const headers = {'Content-Type': 'application/x-www-form-urlencoded','Referer': isHeadliner ? 'https://headlinerpost.com/' : 'https://posterify.net/','Origin': isHeadliner ? 'https://headlinerpost.com' : 'https://posterify.net'};
      GM_xmlhttpRequest({method: 'POST',url: 'https://shrinkforearn.in/link/new.php',headers,data: Object.keys(postData).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(postData[k])}`).join('&'),withCredentials: true, onload: ({responseText}) => {try {const result = JSON.parse(responseText);if (result.inserted_data?.id) {RSCookie('set', 'sid', result.inserted_data.id, 10 / (24 * 60));}
      if ((result.inserted_data?.id || result.updated_data) && (sid || result.inserted_data?.id)) {const ShrinkUrl = isHeadliner ? `https://posterify.net/?id=${encodeURIComponent(stepValue)}&sid=${encodeURIComponent(result.inserted_data?.id || sid)}&plan=${encodeURIComponent(planValue)}` : `https://shrinkforearn.in/${encodeURIComponent(stepValue)}?sid=${encodeURIComponent(result.inserted_data?.id || sid)}`;setTimeout(() => redirect(ShrinkUrl), 3000);}} catch {}}});});
    BypassedByBloggerPemula(/flickr.com/, () => {if (!cfg.get('Flickr')) return;function createDownloadLinks() {const finalizeContainer = (container, sizesLink) => {if (!container.children.length) return;const parent = sizesLink.parentElement;if (parent) {parent.insertBefore(container, sizesLink);} else {document.body.appendChild(container);}BpNote('The Image is Ready to Save', 'info');};
      waitForElm('a[href*="/sizes/"]', sizesLink => {if (!sizesLink) return BpNote('View all sizes link not found', 'error');GM_xmlhttpRequest({method: 'GET',url: sizesLink.href,onload: response => {try {const sizesDoc = new DOMParser().parseFromString(response.responseText, 'text/html');const sizeItems = sizesDoc.querySelectorAll('.sizes-list li ol li');if (!sizeItems.length) return BpNote('No size items found', 'warn');
      const container = document.createElement('div');container.style.cssText = 'background:white;border:1px solid #ccc;padding:10px;z-index:1000;margin-bottom:5px;position:relative';const header = document.createElement('div');header.textContent = 'Bloggerpemula Script';header.style.cssText = 'text-align:center;font-weight:bold;margin-bottom:0px;color:#333';container.appendChild(header);
      const closeButton = document.createElement('button');closeButton.textContent = 'X';closeButton.style.cssText = 'position:absolute;top:0px;right:0px;background:none;border:none;font-size:14px;cursor:pointer;color:#333';closeButton.onclick = () => container.remove();container.appendChild(closeButton);let processed = 0;sizeItems.forEach(item => {const sizeLink = item.querySelector('a');
      const sizeText = sizeLink ? sizeLink.textContent.trim() : item.textContent.trim();const sizeName = `${sizeText} ${item.querySelector('small')?.textContent.trim() || ''}`;const sizeUrl = sizeLink?.href;if (!sizeUrl) {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);return;}GM_xmlhttpRequest({method: 'GET',url: sizeUrl,onload: sizeResponse => {try {const sizeDoc = new DOMParser().parseFromString(sizeResponse.responseText, 'text/html');
      const img = sizeDoc.querySelector('#allsizes-photo img[src]');if (!img) return;const saveLink = document.createElement('a');saveLink.href = img.src;saveLink.textContent = `Save ${sizeName}`;saveLink.style.cssText = 'display:block;margin:5px 0';saveLink.onclick = e => {e.preventDefault();GM_openInTab(img.src, {active: true});};container.appendChild(saveLink);} catch (e) {}processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);},
      onerror: () => {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);}});});} catch (e) {BpNote(`Error processing sizes page: ${e.message}`, 'error');}},onerror: () => BpNote('Failed to fetch sizes page', 'error')});});}if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', createDownloadLinks, {once: true});} else {createDownloadLinks();}});
    BypassedByBloggerPemula(/(mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb).com|(allnotes|sewdamp3.com|motahone|mukhyasamachar|techrain).in|(pisple|cirdro|panscu).xyz|taiyxd.net/, async () => {ReadytoClick('#age.progress-button', 2);ReadytoClick('#get-link', 3);ReadytoClick('#confirmYes', 4);
      async function handleQuiz() {const questionEl = bp('#question');if (!questionEl) return;const { result: answer, op, a, b } = BpAnswer(questionEl.textContent.trim());if (answer === null) return;let radioSelector = `input[type="radio"][name="option"][value="${answer}"]`;let radio = bp(radioSelector);if (!radio && op === '/') {const altAnswer = Math.round(a / b);radioSelector = `input[type="radio"][name="option"][value="${altAnswer}"]`;radio = bp(radioSelector);}
      if (!radio) {const options = Array.from(bp('input[type="radio"][name="option"]', true)).map(r => parseInt(r.value));const closest = options.reduce((p, c) => Math.abs(c - answer) < Math.abs(p - answer) ? c : p);radioSelector = `input[type="radio"][name="option"][value="${closest}"]`;radio = bp(radioSelector);}if (!radio) {BpNote('Tidak ada opsi yang valid untuk dipilih', 'error');return;}ReadytoClick(radioSelector);await sleep(3000);ReadytoClick('#next-page-btn.progress-button');}await handleQuiz();});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|(cegen|thunder-appz.eu).org|zaku.pro|veganab.co|skyfreecoins.top|manga4nx.site/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si', () => {
      CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => ReadytoClick('button:contains("Verify")',2));const tano = window.location.href;if (['dailytech-news.eu','wii.si', 'bubblix.eu', 'bitwidgets.net', 'virtuous-tech.net', 'carfocus.site', 'biit.site'].some(tino => tano.includes(tino))) {elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));} else {CheckVisibility('#loadingDiv[style^="display"] > span', () => {const buttonText = strBetween(bp('#loadingDiv[style^="display"] > span').textContent, "Click", "To Start", false);elementReady(`#loadingDiv[style^="display"] .btn.btn-primary:contains("${buttonText}")`).then(buttonElement => {
      const buttons = Array.from(bp('#loadingDiv[style^="display"] .btn.btn-primary', true));const index = buttons.indexOf(buttonElement);if (index === -1) return;const selectorOptions = ['button.btn:nth-child(2)', 'button.btn:nth-child(3)', 'button.btn:nth-child(4)', 'button.btn:nth-child(5)', 'button.btn:nth-child(6)'];const chosenSelector = selectorOptions[index];if (chosenSelector) sleep(2000).then(() => ReadytoClick(`#loadingDiv[style^="display"] ${chosenSelector}`));});});}elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});
    // If you donate, I will give you the code privately. You just need to replace the code above with the code I gave you. , Jika anda berdonasi , akan saya berikan kodenya secara private , Anda tinggal mengganti kode diatas ini dengan kode yang saya berikan
    }})();

// ----- Bypass Acortalink.me ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/commit/61d9949022b428939b5be4243b0e5331ea64afcb) -----
// used in: hackstore.fo
(function() {
    'use strict';

    if (/acortalink.me/.test(window.location.href)) {

        //Try to click the button after the page is fully loaded
        window.addEventListener('load', function() {
            const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
            popupsToRedirects();

            let button = document.querySelector('#contador');
            if (button) {
                button.click();
            }
        })

        //Bypass logic by Adguard Team - https://github.com/AdguardTeam/AdguardFilters/commit/61d9949022b428939b5be4243b0e5331ea64afcb
        window.addEventListener("message", (e => {
            e?.data?.includes("__done__") && e?.data?.length < 9 && Object.defineProperty(e, "source", {
                value: ""
            })
        }), !0);
        const e = new MutationObserver((() => {
            document.querySelector("a.button#contador") && (e.disconnect(), setTimeout((() => {
                postMessage("__done__")
            }), 100))
        }));
        e.observe(document, {
            childList: !0,
            subtree: !0
        })

    }

})();
// ----- ----- -----

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


// ----- Bypass bstlar ------
// adapted to userscript from code by harryitz for FastForward
// https://github.com/FastForwardTeam/FastForward/commit/89fb43ce12718b3d83edb0eb5abec4c683c16925
(function() {
    'use strict';

    if (/bstlar.com/.test(window.location.href)) {

        function getCookie(name) {
            let value = '; ' + document.cookie;
            let parts = value.split('; ' + name + '=');
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        async function handleRedirect(data) {
            if (data.currentTarget?.responseText?.includes('tasks')) {
                const response = JSON.parse(data.currentTarget.responseText);
                const userAgent = navigator.userAgent;
                const XSRF_TOKEN = getCookie('XSRF-TOKEN');
                const boostellar_session = getCookie('boostellar_session');
                const PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud = getCookie('PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud');
                const cf_clearance = getCookie('cf_clearance');
                const task_request = await fetch('https://bstlar.com/api/link-completed', {
                    method: 'POST',
                    headers: {
                        accept: 'application/json, text/plain, */*',
                        authorization: 'null',
                        cookie: `XSRF-TOKEN=${XSRF_TOKEN}; boostellar_session=${boostellar_session}; PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud=${PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud}; cf_clearance=${cf_clearance}`,
                        origin: 'https://bstlar.com',
                        pragma: 'no-cache',
                        priority: 'u=1, i',
                        referer: 'https://bstlar.com/hV/krampus',
                        'user-agent': userAgent,
                        'x-xsrf-token': XSRF_TOKEN,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        link_id: response['link']['id']
                    })
                });

                if (task_request.status !== 200) return;
                const task_response = await task_request.text();

                const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);
                redirect(task_response);
            }
        }

        function interceptXHR() {
            const open = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function() {
                this.addEventListener("load", function(data) {
                    handleRedirect(data);
                });
                open.apply(this, arguments);
            };
        }

        interceptXHR();
    }

})();
// ----- ------ ----------

//---Bypass.city clickable result----
(function() {
    'use strict';
    if (/^https:\/\/(bypass\.city|adbypass\.org)\/bypass\?bypass=.*$/.test(window.location.href)) {
        function checkForResolvedUrl() {
            const xpath = '/html/body/div[1]/main/div/main/div[1]/div/div[2]/div/p';
            const pElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (pElement && pElement.innerText.includes('The resolved url is: ')) {
                const resolvedUrl = pElement.innerText.split('The resolved url is: ')[1];
                if (resolvedUrl && !resolvedUrl.endsWith('...')) {
                    const clickableLink = document.createElement('a');
                    clickableLink.href = `https://${resolvedUrl}`;
                    clickableLink.innerText = `The resolved url is: ${resolvedUrl}`;
                    clickableLink.style.color = '#3366CC';
                    clickableLink.style.display = 'block';
                    pElement.innerHTML = ''; // Clear the original text
                    pElement.appendChild(clickableLink);
                }
                clearInterval(intervalId);
            }
        }
        const intervalId = setInterval(checkForResolvedUrl, 2000);
    }
})();
//-------


// ----- Extra bypasses -----
(function() {
    'use strict';

    const url = window.location.href
    const isValidUrl = url => /^(?:https?|ftp):\/\/(?:\w+\.){1,3}\w+(?:\/\S*)?$/.test(url);
    function redirect(finalUrl) {
        //if (isValidUrl(finalUrl)) {
            //typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);
            window.location.assign(finalUrl);
        //} else {
        //    showAlert("Invalid URL: " + finalUrl, 'error', 3000, '', 'secondary');
        //}
    }
    const fastRedirect = (url) => window.location.assign(url);
    const showClickMsg = () => typeof showAlert === 'function' ? showAlert("Button clicked...", 'success', 1000, '', 'secondary') : console.log("Button clicked...");
    const clickElementBySelectorWithMsg = (selector) => { document.querySelector(selector).click(); showClickMsg(); };
    const clickElementBySelector = (selector) => { clickElementBySelectorWithMsg(selector); };
    const clickElementWithMsg = (element) => { element.click(); showClickMsg(); };
    const clickElement = (element) => { clickElementWithMsg(element); };
    const getParam = (url, param) => new URLSearchParams(url).get(param);
    const rot13 = str => str.replace(/[A-Za-z]/g, char => String.fromCharCode((char.charCodeAt(0) % 32 + 13) % 26 + (char < 'a' ? 65 : 97)));
    const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
    const afterDOMLoaded = (callback) => document.addEventListener('DOMContentLoaded', callback);
    const afterWindowLoaded = (callback) => window.addEventListener('load', callback);
    
    const clickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); clickElement(button); } }, 1000); };
    const redirectIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button.href && isValidUrl(button.href)) { clearInterval(intervalId); redirect(button.href) } }, 500); };
    const clickIfExistsNonStop = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector + ':not(.disabled)'); if (button) { clickElement(button); } }, 500); };
    const redirectIfNotDisabled = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton && !linkButton.href.includes('/undefined') && !linkButton.href.includes('javascript:')) { clearInterval(intervalId); setTimeout(function() {redirect(linkButton.href);}, 500) } }, 500); };
    const clickIfNotDisabled = (buttonSelector) => { let intervalId = setInterval(() => { let button = document.querySelector(buttonSelector); if (!button.hasAttribute('disabled') && !button.classList.contains('disabled')) { clearInterval(intervalId); setTimeout(function() {clickElement(button);}, 500) } }, 500); };
    const checkElementVisible = element => element !== null && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) && (!element.getAttribute('style') || !element.getAttribute('style').includes('display:none'));
    const clickIfVisible = selector => { afterDOMLoaded(function() { let intervalId = setInterval(() => { let element = document.querySelector(selector); if (checkElementVisible(element)) { clearInterval(intervalId); element.click(); showClickMsg(); } }, 1000); }); };
    const preventForcedFocusOnWindow = () => {window.mouseleave = true; window.onmouseover = true; document.hasFocus = function() {return true;}; Object.defineProperty(document, 'webkitVisibilityState', {get() {return 'visible';}});
        Object.defineProperty(document, 'visibilityState', {get() {return 'visible';}}); window.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true);
        window.addEventListener('focus', onfocus, true);document.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true); Object.defineProperty(document, 'hidden', {get() {return false;}});};

    function boostTimers() { // Overwrite setInterval and setTimeout
        const originalSetInterval = window.setInterval;
        const originalSetTimeout = window.setTimeout;
        window.setInterval = function(func, delay, ...args) {
            const newDelay = delay * 0.02;
            return originalSetInterval(func, newDelay, ...args);
        };
        window.setTimeout = function(func, delay, ...args) {
            const newDelay = delay * 0.02;
            return originalSetTimeout(func, newDelay, ...args);
        };
        if (typeof showAlert === 'function') {
            showAlert('Timers boosted', 'success', 3000, '', 'secondary');
        }
    }

    // --Captcha checks--
    function checkRecaptchaSolved() {
        return window.grecaptcha && window.grecaptcha.getResponse().length !== 0;
    }
    
    const clickIfRecaptchaSolved = (selector) => {
        let intervalId = setInterval(() => {
            let button = document.querySelector(selector);
            if (window.grecaptcha.getResponse().length !== 0) {
                clearInterval(intervalId);
                button.click();
            }
        }, 1000);
    };
    
    function checkHCaptchaSolved() {
        if (document.querySelector('.h-captcha')) {
            return window.hcaptcha.getResponse().length !== 0;
        }
        return true;
    }
    
    function clickIfHCaptchaSolved(selector) {
        let intervalId = setInterval(() => {
            if (checkHCaptchaSolved()) {
                clearInterval(intervalId);
                document.querySelector(selector).click();
            }
        }, 1000);
    }
    
    function openHCaptchaWhenVisible() {
        let intervalId = setInterval(() => {
            let hCaptchaWidget = document.querySelector('iframe[src*="hcaptcha.com"]');
            if (hCaptchaWidget && hCaptchaWidget.offsetParent !== null) {
                clearInterval(intervalId);
                window.hcaptcha.execute();
            }
        }, 500);
    }
    
    function checkCloudflareCaptchaSolved() {
        if (document.querySelector('.cf-turnstile') || document.querySelector('#captcha-turnstile')) {
            return window.turnstile.getResponse().length !== 0;
        }
        return true;
    }
    
    function checkGoogleRecaptchaSolved() {
        if (document.querySelector('.g-recaptcha') || document.querySelector('#captchaShortlink') || document.querySelector('#captcha_container') || document.querySelector('#captchaShortlinker')) {
            return window.grecaptcha.getResponse().length !== 0;
        }
        return true;
    }
    
    const clickIfCloudflareCaptchaSolved = (selector) => {
        let intervalId = setInterval(() => {
            let button = document.querySelector(selector);
            if (checkCloudflareCaptchaSolved()) {
                clearInterval(intervalId);
                button.click();
            }
        }, 1000);
    };
    
    const redirectIfCloudflareCaptchaSolved = (selector) => {
        let intervalId = setInterval(() => {
            let button = document.querySelector(selector);
            if (checkCloudflareCaptchaSolved()) {
                clearInterval(intervalId);
                redirect(button.href);
            }
        }, 1000);
    };
    
    function checkAllCaptchasSolved() {
        return (checkCloudflareCaptchaSolved() && checkRecaptchaSolved() && checkHCaptchaSolved());
    }
    
    function clickIfAllCaptchasSolved(selector) {
        let intervalId = setInterval(() => {
            if (checkAllCaptchasSolved()) {
                clearInterval(intervalId);
                clickIfExists(selector);
            }
        }, 1000);
    }


    // --Bypasses--

    //peliculasgd.net, animesgd.net, club-hd.com, librolandia.net, pelishd4k.com, programasvirtualespc.net, pasteprivado.blogspot.com
    /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    // mayas.travel used in fiuxy2.co, gatonplayseries.com
    /(mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org|constanteonline.com)\/api/.test(url) ? redirect(decodeURIComponent(url.split('&url=')[1].split('&')[0])) : null;
    /(mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org|constanteonline.com)\/\#/.test(url) ? redirect(atob(atob(atob(url.split('/#')[1]))).split('&url=')[1].split('&')[0]) : null;

    // peliculasgd.net
    /safez.es/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('o.php?l=')[1].split('|')[0]))))) : null;

    // latinomegahd.net
    /acorte.xyz/.test(url) ? redirect(atob(url.split('&target=')[1])) : null;

    // elitetorrent.com tomadivx.net infomaniakos.net divxatope.net
    function caesarDecipher(str) {
        const shift = 13;
        return str.replace(/[a-zA-Z]/g, char => {
          const base = char <= 'Z' ? 65 : 97;
          return String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        });
    }
    if (/(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/.test(url)){
        const encodedURL = url.split('/s.php?i=')[1];
        const decodedURL = atob(atob(atob(atob(atob(encodedURL)))));
        const finalURL = caesarDecipher(decodedURL); // or rot13(decodedURL)
        redirect(finalURL);
    }

    // AdClicker
    if (/(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url/.test(url)){
        let decodedUrl = decodeURIComponent(atob(atob(atob(url.split('/url/#')[1]))));
        if (decodedUrl.includes('&amp;url=')) {decodedUrl = decodedUrl.split('&amp;')[1];}
        let urlParam = new URLSearchParams(decodedUrl).get('url');
        if (urlParam) {redirect(urlParam);}
    }

    // pelishd4k.com
    /altearnativasa.com\/\#/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('/#')[1]))).split('&url=')[1].split('&')[0])) : null;

    // descargasdirecta.com
    /playpastelinks.com/.test(url) ? afterDOMLoaded(function() {setTimeout(() => { document.querySelector('#btn-redirect').click(); }, 8000)}) : null;
    /mh.gourlpro.com/.test(url) ? redirect(atob(atob(atob(url.split('#')[1])))) : null;

    // peliculasmf.com
    /tumangasdd.com/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#')[1]))).split('url=')[1])) : null;

    // dw-anime.net
    /dw-anime.net\/short\/\?anonym=/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    //leak.sx & pornleaks.in
    /comohoy.com/.test(url) ? redirect(atob(url.split('?url1=')[1])) : null;
    /privatenudes.com\/model/.test(url) ? afterDOMLoaded(function() {redirect(atob(document.querySelector('.btn-custom.btn-block.noads').href.split('?url=')[1]))}) : null;

    // sexyforums.com
    /sexyforums.com\/redirect/.test(url) ? redirect(atob(url.split('?to=')[1]).replace('amp;', '')) : null;

    // forum.sexyegirls.to, forum.sorrymother.to
    /forum.(sexyegirls|sorrymother).to\/redirect\?to=/.test(url) ? redirect(atob(url.split('?to=')[1])) : null;

    //sphinxanime.com
    /sphinxanime.com\/short/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    //japanpaw.com
    /japanpaw.com\/out/.test(url) ? redirect(atob(url.split('out/?')[1])) : null;
    /paste.japan-paw.net\/\?v=/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="https://shrinkme.io/st?api="]').forEach(link => {
            link.href = decodeURIComponent("https://" + link.href.split('?s=')[1]);
        }); }) : null;

    // mega-mkv.com
    /pastesmkv.xyz\/\?v=/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https://shrinkearn.com/full?api="]').forEach(link => {
            link.href = atob(link.href.split('&url=')[1].split('&')[0]);
        }); }) : null;

    //intercambiosvirtuales.org
    /1v.to\/t/.test(url) ? redirect(atob(atob(atob(atob( atob(url.split('/t/')[1]).replace('+P', '') ))))) : null;

    // tucinehd.com
    /tucinehd.com\/links/.test(url) ? afterDOMLoaded(redirectIfExists('#link')) : null;

    //anime-world.in 2nd step
    /link.unlockner.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn.get-link')}) : null;

    //atozcartoonist.me
    /(cybercityhelp|akcartoons).in/.test(url) ? afterDOMLoaded(function() {
        const formSubmitButton = document.querySelector('#tp982');
        if (formSubmitButton) {
            document.querySelector('#username').value = 'https://www.thomann.de/' + Math.random().toString(36).substring(2, 12);
            formSubmitButton.click();
        } else {
            redirect(document.querySelector('a[href*="go.moonlinks.in"]'));
        }
    }) : null;
    /go.moonlinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;

    // animedekho.in
    /secure.moderngyan.com/.test(url) ? afterDOMLoaded(function() {
        clickWithDelay('a.button', 1000);
        clickWithDelay('#notarobot', 2000);
        redirectIfExists('#btn7');
    }) : null;
    // clicked by uBO already: /earning.bankshiksha.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp-snp2')}) : null;
    /earnbox.sattakingcharts.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp-snp2')}) : null;
    /set.seturl.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // seturl.in used by animedekho.in
    /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in|payalgaming.co.in/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickIfExists('#tp-snp2');
        clickIfExists('#cross-snp2');
    }) : null;

    // linkneverdie.net
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#originalLink')}) : null;

    //shrinkme.us
    /shrinkme.(us|site|cc|vip|dev|ink|click)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;

    // /travelkuku.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn2')}) : null;

    //freecoursesite.com 2nd step - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/43
    /myshrinker.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /myshrinker.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    //test.shrinkurl.org https://github.com/FastForwardTeam/FastForward/issues/1365
    /test.shrinkurl.org/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /test.shrinkurl.org/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // fc-lc
    /^https:\/\/(fc-lc.xyz)\/.*$/.test(url) ? afterWindowLoaded(function() {
        clickIfExists('#invisibleCaptchaShortlink');
    }) : null; 
    //type 1:https://fc-lc.xyz/aPxvk which leads to fitdynamos.com - https://github.com/uBlockOrigin/uAssets/pull/20826 - https://github.com/uBlockOrigin/uAssets/issues/25210
    //(different from type2: https://fc-lc.xyz/ymUtEPUB which leads to gamezizo.com, https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8736277, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/162)
    /^https:\/\/(fitdynamos.com|labgame.io)\/.*$/.test(url) ? afterWindowLoaded(function() {
        clickIfExists('#next');
        clickIfExists('#scroll:not(.hidden)');
        clickIfExists('#glink:not(.hidden)');
        clickIfExists('#surl');
    }) : null;

    //cpmlink.net
    /cpmlink.net\/go/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#btn-main')}) : null;

    //kingshortener.com (seen used in reidostorrents.com)
    /kingshortener.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /kingshortener.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    //shareus.io https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/2
    /shareus.io/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('#root > div > main > div.main-container-1 > div.main-container-2 > div:nth-child(1) > div.adunit-container > button')}) : null;

    // shareus.io (type 2) https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8501665
    if (/shareus\.io\/go\?sid=/.test(url)){
      popupsToRedirects();
      let selector = '#custom-root > div > div:nth-child(3) > div.flex.align-center.space-between.button-texts > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.css-s7ybtv';
      afterDOMLoaded(function() {setTimeout(() => { clickIfExists(selector);}, 1000);})
    }

    //verpeliculasonline.org && subtituladas.com
    /(verpeliculasonline.org|subtituladas.com)\/enlace/.test(url) ? afterDOMLoaded(function() {redirect(document.getElementById('link').href.split('?s=')[1])}) : null;

    //maxcine.net
    /links.cuevana.ac\/short/.test(url) ? afterDOMLoaded(function() {
        let extractedUrl = document.documentElement.innerHTML.split('\n').find(line => line.includes("document.getElementById('contador').href = 'htt")).split("href")[1].match(/'([^']+)'/)[1];
        extractedUrl.includes('?s=') ? redirect(extractedUrl.split('?s=')[1]) : redirect(extractedUrl);
    }) : null;

    // serieslandia.com, mega1link.com, peliculas-dvdrip.com, programasvirtualespc.net
    /(pelistop.xyz|tuconstanteonline.com|librolandia.cc|posicionamientoweb.click|dietadisociada.info)\/#/.test(url) ? (() => {
        redirect(decodeURIComponent(atob(atob(atob(url.split('/#')[1]))).split('&url=')[1].split('&')[0]));
    })() : null;

    // subtituladas.org
    /subtituladas.org\/enlace/.test(url) ? boostTimers() : null;
    /subtituladas.org\/enlace/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#link')}) : null;

    //ouo.io
    /ouo.io/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;
    /ouo.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#btn-main')}) : null;

    //cuty.io - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/46
    // /exeo.app|mrgec.com|cety.app|cuty.me|cutyion.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#submit-button')}) : null;

    //oko.sh
    /lnbz.la/.test(url) ? afterDOMLoaded(function() {timeSec = 0; afterElementVisible('form', function() {clickIfExists('button#getlink.btn-success');}) }) : null;

    // tii.la oko.sh final step
    /dekhe.click|indianshortner.com|lnbz.la|oii.la|falpus.com|exnion.com|4ace.online|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|wordcount.im|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|iir.la|tvi.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com|exe-urls.com|linkjust.com/.test(url) ? afterDOMLoaded(function() {
        preventForcedFocusOnWindow();
        redirectIfNotDisabled('a.get-link');
    }) : null;

    // shon.xyz, seen in mega-descargas-serie.blogspot.com
    /shon.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-main')}) : null;

    //vegamovies, worldfree4u, desiremovies.cymru, hdhub4u.capetown, moviesdrive.world ... https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8508217
    const redirectOrClickIfExistsEnabledWithDelay = (selector) => { afterDOMLoaded(function() { //Wait for the page to load
        let intervalId = setInterval(() => { //Check every 0.5s
          let button = document.querySelector(selector + ':not(.disabled)'); //Check the element is not disabled
          if (button) {setTimeout(() => { isValidUrl(button.href) ? redirect(button.href) : clickElement(button);}, 100);} //Redirect or click, with a 0.1s delay
        }, 500);});};
    if (/((infytips|remixodiadj|bgmiaimassist).in|(cybertyrant|profitshort|technorozen|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt|betsatta|stockwallah|gtxhosty|anyrojgar).com|mphealth.online|hubdrive.me|advisecreate.fun|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|offerboom.top|kvkparbhani.org)/.test(url)){
        if (url.includes('?r=')) redirect(atob(url.split('?r=')[1]));
        else redirectOrClickIfExistsEnabledWithDelay('.rd_btn');
    }

    // hdhub4u.capetown
    /bgmiaimassist.in|(stockwallah|inventoryidea).com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('a#verify_btn');
        redirectIfExists('a#verify_btn');
    }) : null;
    

    // hubcloud telegram link - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/185
    // /bloggingvector.shop\/re2/.test(url) ? redirect(atob(url.split('/re2/')[1])) : null;
    /hubcloud.(club|dad)\/tg\/go.php\?re=/.test(url) ? afterDOMLoaded(function() { document.body.innerHTML.trim().includes('Invalid Request - Please Come through Links again') ? setTimeout(() => {window.location.reload()}, 1500) : null}) : null;

    // desiremovies.cymru
    /gyanigurus.net\/view/.test(url) ? afterDOMLoaded(function() {clickIfExists('#show_button')}) : null;

    // dramaday.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/21
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-1')}) : null;
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-2')}) : null;
    /moneyblink.com\/ready\/go\?u=/.test(url)? redirect(atob(url.split('?u=')[1])) : null;

    // dramaday.me -  linkspy.cc & droplink.co/st?api=...&url=... concatenated
    // ovagames.com - linkspy.cc & clicksfly.com|shrinkme.io|clk.sh|shrinkearn.com|clk.asia|clk.wiki concatenated - https://github.com/FastForwardTeam/FastForward/issues/1352
    // l4s.cc
    if (/linkspy.cc/.test(url) && url.includes('aHR0')) {
        const decodedUrl = atob('aHR0' + url.split('aHR0')[1]);
        const urlParam = getParam(decodedUrl,'url');
        if (!urlParam) { // general case
            fastRedirect(decodedUrl);
        } else if (isValidUrl(urlParam)) { //case for dramaday.me
            fastRedirect(urlParam);
        } else if (isValidUrl(atob(urlParam))) { //case for ovagames.com
            fastRedirect(atob(urlParam));
        }
    }
    /www.ovagames.com\/.*\.html$/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https://l4s.cc/q/e/1f/aHR0"]').forEach(link => {
            let decodedUrl = atob(link.getAttribute('href').split('/1f/')[1]);
            let urlParam = getParam(decodedUrl,'url');
            urlParam ? link.href = atob(urlParam) : link.href = decodedUrl;
        }); }) : null;
    /dramaday.me\/[^\/]+\/$/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https://l4s.cc/q/e/482/"]').forEach(link => {
            link.href = atob(link.getAttribute('href').split('/482/')[1]);
        }); }) : null;

    //dropgalaxy https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/2
    // /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {clickIfExists('#method_free')}) : null; //1st page
    // /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#downloadbtn')}) : null; //2nd page
    // /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {  //3rd page
    //     let intervalId = setInterval(function() {// Keep checking if link is available, every 1s
    //         let downloadUrl = document.getElementById('dllink').getAttribute('action');
    //         if (downloadUrl) {
    //             clearInterval(intervalId);
    //             alert('Press OK to go to the download link:\n' + downloadUrl);
    //             redirect(downloadUrl)
    //         }
    //     }, 1000);
    // }) : null;

    // short-ly.co https://github.com/FastForwardTeam/FastForward/issues/1363
    /short-ly.co/.test(url) ? afterDOMLoaded(function() {redirectIfExists('.btn-secondary')}) : null;

    // multimovies.space, https://github.com/FastForwardTeam/FastForward/issues/1434, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/91
    function modifyScript(searchText, replacementText) {
        const isRegex = searchText instanceof RegExp;
    
        document.querySelectorAll('script').forEach(script => {
            if (isRegex ? searchText.test(script.innerText) : script.innerText.includes(searchText)) {
                script.remove();
                document.body.appendChild(Object.assign(document.createElement('script'), {
                    text: script.innerText.replace(new RegExp(searchText, 'g'), replacementText)
                }));
            }
        });
    }
    
    const handleShamikcardButtons = (buttonSelector, targetText) => afterDOMLoaded(() => setInterval(() => {
        const button = document.querySelector(buttonSelector);
        if (button && button.textContent.includes(targetText) && !(targetText == 'Get Link')) {
            setTimeout(() => button.click(), 500);
        }
    }, 2000));
    if (/(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|(tejtime24|cyberlynews|quizrent).com/.test(url)){
        preventForcedFocusOnWindow();//preventForcedFocusOnWindow not working for this site apparently
        afterWindowLoaded(function() {modifyScript('timeLeft = duration', 'timeLeft = 0')}); // skip timers
        //##Intermediate buttons
        handleShamikcardButtons('#topButton', 'Click to Continue');
        handleShamikcardButtons('#topButton', 'Continue');
        handleShamikcardButtons('#bottomButton', 'Click to Continue');
        handleShamikcardButtons('#bottomButton', 'Continue');
        handleShamikcardButtons('#bottomButton', 'Next'); // added for https://lksfy.com/59EhFF
        //##Final button
        (() => afterDOMLoaded(() => setInterval(() => { const button = document.querySelector('#bottomButton'); if (button && button.textContent.includes('Get Link') && button.style.display === 'block') { setTimeout(() => button.click(), 2000); } }, 1000)))(); //Final button
    }
    /linkshortify.in|lksfy.com/.test(url) ? afterDOMLoaded(function() {
        let intervalId = setInterval(() => {
            const button = document.querySelector('a.get-link');
            if (button && checkCloudflareCaptchaSolved() && !button.classList.contains('disabled')) {
                clearInterval(intervalId);
                button.click();
            }
        }, 1000);
    }) : null;

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10649981
    // https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/discussions/263369
    // https://shrinkforearn.xyz/vAs1ikmO - leechpremium.link
    // https://www.reddit.com/r/uBlockOrigin/comments/1g50rur/unable_to_bypass_this_shortlink/
    const clickWithDelay = (selector, delay) => { showAlert('Clicking button in ' + Math.round(delay / 1000) + 's', 'info', delay, '', 'secondary'); setTimeout(function() { clickElementBySelector(selector); }, delay); };
    if (/uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/.test(url)) {
        afterDOMLoaded(function() {
            modifyScript('timeLeft = duration', 'timeLeft = 0'); // skip timers
            clickWithDelay('#bottomButton', 0);
            clickWithDelay('#open-link', 3000);
        });
    }
    /shrinkforearn.in/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.get-link')}) : null;

    // leechpremium.link
    /(ez4short.com|zshort.io)\/[^\/]+\/\?token=[^\/]+$/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#aaoii2o')}) : null;

    // https://droplink.co/4eSowGz4 used by leechpremium.link step 2
    /onlinetntextbooks.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go_d2');}) : null;

    // starsddl.me
    /starsddl.me\/short\/\?anonym=/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    // uhdmovies.icu, topmovies.icu (modlist.in), moviesmod.cash
    //uBO filter bypass: https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11995191
    // button-clicking method
    /(tech|technews).unblockedgames.world/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('span.block > a:nth-child(1)');
        clickIfExists('#verify_button');
        clickIfExists('#verify_button2');
        redirectIfExists('#two_steps_btn');
    }) : null;
    //alt method (thanks to https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11063787)
    if (/(tech|technews).unblockedgames.world/.test(url)) {
        afterDOMLoaded(function() {
            // First step
            const landingElement = document.querySelector("#landing");
            if (landingElement) {
                landingElement.submit();
            // Second step
            } else {
                // Extract the target URL from the script contents and redirect to it
                const scriptElements = Array.from(document.getElementsByTagName("script"));
                const matchedUrl = scriptElements
                    .map((script) => script.textContent.match(/https:\/\/technews\.unblockedgames\.world\/\?go=pepe-[\w-]+/))
                    .filter((match) => match) // Filter out null values
                    .map((match) => match[0])[0]; // Get the first matching URL

                if (matchedUrl) {
                    window.location.href = matchedUrl;
                }
            }
        });
    }

    // seriezloaded.com.ng
    /seriezloaded.com.ng\/sl-download\/\?link=/ .test(url) ? afterDOMLoaded(function() { redirect(document.querySelector('.sl-button').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1]) }) : null;

    // privatemoviez.homes
    /www.itscybertech.com/.test(url) ? popupsToRedirects() : null;
    /www.itscybertech.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.button')}) : null;
    /www.itscybertech.com/.test(url) ? clickIfVisible('#gtbtn2') : null;
    /www.itscybertech.com/.test(url) ? clickIfVisible('.download') : null;
    /thegadgetking.in/.test(url) ? popupsToRedirects() && afterDOMLoaded(function() {clickIfExists('#openbtn')}) : null;

    // Linkvertise
    const solveThroughBypassCity = (linkShortenerUrl) => {if (!/(bypass.city|adbypass.org)/.test(linkShortenerUrl)) {redirect('https://adbypass.org/bypass?bypass=' + encodeURIComponent(linkShortenerUrl))}};
    /* if (/linkvertise.com|(linkvertise|link-to).net/.test(url)) {
        //solve easy case locally
        let rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {
            redirect(atob(rParam));
        // solve hard case through bypass.city
        } else {
            solveThroughBypassCity(url);
        }
    } */

    // bstlar.com - not supported by bypass.city anymore
    // // @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(bstlar.com)/
    // /bstlar.com/.test(url) ? solveThroughBypassCity(url) : null;

    // empebau.eu used in t.me/barkofleaks
    ///empebau.eu\/s\/linker\/.*/.test(url) ? afterWindowLoaded(function() {
    //    const targetUrl = document.querySelector('#box > p:nth-child(1) > a:nth-child(1)').href;
    //    if (!targetUrl.startsWith('https://empebau.eu')) {redirect(targetUrl)}
    //}) : null;
    /empebau.eu\/s/.test(url) ? afterDOMLoaded(function() {
        redirect(document.documentElement.innerHTML.match(/let url = "(https?:\/\/[^"]+)";/)[1]);
    }) : null;

    // Epicload (seen used in t.me/joinchat/3cfq_APl8Hs4N2Ux)
    /epicload.com\/files/.test(url) ? afterDOMLoaded(function() {
        modifyScript('var timer = 15', 'var timer = 0');
        redirectIfExists('.btn-primary');
        clickIfNotDisabled('.btn-getlink');
    }) : null;

    // mirrorace, doodrive, tested in fluxyrepacks.site
    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('.hv-grid > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > button:nth-child(2)')}) : null; //continue button
    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4) > button:nth-child(1)')}) : null; //close anti-adblock banner
    /doodrive.com\/f/.test(url) ? window.addEventListener("load", function(event) {setTimeout(function() { clickIfExists('button.uk-button-primary:nth-child(1)')}, 1000) }) : null; //continue button

    // taodung.com
    /ipamod.com\/redirect-to/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;

    // 9xflix.business
    /9xflix\.(\w+)\/m\/goto/.test(url) ? redirect(url.split('/goto/')[1]) : null;

    // gplinks, used in psa.wf sometimes, changes domains daily, use https://greasyfork.org/scripts/490365 instead
/*     if (/mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/.test(url)) {
        const clickIfVisible2 = (selector) => setInterval(() => { const button = document.querySelector(selector); if (button && button.style.display === 'block') { setTimeout(function() {button.click()}, 500);; clearInterval(intervalId); } }, 1000);
        const clickIfLinkIsReady = buttonSelector => setInterval(() => { const button = document.querySelector(buttonSelector); if (button && button.getAttribute('href') !== '#') setTimeout(function() {button.click()}, 500);; }, 1000);
        afterDOMLoaded(function() {
            count = 0; //Skip the timer
            clickIfVisible2('#VerifyBtn');
            clickIfLinkIsReady('#NextBtn');
        });
    }
    /gplinks.co\/[^/#]+\/(?:#|\?pid=)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#link-btn > a')}) : null; */

    // toonshub.xyz - https://earnmoneyyt.com/safe.php?link=RNRm2b2H
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp98')}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.tp-blue')}) : null;
    /sheralinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /go.bloggingaro.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /land.povathemes.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://www.udlinks.com/kzrJRjj - https://publicearn.com/vrpNlNc
    /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime|careersides).com|(sabarpratham|pubprofit|sarkariyojnaa|reliablesp).in|dear-lottery.org/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickWithDelay('#tp98', 2000);
        clickWithDelay('#btn6', 2000);
    }) : null;
    /www.udlinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // publicearn.com - https://t.me/edutechvn - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/99, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/161
    /thelatintwistcafe.com/.test(url) ? afterDOMLoaded(function() {
        count = 0;
        setTimeout(function() {document.querySelector('#tp98').click();}, 3000);
        setTimeout(function() {document.querySelector('#btn6').click();}, 3000);
        setTimeout(function() {document.querySelector('#.tp-blue').click();}, 3000);
    }) : null;

    // https://www.techkhulasha.com/?token=T3VzT - gyanilinks
    /techkhulasha.com|blog.bloggerishyt.in/.test(url) ? afterDOMLoaded(function() {
        modifyScript(/9000|30000|1000/gm, '100');
        clickIfExists('#popup-button');
        clickIfExists('#gotolink');
        clickIfExists('a.bt-success');
        if (document.querySelector('#ad-top > h4:nth-child(2)').innerHTML.includes('step 2')) {clickIfExists('#gotolink')};
    }) : null;
    /golink.bloggerishyt.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // gtlinks, used in toonsouthindia.com
    /* /tech.hipsonyc.com|itijobalert.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('.bt-success')}) : null;
    /tech.hipsonyc.com|itijobalert.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#popup-button')}) : null;
    /tech.hipsonyc.com|itijobalert.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#gotolink')}) : null; */
    /tech.itijobalert.in\/\?token\=/.test(url) ? redirect("https://golink.bloggerishyt.in/" + url.split('?token=')[1]) : null;
    /golink.(gyanitheme.com|bloggerishyt.in)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/10
    // /veganab.co\/\?link=/.test(url) ? redirect('https://za.gl/' + url.split('?link=')[1]) : null;

    // https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/discussions/165265
    /veganab.co/.test(url) ? popupsToRedirects() : null;
    /veganab.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn-hover:nth-child(2)')}) : null;
    const extractLinkFromButtonOnclick = buttonElement => buttonElement.getAttribute("onclick").match(/window\.open\('([^']+)'/)[1];
    const redirectToOnclickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); redirect(extractLinkFromButtonOnclick(button)) } }, 500); };
    /camdigest.com/.test(url) ? afterDOMLoaded(function() {redirectToOnclickIfExists('#wpsafe-link > a')}) : null;
    /pastebin.com\/raw/.test(url) ? afterDOMLoaded(function() { const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }) : null; //for firefox, with afterDOMLoaded (must be first)
    /pastebin.com\/raw/.test(url) ? !function() {const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }() : null; //for chrome, without afterDOMLoaded (must be second)

    const clickIfCorrectText = (selector, textContent) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.innerText.includes(textContent) ) { clearInterval(intervalId); setTimeout(() => { button.click();}, 500); }}, 500); };
    /tawda.xyz\/tag/.test(url) ? preventForcedFocusOnWindow() : null;
    /tawda.xyz\/tag/.test(url) ? popupsToRedirects() : null;
    /tawda.xyz\/tag/.test(url) ? afterDOMLoaded(function() {clickIfCorrectText('#continueButton', 'Click to continue')}) : null;

    //mandranime.com
    /ikramlar.online|segurosdevida.site/.test(url) ? afterDOMLoaded(function() { 
        redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]); 
    }) : null;

    // monoschinos3.com
    /monoschinos.club/.test(url) ? afterDOMLoaded(function() { 
        redirect(atob(document.querySelector('#wpsafe-link > a').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1].replace(/\\/g, ""));
    }) : null;

    // https://f.technicalatg.in/6iTpuM1 - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10954732
    /skillheadlines.in/.test(url) ? afterDOMLoaded(function() { redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);}) : null;

    // https://delpez.com/?go=1ad8bb46 - https://t.me/heroelink - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10954732
    /delpez.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.btn-primary');
        redirect(decodeURIComponent(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]));
    }) : null;

    // ryuugames
    /www.ryuugames.com\/\?eroge=.*$/.test(url) ? afterDOMLoaded(function() {
        redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').href.split('?safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);
    }) : null;
    /anchoreth.com\/r-adsh\?t=i&v=.*$/.test(url) ? redirect(atob(url.split('&v=')[1].split('&')[0])) : null;

    // mixrootmod
    /mixrootmod.com/.test(url) ? afterDOMLoaded(function() {
        redirect(decodeURIComponent(atob(document.querySelector('#wpsafe-link > a').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]));
    }) : null;

    // saferoms.com
    /www.saferoms.com\/\?go=/.test(url) ? afterDOMLoaded(function() {
        let dlLink = document.querySelector('#wpsafe-link > a:nth-child(1)').href;
        dlLink = decodeURIComponent(atob(dlLink.split('safelink_redirect=')[1]));
        dlLink = dlLink.match(/"safelink":"(.*?)"/)[1];
        if (confirm(`Confirm to redirect to \n${dlLink.split('https://href.li/?')[1]}\n`)) {redirect(dlLink);}
    }) : null;

    // shrtbr.com/aaNEJEXp - t.me/xred2 - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/122
    /encurtads.net|financacerta.com/.test(url) ? afterDOMLoaded(function() {
        //redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"second_safelink_url":"(.*?)"/)[1]);
        //redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);
        clickIfExists('#wpsafe-link > a:nth-child(1) > button:nth-child(1)');
    }) : null;
    /shrtbr.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.get-link.btn.btn-lg.btn-success:not(.disabled):not(div.banner:nth-child(4) > div:nth-child(1) > a:nth-child(1))');}) : null;

    // link4earn.com
    /sastainsurance.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a');}) : null;
    /link4earn.com/.test(url) ? afterDOMLoaded(function() { redirectIfNotDisabled('a.get-link') }) : null;

    // https://rocklinks.in/1ZqZZ2B
    /mobilenagari.com|defencewallah.in/.test(url) ? afterDOMLoaded(function() {
        clickIfExistsNonStop('a.bt-success');
        clickIfExists('#wpsafe-link > a:nth-child(1)');
        clickIfExists('#wpsafelinkhuman');
    }) : null;
    /rocklinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // zaku.pro/?adlinkfly= - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/236
    /zaku.pro/.test(url) ? afterDOMLoaded(function() {
        if (url.includes('go.zaku.pro')) {
            clickIfExists('button.btn-primary');
            redirectIfNotDisabled('a.get-link');
        } else {
            clickIfExists('#wpsafe-link > a:nth-child(1)');
        }
    }) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/36
    /trimorspacks.com|pastescript.com|updrop.link/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#wpsafe-link > a:nth-child(1)')}) : null;

    // animeacademy.in
    /highkeyfinance.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafelinkhuman')}) : null;
    /highkeyfinance.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a:nth-child(1)')}) : null;
    /tech5s.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go_d2')}) : null;
    /ez4mods.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go_d')}) : null;
    /ez4short.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /bookszone.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp98')}) : null;
    /bookszone.in/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#btn6')}) : null;
    /learnmany.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp98')}) : null;
    /learnmany.in/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#btn6')}) : null;
    /yoshare.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('input.btn')}) : null;
    /yoshare.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /reminimod.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a:nth-child(1)')}) : null;
    /blog.disheye.com/. test(url) ? afterDOMLoaded(function() {clickIfExists('#gourl')}) : null;
    /techrayzer.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#link')}) : null;
    /techrayzer.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /techrayzer.com\/insurance/. test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn--bg-primary')}) : null;
    /techfizia.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#fizia-btn-after > center:nth-child(1) > a:nth-child(1) > button:nth-child(1)')}) : null;
    /lksfy.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /droplink.co/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /lnks.primarchweb.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn--bg-primary')}) : null;

    // rareanimes.net
    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafelinkhuman')}) : null;
    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-generate > a > img')}) : null;
    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#image3')}) : null;
    /raretoonsindia.rtilinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    ///(do|fast).rtilinks.com/.test(url) ? window.addEventListener("load", function(event) {redirectIfExists('a[class^="rti_btn"]')}) : null; //dont bypass because it might give streaming option
    ///vidhidepro.com\/d/.test(url) ? afterDOMLoaded(function() {clickIfExists('body > main > div > center > div > div > a > span')}) : null; //maybe shouldnt autoclick this one
    ///vidhidepro.com\/d/.test(url) ? afterDOMLoaded(function() {clickIfExists('#F1 > button > div > div:nth-child(1) > b')}) : null; //maybe shouldnt autoclick this one

    // mirrored.to seen in rareanimes.net
    /www.mirrored.to\/files\/(?!.*\?hash=)/.test(url) ? afterDOMLoaded(function() {redirectIfExists('body > div.container.dl-width > div:nth-child(4) > div > a')}) : null;

    // skyve.io file host, seen on dodi-repacks.site
    const clickIfExistsWithConfirmation = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); if (confirm('Press OK to download.')) { button.click(); } } }, 500);};
    /skyve.io/.test(url) ? afterDOMLoaded(function() {clickIfExists('#method_free')}) : null;
    // /skyve.io/.test(url) ? afterDOMLoaded(function() {clickIfExistsWithConfirmation('.bicon')}) : null; //download button

    // toonworldtamil.net
    ///(itradercoin|nichapk|easyworldbusiness|riveh).com\/verify\/\?/.test(url) ? redirect('https://blog.filepresident.com/' + url.split('/?')[1]) : null; doesnt work, the site doesnt let you get directly to that URL
    if (/(itradercoin|nichapk|easyworldbusiness|riveh).com/.test(url)) {
        const redirectIfVisible = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && !button.getAttribute('style').includes('display:none')) { clearInterval(intervalId); redirect(button.href) } }, 500); };
        const redirectIfVisible2 = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.getAttribute('style').includes('block')) { clearInterval(intervalId); redirect(button.querySelector('a').href) } }, 500); };
        afterDOMLoaded(function() {
            redirectIfVisible('#yuidea-btn-after'); //Step 1
            count = 0; // skip timer
            redirectIfVisible2('#yuidea-snp'); // Steps 2-3
        });}
    /blog.filepresident.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.btn')}) : null;

    // mkvmoviespoint.casa
    /mkvmoviespoint.casa\/goto/.test(url) ? afterDOMLoaded(function() {redirectIfExists('body > div:nth-child(7) > a:nth-child(1)')}) : null;
    /w.linkspoint.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('.btnx')}) : null;

    // moviehunt.us
    /gdslink.xyz/.test(url) ? afterDOMLoaded(function() {redirect(document.querySelector('.main-wrap > form:nth-child(2) > input:nth-child(1)').value)}) : null;

    // link.tnshort.net - https://github.com/FastForwardTeam/FastForward/issues/1368
    /financeyogi.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn5')}) : null;
    /financeyogi.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn2')}) : null;
    /jrlinks.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn1')}) : null;
    /jrlinks.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn2')}) : null;
    /go.tnshort.net/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    // 4fnet.org - https://github.com/FastForwardTeam/FastForward/issues/1298
    /www.4fnet.org\/goto/.test(url) ? redirect(atob(url.split('/goto/')[1])) : null;

    // linkmo.net / adpayl.ink - https://github.com/FastForwardTeam/FastForward/issues/1291 / https://github.com/FastForwardTeam/FastForward/issues/1290
    /(linkmo.net|adpayl.ink)\/[^?]+\?data=.+$/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    // musicc.xyz - https://github.com/FastForwardTeam/FastForward/issues/1234 (note: this one is already bypassed by the original script, because it runs on every domain. It was just necessary to let the script run on this domain)
    /musicc.xyz/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    // zshort.net, shotzon.com - jnovels.com - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/5, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/59
    /(cravesandflames|codesnse|cloutgist|kecapku).com/.test(url) ? afterDOMLoaded(function() {
        if (!url.includes('go.')) {
            //clickIfCloudflareCaptchaSolved('.btn-captcha');;
            clickIfExists('button.btn:nth-child(1)');
        } else if (url.includes('go.')) {
            redirectIfNotDisabled('a.get-link');
        }
    }) : null;

    // olamovies.rent - https://v2links.me/q1z4ssolam //add stuff missing from the main script
    /v2links.(com|me)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /(newsbawa|utkarshonlinetest|techbezzie|financewada).com/.test(url) ? afterDOMLoaded(function() {
        time = 0;
        clickIfExists('.start_btn');
        setTimeout(function() {clickIfExists('div.step_box.get_btn div.btn')}, 2000);
        clickIfExists('a.btn');
    }) : null;
    /wp2host.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn')}) : null;

    // olamovies.rent - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-9904041
    /ielts-isa.edu.vn/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#monetiza');
        clickIfExists('button.yu-btn:nth-child(1)');
        clickIfExists('#btn6');
    }) : null;
    

    // psa.wf, olamovies.bar, https://ez4short.com/ar02kkolam - (adding here stuff missing from the main script)
    ///tiktokcounter.net/.test(url) ? preventForcedFocusOnWindow() : null;
    // /antonimos.de|tiktokcounter.net|tiktokrealtime.com|tpayr.xyz|quesignifi.ca|lifgam.online|waezf.xyz|ashrfd.xyz/.test(url) ? setInterval(function(){window.wT9882=0;},1000) : null;
    // /tiktokcounter.net/.test(url) ? afterDOMLoaded(function() {wT9982 = 0;}) : null; //Skip the timer
    // const clickTikTokCounterButtons = () => { let buttonSelector = 'button#cbt.btn.btn-warningbtn.btn-primary'; let intervalId = setInterval(() => { let button = document.querySelector(buttonSelector); if (!button.hasAttribute('disabled') && button.innerHTML.includes('Continue')) { clearInterval(intervalId); isHoverDone = true; setTimeout(function() { button.click();}, 500) } }, 500); };
    // /tiktokcounter.net/.test(url) ? afterDOMLoaded(function() {clickTikTokCounterButtons()}) : null;

    // psa.wf
    /10short.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.btn')}) : null;
    /zegtrends.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.bsub')}) : null;
    /zegtrends.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go1')}) : null;
    /icutlink.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    /motakhokhara.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('a.safeb')}) : null;
    /motakhokhara.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#safesub')}) : null;
    /xpshort.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn1')}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn2')}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn4')}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn5')}) : null;
    /urls.cx/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.video-button')}) : null;

    // filmesmega.online
    /minimilionario.com\/noticia.php\?token=/.test(url) ? redirect(atob(url.split('?token=')[1])) : null;

    // ontorrent.org
    /usandoapp.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('.DownloadButOn')}) : null;

    // web1s - examples:  (nsfw) https://github.com/AdguardTeam/AdguardFilters/issues/154319 / https://t.me/s/cosplaydistrict / https://discord.com/invite/mtMGnm9aTd
    /web1s.asia\/api-mode/.test(url) ? afterDOMLoaded(function() {clickIfExists('#submit')}) : null;
    /web1s.asia\/api-mode/.test(url) ? afterDOMLoaded(function() {clickIfExists('#submit-button')}) : null;
    // asideway sub-link-shortener. example: https://asideway.com/normal/j5GLNIDiHq/
    /asideway.com/.test(url) ? afterWindowLoaded(function() {count = 0;}) : null;
    const clickIfVisible4 = (selector, textContent) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.style.display.includes('block') && button.innerText.includes(textContent) && !button.hasAttribute('disabled') ) { clearInterval(intervalId); setTimeout(() => { button.click();}, 500); }}, 500); };
    /asideway.com/.test(url) ? afterWindowLoaded(function() {clickIfVisible4('#link1s', '1/2')}) : null;
    /asideway.com/.test(url) ? afterWindowLoaded(function() {clickIfVisible4('#link1s', '2/2')}) : null;
    // linkvip.io blitly.io sub-link-shortener. example: https://linkvip.io/redirect?api=9VAupEozzdsn3k6tMTcLWL4DJ&url=https://drive.google.com/drive/folders/1vvSM0OXgnZTcALJeThAkIRxzRBRsBGjm?usp=sharing
    /(linkvip|blitly).io/.test(url) ? url.includes('url=') ? redirect(new URL(url).searchParams.get('url')) : null : null;

    // megalink.pro - https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/discussions/235270 - https://megalink.pro/pD6wK (nsfw)
    /megalink.pro\/[a-zA-Z0-9]+$/.test(url) ? afterWindowLoaded(function() {setTimeout(function() {clickIfNotDisabled('a.btn:nth-child(1)')}, 3000)}) : null;

    // pahe.ink
    /linegee.net|intercelestial.com|teknoasian.com/.test(url) ? preventForcedFocusOnWindow() : null;
    /*function isWeirdButton(button) {
        const suspiciousStyles = ['position: absolute;left: 99999px;'];
        const suspiciousWords = ['patch'];

        // Check for suspicious styles
        const style = button.getAttribute('style');
        if (style && suspiciousStyles.some(s => style.includes(s))) {
            return true;
        }

        // Check for suspicious words in text content
        const textContent = button.textContent.toLowerCase();
        if (suspiciousWords.some(word => textContent.includes(word))) {
            return true;
        }

        // Check for "999" string in HTML
        if (button.outerHTML.includes('999')) {
            return true;
        }

        return false;
    }

    /teknoasian.com/.test(url) ? afterDOMLoaded(function() {

        // Delete links to pahe.ink
        document.querySelectorAll('[href*="pahe.ink"]').forEach(link => {link.href = '';});

        // Click all the right buttons
        let intervalId = setInterval(() => {
            let buttons = document.querySelectorAll('button.verify, button.skipcontent, button.postnext');
            for (let button of buttons) {
                let buttonIsVisible = button && button.offsetParent !== null;
                if (buttonIsVisible && !isWeirdButton(button)) {
                    //if (confirm(`Press OK to click the button: \n${button.outerHTML}`)) {
                        button.click();
                        if (button.classList.contains('postnext')) {
                            clearInterval(intervalId);
                        }
                    //}
                }
            }
        }, 1000);
    }) : null; */

    //pahe.ink final step
    /linegee.net/.test(url) ? afterDOMLoaded(function() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const content = script.innerHTML;
            const match = content.match(/location\.href\s*=\s*atob\('([^']+)'\);/);
            if (match) {
                setTimeout(() => {
                    redirect(window.location.href + atob(match[1]));
                }, 3000);
                break;
            }
        }
    }) : null;

    /pahe.plus/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled('#invisibleCaptchaShortlink');
        redirectIfNotDisabled('a.get-link');
    }) : null;

    /old.pahe.plus/.test(url) ? afterDOMLoaded(function() {clickIfExists('a.btn:nth-child(1)')}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/94
    /pahe.win/.test(url) ? afterWindowLoaded(function() {setTimeout(function() {redirectIfExists('.redirect');}, 6000);}) : null;

    // spaste.com use in pahe.ink - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/77

    /www.spaste.com\/site\/checkPasteUrl\?c=/.test(url) ? afterDOMLoaded(function() {
        clickIfHCaptchaSolved('#template-contactform-submit');
    } ) : null;
    /www.spaste.com\/p\?c=/.test(url) ? afterDOMLoaded(function() {
        redirectIfExists('#template-contactform-message > a:nth-child(3)');
    }) : null;

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8884375
    if (/4hi.in/.test(url)) { afterDOMLoaded(function() {
        clickIfExists('.btn-warning:not(.btn-captcha)');
        clickIfNotDisabled('#invisibleCaptchaShortlink');
        redirectIfNotDisabled('a.get-link'); })}

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/12
    /lnk.news/.test(url) ? afterDOMLoaded(function() {clickIfExists('#csubmit')}) : null;

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8893133
    const afterElementVisible = (selector, callback) => {let intervalId = setInterval(() => {let element = document.querySelector(selector);if (element && (element.style.display.includes('block') || !element.style.display.includes('none'))) {clearInterval(intervalId);callback();}}, 500);};
    /imagereviser.com/.test(url)  ? preventForcedFocusOnWindow() : null;
    /imagereviser.com/.test(url)  ? afterDOMLoaded(function() {afterElementVisible('#second_btn_div', function() {document.querySelector('#bottom_btn').click();}) }) : null;
    /upshrink.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // comandofilmeshd.org
    /bangclinic.life/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.DownloadButOn')}) : null;

    // ofilmetorrent.com
    /dow-dow-dow-dow-dow.xyz\/download\/\?id=/.test(url) ? redirect(atob(url.split('?id=')[1].split('&')[0])) : null;
    /ofilmetorrent.com\/download\/\?id=/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="https://dow-dow-dow-dow-dow.xyz/download?id="]').forEach(link => {
            link.href = atob(link.getAttribute('href').split('?id=')[1].split('&')[0]);
        }); }) : null;

    // librospdfgratismundo.net
    /librospdfgratismundo.net/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="https://librospdfgratismundo.net/rt?url="]').forEach(link => {
            link.href = atob(link.getAttribute('href').split('?url=')[1]);
        }); }) : null;

    // animesgd.net
    /animesgd.net/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https://domk5.net/redir3/?"]').forEach(link => {
            link.href = link.getAttribute('href').split('/redir3/?')[1];
        }); }) : null;

    if (/animesgd.net\/out\/\?/.test(url)) { 
        const decodedUrl = atob(url.split('/out/?')[1]);
        if (decodedUrl.includes('url=')) {redirect(decodedUrl.split('url=')[1])}
        if (decodedUrl.includes('redir3/?')) {redirect(decodedUrl.split('/redir3/?')[1])}
    }

    // platinsport.com
    /platinsport.com/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="http://bc.vc/"]').forEach(link => {
            link.href = 'https://' + link.getAttribute('href').split('/https://')[1];
        }); }) : null;

    //fiuxy2.co
    /fiuxy2.co\/threads/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="mega-enlace.com/ext.php?o="]').forEach(function(element) {
            if (isValidUrl(element.innerText)) { element.href = element.innerText;};
            // element.href = rot13(atob(rot13(atob(element.href.split('?o=')[1])))).split('|')[0];
        }); }) : null;

    // ocultandoo (used in fiuxy2.co)
    /ocultandoo.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('#getlink')}) : null;
    /ocultandoo.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('#gotolink')}) : null;

    // toonhub4u.net
    /toonhub4u.net\/redirect\/main.php\?url=/.test(url) ? redirect(atob(url.split('url=')[1])) : null;
    /toonhub4u\.net\/([^\/]+)\/$/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https://toonhub4u.net/redirect/main.php?url="]').forEach(link => {
            link.href = atob(link.getAttribute('href').split('?url=')[1]);
        }); }) : null;

    // megalinks (used in peliculasmega1k.com)
    /megalinks.info\/index.php\?v=/.test(url) ? clickIfExists('#continue') : null;

    // doroni.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/24
    if (/rodimalam.com/.test(url)) { afterDOMLoaded(function() {
        clickIfExistsNonStop('#SafelinkChecker');
        let intervalId = setInterval(function() {
            let targetLink = document.querySelector('a[href*="https://semawur.com/st/?api="]');
            if (targetLink) { clearInterval(intervalId); redirect(decodeURIComponent(targetLink.href.split('url=')[1])); }; }, 1000);
        }); }

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/32
    /short-url.link\/[^\/]+$/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.go-to-button')}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/34
    const redirectIfNotDisabled2 = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton && !linkButton.href.includes('/undefined') && isValidUrl(linkButton.href)) { clearInterval(intervalId); setTimeout(function() {redirect(linkButton.href);}, 500) } }, 500); };
    if (/urlx.one\/[^\/]+$/.test(url)) { afterDOMLoaded(function() {
        redirectIfNotDisabled2('a.get-link');
        const overlay = Object.assign(document.createElement('div'), {style: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); color: #fff; font-family: Arial, sans-serif; font-size: 44px; text-align: center; padding-top: 50%;', innerText: 'Bypassing... Wait ~5s'});
        document.body.appendChild(overlay);
    }) }

    // sinsitio.site / dixva.com
    if (/www.(sinsitio.site|dixva.com)\/code\/\?go=/.test(url)) {
        const decode = (encodedString) => {
            const dictionary = {'0': 'z', '1': 'y', '2': 'x', '3': 'w', '4': 'v', '5': 'u', '6': 't', '7': 's', '8': 'r', '9': 'q', 'A': 'p', 'a': 'P', 'B': 'o', 'b': 'O', 'C': 'n', 'c': 'N', 'D': 'm', 'd': 'M', 'E': 'l', 'e': 'L', 'F': 'k', 'f': 'K', 'G': 'j', 'g': 'J', 'H': 'i', 'h': 'I', 'I': 'h', 'i': 'H', 'J': 'g', 'j': 'G', 'K': 'f', 'k': 'F', 'L': 'e', 'l': 'E', 'M': 'd', 'm': 'D', 'N': 'c', 'n': 'C', 'O': 'b', 'o': 'B', 'P': 'a', 'p': 'A', 'q': '9', 'Q': 'Z', 'r': '8', 'R': 'Y', 's': '7', 'S': 'X', 't': '6', 'T': 'W', 'u': '5', 'U': 'V', 'v': '4', 'V': 'U', 'w': '3', 'W': 'T', 'x': '2', 'X': 'S', 'y': '1', 'Y': 'R', 'z': '0', 'Z': 'Q'};
            return encodedString.split('').map(char => dictionary[char] || char).join('');
        }
        redirect(decode(atob(url.split('?go=')[1])));
    }
    /www.yitarx.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://thotpacks.xyz/R7p2l
    /thotpacks.xyz/.test(url) ? afterDOMLoaded(function() {
        //clickIfAllCaptchasSolved('#invisibleCaptchaShortlink');
        //clickIfRecaptchaSolved('#invisibleCaptchaShortlink');
        clickIfExists('#invisibleCaptchaShortlink');
        redirectIfNotDisabled('a.get-link');
    }) : null;

    // linkpays.in - t.me/canvapro365free - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/88, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/48
    function clickAnyVisibleButtonNonStop(interval){
        let intervalId = setInterval(() => {
            const buttons = document.querySelectorAll('button'); //, input[type="button"], input[type="submit"]:focus-visible');
            buttons.forEach(function(button) {if (button.offsetParent !== null) {clickElement(button);}});
        }, interval);
    }
    // /(surfsees.com|techyblogs.in)\/safe.php\?link=/.test(url) ? redirect('https://pokoarcade.com/token.php?id=' + url.split('link=')[1]) : null;
    /((surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/.test(url) && !url.includes('token.php') ? afterWindowLoaded(function() {
        clickAnyVisibleButtonNonStop(2000);
    }) : null;
    // /(cryptings.in|vbnmx.online)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#rtg-btn > a:nth-child(1)')}) : null;
    // /(cgsonglyricz.in|www.techhubcap.com)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    // /(techyblogs.in|readytechflip.com)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/.test(url) ? afterWindowLoaded(function() {clickIfNotDisabled('#tp-snp2')}) : null;

    // stfly - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/62
    /* if (/stfly.(cc|xyz|biz|me)|stly.link|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons|airevue).net/.test(url)) {
        preventForcedFocusOnWindow();
        
        function clickAllValidButtons() {

            function clickAvailableButtons(buttonTexts) {
                let buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]:focus-visible');
                buttons.forEach(function(button) {if (buttonTexts.includes(button.textContent.trim())) {clickElement(button);}});
            }

            //Different actions depending on current step
            let currentStep = document.querySelector('span.text-center').innerText.trim();
            let buttonTexts = [];
            if (currentStep.includes('step 1')) {
                buttonTexts = ['Click here to proceed'];
                clickAvailableButtons(buttonTexts);
            } else if (currentStep.includes('step 2')) {
                buttonTexts = ['Click here to start', 'Start', 'Begin', 'Open'];
                clickAvailableButtons(buttonTexts);
                if (checkGoogleRecaptchaSolved() && checkCloudflareCaptchaSolved()) {
                    buttonTexts = ['Verify', 'Click here to verify'];
                    clickAvailableButtons(buttonTexts);
                    setTimeout(function() {
                        buttonTexts = ['Next Post', 'Next step', 'Get to next step', 'Go next', 'Continue'];
                      clickAvailableButtons(buttonTexts);
                    }, 2000);
                }
            } else if (currentStep.includes('step 3')) {
                if (document.querySelector('.progress-done').innerHTML.trim() === '0%'){
                    buttonTexts = ['Click here to start', 'Start','Begin', 'Open'];
                    clickAvailableButtons(buttonTexts);
                } else if (document.querySelector('.progress-done').style.width === '100%'){
                    buttonTexts = ['Verify', 'Click here to verify'];
                    clickAvailableButtons(buttonTexts);
                    setTimeout(function() {
                        buttonTexts = ['Next Post', 'Next step', 'Get to next step', 'Go next', 'Continue'];
                        clickAvailableButtons(buttonTexts);
                    }, 2000);
                }
            } else if (currentStep.includes('step 4')) {
                buttonTexts = ['Open', 'Start', 'Begin', 'Click here to start'];
                clickAvailableButtons(buttonTexts);
                setTimeout(function() {
                    buttonTexts = ['Click here to verify', 'Verify', 'Please wait..', 'Loading..'];
                    clickAvailableButtons(buttonTexts);
                    setTimeout(function() {
                        buttonTexts = ['Next Post', 'Next step', 'Get to next step', 'Go next', 'Continue'];
                        clickAvailableButtons(buttonTexts);
                    }, 2000);
                }, 8000)
            } else if (currentStep.includes('step 5')) {
                buttonTexts = ['Open', 'Start', 'Begin', 'Click here to start'];
                clickAvailableButtons(buttonTexts);
                setTimeout(function() {
                    buttonTexts = ['Click here to verify', 'Verify', 'Please wait..', 'Loading..'];
                    clickAvailableButtons(buttonTexts);
                }, 8000)
            }

        }

        window.addEventListener('load', function() {clickAllValidButtons();}); //Click all the valid buttons when the page loads
        setInterval(function() {clickAllValidButtons();}, 2000); //Click all the valid buttons every 2 seconds
    } */

    // zipshort.net - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-9971779
    /ontechhindi.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#rtg > center:nth-child(2) > button:nth-child(1)');
        clickIfExists('div.code-block:nth-child(4) > center:nth-child(1) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1)');
    }) : null;

    // vnshortener.com (pxanimeurdu.com) - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/110, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/149
    function clickIfVisible3(selector) {
        let intervalId = setInterval(() => {
            let button = document.querySelector(selector);
            if (button && button.offsetParent !== null) {
                clearInterval(intervalId);
                clickElement(button);
            }
        }, 1000);
    }
    /kbconlinegame.com/.test(url) ? afterDOMLoaded(function() {
        clickIfVisible3('#pro-continue');
        setTimeout(function() {
            clickIfVisible3('#pro-btn');
        }, 2000);
    }) : null;
    /owoanime.com/.test(url) ? afterWindowLoaded(function() {
        window.countdown = 0;
        showPopup();
        clickIfVisible3('#pro-continue');
        clickIfVisible3('#pro-btn');
    }) : null;
    /importantclass.com/.test(url) ? afterDOMLoaded(function() {
        window.countdown = 0;
        showPopup();
        clickIfVisible3('#my-btn');
        clickIfVisible3('#my-btn2');
    }) : null;
    /keedabankingnews.com/.test(url) ? afterWindowLoaded(function() {
        window.count = 0;
        clickIfExists('#tp-snp2');
    }) : null;


    // pxanimeurdu.com
    function setCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }
    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    if (/pxanimeurdu.com/.test(url)){
        let pxcheckValue = getCookie("pxcheck");
        if (!pxcheckValue) {
            setCookie("pxcheck", "aTBvaGg4a1dFMzNwcUM1aWtTaVprUT09");
        }
    }
    /pxanimeurdu.com\/redirect\/main.php\?url=/.test(url) ? afterDOMLoaded(function() {
        redirectIfExists('.px-effect-btn');
    }) : null;


    // inshorturl.com - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/104, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/212, https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10744404
    /(newshuta|5ghindi|gujaratalert|mahitimanch|gujmitra).in|(indiamaja|thespotifypremium).com|mtmanagers.pro/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickIfExists('#tp98');
        clickIfExists('#btn6');
        clickIfNotDisabled('#gtelinkbtn');
    }) : null;

    // hyp.sh - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/101 - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/158 - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-12198432
    /hypershort.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#generatelink');
        redirectIfExists('#gettinglink');
    }) : null;

    // render-state.to - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/108
    /render-state.to\/download\/\?link=/.test(url) ? afterDOMLoaded(function() {
        //if (document.querySelector('#megkey')) {alert(document.querySelector('#megkey').innerText + '\n' + document.getElementById('deckey').value);};
        if (!document.querySelector('#megkey')) {
            popupsToRedirects();
            goToLink();
        }
    }) : null;

    // pelismkvhd.com
    /www.lanoticia.cc/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled('#invisibleCaptchaShortlink');
        redirectIfNotDisabled('a.get-link');
    }) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/168
    /mastramstories.com\/api.php\?api/.test(url) ? redirect(atob(url.split('?api=')[1])) : null;
    /links.kmhd.net\/file/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;
    // katmoviehd.wales
    /links.kmhd.net\/locked\?redirect=/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;

    // olamovies link generator
    /app2.olamovies.download\/generate\/\?id=/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/170
    /hdpastes.com\/\?v=/.test(url) ? afterDOMLoaded(function() {clickIfCloudflareCaptchaSolved('.btn-success');}) : null;

    // https://github.com/FastForwardTeam/FastForward/issues/1515
    /mendationforc.info/.test(url) ? redirect(decodeURIComponent(atob(url.split('&cc=')[1]).match(/"link":"(.*?)"/)[1]) ) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/184
    /click.convertkit-mail.com/.test(url) ? redirect(atob(url.match(/.*(aHR0.*)/)[1])) : null;

    // relampagomovies.com
    if (/^https:\/\/relampagomovies\.com\/.+/.test(url)) {
        afterWindowLoaded(function() {
            clickIfExists('#countdown > a:nth-child(1)');
            clickIfExists('#dllink');
            redirectIfExists('div.content2 a');
            redirectIfExists('a[href*="filemoon.sx"]');
        });
    }

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/224
    /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/.test(url) ? afterDOMLoaded(function() {
        const regex = /aHR0c[^"]+/g;
        const matches = document.documentElement.innerHTML.match(regex);
        if (matches && matches.length > 0) {
          const decodedUrl = atob(matches[0]);
          redirect(decodedUrl);
        }
    }) : null;

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11280464
    /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/.test(url) ? afterWindowLoaded(function() {
        const form = document.querySelector('#link-view > form');
        if (form) {
            form.action = document.querySelector('#link-view > form > input[name=url]').value;
        }
    }) : null;

    // modijiurl - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11295970
    function browserIsFirefox() {return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;}
    // /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/.test(url) && browserIsFirefox() ? redirect(url.split('?link=')[1]) : null;
    // /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/.test(url) ? redirectIfNotDisabled('#getLinkButton') : null;

    // sittingonclouds.com .net
    /paster.gg/.test(url) ? redirect(decodeURIComponent(url.split('&link=')[1].split('&')[0])) : null;

    // dodi-repacks.site
    /go.zovo.ink/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('button.btn:nth-child(4)');
        redirectIfNotDisabled('a.get-link');
    }) : null;

    // kisalt - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/213
    /kisalt.com\/.*/.test(url) ? afterDOMLoaded(function() {clickIfExists('.btn.btn-primary');}) : null;

    // Anylinks.in .site - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/220
    if (/((ukrupdate|mastkhabre).com|aryx.xyz)/.test(window.location.href)) {
        let delay = 12000;
        if (/aryx.xyz/.test(window.location.href)) delay = 1000;
        window.addEventListener('load', function() {
            setTimeout(() => document.getElementById('btn6').click(), delay);
        });
    }

    // go.paid4link.com 3rd step
    function getURLwithSafelinkFromThePageScripts() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const content = script.innerHTML;
            // we try to match any URL that contains "safelink" and is from the same domain
            const matches = content.match(/(https?:\/\/[^'"]+safelink[^'"]+)/g);
            if (matches) {
                for (let match of matches) {
                    if (match.includes(window.location.hostname)) {
                        return match;
                    }
                }
            }
        }
    }
    /(aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info/.test(url) ? afterDOMLoaded(function() {
        const url = getURLwithSafelinkFromThePageScripts();
        if (url) redirect(url);
    }) : null;

    // go.paid4link.com last step - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/222
    /link.paid4link.com/.test(url) ? afterDOMLoaded(function() {
        clickIfRecaptchaSolved('#invisibleCaptchaShortlink');
    }) : null;

    // adsafelink / link2unlock - https://github.com/realodix/AdBlockID/issues/1874
    /app.link2unlock.com/.test(url) ? afterDOMLoaded(function() { 
        clickIfExists('#btn-1');
        clickIfExists('#btn-2');
        clickIfCloudflareCaptchaSolved('#btn-3');
        clickIfExists('#submit-button');
    }) : null;

    // pandaznetwork - https://t.me/hubcloud_movies, https://t.me/latest_movies_2025_1
    /freemodsapp.in/.test(url) ? popupsToRedirects() : null;
    /freemodsapp.in/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /pandaznetwork.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    //suncy.net (upfiles.com) (seen used in fiuxy2.co)
    /sunci.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('button#link-button.btn-primary:not(.btn-download)')}) : null;

    // button click for button after profitsfly (#aaoii2o button)
    function redirectToAnyLinkWithMatchingTextContent(textContent) {
        let intervalId = setInterval(() => {
            document.querySelectorAll("a").forEach(link => {
                if (link.textContent.includes("Get Link") && link.href) {
                    clearInterval(intervalId);
                    redirect(link.href);
                }
            });
        }, 500);
    }
    /((btcut|linkslice|zshort).io|easy4skip.com|lkfms.pro|droplink.co)\/.*\?token=.*/.test(url) ? afterDOMLoaded(function() {
        redirectToAnyLinkWithMatchingTextContent("Get Link");
    }) : null;

    // aylink, cpmlink - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/238
    function redirectIfOnclickElementHasLink(selector) {
        let intervalId = setInterval(() => {
            let onclickContent = document.querySelector(selector).getAttribute('onclick');
            if (onclickContent) {
                clearInterval(intervalId);
                const targetLink = onclickContent.match(/window\.open\("([^"]+)",/)[1];
                redirect(targetLink);
            }
        }, 1000);
    }
    /aylink.co|cpmlink.pro/.test(url) ? afterWindowLoaded(function() {
        clickIfExistsNonStop('a.btn-go');
        redirectIfOnclickElementHasLink('#main');
    } ) : null;

    // adrinolinks.in / nanolinks.in - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/244
    /instaserve.net|gomob.xyz|gamechilly.online|instanders.app/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp-snp2');}) : null;

    // uii.io
    /wordcounter.icu|wordcount.im/.test(url) ? afterDOMLoaded(function() {
        //clickIfAllCaptchasSolved('#invisibleCaptchaShortlink');
        clickIfExists('#invisibleCaptchaShortlink');
    }) : null;

    // cloudfam.io (rockmods.net)
    if (/techarmor.xyz/.test(url) && !url.includes('safe2.php')) {redirect("https://" + new URL(url).hostname + "/safe2.php");}
    /get.cloudfam.io/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link');}) : null;

    // flycutlink.com (daemonanime.net)
    /flycutlink.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('button.btn-primary.btn:nth-child(4)');
        openHCaptchaWhenVisible();
        clickIfNotDisabled('#invisibleCaptchaShortlink');
        redirectIfNotDisabled('a.get-link');
    }) : null;

    // vipurl (chrome only)
    /loanoffer.cc/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('a.bt-success');
        clickIfExists('a.bt-success:nth-child(2)');
        clickIfExists('a.bt-success:nth-child(3)');
    }) : null;
    /count.vipurl.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link');}) : null; //

    // 10drives - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/233
    // gongchandang49 - updated 2025-09 - Amm0ni4/issues/363
    // 6 seconds delay required (not strict), otherwise href = /
    /foodtechnos.in/.test(url) ? afterDOMLoaded(function(){
        const o=document.createElement('div');o.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);color:white;display:flex;align-items:center;justify-content:center;font-size:24px';o.innerText='Wait...';
        document.body.appendChild(o);
        setTimeout(function(){document.body.removeChild(o);clickIfExists('a.btn:nth-child(1)');clickIfExists('a#hss:nth-child(1)');redirectIfExists('a#lsdwnbtn');},6000);
    }) : null;

    // upfiles.app
    /(upfiles.app|haxi.online|upfion.com)\/[^\/]+/.test(url) ? afterDOMLoaded(function() {
        clickIfCorrectText('#link-button', 'Continue');
        clickIfRecaptchaSolved('#link-button');
        redirectIfNotDisabled('a#link-button');
    }) : null;

    // datanodes - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/140
    /datanodes.to\/download/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#method_free')
        clickIfCorrectText('button.py-3', 'Download')
        //setTimeout(function() {clickIfCorrectText('button.py-3', 'Continue')}, 6000)
    }) : null;

    // dailyuploads - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/123
    /dailyuploads.net\/[^\/]+/.test(url) ? afterDOMLoaded(function() {
        clickIfRecaptchaSolved('#downloadbtn');
        redirectIfExists('a#fbtn1');
    }) : null;

    // uploadrar - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/87
    /flash.getpczone.com|get.rahim-soft.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.mngez-free-download[name="method_free"]');
        clickIfNotDisabled('#downloadbtn');
        redirectIfNotDisabled('a#netTab');
    }) : null;

    // drop.download
    /drop.download/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#method_free');
        redirectIfNotDisabled('a.btn-download');
    }) : null;

    // frdl.is
    /frdl.is/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#downloadbtnfree');
        redirectIfNotDisabled('a.btn-primary.btn-block.mb-4');
    }) : null;

    // mega4upload.net
    /mega4upload.net/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('input[value="Free Download"]');
        clickIfRecaptchaSolved('button#downloadbtn');
    }) : null;

    // filespayouts
    /filespayouts.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('input#method_free');
        clickIfCloudflareCaptchaSolved('#downloadbtn');
    }) : null;

    // file-upload.org
    /file-upload.org/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.btn.btn-outline-primary.submit-btn.m-2[name="method_free"]');
        clickIfHCaptchaSolved('#downloadbtn:not([disabled="disabled"])');
        redirectIfNotDisabled('a#downloadButton');
    }) : null;

    // up-4ever.net
    /up-4ever.net/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('input.btn-dark[name="method_free"]');
        clickIfRecaptchaSolved('#downloadbtn:not(.disabled)');
        redirectIfNotDisabled('a#downLoadLinkButton');
    }) : null;

    // devuploads faster bypass using site from https://t.me/NickUpdates
    // not working: /^https:\/\/devuploads\.com\/.*/.test(url) ? redirect('https://nick-ddl.downlaod.workers.dev/devuploads/' + url.split('devuploads.com/')[1]) : null;

    // devuploads
    function clickIfVisible5(selector) {
        let intervalId = setInterval(() => {
            let element = document.querySelector(selector);
            if (element && element.style.display === 'block') {
                clearInterval(intervalId);
                clickElement(element);
            }
        }, 500);
    }

    function popupsToRedirectsForUrlsIncludingText(text) {
        window.open = (url, target, features) => {
            if (url.includes(text)) {
                showAlert('Redirecting to ' + url, 'success', 3000, '', 'secondary');
                window.location.assign(url);
            } else {
                showAlert('Popup blocked. Link not allowed: ' + url, 'error', 3000, '', 'secondary');
            }
        };
    }

    if (/(smartfeecalculator|thecubexguide).com|(djxmaza|jytechs|gujjukhabar).in/.test(url)) {
        boostTimers();
        afterWindowLoaded(function() {
            //modifyScript('isadblock = 1;', 'isadblock = 0;');
            //modifyScript('"#sdl"', '"#dln"');
            //window.isadblock = 0;
            if (document.body.textContent.includes('Well Done! DL link generated.')) {
                popupsToRedirectsForUrlsIncludingText('.devuploads');
                setTimeout(function() {document.querySelector('#dln').click();}, 1000);
                //clickWithDelay('#sdl', 3000);
            } else {
                clickIfVisible5('#gdl');
                clickIfVisible5('#gdlf');
            }
        })
    }

    // ---- smallshorts     Amm0ni4/issues/363
    if (/hosting.ffindia.in/.test(url)) { boostTimers(); afterWindowLoaded(function() { window.adb = 0; window.adBlockEnabled = 0; window.wpsafelinkCount = 0; modifyScript('10000', '0'); modifyScript('2000', '0'); modifyScript('000', '0'); modifyScript('adBlockEnabled=true', 'adBlockEnabled=false'); modifyScript('let adBlockEnabled', 'adBlockEnabled'); modifyScript('let wpsafelinkCount', 'wpsafelinkCount');
    const intervalId = setInterval(() => { window.adb = 0; window.adBlockEnabled = 0; window.wpsafelinkCount = 0; const adbElement = document.getElementById("adb"); const adbModelElement = document.getElementById("AdbModel"); const wpsafeWaitElement = document.getElementById('wpsafe-wait2'); const wpsafelinkhumanElement = document.getElementById('wpsafelinkhuman'); if (adbElement) { adbElement.setAttribute("style", "display:none"); } if (adbModelElement) { adbModelElement.setAttribute("style", "display:none; visibility: hidden"); } if (wpsafeWaitElement) { wpsafeWaitElement.setAttribute("style", "display:block"); }
    try { wpsafehuman(); } catch (error) { console.error("wpsafehuman() is not defined or an error occurred:", error); } if (wpsafelinkhumanElement) { wpsafelinkhumanElement.click(); } const wpsafeLinkElement = document.getElementById('wpsafe-link'); if (wpsafeLinkElement) { const anchorElement = wpsafeLinkElement.querySelector('a[onclick*="smallshorts"]'); if (anchorElement) { anchorElement.click(); clearInterval(intervalId); } } }, 100); }); }


    /smallshorts.com/.test(url) ? afterDOMLoaded(function() {
          redirectToAnyLinkWithMatchingTextContent("Get Link");
      }) : null;

    // --------

    //apkadmin
    /apkadmin.com/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled('#downloadbtn');
    }) : null;

    // megadb - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/254
    /*/megadb.net/.test(url) ? afterDOMLoaded(function() {
        popupsToRedirectsForUrlsIncludingText('.megadb');
        clickIfRecaptchaSolved('button#downloadbtn:not([disabled])');
    }) : null; */
     // not working and not too important

    // goo.st - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/215
    /goo.st/.test(url) ? afterWindowLoaded(function() { clickIfExists('button.btn.btn-primary') }) : null;
    /(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/.test(url) ? (function() {
        boostTimers();
        /* window.adblockstatus = false;
        modifyScript('if(adblockstatus)', 'if(false)');
        modifyScript('adblockstatus', 'false');
        modifyScript('document.getElementById("secretsecret").remove();', '');
        alert('Adblock status: ' + window.adblockstatus); */
    })() : null;

    // vplink - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/271
    // make a regex for this bypass to run on these domains: kaomojihub.com,wastenews.xyz,myscheme.org.in,aiperceiver.com,electricalguider.com,mpsarkarihelp.in
    /kaomojihub.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#notarobot');
        clickIfExists('#btn7');
    }) : null;
    /vplink.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link');}) : null;

    // Timer boost list
    const urlPatternsForTimerBoost = [
        /www.gtaall.com\/get-manual/, // gtaall.com - https://github.com/FastForwardTeam/FastForward/issues/1348
        /motakhokhara.blogspot.com/, // psa.wf
        /besargaji.com/, // dramaday.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/21
        /^https:\/\/relampagomovies\.com\/.+/, // relampagomovies.com
        /((surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/, // linkpays.in
        /hypershort.com/, // hyp.sh hypershort
        /bgmiaimassist.in|(stockwallah|inventoryidea).com/, // hdhub4u
        /owoanime.com|importantclass.com/ // vnshortener.com
    ];
    for (const pattern of urlPatternsForTimerBoost) {
        if (pattern.test(url)) {
            boostTimers();
            break;
        }
    }

})();

// ----- ----- -----

//---Feedback for users---------------------------------------------------------------------
/**
 * Shows a styled alert popup with customizable type, duration and position
 * @param {string} message - The message to display
 * @param {string} type - Alert type: 'info', 'success', 'error', or 'warning'
 * @param {number} duration - How long to show the alert in milliseconds
 * @param {string} prefix - Text prefix before the message
 * @param {string} position - Position of alert: 'primary' (top) or 'secondary' (below primary)
 */
function showAlert(message, type = 'info', duration = 1000, prefix = 'Bypass script: ', position = 'primary') {
    // Create alert element
    const alertDiv = document.createElement('div');
    
    // Set positioning styles
    alertDiv.style.position = 'fixed';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.fontFamily = 'Arial, sans-serif';
    alertDiv.style.fontSize = '14px';
    alertDiv.style.maxWidth = '80%';
    alertDiv.style.transition = 'opacity 0.5s';
    
    // Set position based on parameter
    if (position === 'secondary') {
        alertDiv.style.top = '60px'; // Position below the primary alert
        alertDiv.dataset.position = 'secondary';
    } else {
        alertDiv.style.top = '10px'; // Default primary position
        alertDiv.dataset.position = 'primary';
    }
    
    // Set colors based on alert type
    switch(type) {
        case 'success':
            alertDiv.style.backgroundColor = '#4CAF50';
            alertDiv.style.color = 'white';
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = '#F44336';
            alertDiv.style.color = 'white';
            prefix = '❌ ' + prefix + ':';
            break;
        case 'warning':
            alertDiv.style.backgroundColor = '#FF9800';
            alertDiv.style.color = 'white';
            prefix = '⚠️ ' + prefix + ':';
            break;
        default: // info
            alertDiv.style.backgroundColor = '#2196F3';
            alertDiv.style.color = 'white';
            prefix = 'ℹ️ ' + prefix + ':';
    }
    
    alertDiv.textContent = prefix + ' ' + message;
    
    // Check if any existing alerts would conflict
    const clearExistingAlert = () => {
        const existingAlerts = document.querySelectorAll(`div[data-position="${position}"]`);
        existingAlerts.forEach(alert => {
            if (alert.parentNode) {
                alert.style.opacity = '0';
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.parentNode.removeChild(alert);
                    }
                }, 300);
            }
        });
    };
    
    // Check if body exists, if not wait for it
    if (document.body) {
        clearExistingAlert();
        document.body.appendChild(alertDiv);
        
        // Remove after duration
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.parentNode.removeChild(alertDiv);
                }
            }, 500);
        }, duration);
    } else {
        // Wait for body to be available
        document.addEventListener('DOMContentLoaded', () => {
            clearExistingAlert();
            document.body.appendChild(alertDiv);
            
            // Remove after duration
            setTimeout(() => {
                alertDiv.style.opacity = '0';
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 500);
            }, duration);
        });
    }
    
    // Also log to console for debugging
    console.log(`[${prefix}] ${message}`);
}

showAlert("running...");

function redirectWithMessage(url) {
    showAlert("Redirecting to " + url, 'success', 3000, '', 'secondary');
    setTimeout(function() {window.location.assign(url);}, 1000);
}

//-------------------------------------------------------------------------------------

// ----- Bypass Fly Inc (rinku.me .pro, 7mb.io, ...) ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me/
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

        function main() {

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

        };

        // Wait for page to be fully loaded
        if (document.readyState === "complete" || document.readyState === "interactive") {
            main();
        } else {
            window.addEventListener("DOMContentLoaded", main);
        }
    }
})();
// ----- End Bypass Rinku -----

// ----- Bypass mega-enlace ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/blob/b1622e8b387148509ca355e8070ffa5cdcf87525/SpanishFilter/sections/general_extensions.txt#L108 / https://github.com/AdguardTeam/AdguardFilters/issues/174863#issuecomment-1996735239) -----
// used in: pelisenhd.org latinomegahd.net gatonplayseries.com peliculasgd.net tododvdfull.com cinemaniahdd.net programasvirtualespc.net compucalitv.pro
(function() {
    if (/(mega-enlace|acortados).com|tulink.org/.test(window.location.href)) {
        const window = unsafeWindow; //Added so it works in ViolentMonkey instead of AdGuard

        //Adguard snippet expanded and modified
        ! function() {
            const e = e => { // The e function: It sends a POST request to the link shortener's server and performs some string replacements to modify the form data and action URL. Finally, it sends another POST request with the modified form data to the action URL.
                    const o = new XMLHttpRequest;
                    o.open("POST", "/check.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send("a");
                    const t = atob(window.ext_site).replace(/[a-z]/gi, (e => String.fromCharCode(e.charCodeAt(0) + (e.toLowerCase() <= "m" ? 13 : -13))));
                    let n = e.replaceAll('\\"', '"');
                    n = n.replace("'+ api_key+ '", window.api_key), n = n.replace("'+ link_out+ \"", window.link_out), n = n.replace(/action="'\+ .*?\+ '"/, `action="${t}"`);
                    var a;
                    const i = (a = n, (new DOMParser).parseFromString(a, "text/html")).querySelector("form"),
                        r = new FormData(i),
                        c = new XMLHttpRequest;
                    c.open("POST", t, !0), c.send(r), window.tab2 = window, postMessage("_clicked_b", location.origin)
                },
                o = { // The o object: This object is a proxy that intercepts function calls. It checks if the function call includes the api_key parameter and performs additional modifications to the function's code. If the necessary conditions are met, it tries to bypass the link shortener by calling the e function.
                    apply: (o, t, n) => {
                        if (n[1] && n[1].includes("api_key")) {
                            const o = window.link_out,
                                t = window.api_key,
                                a = n[1].match(/window\.open\(.*?\(atob\(main_site\)\).*?("\/.*\.php\?.*=").*?("&.*?=").*?(api_key),"view"/),
                                i = a[1].replaceAll('"', ""),
                                r = a[2].replaceAll('"', ""),
                                c = n[1].match(/<form target=[\s\S]*?<\/form>/)[0];
                            if (n[1] = n[1].replace("window.location.href", "var nulled"), n[1] = n[1].replace("window.open(f", "location.assign(f"), n[1] = n[1].replace(/(parseInt\(c\.split\("-"\)\[0\]\)<= 0).*?(\)\{)/, "$1$2"), o && t && i && r && c) try {
                                "loading" === document.readyState ? window.addEventListener("load", (() => {
                                    //Check if there is already access permission before launching the POST requests for the bypass
                                    let button = document.querySelector('input[type="button"][id="contador"][value="IR AL ENLACE"]');
                                    if (!button){
                                        e(c); //Launch the POST requests
                                        // Check periodically if access is granted to click the button
                                        let intervalId = setInterval(() => {
                                            let button = document.querySelector('input[type="button"][id="contador"][value="Ir al enlace"]');
                                            if (button) {
                                                button.click();
                                                clearInterval(intervalId);
                                            }
                                        }, 1000);
                                    } else if (button) {
                                        button.click();
                                    }
                                }), {
                                    once: !0
                                }) : e(c)
                            } catch (e) {
                                console.debug(e)
                            }
                        }
                        return Reflect.apply(o, t, n)
                    }
                };
            window.Function.prototype.constructor = new Proxy(window.Function.prototype.constructor, o)
        }();


    }
})();
// ----- ----- -----


// ----- Bypass paster.so ------
(function() {
    'use strict';

    if (/^https:\/\/paster\.so\/\w+/.test(window.location.href)) {

        // List of excluded domains
        const excludedDomains = ['paster.so', 'google.com', 'cloudflareinsights.com', 'wikipedia.com', 'w3.org', 'hcaptcha.com', 'gstatic.com'];

        let overlayCreated = false;

        // Function to extract URLs from the page source code and remove duplicates
        function extractURLsFromPage() {
            const pageSource = document.documentElement.outerHTML;
            const urlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s"]+/g;
            let urls = pageSource.match(urlRegex);
            if (urls) {
                const uniqueURLs = new Set(urls.map(url => url.split("\\")[0]));
                urls = Array.from(uniqueURLs);
            }
            return urls ? urls.filter(url => !excludedDomains.some(domain => url.includes(domain))) : [];
        }

        // Function to create the overlay element and add clickable URLs to it
        function addURLsToOverlay(urls) {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '50%';
            overlay.style.right = '20px'; // Adjusted to appear in the middle right corner
            overlay.style.transform = 'translateY(-50%)';
            overlay.style.padding = '10px';
            overlay.style.borderRadius = '5px';
            overlay.style.zIndex = '9999';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            overlay.style.color = '#fff';

            // Add title
            const title = document.createElement('h3');
            title.textContent = 'URLs found:';
            overlay.appendChild(title);

            const urlList = document.createElement('ul');
            urls.forEach(url => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = url;
                link.href = url;
                link.target = '_blank'; // Open link in a new tab
                listItem.appendChild(link);
                urlList.appendChild(listItem);
            });

            overlay.appendChild(urlList);
            document.body.appendChild(overlay);
        }

        // Wait for the window to be fully loaded
        window.addEventListener('load', () => {
            if (!overlayCreated) {
                const extractedURLs = extractURLsFromPage();
                const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : redirect(finalUrl);
                if (extractedURLs.length === 1) {
                    redirect(extractedURLs[0]); // Redirect to the URL if only one URL is found
                } else if (extractedURLs.length > 1) {
                    addURLsToOverlay(extractedURLs); // Add URLs to overlay if more than one URL is found
                    overlayCreated = true;
                } else {
                    redirect(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
                }
            }
        });
    }
})();
// ---------

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

// ----- partial autoclicker for soractrl used by moviesnipipay.me,... ------
// sites with similar pages not autoclicked for now: ssrmovies.promo, mkvcinemas.phd, freecoursesite.com
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/14#issuecomment-2588262
// optional uBO filter for easier clicking: quickeemail.com###landing, .soractrl:others()

(function() {
    const domainRegex = /quickeemail.com/
    if (domainRegex.test(window.location.href)) {

      const fakeEvent = {isTrusted: true, originalEvent: {isTrusted: true}};

      // Wait for jQuery to load
      const waitForJQuery = setInterval(() => {
          if (typeof jQuery !== "undefined") {
              clearInterval(waitForJQuery);

              // Override jQuery's `.on` method
              const originalOn = unsafeWindow.jQuery.fn.on;

              unsafeWindow.jQuery.fn.on = function(eventType, selector, handler, ...args) {
                  // Check if it's a "click" event on #soralink-human-verif-main
                  if (eventType === "click" && (this.is("#soralink-human-verif-main") || this.is(selector === "#generater") || this.is("#showlink"))) {
                      // Call the function immediately if handler is directly passed
                      if (typeof selector === "function") {
                          selector(fakeEvent); // Call the function
                      } else if (typeof handler === "function") {
                          handler(fakeEvent); // Call the handler
                      }
                  }

                  // Call the original .on method
                  return originalOn.call(this, eventType, selector, handler, ...args);
              };

              // Check if the element #soralink-human-verif-main exists
              if (!document.getElementById("soralink-human-verif-main")) {
                  // This is the second and third step with #generater and #showlink
                  setInterval(() => {
                      unsafeWindow.jQuery("#pleasewaits").hide();
                      unsafeWindow.jQuery("#showlink").show();
                  }, 1000);
              }
          }
      }, 10); // Check every 10ms
    }
})();
// ----- -----
