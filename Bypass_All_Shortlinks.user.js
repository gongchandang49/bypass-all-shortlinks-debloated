// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version        93.1.15
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
// @match *://*.aprovax.com/*
// @match *://*.lootcash.vip/*
// @match *://*.mixrootmods.com/*
// @match *://*.duplichecke.com/*
// @match *://*.dreamistore.com/*
// @match *://*.techyadjectives.com/*
// @match *://*.cyberstockofficial.in/*
// @match *://*.mkvflix.org/*
// @match *://*.link.bicolink.net/*
// @match *://*.infinityskull.com/*
// @match *://*.sakarnewz.com/*
// @match *://*.link.linksfire.co/*
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
// @match *://*.birlink.vip/*
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
// @match *://*.buzzheavier.com/*
// @match *://*.filemoon.sx/*
// @match *://*.bestfonts.pro/*
// @match *://*.oyroid.com/*
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
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @match *://*.anonym.ninja/*
// @match *://*.vosan.co/*
// @match *://*.apkmody.io/*
// @match *://*.mdfx9dc8n.net/*
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
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
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
// @include /^(https?:\/\/)(.+)?((thecubexguide|miuiflash).com|(djxmaza|jytechs).in)(\/.*)/
// @match *://*.filedm.com/*
// @match *://*.gogodl.com/*
// @match *://*.turbobit.net/*
// @match *://*.4shared.com/*
// @match *://*.keeplinks.org/*
// @match *://*.1short.io/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.onimports.com.br/*
// @match *://*.1shortlink.com/*
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.linegee.net/*
// @match *://*.pro.sh/*
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.render-state.to/*
// @match *://*.linkpay.cc/*
// @include /^(https?:\/\/)(.+)?(cooklike.info|model-tas-terbaru.com)(\/.*)/
// @match *://*.kisalt.digital/*
// @include /^(https?:\/\/)(.+)?(bildirim.in|bildirim.eu|bildirim.link)(\/.*)/
// @match *://*.enlacito.com/*
// @match *://*.webhostingtips.club/*
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @match *://*.dilink.net/*
// @match *://*.ontechhindi.com/*
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @match *://*.gameblog.in/*
// @match *://*.sharetext.me/*
// @match *://*.btcsatoshi.net/*
// @include /^(https?:\/\/)(.+)?((cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(sfl.gl|moneyblink.com)(\/.*)/
// @match *://*.comohoy.com/*
// @match *://*.apkw.ru/*
// @include /^(https?:\/\/)(.+)?(cryptomonitor.in|2the.space|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((newsbawa|utkarshonlinetest|techbezzie).com)(\/.*)/
// @match *://*.programasvirtualespc.net/*
// @include /^(https?:\/\/)(.+)?(horoscop.info|infonerd.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcrypto.info|offerinfo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitzite.com|cryptoad.org|article24.online|dailytechz.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinycmd|tinybc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coingraph.us|eblog.pro|writeprofit.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nullscript.info|freebinance.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|indobo|baristakesehatan).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptfaucet.com|izseo.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts|agecalculatorexpert).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((netflixrelease|mangareleasedate|freemodapp|zutiza|phixshop|mp4news|trancebazar|taazaalerts|uskloans|feedaso|djhindustan).com|(myfirstname|ignoupur).in|rrbntpc2024.net|mdsuuniversity.org|odishadjs.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto2u|bestcoinsites).xyz)(\/.*)/
// @match *://*.fansonlinehub.com/*
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|earnme.club|usanewstoday.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @match *://*.terabox.fun/*
// @match *://*.ayelads.com/*
// @match *://*.karyawan.co.id/*
// @match *://*.icerik.site/*
// @match *://*.ponselharian.com/*
// @match *://*.assettoworld.com/*
// @match *://*.adfoc.us/*
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @match *://*.oii.io/*
// @match *://*.cpu-miner.leaks.work/*
// @include /^(https?:\/\/)(.+)?(mrproblogger.com|themezon.net|travelkuku.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(forex-golds.com|forex-trnd.com)(\/.*)/
// @match *://*.1link.club/*
// @match *://*.slink.bid/*
// @match *://*.1mlink.vip/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.zegtrends.com/*
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bcvc.xyz|bcvc.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bitcoinfaucet.fun|freebitcoin.win)(\/.*)/
// @match *://*.bestadvise4u.com/*
// @match *://*.linkspy.cc/*
// @include /^(https?:\/\/)(.+)?((webhostingpost|tophostingapp|digitalmarktrend).com)(\/.*)/
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
// @match *://*.leitup.com/*
// @match *://*.offeroc.com/*
// @include /^(https?:\/\/)(.+)?(azmath.info|expertvn.com)(\/.*)/
// @match *://*.newassets.hcaptcha.com/*
// @include /^(https?:\/\/)(.+)?((ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth).in)(\/.*)/
// @match *://*.freebitco.in/*
// @match *://*.mazen-ve3.com/*
// @match *://*.soft3arbi.com/*
// @include /^(https?:\/\/)(.+)?((120898|141989|161989|131989|121989|151989).xyz)(\/.*)/
// @match *://*.shortearn.net/*
// @include /^(https?:\/\/)(.+)?((coinsward|blogsward).com|imbb.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1bit.space|mgnet.xyz)(\/.*)/
// @match *://*.bigbtc.win/*
// @match *://*.firefaucet.win/*
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @include /^(https?:\/\/)(.+)?(tmail.io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(mrgec|emxaw|ijvam|falpus).com|evernia.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|bedrat.xyz|(offeergames|todogame).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((leaveadvice|mensventure).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(jameeltips.us|cryptonworld.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hynews.biz|chamcuuhoc.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
// @match *://*.skiplink.me/*
// @match *://*.apanmusic.in/*
// @match *://*.o-pro.online/*
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @match *://*.easyworldbusiness.com/*
// @match *://*.getzen.cash/*
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(deportealdia.live|noweconomy.live|techgeek.digital)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|importantclass).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(computerpedia.in|advicefunda.com)(\/.*)/
// @match *://*.linkatla.com/*
// @match *://*.claimfreetrx.online/*
// @include /^(https?:\/\/)(.+)?(offers4crypto.xyz|ewall.biz)(\/.*)/
// @match *://*.dl.lk21static.xyz/*
// @match *://*.easylink.gamingwithtr.com/*
// @include /^(https?:\/\/)(.+)?(copy-paste-fonts.com|cryptednews.space)(\/.*)/
// @match *://*.solarchaine.com/*
// @include /^(https?:\/\/)(.+)?((remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?((computerpedia|techconnection).in|(myprivatejobs|advicefunda|cheakloan).com|bestloanoffer.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud)(\/.*)/
// @match *://*.revly.click/*
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?((theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|blog-myst|ins-myst|blogmystt|healthmyst|wp2hostt|policiesreview).com|clk.wiki|(oko|aii).sh|clk.kim)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((calmgram|adbitfly|blogsward).com|adbitfly.in)(\/.*)/
// @match *://*.shorterall.com/*
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun)(\/.*)/
// @include /^(https?:\/\/)(.+)?((crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online)(\/.*)/
// @match *://*.playnano.online/*
// @include /^(https?:\/\/)(.+)?(donia2tech.com|blog.techeysub.online|minersim.com)(\/.*)/
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @include /^(https?:\/\/)(.+)?(tutwuri.id|besargaji.com)(\/.*)/
// @match *://*.autodime.com/*
// @match *://*.amritadrino.com/*
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(lyricsbaazaar.com|ezeviral.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro)(\/.*)/
// @match *://*.coinsrev.com/*
// @match *://*.zubatecno.com/*
// @include /^(https?:\/\/)(.+)?((wooseotools|woowebtools).com)(\/.*)/
// @match *://*.adwerty.com/*
// @include /^(https?:\/\/)(.+)?((pernahsukses|alpinecorporate).com|aoutoqw.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(altechen.com|entutes.com)(\/.*)/
// @match *://*.socialwolvez.com/*
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @match *://*.bitcotasks.com/*
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @include /^(https?:\/\/)(.+)?((hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmiz|snaplessons).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(link.goto.com.np|(appkamods|bankvacency|otomi-games).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze).com|(financewrapper|recipes4all).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tradeshowrating|historyofyesterday).com)(\/.*)/
// @match *://*.playonpc.online/*
// @match *://*.shortit.pw/*
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io)(\/.*)/
// @match *://*.ify.ac/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.file-upload.in/*
// @match *://*.upmienphi.com/*
// @match *://*.linksly.co/*
// @match *://*.cashando.me/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.sugarona.com/*
// @match *://*.cekip.site/*
// @match *://*.techleets.xyz/*
// @match *://*.amanguides.com/*
// @match *://*.mirrored.to/*
// @match *://*.flybid.net/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.mohtawaa.com/*
// @match *://*.sub2unlock.com/*
// @include /^(https?:\/\/)(.+)?(thebloggerspoint.in|ezeviral.com)(\/.*)/
// @match *://*.rockmods.net/*
// @match *://*.doodjob.com/*
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cricketgurupro|travelkuku).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bluemedialink.online|bluemediafile\.*)/
// @match *://*.boost.ink/*
// @match *://*.blog.textpage.xyz/*
// @match *://*.foodupe.com/*
// @match *://*.freethailottery.live/*
// @match *://*.udrop.com/*
// @match *://*.sub2unlock.net/*
// @include /^(https?:\/\/)(.+)?((starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link)(\/.*)/
// @match *://*.mboost.me/*
// @include /^(https?:\/\/)(.+)?((disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz)(\/.*)/
// @match *://*.aiimgvlog.fun/*
// @include /^(https?:\/\/)(.+)?(dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz)(\/.*)/
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.gocmod.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.ruwet.us/*
// @match *://*.hrpunjab.in/*
// @match *://*.autodime.com/*
// @match *://*.zubatecno.com/*
// @match *://*.hiharshit.in/*
// @match *://*.tanytech.com/*
// @match *://*.healthynepal.in/*
// @match *://*.vslinks.online/*
// @match *://*.1apple.xyz/*
// @match *://*.recipejaano.com/*
// @match *://*.dilmibriva.store/*
// @match *://*.caraccidants.xyz/*
// @match *://*.videolyrics.in/*
// @match *://*.trendtrove.vip/*
// @match *://*.blogsward.com/*
// @match *://*.nisnisin.com/*
// @match *://*.candleoflife.fun/*
// @match *://*.suntechu.in/*
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
// @match *://*.cinemapettai.in/*
// @match *://*.market.gorating.in/*
// @match *://*.videoslyrics.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.prakasheditingtamizhan.com/*
// @match *://*.mmdrive.xyz/*
// @match *://*.reminimod.co/*
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
// @match *://*.techurlshort.in/*
// @match *://*.battleroyal.online/*
// @match *://*.rajdhanimaja.com/*
// @include /^(https?:\/\/)(.+)?(apasih.my.id|healthydad.my.id)(\/.*)/
// @match *://*.iphoto.site/*
// @include /^(https?:\/\/)(.+)?((gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nguyenvanbao.com|nghiencar.com)(\/.*)/
// @match *://*.mohtawaa.com/*
// @include /^(https?:\/\/)(.+)?(btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vailonxx.com|fun88.bio)(\/.*)/
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
// @match *://*.gamerfang.in/*
// @match *://*.videolyrics.in/*
// @match *://*.blog.mphealth.online/*
// @match *://*.techrayzer.com/*
// @match *://*.economiarelevante.com.br/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @match *://*.www.gifans.com/*
// @match *://*.zonearn.biz/*
// @match *://*.nulledsafe.com/*
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
// @match *://*.videolyrics.in/*
// @match *://*.terafly.me/*
// @match *://*.adnews.me/*
// @match *://*.kyshort.xyz/*
// @match *://*.eazyurl.xyz/*
// @match *://*.linksfly.top/*
// @match *://*.playstore.pw/*
// @grant        GM.xmlHttpRequest
// @match        https://acortalink.me/*
// @match         https://bleleadersto.com/s?*
// @match         https://tonordersitye.com/s?*
// @match         https://daughablelea.com/s?*
// @match         https://linkvertise.com/*
// @match        https://bypass.city/bypass?bypass=*
// @match        https://adbypass.org/bypass?bypass=*
// @match       https://fc-lc.xyz/*
// @match        https://paster.so/*
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/
// @include     /comohoy.com/
// @include     /privatenudes.com\/model/
// @include     /sphinxanime.com\/short/
// @include     /japanpaw.com\/out/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /cybercityhelp.in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.(us|site|cc|vip|dev|ink)/
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /exeo.app|mrgec.com|cety.app/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /linkspy.cc\/\/a/
// @include     /www.ovagames.com\/.*\.html$/
// @include     /((infytips|remixodiadj).in|(cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top|kvkparbhani.org|kk.offerboom.top)/
// @include     /dropgalaxy.(com|co)\/drive/
// @include     /short-ly.co/
// @include     /uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/
// @include     /blogging.techworldx.net|10beasts.biz/
// @include     /starsddl.me\/short/
// @include     /tech.unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu|megaspremium|premiumstashdrop|teenspremium|utopianleaks|kmendation|eofmukindwo|realiukzemydre|daughablelea|tonordersitye|bleleadersto).com)|best-links.org\/s\?/
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
// @include     /(cravesandflames|codesnse|cloutgist).com/
// @include     /go.(cravesandflames|codesnse|cloutgist).com/
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
// @include     /(utkarshonlinetest|newsbawa).com/
// @include     /techtnet.com/
// @include     /asideway.com/
// @include     /web1s.asia\/api-mode/
// @include     /(linkvip|blitly).io/
// @include     /^https:\/\/megalink.pro\/[a-zA-Z0-9]+$/
// @include     /lnbz.la/
// @include     /indianshortner.com|lnbz.la|oii.la|falpus.com|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com/
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
// @include     /flash.getpczone.com/
// @include     /surfsees.com|fitnessholic.net/
// @include     /cgsonglyricz.in|www.techhubcap.com/
// @include     /techyblogs.in|readytechflip.com/
// @include     /wp2host.com/
// @include     /pahe.win/
// @include     /ontechhindi.com/
// @include     /thelatintwistcafe.com/
// @include     /newshuta.in|indiamaja.com/
// @include     /jytechs.in|mi.miuiflash.com|hypershort.com|djxmaza.in|thecubexguide.com/
// @include     /mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org/
// @include     /animesgd.net/
// @include     /tucinehd.com\/links/
// @include     /render-state.to\/download\/\?link=/
// @include     /www.lanoticia.cc/
// @include     /altearnativasa.com/
// @include     /importantclass.com/
// @include     /bebkub.com/
// @include     /secure.moderngyan.com/
// @include     /earnbox.sattakingcharts.in/
// @include     /set.seturl.in/
// @include     /links.kmhd.net\/file/
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
// @include     /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime).com|(sabarpratham|pubprofit|sarkariyojnaa).in|dear-lottery.org/
// @include     /rocklinks.in/
// @include     /www.udlinks.com/
// @include     /techkhulasha.com|blog.bloggerishyt.in/
// @include     /golink.bloggerishyt.in/
// @include     /skillheadlines.in/
// @include     /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in/
// @include     /www.spaste.com/
// @include     /click.convertkit-mail.com/
// @include     /hubcloud.club\/tg\/go.php\?re=/
// @include     /stockwallah.com/
// @include     /^https:\/\/relampagomovies\.com\/.+/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|tejtime24.com/
// @include     /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/
// @include     /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /delpez.com/
// @include      /filecrypt.(cc|co)/
// @include     /(mega-enlace|acortados).com/
// @include     /^https:\/\/.*\.(tradeshowrating.com|historyofyesterday.com|playonpc.online)\/.*/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay).com|(makego|sakazi|momge).net|askerlikforum.com.tr|misterio.ro|(forp|bevery).xyz)(\/.*)/
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|gsshort|substitutefor|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|(login|signup|account|officeapps|api|mail|hotmail).live|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles|atlassian|pinterest|twitter|facebook|tiktok|instagram|linkedin|fastbull|tradingview).com|(coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|doubleclick|luckydice).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|insurancegold.in|coinscap.info|chefknives.expert|(sleeptube|englishwritingsite|documentaryplanet|gsgames).xyz|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
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
//                        Thanks so much to @varram for providing a Great Bypass Site bypass.city and adbypass.org
//                                And also Thank you to everyone who has Contributed with Good Feedback.
// =================================================================================================================================================================
// NOTES
// Popup should be Allowed for render-state.to and coincroco.com sites
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc

   const window = unsafeWindow; // Some of My Codes Not Running Well Without this , Please Let Me Know if You Find any Bugs
   const cfg = new MonkeyConfig({title: 'Bypass Version 93.0 Settings :', menuCommand: true,
   params: {Announcements : {type: 'text', default: 'Add Your ApiKey from nocaptchaai to use Auto Solve Hcaptcha', long: 3},
    ApiKey: {label: "noCaptcha Ai KEY", type: "text", default: "",},
    SetDelay: {label: "Redirect Delay ", type: "number", default: 5,},
    BlogDelay: {label: "Use My Blogs For Delays", type: "checkbox", default: false,},
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
  function Captchacheck(selector) {if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {return window.hcaptcha.getResponse().length !== 0;
    } else if (elementExists("input[name='cf-turnstile-response']")) {return window.turnstile.getResponse().length !== 0;} else if (elementExists("iframe[title='reCAPTCHA']")) {return window.grecaptcha.getResponse().length !== 0;
    } else if (elementExists('#iconcaptcha')) {let b = setInterval(() => {let p = bp('.iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success'); if (p) {clearInterval(b); SubmitBp(selector, 1);}}, 1000);} else {return;}}
  function notify(txt, duration = cfg.get('SetDelay')) {const m = document.createElement('div'); m.style.padding = '1px'; m.style.zIndex = 99999999; m.style.position = 'fixed';
    m.style.width = `970px`; m.style.top = '275px'; m.style.left = `${innerWidth / 2 - 485}px`; m.style.font = 'normal bold 17px sans-serif'; m.style.backgroundColor = 'gold'; m.style.boxSizing = 'border-box';
    m.innerText = txt.replace('@', duration); document.documentElement.appendChild(m); const timerId = setInterval(() => {duration -= 1; if (duration <= 0) {clearInterval(timerId);} else {m.innerText = txt.replace('@', duration);}}, 1000);}
  function Listener(callback) {const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", function() { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function EnableRCF() {[].forEach.call(['contextmenu', 'visibilitychange', 'cut', 'paste', 'blur', 'mouseleave', 'keyup', 'drag', 'dragstart', 'hasFocus', 'focus', 'select', 'selectstart', 'webkitvisibilitychange', 'mozvisibilitychange'], function(event) {document.addEventListener(event, function(e) {e.stopPropagation();}, true);});}

  BloggerPemula('gocmod.com', 'urls', '');
  BloggerPemula('writedroid.in', 'token', '');
  BloggerPemula('web1s.com', 'token,url', '');
  BloggerPemula('modmania.eu.org', 'token', '');
  BlockRead('(4d-bl0ck3r|ad-blocker)', 'setTimeout');
  BloggerPemula('ruwet.us', 'link', 'https://yo.adlinku.com/');
  BloggerPemula('hrpunjab.in', 'grey', 'https://go.linkco.pro/');
  BloggerPemula('autodime.com', 'go', 'https://go.linkrex.net/');
  BloggerPemula('zubatecno.com', 'link', 'https://go.flyzu.icu/');
  //BloggerPemula('veganab.co', 'link', 'https://techy.veganab.co/');
  BloggerPemula('hiharshit.in', 'post', 'https://easytoclick.in/');
  BloggerPemula('tanytech.com', 'link', 'https://go.hexlinks.xyz/');
  BloggerPemula('healthynepal.in', 'post', 'https://ez4short.xyz/');
  BloggerPemula('vslinks.online', 'link', 'https://ad.vslinks.in/');
  BloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/');
  BloggerPemula('recipejaano.com', 'link', 'https://ads.kbfly.in/');
  BloggerPemula('dilmibriva.store', 'post', 'https://cutplus.xyz/');
  BloggerPemula('caraccidants.xyz', 'link', 'https://shorterx.com/');
  BloggerPemula('videolyrics.in', 'p', 'https://ser3.crazyblog.in/');
  BloggerPemula('trendtrove.vip', 'post', 'https://tinylinker.pro/');
  BloggerPemula('blogsward.com', 'adlinkfly', 'https://linkpay.top/');
  BloggerPemula('nisnisin.com', 'link', 'https://link.ezlinkad.com/');
  BloggerPemula('candleoflife.fun', 'token', 'https://shortsurl.pro/');
  BloggerPemula('suntechu.in', 'post', 'https://web.urllinkshort.in/');
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
  BloggerPemula('cinemapettai.in', 'post', 'https://getlink.sxslink.com/');
  BlockRead('(/adblock|/ad-now.php|/bypass|/detected.html)', 'setInterval');
  BloggerPemula('market.gorating.in', 'link', 'https://go.onepagelink.in/');
  BloggerPemula('videoslyrics.com', 'postid', 'https://ser3.crazyblog.in/');
  BloggerPemula('earn.tensailab.com', 'adlinkfly', 'https://go.snaply.in/');
  BloggerPemula('postazap.com', 'link', 'https://encurtador.postazap.com/');
  BloggerPemula('mamahawa.com', 'get', 'https://forextrader.site/SkipLink/');
  BloggerPemula('prakasheditingtamizhan.com', 'link', 'https://kpslink.in/');
  BloggerPemula('mmdrive.xyz', 'link', 'https://techleets.xyz/no.php?link=');
  BloggerPemula('reminimod.co', 'land', 'https://insurance.techymedies.com/');
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
  BloggerPemula('techurlshort.in', 'grey', 'https://hrpunjab.in/savise.php?grey=');
  BloggerPemula('battleroyal.online', 'link', 'https://zubatecno.com/safe.php?link=');
  BloggerPemula('rajdhanimaja.com', 'grey', 'https://techurlshort.in/inuser.php?grey=');
  //BloggerPemula('highkeyfinance.com', 'landhere', 'https://insurance.techymedies.com/');
  BloggerPemula('apasih.my.id|healthydad.my.id', 'link', 'https://link.get4llink.com/');
  //BloggerPemula('financeyogi.net', 'link', 'https://market.finclub.in/safe2.php?link=');
  BloggerPemula('iphoto.site', 'post', 'https://vietnamtravelguide.top/token.php?post=');
  BloggerPemula('(gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com', 'link', '');
  BypassedByBloggerPemula(/aprovax.com/, {'/': [RexBp, 'https://paylinnk.com/'],}, false);
  BypassedByBloggerPemula(/lootcash.vip/, {'/verify/': [RexBp, 'http://ads.lootcash.vip/'],}, false);
  BypassedByBloggerPemula(/mixrootmods.com/, function() {EnableRCF();window.checkStatus = window.off;});
  BypassedByBloggerPemula(/duplichecke.com/, {'/verify/': [RexBp, 'http://blog.dclink.site/'],}, false);
  BypassedByBloggerPemula(/dreamistore.com/, {'/verify/': [RexBp, 'http://final.eductin.com/'],}, false);
  BypassedByBloggerPemula(/techyadjectives.com/, {'/check/': [RexBp, 'https://demo.pvidly.in/'],}, false);
  BypassedByBloggerPemula(/cyberstockofficial.in/, {'/cook.php': [RexBp, 'http://cyberurl.in/'],}, false);
  BypassedByBloggerPemula(/mkvflix.org/, {'/verify/': [RexBp, 'http://go.superfastdownloads.net/'],}, false);
  BypassedByBloggerPemula(/link.bicolink.net/, function() {location = location.href.replace('link', 'go');});
  //BypassedByBloggerPemula(/link.vipurl.in/, function() {location = location.href.replace('link', 'count');});
  BypassedByBloggerPemula(/infinityskull.com/, {'/safe.php': ['link', 'https://go.publicearn.com/'],}, false);
  BypassedByBloggerPemula(/sakarnewz.com/, {'/multi/': [RexBp, 'http://multiquality.xyz/download/'],}, false);
  BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');});
  BypassedByBloggerPemula(/speedynews.xyz/, {'/blog/verify/': [RexBp, 'https://links.speedynews.xyz/'],}, false);
  BypassedByBloggerPemula(/studyuo.com/, {'/pro2/verify/': [RexBp, 'https://speedynews.xyz/blog/verify/?'],}, false);
  BypassedByBloggerPemula(/go.link4rev.site|go.urlcash.site/, function() {location = location.href.replace('go.', '');});
  BypassedByBloggerPemula(/olhonagrana.com/, {'/verify/': [RexBp, 'http://paylinnk.com/'],'/': [RexBp, 'https://syflink.com/']}, false);
  BypassedByBloggerPemula(/dutchycorp.space/, function() {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  BypassedByBloggerPemula(/link.birdurls.com|link.owllink.net|link.illink.net/, function() {location = location.href.replace('link.', '');});
  BypassedByBloggerPemula(/vk.com/, function() {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));} else {}});
  BypassedByBloggerPemula(/(teachsansar|technicalatg|foodxor).com/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
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
      case 'gplinks.in': case 'linkjust.com': case 'sl.btc25.org': case 'linkfly.me': case 'linksfire.co': case 'adlink.click':
      case 'gigafly.me': case 'traffic1s.com': case 'link4rev.site': case 'linkrex.net': case 'opli.xyz': case 'www.clink2.com': case 'linksly.co':
      case 'shortyearn.com': case 'upshrink.com': case 'tr.link': case 'nanolinks.in': case 'megaurl.in': case 'adshort.co': case 'atglinks.comk':
      case 'shrinkforearn.in': case 'shorti.io': case 'try2link.com': case 'terafly.me': case 'www.wts.pw': case 'web1s.com': case 'rocklinks.net':
      case 'megafly.in': case 'smartlink.vip': case 'usalink.io': case 'birdurls.com': case 'adrinolinks.in': case '10short.com': case 'urlpay.in':
      case 'mdiskshortner.link': case 'cbshort.com': case 'besturl.link': case 'clk.sh': case 'droplink.co': case 'adpaylink.com': case 'botfly.me':
      case 'paid4link.com': case 'owllink.net': case 'cuty.io': case 'octolinkz.com': case 'doshrink.com': case 'cashando.me':
      case 'revly.click': case 'shorterall.com': case 'shrinkearn.com': case 'shrinkme.io': case 'shortox.com': case 'linksfly.link': case 'oii.io':
      case 'ay.live': case 'timeforearn.com': case 'urlstox.com': case 'lollty.com':var ApiandUrl = h.searchParams.has('api') && h.searchParams.has('url');
        if (ApiandUrl && h.href.includes('solarchaine.com') || h.href.includes('hr.vikashmewada.com') || h.href.includes('sclick.crazyblog.in') || h.href.includes('ser7.crazyblog.in')) { return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('freeltc.top') || h.href.includes('freecrypto.top') || h.href.includes('insfly.pw') || h.href.includes('Insfly.pw') || h.href.includes('mdiskshortner.link') || h.href.includes('clockads.in') || h.href.includes('exashorts.fun') || h.href.includes('videolyrics.in')) {} else if (ApiandUrl && h.href.includes('terafly.me')) {
          return 'https://' + h.searchParams.getAll('url');
        } else if (ApiandUrl && h.href.includes('adnews.me')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/adnews.me/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('kyshort.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/kyshort.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('eazyurl.xyz')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/eazyurl.xyz/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('linksfly.top')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/linksfly.top/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('playstore.pw')) {return h.searchParams.getAll('url').filter(u => /http(s|):\/\/playstore.pw/.test(u))[0];
        } else if (ApiandUrl && h.href.includes('#')) {return h.searchParams.getAll('url') + window.location.hash;
        } else if (h.searchParams.has('api') && h.searchParams.has('url')) {return h.searchParams.getAll('url');} break; default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (cfg.get('BlockFC') == true) {NoFocus();} else {}
  if (cfg.get('RightFC') == true) {EnableRCF();} else {}
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    RemoveBp('nguyenvanbao.com|nghiencar.com', '.content-area,.site-content');
    RemoveBp('mohtawaa.com', 'div.form-group > div,.col-sm-12.col-lg-3.col,li,h3,h4,p,.col-sm-12.col-lg-8.col,h2');
    RemoveBp('btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com', "button[onclick^='window.location']");
    RemoveBp('mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org', "form input[value^='Continue'],form[id] div[style^='margin:']");
    RemoveBp('vailonxx.com|fun88.bio', '.page-header,div.col-xl-3.col-lg-3.col-md-4.col-6,.hero-text,#wrapper-navbar,.happy-section,#wrapper-footer,.col-12.d-md-block.d-none,.col-12.d-md-none.d-block,.modal-dialog');
    let Numcode = bp('input.captcha_code');let DigitNum; function getLeft(d) {return parseInt(d.style.paddingLeft);} if (Numcode) {DigitNum = Numcode.parentElement.previousElementSibling.children[0].children; Numcode.value = [].slice.call(DigitNum).sort(function(d1, d2) {return getLeft(d1) - getLeft(d2);}).map(function(d) {return d.textContent;}).join('');}
    let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'];let List1 = ['ay.live', 'aylink.co', 'gitlink.pro']; let $ = window.jQuery; let respect = ''; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
    if (List.includes(location.host)) {ClickIfExists('a.btn.btn-success.btn-lg.get-link', 3, 'setInterval');
    } else if (List1.includes(location.host)) { var form = $('form[id=go-link]');$.ajax({type: 'POST', async: true, url: form.attr('action'),data: form.serialize(),dataType: 'json',
        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {}
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
      switch (h.host) {
        case 'okrzone.com': if (b) {meta('https://gtlink.co/' + RegExp.$1);} break;
        case 'gamerfang.in': if (b) {meta('https://faux.gamerfang.in/tech/' + RegExp.$1);} break;
        case 'videolyrics.in': if (b) {meta('https://cryptolink.trxking.xyz/' + RegExp.$1);} break;
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
      if (isNotifyNeeded) {notify(``);}
      setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    // My Script will automatically download from the site below , Enable it from the Settings
    if (cfg.get('AutoDL') == true) {
    BypassedByBloggerPemula(/upload.ee/, function() {ClickIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/appdrive\.*/, function() {ClickIfExists('#drc', 2);});
    BypassedByBloggerPemula(/dddrive.me/, function() {ClickIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/uppit.com/, function() {ClickIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, function() {ClickIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/gofile.io/, function() {waitForElm('a.me-1', gfBtn => gfBtn.click());});
    BypassedByBloggerPemula(/birlink.vip/, function() {ClickIfExists('.btn-lg.btn-success.btn', 2);});
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
    BypassedByBloggerPemula(/buzzheavier.com/, function() {waitForElm('#download-link', bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/filemoon.sx/, () => waitForElm('div.download2 a.button', fm => redirect(fm.href, false)));
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/oyroid.com/, function() {window.triggerFreeDownload();ReadytoClick('.py-3.w-100.btn-success.btn', 5);});
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
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, function() {ClickIfExists("input[name='method_free']", 2);
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
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, function() {ClickIfExists('.mngez-free-download', 2);
      ClickIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
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
    BypassedByBloggerPemula(/(thecubexguide|miuiflash).com|(djxmaza|jytechs).in/, function() {if (elementExists('.premium')) {
        ReadytoClick('a#dlbtn.btn.btn-secondary.btn-block.mb-4', 2);ClickIfExists('#downloadbtnf', 3);ClickIfExists('#downloadbtn', 4, 'setInterval');} else {}});
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

    BypassedByBloggerPemula(/keeplinks.org/, function() {ClickIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/1short.io/, function() {SubmitIfExists('#countDownForm', 7);});
    BypassedByBloggerPemula(/earnlink.io/, function() {ClickIfExists('.btn-secondary', 3);});
    BypassedByBloggerPemula(/mkomsel.com/, function() {ClickIfExists('#downloadfile', 12);});
    BypassedByBloggerPemula(/onimports.com.br/, function() {ClickIfExists('#finalLink', 2);});
    BypassedByBloggerPemula(/1shortlink.com/, function() {ClickIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, function() {ClickIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/jameeltips.us/, function() {ClickIfExists('#continue_button_1', 1);});
    BypassedByBloggerPemula(/post.copydev.com/, function() {ClickIfExists('.btn-success.btn', 6);});
    BypassedByBloggerPemula(/linegee.net/, function() {ClickIfExists('.btn-xs.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/pro.sh/, function() {ClickIfExists('.btn-secondary', 3, 'setInterval');});
    BypassedByBloggerPemula(/proappapk.com|meclipstudy.in/, function() {ClickIfExists('#gotolink', 5);});
    BypassedByBloggerPemula(/1bitspace.com/, function() {ClickIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/cshort.org/, function() {ClickIfExists('.timer.redirect', 3, 'setInterval');});
    BypassedByBloggerPemula(/render-state.to/, function() {if (BpParams.has('link')) {window.goToLink();}});
    BypassedByBloggerPemula(/linkpay.cc/, function() {parent.open = BpBlock(); SubmitIfExists('#link-view', 1);});
    BypassedByBloggerPemula(/cooklike.info|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false);
    BypassedByBloggerPemula(/kisalt.digital/, function() {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/bildirim.in|bildirim.eu|bildirim.link/, function() {ClickIfExists('#btnPermission', 1);});
    BypassedByBloggerPemula(/enlacito.com/, function() {setTimeout(() => {redirect(window.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/webhostingtips.club/, {'/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/shareus.io/, function() {if (BpParams.has('sid')) {ReadytoClick('button.MuiButtonBase-root', 2);}});
    BypassedByBloggerPemula(/adtival.network/, function() {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/dilink.net/, function() {if (typeof(window.url_done) !== 'string') return; redirect(window.url_done);});
    BypassedByBloggerPemula(/ontechhindi.com/, function() {EnableRCF();waitForElm('#rtg-generate21 > a', oth => redirect(oth.href, false));});
    BypassedByBloggerPemula(/gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online/, function() {ClickIfExists('#mdt', 3);});
    BypassedByBloggerPemula(/gameblog.in/, function() {EnableRCF();SubmitBp('input[type=hidden]', 3);ClickIfExists("div[id^=wpsafe-link] > a", 4);});
    BypassedByBloggerPemula(/sharetext.me/, function() {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/btcsatoshi.net/, async function() {EnableRCF();window.check2();window.check3();ClickIfExists('button.btn.btn-primary.btn-lg');});
    BypassedByBloggerPemula(/(cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online/, function(){ClickIfExists('#submit-button', 5, 'setInterval');});
    BypassedByBloggerPemula(/sfl.gl|moneyblink.com/, function() {if (location.href.includes('/ready') && BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/comohoy.com/, function() {if (location.href.includes('/grab/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/apkw.ru/, function() {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw),false);}});
    BypassedByBloggerPemula(/cryptomonitor.in|2the.space|imbb.online/, function() {EnableRCF();SubmitIfExists("form[name='dsb']", 3);ClickIfExists('#wpsafe-link > a', 4);});
    BypassedByBloggerPemula(/(newsbawa|utkarshonlinetest|techbezzie).com/, function() {ClickIfExists('#citr-click', 2);ClickIfExists('#citr-click-f', 3);ClickIfExists('#GetLink', 4);});
    BypassedByBloggerPemula(/programasvirtualespc.net/, function() {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);} else {}});
    BypassedByBloggerPemula(/horoscop.info|infonerd.org/, function() {let horos = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(horos.value)).linke,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/(blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro/, function() {if (BpParams.has('r')) {meta(atob(BpParams.get('r')));}});
    BypassedByBloggerPemula(/bitcrypto.info|offerinfo.net/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", bitcry => redirect(strBetween(bitcry.onclick.toString(), `handleClick('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/bitzite.com|cryptoad.org|article24.online|dailytechz.info/, function() {let bitzite = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(bitzite.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/(tinycmd|tinybc).com/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `handleClick('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/coingraph.us|eblog.pro|writeprofit.org/, function() {let Alcatraz = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Alcatraz.value)).linke,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com/, function() {let hostrat = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(hostrat.value)).linkr,false);}, 3 * 1000);});
    BypassedByBloggerPemula(/nullscript.info|freebinance.top/, function() {waitForElm('div#wpsafe-link > a', function(element) {const regex = /redirect=(.*)',/;const m = regex.exec(element.onclick.toString())[1];location.href = JSON.parse(atob(m)).safelink;});});
    BypassedByBloggerPemula(/(10short|lollty).pro|mamahawa.com/, function() {ReadytoClick('center > .btn-success.btn', 3);waitForElm('a#makingdifferenttimer', st1 => redirect(st1.href, false));waitForElm('a#proceed', st2 => redirect(st2.href, false));});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|indobo|baristakesehatan).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/cryptfaucet.com|izseo.net/, function() {window.checkTimeRemaining = true;let cryptf = bp("div[id^=wpsafe] > a[rel=nofollow]");setTimeout(() => {redirect(strBetween(cryptf.onclick.toString(), `window.open('`, `', '_self')`), false);}, 5 * 1000);});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts|agecalculatorexpert).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula(/(netflixrelease|mangareleasedate|freemodapp|zutiza|phixshop|mp4news|trancebazar|taazaalerts|uskloans|feedaso|djhindustan).com|(myfirstname|ignoupur).in|rrbntpc2024.net|mdsuuniversity.org|odishadjs.link/, function() {ClickIfExists('#VerifyBtn', 3);ClickIfExists('#NextBtn', 5, 'setInterval');});
    BypassedByBloggerPemula(/(crypto2u|bestcoinsites).xyz/, function() {if (/^\/shortlink\/([^\/]+)/.test(location.pathname)) {waitForElm('a#btn.btn.btn-success', c2u => redirect(c2u.href, false));} else if (elementExists('.shadow.card')) {waitForElm('a.btn.btn-lg.btn-success.px-4', c2u2 => redirect(c2u2.href, false));}});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics/, () => {ClickIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){ClickIfExists('#tp-snp2.tp-blue.tp-btn', 2);ClickIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/largestpanel.in|earnme.club|usanewstoday.club/, function() {ClickIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/paste1s.com|note1s.com/, function() {ClickIfExists('.btn-lg.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/terabox.fun/, async function() {await sleep(3000);ReadytoClick('.active.btn');});
    BypassedByBloggerPemula(/ayelads.com/, function() {
      ClickIfExists('.btn-bl.btn-primary.btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/karyawan.co.id/, function() {
      ClickIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/icerik.site/, function() {
      ClickIfExists('#csubmit', 2);ClickIfExists('#get_link_btn', 2);});
    BypassedByBloggerPemula(/ponselharian.com/, function() {
      if (elementExists('#link-view')) {window.scrollTo(0, 9999);}});
    BypassedByBloggerPemula(/assettoworld.com/, function() {
      ClickIfExists('.text-capitalize.btn-outline-success.btn', 3);});
    BypassedByBloggerPemula(/adfoc.us/, function() {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, function() {
      SubmitIfExists('#yuidea', 2);ClickIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/oii.io/, function() {parent.open = BpBlock();
      ClickIfExists('button.g-recaptcha.btn.btn-primary', 2);});
    BypassedByBloggerPemula(/cpu-miner.leaks.work/, function() {
      ClickIfExists('.xbtt.btn-primary.btn-lg.btn', 3, 'setInterval');});
    BypassedByBloggerPemula(/mrproblogger.com|themezon.net|travelkuku.com/, function() {
      waitForElm('#btn2.tp-btn', mrBp => mrBp.click());
      waitForElm('div.center-link-items a', thz => redirect(thz.href, false));});
    BypassedByBloggerPemula(/forex-golds.com|forex-trnd.com/, function() {
      parent.open = BpBlock();ClickIfExists('.g-recaptcha', 2);});
    BypassedByBloggerPemula(/1link.club/, function() {
      $("a[target='_blank']").removeAttr("target");ClickIfExists('#download', 1);});
    BypassedByBloggerPemula(/slink.bid/, function() {
      ClickIfExists('#btn-generate', 1);
      ClickIfExists('.btn-success.btn', 5);});
    BypassedByBloggerPemula(/1mlink.vip/, function() {
      ClickIfExists('#invisibleCaptchaShortlink', 2);
      ClickIfExists('.get-link.btn-lg.btn-success.btn', 4);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, function() {
      ClickIfExists('#wcGetLink', 2);ClickIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/zegtrends.com/, function() {SubmitIfExists('#cln', 5);
      ClickIfExists('#bt1', 5);ClickIfExists('#go', 5);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech/, function() {
      waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/bcvc.xyz|bcvc.ink/, function() {
      ClickIfExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 3, 'setInterval');});
    /*BypassedByBloggerPemula(/dear-lottery.org|(superheromaniac|spatsify).com/, function() {
      ClickIfExists('#tp98', 10);SubmitIfExists("form[name='tp']", 11);});*/
    BypassedByBloggerPemula(/bitcoinfaucet.fun|freebitcoin.win/, function() {
      ClickIfExists('#continue2', 3, 'setInterval');ClickIfExists('#continue', 4, 'setInterval');});
    BypassedByBloggerPemula(/bestadvise4u.com/, function() {ClickIfExists('.rd_btn', 1);
      waitForElm('.rd_btn', ba4 => redirect(ba4.href, false));});
    BypassedByBloggerPemula(/linkspy.cc/, function() {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(webhostingpost|tophostingapp|digitalmarktrend).com/, function() {
      SubmitIfExists('form.text-center', 3);ClickIfExists('#surl', 5, 'setInterval');});
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
    BypassedByBloggerPemula(/stfly.me/, function() {
      if (elementExists('.g-recaptcha')) {} else {ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3);}});
    BypassedByBloggerPemula(/khaddavi.net|contentmenarik.com/, function() {parent.open = BpBlock();
      setInterval(function() {if (Captchacheck()) {ClickIfExists('#slu-btn');}}, 500);});
    BypassedByBloggerPemula(/leitup.com/, function() {
      if (elementExists('#button_timer')) {waitForElm('input.form-control', leit => redirect(leit.placeholder, false));}});
    BypassedByBloggerPemula(/offeroc.com/, function() {let ofr = setInterval(() => {
        if (Captchacheck()) {clearInterval(ofr);ClickIfExists('.mt-2.btn-success.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/azmath.info|expertvn.com/, () => {if (elementExists('#megaurl-verified-captcha')) {
      ClickIfExists('button.h-captcha', 3);} else {SubmitIfExists('#megaurl-banner-page', 2);}});
    BypassedByBloggerPemula(/www.google.com|recaptcha.net/, async function() {await sleep(3000) && cfg.get('reCAPTCHA') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('reCAPTCHA') == true) {ReadytoClick('.recaptcha-checkbox-border');} else {}});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {await sleep(3000) && cfg.get('hCaptcha') && cfg.get('ApiKey');
      if (!APIKEY && cfg.get('hCaptcha') == true) {ReadytoClick('#checkbox');} else {}});
    BypassedByBloggerPemula(/(ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co/, function() {SubmitIfExists('div.text-center form', 2);ReadytoClick('#go_d', 1);
      waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href, false));
      waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href, false));});
    BypassedByBloggerPemula(/(bnbfree|freeth).in/, function() {if (elementExists('.h-captcha')) {let btc = setInterval(() => {
      if (Captchacheck()) {clearInterval(btc);ClickIfExists('#free_play_form_button');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/freebitco.in/, function() {if (elementExists('#freeplay_form_cf_turnstile')) {let freebtc = setInterval(() => {
      if (Captchacheck()) {clearInterval(freebtc);ClickIfExists('#free_play_form_button');}}, 1 * 1000);} else {}});
    BypassedByBloggerPemula(/mazen-ve3.com/, function() {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/soft3arbi.com/, function() {EnableRCF();let arbi = setInterval(() => {
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
    BypassedByBloggerPemula(/tmail.io|(gamezizo|fitdynamos).com/, function() { //fc-lc type 2 - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8736277, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/162
      if (elementExists('#next')) {SubmitIfExists('form.text-center', 3);ClickIfExists('#next', 2);ClickIfExists('#glink.button', 15);} else {ClickIfExists('#surl', 5, 'setInterval');}});
    BypassedByBloggerPemula(/(exeo|exego).app|(mrgec|emxaw|ijvam|falpus).com|evernia.site/, function() {ClickIfExists('#invisibleCaptchaShortlink', 2);SubmitIfExists('#before-captcha', 3);
      let exeo = setInterval(() => {if (bp('.timer').innerText == '0') {clearInterval(exeo);ReadytoClick('#submit-button');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(on-scroll|diudemy|maqal360).com/, function() {EnableRCF();let adlink = setInterval(() => {
        if (bp('#countdown').innerText == '0') {clearInterval(adlink);ReadytoClick('#append > :nth-child(1)');}}, 2 * 1000);});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|bedrat.xyz|(offeergames|todogame).online/, function() {
      ClickIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/(leaveadvice|mensventure).com/, function() {let lav = setInterval(() => {
        if (bp('#timer').innerText == '0') {ReadytoClick('#method_free.free-download-btn.download-btn');
          clearInterval(lav); if (!elementExists('.h-captcha')) window.openLink();}}, 2000);});
    /*BypassedByBloggerPemula(/itscybertech.com/, () => {let itscyber = setInterval(() => {if (Captchacheck()) {clearInterval(itscyber);
      ClickIfExists('.visit.medium.button');} else if (Checkvisibility(bp('#gtbtn2'))) {clearInterval(itscyber); window.fngo();}}, 1 * 1000);});*/
    BypassedByBloggerPemula(/jameeltips.us|cryptonworld.space/, function() {
      ClickIfExists('#alf_continue', 3, 'setInterval');});
    BypassedByBloggerPemula(/hynews.biz|chamcuuhoc.com/, function() {
      var bypasslinks = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`);redirect(bypasslinks);});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/, function() {if (elementExists('#link-view')) {
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
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|importantclass).com/, function() {waitForElm('#my-btn', nsk => redirect(nsk.href, false));
      ClickIfExists('#pro-continue', 3);ClickIfExists('#pro-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club/, function() {
      ClickIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/computerpedia.in|advicefunda.com/, function() {ClickIfExists('.tp-blue.tp-btn-2', 3);
      let komp = setInterval(function() {if (Captchacheck()) {clearInterval(komp);ClickIfExists('#tp-snp2');}}, 500);});
    BypassedByBloggerPemula(/linkatla.com/, function() {let katla = bp('head > script:nth-child(7)');let linka = strBetween(katla.text, '"', '"');
      if (elementExists('#redirectButton')) {setTimeout(() => {redirect(atob(linka), false);}, 2 * 1000);}});
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
    BypassedByBloggerPemula(/solarchaine.com/, function() {
      if (elementExists('#captchaShortlink')) {ClickIfExists('button.btn:nth-child(4)', 2);let sch = setInterval(() => {if (Captchacheck()) {clearInterval(sch);
            ClickIfExists('#invisibleCaptchaShortlink');}}, 1 * 1000);} else {SubmitIfExists('.box-body > form:nth-child(2)', 1);}});
    BypassedByBloggerPemula(/(remixsounds|helpowi|helpdeep|thinksrace|tipsloanusa).com|(remixone|webseriesreel).in|uprwssp.org|securitywaittimes.us/, function() {EnableRCF();
      ClickIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);ClickIfExists('.tpdev-btn', 3);ClickIfExists("#tp98 button[class^='bt']", 3); SubmitIfExists("form[name='tp']", 3); ClickIfExists('#btn6', 4);});
    //BypassedByBloggerPemula(/stly.link|snaplessons.net|atravan.net/, () => {ClickIfExists('button[class^=rounded]', 2);let stly = setInterval(() => {if (Captchacheck()) {clearInterval(stly);ClickIfExists('button[class^=mt-4]');}}, 1 * 1000);});
    BypassedByBloggerPemula(/(computerpedia|techconnection).in|(myprivatejobs|advicefunda|cheakloan).com|bestloanoffer.net/, function() {
        ClickIfExists('#tp-snp2.tp-blue.tp-btn-2', 2);let komp = setInterval(function() {if (Captchacheck()) {clearInterval(komp);ClickIfExists('#tp-snp2');}}, 500);});
    BypassedByBloggerPemula(/shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud/, function() {let shk = setInterval(() => {
        if (Captchacheck()) {clearInterval(shk);ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);});
    BypassedByBloggerPemula(/revly.click/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {SubmitIfExists('#link-view');}}, 1 * 1000);} else {SubmitIfExists('div.col-md-12 form', 2);}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn/, function() {EnableRCF();
      let trangchu = setInterval(() => {if (bp('#monetiza-time').innerText == '0') {clearInterval(trangchu);ReadytoClick('#monetiza');} else if (elementExists('#monetiza-generate')) {window.monetizago();}}, 1 * 1000);});
    BypassedByBloggerPemula(/theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id/, function() {
      var tform = bp('#landing');redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co/, function() {
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ClickIfExists('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/(blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|blog-myst|ins-myst|blogmystt|healthmyst|wp2hostt|policiesreview).com|clk.wiki|(oko|aii).sh|clk.kim/, function() {ClickIfExists('button.btn.btn-primary', 2);SubmitIfExists('#nextpage', 2);
      SubmitIfExists('#getmylink', 3);let enit = setInterval(function() {if (Captchacheck()) {clearInterval(enit);ClickIfExists('.btn-captcha.btn-primary.btn');}}, 500);});
    BypassedByBloggerPemula(/techyreviewx.com|desiupload.co/, function() {ClickIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/(calmgram|adbitfly|blogsward).com|adbitfly.in/, function() {
      waitForElm('#continueBtn', afBtn => afBtn.click());ClickIfExists('#captcha-btn', 4, 'setInterval');
      ClickIfExists('.btn-captcha.btn-primary.btn', 8, 'setInterval');});
    BypassedByBloggerPemula(/shorterall.com/, function() {if (!elementExists('input[name=awnswer]') && !elementExists('#link-view')) {SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('input[name=awnswer]')) {let strl = bp('input[name=awnswer]').getAttribute('placeholder').split('=')[0]; bp('input[name=awnswer]').value = BpCalc(strl); SubmitIfExists('div.col-md-12 form', 3);}
      if (elementExists('#link-view')) {let srl = setInterval(() => {if (Captchacheck()) {ReadytoClick('#invisibleCaptchaShortlink');}}, 1 * 1000);}});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun/, function() {EnableRCF();window.onscroll = BpBlock();window.check2();if (elementExists('#verify')) {
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
    BypassedByBloggerPemula(/tutwuri.id|besargaji.com/, function() {ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > button ', 2);
      let tutwuri = setInterval(() => {if (Captchacheck()) {clearInterval(tutwuri);ClickIfExists('#btn-3');}}, 1 * 1000);});
    BypassedByBloggerPemula(/autodime.com/, function() {
      let atd = setInterval(function() {if (Captchacheck()) {clearInterval(atd);ClickIfExists('#button1');}}, 500);
      waitForElm('a.btn-hover.color-1.btn-captcha', odim => redirect(odim.href, false));});
    BypassedByBloggerPemula(/amritadrino.com/, function() {
      if (elementExists('.g-recaptcha')) {waitForElm('body > b:nth-child(10) > center:nth-child(4) > a:nth-child(64)', amd => redirect(amd.href, false));} else {waitForElm('#tp-snp2', amBtn => amBtn.click());}});
    BypassedByBloggerPemula(/hunterkiller.me|surflink.tech/, function() {
      waitForElm('div#showw center a.btn.btn-danger.btn-captcha', hun => redirect(hun.href, false));
      waitForElm('div#wpsafe-snp center a', hunt => redirect(hunt.href, false));});
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
    BypassedByBloggerPemula(/(pernahsukses|alpinecorporate).com|aoutoqw.xyz/, function() {if (elementExists('.g-recaptcha')) {let ps = setInterval(() => {if (Captchacheck()) {clearInterval(ps);
            ClickIfExists('#alf_continue_captcha');}}, 1 * 1000);} else {window.showScrollToGetLinkText(); SubmitIfExists('#alf_continue_form_outer', 3);}});
    BypassedByBloggerPemula(/altechen.com|entutes.com/, function() {parent.open = BpBlock();
      if (elementExists('.h-captcha')) {let ale = setInterval(() => {if (Captchacheck()) {clearInterval(ale);
            ClickIfExists('#cs-btn');}}, 1 * 1000);} else {ClickIfExists('button#cs-btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/(mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online/, function() {
      ClickIfExists('.submitBtn', 2);ClickIfExists('#go_d', 3);});
    BypassedByBloggerPemula(/bitcotasks.com/, function() {if (location.href.includes('/shortlink/')) {
      let bitco = setInterval(() => {if (bp('.mb-2').innerText == 'Verified!') {clearInterval(bitco);window.continueClicked();}}, 1 * 1000);} else {}});
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
    BypassedByBloggerPemula(/stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmiz|snaplessons).net/, function() {if (elementExists('.g-recaptcha') || elementExists('.h-captcha')) {
        let stf = setInterval(() => {if (Captchacheck()) {clearInterval(stf);ReadytoClick('.form-send.m-2.btn-captcha.btn-outline-primary.btn');}}, 500);} else {
        ClickIfExists('.form-send.m-2.btn-captcha.btn-outline-primary.btn', 3, 'setInterval');}});
    BypassedByBloggerPemula(/slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com/, function() {EnableRCF();
      let sw = setInterval(() => {if (Captchacheck()) {clearInterval(sw); ClickIfExists('.hidden-continue-button');}}, 1 * 1000); waitForElm('#yuidea-btmbtn', swBtn => swBtn.click());});
    BypassedByBloggerPemula(/link.goto.com.np|(appkamods|bankvacency|otomi-games).com/, () => {
      waitForElm('div#wpsafe-link a', bitz => redirect(bitz.href, false));
      waitForElm('#wpsafe-link input', bit2 => redirect(strBetween(bit2.onclick.toString(), `window.open('`, `', '_blank')`), false));});
    BypassedByBloggerPemula(/hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org/, function() {
      ClickIfExists('#my-btn', 2);ClickIfExists('#wpsafe-link > .btn-secondary.btn', 2);
      waitForElm('#pro-link', nhk => redirect(nhk.href, false));waitForElm('#wpsafe-link a', hrl => redirect(strBetween(hrl.onclick.toString(), `window.open('`, `', '_self')`), false));});
    /*BypassedByBloggerPemula(/(lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|daughablelea|tonordersitye|bleleadersto).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro/, function() {
      if (/^\/([^\/]+)/.test(location.pathname)) {redirect('https://adbypass.org/bypass?bypass=' + location.href, false);}});*/
    BypassedByBloggerPemula(/(homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze).com|(financewrapper|recipes4all).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol/, () => {EnableRCF();
      if (elementExists('.g-recaptcha')) {let mdn = setInterval(() => {if (Captchacheck()) {clearInterval(mdn);BypassHD('form[action]', 1);}}, 1 * 1000);} else {setTimeout(() => {BypassHD(GetForm('mdn'));}, 17 * 1000);}});
    BypassedByBloggerPemula(/(tradeshowrating|historyofyesterday).com/, function() {
      let profitsfly = setInterval(() => {if (elementExists('.loading-spinner.spacer')) {} else if (!elementExists('.h-captcha') && !bp('#cbt').hasAttribute('disabled')) {clearInterval(profitsfly);ReadytoClick('button#cbt.pfbutton-primary', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/playonpc.online/, function() {window.assholeWhoReadsThis = true;ClickIfExists('#ytcontinueButton', 2);if (elementExists('.h-captcha') && !bp('#cbt').hasAttribute('disabled')) {
      let profitsfly = setInterval(() => {if (Captchacheck()) {clearInterval(profitsfly);ClickIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);} else {
      let playonpc = setInterval(() => {if (!elementExists('.h-captcha') && !bp('#cbt').hasAttribute('disabled')) {clearInterval(playonpc);ReadytoClick('button#cbt.pfbutton-primary', 1);}}, 2 * 1000);}});
    BypassedByBloggerPemula(/shortit.pw/, function() {if (elementExists('.bg-light.container')) {
        $('.text-center.text-muted').text('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      ClickIfExists('.pulse.btn-primary.btn', 3);let sorti = setInterval(function() {if (Captchacheck()) {clearInterval(sorti);ClickIfExists('#btn2');}}, 500);});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, function() {setInterval(function() {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(function() {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(function() {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
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
    BypassedByBloggerPemula(/file-upload.in/, () => waitForElm('#getlink', fui => redirect(fui.href, false)));
    BypassedByBloggerPemula(/upmienphi.com/, function() {waitForElm('.download-link', upBtn => upBtn.click());});
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/cashando.me/, () => waitForElm('#goCoinsTown', cash => redirect(cash.href, false)));
    BypassedByBloggerPemula(/appsinsta.com/, function() {waitForElm('.yu-blue.yu-btn', apBtn => apBtn.click());});
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/sugarona.com/, function() {waitForElm('a#my-btn', sgr => redirect(sgr.href, false));});
    BypassedByBloggerPemula(/cekip.site/, () => waitForElm('a#aGo.badge.bg-success', cek => redirect(cek.href, false)));
    BypassedByBloggerPemula(/techleets.xyz/, () => waitForElm('#tp-snp2 > center > a', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/mirrored.to/, () => waitForElm('div.col-sm.centered.extra-top a', mir => redirect(mir.href, false)));
    BypassedByBloggerPemula(/flybid.net/, () => waitForElm('a#continue-button.continue-button', flb => redirect(flb.href, false)));
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/sub2unlock.com/, function() {if (location.href.includes('/unlock')) {waitForElm('a#link', s2l => redirect(s2l.href, false));}});
    BypassedByBloggerPemula(/thebloggerspoint.in|ezeviral.com/, () => waitForElm('#wpsafe-snp > a', tbs => redirect(tbs.href, false)));
    BypassedByBloggerPemula(/rockmods.net/, function() {if (location.href.includes('/rblink.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/doodjob.com/, () => waitForElm('a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled', doo => redirect(doo.href, false)));
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com/, () => waitForElm('a#proceed', offr => redirect(offr.href, false)));
    BypassedByBloggerPemula(/(cricketgurupro|travelkuku).com/, function() {SubmitIfExists("form[name='tp']", 3);waitForElm('#page > center > a', cgp => redirect(cgp.href, false));});
    BypassedByBloggerPemula(/bluemedialink.online|bluemediafile\.*/, function() {if (BpParams.has('url')) {waitForElm('input#nut[src]', blum => blum.parentNode.submit());}});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/blog.textpage.xyz/, () => waitForElm('#wpsafe-link1 a', bt => redirect(strBetween(bt.onclick.toString(), `window.open('`, `', '_blank')`), false)));
    BypassedByBloggerPemula(/foodupe.com/, function() {if (elementExists('.containerpanel')){let fdp = bp('#donead').href;setTimeout(() => {redirect(fdp,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/freethailottery.live/, function() {if (elementExists('.g-recaptcha')){let ftl = ReadCV('JSON_fetch');setTimeout(() => {redirect(ftl,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/udrop.com/, () => waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`), false)));
    BypassedByBloggerPemula(/sub2unlock.net/, function() {if (elementExists('.linkDiv_btns.col-xs-12.col-sm-12.col-md-12')){let stu = bp('#theLinkID').textContent;setTimeout(() => {redirect(stu,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in/, function() {SubmitIfExists("form[name='tp']", 3); waitForElm('a#btn6', bkz => redirect(bkz.href, false));});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/mboost.me/, function() {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io/, () => waitForElm('#wpsafelink-landing > input', dis => redirect(JSON.parse(atob(dis.value)).linkr, false)));
    BypassedByBloggerPemula(/videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz/, function() {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/aiimgvlog.fun/, function() {EnableRCF(); window.onload = setInterval(() => {if (elementExists('.h-captcha') && Checkvisibility(bp('.h-captcha'))) {BypassHD('#overlay', 1);} if (elementExists("div[id^='count']") && bp("div[id^='count']").innerHTML == 0) {ReadytoClick('input:nth-of-type(3)', 1);}}, 1 * 1000);
        if (elementExists('input.form-control')) {window.onscroll = BpBlock();window.check2(); $('#clickMessage').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually'); elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus|tfly.link/, function() {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); window.grecaptcha.execute();} catch (e) {}}, 3000);}});
    BypassedByBloggerPemula(/dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz/, function() {parent.open = BpBlock();
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
    const admavenRegex = /^https:\/\/(bleleadersto\.com|tonordersitye\.com|daughablelea\.com)\/s\?.*$/;
    const linkvertiseRegex = /^https:\/\/linkvertise\.com\/.+$/;
    const lootlinkRegex = /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/

    // Linkvertise easy case
    if (linkvertiseRegex.test(window.location.href) && window.location.search.includes('r=')) {
        const rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {window.location.assign(atob(rParam));};

    // Linkvertise hard case and Admaven. First try bypass.vip, fallback to bypass.city
    } else if (admavenRegex.test(window.location.href) || linkvertiseRegex.test(window.location.href) || lootlinkRegex.test(window.location.href)) {
        fetch(`https://api.bypass.vip/bypass?url=${encodeURIComponent(window.location.href)}`)
            .then(response => response.json())
            .then(data => {
                if (data.status == 'success') {
                    window.location.assign(data.result);
                } else {
                    window.location.assign(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
                }
            })
            .catch(err => {
                window.location.assign(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
            });
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
    const redirect = finalUrl => window.location.assign(finalUrl);
    const getParam = (url, param) => new URLSearchParams(url).get(param);
    const rot13 = str => str.replace(/[A-Za-z]/g, char => String.fromCharCode((char.charCodeAt(0) % 32 + 13) % 26 + (char < 'a' ? 65 : 97)));
    const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
    const afterDOMLoaded = (callback) => document.addEventListener('DOMContentLoaded', callback);
    const afterWindowLoaded = (callback) => window.addEventListener('load', callback);
    const isValidUrl = url => /^(?:https?|ftp):\/\/(?:\w+\.){1,3}\w+(?:\/\S*)?$/.test(url);
    const clickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); button.click(); } }, 1000); };
    const redirectIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button.href && isValidUrl(button.href)) { clearInterval(intervalId); redirect(button.href) } }, 500); };
    const clickIfExistsNonStop = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector + ':not(.disabled)'); if (button) { button.click(); } }, 500); };
    const redirectIfNotDisabled = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton && !linkButton.href.includes('/undefined')) { clearInterval(intervalId); setTimeout(function() {redirect(linkButton.href);}, 500) } }, 500); };
    const clickIfNotDisabled = (buttonSelector) => { let intervalId = setInterval(() => { let button = document.querySelector(buttonSelector); if (!button.hasAttribute('disabled') && !button.classList.contains('disabled')) { clearInterval(intervalId); setTimeout(function() {button.click();}, 500) } }, 500); };
    const checkElementVisible = element => element !== null && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) && (!element.getAttribute('style') || !element.getAttribute('style').includes('display:none'));
    const clickIfVisible = selector => { afterDOMLoaded(function() { let intervalId = setInterval(() => { let element = document.querySelector(selector); if (checkElementVisible(element)) { clearInterval(intervalId); element.click(); } }, 1000); }); };
    const preventForcedFocusOnWindow = () => {window.mouseleave = true; window.onmouseover = true; document.hasFocus = function() {return true;}; Object.defineProperty(document, 'webkitVisibilityState', {get() {return 'visible';}});
        Object.defineProperty(document, 'visibilityState', {get() {return 'visible';}}); window.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true);
        window.addEventListener('focus', onfocus, true);document.addEventListener('visibilitychange', function(e) {e.stopImmediatePropagation();}, true, true); Object.defineProperty(document, 'hidden', {get() {return false;}});};

    //peliculasgd.net, animesgd.net, club-hd.com, librolandia.net, pelishd4k.com, programasvirtualespc.net, pasteprivado.blogspot.com
    /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('#!')[1]))))) : null;

    // AdClicker
    if (/(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url/.test(url)){
        let decodedUrl = decodeURIComponent(atob(atob(atob(url.split('/url/#')[1]))));
        if (decodedUrl.includes('&amp;url=')) {decodedUrl = decodedUrl.split('&amp;')[1];}
        let urlParam = new URLSearchParams(decodedUrl).get('url');
        if (urlParam) {redirect(urlParam);}
    }

    // pelishd4k.com
    /altearnativasa.com\/\#/.test(url) ? redirect(decodeURIComponent(atob(atob(atob(url.split('/#')[1]))).split('&url=')[1].split('&')[0])) : null;

    // mayas.travel used in fiuxy2.co
    /(mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org)\/api/.test(url) ? redirect(decodeURIComponent(url.split('&url=')[1].split('&')[0])) : null;
    /(mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org)\/\#/.test(url) ? redirect(atob(atob(atob(url.split('/#')[1]))).split('&url=')[1].split('&')[0]) : null;

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

    //mandranime.com
    /ikramlar.online|segurosdevida.site/.test(url) ? afterDOMLoaded(function() { 
        redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]); 
    }) : null;

    //anime-world.in 2nd step
    /link.unlockner.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn.get-link')}) : null;

    //atozcartoonist.me
    /cybercityhelp.in/.test(url) ? afterDOMLoaded(function() {
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
    /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickIfExists('#tp-snp2');
        clickIfExists('#cross-snp2');
    }) : null;

    // linkneverdie.net
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /techtnet.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#originalLink')}) : null;

    //shrinkme.us
    /shrinkme.(us|site|cc|vip|dev|ink)/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;

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

    //ouo.io
    /ouo.io/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;
    /ouo.io/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#btn-main')}) : null;

    //cuty.io - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/46
    /exeo.app|mrgec.com|cety.app/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#submit-button')}) : null;

    //oko.sh
    /lnbz.la/.test(url) ? afterDOMLoaded(function() {timeSec = 0; afterElementVisible('form', function() {clickIfExists('button#getlink.btn-success');}) }) : null;

    // tii.la oko.sh final step
    /indianshortner.com|lnbz.la|oii.la|falpus.com|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|iir.la|tvi.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /ez4short.com\/[^\/]+\/\?token=[^\/]+$/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled2('#aaoii2o')}) : null;

    // shon.xyz, seen in mega-descargas-serie.blogspot.com
    /shon.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-main')}) : null;

    //vegamovies, worldfree4u, desiremovies.cymru, hdhub4u.capetown, moviesdrive.world ... https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-8508217
    const redirectOrClickIfExistsEnabledWithDelay = (selector) => { afterDOMLoaded(function() { //Wait for the page to load
        let intervalId = setInterval(() => { //Check every 0.5s
          let button = document.querySelector(selector + ':not(.disabled)'); //Check the element is not disabled
          if (button) {setTimeout(() => { isValidUrl(button.href) ? redirect(button.href) : button.click();}, 100);} //Redirect or click, with a 0.1s delay
        }, 500);});};
    if (/((infytips|remixodiadj).in|(cybertyrant|profitshort|technorozen|hubdrive.me|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt).com|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|blog.offerboom.top|kvkparbhani.org|kk.offerboom.top)/.test(url)){
        if (url.includes('?r=')) redirect(atob(url.split('?r=')[1]));
        else redirectOrClickIfExistsEnabledWithDelay('.rd_btn');
    }

    // hdhub4u.capetown
    /stockwallah.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('a#verify_btn');
        redirectIfExists('a#verify_btn');
    }) : null;
    

    // hubcloud telegram link - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/185
    // /bloggingvector.shop\/re2/.test(url) ? redirect(atob(url.split('/re2/')[1])) : null;
    /hubcloud.club\/tg\/go.php\?re=/.test(url) ? afterDOMLoaded(function() { document.body.innerHTML.trim().includes('Invalid Request - Please Come through Links again') ? setTimeout(() => {window.location.reload()}, 1500) : null}) : null;

    // desiremovies.cymru
    /gyanigurus.net\/view/.test(url) ? afterDOMLoaded(function() {clickIfExists('#show_button')}) : null;

    // dramaday.me - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/21
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-1')}) : null;
    /besargaji.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn-2')}) : null;
    /moneyblink.com\/ready\/go\?u=/.test(url)? redirect(atob(url.split('?u=')[1])) : null;

    // dramaday.me - linkspy.cc & droplink.co/st?api=...&url=... concatenated
    //ovagames.com - linkspy.cc & clicksfly.com|shrinkme.io|clk.sh|shrinkearn.com|clk.asia|clk.wiki concatenated - https://github.com/FastForwardTeam/FastForward/issues/1352
    if (/linkspy.cc\/tr/.test(url)){
        const decodedUrl = atob(url.split('/tr/')[1]);
        const urlParam = getParam(decodedUrl,'url');
        if (!urlParam) redirect(decodedUrl); //default case
        redirect(urlParam); //case for dramaday.me
        redirect(atob(urlParam)); //case for ovagames.com
    }
    if (/linkspy.cc\/\/a/.test(url) && url.includes('aHR0')) {
        const decodedUrl = atob(url.split('_')[1]);
        const urlParam = getParam(decodedUrl,'url');
        if (!urlParam) redirect(decodedUrl); //default case
        redirect(urlParam); //case for dramaday.me
        redirect(atob(urlParam)); //case for ovagames.com
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
    /dropgalaxy.(com|co)\/drive/.test(url) ? afterDOMLoaded(function() {clickIfExists('#method_free')}) : null; //1st page
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
    if (/(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|tejtime24.com/.test(url)){
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
    /linkshortify.in|lksfy.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.get-link')}) : null; // added for https://lksfy.com/59EhFF

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10649981
    // https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/discussions/263369
    // https://shrinkforearn.xyz/vAs1ikmO - leechpremium.link
    // https://www.reddit.com/r/uBlockOrigin/comments/1g50rur/unable_to_bypass_this_shortlink/
    const clickWithDelay = (selector, delay) => { setTimeout(function() { document.querySelector(selector).click(); }, delay); };
    if (/uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/.test(url)) {
        afterDOMLoaded(function() {
            modifyScript('timeLeft = duration', 'timeLeft = 0'); // skip timers
            clickWithDelay('#bottomButton', 0);
            clickWithDelay('#open-link', 3000);
        });
    }
    /shrinkforearn.in/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.get-link')}) : null;

    // https://droplink.co/4eSowGz4 used by leechpremium.link step 2
    /onlinetntextbooks.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go_d2');}) : null;

    // starsddl.me
    /starsddl.me\/short\/\?anonym=/.test(url) ? redirect(atob(url.split('?anonym=')[1])) : null;

    // uhdmovies.icu, topmovies.icu (modlist.in)

    // button-clicking method
    /* /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('span.block > a:nth-child(1)')}) : null;
    /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('#verify_button')}) : null;
    /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {clickIfExists('#verify_button2')}) : null;
    /tech.unblockedgames.world/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#two_steps_btn')}) : null; */

    //alt method (thanks to https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11063787)
    if (/tech.unblockedgames.world/.test(url)) {
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
                    .map((script) => script.textContent.match(/https:\/\/tech\.unblockedgames\.world\/\?go=pepe-[\w-]+/))
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
        window.location.assign(document.documentElement.innerHTML.match(/let url = "(https?:\/\/[^"]+)";/)[1]);
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
    /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime).com|(sabarpratham|pubprofit|sarkariyojnaa).in|dear-lottery.org/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickWithDelay('#tp98', 2000);
        clickWithDelay('#btn6', 2000);
    }) : null;
    /www.udlinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // https://rocklinks.in/1ZqZZ2B
    /mobilenagari.com|defencewallah.in/.test(url) ? afterDOMLoaded(function() {
        clickIfExistsNonStop('a.bt-success');
        clickIfExists('#wpsafe-link > a:nth-child(1)');
        clickIfExists('#wpsafelinkhuman');
    }) : null;
    /rocklinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

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

    // zshort.net, shotzon.com - jnovels.com - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/5, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/59
    const clickIfRecaptchaSolved = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (window.grecaptcha.getResponse().length !== 0) { clearInterval(intervalId); button.click(); } }, 1000); }; 
    /cloutgist.com/.test(url) ? afterWindowLoaded(function() {clickIfRecaptchaSolved('.btn-captcha');}) : null;
    /(cravesandflames|codesnse|cloutgist).com/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn:nth-child(1)')}) : null;
    /go.(cravesandflames|codesnse|cloutgist).com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // olamovies.rent - https://v2links.me/q1z4ssolam //add stuff missing from the main script
    /v2links.(com|me)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;
    /(utkarshonlinetest|newsbawa).com/.test(url) ? afterDOMLoaded(function() {
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

    //suncy.net (upfiles.com) (seen used in fiuxy2.co)
    /sunci.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('button#link-button.btn-primary:not(.btn-download)')}) : null;

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
    /spacetica.com/.test(url) ? afterDOMLoaded(function() {
        if (!document.querySelector('.form-group')){
            clickIfExists('a.btn-primary.btn-xs');
        }
    }) : null;
    /pahe.plus/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#invisibleCaptchaShortlink')}) : null;
    /pahe.plus/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

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

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/36
    /trimorspacks.com|pastescript.com|updrop.link/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#wpsafe-link > a:nth-child(1)')}) : null;

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
    /thotpacks.xyz/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.get-link')}) : null;

    // linkpays.in - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/88, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/48
    /surfsees.com|fitnessholic.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#rtg')}) : null;
    /surfsees.com|fitnessholic.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('.rtg-blue')}) : null;
    /cgsonglyricz.in|www.techhubcap.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#btn6')}) : null;
    /techyblogs.in|readytechflip.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#tp-snp2')}) : null;

    // stfly - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/62
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
    if (/stfly.(cc|xyz|biz|me)|stly.link|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons|airevue).net/.test(url)) {
        function clickAllValidButtons() {

            function clickAvailableButtons(buttonTexts) {
                let buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]:focus-visible');
                buttons.forEach(function(button) {if (buttonTexts.includes(button.textContent.trim())) {button.click();}});
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
                }, 8000)
            }

        }

        window.addEventListener('load', function() {clickAllValidButtons();}); //Click all the valid buttons when the page loads
        setInterval(function() {clickAllValidButtons();}, 2000); //Click all the valid buttons every 2 seconds
    }

    // uploadrar - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/87
    /flash.getpczone.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('#downloadbtn')}) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/94
    /pahe.win/.test(url) ? afterWindowLoaded(function() {setTimeout(function() {redirectIfExists('.redirect');}, 6000);}) : null;

    // zipshort.net - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-9971779
    /ontechhindi.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#rtg > center:nth-child(2) > button:nth-child(1)');
        clickIfExists('div.code-block:nth-child(4) > center:nth-child(1) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1)');
    }) : null;

    // publicearn.com - https://t.me/edutechvn - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/99, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/161
    /thelatintwistcafe.com/.test(url) ? afterDOMLoaded(function() {
        count = 0;
        setTimeout(function() {document.querySelector('#tp98').click();}, 3000);
        setTimeout(function() {document.querySelector('#btn6').click();}, 3000);
        setTimeout(function() {document.querySelector('#.tp-blue').click();}, 3000);
    }) : null;

    // vnshortner - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/110, https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/149
    /importantclass.com/.test(url) ? afterDOMLoaded(function() {
        clickWithDelay('#my-btn', 3000);
    }) : null;
    /bebkub.com/.test(url) ? afterDOMLoaded(function() {
        clickWithDelay('#pro-continue', 1000);
        clickWithDelay('#VerifyBtn', 3000);
        clickWithDelay('#pro-btn', 5000);
    }) : null;

    // inshorturl.com - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/104
    /newshuta.in|indiamaja.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#tp98');
        clickIfExists('#btn6');
        clickIfNotDisabled('#gtelinkbtn');
    }) : null;

    // https://hyp.sh/Art07dr (hypershort) - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/101 - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/158
    /jytechs.in|mi.miuiflash.com|hypershort.com|djxmaza.in|thecubexguide.com/.test(url) ? afterDOMLoaded(function() {
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

    // saferoms.com
    /www.saferoms.com\/\?go=/.test(url) ? afterDOMLoaded(function() {
        let dlLink = document.querySelector('#wpsafe-link > a:nth-child(1)').href;
        dlLink = decodeURIComponent(atob(dlLink.split('safelink_redirect=')[1]));
        dlLink = dlLink.match(/"safelink":"(.*?)"/)[1];
        if (confirm(`Confirm to redirect to \n${dlLink.split('https://href.li/?')[1]}\n`)) {redirect(dlLink);}
    }) : null;

    // https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/170
    /hdpastes.com\/\?v=/.test(url) ? afterDOMLoaded(function() {clickIfRecaptchaSolved('.btn-success');}) : null;

    // shrtbr.com/aaNEJEXp - t.me/xred2 - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/122
    /encurtads.net|financacerta.com/.test(url) ? afterDOMLoaded(function() { redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);}) : null;
    /shrtbr.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.get-link.btn.btn-lg.btn-success:not(.disabled):not(div.banner:nth-child(4) > div:nth-child(1) > a:nth-child(1))');}) : null;

    // https://f.technicalatg.in/6iTpuM1 - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10954732
    /skillheadlines.in/.test(url) ? afterDOMLoaded(function() { redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);}) : null;

    // https://delpez.com/?go=1ad8bb46 - https://t.me/heroelink - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-10954732
    /delpez.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.btn-primary');
        redirect(decodeURIComponent(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]));
    }) : null;

    // spaste.com use in pahe.ink - https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/77
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
    /www.spaste.com\/site\/checkPasteUrl\?c=/.test(url) ? afterDOMLoaded(function() {
        clickIfHCaptchaSolved('#template-contactform-submit');
    } ) : null;
    /www.spaste.com\/p\?c=/.test(url) ? afterDOMLoaded(function() {
        redirectIfExists('#template-contactform-message > a:nth-child(3)');
    }) : null;

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

    // https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11280464
    /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/.test(url) ? afterWindowLoaded(function() {
        const form = document.querySelector('#link-view > form');
        if (form) {
            form.action = document.querySelector('#link-view > form > input[name=url]').value;
        }
    }) : null;

    // modijiurl - https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11295970
    function browserIsFirefox() {return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;}
    /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/.test(url) && browserIsFirefox() ? redirect(url.split('?link=')[1]) : null;
    /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/.test(url) ? redirectIfNotDisabled('#getLinkButton') : null;

    // profitsfly partly skip timer
    /^https:\/\/.*\.(tradeshowrating.com|historyofyesterday.com|playonpc.online)\/.*/.test(url) ? (() => {
        afterDOMLoaded(function() {
            function setTimer() {
                if (window.wT9882 > 5) {
                    window.wT9882 = 1;
                }
            }
            window.wT9882 = 5;
            setInterval(setTimer, 1000);
        });
    })() : null;


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

    /^https:\/\/relampagomovies\.com\/.+/.test(url) ? boostTimers() : null;

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
                  finalLinksDiv.style.backgroundColor="rgba(0, 0, 0, 0.5)";
                  finalLinksDiv.style.borderRadius="10px";
                  finalLinksDiv.style.padding="1em";
                  finalLinksDiv.style.marginTop="1em";
                  finalLinksDiv.style.color="#4FCA1B";
                  finalLinksDiv.style.zIndex="10";
                  finalLinksDiv.style.position="relative";
                  finalLinksDiv.style.marginBottom="1em";
                  finalLinksDiv.style.display = "inline-block";
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

// ----- Bypass mega-enlace ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/blob/b1622e8b387148509ca355e8070ffa5cdcf87525/SpanishFilter/sections/general_extensions.txt#L108 / https://github.com/AdguardTeam/AdguardFilters/issues/174863#issuecomment-1996735239) -----
// used in: pelisenhd.org latinomegahd.net gatonplayseries.com peliculasgd.net tododvdfull.com cinemaniahdd.net programasvirtualespc.net compucalitv.pro
(function() {
    if (/(mega-enlace|acortados).com/.test(window.location.href)) {
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
                } else {
                    window.location.assign(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
                }
            }
        });
    }
})();
// ---------

//---profitsfly reload helper----
(function() {
    "use strict";

    const domainRegex = /^https:\/\/.*\.(tradeshowrating.com|historyofyesterday.com|playonpc.online)\/.*/;
    if (domainRegex.test(window.location.href)) {
        window.addEventListener('load', function() {
            let reloading = false;

            // Functions to check for messages like "Click any ad & keep it open for 15 seconds to continue" and reload the page if one exists
            function checkForMessage() {
                const paragraphs = document.getElementsByTagName("p");
                for (let p of paragraphs) {
                    if (/.*click.+ad.*to.+continue.*/is.test(p.textContent) && isElementVisibleAndEnabled(p)) {
                        if (!reloading) location.reload(); // Reload the page
                        reloading = true;
                        return; // Exit the function after reloading
                    }
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
        });
    }
})();
//-------

// ----- Bypass Rinku ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
// example: https://rinku.me/0XLi6
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay).com|(makego|sakazi|momge).net|askerlikforum.com.tr|misterio.ro|(forp|bevery).xyz/
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

        });

    }
})();
// ----- End Bypass Rinku -----
