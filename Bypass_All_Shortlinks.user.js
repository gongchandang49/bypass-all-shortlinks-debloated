// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version        91.9.14
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          window.onurlchange
// @grant          GM_registerMenuCommand
// @icon           https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require        https://update.greasyfork.org/scripts/439099/1203718/MonkeyConfig%20Modern%20Reloaded.js
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues
// @match *://*.earnify.pro/*
// @match *://*.aprovax.com/*
// @match *://*.lootcash.vip/*
// @match *://*.mixrootmods.com/*
// @match *://*.duplichecke.com/*
// @match *://*.dreamistore.com/*
// @match *://*.mcafee-com.com/*
// @match *://*.techyadjectives.com/*
// @match *://*.cyberstockofficial.in/*
// @match *://*.mkvflix.org/*
// @match *://*.link.bicolink.net/*
// @match *://*.link.vipurl.in/*
// @match *://*.techyinfo.in/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.short.dash-free.com/*
// @match *://*.speedynews.xyz/*
// @match *://*.studyuo.com/*
// @include /^(https?:\/\/)(.+)?(go.link4rev.site|go.urlcash.site)(\/.*)/
// @match *://*.olhonagrana.com/*
// @match *://*.dutchycorp.space/*
// @include /^(https?:\/\/)(.+)?(link.birdurls.com|link.owllink.net|link.illink.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((teachsansar|technicalatg|foodxor).com)(\/.*)/
// @match *://*.ouo.io/*
// @match *://*.linkbox.to/*
// @include /^(https?:\/\/)(.+)?((desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link)(\/.*)/
// @match *://*.adbtc.top/*
// @match *://*.upload.ee/*
// @include /^(https?:\/\/)(.+)?(appdrive\.*)/
// @match *://*.dddrive.me/*
// @match *://*.uppit.com/*
// @match *://*.krakenfiles.com/*
// @match *://*.gofile.io/*
// @match *://*.karanpc.com/*
// @match *://*.file-upload.net/*
// @include /^(https?:\/\/)(.+)?(userscloud.com|dosya.co)(\/.*)/
// @match *://*.hexupload.net/*
// @match *://*.rapidgator.net/*
// @match *://*.dbree.me/*
// @match *://*.megaupto.com/*
// @match *://*.dataupload.net/*
// @match *://*.douploads.net/*
// @match *://*.linkerload.com/*
// @match *://*.filemoon.sx/*
// @match *://*.bestfonts.pro/*
// @match *://*.files.fm/*
// @match *://*.megaup.net/*
// @match *://*.4fnet.org/*
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?(gdtot\.*)/
// @match *://*.mp4upload.com/*
// @match *://*.drop.download/*
// @match *://*.workupload.com/*
// @include /^(https?:\/\/)(.+)?(hxfile.co|ex-load.com|megadb.net)(\/.*)/
// @match *://*.send.cm/*
// @match *://*.racaty.io/*
// @match *://*.racedepartment.com/*
// @match *://*.mega4up.org/*
// @match *://*.uploadhaven.com/*
// @match *://*.novafile.org/*
// @match *://*.k2s.cc/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.mega4upload.com/*
// @match *://*.uploady.io/*
// @match *://*.up-load.io/*
// @match *://*.anonym.ninja/*
// @match *://*.vosan.co/*
// @match *://*.apkmody.io/*
// @match *://*.mdfx9dc8n.net/*
// @include /^(https?:\/\/)(.+)?(uploadrar.com|uptomega.me)(\/.*)/
// @match *://*.takefile.link/*
// @match *://*.chedrives.com/*
// @match *://*.appsblaze.com/*
// @match *://*.modcombo.com/*
// @match *://*.userupload.net/*
// @match *://*.1fichier.com/*
// @include /^(https?:\/\/)(.+)?(upload-4ever.com|up-4ever.net)(\/.*)/
// @match *://*.fileresources.net/*
// @match *://*.3upload.com/*
// @match *://*.freepreset.net/*
// @match *://*.doodrive.com/*
// @match *://*.gocmod.com/*
// @match *://*.dailyuploads.net/*
// @match *://*.9xupload.asia/*
// @match *://*.mediafire.com/*
// @match *://*.qiwi.gg/*
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @match *://*.sharemods.com/*
// @match *://*.mexa.sh/*
// @include /^(https?:\/\/)(.+)?((kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*)/
// @match *://*.pdfcoffee.com/*
// @match *://*.adoc.pub/*
// @include /^(https?:\/\/)(.+)?(clickndownload.org|clicknupload\.*)/
// @match *://*.leechpub.com/*
// @match *://*.uploadev.org/*
// @match *://*.rawlazy.si/*
// @match *://*.modsbase.com/*
// @match *://*.dropgalaxy.com/*
// @include /^(https?:\/\/)(.+)?(file-upload.com|file-upload.org)(\/.*)/
// @match *://*.hitfile.net/*
// @match *://*.oydisk.com/*
// @match *://*.filedm.com/*
// @match *://*.gogodl.com/*
// @match *://*.turbobit.net/*
// @match *://*.4shared.com/*
// @match *://*.1ink.cc/*
// @match *://*.keeplinks.org/*
// @match *://*.1short.io/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.onimports.com.br/*
// @match *://*.1shortlink.com/*
// @match *://*.rapidshort.lat/*
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @match *://*.pro.sh/*
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @match *://*.wrbloggers.com/*
// @match *://*.1bitspace.com/*
// @match *://*.lets.5get.net/*
// @match *://*.cshort.org/*
// @match *://*.linkpay.cc/*
// @include /^(https?:\/\/)(.+)?(cooklike.info|model-tas-terbaru.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(delishwell.com|artiskini.com)(\/.*)/
// @match *://*.kisalt.digital/*
// @include /^(https?:\/\/)(.+)?(bildirim.in|bildirim.eu|bildirim.link)(\/.*)/
// @match *://*.enlacito.com/*
// @match *://*.webhostingtips.club/*
// @match *://*.render-state.to/*
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @match *://*.dilink.net/*
// @match *://*.shortener.goldcontent.site/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego).app)(\/.*)/
// @match *://*.ontechhindi.com/*
// @match *://*.sfl.gl/*
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @match *://*.btcsatoshi.net/*
// @match *://*.comohoy.com/*
// @match *://*.apkw.ru/*
// @include /^(https?:\/\/)(.+)?(cryptomonitor.in|2the.space|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((newsbawa|utkarshonlinetest).com)(\/.*)/
// @match *://*.programasvirtualespc.net/*
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinycmd|tinybc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|expertvn.com|aztravels.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bitzite|neverdims).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hostratgeber.de|techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com|dailytech-news.eu|moonboom.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coingraph.us|trendzilla.it|horoscop.info|(infonerd|writeprofit).org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|cryptfaucet).com|(bitcrypto|bit4me).info|offerinfo.net|deltabtc.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nullscript.info|freebinance.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com|10short.vip)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in)(\/.*)/
// @match *://*.bitcotasks.com/*
// @include /^(https?:\/\/)(.+)?((netflixrelease|mangareleasedate|freemodapp|cryptoprolife|diethim|zutiza|hitjankari|phixshop|mp4news|trancebazar|taazaalerts|mazheshetkari|uskloans).com|(rontymobile|myfirstname|djrajurjm|ignoupur).in|mdsuuniversity.org|odishadjs.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto2u|bestcoinsites).xyz)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @match *://*.yalifin.xyz/*
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.clink1.com/*
// @match *://*.ponselharian.com/*
// @match *://*.tonanmedia.my.id/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cryptonetos.ru/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.1mlink.vip/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @match *://*.proviralhost.com/*
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.altblogger.net/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techmny.com|unblockedgames.world)(\/.*)/
// @include /^(https?:\/\/)(.+)?((chooyomi|blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kiktu|techcyan).com)(\/.*)/
// @match *://*.fexkomin.xyz/*
// @match *://*.100puan.com/*
// @match *://*.sub2get.com/*
// @include /^(https?:\/\/)(.+)?((fc-lc|loaninsurehub).com|fc-lc.xyz)(\/.*)/
// @match *://*.mneyvip.com/*
// @match *://*.jobform.in/*
// @match *://*.go.shareus.in/*
// @match *://*.playpaste.com/*
// @match *://*.suratresmi.id/*
// @include /^(https?:\/\/)(.+)?(examkhata.com|gamelopte.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rancah.com|menjelajahi.com|shortly.xyz|nyawang.com)(\/.*)/
// @match *://*.cryptotracker.space/*
// @match *://*.stfly.me/*
// @include /^(https?:\/\/)(.+)?(khaddavi.net|contentmenarik.com)(\/.*)/
// @match *://*.sapnogalpo.online/*
// @match *://*.leitup.com/*
// @match *://*.offeroc.com/*
// @include /^(https?:\/\/)(.+)?(azmath.info|expertvn.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((nregajobcard|pradhanmantriupdates).in)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?(ez4mods.com|tech5s.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((creditsalah|dissenttimes).com)(\/.*)/
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.alivedesktop.com/*
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @match *://*.mazen-ve3.com/*
// @include /^(https?:\/\/)(.+)?(mhma12.tech|hasri.xyz|soft3arbi.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((120898|141989|161989|131989|121989|151989).xyz)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?((coinsward|blogsward).com|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1bit.space|mgnet.xyz)(\/.*)/
// @match *://*.bigbtc.win/*
// @match *://*.firefaucet.win/*
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @match *://*.tmail.io/*
// @include /^(https?:\/\/)(.+)?(exeo.app|exego.app)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tpayr|waezf|ashrfd|poqzn|rezsx|tryzt|ashrff).xyz|quesignifi.ca|tiktokcounter.net|lifgam.online|dawenet.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22).com|gold-24.net|bedrat.xyz|maos4alaw.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jiotech.net|jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @match *://*.tii.la/*
// @match *://*.skiplink.me/*
// @match *://*.apanmusic.in/*
// @match *://*.o-pro.online/*
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @match *://*.easyworldbusiness.com/*
// @match *://*.getzen.cash/*
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(deportealdia.live|noweconomy.live|techgeek.digital)(\/.*)/
// @match *://*.nishankhatri.xyz/*
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club)(\/.*)/
// @match *://*.computerpedia.in/*
// @match *://*.myprivatejobs.com/*
// @match *://*.claimfreetrx.online/*
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @include /^(https?:\/\/)(.+)?(copy-paste-fonts.com|cryptednews.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner).com|happy-living.online|galaxy-link.space|oke.io|bitss.sbs|(forextrader|foxylinks).site)(\/.*)/
// @match *://*.solarchaine.com/*
// @include /^(https?:\/\/)(.+)?((remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogscare|blogtechh|host2loan).com|enit.in|clk.wiki|(oko|aii).sh|moonboom.net|lnbz.la)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?((exactpay|dinheirocrypto).online|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online)(\/.*)/
// @match *://*.playnano.online/*
// @include /^(https?:\/\/)(.+)?(donia2tech.com|blog.techeysub.online|minersim.com)(\/.*)/
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @include /^(https?:\/\/)(.+)?(teknosimple.com|besargaji.com)(\/.*)/
// @match *://*.bloginkz.com/*
// @match *://*.bastinews.xyz/*
// @match *://*.autodime.com/*
// @match *://*.amritadrino.com/*
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @match *://*.coinhub.wiki/*
// @include /^(https?:\/\/)(.+)?(lyricsbaazaar.com|ezeviral.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro)(\/.*)/
// @match *://*.coinsrev.com/*
// @match *://*.zubatecno.com/*
// @include /^(https?:\/\/)(.+)?((wooseotools|woowebtools).com)(\/.*)/
// @match *://*.adwerty.com/*
// @match *://*.modebaca.com/*
// @match *://*.shopforex.online/*
// @include /^(https?:\/\/)(.+)?((pernahsukses|alpinecorporate).com|aoutoqw.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(altechen.com|entutes.com)(\/.*)/
// @match *://*.freetrx.fun/*
// @match *://*.socialwolvez.com/*
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogginglass|arahtekno|mopahealth).com|faucet.work|wildblog.me|jiotech.net|apkupload.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((anhdep24|nguyenvanbao|xemsport|byboe|asideway).com)(\/.*)/
// @match *://*.traffic1s.com/*
// @include /^(https?:\/\/)(.+)?(web1s.co|web1s.info|app.covemarkets.com)(\/.*)/
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com|(blogbux|blogesque|exploreera).net)(\/.*)/
// @match *://*.coins-town.com/*
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|mealcold|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((awgrow|fadedfeet|kenzo-flowertag|homeculina|ineedskin|alightmotionlatest|auntmanny|mytechcontent|techymatic|gamedouc).com|worldtanr.xyz|lawyex.co|yexolo.net|mdn.lol|(aayurvedshastra|allnewspoint).in)(\/.*)/
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @match *://*.linkvip.io/*
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.ify.ac/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.sahityt.com/*
// @match *://*.file-upload.in/*
// @match *://*.upmienphi.com/*
// @match *://*.linksly.co/*
// @match *://*.cashando.me/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.newsturbovid.com/*
// @match *://*.amanguides.com/*
// @match *://*.mirrored.to/*
// @match *://*.flybid.net/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.huongdanvuotlink123.blogspot.com/*
// @match *://*.maxurlz.com/*
// @include /^(https?:\/\/)(.+)?(sama-pro.com|mikl4forex.com|dr-forex.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @match *://*.linksae.com/*
// @match *://*.sub2unlock.com/*
// @include /^(https?:\/\/)(.+)?(thebloggerspoint.in|ezeviral.com|fixno.in|technocubes.in)(\/.*)/
// @match *://*.rockmods.net/*
// @match *://*.doodjob.com/*
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @match *://*.yosite.net/*
// @include /^(https?:\/\/)(.+)?(offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(geniussolutions.co|pokemonroms.cc|alightmotionlatest.com)(\/.*)/
// @match *://*.cricketgurupro.com/*
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @include /^(https?:\/\/)(.+)?(nulledlist.info|earnash.com|my-coins.xyz|earn-bitcoin.online|zimabadko.com|vidoza.xyz|every-crypto.info)(\/.*)/
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks|apklox).com|updrop.link)(\/.*)/
// @match *://*.ronakfitness.com/*
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|djqunjab.in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(readi.online|mbantul.my.id|blog.qnix.me|videoclip.info|moddingzone.in|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|fileku.net|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|liinkat|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|link3s|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|tinygo.co|pndx.live|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.clink1.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.msmedia.in/*
// @match *://*.yalifin.xyz/*
// @match *://*.sahityt.com/*
// @include /^(https?:\/\/)(.+)?(blitly.io|smartlink.vip)(\/.*)/
// @match *://*.wpking.in/*
// @match *://*.eda-ah.com/*
// @match *://*.m.newhit.me/*
// @match *://*.abhikr.in/*
// @match *://*.zoztm.com/*
// @match *://*.go.qora.in/*
// @match *://*.10short.vip/*
// @match *://*.finoxpert.com/*
// @match *://*.rsrlink.in/*
// @match *://*.dailynew.online/*
// @match *://*.strfree.xyz/*
// @match *://*.jazbaat.in/*
// @match *://*.urotan.net/*
// @match *://*.mrdoge.in/*
// @match *://*.autodime.com/*
// @match *://*.quick91.com/*
// @match *://*.airlike.me/*
// @match *://*.techhadi.com/*
// @match *://*.zubatecno.com/*
// @match *://*.yosite.net/*
// @match *://*.battlechamp.in/*
// @match *://*.adiskblog.in/*
// @match *://*.cryptednews.space/*
// @match *://*.hiharshit.in/*
// @match *://*.indiansarkari.com/*
// @match *://*.tanytech.com/*
// @match *://*.healthynepal.in/*
// @match *://*.gktech.uk/*
// @match *://*.vslinks.online/*
// @match *://*.factsdunya.com/*
// @match *://*.1apple.xyz/*
// @match *://*.missreview.info/*
// @match *://*.recipejaano.com/*
// @match *://*.dilmibriva.store/*
// @match *://*.10short.pro/*
// @match *://*.videolyrics.in/*
// @match *://*.blog.topfaucet.us/*
// @match *://*.housezquick.com/*
// @match *://*.flashlinks.online/*
// @match *://*.siteblog.in/*
// @match *://*.trendtrove.vip/*
// @match *://*.shortsnob.in/*
// @match *://*.apna-blog.in/*
// @match *://*.ignitesmm.com/*
// @match *://*.fileku.net/*
// @match *://*.nisnisin.com/*
// @match *://*.sapnogalpo.online/*
// @match *://*.candleoflife.fun/*
// @include /^(https?:\/\/)(.+)?(povathemes.com|escobarvip.cf|golinki.com)(\/.*)/
// @match *://*.upload.veganab.co/*
// @match *://*.anonbar.com/*
// @match *://*.tamilhit.tech/*
// @match *://*.suntechu.in/*
// @match *://*.loan.techyinfo.in/*
// @match *://*.cryptokaro.co.in/*
// @match *://*.foxbugg.com/*
// @match *://*.tremamnon.com/*
// @match *://*.market.finclub.in/*
// @match *://*.bantenexis.com/*
// @match *://*.techkeshri.com/*
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.smallinfo.in/*
// @match *://*.pglink.online/*
// @match *://*.mvplaylink.in.net/*
// @match *://*.ww1.linktrims.com/*
// @match *://*.healthynepal.in/*
// @match *://*.missionhight.in/*
// @match *://*.tech.techwhom.com/*
// @match *://*.encurtaclik.com/*
// @match *://*.appkamods.com/*
// @match *://*.cybertechng.com/*
// @match *://*.conghuongtu.net/*
// @match *://*.loan.filmypoints.in/*
// @match *://*.niinga.com/*
// @match *://*.cinemapettai.in/*
// @match *://*.market.gorating.in/*
// @match *://*.blog.anywho-com.com/*
// @match *://*.videoslyrics.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.prakasheditingtamizhan.com/*
// @match *://*.mmdrive.xyz/*
// @match *://*.reminimod.co/*
// @match *://*.keralalotteryresult.co/*
// @match *://*.tech.filmypoints.in/*
// @match *://*.dpbossreal.com/*
// @match *://*.tbhlabsnews.com/*
// @match *://*.interestingfactsare.com/*
// @match *://*.dealprice.co/*
// @match *://*.djnonstopmusic.in/*
// @match *://*.tech.filohappy.in/*
// @match *://*.vietnamtravelguide.top/*
// @match *://*.earn.hostadviser.net/*
// @match *://*.viralsinfo.com/*
// @match *://*.insuranceinfos.in/*
// @match *://*.www.filmypoints.in/*
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.health.techyinfo.in/*
// @match *://*.truevpnlover.com/*
// @match *://*.battleroyal.online/*
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @match *://*.iphoto.site/*
// @match *://*.copy-paste-fonts.com/*
// @include /^(https?:\/\/)(.+)?(techloadz.com|sportsmediaz.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((manga2day|gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kienthucrangmieng|chinhnhacoban|tremamnon|coin-free).com|fanclup.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(fc-lc.xyz|(webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mdn.lol|awgrow.com|fadedfeet.com|kenzo-flowertag.com|homeculina.com|ineedskin.com|worldtanr.xyz|lawyex.co|yexolo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|admediaflex|cryptfaucet|phimne|cdrab|tinybc|tinycmd).com|(bit4me|ecq|sportweb|mgame).info|(wpcheap|offerinfo).net|quanngon.org|datacheap.io)(\/.*)/
// @match *://*.multiup.org/*
// @match *://*.modsfire.com/*
// @match *://*.social-unlock.com/*
// @match *://*.nft.blogyindia.com/*
// @match *://*.my.dropz.xyz/*
// @match *://*.go.blogyindia.com/*
// @match *://*.patak.dropz.xyz/*
// @match *://*.blogyindia.com/*
// @match *://*.sub2unlock.com/*
// @match *://*.crypto.webseriesreel.in/*
// @match *://*.adbull.me/*
// @match *://*.uii.io/*
// @match *://*.shortano.link/*
// @match *://*.shortino.link/*
// @match *://*.clk.st/*
// @match *://*.clks.pro/*
// @match *://*.chainfo.xyz/*
// @match *://*.clicksfly.com/*
// @match *://*.dailytime.store/*
// @match *://*.cryptoflare.cc/*
// @match *://*.ez4short.com/*
// @match *://*.fc.lc/*
// @match *://*.cutp.in/*
// @match *://*.saly.io/*
// @match *://*.earnow.online/*
// @match *://*.exe.io/*
// @match *://*.gplinks.in/*
// @match *://*.linkjust.com/*
// @match *://*.sl.btc25.org/*
// @match *://*.linkfly.me/*
// @match *://*.earnify.pro/*
// @match *://*.linksfire.co/*
// @match *://*.adlink.click/*
// @match *://*.gigafly.me/*
// @match *://*.traffic1s.com/*
// @match *://*.link4rev.site/*
// @match *://*.linkrex.net/*
// @match *://*.opli.xyz/*
// @match *://*.www.clink2.com/*
// @match *://*.linksly.co/*
// @match *://*.shortyearn.com/*
// @match *://*.upshrink.com/*
// @match *://*.tr.link/*
// @match *://*.nanolinks.in/*
// @match *://*.megaurl.in/*
// @match *://*.adshort.co/*
// @match *://*.atglinks.comk/*
// @match *://*.shrinkforearn.in/*
// @match *://*.shorti.io/*
// @match *://*.try2link.com/*
// @match *://*.terafly.me/*
// @match *://*.www.wts.pw/*
// @match *://*.web1s.com/*
// @match *://*.rocklinks.net/*
// @match *://*.megafly.in/*
// @match *://*.smartlink.vip/*
// @match *://*.usalink.io/*
// @match *://*.birdurls.com/*
// @match *://*.adrinolinks.in/*
// @match *://*.10short.com/*
// @match *://*.urlpay.in/*
// @match *://*.mdiskshortner.link/*
// @match *://*.cbshort.com/*
// @match *://*.besturl.link/*
// @match *://*.clk.sh/*
// @match *://*.droplink.co/*
// @match *://*.adpaylink.com/*
// @match *://*.botfly.me/*
// @match *://*.paid4link.com/*
// @match *://*.dash-free.com/*
// @match *://*.owllink.net/*
// @match *://*.cuty.io/*
// @match *://*.octolinkz.com/*
// @match *://*.doshrink.com/*
// @match *://*.cashando.me/*
// @match *://*.revly.click/*
// @match *://*.shorterall.com/*
// @match *://*.shrinkearn.com/*
// @match *://*.shrinkme.io/*
// @match *://*.shortox.com/*
// @match *://*.linksfly.link/*
// @match *://*.oii.io/*
// @match *://*.ay.live/*
// @match *://*.timeforearn.com/*
// @match *://*.urlstox.com/*
// @match *://*.lollty.com/*
// @match *://*.okrzone.com/*
// @match *://*.mytop5.club/*
// @match *://*.technicalatg.com/*
// @match *://*.sahlmarketing.net/*
// @match *://*.ledifha.com/*
// @match *://*.adybrands.in/*
// @match *://*.foodupe.com/*
// @match *://*.blog.coin2pay.xyz/*
// @match *://*.gamerfang.in/*
// @match *://*.videolyrics.in/*
// @match *://*.coin2pay.xyz/*
// @match *://*.blog.mphealth.online/*
// @match *://*.techrayzer.com/*
// @match *://*.economiarelevante.com.br/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.zonearn.biz/*
// @match *://*.nulledsafe.com/*
// @match *://*.froggyreviews.com/*
// @match *://*.techmody.io/*
// @match *://*.slink.bid/*
// @match *://*.www.pythondunyasi.com/*
// @match *://*.free4u.nurul-huda.or.id/*
// @match *://*.rotator.nurul-huda.sch.id/*
// @match *://*.jrlinks.in/*
// @match *://*.kiiw.icu/*
// @match *://*.solarchaine.com/*
// @match *://*.hr.vikashmewada.com/*
// @match *://*.sclick.crazyblog.in/*
// @match *://*.ser7.crazyblog.in/*
// @match *://*.freeltc.top/*
// @match *://*.freecrypto.top/*
// @match *://*.insfly.pw/*
// @match *://*.Insfly.pw/*
// @match *://*.mdiskshortner.link/*
// @match *://*.clockads.in/*
// @match *://*.exashorts.fun/*
// @match *://*.cosmic-matter.pw/*
// @match *://*.terafly.me/*
// @match *://*.adnews.me/*
// @match *://*.kyshort.xyz/*
// @match *://*.eazyurl.xyz/*
// @match *://*.linksfly.top/*
// @match *://*.bestlink.pro/*
// @match *://*.playstore.pw/*
// @match *://*.sigmalinks.in/*
// @match *://*.r1.foxylinks.site/*
// @grant          GM_deleteValue
// @grant        GM.xmlHttpRequest
// @grant          GM_getResourceText
// @match        https://paster.so/*
// @include      /^(https?:\/\/)((ebaticalfel|megadropsz|stownrusis|iedprivatedqu).com)\/s\?/
// @include      /adbypass.eu/
// @include      /(bypass.city|adbypass.org)\/bypass\?bypass=/
// @include     /(mundopolo.net|myfirstdollar.net)/
// @include     /(adsense.tupaste.top)\/#!/
// @include     /acorta2.com/
// @include     /(web.admoneyclick.net|acortaphd.live)\/#!/
// @include     /onlypc.net\/out#!/
// @include     /comohoy.com/
// @include     /sphinxanime.com\/short/
// @include     /japan-paw.net\/out/
// @include     /link.manudatos.com\/#!/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /cybercityhelp.in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.(us|site|cc)/
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /exeo.app|mrgec.com|cety.app/
// @include     /fc-lc.(xyz|com)/
// @include     /tmail.io/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /((cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top)/
// @include     /dropgalaxy.(com|co)\/drive/
// @include     /short-ly.co/
// @include     /(shramikcard|pmkisanlists).in|cookad.net/
// @include     /blogging.techworldx.net|10beasts.biz/
// @include     /starsddl.me\/short/
// @include     /tech.unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu).com)\/s\?/
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
// @include     /ez4short.com/
// @include     /learnmany.in/
// @include     /lksfy.in/
// @include     /droplink.co/
// @include     /lnks.primarchweb.in/
// @include     /highkeyfinance.com/
// @include     /toonhub4u.net\/redirect\/main.php\?url=/
// @include     /toonhub4u\.net\/([^\/]+)\/$/
// @include     /mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/
// @include     /gplinks.co\/[^/#]+\/(?:#|\?pid=)/
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
// @include     /(cravesandflames|codesnse).com/
// @include     /go.(cravesandflames|codesnse).com/
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
// @include     /(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url\/\#/
// @include     /antonimos.de|tiktokcounter.net|tiktokrealtime.com|tpayr.xyz|quesignifi.ca|lifgam.online|waezf.xyz|ashrfd.xyz/
// @include     /minimilionario.com\/noticia.php\?token=/
// @include     /usandoapp.com/
// @include     /v2links.(com|me)/
// @include     /(utkarshonlinetest|newsbawa).com/
// @include     /techtnet.com/
// @include     /asideway.com/
// @include     /web1s.asia\/api-mode/
// @include     /(linkvip|blitly).io/
// @include     /^https:\/\/megalink.pro\/[a-zA-Z0-9]+$/
// @include     /lnbz.la/
// @include     /tii.la|oko.sh|shrinke.me|clk.wiki|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net/
// @include     /ez4short.com\/[^\/]+\/\?token=[^\/]+$/
// @include     /shon.xyz/
// @include     /veganab.co\/\?link=/
// @include     /veganab.co/
// @include     /camdigest.com/
// @include     /tawda.xyz\/tag/
// @include     /pastebin.com\/raw/
// @include     /spacetica.com/
// @include     /linegee.net|intercelestial.com/
// @include     /(loanoffering|djmp3world).in|moonplusnews.com/
// @include     /modijiurl.com/
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
// @include     /www.(sinsitio.site|dixva.com)\/out\/\?go=/
// @include     /www.yitarx.com/
// @include     /myshrinker.com/
// @include     /thotpacks.xyz/
// @include     /readytechflip.com/
// @include     /fitnessholic.net\/token.php\?post=/
// @include     /fitnessholic.net/
// @include      /filecrypt.(cc|co)/
// @include      /(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /mega-enlace.com/
// @include     /(work.ink|workink.click)\/.*$/
// @resource    NOTYF_CSS https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css
// @require     https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|(login|signup|account|officeapps|api|mail|hotmail).live|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles).com|(thumb8|thumb9|crewbase|crewus|shinchu|shinbhu|ultraten|uniqueten|topcryptoz|allcryptoz|coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|nflximg|doubleclick|luckydice).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|adarima|telegram|wikipedia).org|mcrypto.club|misterio.ro|insurancegold.in|coinscap.info|chefknives.expert|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @downloadURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js
// @updateURL https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js
// ==/UserScript==
// ================================================================================================================================================================
//                                          PLEASE READ SCRIPT INFO BEFORE USE
//                                      PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                 PLEASE DON'T REMOVE OR CHANGE MY BLOG, DISABLE YOUR ADBLOCK IN MY BLOG , THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 , @juansi , @NotYou , @cunaqr And @Rust1667 for Helping me , make my script even better
//                                And also Thank you to everyone who has Contributed with Good Feedback.
// =================================================================================================================================================================
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
   const window = unsafeWindow; // Some of My Codes Not Running Well Without this , Please Let Me Know if You Find any Bugs
   const cfg = new MonkeyConfig({title: 'Bypass Version 91.9 Settings :', menuCommand: true,
   params: {Announcements : {type: 'text', default: 'Add Your ApiKey from nocaptchaai to use Auto Solve Hcaptcha', long: 3},
    ApiKey: {label: "noCaptcha Ai KEY", type: "text", default: "",},
    SetDelay: {label: "Redirect Delay ", type: "number", default: 5,},
    BlogDelay: {label: "Use My Blogs For Delays", type: "checkbox", default: true,},
    reCAPTCHA: {label: "Auto Open/Solve Recaptcha", type: "checkbox", default: false,}, // Auto Solve Recaptcha Not Yet Ready
    hCaptcha: {label: "Auto Open/Solve Hcaptcha", type: "checkbox", default: false, },
    YTShort: {label: "Disable Youtube Short", type: "checkbox", default: false,},
    RightFC: {label: "Enable Context Menu ", type: "checkbox", default: false,},
    BlockFC: {label: "Enable Always Ready", type: "checkbox", default: false,},
    TimerFC: {label: "Enable Fast Timer ", type: "checkbox", default: false,},
    AutoDL: {label: "Auto Download For Supported Sites", type: "checkbox", default: false,},},});
(function(){function BoostTimers() {const FsT = window.setTimeout; const FsI = window.setInterval;
  Object.defineProperty(window, 'setTimeout', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsT.apply(this, arguments);}});
  Object.defineProperty(window, 'setInterval', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsI.apply(this, arguments);}});}
  if (cfg.get('TimerFC') == true) {BoostTimers();} else {}})();
(function() { // Please Remember , My Scripts Works Better Using Firefox Browser and Violentmonkey Extension
'use strict';
  const APIKEY = cfg.get('ApiKey'); const bp = query => document.querySelector(query);const BpAll = query => document.querySelectorAll(query);
  const BpParams = new URLSearchParams(location.search);const BpParamd = new URLSearchParams(document.location.search);const RexBp = new RegExp(/^\?([^&]+)/);
  const BpT = query => document.getElementsByTagName(query);const elementExists = query => bp(query) !== null;const domainCheck = domains => new RegExp(domains).test(location.host);
  function BpBlock() {return 1;}
  function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}
  function waitForElm(query, callback) {setTimeout(function() {
    if (elementExists(query)) {callback(bp(query));} else {waitForElm(query, callback);}}, 1000);}
  function ClickIfExists(query, timeInSec = 1, funcName = 'setTimeout') {
    if (elementExists(query)) {window[funcName](function() {bp(query).click();}, timeInSec * 1000);}}
  function SubmitIfExists(query, timeInSec = 1, funcName = 'setTimeout') {
    if (elementExists(query)) {window[funcName](function() {bp(query).submit();}, timeInSec * 1000);}}
  function Checkvisibility(elem) {if (!elem.offsetHeight && !elem.offsetWidth) {return false;}
    if (getComputedStyle(elem).visibility === 'hidden') {return false;} return true;}
  function XPathBp(b,p) {p = document; return p.evaluate(b,p,null,9,null).singleNodeValue;}
  function RemoveRef(value) {delete document.referrer; document.__defineGetter__('referrer', () => value);}
  function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), {name: 'referrer',content: 'origin'}));
    Object.assign(document.createElement('a'), {href}).click();}
  function RemoveBp(domain, selector) {const re_domain = new RegExp(domain); if (!re_domain.test(location.host)) return;
    const elements = BpAll(selector);for (const element of elements) {element.remove();}}
  function redirect(url, blog = false) {location = blog && cfg.get('BlogDelay') ? '' + url : url;}
  function BpCalc(sbp) {return (sbp.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || []).reduce(function(sum, value) {return parseFloat(sum) + parseFloat(value);});}
  function BlockRead(SearchString, nameFunc) {var target = window[nameFunc]; window[nameFunc] = function(...args) {const stringFunc = String(args);
    if ((new RegExp(SearchString)).test(stringFunc)) args[0] = function() {}; return target.call(this, ...args);};}
  function DecodeBase64(string, times) {let StringDecoded = string;for (let i = 0; i < times; i++) {StringDecoded = atob(StringDecoded);}return StringDecoded;}
  function SubmitBp(selector, time = 1) {let elem = (typeof selector === 'string') ? bp(selector).closest('form') : selector; console.log(elem); setTimeout(() => {elem.submit();}, time * 1000);}
  function ReadCV(cname) {let name = cname + "=";let decodCV = decodeURIComponent(document.cookie);
    let cv = decodCV.split(';');for (var i = 0; i < cv.length; i++) {let c = cv[i]; while (c.charAt(0) == ' ') {c = c.substring(1);}
      if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}} return "";}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function SetCookie(name, value, days) {if (days) {var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toGMTString();} else {var expires = ""; document.cookie = name + "=" + value + expires + "; path=/";}}
  function DelCookie(name) {SetCookie(name, "", -1);}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const selectors = selector.split(', ');
    if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');
        events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true}); element.dispatchEvent(eventObject);});});}
  function Decrypter(string) {const shift = 13;let decipheredString = ''; for (let i = 0; i < string.length; i++) {let charCode = string.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {decipheredString += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);}
    else if (charCode >= 65 && charCode <= 90) {decipheredString += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);}else {decipheredString += string[i];}}return decipheredString;}
  function Decrypter2(string, Length = 5) {var decrypteds = '',base64 = atob(string),subs = base64.substring(0, Length),encrypted = base64.substring(Length);
    for (let i = 0; i < encrypted.length; i++) {let charCode = encrypted.charCodeAt(i),charCodeKey = subs.charCodeAt(i % subs.length),decrypted = charCode ^ charCodeKey;decrypteds += String.fromCharCode(decrypted);} return decrypteds;}
  function NoFocus() {window.mouseleave = true; window.onmouseover = true; document.hasFocus = function() {return true;}; Object.defineProperty(document, 'webkitVisibilityState', {get() {return 'visible';}});
    Object.defineProperty(document, 'visibilityState', {get() {return 'visible';}}); window.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true);
    window.addEventListener('focus', onfocus, true);document.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true); Object.defineProperty(document, 'hidden', {get() {return false;}});}
  function strBetween(s, front, back, trim = false) {if (trim) {s = s.replaceAll(' ', '');s = s.trim();s = s.replaceAll('\n', ' ');}
      return s.slice(s.indexOf(front) + front.length, s.indexOf(back, s.indexOf(front) + front.length));}
  function BypassedByBloggerPemula(re_domain, data, blog) {if (!re_domain.test(location.host)) return;
    if (typeof data === 'function') return data();if (Array.isArray(data)) data = { '/': data }; if (!(location.pathname in data)) return;const [key, value] = data[location.pathname];
    if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog); if (BpParams.has(key)) redirect(value + BpParams.get(key), blog);}
  function BloggerPemula(domains, data, url = '', blog = false, all = false) {if (!domainCheck(domains)) return;
    if (typeof data === 'string' && data.split(',').every(p => BpParams.has(p))) {const use = data.split(',').at(0);
    const def = all ? BpParams.getAll(use).find(u => new RegExp(domains).test(u)) : BpParams.get(use);
    redirect(url + def, blog);} else if (typeof data === 'object') {const o = data[location.pathname]; if (!o) return;BloggerPemula(domains, ...o);}}
  function BypassHD(selector, time) {if (elementExists('.g-recaptcha')) {let gc = setInterval(() => {if (window.grecaptcha.getResponse().length !== 0) {
    clearInterval(gc); SubmitBp('.g-recaptcha', 1);}}, 1000);} else if (elementExists('.h-captcha')) {let hc = setInterval(() => {if (window.hcaptcha.getResponse().length !== 0) {
    clearInterval(hc); SubmitBp('.h-captcha', 1);}}, 1000);} else if (elementExists('.cf-turnstile')) {let tc = setInterval(() => {if (window.turnstile.getResponse().length !== 0) {
    clearInterval(tc); SubmitBp('.cf-turnstile', 1);}}, 1000);} else if (elementExists('input[name=_iconcaptcha-token]')) {Captchacheck(selector);} else {SubmitBp(selector, time);}}
  function GetForm(FormName) {var forms = document.forms; for (var i = 0; i < forms.length; i++) {if (FormName === 'mdn') {var form = forms[i].innerHTML;
      if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {var bait = forms[i].action; if (/bypass.html|adblock.html/.test(bait)) continue; return forms[i];} else {return;}}}
  function Captchacheck(selector) {if (elementExists('.h-captcha') || elementExists('#captcha-hcaptcha')) {return window.hcaptcha.getResponse().length !== 0;
    } else if (elementExists('.cf-turnstile') || elementExists('#captcha-turnstile')) {return window.turnstile.getResponse().length !== 0;
    } else if (elementExists('.g-recaptcha') || elementExists('#captchaShortlink') || elementExists('#captcha_container') || elementExists('#captchaShortlinker') || elementExists('#captcha-recaptcha')) {return window.grecaptcha.getResponse().length !== 0;
    } else if (elementExists('#iconcaptcha')) {let b = setInterval(() => {let p = bp('.iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success'); if (p) {clearInterval(b); SubmitBp(selector, 1);}}, 1000);} else {return;}}
  function notify(txt, duration = cfg.get('SetDelay')) {const m = document.createElement('div'); m.style.padding = '1px'; m.style.zIndex = 99999999; m.style.position = 'fixed';
    m.style.width = `970px`; m.style.top = '275px'; m.style.left = `${innerWidth / 2 - 485}px`; m.style.font = 'normal bold 17px sans-serif'; m.style.backgroundColor = 'gold'; m.style.boxSizing = 'border-box';
    m.innerText = txt.replace('@', duration); document.documentElement.appendChild(m); const timerId = setInterval(() => {duration -= 1; if (duration <= 0) {clearInterval(timerId);} else {m.innerText = txt.replace('@', duration);}}, 1000);}
  function Listener(callback) {const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", function() { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function EnableRCF() {[].forEach.call(['contextmenu', 'visibilitychange', 'cut', 'paste', 'blur', 'mouseleave', 'keyup', 'drag', 'dragstart', 'hasFocus', 'focus', 'select', 'selectstart', 'webkitvisibilitychange', 'mozvisibilitychange'], function(event) {document.addEventListener(event, function(e) {e.stopPropagation();}, true);});}

  BloggerPemula('gocmod.com', 'urls', '');
  BloggerPemula('clink1.com', 'url,id', '');
  BloggerPemula('writedroid.in', 'token', '');
  BloggerPemula('web1s.com', 'token,url', '');
  BloggerPemula('modmania.eu.org', 'token', '');
  BlockRead('(4d-bl0ck3r|ad-blocker)', 'setTimeout');
  BloggerPemula('msmedia.in', 'id', 'https://srink.in/');
  BloggerPemula('yalifin.xyz', 'opp', 'https://cut.lc/');
  BloggerPemula('sahityt.com', 'token', 'https://vzu.us/');
  BloggerPemula('blitly.io|smartlink.vip', 'url,apikey', '');
  BloggerPemula('wpking.in', 'go', 'https://o.linkpio.com/');
  BloggerPemula('eda-ah.com', 'get1', 'https://liinkat.com/');
  BloggerPemula('m.newhit.me', 'link', 'https://link3s.net/');
  BloggerPemula('abhikr.in', 'post', 'https://linkvibe.xyz/');
  BloggerPemula('zoztm.com', 'link', 'https://shorterx.com/');
  BloggerPemula('go.qora.in', 'link', 'https://link.qora.in/');
  BloggerPemula('10short.vip', 'Short', 'https://10short.com/');
  BloggerPemula('finoxpert.com', 'link', 'https://lksfy.site/');
  BloggerPemula('rsrlink.in', 'link', 'https://go.rsrlink.in/');
  BloggerPemula('dailynew.online', 'go', 'https://sklinks.in/');
  BloggerPemula('strfree.xyz', 'go', 'https://yo.adlinku.com/');
  BloggerPemula('jazbaat.in', 'link', 'https://go.rplinks.in/');
  BloggerPemula('urotan.net', 'link', 'https://shortyget.com/');
  BloggerPemula('mrdoge.in', 'link', 'https://link.cash4.link/');
  BloggerPemula('autodime.com', 'go', 'https://go.linkrex.net/');
  BloggerPemula('quick91.com', 'grey', 'https://go.linkco.pro/');
  BloggerPemula('airlike.me', 'link', 'https://get.airlike.me/');
  BloggerPemula('techhadi.com', 'news', 'https://go.tplinks.in/');
  BloggerPemula('zubatecno.com', 'link', 'https://go.flyzu.icu/');
  //BloggerPemula('veganab.co', 'link', 'https://techy.veganab.co/');
  BloggerPemula('yosite.net', 'link', 'https://loans.yosite.net/');
  BloggerPemula('battlechamp.in', 'link', 'https://get.exurl.in/');
  BloggerPemula('adiskblog.in', 'link', 'https://go.pdiskpro.in/');
  BloggerPemula('cryptednews.space', 'post', 'https://slfly.net/');
  BloggerPemula('hiharshit.in', 'post', 'https://easytoclick.in/');
  BloggerPemula('indiansarkari.com', 'go', 'https://icashfly.com/');
  BloggerPemula('tanytech.com', 'link', 'https://go.hexlinks.xyz/');
  BloggerPemula('healthynepal.in', 'post', 'https://ez4short.xyz/');
  BloggerPemula('gktech.uk', 'adlinkfly', 'https://linkyearn.com/');
  BloggerPemula('vslinks.online', 'link', 'https://ad.vslinks.in/');
  BloggerPemula('factsdunya.com', 'go', 'https://driveupload.net/');
  BloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/');
  BloggerPemula('missreview.info', 'link', 'https://g.linkvor.pw/');
  BloggerPemula('recipejaano.com', 'link', 'https://ads.kbfly.in/');
  BloggerPemula('dilmibriva.store', 'post', 'https://cutplus.xyz/');
  BloggerPemula('10short.pro', 'get', 'https://10short.vip/?Short=');
  BloggerPemula('videolyrics.in', 'p', 'https://ser3.crazyblog.in/');
  BloggerPemula('blog.topfaucet.us', 'token', 'https://sl1.x10.mx/');
  BloggerPemula('housezquick.com', 'link', 'https://ad.ushort.xyz/');
  BloggerPemula('flashlinks.online', 'dk', 'https://flashlinks.in/');
  BloggerPemula('siteblog.in', 'link', 'https://go.droplink.co.in/');
  BloggerPemula('trendtrove.vip', 'post', 'https://tinylinker.pro/');
  BloggerPemula('shortsnob.in', 'token', 'https://short.earnmoj.in/');
  BloggerPemula('apna-blog.in', 'token', 'https://apnashortener.in/');
  BloggerPemula('ignitesmm.com', 'link', 'https://f.omnifly.in.net/');
  BloggerPemula('fileku.net', 'adlinkfly', 'https://get.fileku.net/');
  BloggerPemula('nisnisin.com', 'link', 'https://link.ezlinkad.com/');
  BloggerPemula('sapnogalpo.online', 'link', 'https://link2cash.in/');
  BloggerPemula('candleoflife.fun', 'token', 'https://shortsurl.pro/');
  BloggerPemula('povathemes.com|escobarvip.cf|golinki.com', 'url', '');
  BloggerPemula('upload.veganab.co', 'go', 'https://driveupload.net/');
  BloggerPemula('anonbar.com', 'link', 'https://go.moviepagol.my.id/');
  BloggerPemula('tamilhit.tech', 'link', 'https://get.tamilhit.tech/');
  BloggerPemula('suntechu.in', 'post', 'https://web.urllinkshort.in/');
  BloggerPemula('loan.techyinfo.in', 'open', 'https://go.linkpays.in/');
  BloggerPemula('cryptokaro.co.in', 'adlinkfly', 'https://tarabox.in/');
  BloggerPemula('foxbugg.com', 'adlinkfly', 'https://ads.foxbugg.com/');
  BloggerPemula('tremamnon.com', 'adlinkfly', 'https://dash-free.com/');
  BloggerPemula('market.finclub.in', 'link', 'https://go.tnshort.net/');
  BloggerPemula('bantenexis.com', 'link', 'https://link.youshort.net/');
  BloggerPemula('techkeshri.com', 'link', 'https://go.paisakamalo.in/');
  BloggerPemula('indirasari.com', 'link', 'https://link.paid4link.com/');
  BloggerPemula('wikitraveltips.com', 'link', 'https://adrinolinks.in/');
  BloggerPemula('smallinfo.in', 'link', 'https://filmypoints.in/?link=');
  BloggerPemula('pglink.online', 'adlinkfly', 'https://link.pglink.in/');
  BloggerPemula('mvplaylink.in.net', 'post', 'https://mplaylink.com/s/');
  BloggerPemula('ww1.linktrims.com', 'link', 'https://go.linktrims.com/');
  BloggerPemula('healthynepal.in', 'link', 'https://go.tgshortener.com/');
  BloggerPemula('missionhight.in', 'link', 'https://playdisk.url2go.in/');
  BloggerPemula('tech.techwhom.com', 'jeton', 'https://we.techwhom.com/');
  BloggerPemula('encurtaclik.com', 'link', 'https://go.encurtaclik.com/');
  BloggerPemula('appkamods.com', 'link', 'https://go.shorturllinks.com/');
  BloggerPemula('cybertechng.com', 'link', 'https://go.cybertechng.com/');
  BloggerPemula('conghuongtu.net', 'adlinkfly', 'https://bitlinks.site/');
  BloggerPemula('loan.filmypoints.in', 'link', 'https://link.e2share.in/');
  BloggerPemula('niinga.com', 'get', 'https://eigsense.eda-ah.com/?get1=');
  BloggerPemula('cinemapettai.in', 'post', 'https://getlink.sxslink.com/');
  BlockRead('(/adblock|/ad-now.php|/bypass|/detected.html)', 'setInterval');
  BloggerPemula('market.gorating.in', 'link', 'https://go.onepagelink.in/');
  BloggerPemula('blog.anywho-com.com', 'go', 'https://blog.shrinkme.link/');
  BloggerPemula('videoslyrics.com', 'postid', 'https://ser3.crazyblog.in/');
  BloggerPemula('earn.tensailab.com', 'adlinkfly', 'https://go.snaply.in/');
  BloggerPemula('postazap.com', 'link', 'https://encurtador.postazap.com/');
  BloggerPemula('mamahawa.com', 'get', 'https://forextrader.site/SkipLink/');
  BloggerPemula('prakasheditingtamizhan.com', 'link', 'https://kpslink.in/');
  BloggerPemula('mmdrive.xyz', 'link', 'https://techleets.xyz/no.php?link=');
  BloggerPemula('reminimod.co', 'land', 'https://insurance.techymedies.com/');
  BloggerPemula('keralalotteryresult.co', 'adlinkfly', 'https://skdlink.in/');
  BloggerPemula('tech.filmypoints.in', 'go', 'https://finance.smallinfo.in/');
  BloggerPemula('dpbossreal.com', 'adlinkfly', 'https://short.adslinko.com/');
  BloggerPemula('tbhlabsnews.com', 'link', 'https://getlink.tbhlabsnews.com/');
  BloggerPemula('interestingfactsare.com', 'link', 'https://m.urlbharat.xyz/');
  BloggerPemula('dealprice.co', 'adlinkfly', 'https://cryptorotator.website/');
  BloggerPemula('djnonstopmusic.in', 'link', 'https://gadgets.ishortify.com/');
  BloggerPemula('tech.filohappy.in', 'link', 'https://happyfiles.dtglinks.in/');
  BloggerPemula('vietnamtravelguide.top', 'post', 'https://bestshortlink.top/');
  BloggerPemula('earn.hostadviser.net', 'token', 'https://go.hostadviser.net/');
  BloggerPemula('viralsinfo.com', 'token', 'https://getslinks.online/download/');
  BloggerPemula('insuranceinfos.in', 'post', 'https://tech.smallinfo.in/Gadget/');
  BloggerPemula('www.filmypoints.in', 'post', 'https://tech.filmypoints.in/?go=');
  BloggerPemula('cafe.warrenrahul.in', 'adlinkfly', 'https://go.warrenrahul.in/');
  BloggerPemula('health.techyinfo.in', 'web', 'https://loan.techyinfo.in/?open=');
  BloggerPemula('truevpnlover.com', 'grey', 'https://quick91.com/insure.php?grey=');
  BloggerPemula('battleroyal.online', 'link', 'https://zubatecno.com/safe.php?link=');
  //BloggerPemula('highkeyfinance.com', 'landhere', 'https://insurance.techymedies.com/');
  BloggerPemula('apasih.my.id|healthydad.my.id', 'link', 'https://link.get4llink.com/');
  //BloggerPemula('financeyogi.net', 'link', 'https://market.finclub.in/safe2.php?link=');
  BloggerPemula('iphoto.site', 'post', 'https://vietnamtravelguide.top/token.php?post=');
  BloggerPemula('copy-paste-fonts.com', 'post', 'https://cryptednews.space/token.php?post=');
  BloggerPemula('techloadz.com|sportsmediaz.com', 'link', 'https://link.cloudshrinker.com//');
  BloggerPemula('(manga2day|gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com', 'link', '');
  BloggerPemula('(kienthucrangmieng|chinhnhacoban|tremamnon|coin-free).com|fanclup.info', 'wpsafelink', '');
  BypassedByBloggerPemula(/earnify.pro/, function() {RemoveRef('go.linksfly.link');});
  BypassedByBloggerPemula(/aprovax.com/, {'/': [RexBp, 'https://paylinnk.com/'],}, false);
  BypassedByBloggerPemula(/lootcash.vip/, {'/verify/': [RexBp, 'http://ads.lootcash.vip/'],}, false);
  BypassedByBloggerPemula(/mixrootmods.com/, function() {EnableRCF();window.checkStatus = window.off;});
  BypassedByBloggerPemula(/duplichecke.com/, {'/verify/': [RexBp, 'http://blog.dclink.site/'],}, false);
  BypassedByBloggerPemula(/dreamistore.com/, {'/verify/': [RexBp, 'http://final.eductin.com/'],}, false);
  BypassedByBloggerPemula(/mcafee-com.com/, {'/verify/': [RexBp, 'http://blog.shrinkme.link/'],}, false);
  BypassedByBloggerPemula(/techyadjectives.com/, {'/check/': [RexBp, 'https://demo.pvidly.in/'],}, false);
  BypassedByBloggerPemula(/cyberstockofficial.in/, {'/cook.php': [RexBp, 'http://cyberurl.in/'],}, false);
  BypassedByBloggerPemula(/mkvflix.org/, {'/verify/': [RexBp, 'http://go.superfastdownloads.net/'],}, false);
  BypassedByBloggerPemula(/link.bicolink.net/, function() {location = location.href.replace('link', 'go');});
  BypassedByBloggerPemula(/link.vipurl.in/, function() {location = location.href.replace('link', 'count');});
  BypassedByBloggerPemula(/techyinfo.in/, {'/verify/': [RexBp, 'http://health.techyinfo.in/?web='],}, false);
  BypassedByBloggerPemula(/infinityskull.com/, {'/safe.php': ['link', 'https://go.publicearn.com/'],}, false);
  BypassedByBloggerPemula(/sakarnewz.com/, {'/multi/': [RexBp, 'http://multiquality.xyz/download/'],}, false);
  BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');});
  BypassedByBloggerPemula(/short.dash-free.com/, function() {location = location.href.replace('short.', '');});
  BypassedByBloggerPemula(/speedynews.xyz/, {'/blog/verify/': [RexBp, 'https://links.speedynews.xyz/'],}, false);
  BypassedByBloggerPemula(/studyuo.com/, {'/pro2/verify/': [RexBp, 'https://speedynews.xyz/blog/verify/?'],}, false);
  BypassedByBloggerPemula(/go.link4rev.site|go.urlcash.site/, function() {location = location.href.replace('go.', '');});
  BypassedByBloggerPemula(/olhonagrana.com/, {'/verify/': [RexBp, 'http://paylinnk.com/'],'/': [RexBp, 'https://syflink.com/']}, false);
  BypassedByBloggerPemula(/dutchycorp.space/, function() {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  BypassedByBloggerPemula(/link.birdurls.com|link.owllink.net|link.illink.net/, function() {location = location.href.replace('link.', '');});
  BypassedByBloggerPemula(/vk.com/, function() {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));} else {}});
  BypassedByBloggerPemula(/(teachsansar|technicalatg|foodxor).com/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BypassedByBloggerPemula(/twitter.com/, function() {let twitter = location.href.includes('/safety') && BpParams.has('unsafe_link'); if (twitter) {location = decodeURIComponent(BpParams.get('unsafe_link'));}});
  BypassedByBloggerPemula(/tiktok.com/, function() {if (BpParams.has('aid') && BpParams.has('lang') && BpParams.has('scene') && BpParams.has('target')) {location = decodeURIComponent(BpParams.get('target'));} else {}});
  BypassedByBloggerPemula(/facebook.com/, function() {let fb = location.href.includes('/l.php') || location.href.includes('/flx/warn') && BpParams.has('u'); if (fb) {location = decodeURIComponent(BpParams.get('u'));}});
  BypassedByBloggerPemula(/ouo.io/, function() {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https://' + BpParams.getAll('s');} else if (BpParams.has('s')) {location = BpParams.getAll('s');}});
  BypassedByBloggerPemula(/linkbox.to/, function() {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {console.log(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);console.log(itemInfo); redirect(itemInfo.url, false);}});});
  BypassedByBloggerPemula(/(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/, function() {if (BpParams.has('i')) {let Decipher = DecodeBase64(BpParams.get('i'), 5); let dbq = Decrypter(Decipher).split('|')[0];redirect(dbq,false);} else {}});
  BypassedByBloggerPemula(/adbtc.top/, function() {let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}
      if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/youtube.com/, function() {if (location.href.includes('/shorts/') && cfg.get('YTShort')) {if (cfg.get('YTShort') == true) {location = location.href.replace('/shorts/', '/watch?v=');let Tubeshort = location.href;
    var observer = new MutationObserver(() => {if (location.href !== Tubeshort) {Tubeshort = location.href; if (location.href.includes('/shorts/')) location = location.href.replace('/shorts/', '/watch?v=');}});
    var short = {subtree: true,childList: true}; observer.observe(document, short);}} else {}});
  Object.defineProperty(HTMLFormElement.prototype, 'submit', { writable: false });
  Object.defineProperty(document, 'querySelector', { value: document.querySelector, configurable: false, writable: false });
  const sl = (h => {
    switch (h.host) {case 'multiup.org': if (h.href.includes('/download/')) return h.href.replace('download/', 'en/mirror/'); break;
      case 'modsfire.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://modsfire.com/d/' + RegExp.$1;} break;
      //case 'pixeldrain.com': if (h.href.includes('/u/')) return h.href.replace('u/', '/api/file/') + '?download'; break;
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');} break;
      case 'social-unlock.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://social-unlock.com/redirect/' + RegExp.$1;} break;
      //case 'work.ink': if (/^\/([^\/]+)/.test(h.pathname) && !location.href.includes('/token/') && !location.href.includes('?r=') && !location.href.includes('?ref=')) {return 'https://adbypass.org/bypass?bypass=' + encodeURIComponent(location.href);} break;
      case 'nft.blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://go.urlpay.in/' + h.searchParams.get('link');} break;
      case 'my.dropz.xyz':
        if (h.href.includes('/checkpoint') && location.search === '') {return 'https://my.dropz.xyz/checkpoint?redir=/site-friends';} break;
      case 'go.blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://go.urlblink.com/' + h.searchParams.get('link');} break;
      case 'patak.dropz.xyz':
        if (h.href.includes('/checkpoint') && location.search === '') {return 'https://patak.dropz.xyz/checkpoint?redir=/site-friends';} break;
      case 'blogyindia.com':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://link.blogyindia.com/' + h.searchParams.get('link');} break;
      case 'sub2unlock.com':
        if (/^\/([^\/]+)/.test(h.pathname) && !location.href.includes('/unlock')) {return 'https://sub2unlock.com/link/unlock/' + RegExp.$1;} break;
      case 'crypto.webseriesreel.in':
        if (h.pathname === '/safe.php' && h.searchParams.has('link')) {return 'https://nft.blogyindia.com/safe.php?link=' + h.searchParams.get('link');} break;
      case 'adbull.me': case 'uii.io': case 'shortano.link': case 'shortino.link': case 'clk.st': case 'clks.pro': case 'chainfo.xyz': case 'clicksfly.com':
      case 'dailytime.store': case 'cryptoflare.cc': case 'ez4short.com': case 'fc.lc': case 'cutp.in': case 'saly.io': case 'earnow.online': case 'exe.io':
      case 'gplinks.in': case 'linkjust.com': case 'sl.btc25.org': case 'linkfly.me': case 'earnify.pro': case 'linksfire.co': case 'adlink.click':
      case 'gigafly.me': case 'traffic1s.com': case 'link4rev.site': case 'linkrex.net': case 'opli.xyz': case 'www.clink2.com': case 'linksly.co':
      case 'shortyearn.com': case 'upshrink.com': case 'tr.link': case 'nanolinks.in': case 'megaurl.in': case 'adshort.co': case 'atglinks.comk':
      case 'shrinkforearn.in': case 'shorti.io': case 'try2link.com': case 'terafly.me': case 'www.wts.pw': case 'web1s.com': case 'rocklinks.net':
      case 'megafly.in': case 'smartlink.vip': case 'usalink.io': case 'birdurls.com': case 'adrinolinks.in': case '10short.com': case 'urlpay.in':
      case 'mdiskshortner.link': case 'cbshort.com': case 'besturl.link': case 'clk.sh': case 'droplink.co': case 'adpaylink.com': case 'botfly.me':
      case 'paid4link.com': case 'dash-free.com': case 'owllink.net': case 'cuty.io': case 'octolinkz.com': case 'doshrink.com': case 'cashando.me':
      case 'revly.click': case 'shorterall.com': case 'shrinkearn.com': case 'shrinkme.io': case 'shortox.com': case 'linksfly.link': case 'oii.io':
      case 'ay.live': case 'timeforearn.com': case 'urlstox.com': case 'lollty.com':var ApiandUrl = h.searchParams.has('api') && h.searchParams.has('url');
        if (ApiandUrl && h.href.includes('solarchaine.com') || h.href.includes('hr.vikashmewada.com') || h.href.includes('sclick.crazyblog.in') || h.href.includes('ser7.crazyblog.in')) { return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('freeltc.top') || h.href.includes('freecrypto.top') || h.href.includes('insfly.pw') || h.href.includes('Insfly.pw') || h.href.includes('mdiskshortner.link') || h.href.includes('clockads.in') || h.href.includes('exashorts.fun') || h.href.includes('cosmic-matter.pw')) {} else if (ApiandUrl && h.href.includes('terafly.me')) {
          return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('adnews.me')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/adnews.me/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('kyshort.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/kyshort.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('eazyurl.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/eazyurl.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('linksfly.top')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/linksfly.top/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('bestlink.pro')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/bestlink.pro/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('playstore.pw')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/playstore.pw/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('sigmalinks.in')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/sigmalinks.in/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('r1.foxylinks.site')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/r1.foxylinks.site/.test(u))[0].replace('r1', 'link');
        } else if (ApiandUrl && h.href.includes('#')) {return h.searchParams.getAll('url') + window.location.hash;
        } else if (h.searchParams.has('api') && h.searchParams.has('url')) {return h.searchParams.getAll('url');} break; default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (cfg.get('BlockFC') == true) {NoFocus();} else {}
  if (cfg.get('RightFC') == true) {EnableRCF();} else {}
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    RemoveBp('nguyenvanbao.com|nghiencar.com', '.content-area,.site-content');
    RemoveBp('fc-lc.xyz|(webhostingpost|tophostingapp|digitalmarktrend).com', '#iframe_id,.banner');
    RemoveBp('mohtawaa.com', 'div.form-group > div,.col-sm-12.col-lg-3.col,li,h3,h4,p,.col-sm-12.col-lg-8.col,h2');
    RemoveBp('btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com', "button[onclick^='window.location']");
    RemoveBp('mdn.lol|awgrow.com|fadedfeet.com|kenzo-flowertag.com|homeculina.com|ineedskin.com|worldtanr.xyz|lawyex.co|yexolo.net', "form input[value^='Continue'],form[id] div[style^='margin:']");
    RemoveBp('vailonxx.com|fun88.bio', '.page-header,div.col-xl-3.col-lg-3.col-md-4.col-6,.hero-text,#wrapper-navbar,.happy-section,#wrapper-footer,.col-12.d-md-block.d-none,.col-12.d-md-none.d-block,.modal-dialog');
    RemoveBp('(aduzz|admediaflex|cryptfaucet|phimne|cdrab|tinybc|tinycmd).com|(bit4me|ecq|sportweb|mgame).info|(wpcheap|offerinfo).net|quanngon.org|datacheap.io', '.a,.a1,.a2,.a3,.a6,div.floating-banner,div.adslr.text-center,lottie-player,.adb'); let cth = bp('#wpsafegenerate > script:nth-child(4)');
    let Numcode = bp('input.captcha_code');let DigitNum; function getLeft(d) {return parseInt(d.style.paddingLeft);} if (Numcode) {DigitNum = Numcode.parentElement.previousElementSibling.children[0].children; Numcode.value = [].slice.call(DigitNum).sort(function(d1, d2) {return getLeft(d1) - getLeft(d2);}).map(function(d) {return d.textContent;}).join('');}
    let List = ['lopteapi.com', '1link.vip', 'blitly.io', 'web1s.com', 'megalink.pro'];let List1 = ['ay.live', 'aylink.co', 'gitlink.pro']; let $ = window.jQuery; let respect = ''; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
    if (List.includes(location.host)) {ClickIfExists('a.btn.btn-success.btn-lg.get-link', 3, 'setInterval');
    } else if (List1.includes(location.host)) { var form = $('form[id=go-link]');$.ajax({type: 'POST', async: true, url: form.attr('action'),data: form.serialize(),dataType: 'json',
        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {}
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
      switch (h.host) {
        case 'okrzone.com': if (b) {meta('https://gtlink.co/' + RegExp.$1);} break;
        case 'mytop5.club': if (b) {meta('https://technemo.xyz/blog/' + RegExp.$1);} break;
        case 'technicalatg.com': if (b) {meta('https://atglinks.com/' + RegExp.$1);} break;
        case 'sahlmarketing.net': if (b) {meta('https://earnify.pro/' + RegExp.$1);} break;
        case 'ledifha.com': if (b) {meta('https://process.ledifha.com/' + RegExp.$1);} break;
        case 'adybrands.in': if (b) {meta('https://mytop5.club/verify/?' + RegExp.$1);} break;
        case 'foodupe.com': if (b) {meta('https://blog.filepresident.com/' + RegExp.$1);} break;
        case 'blog.coin2pay.xyz': if (b) {meta('https://techyuth.xyz/blog/' + RegExp.$1);} break;
        case 'gamerfang.in': if (b) {meta('https://faux.gamerfang.in/tech/' + RegExp.$1);} break;
        case 'videolyrics.in': if (b) {meta('https://cryptolink.trxking.xyz/' + RegExp.$1);} break;
        case 'coin2pay.xyz': if (b) {meta('https://blog.coin2pay.xyz/verify/?' + RegExp.$1);} break;
        case 'blog.mphealth.online': if (b) {meta('https://techyuth.xyz/blog/' + RegExp.$1);} break;
        case 'techrayzer.com': if (b) {meta('https://techrayzer.com/insurance/' + RegExp.$1);} break;
        case 'economiarelevante.com.br': if (b) {meta('https://shrinkgold.com/' + RegExp.$1);} break;
        case 'mphealth.online': if (b) {meta('https://blog.mphealth.online/verify/?' + RegExp.$1);} break;
        case 'shrs.link': case 'shareus.io':
          if (/^\/old\/([^\/]+)/.test(h.pathname)) {return 'https://jobform.in/?link=' + RegExp.$1;} break;
        case 'www.gifans.com':
          if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;} break;
        case 'zonearn.biz':
          if (/^\/(.+)/.test(h.pathname) && h.searchParams.has('tok')) {return h.searchParams.get('tok');} break;
        case 'nulledsafe.com':
          if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://golink.nulledsafe.com/' + RegExp.$1;} break;
        case 'froggyreviews.com':
          if (h.searchParams.has('mflink')) {meta('https://froggyreviews.com/go/' + h.searchParams.get('mflink'));} break;
        case 'techmody.io':
          if (h.pathname === '/' && h.searchParams.has('check')) {meta(decodeURIComponent(h.searchParams.get('check')));} break;
        case 'slink.bid':
          if (h.pathname === '/' || h.pathname === '/go/' && h.searchParams.has('go')) {meta(atob(h.searchParams.get('go')));} break;
        case 'www.pythondunyasi.com':
          if (h.pathname === '/p/blog-page_22.html' && h.searchParams.has('url')) {return h.searchParams.get('url').substring(1);} break;
        case 'free4u.nurul-huda.or.id': case 'rotator.nurul-huda.sch.id': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {
          result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));
          result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;
        case 'jrlinks.in':
          if (h.pathname === '/safe2.php' && h.searchParams.has('link')) {meta('https://internet.webhostingtips.club/' + h.searchParams.get('link'));} break;
        case 'kiiw.icu':
          if (h.pathname === '/check.php' && h.searchParams.has('alias') && h.searchParams.has('wis') && h.searchParams.has('siw')) {
            return 'https://kiiw.icu/' + h.searchParams.get('alias') + '?wis=' + h.searchParams.get('wis') + '&siw=' + h.searchParams.get('siw');} break;
        default: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Please Wait in @ Seconds , Don't Try to Remove/Replace My Blogs if You Want My Script to be Updated Regularly , Thanks`);}
      setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    // My Script will automatically download from the site below , Enable it from the Settings
    if (cfg.get('AutoDL') == true) {
    BypassedByBloggerPemula(/upload.ee/, function() {ClickIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/appdrive\.*/, function() {ClickIfExists('#drc', 2);});
    BypassedByBloggerPemula(/dddrive.me/, function() {ClickIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/uppit.com/, function() {ClickIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, function() {ClickIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/gofile.io/, function() {waitForElm('a.me-1', gfBtn => gfBtn.click());});
    BypassedByBloggerPemula(/karanpc.com/, function() {SubmitIfExists('#downloadButton > form', 2);});
    BypassedByBloggerPemula(/file-upload.net/, function() {ClickIfExists('#downbild.g-recaptcha', 2);});
    BypassedByBloggerPemula(/userscloud.com|dosya.co/, function() {ClickIfExists('#btn_download', 2);});
    BypassedByBloggerPemula(/hexupload.net/, function() {ClickIfExists('.btn-success.btn-lg.btn', 1);});
    BypassedByBloggerPemula(/rapidgator.net/, function() {ClickIfExists('.btn-free.act-link.link', 2);});
    BypassedByBloggerPemula(/dbree.me/, function() {ClickIfExists('.center-block.btn-default.btn', 2);});
    BypassedByBloggerPemula(/megaupto.com/, function() {ClickIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/dataupload.net/, async function() {await sleep(5000);ReadytoClick('.downloadbtn');});
    BypassedByBloggerPemula(/douploads.net/, function() {ClickIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/linkerload.com/, function() {ClickIfExists("#download form input[id='button1']", 2);});
    BypassedByBloggerPemula(/filemoon.sx/, () => waitForElm('div.download2 a.button', fm => redirect(fm.href, false)));
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/files.fm/, () => waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click()));
    BypassedByBloggerPemula(/megaup.net/, function() {waitForElm('a.btn.btn-default', muBtn => muBtn.click());ClickIfExists('#btndownload', 7);});
    BypassedByBloggerPemula(/4fnet.org/, function() {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, function() {if (elementExists('#divdownload')) {let oxy = bp('.ocdsf233').getAttribute('data-source_url');redirect(oxy, false);}});
    BypassedByBloggerPemula(/gdtot\.*/, function() {let gdt = setInterval(() => {if (Captchacheck()) {clearInterval(gdt);SubmitIfExists("form[action='/ondl']");}}, 1 * 1000);
      if (location.href.includes('/ondl')) {waitForElm('#dirdown', gdt2 => redirect(strBetween(gdt2.onclick.toString(), `myDl('`, `')`),false));}});
    BypassedByBloggerPemula(/mp4upload.com/, function() {
      ClickIfExists('#todl', 2);SubmitIfExists("form[name='F1']", 1);});
    BypassedByBloggerPemula(/drop.download/, function() {
      ClickIfExists('#method_free', 2);ClickIfExists('.btn-download', 2);});
    BypassedByBloggerPemula(/workupload.com/, function() {
      if (elementExists('#download')) {ClickIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, function() {
      ClickIfExists('.btn-dow.btn', 2);SubmitIfExists("form[name='F1']", 1);});
    BypassedByBloggerPemula(/send.cm/, function() {
      if (elementExists('#fileinfo')) {ClickIfExists('#downloadbtn', 1);} else {}});
    BypassedByBloggerPemula(/racaty.io/, function() {
      if (elementExists('#getExtoken')) {ClickIfExists('#downloadbtn', 1);} else {}});
    BypassedByBloggerPemula(/racedepartment.com/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.button--cta', 2);});
    BypassedByBloggerPemula(/mega4up.org/, function() {
      ClickIfExists('input.btn.btn-info.btn-sm', 2);ClickIfExists('.btn-dark.btn', 2);});
    BypassedByBloggerPemula(/docs.google.com/, function() {
      if (elementExists('#uc-dl-icon')) {SubmitIfExists('#downloadForm', 1);} else {}});
    BypassedByBloggerPemula(/uploadhaven.com/, function() {
      ClickIfExists('.alert > a:nth-child(1)', 2);SubmitIfExists('#form-download', 1);});
    BypassedByBloggerPemula(/novafile.org/, function() {let nf = setInterval(() => {
        if (Captchacheck()) {clearInterval(nf);ClickIfExists('.xbtn-green');}}, 1 * 1000);
      ClickIfExists('#btnddl', 90);ClickIfExists('a.btn.btn-green', 1);});
    BypassedByBloggerPemula(/k2s.cc/, function() {ClickIfExists('.button-download-slow', 2);
      waitForElm('a.link-to-file', k2s => redirect(k2s.href, false));});
    BypassedByBloggerPemula(/ac.totsugeki.com/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/mega4upload.com/, function() {
      let mu = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('.btn-sm.btn-info.btn', 1);ClickIfExists('.btn-dark.btn-sm.btn', 1);});
    BypassedByBloggerPemula(/uploady.io/, function() {
      let udy = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('.fa-turtle.fas', 2);ClickIfExists('.mb-4.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/up-load.io/, function() {ClickIfExists("input[name='method_free']", 2);
      ClickIfExists('.btn-dow.btn', 1);let upi = setInterval(() => {
        if (Captchacheck()) {clearInterval(upi);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/anonym.ninja/, function() {
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];
      redirect(`https://anonym.ninja/download/file/request/${fd}`);} else {}});
    BypassedByBloggerPemula(/vosan.co/, function() {bp('.elementor-size-lg').removeAttribute('target');
      ClickIfExists('.elementor-size-lg', 2);ClickIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/apkmody.io/, function() {
      if (elementExists('div.wp-block-buttons > div')) {location = location.href + '/download/mod';}});
    BypassedByBloggerPemula(/mdfx9dc8n.net/, () => {ClickIfExists('.download-btn', 2);
      setTimeout(() => {let md = bp('.download-btn.btn3.btn');redirect(md.href, false);}, 6 * 1000);});
    BypassedByBloggerPemula(/uploadrar.com|uptomega.me/, function() {ClickIfExists('.mngez-free-download', 2);
      ClickIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/takefile.link/, function() {
      if (elementExists('#F1')) {SubmitIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 1);} else {}});
    BypassedByBloggerPemula(/chedrives.com/, function() {ClickIfExists('.downloadbtn', 3, 'setInterval');
      ClickIfExists('.mngez-free-download', 2);waitForElm('span#direct_link a', cd => redirect(cd.href, false));});
    BypassedByBloggerPemula(/appsblaze.com/, function() {
      if (elementExists('#box-0')) {waitForElm("input[name='slink']", abl => redirect(abl.href, false));} else {}});
    BypassedByBloggerPemula(/modcombo.com/, function() {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        ClickIfExists('a.btn.btn-submit', 6);} else {ClickIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/userupload.net/, function() {
      let upl = setInterval(() => {if (Captchacheck()) {clearInterval(upl);ClickIfExists('#downloadbtn');}}, 1 * 1000);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', upl2 => redirect(upl2.href, false));});
    BypassedByBloggerPemula(/1fichier.com/, function() {
      if (elementExists('#pass')) {} else {ClickIfExists('.btn-orange.btn-general.ok', 1);SubmitIfExists('.alc', 1);}});
    BypassedByBloggerPemula(/upload-4ever.com|up-4ever.net/, function() {
      ClickIfExists("input[name='method_free']", 2);ClickIfExists('#downLoadLinkButton', 5);
      let up4 = setInterval(() => {if (Captchacheck()) {clearInterval(up4);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/fileresources.net/, function() {
      if (elementExists('.download-timer')) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));} else {}});
    BypassedByBloggerPemula(/3upload.com/, function() {ClickIfExists('.btn-info.btn', 2);
      let plc = setInterval(() => {if (Captchacheck()) {clearInterval(plc);ClickIfExists('#downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/freepreset.net/, function() {
      if (elementExists('#button_download')) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));} else {}});
    BypassedByBloggerPemula(/doodrive.com/, function() {ClickIfExists('.tm-button-download.uk-button-primary.uk-button', 3);
      waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href, false));});
    BypassedByBloggerPemula(/gocmod.com/, function() {
      if (elementExists('.view-app')) {bp('#no-link').removeAttribute('target');ClickIfExists('.download-line-title', 2);}});
    BypassedByBloggerPemula(/dailyuploads.net/, function() {let du = setInterval(() => {
        if (Captchacheck()) {clearInterval(du);ClickIfExists('#downloadBtnClickOrignal');}}, 500);ClickIfExists('.inner > a', 2);});
    BypassedByBloggerPemula(/9xupload.asia/, function() {SubmitIfExists("form[name='F1']", 1);
      ClickIfExists('#container > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/mediafire.com/, function() {var bass;var md = function closeWindows() {window.close();clearInterval(bass);};
      var mf = bp('.download_link .input').getAttribute('href');console.log(mf);location.replace(mf);bass = setInterval(md, 1000 * 5);});
    BypassedByBloggerPemula(/qiwi.gg/, function() {if (elementExists("div [class^='page_DownloadPage']")) {
      ClickIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
        let qiwi = bp("a[class^='DownloadButton_DownloadButton']"); setTimeout(() => {redirect(qiwi.href, false);}, 3 * 1000);} else {}});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, function() {
      let ud = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);ClickIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/sharemods.com/, function() {SubmitIfExists('#dForm', 2);
      if (elementExists('.download-file-holder')) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href, false));} else {}});
    BypassedByBloggerPemula(/mexa.sh/, function() {parent.open = BpBlock();ClickIfExists('#Downloadfre', 2);ClickIfExists('#direct_link', 2);
      let mx = setInterval(() => {if (Captchacheck()) {clearInterval(mx);ClickIfExists('.downloadbtn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/(kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*/, function() {
      waitForElm('.bg-gb.dwto.sdw', kmBtn => kmBtn.click());waitForElm('a.sdw.dwto.bg-gb', kmk => redirect(kmk.href, false));});
    BypassedByBloggerPemula(/pdfcoffee.com/, function() {ClickIfExists('.btn-block.btn-success.btn', 2);
      let pdf = setInterval(() => {if (Captchacheck()) {clearInterval(pdf);ClickIfExists('.my-2.btn-block.btn-primary.btn-lg.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/adoc.pub/, function() {ClickIfExists('.btn-block.btn-success.btn', 2);
      let adp = setInterval(() => {if (Captchacheck()) {clearInterval(adp);ClickIfExists('.mt-15.btn-block.btn-success.btn-lg.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/clickndownload.org|clicknupload\.*/, function() {if (elementExists('.download')) {ClickIfExists('span.downloadbtn', 10);
      ClickIfExists('#method_free', 2);waitForElm('a.downloadbtn', cnu => redirect(cnu.href, false));}});
    BypassedByBloggerPemula(/leechpub.com/, function() {
      if (elementExists('.text-center.py-6')) {waitForElm('a.btn.btn-lg.btn-success.mb-1.px-6.lh-10', lpub => redirect(lpub.href, false));} else {}});
    BypassedByBloggerPemula(/uploadev.org/, function() {let ude = setInterval(function() {if (Captchacheck()) {ClickIfExists('#downloadbtn');}}, 500);
      ClickIfExists('#dspeed > input:nth-child(3)', 1);ClickIfExists('.directl', 1);});
    BypassedByBloggerPemula(/rawlazy.si/, function() {
      if (elementExists('#captcha_form')) {ClickIfExists('.go-to-captcha-form', 2);} else {waitForElm('.color-btn', rlz => redirect(rlz.href, false));}});
    BypassedByBloggerPemula(/modsbase.com/, function() {
      if (elementExists('.file-panel')) {ClickIfExists('.download-file-btn', 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));} else {}});
    BypassedByBloggerPemula(/dropgalaxy.com/, function() {ClickIfExists("button[id^='method_fre']", 2);
      ClickIfExists("button[name='fs_download_file']", 3, 'setInterval');waitForElm('a.btn.btn-block.btn-lg.btn-primary', dg => redirect(dg.href, false));});
    BypassedByBloggerPemula(/file-upload.com|file-upload.org/, function() {ClickIfExists('.mnbt1.btn-primary.btn-xs.btn', 2);ClickIfExists('#download-btn', 2);
      let fu = setInterval(function() {if (Captchacheck()) {clearInterval(fu);ClickIfExists('#downloadbtn');}}, 500);});
    BypassedByBloggerPemula(/hitfile.net/, function() {let hf = setInterval(() => {if (Captchacheck()) {clearInterval(hf);ClickIfExists('#submit');}}, 1 * 1000);
      waitForElm('a.btn-grey.nopay-btn', hfl => redirect(hfl.href, false));waitForElm('#popunder2', hfl2 => redirect(hfl2.href, false));});
    BypassedByBloggerPemula(/oydisk.com/, function() {ClickIfExists('.free-element', 2); waitForElm('a.btn.btn-success.w-100.py-3', od => redirect(od.href, false));
      let oyd = setInterval(() => {if (Captchacheck()) {clearInterval(oyd);ClickIfExists('button.btn.btn-sm.btn-primary.text-center');}}, 1 * 1000);});
    BypassedByBloggerPemula(/filedm.com/, function() {
      if (elementExists('#dlbutton')) {waitForElm('#dlbutton', fdm => redirect('http://cdn.directfiledl.com/getfile?id=' + fdm.href.split('_')[1], false));} else {}});
    BypassedByBloggerPemula(/gogodl.com/, () => {waitForElm('a.crumina-button.button--green.button--bordered.button--m.w-100', godl => redirect(godl.href, false));
      ClickIfExists('.w-100.button--m.button--bordered.button--green.crumina-button', 5, 'setInterval');
      let gogo = setInterval(() => {if (Captchacheck()) {clearInterval(gogo);ClickIfExists('.w50.button--m.button--bordered.button--green.crumina-button');}}, 1 * 1000);});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (elementExists('#turbo-table')) {let tb = bp('#nopay-btn').href;redirect(tb, false);}
      let tbb = setInterval(() => {if (Captchacheck()) {clearInterval(tbb);ClickIfExists('#submit');}}, 500); waitForElm('#free-download-file-link', tur => redirect(tur.href, false));});
    BypassedByBloggerPemula(/drive.google.com/, function() {var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.usercontent.google.com/download?id=${dg}&export=download`, false).replace('<br />', '');
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {SubmitIfExists('#download-form', 1);} else {}});
    BypassedByBloggerPemula(/4shared.com/, function() {if (elementExists('.d3topTitle')) {
        $('.premium').text('IMPORTANT TRICKS By BloggerPemula : Updated Feb 2023, Look like now not working ,so Sorry at This Time i Dont have Idea to fix it . Regards...');}
      ClickIfExists('.jsDownloadButton', 2);if (elementExists('.freeDownloadButton')) {SubmitIfExists("form[name^='redirectToD3Form']", 3);}});
    } else {} // Does Nothing if You Not Tick Auto Download From Menu Settings
    // End of Auto Download , Leave Good Feedback if Your Favorite Sites Not yet Supported or Error on Downloading Process

    BypassedByBloggerPemula(/1ink.cc/, function() {ClickIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/keeplinks.org/, function() {ClickIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/1short.io/, function() {SubmitIfExists('#countDownForm', 7);});
    BypassedByBloggerPemula(/earnlink.io/, function() {ClickIfExists('.btn-secondary', 3);});
    BypassedByBloggerPemula(/mkomsel.com/, function() {ClickIfExists('#downloadfile', 12);});
    BypassedByBloggerPemula(/onimports.com.br/, function() {ClickIfExists('#finalLink', 2);});
    BypassedByBloggerPemula(/1shortlink.com/, function() {ClickIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/rapidshort.lat/, function() {SubmitIfExists('#form-continue', 2);});
    BypassedByBloggerPemula(/jameeltips.us/, function() {ClickIfExists('#continue_button_1', 1);});
    BypassedByBloggerPemula(/post.copydev.com/, function() {ClickIfExists('.btn-success.btn', 6);});
    BypassedByBloggerPemula(/linegee.net/, function() {ClickIfExists('.btn-xs.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/pro.sh/, function() {ClickIfExists('.btn-secondary', 3, 'setInterval');});
    BypassedByBloggerPemula(/proappapk.com|meclipstudy.in/, function() {ClickIfExists('#gotolink', 5);});
    BypassedByBloggerPemula(/wrbloggers.com/, function() {ClickIfExists('a#nextpagelink button.btn', 5);});
    BypassedByBloggerPemula(/1bitspace.com/, function() {ClickIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/lets.5get.net/, function() {ClickIfExists('.jump_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/cshort.org/, function() {ClickIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/linkpay.cc/, function() {parent.open = BpBlock(); SubmitIfExists('#link-view', 1);});
    BypassedByBloggerPemula(/cooklike.info|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false);
    BypassedByBloggerPemula(/delishwell.com|artiskini.com/, {'/': ['link', 'https://link.paid4link.net/'],}, false);
    BypassedByBloggerPemula(/kisalt.digital/, function() {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/bildirim.in|bildirim.eu|bildirim.link/, function() {ClickIfExists('#btnPermission', 1);});
    BypassedByBloggerPemula(/enlacito.com/, function() {setTimeout(() => {redirect(window.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/webhostingtips.club/, {'/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/render-state.to/, function() {if (BpParams.has('link')) {meta(atob(BpParams.get('link')));}});
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/shareus.io/, function() {if (BpParams.has('sid')) {ReadytoClick('button.MuiButtonBase-root', 2);}});
    BypassedByBloggerPemula(/adtival.network/, function() {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/dilink.net/, function() {if (typeof(window.url_done) !== 'string') return; redirect(window.url_done);});
    BypassedByBloggerPemula(/shortener.goldcontent.site/, function() {if (BpParams.has('dest')) {meta(atob(BpParams.get('dest')));}});
    BypassedByBloggerPemula(/(cutnet|cutsy|cutlink).net|(cutty|exego).app/, function(){ClickIfExists('#submit-button', 5, 'setInterval');});
    BypassedByBloggerPemula(/ontechhindi.com/, function() {EnableRCF();waitForElm('#rtg-generate21 > a', oth => redirect(oth.href, false));});
    BypassedByBloggerPemula(/sfl.gl/, function() {if (location.href.includes('/ready') && BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online/, function() {ClickIfExists('#mdt', 3);});
    BypassedByBloggerPemula(/gameblog.in/, function() {EnableRCF();SubmitBp('input[type=hidden]', 3);ClickIfExists("div[id^=wpsafe-link] > a", 4);});
    BypassedByBloggerPemula(/sharetext.me/, function() {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/btcsatoshi.net/, async function() {EnableRCF();window.check2();window.check3();ClickIfExists('button.btn.btn-primary.btn-lg');});
    BypassedByBloggerPemula(/comohoy.com/, function() {if (location.href.includes('/grab/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/apkw.ru/, function() {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw),false);}});
    BypassedByBloggerPemula(/cryptomonitor.in|2the.space|imbb.online/, function() {EnableRCF();SubmitIfExists("form[name='dsb']", 3);ClickIfExists('#wpsafe-link > a', 4);});
    BypassedByBloggerPemula(/(newsbawa|utkarshonlinetest).com/, function() {ClickIfExists('#citr-click', 2);ClickIfExists('#citr-click-f', 3);ClickIfExists('#GetLink', 4);});
    BypassedByBloggerPemula(/programasvirtualespc.net/, function() {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);} else {}});
    BypassedByBloggerPemula(/(blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro/, function() {if (BpParams.has('r')) {meta(atob(BpParams.get('r')));}});
    BypassedByBloggerPemula(/(tinycmd|tinybc).com/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `handleClick('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|expertvn.com|aztravels.net/, function() {ClickIfExists('#yuidea', 2);ClickIfExists('#monetiza', 2);ClickIfExists('#btn6', 3);});
    BypassedByBloggerPemula(/(bitzite|neverdims).com/, function() {EnableRCF();let bitzite = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(bitzite.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/hostratgeber.de|techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com|dailytech-news.eu|moonboom.net/, function() {let hostrat = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(hostrat.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/coingraph.us|trendzilla.it|horoscop.info|(infonerd|writeprofit).org/, function() {let Alcatraz = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Alcatraz.value)).linkk,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/(aduzz|cryptfaucet).com|(bitcrypto|bit4me).info|offerinfo.net|deltabtc.xyz/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/nullscript.info|freebinance.top/, function() {waitForElm('div#wpsafe-link > a', function(element) {const regex = /redirect=(.*)',/;const m = regex.exec(element.onclick.toString())[1];location.href = JSON.parse(atob(m)).safelink;});});
    BypassedByBloggerPemula(/(10short|lollty).pro|mamahawa.com|10short.vip/, function() {ReadytoClick('center > .btn-success.btn', 3);waitForElm('a#makingdifferenttimer', st1 => redirect(st1.href, false));waitForElm('a#proceed', st2 => redirect(st2.href, false));});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula(/bitcotasks.com/, function() {if (location.href.includes('/shortlink/')) {window.urlPattern = false;let bct = setInterval(() => {if (Checkvisibility(bp('.captcha-success.captcha-theme-light.captcha-holder'))) {clearInterval(bct); window.continueClicked();}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/(netflixrelease|mangareleasedate|freemodapp|cryptoprolife|diethim|zutiza|hitjankari|phixshop|mp4news|trancebazar|taazaalerts|mazheshetkari|uskloans).com|(rontymobile|myfirstname|djrajurjm|ignoupur).in|mdsuuniversity.org|odishadjs.link/, function() {ClickIfExists('#VerifyBtn', 3);ClickIfExists('#NextBtn', 5, 'setInterval');});
    BypassedByBloggerPemula(/(crypto2u|bestcoinsites).xyz/, function() {if (/^\/shortlink\/([^\/]+)/.test(location.pathname)) {waitForElm('a#btn.btn.btn-success', c2u => redirect(c2u.href, false));} else if (elementExists('.shadow.card')) {waitForElm('a.btn.btn-lg.btn-success.px-4', c2u2 => redirect(c2u2.href, false));}});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista).com/, () => {ClickIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){ClickIfExists('#tp-snp2.tp-blue.tp-btn', 2);ClickIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/yalifin.xyz/, function() {SubmitIfExists('#molien', 2);ClickIfExists('.btn-success.btn', 3);});
    BypassedByBloggerPemula(/largestpanel.in|earnme.club|usanewstoday.club/, function() {ClickIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/paste1s.com|note1s.com/, function() {ClickIfExists('.btn-lg.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/terabox.fun/, async function() {await sleep(3000);ReadytoClick('.active.btn');});
    BypassedByBloggerPemula(/ayelads.com/, function() {
      ClickIfExists('.btn-bl.btn-primary.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/karyawan.co.id/, function() {
      ClickIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/icerik.site/, function() {
      ClickIfExists('#csubmit', 2);ClickIfExists('#get_link_btn', 2);});
    BypassedByBloggerPemula(/clink1.com/, function() {
      waitForElm('span#compteur > b > a', clin => redirect(clin.href));});
    BypassedByBloggerPemula(/ponselharian.com/, function() {
      if (elementExists('#link-view')) {window.scrollTo(0, 9999);}});
    BypassedByBloggerPemula(/tonanmedia.my.id/, function() {
      ClickIfExists('#idnGetLink', 2);ClickIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/assettoworld.com/, function() {
      ClickIfExists('.text-capitalize.btn-outline-success.btn', 3);});
    BypassedByBloggerPemula(/adfoc.us/, function() {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, function() {
      SubmitIfExists('#yuidea', 2);ClickIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/oii.io/, function() {parent.open = BpBlock();
      ClickIfExists('button.g-recaptcha.btn.btn-primary', 2);});
    BypassedByBloggerPemula(/cryptonetos.ru/, function() {
      ClickIfExists('#butt', 2, 'setInterval');ClickIfExists('#someId', 5);});
    BypassedByBloggerPemula(/cpu-miner.leaks.work/, function() {
      ClickIfExists('.xbtt.btn-primary.btn-lg.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/mrproblogger.com|themezon.net/, function() {
      waitForElm('#btn2.tp-btn', mrBp => mrBp.click());
      waitForElm('div.center-link-items a', thz => redirect(thz.href, false));});
    BypassedByBloggerPemula(/forex-golds.com|forex-trnd.com/, function() {
      parent.open = BpBlock();ClickIfExists('.g-recaptcha', 2);});
    BypassedByBloggerPemula(/1link.club/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('#download', 1);});
    BypassedByBloggerPemula(/1mlink.vip/, function() {
      ClickIfExists('#invisibleCaptchaShortlink', 2);
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 4);});
    BypassedByBloggerPemula(/zegtrends.com/, function() {SubmitIfExists('#cln', 5);
      ClickIfExists('#bt1', 5);ClickIfExists('#go', 5);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech/, function() {
      waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/bcvc.xyz|bcvc.ink/, function() {
      ClickIfExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/proviralhost.com/, function() {
      ClickIfExists('#wait1button', 3);ClickIfExists('#wait2button', 5, 'setInterval');});
    BypassedByBloggerPemula(/bitcoinfaucet.fun|freebitcoin.win/, function() {
      ClickIfExists('#continue2', 3, 'setInterval');ClickIfExists('#continue', 4, 'setInterval');});
    BypassedByBloggerPemula(/bestadvise4u.com/, function() {ClickIfExists('.rd_btn', 1);
      waitForElm('.rd_btn', ba4 => redirect(ba4.href, false));});
    BypassedByBloggerPemula(/altblogger.net/, function() {
      ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/linkspy.cc/, function() {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(webhostingpost|tophostingapp|digitalmarktrend).com/, function() {
      SubmitIfExists('form.text-center', 3);ClickIfExists('#surl', 5, 'setInterval');});
    BypassedByBloggerPemula(/techmny.com|unblockedgames.world/, function() {SubmitIfExists('#landing', 2);
      ClickIfExists('#verify_button', 2);ClickIfExists('#two_steps_btn', 10);});
    BypassedByBloggerPemula(/(chooyomi|blogmado|kredilerim|insuranceleadsinfo).com/, function() {
      let bm = setInterval(() => {if (Captchacheck()) {clearInterval(bm); ClickIfExists('button.btn');}}, 1 * 1000);
      waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/(kiktu|techcyan).com/, function() {let kkt = setInterval(() => {
      if (Checkvisibility(bp('.tick.wgicon'))) {clearInterval(kkt); ReadytoClick('.bottom_btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/fexkomin.xyz/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('.btn-captcha.btn-danger.btn', 3);});
    BypassedByBloggerPemula(/100puan.com/, function() {
      ClickIfExists('.big-text', 3);waitForElm('div.bb-sticky-el a', pbz => redirect(pbz.href, false));});
    BypassedByBloggerPemula(/sub2get.com/, function() {
      if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/(fc-lc|loaninsurehub).com|fc-lc.xyz/, function() {ClickIfExists('#invisibleCaptchaShortlink', 3);
      ClickIfExists('#getlink', 3);ClickIfExists('#glink', 4);ClickIfExists('#surl', 5);});
    BypassedByBloggerPemula(/mneyvip.com/, function() {
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 6);SubmitIfExists('.box-main > form:nth-child(1)', 1);});
    BypassedByBloggerPemula(/jobform.in/, function() {ClickIfExists('#scanURL', 1);
      ClickIfExists('#topClickButton', 1);ClickIfExists('#bottomClickButton', 27);});
    BypassedByBloggerPemula(/go.shareus.in/, function() {
      if (BpParams.has('shortid') && BpParams.has('link')) {meta(atob(BpParams.get('link')));}});
    BypassedByBloggerPemula(/playpaste.com/, function() {
      let pps = setInterval(() => {if (Captchacheck()) {clearInterval(pps);ClickIfExists('button.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/suratresmi.id/, function() {
      ClickIfExists('button#hmn.btn-more', 3, 'setInterval');ClickIfExists('a#hmn.btn-more', 3, 'setInterval');});
    BypassedByBloggerPemula(/examkhata.com|gamelopte.com/, function() {
      ClickIfExists('#btn6', 3);waitForElm('a.yu-btn.yu-blue', exa => redirect(exa.href, false));});
    BypassedByBloggerPemula(/rancah.com|menjelajahi.com|shortly.xyz|nyawang.com/, function() {
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/cryptotracker.space/, function() {
      let cts = setInterval(() => {if (Captchacheck()) {clearInterval(cts);SubmitIfExists('#form-continue');}}, 1 * 1000);});
    //BypassedByBloggerPemula(/djxmaza.in/, function() {ClickIfExists('#dlbtn', 1);
      //ClickIfExists('#downloadbtnf', 2);ClickIfExists('#downloadbtn', 3, 'setInterval');});
    BypassedByBloggerPemula(/stfly.me/, function() {
      if (elementExists('.g-recaptcha')) {} else {ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3);}});
    BypassedByBloggerPemula(/khaddavi.net|contentmenarik.com/, function() {parent.open = BpBlock();
      setInterval(function() {if (Captchacheck()) {ClickIfExists('#slu-btn');}}, 500);});
    BypassedByBloggerPemula(/sapnogalpo.online/, function() {ClickIfExists('#link.tp-blue.tp-btn', 2);
      ClickIfExists('#btn6.tp-blue.tp-btn', 4, 'setInterval');waitForElm('a#btn6', sgp => redirect(sgp.href, false));});
    BypassedByBloggerPemula(/leitup.com/, function() {
      if (elementExists('#button_timer')) {waitForElm('input.form-control', leit => redirect(leit.placeholder, false));}});
    BypassedByBloggerPemula(/offeroc.com/, function() {let ofr = setInterval(() => {
        if (Captchacheck()) {clearInterval(ofr);ClickIfExists('.mt-2.btn-success.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/azmath.info|expertvn.com/, () => {if (elementExists('#megaurl-verified-captcha')) {
      ClickIfExists('button.h-captcha', 3);} else {SubmitIfExists('#megaurl-banner-page', 2);}});
    BypassedByBloggerPemula(/(nregajobcard|pradhanmantriupdates).in/, function() {
      setInterval(() => {ReadytoClick('#topButton.shrs_btn', 1); ReadytoClick('#bottomButton.shrs_btn', 2);}, 3 * 1000);});
    BypassedByBloggerPemula(/shortearn.net/, function() {parent.open = BpBlock();
      ClickIfExists('#appBtn', 1);ClickIfExists('#adBtn', 3, 'setInterval');ClickIfExists('#extensionBtn', 5, 'setInterval');});
    BypassedByBloggerPemula(/ez4mods.com|tech5s.co/, function() {SubmitIfExists('div.text-center form', 2);
      waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href, false));
      waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href, false));});
    BypassedByBloggerPemula(/(creditsalah|dissenttimes).com/, function() {ClickIfExists('#notarobot', 2, 'setInterval');
      let csh = setInterval(() => {if (Captchacheck()) {clearInterval(csh);ClickIfExists('#safesub');}}, 1 * 1000);waitForElm('a.safeb', csBtn => csBtn.click());});
    BypassedByBloggerPemula(/www.google.com|recaptcha.net/, async function() {await sleep(3000) && cfg.get('reCAPTCHA') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('reCAPTCHA') == true) {ReadytoClick('.recaptcha-checkbox-border');} else {}});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {await sleep(3000) && cfg.get('hCaptcha') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('hCaptcha') == true) {ReadytoClick('#checkbox');} else {}});
    BypassedByBloggerPemula(/alivedesktop.com/, function() {
      if (elementExists('#captcha-form')) {let alv = bp("input[name^='als']").value;
        let ald = bp("input[name^='safe']").value;redirect('https://rshrt.com/' + alv + '?api=' + ald, false);} else {}});
    BypassedByBloggerPemula(/(bnbfree|freeth|freebitco).in/, function() {if (elementExists('.h-captcha')) {let btc = setInterval(() => {
      if (Captchacheck()) {clearInterval(btc);ClickIfExists('#free_play_form_button');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/mazen-ve3.com/, function() {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/mhma12.tech|hasri.xyz|soft3arbi.com/, function() {EnableRCF();let arbi = setInterval(() => {
        if (bp('.progress-done').innerText == '100%') {clearInterval(arbi);ReadytoClick('#continue-button');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(120898|141989|161989|131989|121989|151989).xyz/, function() {if (elementExists('.g-recaptcha')) {let bitad = setInterval(() => {
      if (Captchacheck()) {clearInterval(bitad);SubmitIfExists('.mt-4');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/shortearn.net/, function() {parent.open = BpBlock();ClickIfExists('#adBtn', 3, 'setInterval');
      ClickIfExists('#appBtn', 1);ClickIfExists('button.btn.btn-primary.btn-block.btn-lg', 3);ClickIfExists('#extensionBtn', 5, 'setInterval');});
    BypassedByBloggerPemula(/(coinsward|blogsward).com|imbb.online/, async function() {if (elementExists('.g-recaptcha')) {var bw = bp("input[name=newwpsafelink]");
      redirect(JSON.parse(atob(bw.value)).linkr, false);} else {window.incrementRedirectCount(); await sleep(2000); window.handleButtonClick();}});
    BypassedByBloggerPemula(/1bit.space|mgnet.xyz/, function() {let bsp = setInterval(() => {if (captcha_solved) {ReadytoClick('button.button');clearInterval(bsp);}}, 2000);
      let mgn = setInterval(() => {if (captcha_solved && bp('button.button').innerText.includes('Get Link')) {ReadytoClick('button.button');clearInterval(mgn);}}, 2000);});
    BypassedByBloggerPemula(/bigbtc.win/, function() {if (elementExists('.h-captcha')) {let bb = setInterval(() => {
          if (Captchacheck()) {clearInterval(bb);ReadytoClick('#claimbutn');}}, 1 * 1000);} else {ClickIfExists('#clickhere', 2);}});
    BypassedByBloggerPemula(/firefaucet.win/, function() {if (elementExists("form[method='post']")) {let firefaucet = setInterval(() => {
      if (Captchacheck()) {ClickIfExists('button[type=submit]');}}, 2 * 1000);} else {ClickIfExists('#get_reward_button', 1);}});
    BypassedByBloggerPemula(/uptobhai\.*|uplinkto\.*|shortlinkto\.*/, function() { ClickIfExists('.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/tmail.io/, function() {
      if (elementExists('#next')) {SubmitIfExists('form.text-center', 3);} else {ClickIfExists('#surl', 5, 'setInterval');}});
    BypassedByBloggerPemula(/exeo.app|exego.app/, function() {ClickIfExists('#submit-button', 2);ClickIfExists('.link-button.button', 3);
      let exeo = setInterval(() => {if (bp('.timer').innerText == '0') {clearInterval(exeo);ReadytoClick('#submit-button');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(tpayr|waezf|ashrfd|poqzn|rezsx|tryzt|ashrff).xyz|quesignifi.ca|tiktokcounter.net|lifgam.online|dawenet.com/, function() {let profitsfly = setInterval(() => {
      if (elementExists('.h-captcha') && Captchacheck() && bp('#cbt').innerText == 'Continue') {ClickIfExists('.btn-primary.btn-primarybtn.btn', 1);clearInterval(profitsfly);
      ReadytoClick('.btn-primary.btn-primarybtn.btn', 2);} else if (!elementExists('.h-captcha') && bp('.countdown').innerText == '0') {clearInterval(profitsfly);ReadytoClick('.btn-primary.btn-primarybtn.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(on-scroll|diudemy|maqal360).com/, function() {EnableRCF();let adlink = setInterval(() => {
        if (bp('#countdown').innerText == '0') {clearInterval(adlink);ReadytoClick('#append > :nth-child(1)');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22).com|gold-24.net|bedrat.xyz|maos4alaw.online/, function() {
      ClickIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/(leaveadvice|mensventure).com/, function() {let lav = setInterval(() => {
        if (bp('#timer').innerText == '0') {ReadytoClick('#method_free.free-download-btn.download-btn');
          clearInterval(lav); if (!elementExists('.h-captcha')) window.openLink();}}, 2000);});
    /*BypassedByBloggerPemula(/itscybertech.com/, () => {let itscyber = setInterval(() => {if (Captchacheck()) {clearInterval(itscyber);
      ClickIfExists('.visit.medium.button');} else if (Checkvisibility(bp('#gtbtn2'))) {clearInterval(itscyber); window.fngo();}}, 1 * 1000);});*/
    BypassedByBloggerPemula(/jiotech.net|jameeltips.us|cryptonworld.space/, function() {
      ClickIfExists('#alf_continue', 3, 'setInterval');});
    BypassedByBloggerPemula(/hynews.biz|chamcuuhoc.com/, function() {
      var bypasslinks = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`);redirect(bypasslinks);});
    BypassedByBloggerPemula(/tii.la/, function() {if (elementExists('#link-view')) {
        let sbf = setInterval(function() {if (Captchacheck()) {clearInterval(sbf);ClickIfExists('#continue');}}, 500);}});
    BypassedByBloggerPemula(/skiplink.me/, function() {
      ClickIfExists('#alf_continue_captcha', 2);ClickIfExists('#alf_continue', 3, 'setInterval');});
    BypassedByBloggerPemula(/apanmusic.in/, function() {waitForElm('a#notarobot.button', ams => redirect(ams.href, false));
      ClickIfExists('#getlink', 3, 'setInterval');ClickIfExists('#gotolink', 30);});
    BypassedByBloggerPemula(/o-pro.online/, function() {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/, function() {
      if (elementExists('.g-recaptcha')) {let trg = setInterval(() => {if (Captchacheck()) {clearInterval(trg);
            SubmitIfExists('#lview > form');}}, 1 * 1000);} else {waitForElm('.get-link > a', tig => redirect(tig.href, false));}});
    BypassedByBloggerPemula(/easyworldbusiness.com/, function() {
      if (elementExists('.g-recaptcha')) {waitForElm('a.yu-btn.yu-blue', ewb => redirect(ewb.href, false));} else {ClickIfExists('.yu-blue.yu-btn', 15);}});
    BypassedByBloggerPemula(/getzen.cash/, function() {if (elementExists('#form-claim-zen')) {let gzc = setInterval(() => {
          if (Captchacheck()) {clearInterval(gzc);ClickIfExists('.btn-claim');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online/, function() {
      if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/deportealdia.live|noweconomy.live|techgeek.digital/, function() {SubmitIfExists('div.text-center div form', 2);
      waitForElm('a#surl1.btn-main.get-link', dep => redirect(dep.href, false));});
    BypassedByBloggerPemula(/nishankhatri.xyz/, function() {waitForElm('#my-btn', nsk => redirect(nsk.href, false));
      ClickIfExists('#pro-continue', 3);ClickIfExists('#pro-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club/, function() {
      ClickIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/computerpedia.in/, function() {ClickIfExists('.tp-blue.tp-btn-2', 3);
      let komp = setInterval(function() {if (Captchacheck()) {clearInterval(komp);ClickIfExists('#tp-snp2');}}, 500);});
    BypassedByBloggerPemula(/myprivatejobs.com/, function() {
      if (elementExists('.g-recaptcha')) {ClickIfExists('#tp-snp2.tp-blue.tp-btn-2', 3);} else {SubmitIfExists("form[name='tp']", 3);}});
    BypassedByBloggerPemula(/claimfreetrx.online/, function() {SubmitIfExists('#molien', 2);ClickIfExists('#verify > .mb-2.btn-primary.btn-lg.btn', 3);});
    //BypassedByBloggerPemula(/adclicker\.*|yourihollier.com/, function() {if (location.href.includes('url/')) {const adc = atob(atob(atob(location.hash.slice(1))));
      //redirect(new URLSearchParams(adc).get('url'));} else {}});
    BypassedByBloggerPemula(/offers4crypto.xyz|ewall.biz/, function() {
      if (elementExists('.g-recaptcha')) {let ofc = setInterval(() => {if (Captchacheck()) {clearInterval(ofc);
            ClickIfExists('#submitBtn');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/dl.lk21static.xyz/, function() {
      if (!location.href.includes('get/') && location.pathname != '/') {location = location.href.replace('yz/', 'yz/get/');}});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, function() {ClickIfExists('#countdown', 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/copy-paste-fonts.com|cryptednews.space/, function() {
      if (elementExists('.g-recaptcha')) {let cpf = setInterval(() => {if (Captchacheck()) {clearInterval(cpf);
            ClickIfExists('form center button');}}, 1 * 1000);} else {setTimeout(() => {ClickIfExists('form center button');}, 11 * 1000);}});
    BypassedByBloggerPemula(/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner).com|happy-living.online|galaxy-link.space|oke.io|bitss.sbs|(forextrader|foxylinks).site/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ClickIfExists('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/solarchaine.com/, function() {
      if (elementExists('#captchaShortlink')) {ClickIfExists('button.btn:nth-child(4)', 2);let sch = setInterval(() => {if (Captchacheck()) {clearInterval(sch);
            ClickIfExists('#invisibleCaptchaShortlink');}}, 1 * 1000);} else {SubmitIfExists('.box-body > form:nth-child(2)', 1);}});
    BypassedByBloggerPemula(/(remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us/, function() {EnableRCF();
      ClickIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);ClickIfExists('.tpdev-btn', 3);ClickIfExists("#tp98 button[class^='bt']", 3); SubmitIfExists("form[name='tp']", 3); ClickIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud/, function() {let shk = setInterval(() => {
        if (Captchacheck()) {clearInterval(shk);ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);});
    BypassedByBloggerPemula(/revly.click/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {SubmitIfExists('#link-view');}}, 1 * 1000);} else {SubmitIfExists('div.col-md-12 form', 2);}});
    BypassedByBloggerPemula(/theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id/, function() {
      var tform = bp('#landing');redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(blogscare|blogtechh|host2loan).com|enit.in|clk.wiki|(oko|aii).sh|moonboom.net|lnbz.la/, function() {ClickIfExists('button.btn.btn-primary', 2);SubmitIfExists('#nextpage', 2);
      SubmitIfExists('#getmylink', 3);let enit = setInterval(function() {if (Captchacheck()) {clearInterval(enit);ClickIfExists('.btn-captcha.btn-primary.btn');}}, 500);});
    BypassedByBloggerPemula(/techyreviewx.com|desiupload.co/, function() {ClickIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/(calmgram|adbitfly|blogsward).com|adbitfly.in/, function() {
      waitForElm('#continueBtn', afBtn => afBtn.click());ClickIfExists('#captcha-btn', 4, 'setInterval');
      ClickIfExists('.btn-captcha.btn-primary.btn', 8, 'setInterval');});
    BypassedByBloggerPemula(/shorterall.com/, function() {if (!elementExists('input[name=awnswer]') && !elementExists('#link-view')) {SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('input[name=awnswer]')) {let strl = bp('input[name=awnswer]').getAttribute('placeholder').split('=')[0]; bp('input[name=awnswer]').value = BpCalc(strl); SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/(exactpay|dinheirocrypto).online|videoclip.info|sproutworkers.co|coinsfaucet.fun/, function() {EnableRCF();window.onscroll = BpBlock();window.check2();if (elementExists('#verify')) {
        $('.blog-details').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/(crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org/, async function() {
      EnableRCF();await sleep(2000);window.check2();window.check3();ClickIfExists('button.btn.btn-primary.btn-lg');});
    BypassedByBloggerPemula(/(btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online/, function() {
      parent.open = BpBlock();SubmitIfExists('#link1s-form', 1);ClickIfExists('#next-step-button', 3);});
    BypassedByBloggerPemula(/playnano.online/, function() {ClickIfExists('#watch-link', 2);
      ClickIfExists('.watch-next-btn.btn-primary.button', 2);ClickIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/donia2tech.com|blog.techeysub.online|minersim.com/, function() {
      var form = document.getElementById('wpsafelink-landing');redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr);});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, true);xhr.send();});
    BypassedByBloggerPemula(/acortalink.me/, () => {let acorta = setInterval(() => {let script = bp('body > script');
        if (script) {let text = script.text.trim(); let lines = text.split('\n'); let i = lines.findIndex(x => x.includes('acortalink.me'));
          let link = lines[i + 2].trim().split(',')[6].trim(); if (window[link]) {clearInterval(acorta); redirect(window[link]);}}}, 100);});
    BypassedByBloggerPemula(/teknosimple.com|besargaji.com/, function() {parent.open = BpBlock();ClickIfExists('#slu-link', 3);
      let tek = setInterval(function() {if (Captchacheck()) {clearInterval(tek);ClickIfExists('#btn-3');}}, 500);});
    BypassedByBloggerPemula(/bloginkz.com/, function() {let bi = setInterval(function() {if (Captchacheck()) {clearInterval(bi);ClickIfExists('button.btn');}}, 500);
      waitForElm('a.get-link.disabled a', bli => redirect(bli.href));});
    BypassedByBloggerPemula(/bastinews.xyz/, function() {waitForElm('div#wpsafe-snp center a.btn-vip.bbtn-vip', bast => redirect(bast.href, false));
      waitForElm('div#main-content.mh-content center a', basti => redirect(basti.href, false));});
    BypassedByBloggerPemula(/autodime.com/, function() {
      let atd = setInterval(function() {if (Captchacheck()) {clearInterval(atd);ClickIfExists('#button1');}}, 500);
      waitForElm('a.btn-hover.color-1.btn-captcha', odim => redirect(odim.href, false));});
    //BypassedByBloggerPemula(/lootlinks.co|(loot-links|links-loot|loot-link).com|(lootdest|lootlink).org|lootdest.info|linksloot.net/, function() {
      //let lln = bp('body > script');let lls = strBetween(lln.text, `= '`, `,'`).split("'").slice(50, -5);setTimeout(() => {redirect(Decrypter2(lls), false);}, 2 * 1000);});
    BypassedByBloggerPemula(/amritadrino.com/, function() {
      if (elementExists('.g-recaptcha')) {waitForElm('body > b:nth-child(10) > center:nth-child(4) > a:nth-child(64)', amd => redirect(amd.href, false));} else {waitForElm('#tp-snp2', amBtn => amBtn.click());}});
    BypassedByBloggerPemula(/youtube.com/, function() {if (elementExists('#redirect-main-text')) {waitForElm('a#invalid-token-redirect-goto-site-button', yt => redirect(yt.href, false));} else {}});
    BypassedByBloggerPemula(/hunterkiller.me|surflink.tech/, function() {
      waitForElm('div#showw center a.btn.btn-danger.btn-captcha', hun => redirect(hun.href, false));
      waitForElm('div#wpsafe-snp center a', hunt => redirect(hunt.href, false));});
    BypassedByBloggerPemula(/coinhub.wiki/, function() {ClickIfExists('body > a:nth-child(1)', 2);
      ClickIfExists('#chl_cover', 2);ClickIfExists('#btn_verify', 4, 'setInterval');
      waitForElm('a.btn.btn-success', coi => redirect(coi.href, false));});
    BypassedByBloggerPemula(/lyricsbaazaar.com|ezeviral.com/, function() {
      let lyr = setInterval(function() {if (Captchacheck()) {clearInterval(lyr);ClickIfExists('#btn6');}}, 500);
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro/, async function() {const executor = async () => {let El = window?.livewire?.components?.components()[0];
        while (!El) {await sleep(100); console.log(1); El = window?.livewire?.components?.components()[0];}
        const payload = {fingerprint: El.fingerprint, serverMemo: El.serverMemo, updates: [{payload: {event: 'getData', id: 'whathappen', params: [],}, type: 'fireEvent',}, ],};
        const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json', 'X-Livewire': 'true', 'X-CSRF-TOKEN': window.livewire_token,},
            method: 'POST', body: JSON.stringify(payload),}); const json = await response.json(); const url = new URL(json.effects.emits[0].params[0]); redirect(url.href);};
      if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']"); console.log('addRecord...'); const input = document.createElement('input');
          input.value = window.livewire_token; input.name = '_token'; input.hidden = true; a.appendChild(input); a.submit();}
      if (elementExists("button[x-text]")) { console.log('getLink..'); executor();} return;} if (elementExists("div[class='max-w-5xl mx-auto']")) {console.log('Executing..'); executor();}});
    BypassedByBloggerPemula(/coinsrev.com/, function() {parent.open = BpBlock();
      if (elementExists('.g-recaptcha')) {let csr = setInterval(() => {if (Captchacheck()) {clearInterval(csr);
            ClickIfExists('#wpsafelinkhuman > input');}}, 1 * 1000);} else {ClickIfExists('#wpsafe-generate > a > img', 3);ClickIfExists('input#image3', 13);}});
    BypassedByBloggerPemula(/zubatecno.com/, function() {if (elementExists('#mdncaptcha')) {let zbt = setInterval(() => {
          if (Captchacheck()) {clearInterval(zbt);ClickIfExists('#link1s-snp1');}}, 1 * 1000);} else {SubmitIfExists('#link1s-form', 3);}});
    BypassedByBloggerPemula(/(wooseotools|woowebtools).com/, function() {if (elementExists('.g-recaptcha')) {let wst = setInterval(() => {
          if (Captchacheck()) {clearInterval(wst);ClickIfExists('div form button');}}, 500);} else {ClickIfExists('div form button', 3, 'setInterval');}});
    BypassedByBloggerPemula(/adwerty.com/, function() {let adw = setInterval(() => {if (Captchacheck()) {clearInterval(adw);ClickIfExists('#hidden_btn');}}, 500);
      waitForElm('#hidden_btn', adw2 => redirect(strBetween(adw2.onclick.toString(), `window.open('`, `', '_blank')`)));});
    BypassedByBloggerPemula(/modebaca.com/, function() {if (elementExists('#recaptcha-element')) {
        let mb = setInterval(function() {if (Captchacheck()) {ClickIfExists('.btn-success.btn');}}, 500);} else {
        ClickIfExists('.btn-success.btn', 2);ClickIfExists('div > div > button', 7);}});
    BypassedByBloggerPemula(/shopforex.online/, function() {bp('#submitBtn').removeAttribute('href');if (elementExists('.g-recaptcha')) {let sfo = setInterval(() => {
          if (Captchacheck()) {clearInterval(sfo);ClickIfExists('#submitBtn');}}, 500);} else {
        ClickIfExists('.submitBtn', 2);ClickIfExists('#go_d', 3, 'setInterval');}});
    BypassedByBloggerPemula(/(pernahsukses|alpinecorporate).com|aoutoqw.xyz/, function() {if (elementExists('.g-recaptcha')) {let ps = setInterval(() => {if (Captchacheck()) {clearInterval(ps);
            ClickIfExists('#alf_continue_captcha');}}, 1 * 1000);} else {window.showScrollToGetLinkText(); SubmitIfExists('#alf_continue_form_outer', 3);}});
    BypassedByBloggerPemula(/altechen.com|entutes.com/, function() {parent.open = BpBlock();
      if (elementExists('.h-captcha')) {let ale = setInterval(() => {if (Captchacheck()) {clearInterval(ale);
            ClickIfExists('#cs-btn');}}, 1 * 1000);} else {ClickIfExists('button#cs-btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/freetrx.fun/, function() {if (elementExists('.g-recaptcha')) {let ftx = setInterval(() => {
          if (Captchacheck()) {clearInterval(ftx);ClickIfExists("input[id^='abc']");}}, 500);} else {
        setTimeout(() => {("input[id^='abc']").click();}, 5 * 1000);ClickIfExists('#subbutt', 5);}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/(mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online/, function() {
      ClickIfExists('.submitBtn', 2);ClickIfExists('#go_d', 3);});
    BypassedByBloggerPemula(/(blogginglass|arahtekno|mopahealth).com|faucet.work|wildblog.me|jiotech.net|apkupload.in/, function() {
      var el = document.querySelector("input[name=newwpsafelink]");redirect(JSON.parse(atob(el.value)).linkr);});
    BypassedByBloggerPemula(/(anhdep24|nguyenvanbao|xemsport|byboe|asideway).com/, function() {
      if (elementExists('.g-recaptcha')) {let anh = setInterval(() => {if (Captchacheck()) {clearInterval(anh);
            ClickIfExists('#link1s-captcha');}}, 1 * 1000);} else {ClickIfExists('#link1s', 4, 'setInterval');ClickIfExists('#btn6', 3);}});
    BypassedByBloggerPemula(/traffic1s.com/, () => {let x = '.blog-content > p:nth-child(4) > strong:nth-child(1)';
      if (bp(x) && bp(x).innerHTML.includes('://')) {let i = strBetween(bp(x).innerHTML, '');let s = strBetween(i, '://', ' ');
        window.location.assign(`https://${s}?xref=https://google.com/&sl=${location.href}`);}});
    BypassedByBloggerPemula(/web1s.co|web1s.info|app.covemarkets.com/, function() {
      if (elementExists('.col-xxl-9')) {ClickIfExists('#submit', 3, 'setInterval');let webi = setInterval(function() {if (Captchacheck()) {clearInterval(webi);
            ClickIfExists('.fw-bold.btn-danger.btn-lg.btn');}}, 500);} else {SubmitIfExists('form.text-center', 1);}});
    BypassedByBloggerPemula(/suaurl.com/, function() {parent.open = BpBlock();
      let su = setInterval(function() {if (Captchacheck()) {bp('#comment_form').removeAttribute('target');clearInterval(su);
          ClickIfExists('#btn-capcha > .b-b', 1);}}, 500);ClickIfExists('#btn > button', 3, 'setInterval');});
    BypassedByBloggerPemula(/letsboost.net/, function() {waitForElm('body > script', () => {let stepDat = BpT('script')[BpT('script').length - 1];
      let stepname = stepDat.innerHTML;let lbDat = JSON.parse(stepname.match(/stepDat = '(.*)';/)[1]); let lbo = lbDat[lbDat.length - 1].url;redirect(lbo,false);});});
    /*BypassedByBloggerPemula(/web1s.asia/, function() {
      if (location.href.includes('api-mode/') || elementExists('.mb-20')) {SubmitIfExists('.submit-form', 3);ClickIfExists('#submit',3);} else if (!BpParamd.has('code')) {let iKey = '.mb-5.text-center.keyword-image', dWeb='fun88.info.vn';
      if (bp(iKey)) {if (bp(iKey).innerHTML.includes('7TmoFNC')) dWeb = 'hookeaudio.com'; if (bp(iKey).innerHTML.includes('81EoTp9')) dWeb = 'pennbookcenter.com';
      if (bp(iKey).innerHTML.includes('wYfNKAO')) dWeb = 'publicananker.com'; window.location.assign(`https://${dWeb}?xref=https://google.com/&wsa=${location.href}`);}
      if (elementExists('.col-xxl-9 > .text-center')) {let wa1 = setInterval(() => {if (Captchacheck()) {clearInterval(wa1);SubmitIfExists('form.text-center');}}, 1 * 1000);}
      if (elementExists('.col-xxl-9 > .text-center') && !elementExists('.g-recaptcha')) {ClickIfExists('#submit',3);}} else if (BpParamd.has('code')) {ClickIfExists('#submit-button');
      let inp = 'input.form-control:nth-child(2)', btn = 'form.submit-form:nth-child(2) > button:nth-child(16)'; if (bp(inp)) { bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}});
    BypassedByBloggerPemula(/(hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn/, function() {RemoveRef('https://google.com');
      if (BpParams.has('xref') && BpParams.has('wsa')) {let b = '.textwidget button', pLink = `li.menu-item > a:nth-child(1)`, gDiv = 'p > div > div', tCode;
      setTimeout(() => {if (bp(b) && bp(b).innerText.includes('CONTINUE')) {bp(b).click();}}, 3000);
      let pClick = setInterval(() => {if (bp(b) && bp(b).innerHTML.includes(`ANY PAGE TO GET`)) {bp(pLink).href = bp(pLink).href + document.location.search;
            bp(pLink).click();clearInterval(pClick);}}, 2000);
      let gCode = setInterval(() => {if (bp(gDiv) && !bp(gDiv).innerText.includes('ontinue after')) {tCode = strBetween(bp(gDiv).parentElement.innerHTML, `!important;">`, `<svg`, true);
      window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});*/
    BypassedByBloggerPemula(/stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com|(blogbux|blogesque|exploreera).net/, function() {if (elementExists('.g-recaptcha') || elementExists('.h-captcha')) {
        let stf = setInterval(() => {if (Captchacheck()) {clearInterval(stf);ReadytoClick('.form-send.m-2.btn-captcha.btn-outline-primary.btn');}}, 500);} else {
        ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/coins-town.com/, function() {ClickIfExists('#claimCoins > button[data-bs-toggle="modal"]', 2);
      ClickIfExists('a[href*="play.php?"]', 2);if (document.referrer.includes('/?cashando=')) {
        window.location.assign(`https://coins-town.com/play.php?game=20966`);} else if (elementExists('#claimCoins')) {bp('#claimCoins').style.display = '';}});
    BypassedByBloggerPemula(/slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com/, function() {EnableRCF();
      let sw = setInterval(() => {if (Captchacheck()) {clearInterval(sw); ClickIfExists('.hidden-continue-button');}}, 1 * 1000); waitForElm('#yuidea-btmbtn', swBtn => swBtn.click());});
    BypassedByBloggerPemula(/link.goto.com.np|(appkamods|bankvacency|mealcold|otomi-games).com/, () => {
      waitForElm('div#wpsafe-link a', bitz => redirect(bitz.href, false));
      waitForElm('#wpsafe-link input', bit2 => redirect(strBetween(bit2.onclick.toString(), `window.open('`, `', '_blank')`), false));});
    BypassedByBloggerPemula(/hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org/, function() {
      ClickIfExists('#my-btn', 2);ClickIfExists('#wpsafe-link > .btn-secondary.btn', 2);
      waitForElm('#pro-link', nhk => redirect(nhk.href, false));waitForElm('#wpsafe-link a', hrl => redirect(strBetween(hrl.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/(awgrow|fadedfeet|kenzo-flowertag|homeculina|ineedskin|alightmotionlatest|auntmanny|mytechcontent|techymatic|gamedouc).com|worldtanr.xyz|lawyex.co|yexolo.net|mdn.lol|(aayurvedshastra|allnewspoint).in/, () => {EnableRCF();
      if (elementExists('.g-recaptcha')) {let mdn = setInterval(() => {if (Captchacheck()) {clearInterval(mdn);BypassHD('form[action]', 1);}}, 1 * 1000);} else {setTimeout(() => {BypassHD(GetForm('mdn'));}, 17 * 1000);}});
    BypassedByBloggerPemula(/shortit.pw/, function() {if (elementExists('.bg-light.container')) {
        $('.text-center.text-muted').text('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      ClickIfExists('.pulse.btn-primary.btn', 3);let sorti = setInterval(function() {if (Captchacheck()) {clearInterval(sorti);ClickIfExists('#btn2');}}, 500);});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, function() {setInterval(function() {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(function() {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(function() {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/linkvip.io/, async function() {var campId = (await elementReady('input[name="campId"]')).value;
      var linkId = (await elementReady('input[name="linkId"]')).value;console.log(campId, linkId);var frmData = new FormData();
      frmData.append('campId', campId);var res = await fetch('https://linkvip.io/graph/api?action=getCodeCamp', {method: 'POST', body: frmData,});
      var data = await res.json(); if (!data.status) return console.error('getCodeCamp');var codeOTP = data.message;var frmDataf = new FormData();
      frmDataf.append('campId', campId);frmDataf.append('linksId', linkId);frmDataf.append('codeOTP', codeOTP);
      var dataf = await fetch('https://linkvip.io/graph/api?action=confirmCode', {method: 'POST', body: frmDataf,}).then(res => res.json());
      if (!dataf.status) return console.error('confirmCode');redirect(dataf.message);});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {let adsh = setInterval(() => {
        if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);
          document.write(window._sharedData[0].destination);redirect(document.body.textContent);
        } else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io/, () => { parent.open = BpBlock();waitForElm('.py-2.bg-blue-600', tBtn => tBtn.click());
      waitForElm('form:nth-child(1) > a:nth-child(3)', vBtn => vBtn.click());waitForElm('button.py-2:nth-child(3)', bBtn => bBtn.click()); waitForElm('div > a.py-2.bg-blue-600', crb => redirect(crb.href, false));
      let craz = setInterval(() => {if (elementExists('button.py-2')) {clearInterval(craz); SubmitIfExists('div.rounded > div:nth-child(9) > form:nth-child(1)', 2);}}, 500);});
    BypassedByBloggerPemula(/ify.ac/, function() {window.open_href();});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/lifeezee.com/, () => waitForElm('.get-link', lifz => redirect(lifz.href)));
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/sahityt.com/, () => waitForElm('a#tp-snp2', sht => redirect(sht.href, false)));
    BypassedByBloggerPemula(/file-upload.in/, () => waitForElm('#getlink', fui => redirect(fui.href, false)));
    BypassedByBloggerPemula(/upmienphi.com/, function() {waitForElm('.download-link', upBtn => upBtn.click());});
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/cashando.me/, () => waitForElm('#goCoinsTown', cash => redirect(cash.href, false)));
    BypassedByBloggerPemula(/appsinsta.com/, function() {waitForElm('.yu-blue.yu-btn', apBtn => apBtn.click());});
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/sugarona.com/, function() {waitForElm('a#my-btn', sgr => redirect(sgr.href, false));});
    BypassedByBloggerPemula(/cekip.site/, () => waitForElm('a#aGo.badge.bg-success', cek => redirect(cek.href, false)));
    BypassedByBloggerPemula(/techleets.xyz/, () => waitForElm('#tp-snp2 > center > a', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/newsturbovid.com/, () => waitForElm('#start-download > a', ntv => redirect(ntv.href, false)));
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/mirrored.to/, () => waitForElm('div.col-sm.centered.extra-top a', mir => redirect(mir.href, false)));
    BypassedByBloggerPemula(/flybid.net/, () => waitForElm('a#continue-button.continue-button', flb => redirect(flb.href, false)));
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/huongdanvuotlink123.blogspot.com/, () => waitForElm('a.in-cell-link', hdv => redirect(hdv.href, false)));
    BypassedByBloggerPemula(/maxurlz.com/, () => waitForElm('a.btn.btn-success.btn-lg.flip.animated', maxu => redirect(maxu.href, false)));
    BypassedByBloggerPemula(/sama-pro.com|mikl4forex.com|dr-forex.com/, () => waitForElm('a#submitBtn', smpb => redirect(smpb.href, false)));
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/linksae.com/, function() {waitForElm('a.btn.btn-success.btn-lg.flip.animated', lsa => redirect(lsa.href, false));});
    BypassedByBloggerPemula(/sub2unlock.com/, function() {if (location.href.includes('/unlock')) {waitForElm('a#link', s2l => redirect(s2l.href, false));}});
    BypassedByBloggerPemula(/thebloggerspoint.in|ezeviral.com|fixno.in|technocubes.in/, () => waitForElm('#wpsafe-snp > a', tbs => redirect(tbs.href, false)));
    BypassedByBloggerPemula(/rockmods.net/, function() {if (location.href.includes('/rblink.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/doodjob.com/, () => waitForElm('a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled', doo => redirect(doo.href, false)));
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/yosite.net/, () => waitForElm('.options_layout_container > center:nth-child(17) > a:nth-child(1)', yos => redirect(yos.href, false)));
    BypassedByBloggerPemula(/offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com/, () => waitForElm('a#proceed', offr => redirect(offr.href, false)));
    BypassedByBloggerPemula(/geniussolutions.co|pokemonroms.cc|alightmotionlatest.com/, () => waitForElm('a#SecondPageBottomButton', gsc => redirect(gsc.href, false)));
    BypassedByBloggerPemula(/cricketgurupro.com/, function() {SubmitIfExists("form[name='tp']", 3);waitForElm('#page > center > a', cgp => redirect(cgp.href, false));});
    BypassedByBloggerPemula(/bluemedialink.online|bluemediafile\.*/, function() {if (BpParams.has('url')) {waitForElm('input#nut[src]', blum => blum.parentNode.submit());}});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/blog.textpage.xyz/, () => waitForElm('#wpsafe-link1 a', bt => redirect(strBetween(bt.onclick.toString(), `window.open('`, `', '_blank')`), false)));
    BypassedByBloggerPemula(/foodupe.com/, function() {if (elementExists('.containerpanel')){let fdp = bp('#donead').href;setTimeout(() => {redirect(fdp,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/freethailottery.live/, function() {if (elementExists('.g-recaptcha')){let ftl = ReadCV('JSON_fetch');setTimeout(() => {redirect(ftl,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/udrop.com/, () => waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`), false)));
    BypassedByBloggerPemula(/nulledlist.info|earnash.com|my-coins.xyz|earn-bitcoin.online|zimabadko.com|vidoza.xyz|every-crypto.info/, () => waitForElm('div#getlinkbtn center a', kalv => redirect(kalv.href, false)));
    BypassedByBloggerPemula(/sub2unlock.net/, function() {if (elementExists('.linkDiv_btns.col-xs-12.col-sm-12.col-md-12')){let stu = bp('#theLinkID').textContent;setTimeout(() => {redirect(stu,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides).com|(iisfvirtual|bookszone|learnmany).in/, function() {SubmitIfExists("form[name='tp']", 3); waitForElm('a#btn6', bkz => redirect(bkz.href, false));});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks|apklox).com|updrop.link/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/ronakfitness.com/, function() {if (elementExists('.containerpanel')){let rft = bp('a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled').href;setTimeout(() => {redirect(rft,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/mboost.me/, function() {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|djqunjab.in|datacheap.io/, () => waitForElm('#wpsafelink-landing > input', dis => redirect(JSON.parse(atob(dis.value)).linkr, false)));
    BypassedByBloggerPemula(/readi.online|mbantul.my.id|blog.qnix.me|videoclip.info|moddingzone.in|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz/, function() {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/aiimgvlog.fun/, function() {EnableRCF(); window.onload = setInterval(() => {if (elementExists('.h-captcha') && Checkvisibility(bp('.h-captcha'))) {BypassHD('#overlay', 1);} if (elementExists("div[id^='count']") && bp("div[id^='count']").innerHTML == 0) {ReadytoClick('input:nth-of-type(3)', 1);}}, 1 * 1000);
        if (elementExists('input.form-control')) {window.onscroll = BpBlock();window.check2(); $('#clickMessage').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually'); elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|fileku.net|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus/, function() {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); window.grecaptcha.execute();} catch (e) {}}, 3000);}});
    BypassedByBloggerPemula(/dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|liinkat|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|link3s|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|tinygo.co|pndx.live|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz/, function() {parent.open = BpBlock();
      if (elementExists('.g-recaptcha') || elementExists('#captchaShortlink')) {let frm = setInterval(() => {if (Captchacheck()) {clearInterval(frm);SubmitIfExists('#link-view');}}, 1 * 1000);} else {let FMode = ['#link-view', '#form-continue', '.col-md- > form', '#nextstepform', '#submit-form', '.text-center.row > form', 'div.col-md-6 form', 'div.col-md-12 form', 'div.text-center form', '#before-captcha', '#yuidea', '#exfoary-form', '#submit_first_page', '#hidden form', '#test', 'form.text-center'];for (let i = 0; i < FMode.length; i++) {SubmitIfExists(FMode[i],2);}}});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function() {let autoRoll = false; if (window.location.href.includes('/roll.php')) {window.scrollTo(0, 9999);
      if (!bp('#timer')) {setInterval(() => {if (Captchacheck()) {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}if (Checkvisibility(bp('#claim_boosted'))) {bp('#claim_boosted').click();}}}, 3 * 1000);} else { setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/coin_roll.php');}, 3 * 1000);}}
      if (window.location.href.includes('/coin_roll.php')) {window.scrollTo(0, 9999);if (!bp("#timer")) {setInterval(() => {if (Captchacheck()) {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}
      if (Checkvisibility(bp('#claim_boosted'))) {bp('#claim_boosted').click();}}}, 3 * 1000);} else { setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/wall.php');}, 3 * 1000);}} if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = BpAll(".col.s10.m6.l4 a[name='claim']");
      if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red'; let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space' + hrefValue);}, 3 * 1000);} else {if (Checkvisibility !== null) {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/');}, 3 * 1000);}}}
      if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {console.log('Viewing Available Ads'); if (elementExists('.fa-check-double')) {console.log('All Available Ads Watched'); setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/dashboard.php');}, 3 * 1000);}
      setInterval(() => {if (Checkvisibility(bp('#submit_captcha'))) {bp("button[type='submit'].g-recaptcha").click();}}, 5 * 1000);}}); const headers = {"Content-Type": "application/json", "apikey": APIKEY};
    elementReady('iframe[data-hcaptcha-response]').then(async function(element) {if (!APIKEY || !Checkvisibility(element) || !cfg.get('hCaptcha')) return;
    const settings = Object.fromEntries(new URLSearchParams(element.src)); let data = await Request("https://token.nocaptchaai.com/token", { method: "POST", headers,
    data: JSON.stringify({url: settings.host, type: "hcaptcha", sitekey: settings.sitekey, softid: "bloggerPemula-diego"})}); const url = data.url;
    while (data.status != "processed") {await sleep(1); data = await Request(url, { headers, responseType: 'json'}); console.log(data);}
    window.postMessage(JSON.stringify({ "source": "hcaptcha", "label": "challenge-closed", "id": settings.id, "contents": { "event": "challenge-passed", "response": data.token, "expiration": 120}}));});

}})();

// ----- Bypass ad-maven with adbypass.eu -----
(function() {
    'use strict';
    if (true) {
        var url = window.location.href;
        if (/((ebaticalfel|megadropsz|stownrusis|iedprivatedqu).com)\/s\?/.test(url)) {
            GM_setValue('savedShortlink', url);
            window.location.assign('https://adbypass.eu/');
        } else if (/adbypass.eu/.test(url) && !url.includes('/unblock')) {
            window.addEventListener("load", function(event) {
                var savedShortlink = GM_getValue('savedShortlink', null);
                var inputField = document.querySelector('#inputt');
                if (savedShortlink && inputField) {
                    inputField.value = savedShortlink;
                    GM_deleteValue('savedShortlink');
                    setTimeout(function() {let bypassButton = document.querySelector('#bttn');if (bypassButton) {bypassButton.click(); bypassButton.disabled = true;}}, 1000);
                }
            });
        } else if (/adbypass.eu\/unblock/.test(url)) {
            window.addEventListener('load', function() {
                var linkElement = document.querySelector('.form__group > a:nth-child(5)');
                if (linkElement && linkElement.href) {
                    //if (confirm('Bypass done.\nRedirect to ' + linkElement.href + ' ?')) {
                        window.location.assign(linkElement.href);
                    //}
                }
            });
        }
    }
})();
// ----- ----- -----

// ----- bypass.city redirect helper -----
(function() {
    'use strict';
    let url = window.location.href;
    const isValidUrl = url => { try { new URL(url); return true; } catch (error) { return false; } };

    function makeUrlClickable(element) {
        let url = element.textContent.match(/(https?:\/\/\S+)/)[0];
        if (url && isValidUrl(url) && !url.endsWith('...')) {
            let link = document.createElement('a'); link.href = url; link.textContent = url;
            element.innerHTML = element.innerHTML.replace(url, link.outerHTML);
            return url;
        }
    }

    if (/(bypass.city|adbypass.org)\/bypass\?bypass=/.test(url)){
      window.addEventListener('load', function() { //After window loaded
        let checkInterval = setInterval(function() { //Check every 0.5s if the link is available
            let linkContainerElement = document.querySelector('div.mantine-fn96xv:nth-child(3)');
            if (linkContainerElement && linkContainerElement.innerHTML.includes('http')) {
                clearInterval(checkInterval);
                let targetUrl = makeUrlClickable(linkContainerElement);
                isValidUrl(targetUrl) && window.location.assign(targetUrl);
            }
        }, 500);
      });
    }
})();
// ----- ----- -----

// ----- Extra bypasses -----
(function() {
    'use strict';
    const url = window.location.href
    const redirect = finalUrl => window.location.assign(finalUrl);
    const getParam = (url, param) => new URLSearchParams(url).get(param);
    const rot13 = str => str.replace(/[A-Za-z]/g, char => String.fromCharCode((char.charCodeAt(0) % 32 + 13) % 26 + (char < 'a' ? 65 : 97)));
    const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
    const afterDOMLoaded = (callback) => document.addEventListener('DOMContentLoaded', callback);
    const afterWindowLoaded = (callback) => window.addEventListener('load', callback);
    const isValidUrl = url => /^(?:https?|ftp):\/\/(?:\w+\.){1,3}\w+(?:\/\S*)?$/.test(url);
    const clickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); button.click(); } }, 1000); };
    const redirectIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button.href) { clearInterval(intervalId); redirect(button.href) } }, 500); };
    const clickIfExistsNonStop = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector + ':not(.disabled)'); if (button) { button.click(); } }, 500); };
    const redirectIfNotDisabled = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton && !linkButton.href.includes('/undefined')) { clearInterval(intervalId); setTimeout(function() {redirect(linkButton.href);}, 500) } }, 500); };
    const clickIfNotDisabled = (buttonSelector) => { let intervalId = setInterval(() => { let button = document.querySelector(buttonSelector); if (!button.hasAttribute('disabled') && !button.classList.contains('disabled')) { clearInterval(intervalId); setTimeout(function() {button.click();}, 500) } }, 500); };
    const checkElementVisible = element => element !== null && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) && (!element.getAttribute('style') || !element.getAttribute('style').includes('display:none'));
    const clickIfVisible = selector => { afterDOMLoaded(function() { let intervalId = setInterval(() => { let element = document.querySelector(selector); if (checkElementVisible(element)) { clearInterval(intervalId); element.click(); } }, 1000); }); };
    const preventForcedFocusOnWindow = () => {window.mouseleave = true; window.onmouseover = true; document.hasFocus = function() {return true;}; Object.defineProperty(document, 'webkitVisibilityState', {get() {return 'visible';}});
        Object.defineProperty(document, 'visibilityState', {get() {return 'visible';}}); window.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true);
        window.addEventListener('focus', onfocus, true);document.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true); Object.defineProperty(document, 'hidden', {get() {return false;}});};

    //peliculasgd.net, animesgd.net
    /(mundopolo.net|myfirstdollar.net)/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    // club-hd.com
    /(adsense.tupaste.top)\/#!/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    // librolandia.net
    /acorta2.com/.test(url) ? redirect(atob(atob(atob(url.split('#!')[1])))) : null;

    // pelishd4k.com
    /(web.admoneyclick.net|acortaphd.live)\/#!/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    // dw-anime.net
    /dw-anime.net\/short\/\?anonym=/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    //programasvirtualespc.net
    /onlypc.net\/out#!/.test(url) ? redirect(atob(atob(atob(url.split('#!')[1])))) : null;

    //leak.sx & pornleaks.in
    /comohoy.com/.test(url) ? redirect(atob(url.split('?url=')[1])) : null;

    //sphinxanime.com
    /sphinxanime.com\/short/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    //japan-paw.net
    /japan-paw.net\/out/.test(url) ? redirect(atob(url.split('out/?')[1])) : null;

    //pasteprivado.blogspot.com
    /link.manudatos.com\/#!/.test(url) ? redirect(atob(atob(atob(url.split('#!')[1])))) : null;

    //intercambiosvirtuales.org
    /1v.to\/t/.test(url) ? redirect(atob(atob(atob(atob( atob(url.split('/t/')[1]).replace('+P', '') ))))) : null;

    //anime-world.in and mandranime.com
    /(iconicblogger.com|segurosdevida.site)/.test(url) ? afterDOMLoaded(function() {redirect(document.getElementById('wpsafe-link').querySelector('a').getAttribute('onclick').match(/window\.open\('([^']*)'/)[1])}) : null;

    //anime-world.in 2nd step
    /link.unlockner.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn.get-link')}) : null;

    //atozcartoonist.com
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#username').value = 'filler'}) : null;
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#tp982').click()}) : null;
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('button.tp-btn.tp-blue').click()}) : null;
    /www.akcartoons.in/.test(url) ? afterDOMLoaded(function() {document.querySelector('#btn6 > button').click()}) : null;
    /www.akcartoons.in/.test(url) ? afterDOMLoaded(function() {redirect(document.querySelector('a[href*="go.moonlinks.in"]'))}) : null;
    /go.moonlinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;

    // linkneverdie.net
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#originalLink')}) : null;

    //shrinkme.us
    /shrinkme.(us|site|cc)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;

    //freecoursesite.com 2nd step - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/43
    /myshrinker.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /myshrinker.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    //test.shrinkurl.org https://github.com/FastForwardTeam/FastForward/issues/1365
    /test.shrinkurl.org/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /test.shrinkurl.org/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    //fc-lc
    /fc-lc.(xyz|com)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    // extra steps for some fc-lc cases: https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8736277
    ///tmail.io/.test(url) ? afterDOMLoaded(function() {clickIfExists('#next')}) : null;
    ///tmail.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#scroll')}) : null;
    ///tmail.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#glink')}) : null;
    ///tmail.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#surl')}) : null;

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
        var extractedUrl = document.documentElement.innerHTML.split('\n').find(line => line.includes("document.getElementById('contador').href = 'htt")).split("href")[1].match(/'([^']+)'/)[1];
        extractedUrl.includes('?s=') ? redirect(extractedUrl.split('?s=')[1]) : redirect(extractedUrl);
    }) : null;

    //ouo.io
    /ouo.io/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;
    /ouo.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#btn-main')}) : null;

    //cuty.io - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/46
    /exeo.app|mrgec.com|cety.app/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#submit-button')}) : null;

    //oko.sh
    /lnbz.la/.test(url) ? afterDOMLoaded(function() {timeSec = 0; afterElementVisible('form', function() {clickIfExists('button#getlink.btn-success');}) }) : null;

    // tii.la oko.sh final step
    /tii.la|oko.sh|shrinke.me|clk.wiki|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /ez4short.com\/[^\/]+\/\?token=[^\/]+$/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled2('#aaoii2o')}) : null;

    // shon.xyz, seen in mega-descargas-serie.blogspot.com
    /shon.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-main')}) : null;

    //vegamovies, worldfree4u, desiremovies.wales, hdhub4u.rsvp ... https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8508217
    const redirectOrClickIfExistsEnabledWithDelay = (selector) => { afterDOMLoaded(function() { //Wait for the page to load
        let intervalId = setInterval(() => { //Check every 0.5s
          let button = document.querySelector(selector + ':not(.disabled)'); //Check the element is not disabled
          if (button) {setTimeout(() => { isValidUrl(button.href) ? redirect(button.href) : button.click();}, 100);} //Redirect or click, with a 0.1s delay
        }, 500);});};
    if (/((cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top)/.test(url)){
        if (url.includes('?r=')) redirect(atob(url.split('?r=')[1]));
        else redirectOrClickIfExistsEnabledWithDelay('.rd_btn');
    }

    // worldfree4u
    //bloggingvector.shop\/re/.test(url) ? redirect(atob(url.split('/re/')[1].split('?')[0])) : null; // not necessary, the site does this one by itself for now

    // desiremovies.wales
    /gyanigurus.net\/view/.test(url) ? afterDOMLoaded(function() {clickIfExists('#show_button')}) : null;

    //ovagames.com - linkspy.cc & clicksfly.com|shrinkme.io|clk.sh|shrinkearn.com|clk.asia|clk.wiki concatenated - https://github.com/FastForwardTeam/FastForward/issues/1352
    if (/linkspy.cc\/tr/.test(url)){
        var decodedUrl = atob(url.split('/tr/')[1]);
        var urlParam = getParam(decodedUrl,'url');
        urlParam ? redirect(atob(urlParam)) : redirect(decodedUrl);
    }

    //dropgalaxy https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/2
    /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {clickIfExists('#method_free')}) : null;
    /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#downloadbtn')}) : null;
    /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {
        var intervalId = setInterval(function() {// Keep checking if link is available, every 1s
            var downloadUrl = document.getElementById('dllink').getAttribute('action');
            if (downloadUrl) {
                clearInterval(intervalId);
                alert('Press OK to go to the download link:\n' + downloadUrl);
                redirect(downloadUrl)
            }
        }, 1000);
    }) : null;

    // short-ly.co https://github.com/FastForwardTeam/FastForward/issues/1363
    /short-ly.co/.test(url) ? afterDOMLoaded(function() {redirectIfExists('.btn-secondary')}) : null;

    // multimovies.space
    //##Intermediate buttons
    const handleShamikcardButtons = (buttonSelector, targetText) => afterDOMLoaded(() => setInterval(() => { const button = document.querySelector(buttonSelector); if (button && button.textContent.includes(targetText) && !(targetText == 'Get Link')) { setTimeout(() => button.click(), 500); } }, 2000));
    if (/(shramikcard|pmkisanlists).in|cookad.net/.test(url)){
        preventForcedFocusOnWindow();//preventForcedFocusOnWindow not working for this site apparently
        handleShamikcardButtons('#topButton', 'Click to Continue');
        handleShamikcardButtons('#topButton', 'Continue');
        handleShamikcardButtons('#bottomButton', 'Click to Continue');
        handleShamikcardButtons('#bottomButton', 'Continue');
        //##Final button
        (() => afterDOMLoaded(() => setInterval(() => { const button = document.querySelector('#bottomButton'); if (button && button.textContent.includes('Get Link') && button.style.display === 'block') { setTimeout(() => button.click(), 2000); } }, 1000)))(); //Final button
    }

    // ssrmovies.rent mkvhub.rent hdhub4u.rsvp
    if (/blogging.techworldx.net|10beasts.biz/.test(url)) {
        popupsToRedirects();//popupsToRedirects not working for this site apparently
        clickIfVisible('.wait > center:nth-child(1) > img:nth-child(1)');
        clickIfVisible('#generater > img:nth-child(1)');
        clickIfVisible('#showlink');
    }

    // starsddl.me
    /starsddl.me\/short\/\?anonym=/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    // uhdmovies.us (fixed in upstream. Disabling except for the redirect, because it avoids the popups, which are often blocked by browsers)
    // /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('span.block > a:nth-child(1)')}) : null;
    // /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('#verify_button')}) : null;
    // /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('#verify_button2')}) : null;
    /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#two_steps_btn')}) : null;

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
    if (/linkvertise.com|(linkvertise|link-to).net/.test(url)) {
        //solve easy case locally
        let rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {
            redirect(atob(rParam));
        // solve hard case through bypass.city
        } else {
            solveThroughBypassCity(url);
        }
    }

    // bstlar.com - not supported by bypass.city anymore
    // // @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(bstlar.com)/
    // /bstlar.com/.test(url) ? solveThroughBypassCity(url) : null;

    // Ad-maven (optionally solve through bypass.city, but currently solved through adbypass.eu)
    // /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu).com)\/s\?/.test(url) ? solveThroughBypassCity(url) : null;

    // empebau.eu used by adbypass.eu
    /empebau.eu\/s/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#skip > p:nth-child(1) > a:nth-child(1)')}) : null;

    // Loot-links (optionally solve through bypass.city, but currently solved locally)
    // /^(https?:\/\/)(?!(bypass.city|adbypass.org))(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/.test(url) ? solveThroughBypassCity(url) : null;

    // Epicload (seen used in t.me/joinchat/3cfq_APl8Hs4N2Ux)
    /epicload.com\/files/.test(url) ? afterDOMLoaded(function() {redirectIfExists('.btn-primary')}) : null;
    /epicload.com\/files/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('.btn-getlink')}) : null;

    // mirrorace, doodrive, tested in fluxyrepacks.site
    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('.hv-grid > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > button:nth-child(2)')}) : null; //continue button
    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4) > button:nth-child(1)')}) : null; //close anti-adblock banner
    /doodrive.com\/f/.test(url) ? window.addEventListener("load", function(event) {setTimeout(function() { clickIfExists('button.uk-button-primary:nth-child(1)')}, 1000) }) : null; //continue button

    // taodung.com
    /ipamod.com\/redirect-to/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;

    // 9xflix.business
    /9xflix\.(\w+)\/m\/goto/.test(url) ? redirect(url.split('/goto/')[1]) : null;

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

    // toonshub.xyz - https://earnmoneyyt.com/safe.php?link=RNRm2b2H
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#tp98')}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.tp-blue')}) : null;
    /sheralinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /go.bloggingaro.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /land.povathemes.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // gplinks, used in psa.wf sometimes, changes domains daily, use https://greasyfork.org/scripts/490365 instead
    if (/mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/.test(url)) {
        const clickIfVisible2 = (selector) => setInterval(() => { const button = document.querySelector(selector); if (button && button.style.display === 'block') { setTimeout(function() {button.click()}, 500);; clearInterval(intervalId); } }, 1000);
        const clickIfLinkIsReady = buttonSelector => setInterval(() => { const button = document.querySelector(buttonSelector); if (button && button.getAttribute('href') !== '#') setTimeout(function() {button.click()}, 500);; }, 1000);
        afterDOMLoaded(function() {
            count = 0; //Skip the timer
            clickIfVisible2('#VerifyBtn');
            clickIfLinkIsReady('#NextBtn');
        });
    }
    /gplinks.co\/[^/#]+\/(?:#|\?pid=)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#link-btn > a')}) : null;

    // gtlinks, used in toonsouthindia.com
    /tech.hipsonyc.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.bt-success')}) : null;
    /tech.hipsonyc.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#popup-button')}) : null;
    /tech.hipsonyc.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#gotolink')}) : null;
    /golink.gyanitheme.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/10
    // /veganab.co\/\?link=/.test(url) ? redirect('https://za.gl/' + url.split('?link=')[1]) : null;

    // https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/discussions/165265
    /veganab.co/.test(url) ? popupsToRedirects() : null;
    /veganab.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn-hover:nth-child(2)')}) : null;
    const extractLinkFromButtonOnclick = buttonElement => buttonElement.getAttribute("onclick").match(/window\.open\('([^']+)'/)[1];
    const redirectToOnclickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); redirect(extractLinkFromButtonOnclick(button)) } }, 500); };
    /camdigest.com/.test(url) ? afterDOMLoaded(function() {redirectToOnclickIfExists('#wpsafe-link > a:nth-child(1) > button:nth-child(1)')}) : null;
    /pastebin.com\/raw/.test(url) ? afterDOMLoaded(function() { const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }) : null; //for firefox, with afterDOMLoaded (must be first)
    /pastebin.com\/raw/.test(url) ? !function() {const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }() : null; //for chrome, without afterDOMLoaded (must be second)

    const clickIfCorrectText = (selector, textContent) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.innerText.includes(textContent) ) { clearInterval(intervalId); setTimeout(() => { button.click();}, 500); }}, 500); };
    /tawda.xyz\/tag/.test(url) ? preventForcedFocusOnWindow() : null;
    /tawda.xyz\/tag/.test(url) ? popupsToRedirects() : null;
    /tawda.xyz\/tag/.test(url) ? afterDOMLoaded(function() {clickIfCorrectText('#continueButton', 'Click to continue')}) : null;

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

    // zshort.net, shotzon.com - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/5
    /(cravesandflames|codesnse).com/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn:nth-child(1)')}) : null;
    /go.(cravesandflames|codesnse).com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    // olamovies.icu - https://v2links.me/q1z4ssolam //add stuff missing from the main script
    /v2links.(com|me)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /(utkarshonlinetest|newsbawa).com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#GetLink')}) : null;

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

    //suncy.net (upfiles.com) (seen used in fiuxy2.co)
    /sunci.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('button#link-button.btn-primary:not(.btn-download)')}) : null;

    // AdClicker (used in animesgd.net and many others)
    if (/(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url\/\#/.test(url)){
        var decodedUrl = decodeURIComponent(atob(atob(atob(url.split('/url/#')[1]))));
        if (decodedUrl.includes('&amp;url=')) {decodedUrl = decodedUrl.split('&amp;')[1];}
        var urlParam = new URLSearchParams(decodedUrl).get('url');
        if (urlParam) {redirect(urlParam);}
    }

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

    //pahe.ink final step
    /linegee.net|intercelestial.com/.test(url) ? preventForcedFocusOnWindow() : null;
    /spacetica.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('center a')}) : null;
    /pahe.plus/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /pahe.plus/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8878055 / https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-9061651 / https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-9296298
    if (/(loanoffering|djmp3world).in|moonplusnews.com/.test(url)) {afterDOMLoaded(function() {
        clickIfExists('#startButton'); clickIfExists('#verifybtn'); clickIfExists('#tp98'); clickIfExists('#tp44');
        clickIfExists('#tp4'); clickIfExists('#tp3'); clickIfExists('#rtg-snp2'); })}
    /modijiurl.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled2('a.get-link')}) : null;

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

    // dramaday.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/21
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-1')}) : null;
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-2')}) : null;
    /moneyblink.com\/ready\/go\?u=/.test(url)? redirect(atob(url.split('?u=')[1])) : null;

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

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/36
    /trimorspacks.com|pastescript.com|updrop.link/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#wpsafe-link > a:nth-child(1)')}) : null;

    // sinsitio.site / dixva.com
    if (/www.(sinsitio.site|dixva.com)\/out\/\?go=/.test(url)) {
        const decode = (encodedString) => {
            const dictionary = {'0': 'z', '1': 'y', '2': 'x', '3': 'w', '4': 'v', '5': 'u', '6': 't', '7': 's', '8': 'r', '9': 'q', 'A': 'p', 'a': 'P', 'B': 'o', 'b': 'O', 'C': 'n', 'c': 'N', 'D': 'm', 'd': 'M', 'E': 'l', 'e': 'L', 'F': 'k', 'f': 'K', 'G': 'j', 'g': 'J', 'H': 'i', 'h': 'I', 'I': 'h', 'i': 'H', 'J': 'g', 'j': 'G', 'K': 'f', 'k': 'F', 'L': 'e', 'l': 'E', 'M': 'd', 'm': 'D', 'N': 'c', 'n': 'C', 'O': 'b', 'o': 'B', 'P': 'a', 'p': 'A', 'q': '9', 'Q': 'Z', 'r': '8', 'R': 'Y', 's': '7', 'S': 'X', 't': '6', 'T': 'W', 'u': '5', 'U': 'V', 'v': '4', 'V': 'U', 'w': '3', 'W': 'T', 'x': '2', 'X': 'S', 'y': '1', 'Y': 'R', 'z': '0', 'Z': 'Q'};
            return encodedString.split('').map(char => dictionary[char] || char).join('');
        }
        redirect(decode(atob(url.split('?go=')[1])));
    }
    /www.yitarx.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://thotpacks.xyz/R7p2l
    /thotpacks.xyz/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // linkpays - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/48
    /fitnessholic.net\/token.php\?post=/.test(url) ? redirect("https://exercise.fitnessholic.net/?go=" + url.split('?post=')[1]) : null; //works for firefox only
    /fitnessholic.net/.test(url) ? afterDOMLoaded(function() {redirect("https://exercise.fitnessholic.net/?go=" + document.querySelector('div[id="btn11"]').querySelector('input[name="newwpsafelink"]').value)}) : null; //redudancy needed for chrome
    /readytechflip.com/.test(url) ? clickIfVisible('#tp-snp2') : null;

})();

(function() {
    //'use strict';
    const url = window.location.href
    const boostTimers = () => {const FsT = window.setTimeout; const FsI = window.setInterval;
        Object.defineProperty(window, 'setTimeout', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsT.apply(this, arguments);}});
        Object.defineProperty(window, 'setInterval', {value: function(func, delay) {if (delay === 1000) {delay = 50;} return FsI.apply(this, arguments);}});
        };

    // www.gtaall.com - https://github.com/FastForwardTeam/FastForward/issues/1348
    /www.gtaall.com\/get-manual/.test(url) ? boostTimers() : null;

    // psa.wf (adding here stuff missing from the main script)
    /motakhokhara.blogspot.com/.test(url) ? boostTimers() : null;

    // dramaday.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/21
    /besargaji.com/.test(url) ? boostTimers() : null;

})();
// ----- ----- -----


// ----- Bypass FileCrypt( imported from https://greasyfork.org/scripts/403170) -----
(function() {
    'use strict';
    if (/filecrypt.(cc|co)/.test(window.location.href)) {
        window.addEventListener('DOMContentLoaded', function() {
            ////-----imported from https://greasyfork.org/scripts/403170 -----
            (function () {
              var usenetAd=document.getElementsByTagName('A');//come on, why should anyone pay for access to pirated content?
              for(var i=0;i<usenetAd.length;i++){
                if(usenetAd[i].href.includes('/pink/')){
                  usenetAd[i].parentNode.remove();
                  i=usenetAd.length;
                }
              }  
              if(document.location.href.includes("/Link/")){
                getSingleLink();
              }
              else if(document.location.href.includes("/Container/")){
                let art=document.getElementsByClassName("download")[0].parentNode.parentNode.parentNode.parentNode;
                let load=document.createElement("DIV");
                load.id="dcryptLoadMsg";
                load.style.marginBottom="2em";
                load.textContent="Loading decrypted links list from dcrypt.it...";
                art.parentNode.insertBefore(load,art);
                getCNL();
              }
            })();
            function getSingleLink(){
              if(document.body.getElementsByTagName("SCRIPT").length==0){
                window.stop();
                if(body.children.length>0){
                  const a=document.body.innerHTML.lastIndexOf("http");
                  top.location.href=document.body.innerHTML.substring(a,document.body.innerHTML.indexOf('id=',a)+43).replace('&amp;', '&');
                }
                else{
                  GM.xmlHttpRequest({
                    method: "GET",
                    url: document.location.href,
                    onload: function(response) {
                      const a=response.responseText.lastIndexOf("http");
                      top.location.href=response.responseText.substring(a,response.responseText.indexOf('id=',a)+43);
                    }
                  });
                }
              }
            }
            function getCNL(){
              var dlcButton=document.getElementsByClassName("dlcdownload");
              if(dlcButton.length>0){
                var inputs=document.getElementsByTagName('INPUT');
                var dlcId;
                /*for(var i=0;i<inputs.length;i++){
                  if(inputs[i].getAttribute('name')=='hidden_cnl_id'){
                    dlcId=inputs[i].getAttribute('value');
                    i=inputs.length;
                  }
                }*/ //left for reference
                dlcId=document.getElementsByClassName("dlcdownload")[0].attributes["onclick"].nodeValue.split('\'')[1];
                //console.log('dlcId='+dlcId);
                GM.xmlHttpRequest({
                  method: "GET",
                  url: "https://"+document.location.hostname+"/DLC/"+dlcId+".dlc",
                  onload: function(response) {
                    dcrypt(response.responseText);
                  },
                  onerror: function(response) {
                  }
                });
              }
              else{
                document.getElementById("dcryptLoadMsg").textContent="No DLC file is available for bulk download. You'll have to click on the download buttons to retrieve the links. This operation isn't currently automated by Bypass FileCrypt script.";
                document.getElementById("dcryptLoadMsg").style.color="red";
              }
            }
            function dcrypt(content){
              //console.log(content);
              GM.xmlHttpRequest({
                method: "POST",
                url: "http://dcrypt.it/decrypt/paste",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: "content="+encodeURIComponent(content),
                onload: function(response) {
                  //console.log(response);
                  var obj=JSON.parse(response.response);
                  //console.log(obj);
                  var finalLinksDiv=document.createElement("DIV");
                  finalLinksDiv.style.backgroundColor="white";
                  finalLinksDiv.style.borderRadius="10px";
                  finalLinksDiv.style.padding="1em";
                  finalLinksDiv.style.marginTop="1em";
                  finalLinksDiv.style.color="black";
                  finalLinksDiv.style.zIndex="10";
                  finalLinksDiv.style.position="relative";
                  finalLinksDiv.style.marginBottom="1em";
                  let a=document.createElement("SPAN");
                  a.textContent="Decrypted links:";
                  finalLinksDiv.appendChild(a);
                  finalLinksDiv.appendChild(document.createElement("BR"));
                  finalLinksDiv.appendChild(document.createElement("BR"));
                  try{
                    for (var link of obj.success.links) {
                      console.log(link);
                      let b=document.createElement("A");
                      b.textContent=link;
                      b.href=link;
                      b.style.color="#156594";
                      finalLinksDiv.appendChild(b);
                      finalLinksDiv.appendChild(document.createElement("BR"));
                    }
                  }
                  catch(e){
                    console.log(e);
                    document.getElementById("dcryptLoadMsg").textContent="Error while reading the decrypted links from dcrypt.it. You can still use the single uncrypted links below.";
                  }
                  console.log(finalLinksDiv);
                  document.getElementById("dcryptLoadMsg").replaceWith(finalLinksDiv);
                  //Do you like it now? It's not hidden anymore :P
                  const config = { attributes: true, childList: false, subtree: false };
                  const callback = function(mutationList, observer) {
                      for (const mutation of mutationList) {
                          console.log(mutation);
                          mutation.target.removeAttribute(mutation.attributeName);
                          
                      }
                  };
                  const observer = new MutationObserver(callback);
                  observer.observe(finalLinksDiv, config);
                  //
                },
                onerror: function(response) {
                  document.getElementById("dcryptLoadMsg").textContent="Error while retrieving the links from dcrypt.it. You can still use the single uncrypted links below.";
                }
              });
            }
          // ------------------------
      });
    }

})();

// ----- ----- -----

// ----- Bypass look-link ( based on https://greasyfork.org/scripts/483207, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/3) -----
(function() {
    'use strict';

    if (/(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/.test(window.location.href)) {
        //alert('Bypass for loot-link starting.\nKeep in mind: \n- You probably need to disable your adblocker.\n- It takes about 5-10s to work.')
        //const window = unsafeWindow;

        // Overlay text "Bypassing..."
        setInterval(() => {if (!document.getElementById('bypassOverlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'bypassOverlay';
            overlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.5);padding:20px;z-index:9999;';
            overlay.innerHTML = '<h1 style="font-size:2em;color:white;margin:0;">Bypassing with userscript...(it takes 5-10s)</h1>';
            document.body.appendChild(overlay);
        }}, 1000);

        // Do the bypass
        lootlinkBypass();

        function lootlinkBypass(){
            let initData;
            let syncer;
            let sessionData;

            let origFetch = fetch;
            unsafeWindow.fetch = function (url, ...options) {
                return new Promise(async (resolve, reject) => {
                    try {
                        let res = await origFetch(url, ...options);
                        try {
                            if (url.includes(p.CDN_DOMAIN)) {
                                initData = res.clone();
                                initData = await initData.text();
                                initData = '[' + initData.slice(1, -2) + ']';
                                initData = JSON.parse(initData);
                                syncer = initData[10];
                            }
                            else if (url.includes(syncer) && !sessionData) {
                                sessionData = res.clone();
                                sessionData = await sessionData.json();
                                bypass();
                            }
                        } catch (e) {
                            console.error(e);
                            let reportError = confirm(`${e.message}\n\nwould you like to report this error?`);
                            if (reportError) {
                                navigator.clipboard.writeText(e.message);
                                window.location.replace('https://discord.gg/keybypass');
                            }
                            else {
                                window.location.reload();
                            }
                        }
                        resolve(res);
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            async function bypass() {
                let urid = sessionData[0].urid;

                let server = initData[9];
                server = (Number(urid.toString().substr(-5)) % 3) + '.' + server;

                let websocket = new WebSocket(`wss://${server}/c?uid=${urid}&cat=54&key=${p.KEY}`);
                fetch(sessionData[0].action_pixel_url)
                websocket.onopen = async function (event) {
                    await fetch(`https://${server}/st?uid=${urid}&cat=54`, { method: 'POST', })
                    await fetch(`https://${syncer}/td?ac=1&urid=${urid}&&cat=54&tid=${p.TID}`)
                };
                websocket.onmessage = function (event) {
                    if (event.data.startsWith('r:')) {
                        let data = event.data.split(':')[1];
                        data = decryptData(data);
                        window.location.assign(data);
                    }
                };
            }

            function decryptData(encodedData, keyLength = 5) {
                let decryptedData = '',
                    base64Decoded = atob(encodedData),
                    key = base64Decoded.substring(0, keyLength),
                    encryptedContent = base64Decoded.substring(keyLength);

                for (let i = 0; i < encryptedContent.length; i++) {
                    let charCodeEncrypted = encryptedContent.charCodeAt(i),
                        charCodeKey = key.charCodeAt(i % key.length),
                        decryptedCharCode = charCodeEncrypted ^ charCodeKey;

                    decryptedData += String.fromCharCode(decryptedCharCode);
                }

                return decryptedData;
            }
        }

    }

})();
// ----- ----- -----

// ----- Bypass mega-enlace ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/blob/b1622e8b387148509ca355e8070ffa5cdcf87525/SpanishFilter/sections/general_extensions.txt#L108 / https://github.com/AdguardTeam/AdguardFilters/issues/174863#issuecomment-1996735239) -----
// used in: pelisenhd.org latinomegahd.net gatonplayseries.com peliculasgd.net tododvdfull.com cinemaniahdd.net programasvirtualespc.net compucalitv.pro
(function() {
    if (/mega-enlace.com/.test(window.location.href)) {
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
                if (extractedURLs.length === 1) {
                    window.location.assign(extractedURLs[0]); // Redirect to the URL if only one URL is found
                } else if (extractedURLs.length > 1) {
                    addURLsToOverlay(extractedURLs); // Add URLs to overlay if more than one URL is found
                    overlayCreated = true;
                }
            }
        });
    }
})();
// ---------

// ----- Bypass work.ink ---- original script by lem6ns: https://greasyfork.org/en/scripts/463481-work-ink-bypasser
(function() {
    'use strict';
    if (/(work.ink|workink.click)\/.*$/.test(window.location.href)) {

        document.addEventListener('DOMContentLoaded', function() {
            //--Original script starts here--
            const notyfCss = GM_getResourceText("NOTYF_CSS");
            GM_addStyle(notyfCss);
            const notyf = new Notyf({ duration: 5000 });

            (async () => {
                if (window.location.hostname.includes("r.")) window.location.hostname = window.location.hostname.replace("r.", "");
                if (window.location.hostname === "work.ink") {
                    const [encodedUserId, linkCustom] = decodeURIComponent(window.location.pathname.slice(1)).split("/").slice(-2);
                    const BASE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    const loopTimes = encodedUserId.length;
                    let decodedUserId = BASE.indexOf(encodedUserId[0]);
                    for (let i = 1; i < loopTimes; i++) decodedUserId = 62 * decodedUserId + BASE.indexOf(encodedUserId[i]);

                    const payloads = {
                        social: (url) => JSON.stringify({
                            type: "c_social_started",
                            payload: {
                                url
                            }
                        }),
                        readArticles: {
                            1: JSON.stringify({
                                type: "c_monetization",
                                payload: {
                                    type: "readArticles",
                                    payload: {
                                        event: "start"
                                    }
                                }
                            }),
                            2: JSON.stringify({
                                type: "c_monetization",
                                payload: {
                                    type: "readArticles",
                                    payload: {
                                        event: "closeClicked"
                                    }
                                }
                            })
                        },
                        browserExtension: {
                            1: JSON.stringify({
                                type: "c_monetization",
                                payload: {
                                    type: "browserExtension",
                                    payload: {
                                        event: "start"
                                    }
                                }
                            }),
                            2: (token) => JSON.stringify({
                                type: "c_monetization",
                                payload: {
                                    type: "browserExtension",
                                    payload: {
                                        event: "confirm",
                                        token
                                    }
                                }
                            })
                        }
                    }

                    WebSocket.prototype.oldSendImpl = WebSocket.prototype.send;
                    WebSocket.prototype.send =
                        function (data) {
                            this.oldSendImpl(data);
                                this.addEventListener(
                                    "message",
                                    async (e) => {
                                        const sleep = ms => new Promise(r => setTimeout(r, ms));
                                        const data = JSON.parse(e.data);
                                        if (data.error) return;
                                        const payload = data.payload;

                                        switch (data.type) {
                                            case "s_link_info":
                                                notyf.success("got link info")
                                                if (payload.socials) socials.push(...payload.socials);
                                                const monetizationTypes = ["readArticles", "browserExtension"];
                                                for (const type of monetizationTypes) {
                                                    if (payload.monetizationScript.includes(type)) {
                                                        activeMonetizationTypes.push(type)
                                                    }
                                                }
                                                break;
                                            case "s_start_recaptcha_check":
                                                this.oldSendImpl(payloads.captcha);
                                                break;
                                            case "s_recaptcha_okay":
                                                if (socials.length) {
                                                    for (const [index, social] of socials.entries()) {
                                                        notyf.success(`performing social #${index+1}`)
                                                        this.oldSendImpl(payloads.social(social.url));
                                                        await sleep(3 * 1000);
                                                    }
                                                }

                                                if (activeMonetizationTypes.length) {
                                                    for (const type of activeMonetizationTypes) {
                                                        switch (type) {
                                                            case "readArticles":
                                                                notyf.success("reading articles...")
                                                                this.oldSendImpl(payloads.readArticles["1"]);
                                                                this.oldSendImpl(payloads.readArticles["2"]);
                                                                break;
                                                            case "browserExtension":
                                                                notyf.success("skipping browser extension step")
                                                                if (activeMonetizationTypes.includes("readArticles")) await sleep(11 * 1000);
                                                                this.oldSendImpl(payloads.browserExtension["1"])
                                                                break;
                                                        }
                                                    }
                                                }
                                                break;
                                            case "s_monetization":
                                                if (payload.type !== "browserExtension") break;
                                                this.oldSendImpl(payloads.browserExtension["2"](payload.payload.token))
                                                break;
                                            case "s_link_destination":
                                                notyf.success("done!")
                                                const url = new URL(payload.url);
                                                localStorage.clear(window.location.href);
                                                if (url.searchParams.has("duf")) {
                                                    window.location.href = window.atob(url.searchParams.get("duf").split("").reverse().join(""))
                                                };
                                                window.location.href = payload.url;
                                                break;
                                        }
                                    },
                                    false
                                );
                            this.send =
                                function (data) {
                                    this.oldSendImpl(data);
                                };
                        }
                        notyf.success("patched websocket")
                    let socials = [];
                    let activeMonetizationTypes = [];
                } else if (window.location.hostname == "workink.click") {
                    const uuid = new URLSearchParams(window.location.search).get("t")
                    fetch(`https://redirect-api.work.ink/externalPopups/${uuid}/pageOpened`);
                    await new Promise(r => setTimeout(r, 11 * 1000));
                    const { destination } = await fetch(`https://redirect-api.work.ink/externalPopups/${uuid}/destination`).then(r => r.json());
                    const url = new URL(destination);
                    if (url.searchParams.has("duf")) {
                        window.location.href = window.atob(url.searchParams.get("duf").split("").reverse().join(""))
                    };
                    window.location.href = destination;
                    notyf.success("wait 11 seconds")
                } else {
                    if (new URL(window.location.href).searchParams.has("duf")) {
                        var link = document.createElement("a");
                        link.referrerPolicy = "no-referrer";
                        link.rel = "noreferrer";

                        link.href = window.atob(new URL(window.location.href).searchParams.get("duf").split("").reverse().join(""));
                        link.click();
                    };
                }
            })();
            //--Original script ends here--
        });
    }
})();
// ----- ----- -----
