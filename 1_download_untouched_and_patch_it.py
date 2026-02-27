import requests

def download_file(url, destination):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful

        with open(destination, 'wb') as file:
            file.write(response.content)

        print(f"OK: File downloaded successfully as {destination}")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading file: {e}")

def download_file_if_not_exists(url, destination):
    import os

    if not os.path.exists(destination):
        download_file(url, destination)
    else:
        print(f"File already exists: {destination}")

def modify_file_with_my_fixes(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # Fixes
    #content = content.replace("BloggerPemula('highkeyfinance.com'", "//BloggerPemula('highkeyfinance.com'")
    #content = content.replace("BypassedByBloggerPemula(/itscybertech.com", "/*BypassedByBloggerPemula(/itscybertech.com")
    #content = content.replace("bp('#gtbtn2'))) {clearInterval(itscyber); window.fngo();}}, 1 * 1000);});", "bp('#gtbtn2'))) {clearInterval(itscyber); window.fngo();}}, 1 * 1000);});*/")
    content = content.replace("BypassedByBloggerPemula(/linkvertise.com/", "//BypassedByBloggerPemula(/linkvertise.com/")
    content = content.replace("/stfly.cc|stfly.xyz|techtrendmakers.com|(blogbux|blogesque|exploreera).net/", "/stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com|(blogbux|blogesque|exploreera|explorosity|torovalley).net/")
    #content = content.replace("BloggerPemula('financeyogi.net'", "//BloggerPemula('financeyogi.net'")
    content = content.replace("case 'pixeldrain.com'", "//case 'pixeldrain.com'")

    content = content.replace("BypassedByBloggerPemula(/lootlinks", "//BypassedByBloggerPemula(/lootlinks")
    content = content.replace("let lln = bp('body > script');let lls", "//let lln = bp('body > script');let lls")

    content = content.replace("BypassedByBloggerPemula(/web1s.asia/", "/*BypassedByBloggerPemula(/web1s.asia/")
    #content = content.replace("bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}});", "bp(inp).value = decodeURIComponent(BpParamd.get('code')); ClickIfExists(btn,2); }}}); */")
    content = content.replace("window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});", "window.location.assign(`${decodeURIComponent(BpParamd.get('wsa'))}?code=${tCode}`); clearInterval(gCode);}}, 2000);}});*/")

    content = content.replace("(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk).com", "(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|webhostsec).com")

    content = content.replace("BypassedByBloggerPemula(/adclicker", "//BypassedByBloggerPemula(/adclicker")
    #content = content.replace("/adclicker\.*/", "/(adclicker.(io|info)|discoveryultrasecure.com)\/url\/\#/")
    content = content.replace("redirect(new URLSearchParams(adc).get('url'));} else {}});", "//redirect(new URLSearchParams(adc).get('url'));} else {}});")

    #content = content.replace("BypassedByBloggerPemula(/quesignifi.ca|tiktokcounter.net/", "/*BypassedByBloggerPemula(/quesignifi.ca|tiktokcounter.net/")
    #content = content.replace("ClickIfExists('#cbt', 5, 'setInterval');}});", "ClickIfExists('#cbt', 5, 'setInterval');}});*/")

    content = content.replace("BypassedByBloggerPemula(/djxmaza.in/", "//BypassedByBloggerPemula(/djxmaza.in/")
    content = content.replace("ClickIfExists('#downloadbtnf', 2);ClickIfExists", "//ClickIfExists('#downloadbtnf', 2);ClickIfExists")

    #content = content.replace("BypassedByBloggerPemula(/newsbawa.com/, function() {ClickIfExists('#Verify-click-btn', 2);ClickIfExists('a#footer-btn.verify-btn', 3);});", "BypassedByBloggerPemula(/newsbawa.com/, function() {ClickIfExists('#Verify-click-btn', 0.3);ClickIfExists('a#footer-btn.verify-btn', 1);});")

    content = content.replace("/anhdep24.com|nguyenvanbao.com|xemsport.com|byboe.com/", "/(anhdep24|nguyenvanbao|xemsport|byboe|asideway).com/")

    #content = content.replace("BloggerPemula('veganab.co'", "//BloggerPemula('veganab.co'")
    content = content.replace("atglinks|", "")

    content = content.replace("|vebma|majalahhewan).com/", "|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro/")

    content = content.replace("case 'work.ink'", "//case 'work.ink'")

    content = content.replace("/(starxinvestor|hit-films|sevenjournals).com|(iisfvirtual|bookszone|learnmany).in/", "/(starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides).com|(iisfvirtual|bookszone|learnmany).in/")

    #content = content.replace("azmath.info", "azmath.info|expertvn.com")

    content = content.replace("(blogscare|blogtechh|host2loan).com", "(blogscare|blogtechh|host2loan|techbixby).com")
    content = content.replace("|lnbz.la/", "|(lnbz|oei).la/")

    content = content.replace("/(newsbawa|utkarshonlinetest).com/", "/(newsbawa|utkarshonlinetest|techbezzie).com/")

    content = content.replace("nayisahara|careersides).com", "nayisahara|careersides|edukaroo).com")

    content = content.replace("/(newsbawa|utkarshonlinetest|techbezzie).com/", "/(newsbawa|utkarshonlinetest|techbezzie|financewada).com/")

    content = content.replace("blog-myst).com|ss7.info", "blog-myst|webhostsec).com|ss7.info")

    content = content.replace("/azmath.info/", "/azmath.info|expertvn.com/")

    content = content.replace("/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li/", "/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/")

    content = content.replace("/trangchu.news|downfile.site|(techacode|expertvn|ziggame).com|azmath.info|aztravels.net|top10cafe.se|handydecor.com.vn/", "/trangchu.news|downfile.site|(techacode|expertvn|ziggame).com|azmath.info|expertvn.com|aztravels.net|top10cafe.se|handydecor.com.vn/")

    content = content.replace("/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks|briceka).com|galaxy-link.space|oke.io|forextrader.site|tinygo.co/", "/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co/")

    content = content.replace("/(blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.wiki|(oko|aii).sh|clk.kim|dekhe.click/", "/(blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|blog-myst|ins-myst|blogmystt|healthmyst|wp2hostt|policiesreview).com|clk.wiki|(oko|aii).sh|clk.kim|dekhe.click/")

    content = content.replace("/(sekilastekno|miuiku|vebma|majalahhewan).com|tempatwisata.pro/", "/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro/")

    content = content.replace("/(starxinvestor|hit-films|sevenjournals).com|(iisfvirtual|bookszone|learnmany).in/", "/(starxinvestor|hit-films|sevenjournals|funkeypagali|viewmyknowledge|wikifilmia|nayisahara|careersides|edukaroo).com|(iisfvirtual|bookszone|learnmany).in/")

    content = content.replace("'lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'];let List1 = ['ay.live', 'gitlink.pro'", "'lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'];let List1 = ['ay.live', 'aylink.co', 'gitlink.pro'")

    linestoremove = """    BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, function() {if (window.hasOwnProperty('_lact')) {window.setInterval(() => {window._lact = Date.now();}, 5 * 1000);
      } else if (elementExists('#redirect-main-text')) {waitForElm('a#invalid-token-redirect-goto-site-button', yt => redirect(yt.href, false));} else {}});
"""
    content = content.replace(linestoremove, "")

    linestoremove = """    BypassedByBloggerPemula(/(lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|tonordersitye|bleleadersto|daughablelea).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro/, function() {
      if (/^\\/([^\\/]+)/.test(location.pathname)) {redirect('https://adbypass.org/bypass?bypass=' + location.href, false);}});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("BypassedByBloggerPemula(/linegee.net/", "//BypassedByBloggerPemula(/linegee.net/")

    #linkpays.in
    content = content.replace("BypassedByBloggerPemula('venzoars.com'", "//BypassedByBloggerPemula('venzoars.com'")
    content = content.replace("BypassedByBloggerPemula('(surfsees|travelagancy).com'", "//BypassedByBloggerPemula('(surfsees|travelagancy).com'")
    content = content.replace("BypassedByBloggerPemula('stockinsights.in'", "//BypassedByBloggerPemula('stockinsights.in'")

    linestoremove = """    BypassedByBloggerPemula(/dutchycorp.ovh|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link/, function() {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); window.grecaptcha.execute();} catch (e) {}}, 3000);}});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("BypassedByBloggerPemula('api.gplinks.com', 'url', '');", "//BypassedByBloggerPemula('api.gplinks.com', 'url', '');")

    content = content.replace("|(retrotechreborn|insurelean).com|", "|(retrotechreborn|insurelean|ecosolardigest).com|")

    content = content.replace("case 'clk.st': case 'clks.pro': case 'chainfo.xyz':", "case 'clk.st': case 'chainfo.xyz':")

    content = content.replace("/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|(offeergames|todogame).online/", "/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye|mooonten).com|gold-24.net|(offeergames|todogame|asxwq).online|msic.site/")

    linestoremove = """    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|importantclass|owoanime|hyperkhabar).com/, function() {
      DoIfExists('#pro-btn', 5);DoIfExists('#pro-continue', 3);DoIfExists('#my-btn2', 5);DoIfExists('#my-btn', 7);});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("/cutnet.net|(cutyion|cutynow).com|(exego|cety).app|(jixo|gamco).online/", "/cutnet.net|(cutyion|cutynow|cuttlinks).com|(exego|cety).app|(jixo|jizo|gamco).online/")

    content = content.replace("/(playonpc|yolasblog|playarcade).online|quins.us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday).com|gally.shop|freeat30.org|ivnlnews.xyz/",
                              "/(playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz/")

    linestoremove = """    BypassedByBloggerPemula(/drop.download/, function() {
      DoIfExists('#method_free', 2);DoIfExists('.btn-download', 2);});
"""
    content = content.replace(linestoremove, "")

    linestoremove = """    BypassedByBloggerPemula(/k2s.cc/, function() {DoIfExists('.button-download-slow', 2);
      waitForElm('a.link-to-file', k2s => redirect(k2s.href, false));});
"""
    content = content.replace(linestoremove, "")

    linestoremove = """    BypassedByBloggerPemula(/1fichier.com/, function() {
      if (elementExists('#pass')) {} else {DoIfExists('.btn-orange.btn-general.ok', 1);DoIfExists('.alc', 'submit', 1);}});
"""
    content = content.replace(linestoremove, "")

    linestoremove = """    BypassedByBloggerPemula(/mediafire.com/, () => {
      if (location.href.includes('file/')) {let mf = bp('.download_link .input').getAttribute('href');BpNote(mf);location.replace(mf);}});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("BypassedByBloggerPemula(/financemonk.net", "//BypassedByBloggerPemula(/financemonk.net")

    linestoremove = """    BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.btn-dow.btn', 2);DoIfExists("form[name='F1']", 'submit', 1);});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("BypassedByBloggerPemula(/(facebook|instagram).com/", "//BypassedByBloggerPemula(/(facebook|instagram).com/")
    content = content.replace("BypassedByBloggerPemula(/tiktok.com/", "//BypassedByBloggerPemula(/tiktok.com/")


    linestoremove = """        case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {
          result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));
          result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;
"""
    content = content.replace(linestoremove, "")

    content = content.replace("/(ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site|rcccn.in/", "/(ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site|rcccn.in|creditbay.xyz/")

    content = content.replace("ai.tempatwisata.pro",
                              "(ai|go).tempatwisata.pro")

    linestoremove = """    BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, () => {
      DoIfExists('.btn-dow.btn', 2);DoIfExists("form[name='F1']", 'submit', 1);});
"""
    content = content.replace(linestoremove, "")

    content = content.replace("""    BypassedByBloggerPemula(/.*/, /upfion.com/, () => {if (CloudPS(true, true, true)) return;let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'], $ = unsafeWindow.jQuery;if (elementExists('form[id=go-link]') && List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (elementExists('form[id=go-link]')){$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();
      let form = $(this),url = form.attr('action'),pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"),blogger = $(".main-header"),pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST",url: url,data: form.serialize(),dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>';notforsale.replaceWith(btn);blogger.replaceWith(btn);pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes('swiftcut.xyz')) {
      finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;} else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
""", "")

    content = content.replace("/.*/, /upfion.com/", "/upfion.com/")

    content = content.replace("BypassedByBloggerPemula(/(shrinke|shrinkme)\\.\\w+|(paid4link", "//BypassedByBloggerPemula(/(shrinke|shrinkme)\\.\\w+|(paid4link")
    content = content.replace("CaptchaDone(() => {if (/^(shrinke|shrinkme)\\.\\w+/", "//CaptchaDone(() => {if (/^(shrinke|shrinkme)\\.\\w+/")

    ##content = content.replace("/www.google.com|recaptcha.net/", "/^(?:https?:\/\/)?(?:www\.)?(?:google\.com|recaptcha\.net)\/recaptcha\/api2\/.*$/")

    content = content.replace("(aduzz|tutorialsaya|baristakesehatan|merekrut).com", "(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com")

    # gongchandang49 - issues/1 - sfl.gl fix 2025-09-20
    content = content.replace("BypassedByBloggerPemula(/sfl.gl/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});", 
                              """BypassedByBloggerPemula(/sfl.gl/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}; DoIfExists('button:innerText("OPEN LINK")', 2);});""")

    # gongchandang49 - issues/1 - add app.khaddavi.net 2026-01-03
    content = content.replace("""BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com/, () => {ReadytoClick('#submit-button',2);ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > button ', 2);CaptchaDone(() => {DoIfExists('#btn-3');});});""",
                              """BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net/, () => {ReadytoClick('#submit-button',2);ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('#second_open_placeholder > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('a:innerText("Go to Link")', 2);});""")

    # gongchandang49 - issues/3 - modsfire fix 2025-09-20
    content = content.replace("""case 'modsfire.com': if (/^\\/([^\\/]+)/.test(h.pathname)) {return 'https://modsfire.com/d/' + RegExp.$1;} break;""", '')
    content = content.replace("""const sl = (h => {switch (h.host)""",
                              """BypassedByBloggerPemula(/modsfire.com/, () => { if (!location.pathname.startsWith('/download')) { console.log("ONLY solve Cloudflare captcha and DO NOT click anything else!!!"); CaptchaDone(() => { modsfireDownload(); }); } else { modsfireDownload(); } });
  function modsfireDownload() { DoIfExists('a.download-button', 3); waitForElm("a.download-button[href]", safe => { redirect(safe.href, false); DoIfExists("a[href*='/d/']", safe => { fetch(safe.href).then(response => { if (!response.ok) throw new Error('Network response was not ok'); return response.text(); }).then(data => {}).catch(error => {}); }); }); }

  const sl = (h => {switch (h.host)""")

    # gongchandang49 - issues/15 - lksfy fix 2026-01-23
    content = content.replace("(raftarsamachar|gadialert|jobinmeghalaya|raftarwords).in", "(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub).in")

    # gongchandang49 - issues/7 - srtslug fix 2026-02-12
    content = content.replace("""BypassedByBloggerPemula(/stly.link|(snaplessons|atravan|airevue|carribo|amalot).net|(stfly|shrtlk).biz|veroan.com/, () => {CaptchaDone(() => {ReadytoClick('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});CheckVisibility('button[class^=rounded]', () => {if (!bp('.g-recaptcha') || !bp('.cf-turnstile')) {DoIfExists('button[class^=rounded]', 2);}});\n      CheckVisibility('button[class^=mt-4]', '&&', "bp('.progress-done').innerText == '100'", () => {ReadytoClick('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 4);});CheckVisibility('button[class^=mt-4]', '&&', "bp('#countdown-number').innerText == '✓'", () => {DoIfExists('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 3);});});""",
                              """BypassedByBloggerPemula(/stly.link|(snaplessons|atravan|airevue|carribo|amalot|techetta|biovetro).net|(stfly|shrtlk|srtslug).biz|(veroan|technons|tournguide|yrtourguide).com/,() => {\n      unsafeWindow.abwn=function(){};unsafeWindow.s026c20f179593697e6f1a533e1e9f50b_10e94202bec82e9eee6fb30f38b53efb=function(e,n,a){try{if(typeof n==='function')n()}catch(_){}};unsafeWindow.justDetectAdblock={detectAnyAdblocker(){return Promise.resolve(!1)}};\n      unsafeWindow.start_true = true;CaptchaDone(() => {ReadytoClick('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});CheckVisibility('button[class^=rounded]', () => {if (!bp('.g-recaptcha') || !bp('.cf-turnstile')) {DoIfExists('button[class^=rounded]', 2);}});\n      CheckVisibility('button[class^=mt-4]', '&&', "bp('.progress-done').innerText == '100'", () => {ReadytoClick('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 4);});CheckVisibility('button[class^=mt-4]', '&&', "bp('#countdown-number').innerText == '✓'", () => {DoIfExists('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 3);});});""")

    # p0008874 - gcd49/pulls/34 - coinclix fix 2026-02-13
    content = content.replace("""BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');\n      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));\n      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}\n      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists('#btn_link_start', 2);CaptchaDone(() => {DoIfExists('#btn_link_continue');});CheckVisibility('#btn_link_continue', () => {if (!elementExists('.iconcaptcha-modal')) {DoIfExists('#btn_link_continue');} else {DoIfExists('.iconcaptcha-modal__body');}});\n      CheckVisibility('.alert-success.alert-inline.alert', () => {DoIfExists('#btn_lpcont');});sleep(1000).then(() => {const input = bp('#link_input.form-control');if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');\n      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});""",
                              """BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('.mb-2:nth-child(2) > strong > a');\n      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));\n      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}\n      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists('#btnLinkStart', 2);CaptchaDone(() => {DoIfExists('#btnLinkContinue');});CheckVisibility('#btnLinkContinue', () => {if (!elementExists('.iconcaptcha-modal')) {DoIfExists('#btnLinkContinue');} else {DoIfExists('.iconcaptcha-modal__body');}});\n      CheckVisibility('.alert-success.alert-inline.alert', () => {DoIfExists('#btnLpcont');});sleep(1000).then(() => {const input = bp('#linkInput');if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');\n      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});""")
    
    # p0008874 - gcd49/pulls/35 - pay.inc fix
    content = content.replace("(blogsward|coinjest).com", "(blogsward|coinjest).com|coinsimulator.(io|online)")

    # p0008874 - gcd49/pulls/35 - exe.io fix
    content = content.replace("(exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online", "(exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo).com|4ace.online")

    # gongchandang49 - issues/13 - new gplinks domains
    content = content.replace("mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online", "mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm|qrixpe).com|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online")

    if not content.endswith("\n"):
        content += "\n"

    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(content)

if __name__ == "__main__":
    url1 = "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js"
    url2 = "https://openuserjs.org/install/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha.user.js"
    file_0 = "untouched_Bypass_All_Shortlinks_0.user.js"
    file = "untouched_Bypass_All_Shortlinks_patched.user.js"

    download_file_if_not_exists(url1, file_0)
    modify_file_with_my_fixes(file_0, file)
