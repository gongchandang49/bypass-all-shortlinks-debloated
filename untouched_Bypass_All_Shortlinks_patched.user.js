// ==UserScript==
// @name       Bypass All Shortlinks
// @name:id    Bypass Semua Shortlink
// @name:ug    Bypass بارلىق قىسقا ئۇلىنىشلار
// @name:ar    تجاوز الجميع الروابط المختصرة
// @name:ja    バイパス 全て ショートリンク
// @name:he    לַעֲקוֹף את כל קישורים קצרים
// @name:hi    सभी शॉर्टलिंक को बायपास करें
// @name:ko    모든 짧은 링크 우회
// @name:th    บายพาส ทั้งหมด ลิงค์สั้น
// @name:nb    Omgå Alle Kortlenker
// @name:sv    Förbigå alla kortlänkar
// @name:sr    Zaobići Sve Kratke veze
// @name:sk    Obísť Všetky Krátke odkazy
// @name:hu    Bypass Összes Rövid linkek
// @name:ro    Bypass Toate Linkuri scurte
// @name:fi    Ohittaa Kaikki Lyhyet linkit
// @name:el    Παράκαμψη Ολα Σύντομοι σύνδεσμοι
// @name:eo    Pretervojo Ĉiuj Mallongaj ligiloj
// @name:it    Bypassare Tutto Collegamenti brevi
// @name:bg    Заобикаляне на всички кратки връзки
// @name:es    Saltarse Todos los Enlaces Acortados
// @name:cs    Obcházeč všech zkracovačů odkazů
// @name:vi    Bỏ qua Tất cả Các liên kết ngắn
// @name:pl    Bypass Wszystkie Krótkie linki
// @name:uk    Обхід всі Короткі посилання
// @name:ru    Обход Все Короткие ссылки
// @name:tr    Bypass Tüm Kısa Linkler
// @name:fr    Bypass Tout Lien courts
// @name:nl    Bypass Alle Korte links
// @name:da    Bypass Alle Shortlinks
// @name:de    Bypass Alle Kurzlinks
// @name:zh-CN 旁路 全部 短链接
// @name:zh-TW 旁路 全部 短鏈接
// @name:pt-BR Bypass Todos Links curtos
// @name:fr-CA Bypass Tout Lien courts
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Bloggerpemula
// @version    95.1
// @match      *://*/*
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png
// @require    https://update.greasyfork.org/scripts/528923/1562237/MonkeyConfig%20Mod.js
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners , Skip AdFly and No Annoying Ads, Directly to Your Destination, and now Support Auto Downloading Your Files
// @description:id Bypass Semua Situs Shortlink Secara Otomatis Langsung ke Tujuan Tanpa Iklan yang Mengganggu , Support Auto Download File
// @description:ug بارلىق قىسقا ئۇلىنىش تور بېكەتلىرىنى ئايلىنىپ ئۆتۈپ ، كىشىنى بىزار قىلىدىغان ئۇلىنىش قىسقارتقۇچنى ئاپتوماتىك ھالدا مەنزىلىڭىزگە ئاتلاڭ.
// @description:ar تجاوز جميع مواقع الروابط المختصرة يتخطى تلقائيًا أدوات تقصير الروابط المزعجة ، مباشرة إلى وجهتك
// @description:he עוקף את כל אתרי הקישורים הקצרים מדלג אוטומטית על מקצרי קישורים מעצבנים, ישירות ליעד שלך
// @description:hi सभी शॉर्टलिंक साइटों को बायपास करें, सीधे आपके गंतव्य पर कष्टप्रद लिंक शॉर्टनर को छोड़ दें
// @description:ja すべてのショートリンクサイトをバイパスすると、迷惑なリンクショートナーが自動的にスキップされ、宛先に直接送信されます
// @description:fr Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @description:ko 모든 짧은 링크 사이트 우회는 성가신 링크 단축기를 자동으로 건너뛰고 목적지로 직접 이동합니다.
// @description:th ข้ามไซต์ลิงค์สั้นทั้งหมดข้ามลิงค์ย่อที่น่ารำคาญโดยอัตโนมัติไปยังปลายทางของคุณ
// @description:zh-cn 绕过所有短链接网站自动跳过烦人的链接缩短器，直接到您的目的地
// @description:zh-tw 繞過所有短鏈接網站自動跳過煩人的鏈接縮短器，直接到您的目的地
// @description:eo Preterpasi Ĉiuj Mallongaj Ligiloj-Ejoj Aŭtomate Saltas ĝenajn Ligilojn, Rekte al Via Celo
// @description:de Alle Short-Links-Sites umgehen Überspringt automatisch lästige Link-Shortener direkt zu Ihrem Ziel
// @description:tr Tüm Kısa Linkleri Atla Siteler Can sıkıcı Link Kısaltıcıları Otomatik Olarak Atlar, Doğrudan Hedefinize
// @description:da Omgå alle korte links-websteder springer automatisk irriterende linkforkortere over, direkte til din destination
// @description:bg Заобикаляне на всички сайтове с кратки връзки Автоматично пропуска досадните средства за съкращаване на връзки, директно до вашата дестинация
// @description:ro Omite toate site-urile cu linkuri scurte Omite automat elementele de scurtare a linkurilor enervante, direct către destinația ta
// @description:fi Ohita kaikki lyhytlinkkisivustot ohittaa automaattisesti ärsyttävät linkinlyhennykset suoraan määränpäähäsi
// @description:it Ignora tutti i siti di collegamenti brevi Salta automaticamente i fastidiosi accorciatori di collegamenti, direttamente alla tua destinazione
// @description:el Παράκαμψη όλων των τοποθεσιών σύντομων συνδέσμων Παρακάμπτει αυτόματα τα ενοχλητικά προγράμματα συντόμευσης συνδέσμων, απευθείας στον προορισμό σας
// @description:es Saltarse Automáticamente todos los enlaces acortados, AdFly y omitir anuncios, ir directamente al destino, ahora se agregó descarga automática de archivos
// @description:hu Az összes rövid hivatkozási webhely megkerülése automatikusan átugorja a bosszantó linkrövidítőket, közvetlenül az úticélra
// @description:nb Omgå alle korte lenker Nettsteder hopper automatisk over irriterende lenkeforkortere, direkte til destinasjonen din
// @description:sk Obíďte všetky stránky s krátkymi odkazmi, ktoré automaticky preskočia otravné skracovače odkazov priamo do vášho cieľa
// @description:sv Förbi alla korta länkar webbplatser hoppar automatiskt över irriterande länkförkortare, direkt till din destination
// @description:sr Zaobići sve stranice s kratkim vezama automatski preskače dosadne skraćivače veza, izravno na vaše odredište
// @description:pl Pomijaj wszystkie strony z krótkimi linkami automatycznie pomija irytujące skracacze linków, bezpośrednio do miejsca docelowego
// @description:nl Omzeil alle sites met korte links en slaat automatisch vervelende linkverkorters over, rechtstreeks naar uw bestemming
// @description:cs Automaticky přeskočí všechny otravné zkracovače odkazů, včetně AdFly bez otravných reklam přímo do vašeho cíle
// @description:uk Обійти всі сайти з короткими посиланнями. Автоматично пропускає дратівливі скорочення посилань безпосередньо до вашого пункту призначення
// @description:ru Обход всех сайтов с короткими ссылками автоматически пропускает надоедливые сокращатели ссылок, прямо к месту назначения
// @description:vi Bỏ qua tất cả các trang web liên kết ngắn tự động bỏ qua các trang web liên kết gây phiền nhiễu, trực tiếp đến đích của bạn
// @description:pt-br Ignora automaticamente encurtadores de links irritantes, diretamente para o link final
// @description:fr-ca Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @exclude /^(https?:\/\/)([^\/]+\.)?((github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet|docs|workspace|gemini|adservice|tagmanager).google|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|proton.me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js
// @updateURL https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.meta.js
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
// Try to Enable Fast Timer if My Script not Working on besargaji.com
// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc
// Debloated Script from Amm0ni4 Just Make Broken My Script and Made Me Lazy to Update, His Debloated Not Working Correctly and He Don't Know how to Fix it
// Say thank you to the donors by leaving good feedback, because of them I am more enthusiastic to improve the quality and add new features to the script.

(function() {// Please Remember , My Scripts Works Better Using Firefox Browser and Violentmonkey Extension
'use strict';
  const cfg = new MonkeyConfig({title: 'Bypass All Shortlinks Version 95.1 Settings',menuCommand: 'Open Bypass Settings',shadowWidth: '600px',shadowHeight: '400px',iframeWidth: '500px',iframeHeight: '350px',
  params: {Announcements: {type: 'textarea',label: 'Announcements',fontColor: "#0000ff",default: '1. Support My Works Via https://saweria.co/Bloggerpemula\n2. Red Menu=> Sometimes Causes Problems , use Your own Trial Error',column: 'top',labelAlign: 'center',rows: 3,cols: 50},
    SetDelay: {label: 'Default Redirect Delay in My Blog ',fontColor: "#0000ff",type: 'number',default: 5,column: 'top'},
    TimerFC: {label: 'Enable Faster Timer',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    RightFC: {label: 'Enable Context Menu',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    BlockFC: {label: 'Enable Always Ready',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    BlockPop: {label: 'Enable Popup Blocker',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    AntiDebug: {label: 'Enable Anti Debug & Log Cleared',type: 'checkbox',fontColor: "#ff0000",default: false,column: 'left'},
    YTShort: {label: 'Disable Youtube Short',type: 'checkbox',default: false,column: 'right'},
    BlogDelay: {label: 'Use My Blogs For Delays',type: 'checkbox',default: false,column: 'right'},
    hCaptcha: {label: 'Auto Open/Solve Hcaptcha',type: 'checkbox',default: false,column: 'right'},
    reCAPTCHA: {label: 'Auto Open/Solve Recaptcha',type: 'checkbox',default: false,column: 'right'},
    SameTab: {label: 'Auto Open Links in Same Tabs',type: 'checkbox',default: false,column: 'right'},
    AutoDL: {label: 'Auto Download For Supported Sites',type: 'checkbox',default: false,column: 'right'}}});
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
  function redirect(url, blog = true) {location = blog && cfg.get('BlogDelay') ? 'https://bloggerpemula.pythonanywhere.com/?BypassResults=' + url : url;}
  function BpCalc(sbp) {return (sbp.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || []).reduce(function(sum, value) {return parseFloat(sum) + parseFloat(value);});}
  function setActiveElement(selector) {elementReady(selector).then(element => {const temp = element.tabIndex;element.tabIndex = 0;element.focus();element.tabIndex = temp;});}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const selectors = selector.split(', ');
    if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');
        events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true}); element.dispatchEvent(eventObject);});});}
  function BpNote(message, level = 'info') {const timestamp = new Date().toLocaleTimeString();switch (level) {case 'warn':console.warn(`[BASS V95.1] ${timestamp} - WARNING: ${message}`);break;
      case 'error':console.error(`[BASS V95.1] ${timestamp} - ERROR: ${message}`);break;default:console.log(`[BASS V95.1] ${timestamp} - INFO: ${message}`);}}
  function DecodeBase64(string, times = 1) {let decodedString = string;for (let i = 0; i < times; i++) {decodedString = atob(decodedString);}return decodedString;}
  function Decrypter(string, shift = 13) {return string.replace(/[a-z]/gi, c => {const base = c <= 'Z' ? 90 : 122;return String.fromCharCode(base >= (c = c.charCodeAt(0) + shift) ? c : c - 26);});}
  function TrustMe() {if (!elementExists('body.no-js')) {const originalAddEventListener = EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener = function(type, listener, options) {
    const wrappedListener = function(event) {const clonedEvent = Object.create(event);Object.defineProperty(clonedEvent, "isTrusted", {value: true,writable: false});
    return listener.call(this, clonedEvent);};return originalAddEventListener.call(this, type, wrappedListener, options);};}}
  function waitForElm(query, callback, maxWaitTime = 15, initialDelay = 5) {const startTime = Date.now();const maxWaitTimeMs = maxWaitTime * 1000;const initialDelayMs = initialDelay * 1000;
    setTimeout(() => {const observer = new MutationObserver(() => {if (elementExists(query)) {observer.disconnect();callback(bp(query));} else if (Date.now() - startTime >= maxWaitTimeMs + initialDelayMs) {
          observer.disconnect();BpNote(`Element ${query} not found within ${maxWaitTime + initialDelay} seconds`, 'warn');}});observer.observe(document.body, {childList: true,subtree: true});
      if (elementExists(query)) {observer.disconnect();callback(bp(query));}}, initialDelayMs);}
  function SameTab() {Object.defineProperty(unsafeWindow, 'open', {value: function(url) {if (url) {location.href = url;BpNote(`Forced window.open to same tab: ${url}`);}return null;},writable: false,configurable: false});
    document.addEventListener('click', (e) => {const target = e.target.closest('a[target="_blank"]');if (target && target.href) {e.preventDefault();location.href = target.href;BpNote(`Redirected target="_blank" to same tab: ${target.href}`);}}, true);
    document.addEventListener('submit', (e) => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();location.href = form.action;BpNote(`Redirected form target="_blank" to same tab: ${form.action}`);}}, true);}
  function BlockRead(SearchString, nameFunc) {try {if (!elementExists('body.no-js')) {if (typeof window[nameFunc] !== 'function') {BpNote(`Function ${nameFunc} not found or not a function`, 'warn');return;}const target = window[nameFunc];
    window[nameFunc] = function(...args) {try {const callback = args[0];const stringFunc = callback && typeof callback === 'function' ? callback.toString() : '';const regex = new RegExp(SearchString, 'i');if (regex.test(stringFunc)) {args[0] = function() {};}
    return target.call(this, ...args);} catch (err) {console.error(`Error in overridden ${nameFunc}:`, err);return target.call(this, ...args);}};}} catch (err) {console.error('Error in BlockRead:', err);}}
  function strBetween(s, front, back, trim = false) {if (typeof s !== 'string' || s.indexOf(front) === -1 || s.indexOf(back) === -1) return '';const start = s.indexOf(front) + front.length;const end = s.indexOf(back, start);
    if (start >= end) return '';let result = s.slice(start, end);if (trim) {result = result.replaceAll(' ', '');result = result.trim();result = result.replaceAll('\n', ' ');} else {result = result.trim();}return result.replace(/['"]/g, '');}
  function EnableRCF() {var events = ['contextmenu', 'copy', 'cut', 'paste', 'select', 'selectstart','dragstart', 'drop'];function preventDefaultActions(event) {event.stopPropagation();}events.forEach(function(eventName) {document.addEventListener(eventName, preventDefaultActions, true);});}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function Listener(callback) {if (!elementExists('body.no-js')) {const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", function() { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}}
  function AIORemover(action, target = null) {switch (action) {case 'removeRef': delete document.referrer;document.__defineGetter__('referrer', () => target || '');BpNote('Referrer removed or set to:', target || 'empty');break;
      case 'removeBp': if (!target) {BpNote('Selector is required for removeBp action.', 'error');return;}var elements = bp(target, true);elements.forEach(element => element.remove());BpNote(`Elements with selector "${target}" removed.`);break;
      case 'delCookie': if (!target) {BpNote('Cookie name is required for delCookie action.', 'error');return;}document.cookie = `${target}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;BpNote(`Cookie "${target}" deleted.`);break; default: BpNote('Invalid action. Use "removeRef", "removeBp", or "delCookie".', 'error');}}
  function RSCookie(action, name, value = null, days = null) {if (action === 'set') {if (!name || value === null) {BpNote('Nama cookie dan nilai harus disediakan untuk mode "set".', 'error');return;}const date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = days ? `; expires=${date.toUTCString()}` : '';document.cookie = `${name}=${value}${expires}; path=/`;BpNote(`Cookie "${name}" telah diatur dengan nilai "${value}".`);} else if (action === 'read') {
    if (!name) {BpNote('Nama cookie harus disediakan untuk mode "read".', 'error');return;}const cookieName = name + "=";const decodedCookie = decodeURIComponent(document.cookie);const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {let cookie = cookieArray[i];while (cookie.charAt(0) === ' ') {cookie = cookie.substring(1);}if (cookie.indexOf(cookieName) === 0) {return cookie.substring(cookieName.length, cookie.length);}}return "";} else {BpNote('Mode tidak valid. Gunakan "set" atau "read".', 'error');}}
  function BypassedByBloggerPemula(domains, data, url = '', blog = false, all = false) {if (elementExists('body.no-js')) {BpNote("Bypass dibatalkan karena elemen 'body.no-js' ditemukan."); return;}if (!new RegExp(domains).test(location.host)) return;function extractFinalUrl() {const currentUrl = window.location.href;
    const urlMatches = currentUrl.match(/url=(https?:\/\/[^&]+)/g);if (!urlMatches) return null;let finalUrl = urlMatches[urlMatches.length - 1].replace('url=', '');try {finalUrl = decodeURIComponent(finalUrl);} catch (e) {BpNote('Error decoding URL:', e);}return finalUrl;}
    if (typeof data === 'function') return data();if (typeof data === 'string') {const params = data.split(',');if (params.every(p => BpParams.has(p))) {const use = params[0];let value = all ? BpParams.getAll(use).find(u => new RegExp(domains).test(u)) : BpParams.get(use);
    if (!value || value.includes('st?')) {value = extractFinalUrl();}if (value) redirect(url + value, blog);}return;}if (Array.isArray(data)) data = {'/': data};if (!(location.pathname in data)) return;const [key, value] = data[location.pathname];let finalValue = '';
    if (typeof key === 'object' && key.test(location.search)) {finalValue = value + RegExp.$1;} else if (BpParams.has(key)) {finalValue = value + BpParams.get(key);} else {finalValue = extractFinalUrl();}if (finalValue) redirect(url + finalValue, blog);}
  function notify(txt, clicktocopy = false, clicktoclose = false, duration = cfg.get('SetDelay')) {const m = document.createElement('div');m.style.padding = '10px 20px';m.style.zIndex = 10000;m.style.position = 'fixed';m.style.width = `970px`;m.style.top = '10px';m.style.transform = 'translateX(-50%)';
    m.style.left = '50%';m.style.fontFamily = 'Arial, sans-serif';m.style.fontSize = '16px';m.style.color = 'white';m.style.textAlign = 'center';m.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';m.style.boxSizing = 'border-box';m.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';m.style.cursor = 'pointer';
    const mainText = document.createElement('div');mainText.innerText = txt.replace('@', duration);m.appendChild(mainText);const actionText = document.createElement('span');actionText.style.position = 'absolute';actionText.style.right = '10px';actionText.style.bottom = '5px';actionText.style.fontSize = '12px';actionText.style.color = 'white';actionText.style.userSelect = 'none';
    if (clicktocopy) {actionText.innerText = 'Click to Copy';} else if (clicktoclose) {actionText.innerText = 'Click to Close';}m.appendChild(actionText);document.body.appendChild(m);m.addEventListener('click', () => {if (clicktocopy) {navigator.clipboard.writeText(txt.replace('@', duration)).then(() => {mainText.innerText = 'Copied to clipboard!';
    setTimeout(() => {document.body.removeChild(m);clearInterval(timerId);}, 1000);}).catch(err => {console.error('Failed to copy text: ', err);});}if (clicktoclose) {document.body.removeChild(m);clearInterval(timerId);}});const timerId = setInterval(() => {duration -= 1;if (duration <= 0) {clearInterval(timerId);} else {mainText.innerText = txt.replace('@', duration);}}, 1000);}
  function NoFocus() {window.mouseleave = true;window.onmouseover = true;document.hasFocus = () => true;if (!Object.getOwnPropertyDescriptor(document, 'webkitVisibilityState')?.get) {Object.defineProperty(document, 'webkitVisibilityState', {get: () => 'visible',configurable: true});}
    if (!Object.getOwnPropertyDescriptor(document, 'visibilityState')?.get) {Object.defineProperty(document, 'visibilityState', {get: () => 'visible',configurable: true});}if (!Object.getOwnPropertyDescriptor(document, 'hidden')?.get) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}
    const eventOptions = {capture: true,passive: true};const ensureVisibility = () => {if (document.hidden !== false) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}};ensureVisibility();window.addEventListener('focus', e => e.stopImmediatePropagation(), eventOptions);window.addEventListener('blur', e => e.stopImmediatePropagation(), eventOptions);}
  function CaptchaDone(callback, checkInterval = 1000) {const window = unsafeWindow;if (typeof callback !== 'function') {BpNote('Callback harus berupa fungsi', 'error');return;}let intervalId;
    const checkCaptcha = () => {try {if (elementExists('.iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success')) {clearInterval(intervalId);callback();return;}
    if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {if (window.hcaptcha && typeof window.hcaptcha.getResponse === 'function') {const response = window.hcaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("input[name='cf-turnstile-response']") && !elementExists('body.no-js')) {if (window.turnstile && typeof window.turnstile.getResponse === 'function') {const response = window.turnstile.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("iframe[title='reCAPTCHA']")) {if (window.grecaptcha && typeof window.grecaptcha.getResponse === 'function') {const response = window.grecaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}} catch (error) {console.error('Error checking captcha:', error);}};intervalId = setInterval(checkCaptcha, checkInterval);}
  function BoostTimers(targetDelay) {const wrapTimer = (orig, type) => (func, delay, ...args) => orig(func, (typeof delay === 'number' && delay >= targetDelay) ?(BpNote(`[BoostTimers] Accelerated ${type} from ${delay}ms to 50ms`), 50) : delay, ...args);
    try {Object.defineProperties(unsafeWindow, {setTimeout: { value: wrapTimer(unsafeWindow.setTimeout, 'setTimeout'), writable: true, configurable: true },setInterval: { value: wrapTimer(unsafeWindow.setInterval, 'setInterval'), writable: true, configurable: true }});} catch (e) {
    const proxyTimer = (orig, type) => new Proxy(orig, { apply: (t, _, a) => t(a[0], (typeof a[1] === 'number' && a[1] >= targetDelay) ? (BpNote(`[BoostTimers] Accelerated ${type} from ${a[1]}ms to 50ms`), 50) : a[1], ...a.slice(2)) });unsafeWindow.setTimeout = proxyTimer(unsafeWindow.setTimeout, 'setTimeout');unsafeWindow.setInterval = proxyTimer(unsafeWindow.setInterval, 'setInterval');}}
  function DebugLog() {if (window.self !== window.top || elementExists('body.no-js')) {BpNote("DebugLog Skipped, Iframe or 'body.no-js' detected", 'info'); return;}const STORAGE_KEY = 'protection_tracker';let attemptCount = GM_getValue(STORAGE_KEY, 0);if (attemptCount > 0) setTimeout(() => GM_setValue(STORAGE_KEY, 0), 60000);const SavedMethods = {
    output: BpNote,trace: typeof console.debug === 'function' ? console.debug : BpNote,alert: console.warn,notice: console.info,issue: console.error,grid: typeof console.table === 'function' ? console.table : BpNote,wipe: console.clear,funcBuilder: Function.prototype.constructor,makeElement: document.createElement};
    const limits = {grid: { max: 5, timeframe: 5000 },wipe: { max: 5, timeframe: 5000 },filteredOutput: { max: 5, timeframe: 5000 },blocker: { max: 1, timeframe: 15000, count: 0, timestamp: 0 }};function canReport(category) {const restriction = limits[category] || {count: 0};if (restriction.stopped) return false;
    const currentTime = Date.now();restriction.timestamp = restriction.timestamp || currentTime;if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count > restriction.max) {restriction.stopped = true;SavedMethods.alert(`Max limit hit for ${category}`);return false;}return true;}
    Object.defineProperty(window, 'onbeforeunload', { configurable: false, writable: false, value: null });['output', 'trace', 'alert', 'notice', 'issue', 'grid'].forEach(method => {if (typeof SavedMethods[method] === 'function') {console[method] = new Proxy(SavedMethods[method], {apply: (target, context, params) => {const adjustedParams = params.map(item => {if (typeof item === 'function') return "Hidden Function";
    if (typeof item !== 'object' || !item) return item;const attributes = Object.getOwnPropertyDescriptors(item);if (attributes.toString || 'get' in attributes) return "Hidden Accessor";if (Array.isArray(item) && item.length === 50 && typeof item[0] === "object") return "Hidden BigArray";return item;});if (params.length - adjustedParams.filter(x => x === params[params.indexOf(x)]).length >= Math.max(params.length - 1, 1)) {
    if (!canReport("filteredOutput")) return;}return SavedMethods[method].apply(context, adjustedParams);}});}});['wipe'].forEach(method => {console[method] = () => canReport(method) && SavedMethods.alert(`Blocked ${method}`);});window.Function.prototype.constructor = new Proxy(SavedMethods.funcBuilder, {apply: (target, context, inputs) => {const codeText = inputs[0];if (codeText?.includes('debugger')) {attemptCount++;
    GM_setValue(STORAGE_KEY, attemptCount);if (canReport("blocker")) SavedMethods.alert(`Blocked debugger (count: ${attemptCount})`);if (attemptCount > 100) {GM_setValue(STORAGE_KEY, 0);throw new Error("Debugger overload detected");}setTimeout(() => GM_setValue(STORAGE_KEY, Math.max(0, attemptCount - 1)), 1);inputs[0] = codeText.replaceAll("debugger", "");}return target.apply(context, inputs);}});
    document.createElement = new Proxy(SavedMethods.makeElement, {apply: (target, context, args) => {const newNode = target.apply(context, args);if (args[0].toLowerCase() === "iframe") {newNode.addEventListener("load", () => {try {newNode.contentWindow.console = { ...console };newNode.contentWindow.Function.prototype.constructor = window.Function.prototype.constructor;} catch (err) {}});}return newNode;}});
    Object.keys(SavedMethods).forEach(method => {if (method in console) Object.defineProperty(console, method, { configurable: false, writable: false });});if (cfg.get('AntiDebug')) {const baseTiming = performance.now;BpNote("Performance Modified For Anti-Debug Protection");performance.now = () => baseTiming() + Math.random() * 2;}}
  function CheckVisibility(selector, operatorOrCallback, textCondition, callback, actionOnVisible = true) {function isElementVisible(elem) {if (!elem) return false;if (!elem.offsetHeight && !elem.offsetWidth && !elementExists('body.no-js')) return false;if (getComputedStyle(elem).visibility === 'hidden' && !elementExists('body.no-js')) return false;return true;}
    function checkTextCondition(textCondition) {try {const conditionParts = textCondition.split(/(==|!=)/);if (conditionParts.length !== 3) {console.error('Invalid text condition format:', textCondition);return false;}const selectorPart = conditionParts[0].trim();const selector = selectorPart.replace("bp('", "").replace("').innerText", "").trim();
    const expectedValue = conditionParts[2].trim().replace(/['"]/g, '');const elem = bp(selector);if (!elem) return false;const actualValue = elem.innerText.trim();if (conditionParts[1].trim() === '==') {return actualValue.includes(expectedValue);} else if (conditionParts[1].trim() === '!=') {return !actualValue.includes(expectedValue);}return false;} catch (error) {
    console.error('Error evaluating text condition:', error);return false;}}if (typeof operatorOrCallback === 'function') {const callbackFn = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);if ((actionOnVisible && isVisible) || (!actionOnVisible && !isVisible)) {clearInterval(intervalId);callbackFn();}} catch (error) {
    console.error('Error checking visibility:', error);}}, checkInterval);} else if (typeof operatorOrCallback === 'string' && (operatorOrCallback === '&&' || operatorOrCallback === '||')) {const operator = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);const isTextConditionMet = checkTextCondition(textCondition);
    if ((operator === '&&' && isVisible && isTextConditionMet) || (operator === '||' && (isVisible || isTextConditionMet))) {clearInterval(intervalId);callback();}} catch (error) {console.error('Error checking visibility and text condition:', error);}}, checkInterval);} else {console.error('Parameter tidak valid.');}}
  function DoIfExists(query, actionOrTime = 'click', timeInSecOrFuncName = 1, funcName = 'setTimeout') {let action = 'click';let time = 1;let timerFuncName = 'setTimeout';if (typeof actionOrTime === 'number') {time = actionOrTime;timerFuncName = typeof timeInSecOrFuncName === 'string' ? timeInSecOrFuncName : 'setTimeout';} else if (typeof actionOrTime === 'string') {action = actionOrTime;time = typeof timeInSecOrFuncName === 'number' ? timeInSecOrFuncName : 1;timerFuncName = typeof funcName === 'string' ? funcName : 'setTimeout';}
    function GetForm(FormName) {const forms = document.forms;for (let i = 0; i < forms.length; i++) {if (FormName === 'mdn') {const form = forms[i].innerHTML;if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {const bait = forms[i].action;if (/bypass.html|adblock.html/.test(bait)) continue;return forms[i];}}return null;}
    let element;if (query === 'mdn' || query === 'Allin1') {element = GetForm(query);} else {element = bp(query);}if (element) {if (typeof element[action] === 'function') {if (timerFuncName === 'setTimeout' || timerFuncName === 'setInterval') {const timerFunc = window[timerFuncName];if (timerFuncName === 'setTimeout') {timerFunc(() => {
    try {element[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');
    clearInterval(intervalId);}} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);clearInterval(intervalId);}}, time * 1000);BpNote(`Interval ID: ${intervalId}`);}} else {BpNote(`Timer tidak valid. Gunakan "setTimeout" atau "setInterval".`,'error');}} else {BpNote(`Elemen "${query}" tidak memiliki metode "${action}".`,'error');}} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');}}
  function BlockPopup() {const window = unsafeWindow;const originalOpen = window.open;function createNotification(url, callback) {const div = document.createElement('div');div.className = 'popup-notification';const shadow = div.attachShadow({mode: 'open'});
      shadow.innerHTML = `<style>:host { position: fixed; top: 15px; right: 15px; z-index: 9999; font-family: Arial, sans-serif; }.popup { background: #fff; border: 2px solid #333; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 350px; border-radius: 5px; }.title { font: bold 16px Arial; color: #000; margin-bottom: 10px; padding-right: 20px; position: relative; }.url { font-size: 14px; color: #222; word-break: break-all; background: #f5f5f5; padding: 8px; border-radius: 3px; margin-bottom: 15px; }.buttons { display: flex; gap: 10px; }
      button { font: bold 14px Arial; padding: 8px 15px; cursor: pointer; border: none; border-radius: 3px; transition: background 0.2s; }.allow { background: #4CAF50; color: #fff; } .allow:hover { background: #45a049; }.block { background: #f44336; color: #fff; } .block:hover { background: #da190b; }.whitelist { background: #2196F3; color: #fff; opacity: 0.6; cursor: not-allowed; }.reload { background: #FFC107; color: #000; } .reload:hover { background: #FFB300; }.close { position: absolute; top: 0; right: 0; background: none; border: none; font-size: 16px; cursor: pointer; color: #333; }.close:hover { color: #f44336; }
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector('.allow').onclick = () => {callback(true);remove();};shadow.querySelector('.block').onclick = () => {callback(false);remove();};shadow.querySelector('.reload').onclick = () => {window.location.reload();remove();};
      shadow.querySelector('.close').onclick = () => {callback(false);remove();};bp('.popup-notification')?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula('gocmod.com', 'urls', '');
  BlockRead('(4d-bl0ck3r|ad-blocker)', 'setTimeout');
  //BypassedByBloggerPemula('api.gplinks.com', 'url', '');
  BypassedByBloggerPemula('writedroid.in', 'token', '');
  BypassedByBloggerPemula('web1s.com', 'token,url', '');
  BypassedByBloggerPemula('modmania.eu.org', 'token', '');
  BypassedByBloggerPemula('ruwet.us', 'link', 'https://yo.adlinku.com/');
  BypassedByBloggerPemula('autodime.com', 'go', 'https://go.linkrex.net/');
  BlockRead('(/adblock|/ad-now.php|/bypass|/detected.html)', 'setInterval');
  BypassedByBloggerPemula('ahtio.com', 'link', 'https://avashortener.com/');
  BypassedByBloggerPemula('switchhindi.com', 'link', 'https://udlinks.com/');
  BypassedByBloggerPemula('olhonagrana.com', 'link', 'https://syflink.com/');
  BypassedByBloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/');
  BypassedByBloggerPemula('akcartoons.in', 'link', 'https://go.moonlinks.in/');
  BypassedByBloggerPemula('blog.btcon.online', 'link', 'https://linkkaty.com/');
  BypassedByBloggerPemula('nisnisin.com', 'link', 'https://link.ezlinkad.com/');
  BypassedByBloggerPemula('poco.rcccn.in', 'id', 'https://links.rcccn.in/?id=');
  BypassedByBloggerPemula('links.rcccn.in', 'id', 'https://blog.techweedy.top/');
  BypassedByBloggerPemula('suntechu.in', 'post', 'https://web.urllinkshort.in/');
  BypassedByBloggerPemula('market.finclub.in', 'link', 'https://go.tnshort.net/');
  BypassedByBloggerPemula('link.sharedp.com', 'id', 'https://last.techyuth.xyz/');
  BypassedByBloggerPemula('indirasari.com', 'link', 'https://link.paid4link.com/');
  BypassedByBloggerPemula('wikitraveltips.com', 'link', 'https://adrinolinks.in/');
  BypassedByBloggerPemula('encurtaclik.com', 'link', 'https://go.encurtaclik.com/');
  BypassedByBloggerPemula('appkamods.com', 'link', 'https://go.shorturllinks.com/');
  BypassedByBloggerPemula('keepzem.com', 'link', 'https://ahtio.com/safe.php?link=');
  //BypassedByBloggerPemula('venzoars.com', 'link', 'https://indids.com/token.php?id=');
  BypassedByBloggerPemula('short.sharedp.com', 'id', 'https://link.sharedp.com/?id=');
  BypassedByBloggerPemula('earn.tensailab.com', 'adlinkfly', 'https://go.snaply.in/');
  BypassedByBloggerPemula('postazap.com', 'link', 'https://encurtador.postazap.com/');
  BypassedByBloggerPemula('mamahawa.com', 'get', 'https://forextrader.site/SkipLink/');
  BypassedByBloggerPemula('shakib.quick91.com', 'link', 'https://link.get2short.com/');
  BypassedByBloggerPemula('reminimod.co', 'land', 'https://insurance.techymedies.com/');
  BypassedByBloggerPemula('indiamaja.com', 'link', 'https://newshuta.in/safe.php?link=');
  BypassedByBloggerPemula('tbhlabsnews.com', 'link', 'https://getlink.tbhlabsnews.com/');
  BypassedByBloggerPemula('interestingfactsare.com', 'link', 'https://m.urlbharat.xyz/');
  BypassedByBloggerPemula('djnonstopmusic.in', 'link', 'https://gadgets.ishortify.com/');
  BypassedByBloggerPemula('(mewsr|techstudify).com', 'link', 'https://crazymindhub.com/');
  BypassedByBloggerPemula('newshuta.in|60fpspubg.one', 'link', 'https://inshorturl.com/');
  BypassedByBloggerPemula('tech.filohappy.in', 'link', 'https://happyfiles.dtglinks.in/');
  BypassedByBloggerPemula('kelasadsense.com', 'adlinkfly', 'https://link.paid4link.com/');
  BypassedByBloggerPemula('trust.bgmi32bitapk.in', 'grey', 'https://get.instantearn.in/');
  BypassedByBloggerPemula('news.topsarkariyojana.in', 'link', 'https://go.just2earn.com/');
  BypassedByBloggerPemula('(cyberlynews|quizrent).com', 'id', 'https://linkshortify.com/');
  BypassedByBloggerPemula('cafe.warrenrahul.in', 'adlinkfly', 'https://go.warrenrahul.in/');
  BypassedByBloggerPemula('earn.bankshiksha.in', 'LinkShortUrlID', 'https://go.kingurl.in/');
  BypassedByBloggerPemula('techurlshort.in', 'grey', 'https://hrpunjab.in/savise.php?grey=');
  BypassedByBloggerPemula('ninjamodz.litonmods.com', 'adlinkfly', 'https://shortxlinks.in/');
  BypassedByBloggerPemula('kingyojana.com', 'link', 'https://newkhabar24.com/safe.php?link=');
  BypassedByBloggerPemula('sayphotobooth.com', 'babu', 'https://odiadance.com/safe2.php?link=');
  BypassedByBloggerPemula('odiadance.com', 'link', 'https://shakib.quick91.com/safe2.php?link=');
  BypassedByBloggerPemula('rajdhanimaja.com', 'grey', 'https://techurlshort.in/inuser.php?grey=');
  BypassedByBloggerPemula('highkeyfinance.com', 'landhere', 'https://insurance.techymedies.com/');
  BypassedByBloggerPemula('financeyogi.net', 'link', 'https://market.finclub.in/safe2.php?link=');
  BypassedByBloggerPemula('(gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com', 'link', '');
  //BypassedByBloggerPemula('(surfsees|travelagancy).com', 'link', 'https://cryptings.in/token.php?id=');
  BypassedByBloggerPemula('newkhabar24.com', 'link', 'https://news.topsarkariyojana.in/safe.php?link=');
  BypassedByBloggerPemula(/go.link4rev.site/, function() {location = location.href.replace('go.', '');});
  BypassedByBloggerPemula(/infinityskull.com/, {'/safe.php': ['link', 'https://go.publicearn.com/'],}, false);
  BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');});
  BypassedByBloggerPemula('ninjamodz.mtcremix.com', 'adlinkfly', 'https://ninjamodz.litonmods.com/?adlinkfly=');
  BypassedByBloggerPemula('bharatbestdeals.com', 'post', 'https://a1.payalgaming.co.in/click.php?LinkShortUrlID=');
  BypassedByBloggerPemula('earnbox.sattakingcharts.in', 'LinkShortUrlID', 'https://trust.bgmi32bitapk.in/geio.php?grey=');
  BypassedByBloggerPemula(/t.me/, () => {if (BpParams.has('url')) {location = decodeURIComponent(BpParams.get('url'));}});
  BypassedByBloggerPemula('a1.payalgaming.co.in', 'LinkShortUrlID', 'https://earn.bankshiksha.in/click.php?LinkShortUrlID=');
  BypassedByBloggerPemula(/dutchycorp.space/, () => {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});
  //BypassedByBloggerPemula(/tiktok.com/, () => {if (BpParams.has('target')) {location = decodeURIComponent(BpParams.get('target'));}});
  //BypassedByBloggerPemula(/(facebook|instagram).com/, () => {if (BpParams.has('u')) {location = decodeURIComponent(BpParams.get('u'));}});
  BypassedByBloggerPemula('(earnc1.bankshiksha|domain.bgmiupdate.com).in', 'grey', 'https://a1.payalgaming.co.in/click.php?LinkShortUrlID=');
  BypassedByBloggerPemula(/financedoze.com/, () => {if (BpParams.has('id')) {location = 'https://www.google.com/url?q=https://financedoze.com';}});
  BypassedByBloggerPemula(/vk.com/, () => {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));}});
  BypassedByBloggerPemula(/(teachsansar|technicalatg|foodxor).com/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BypassedByBloggerPemula(/ouo.io/, function() {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https://' + BpParams.getAll('s');} else if (BpParams.has('s')) {location = BpParams.getAll('s');}});
  BypassedByBloggerPemula(/triggeredplay.com/, () => {if (location.href.includes('#')) {let trigger = new URLSearchParams(window.location.hash.substring(1));
      let redplay = trigger.get('url');if (redplay) {let decodedUrl = DecodeBase64(redplay);window.location.href = decodedUrl;}}});
  BypassedByBloggerPemula(/adbtc.top/, () => {CaptchaDone(() => {DoIfExists("input[class^=btn]");});let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}
      if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/youtube.com/, () => {if (location.href.includes('/shorts/') && cfg.get('YTShort')) {if (cfg.get('YTShort') == true) {location = location.href.replace('/shorts/', '/watch?v=');let Tubeshort = location.href;
    var observer = new MutationObserver(() => {if (location.href !== Tubeshort) {Tubeshort = location.href; if (location.href.includes('/shorts/')) location = location.href.replace('/shorts/', '/watch?v=');}});
    var short = {subtree: true,childList: true}; observer.observe(document, short);}}});
  BypassedByBloggerPemula(/linkbox.to/, () => {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {BpNote(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);BpNote(itemInfo); redirect(itemInfo.url, false);}});});
  Object.defineProperty(document, 'querySelector', { value: document.querySelector, configurable: false, writable: false });
  const sl = (h => {
    switch (h.host) {case 'multiup.io': if (h.href.includes('/download/')) return h.href.replace('download/', 'en/mirror/'); break;
      case 'modsfire.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://modsfire.com/d/' + RegExp.$1;} break;
      //case 'pixeldrain.com': if (h.href.includes('/u/')) return h.href.replace('u/', '/api/file/') + '?download'; break;
      case 'social-unlock.com': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://social-unlock.com/redirect/' + RegExp.$1;} break;
      //case 'work.ink': if (/^\/([^\/]+)/.test(h.pathname)) {return 'https://adbypass.org/bypass?bypass=' + location.href.split('?')[0];} break;
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');}
      else if (h.pathname === '/url' && h.searchParams.has('url')) {return h.searchParams.get('url');}break;
      default: break;}})(new URL(location.href));if (sl) {location.href = sl;}
  // Injecting code from start and the end of document coded by @Konf
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    if (cfg.get('SameTab') == true) {SameTab();BpNote('SameTab Feature Activated!');}if (cfg.get('TimerFC') == true) {BoostTimers(1000);BpNote('Fast Timer Feature Activated!');}
    let Numcode = bp('input.captcha_code');let DigitNum; function getLeft(d) {return parseInt(d.style.paddingLeft);} if (Numcode) {DigitNum = Numcode.parentElement.previousElementSibling.children[0].children; Numcode.value = [].slice.call(DigitNum).sort(function(d1, d2) {return getLeft(d1) - getLeft(d2);}).map(function(d) {return d.textContent;}).join('');}
    let List = ['lopteapi.com', '3link.co', 'web1s.com', 'vuotlink.vip'];let List1 = ['ay.live', 'aylink.co', 'gitlink.pro']; let $ = unsafeWindow.jQuery; let respect = 'https://bloggerpemula.pythonanywhere.com/?BypassResults='; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
    if (location.host === 'upfion.com') {} else if (List.includes(location.host)) {DoIfExists('a.btn.btn-success.btn-lg.get-link', 3, 'setInterval');
    } else if (List1.includes(location.host)) { var form = $('form[id=go-link]');$.ajax({type: 'POST', async: true, url: form.attr('action'),data: form.serialize(),dataType: 'json',
        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {$('form[id=go-link]').unbind().submit(function(e) {e.preventDefault();
        var form = $(this);var url = form.attr('action');const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");const blogger = $(".main-header");const pemula = $(".col-sm-6.hidden-xs");
        $.ajax({type: "POST", url: url, data: form.serialize(), beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
            notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');},
          success: function(result, status, xhr) {if (xhr.responseText.match('(insfly|Insfly).pw|(freecrypto|freeltc|a-s-cracks).top|mdiskshortner.link|(oscut|exashorts).fun|bigbtc.win|slink.bid|clockads.in')) {location.href = result.url;} else {redirect(result.url);}}});});}
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
      switch (h.host) {
        case 'gamerfang.in': if (b) {meta('https://faux.gamerfang.in/tech/' + RegExp.$1);} break;
        case 'blog.mphealth.online': if (b) {meta('https://techyuth.xyz/blog/' + RegExp.$1);} break;
        case 'mphealth.online': if (b) {meta('https://blog.mphealth.online/verify/?' + RegExp.$1);} break;
        case 'shrs.link': case 'shareus.io':
          if (/^\/old\/([^\/]+)/.test(h.pathname)) {return 'https://jobform.in/?link=' + RegExp.$1;} break;
        case 'www.gifans.com':
          if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;} break;
        case 'www.pythondunyasi.com':
          if (h.pathname === '/p/blog-page_22.html' && h.searchParams.has('url')) {return h.searchParams.get('url').substring(1);} break;
        case 'jrlinks.in':
          if (h.pathname === '/safe2.php' && h.searchParams.has('link')) {meta('https://internet.webhostingtips.club/' + h.searchParams.get('link'));} break;
        default: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Please Wait in @ Seconds , Tell Amm0ni4 to Delete His Debloated if You Want My Script to be Updated Regularly , Thanks`);}
      setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    if (cfg.get('AntiDebug') == true) {DebugLog();BpNote('Debug Protection Shield Feature Activated!');}if (cfg.get('BlockFC') == true) {NoFocus();BpNote('Focus Control Feature Activated!');}
    if (cfg.get('RightFC') == true) {EnableRCF();BpNote('Right Click & Copy Protection Feature Activated!');}if (cfg.get('BlockPop') == true) {BlockPopup();BpNote('Popup Blocker Feature Activated!');}
    // My Script will automatically download from the site below , Enable it from the Settings
    if (cfg.get('AutoDL') == true) {BpNote('Auto Download Feature Activated!');
    BypassedByBloggerPemula(/upload.ee/, function() {DoIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/appdrive\.*/, function() {DoIfExists('#drc', 2);});
    BypassedByBloggerPemula(/dayuploads.com/, () => {DoIfExists('#ad-link2', 2);});
    BypassedByBloggerPemula(/dddrive.me/, () => {DoIfExists('.btn-outline-primary', 2);});
    BypassedByBloggerPemula(/uppit.com/, () => {DoIfExists('.btn-primary.btn-xl.btn', 2);});
    BypassedByBloggerPemula(/krakenfiles.com/, () => {DoIfExists('.download-now-text', 2);});
    BypassedByBloggerPemula(/file-upload.net/, () => {DoIfExists('#downbild.g-recaptcha', 2);});
    BypassedByBloggerPemula(/userscloud.com|dosya.co/, () => {DoIfExists('#btn_download', 2);});
    BypassedByBloggerPemula(/hexupload.net/, () => {DoIfExists('.btn-success.btn-lg.btn', 1);});
    //BypassedByBloggerPemula(/gofile.io/, () => {waitForElm('a.me-1', gfBtn => gfBtn.click());});
    //BypassedByBloggerPemula(/rapidgator.net/, () => {DoIfExists('.btn-free.act-link.link', 2);});
    BypassedByBloggerPemula(/dbree.me/, () => {DoIfExists('.center-block.btn-default.btn', 2);});
    //BypassedByBloggerPemula(/dropgalaxy.com/, () => {DoIfExists("button[id^='method_fre']", 2);});
    BypassedByBloggerPemula(/megaupto.com/, () => {DoIfExists('#direct_link > a:nth-child(1)', 2);});
    //BypassedByBloggerPemula(/karanpc.com/, () => {DoIfExists('#downloadButton > form', 'submit', 2);});
    BypassedByBloggerPemula(/douploads.net/, () => {DoIfExists('.btn-primary.btn-lg.btn-block.btn', 2);});
    BypassedByBloggerPemula(/dataupload.net/, async function() {await sleep(5000);ReadytoClick('.downloadbtn');});
    //BypassedByBloggerPemula(/buzzheavier.com/, function() {waitForElm('#download-link', bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/filemoon.sx/, () => waitForElm('div.download2 a.button', fm => redirect(fm.href, false)));
    BypassedByBloggerPemula(/render-state.to/, () => {SameTab();if (BpParams.has('link')) {unsafeWindow.goToLink();}});
    BypassedByBloggerPemula(/bowfile.com/, () => {ReadytoClick('.download-timer > .btn--primary.btn > .btn__text', 2);});
    BypassedByBloggerPemula(/enlacito.com/, () => {setTimeout(() => {redirect(unsafeWindow.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/dailyuploads.net/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#fbtn1', 2);});
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    //BypassedByBloggerPemula(/gofile.io/, () => {elementReady('#filemanager').then(() => ReadytoClick('button.item_download', 2));});
    BypassedByBloggerPemula(/uploadev.org/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#direct_link > a', 2);});
    BypassedByBloggerPemula(/files.fm/, () => waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click()));
    BypassedByBloggerPemula(/gdflix.dad/, () => {elementReady('#cf_captcha.card').then(() => ReadytoClick('a.btn.btn-outline-success', 2));});
    BypassedByBloggerPemula(/megaup.net/, function() {waitForElm('a.btn.btn-default', muBtn => muBtn.click());DoIfExists('#btndownload', 7);});
    BypassedByBloggerPemula(/mega4upload.net/, () => {DoIfExists("input[name=mega_free]",2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    //BypassedByBloggerPemula(/financemonk.net/, () => {CaptchaDone(() => {DoIfExists('#downloadBtnClick');});DoIfExists('#dllink', 'submit', 3);});
    BypassedByBloggerPemula(/filespayouts.com/, () => {DoIfExists("input[name='method_free']", 2);CaptchaDone(() => {ReadytoClick('#downloadbtn');});});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('.btn-download.btn', 1);});
    BypassedByBloggerPemula(/uploady.io/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});DoIfExists('#free_dwn', 2);DoIfExists('.rounded.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/adoc.pub/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.mt-15.btn-block.btn-success.btn-lg.btn');});});
    BypassedByBloggerPemula(/pdfcoffee.com/, () => {DoIfExists('.btn-block.btn-success.btn', 2);CaptchaDone(() => {DoIfExists('.my-2.btn-block.btn-primary.btn-lg.btn');});});
    BypassedByBloggerPemula(/file-upload.org/, () => {DoIfExists("button[name='method_free']", 2);DoIfExists('.download-btn',2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/up-4ever.net/, () => {DoIfExists("input[name='method_free']", 2);DoIfExists('#downLoadLinkButton', 5);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/mexa.sh/, () => {parent.open = BpBlock();DoIfExists('#Downloadfre', 2);DoIfExists('#direct_link', 2);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, () => {DoIfExists("input[name='method_free']", 2);DoIfExists('.btn-dow.btn', 1);CaptchaDone(() => {DoIfExists('#downloadbtn');});});
    BypassedByBloggerPemula(/hitfile.net/, () => {CaptchaDone(() => {DoIfExists('#submit');});DoIfExists('.nopay-btn.btn-grey',2);waitForElm('#popunder2', hfl2 => redirect(hfl2.href, false),37);});
    BypassedByBloggerPemula(/4fnet.org/, function() {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, function() {if (elementExists('#divdownload')) {let oxy = bp('.ocdsf233').getAttribute('data-source_url');redirect(oxy, false);}});
    //BypassedByBloggerPemula(/udrop.com/, () => waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`), false)));
    BypassedByBloggerPemula(/mp4upload.com/, function() {
      DoIfExists('#todl', 2);DoIfExists("form[name='F1']", 'submit', 1);});
    BypassedByBloggerPemula(/workupload.com/, function() {
      if (elementExists('#download')) {DoIfExists('.btn-prio.btn', 2);}});
    BypassedByBloggerPemula(/mega4up.org/, function() {
      DoIfExists('input.btn.btn-info.btn-sm', 2);DoIfExists('.btn-dark.btn', 2);});
    BypassedByBloggerPemula(/docs.google.com/, () => {
      if (elementExists('#uc-dl-icon')) {DoIfExists('#downloadForm', 'submit', 1);}});
    BypassedByBloggerPemula(/uploadhaven.com/, function() {
      DoIfExists('.alert > a:nth-child(1)', 2);DoIfExists('#form-download', 'submit', 1);});
    BypassedByBloggerPemula(/ac.totsugeki.com/, function() {
      $("a[target='_blank']").removeAttr("target");DoIfExists('.btn-lg.btn-success.btn', 2);});
    BypassedByBloggerPemula(/katfile.com/, () => {CaptchaDone(() => {DoIfExists('#downloadbtn');});
      DoIfExists('#fbtn1', 2);waitForElm('#dlink', katf => redirect(katf.href, false));});
    BypassedByBloggerPemula(/anonym.ninja/, () => {
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];
      redirect(`https://anonym.ninja/download/file/request/${fd}`);}});
    BypassedByBloggerPemula(/vosan.co/, function() {bp('.elementor-size-lg').removeAttribute('target');
      DoIfExists('.elementor-size-lg', 2);DoIfExists('.wpdm-download-link', 2);});
    BypassedByBloggerPemula(/apkmody.io/, function() {
      if (elementExists('div.wp-block-buttons > div')) {location = location.href + '/download/mod';}});
    BypassedByBloggerPemula(/upfion.com/, () => {if (elementExists('.file-main.form-main')) {
        DoIfExists('.my-2.text-center > .btn-primary.btn', 2);CaptchaDone(() => {DoIfExists('#link-button');});}});
    BypassedByBloggerPemula(/takefile.link/, () => {
      if (elementExists('#F1')) {DoIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 'submit', 1);}});
    BypassedByBloggerPemula(/modcombo.com/, function() {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        DoIfExists('a.btn.btn-submit', 6);} else {DoIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/fileresources.net/, () => {
      if (elementExists('.download-timer')) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/freepreset.net/, () => {
      if (elementExists('#button_download')) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/doodrive.com/, function() {DoIfExists('.tm-button-download.uk-button-primary.uk-button', 3);
      waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href, false));});
    BypassedByBloggerPemula(/gocmod.com/, function() {
      if (elementExists('.view-app')) {bp('#no-link').removeAttribute('target');DoIfExists('.download-line-title', 2);}});
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, function() {DoIfExists('.mngez-free-download', 2);
      DoIfExists('#direct_link > a:nth-child(1)', 2);$('#downloadbtn').click();});
    BypassedByBloggerPemula(/qiwi.gg/, () => {if (elementExists("div [class^='page_DownloadPage']")) {
      DoIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
        let qiwi = bp("a[class^='DownloadButton_DownloadButton']"); setTimeout(() => {redirect(qiwi.href, false);}, 3 * 1000);}});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (elementExists('#turbo-table')) {let tb = bp('#nopay-btn').href;redirect(tb, false);}
      CaptchaDone(() => {DoIfExists('#submit');});waitForElm('#free-download-file-link', tur => redirect(tur.href, false));});
    BypassedByBloggerPemula(/sharemods.com/, () => {DoIfExists('#dForm', 'submit', 2);
      if (elementExists('.download-file-holder')) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href, false));}});
    BypassedByBloggerPemula(/(kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*/, function() {
      waitForElm('.bg-gb.dwto.sdw', kmBtn => kmBtn.click());waitForElm('a.sdw.dwto.bg-gb', kmk => redirect(kmk.href, false));});
    BypassedByBloggerPemula(/clickndownload.org|clicknupload\.*/, function() {if (elementExists('.download')) {DoIfExists('span.downloadbtn', 10);
      DoIfExists('#method_free', 2);waitForElm('a.downloadbtn', cnu => redirect(cnu.href, false));}});
    BypassedByBloggerPemula(/rawlazy.si/, function() {
      if (elementExists('#captcha_form')) {DoIfExists('.go-to-captcha-form', 2);} else {waitForElm('.color-btn', rlz => redirect(rlz.href, false));}});
    BypassedByBloggerPemula(/downloader.tips/, () => {CaptchaDone(() => {DoIfExists('button.btn.btn-primary');});
      let downloader = setInterval(() => {if (bp('#count').innerText == '0') {clearInterval(downloader);DoIfExists('.btn-primary.btn');}}, 1 * 1000);});
    BypassedByBloggerPemula(/modsbase.com/, () => {
      if (elementExists('.file-panel')) {DoIfExists('.download-file-btn', 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));}});
    BypassedByBloggerPemula(/filedm.com/, () => {
      if (elementExists('#dlbutton')) {waitForElm('#dlbutton', fdm => redirect('http://cdn.directfiledl.com/getfile?id=' + fdm.href.split('_')[1], false));}});
    BypassedByBloggerPemula(/drive.google.com/, () => {var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https://drive.usercontent.google.com/download?id=${dg}&export=download`, false).replace('<br />', '');
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {DoIfExists('#download-form', 'submit', 1);}});
    BypassedByBloggerPemula(/4shared.com/, function() {if (elementExists('.d3topTitle')) {
        $('.premium').text('IMPORTANT TRICKS By BloggerPemula : Updated Feb 2023, Look like now not working ,so Sorry at This Time i Dont have Idea to fix it . Regards...');}
      DoIfExists('.jsDownloadButton', 2);if (elementExists('.freeDownloadButton')) {DoIfExists("form[name^='redirectToD3Form']", 'submit', 3);}});}
    // End of Auto Download , Leave Good Feedback if Your Favorite Sites Not yet Supported or Error on Downloading Process

    BypassedByBloggerPemula(/the2.link/, () => {DoIfExists('#get-link-btn',3);});
    BypassedByBloggerPemula(/megaurl.win/, () => {DoIfExists('#generate_link', 2);});
    BypassedByBloggerPemula(/keeplinks.org/, function() {DoIfExists('#btnchange', 2);});
    BypassedByBloggerPemula(/1shortlink.com/, () => {DoIfExists('#redirect-link', 3);});
    BypassedByBloggerPemula(/earnlink.io/, function() {DoIfExists('.btn-secondary', 3);});
    BypassedByBloggerPemula(/mkomsel.com/, function() {DoIfExists('#downloadfile', 12);});
    BypassedByBloggerPemula(/disheye.com/, () => {DoIfExists('#redirectForm', 'submit', 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, function() {DoIfExists('#countingbtn', 1);});
    BypassedByBloggerPemula(/fc-lc.xyz/, () => {DoIfExists('#invisibleCaptchaShortlink', 3);});
    BypassedByBloggerPemula(/jameeltips.us/, function() {DoIfExists('#continue_button_1', 1);});
    BypassedByBloggerPemula(/post.copydev.com/, function() {DoIfExists('.btn-success.btn', 6);});
    BypassedByBloggerPemula(/1short.io/, function() {DoIfExists('#countDownForm', 'submit', 7);});
    BypassedByBloggerPemula(/1bitspace.com/, () => {DoIfExists('.button-element-verification',3);});
    BypassedByBloggerPemula(/cshort.org/, () => {DoIfExists('.timer.redirect', 3, 'setInterval');});
    //BypassedByBloggerPemula(/linegee.net/, function() {DoIfExists('.btn-xs.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/revlink.pro/, () => {DoIfExists('#main-content-wrapper > button',2);});
    BypassedByBloggerPemula(/bedrat.xyz|uhtrdr47.online/, function() {DoIfExists('#link1112', 5);});
    BypassedByBloggerPemula(/pro.sh/, function() {DoIfExists('.btn-secondary', 3, 'setInterval');});
    BypassedByBloggerPemula(/playpaste.com/, () => {CaptchaDone(() => {DoIfExists('button.btn');});});
    BypassedByBloggerPemula(/proappapk.com|meclipstudy.in/, function() {DoIfExists('#gotolink', 5);});
    BypassedByBloggerPemula(/(devnote|formshelp).in|djbassking.live/, () => {DoIfExists('#getlinks.btn', 2);});
    BypassedByBloggerPemula(/offerwall.me|ewall.biz/, () => {CaptchaDone(() => {DoIfExists('#submitBtn');});});
    BypassedByBloggerPemula(/shortlinks2btc.somee.com/, () => {CaptchaDone(() => {DoIfExists('#btLogin');});});
    BypassedByBloggerPemula(/kisalt.digital/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/surl.li|surl.gd/, () => waitForElm('#redirect-button', surl => redirect(surl.href)));
    BypassedByBloggerPemula(/cooklike.info|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false);
    BypassedByBloggerPemula(/firefaucet.win/, () => {CaptchaDone(() => {ReadytoClick('button[type=submit]',2);});});
    BypassedByBloggerPemula(/(blogsward|coinjest).com/, () => {waitForElm('#continueBtn', afBtn => afBtn.click());});
    BypassedByBloggerPemula(/aryx.xyz/, () => {DoIfExists('.container > div:nth-child(4) > button:nth-child(1)', 3);});
    BypassedByBloggerPemula(/linkforearn.com/, () => waitForElm('#shortLinkSection a', linkf => redirect(linkf.href)));
    BypassedByBloggerPemula(/techsl.online/, () => {DoIfExists("form[name='rtg']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/webhostingtips.club/, {'/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='],}, false);
    BypassedByBloggerPemula(/downfile.site/, () => {DoIfExists('button.h-captcha', 2);DoIfExists('#megaurl-submit', 3);});
    BypassedByBloggerPemula(/importantclass.com/, () => {waitForElm('a#my-btn', vnshor => redirect(vnshor.href, false));});
    BypassedByBloggerPemula(/uptobhai\.*|uplinkto\.*|shortlinkto\.*/, () => {DoIfExists('.btn-block.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/dogefury.com|go.tfly.link|thanks.tinygo.co/, () => {DoIfExists('#form-continue', 'submit', 2);});
    BypassedByBloggerPemula(/(dramaticqueen|emubliss).com/, () => {DoIfExists('#notarobot.button',3);DoIfExists('#btn7',4);});
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/imagereviser.com/, () => {CheckVisibility('.tick.wgicon', () => {DoIfExists('.bottom_btn');});});
    BypassedByBloggerPemula(/shareus.io/, function() {if (BpParams.has('sid')) {ReadytoClick('button.MuiButtonBase-root', 2);}});
    BypassedByBloggerPemula(/adtival.network/, function() {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/, () => {CaptchaDone(() => {DoIfExists('#continue');});});
    BypassedByBloggerPemula(/(bnbfree|freeth|freebitco).in/, () => {CaptchaDone(() => {DoIfExists('#free_play_form_button');});});
    BypassedByBloggerPemula(/loanifyt.site|topshare.in/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#btn6', 4);});
    BypassedByBloggerPemula(/explorerlives.com/, () => {DoIfExists('#link.tp-blue.tp-btn', 3);DoIfExists('#btn6.tp-blue.tp-btn', 4);});
    BypassedByBloggerPemula(/vuotnhanh.com/, () => waitForElm('a#result.safelink.btn.btn-lg.btn-success', vuot => redirect(vuot.href)));
    BypassedByBloggerPemula(/financedoze.com|techhype.in/, () => {DoIfExists('#rtg', 'submit', 3);DoIfExists('#rtg-snp21 > button', 4);});
    BypassedByBloggerPemula(/forex-trnd.com/, () => {elementReady('#exfoary-snp').then(() => DoIfExists('#exfoary-form', 'submit', 3));});
    BypassedByBloggerPemula(/khaddavi.net|contentmenarik.com/, () => {parent.open = BpBlock();CaptchaDone(() => {DoIfExists('#slu-btn');});});
    BypassedByBloggerPemula(/gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online/, function() {DoIfExists('#mdt', 3);});
    BypassedByBloggerPemula(/cutnet.net|(exego|cety).app|(jixo|gamco).online|cutyion.com/, () => {ReadytoClick("#submit-button:not([disabled])",2);});
    BypassedByBloggerPemula(/(financewada|utkarshonlinetest).com/, () => {DoIfExists('.get_btn.step_box > .btn', 2);ReadytoClick('.get_btn a[href]', 3);});
    BypassedByBloggerPemula(/sharetext.me/, function() {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/sfl.gl|moneyblink.com/, function() {if (location.href.includes('/ready') && BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/comohoy.com/, function() {if (location.href.includes('/grab/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/linkforearn.click/, () => waitForElm('#shortLinkSection.short-link-section a.btn', linkforearn => redirect(linkforearn.href, false)));
    BypassedByBloggerPemula(/alorra.com/, () => {CheckVisibility('.ast-post-format- > button', () => {DoIfExists('.single-layout-1.ast-post-format- > button');});});
    BypassedByBloggerPemula(/apkw.ru/, function() {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw),false);}});
    BypassedByBloggerPemula(/wp.thunder-appz.eu.org/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm('#button3 > a', thun => redirect(thun.href, false));});
    BypassedByBloggerPemula(/programasvirtualespc.net/, () => {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);}});
    BypassedByBloggerPemula(/setroom.biz.id|travelinian.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm(' a:nth-child(1) > button', setr => setr.click());});
    BypassedByBloggerPemula(/(fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru).in/, () => {ReadytoClick('#continue-show', 3);});
    BypassedByBloggerPemula(/(blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro/, function() {if (BpParams.has('r')) {meta(atob(BpParams.get('r')));}});
    BypassedByBloggerPemula(/(keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists('#tp-snp2',4);});
    BypassedByBloggerPemula(/(10short|lollty).pro|mamahawa.com/, function() {ReadytoClick('center > .btn-success.btn', 3);waitForElm('a#makingdifferenttimer', st1 => redirect(st1.href, false));waitForElm('a#proceed', st2 => redirect(st2.href, false));});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics/, () => {DoIfExists('#getlink', 3);});
    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){DoIfExists('#tp-snp2.tp-blue.tp-btn', 2);DoIfExists('.tp-white.tp-btn', 3);});
    BypassedByBloggerPemula(/largestpanel.in|(djremixganna|financebolo).com|(earnme|usanewstoday).club/, () => {DoIfExists('#tp-snp2', 1);});
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/lksfy.com/, () => {CaptchaDone(() => {DoIfExists('.get-link.btn-primary.btn');});});
    BypassedByBloggerPemula(/paste1s.com|note1s.com/, function() {DoIfExists('.btn-lg.btn-primary.btn', 2);});
    BypassedByBloggerPemula(/terabox.fun/, async function() {await sleep(3000);ReadytoClick('.active.btn');});
    BypassedByBloggerPemula(/karyawan.co.id/, function() {
      DoIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/adfoc.us/, function() {
      if (elementExists('#skip')) {let adf = bp('.skip').href; redirect(adf);}});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, function() {
      DoIfExists('#yuidea', 'submit', 2);DoIfExists('#btn6', 2);});
    BypassedByBloggerPemula(/oii.io/, function() {parent.open = BpBlock();
      DoIfExists('button.g-recaptcha.btn.btn-primary', 2);});
    BypassedByBloggerPemula(/slink.bid/, () => {
      DoIfExists('#btn-generate', 1);
      DoIfExists('.btn-success.btn', 5);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, () => {
      DoIfExists('#wcGetLink', 2);DoIfExists('#gotolink', 3);});
    BypassedByBloggerPemula(/zegtrends.com/, () => {DoIfExists('#cln', 'submit', 5);
      DoIfExists('#bt1', 5);DoIfExists('#go', 5);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech|cointox.net/, () => {
      SameTab();waitForElm('.mb-sm-0.mt-3.btnBgRed', ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/solidcoins.net|fishingbreeze.com/, () => {
      CaptchaDone(() => {DoIfExists('form[action]', 'submit');});
      if (!elementExists('.g-recaptcha')) {DoIfExists('mdn', 'submit', 17);}});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists('#claimbutn');});
      if (location.href.includes('/bonus')) {DoIfExists('#clickhere', 2);}});
    BypassedByBloggerPemula(/linkspy.cc/, function() {
      if (elementExists('.skipButton')) {let lsp = bp('.skipButton').href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(superheromaniac|spatsify|mastkhabre|ukrupdate).com/, () => {
      DoIfExists('#tp98', 10);DoIfExists('#btn6', 12);DoIfExists("form[name='tp']", 'submit', 11);});
    BypassedByBloggerPemula(/(bestloansoffers|worldzc).com|earningtime.in/, () => {
      DoIfExists('#rtg', 'submit', 2);DoIfExists('#rtg-form', 'submit', 3);
      DoIfExists('.rtg-blue.rtg-btn', 4);DoIfExists('#rtg-snp21 > button', 5);});
    BypassedByBloggerPemula(/(exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online/, () => {
      DoIfExists('#invisibleCaptchaShortlink', 2);DoIfExists('#before-captcha', 'submit', 3);});
    BypassedByBloggerPemula(/jobinmeghalaya.in/, () => {DoIfExists('#wpsafelink-landing', 'submit', 2);
      DoIfExists('#wpsafe-link > .bt-success', 3);});
    BypassedByBloggerPemula(/pubghighdamage.com|anmolbetiyojana.in/, () => {SameTab();
      DoIfExists('#robot', 2);DoIfExists('#notarobot.button', 2);ReadytoClick('#gotolink.bt-success.btn', 3);});
    BypassedByBloggerPemula(/aylink.co/, () => {DoIfExists('.btn.btn-go', 2);ReadytoClick('.btn-go', 3);
      waitForElm("#main", Aylink => redirect(strBetween(Aylink.onclick.toString(), 'window.open("', '"'), false));});
    BypassedByBloggerPemula(/videolyrics.in/, () => {ReadytoClick('a:contains("Continue")', 3);
      CheckVisibility("button[class^='py-2 px-4 font-semibold']", () => {DoIfExists('div[x-html="isTCompleted"] button');});});
    BypassedByBloggerPemula(/(tmail|labgame).io|(gamezizo|fitdynamos).com/, () => {DoIfExists('#surl', 5);
      if (elementExists('#next')) {DoIfExists('form.text-center', 'submit', 3);DoIfExists('#next', 2);DoIfExists('#glink', 15);}});
    BypassedByBloggerPemula(/4hi.in|(10short|animerigel|encurt4).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs/, () => {
      DoIfExists('#form-continue', 'submit', 2);CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula(/sub2get.com/, function() {
      if (elementExists('#butunlock')) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/infonerd.org|coingraph.us/, () => {EnableRCF();
      CheckVisibility('#redirectButton', '||', "bp('#countdown').innerText == '0'", () => {unsafeWindow.redirectToUrl();});});
    BypassedByBloggerPemula(/leitup.com/, function() {
      if (elementExists('#button_timer')) {waitForElm('input.form-control', leit => redirect(leit.placeholder, false));}});
    BypassedByBloggerPemula(/(blogmado|kredilerim|insuranceleadsinfo).com/, () => {
      CaptchaDone(() => {DoIfExists('button.btn');});waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/azmath.info|expertvn.com/, () => {if (elementExists('#megaurl-verified-captcha')) {
      DoIfExists('button.h-captcha', 3);} else {DoIfExists('#megaurl-banner-page', 'submit', 2);}});
    BypassedByBloggerPemula(/litecoin.host|cekip.site/, () => {CaptchaDone(() => {DoIfExists('#ibtn');});
      if (elementExists('.pt-5.card-header')) {CheckVisibility('.btn-primary.btn', () => {DoIfExists('.btn-primary.btn');});}});
    BypassedByBloggerPemula(/(ecryptly|equickle).com/, () => {if (BpParams.has('id')) {meta(atob(BpParams.get('id')));}
      waitForElm('#open-continue-form > input:nth-child(3)', Chain => redirect(atob(Chain.value)));DoIfExists('#rtg-snp2', 2);});
    BypassedByBloggerPemula(/yitarx.com/, () => {if (location.href.includes('enlace/')) {let yitar = location.href.split('#!')[1];
      let arxUrl = DecodeBase64(yitar,3);redirect(arxUrl);}});
    BypassedByBloggerPemula(/coinsrev.com/, () => {parent.open = BpBlock();CaptchaDone(() => {DoIfExists('#wpsafelinkhuman > input');});
      DoIfExists('#wpsafe-generate > a > img', 3);DoIfExists('input#image3', 13);});
    BypassedByBloggerPemula(/www.google.com|recaptcha.net/, async function() {await sleep(3000) && cfg.get('reCAPTCHA');
      if (cfg.get('reCAPTCHA') == true) {ReadytoClick('.recaptcha-checkbox-border');}});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {await sleep(3000) && cfg.get('hCaptcha');
      if (cfg.get('hCaptcha') == true) {ReadytoClick('#checkbox');}});
    BypassedByBloggerPemula(/(ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site/, () => {DoIfExists('div.text-center form', 'submit', 2);
      ReadytoClick('#go_d', 1);waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href, false));
      waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href, false));});
    BypassedByBloggerPemula(/mazen-ve3.com/, function() {EnableRCF();let maze = setInterval(() => {
        if (bp('.filler').innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick('#btn6');ReadytoClick('.btn-success.btn', 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net/, () => {
      DoIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|owoanime|hyperkhabar|hamroguide).com/, () => {
      DoIfExists('#pro-continue', 3);waitForElm('a#pro-btn', vnshort => redirect(vnshort.href));DoIfExists('#my-btn', 5);});
    BypassedByBloggerPemula(/o-pro.online/, function() {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc|teamtechnews).com|yotrickslog.tech/, function() {
      if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/autodime.com|cryptorex.net/, () => {CaptchaDone(() => {DoIfExists('#button1');});
      elementReady('#fexkominhidden2').then(() => ReadytoClick('.mb-sm-0.mt-3.btnBgRed', 2));});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in/, function() {
      DoIfExists('#shortPostLink', 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/, () => {
      CaptchaDone(() => {DoIfExists('#lview > form', 'submit');});waitForElm('.get-link > a', tig => redirect(tig.href, false));});
    BypassedByBloggerPemula(/m.flyad.vip/, () => {
      waitForElm('#captchaDisplay', (display) => {const number = display.textContent.trim();waitForElm('#captchaInput', (input) => {input.value = number;
      waitForElm('button[onclick="validateCaptcha()"]', (button) => {sleep(1000).then(() => button.click());}, 15, 1);}, 15, 1);}, 15, 1);});
    BypassedByBloggerPemula(/linkatla.com/, function() {let katla = bp('head > script:nth-child(7)');let linka = strBetween(katla.text, '"', '"');
      if (elementExists('#redirectButton')) {setTimeout(() => {redirect(atob(linka), false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, function() {DoIfExists('#countdown', 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/(marketrook|aiperceiver|governmentjobvacancies).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp).in|biharhelp.co|wastenews.xyz/, () => {
      DoIfExists('#btn6.ce-blue.ce-btn', 2);DoIfExists('#btn7 > .ce-blue.ce-btn', 3);DoIfExists('a #tp-snp2', 4);});
    BypassedByBloggerPemula('(on-scroll|diudemy|maqal360).com', () => {
      if (elementExists('.alertAd')) {notify('BloggerPemula : Try to viewing another tab if the countdown does not work');}
      ReadytoClick('#append a', 2);ReadytoClick('#_append a', 3);elementReady('.alertAd').then(function() {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});
    BypassedByBloggerPemula(/onlinetechsolution.link/, () => {let Thunder = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Thunder.value)).linkr);}, 5 * 1000);});
    BypassedByBloggerPemula(/stly.link|snaplessons.net|atravan.net|stfly.biz|airevue.net/, () => {
      CaptchaDone(() => {DoIfExists('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});DoIfExists('button[class^=rounded]', 2);
      let stly = setInterval(() => {if (bp('.progress-done').innerText == '100%') {clearInterval(stly);ReadytoClick('button.mt-4:nth-child(6)', 1);DoIfExists('button.mt-4:nth-child(2)', 3);}}, 2 * 1000);});
    BypassedByBloggerPemula(/(horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top/, () => {CaptchaDone(() => {unsafeWindow.wpsafehuman();});
      CheckVisibility('center > .wpsafelink-button', () => {DoIfExists('center > .wpsafelink-button', 1);});CheckVisibility('#wpsafe-generate > a', '||', "bp('.base-timer').innerText == '0:00'", () => {unsafeWindow.wpsafegenerate();
        if (location.href.includes('article24.online')) {DoIfExists('#wpsafelink-landing > .wpsafelink-button', 1);} else {DoIfExists('#wpsafelink-landing2 > .wpsafelink-button', 1);}});});
    BypassedByBloggerPemula(/revly.click|(clikern|kiddyshort).com|mitly.us|link.whf.bz|shortex.in|easyshort.xyz/, () => {
      if (elementExists('#link-view')) {CaptchaDone(() => {DoIfExists('#link-view', 'submit');});} else if (elementExists('button.btn.btn-primary')){DoIfExists('div.col-md-12 form', 'submit', 2);}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn/, () => {EnableRCF();
      let trangchu = setInterval(() => {if (bp('#monetiza-time').innerText == '0') {clearInterval(trangchu);ReadytoClick('#monetiza');} else if (elementExists('#monetiza-generate')) {unsafeWindow.monetizago();}}, 3 * 1000);});
    BypassedByBloggerPemula(/(askpaccosi|wellness4live|akash.classicoder).com|2the.space|inicerita.online|cryptomonitor.in/, () => {
      var tform = bp('#landing'); redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.kim|dekhe.click/, () => {DoIfExists('button.btn.btn-primary', 2);
      DoIfExists('#nextpage', 'submit', 2);DoIfExists('#getmylink', 'submit', 3);CaptchaDone(() => {DoIfExists('.btn-captcha.btn-primary.btn');});});
    BypassedByBloggerPemula(/techyreviewx.com|desiupload.co/, function() {DoIfExists('.downloadbtn.btn-block.btn-primary.btn', 2);
      waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|sproutworkers.co/, () => {EnableRCF();window.onscroll = BpBlock();unsafeWindow.check2();if (elementExists('#verify')) {
        $('.blog-details').text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', unsafeWindow.check3);});}});
    BypassedByBloggerPemula(/(btcpany|zombiebtc|claimfey|thefastpost).com|(panytourism|statepany).online/, function() {
      parent.open = BpBlock();DoIfExists('#link1s-form', 'submit', 1);DoIfExists('#next-step-button', 3);});
    BypassedByBloggerPemula(/playnano.online/, function() {DoIfExists('#watch-link', 2);
      DoIfExists('.watch-next-btn.btn-primary.button', 2);DoIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, true);xhr.send();});
    BypassedByBloggerPemula(/(fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids).com|(ddieta|lmktec).net|vbnmx.online/, () => {
      waitForElm("div[id^='rtg-'] > a:nth-child(1)", Linkpays => redirect(Linkpays.href, false));DoIfExists('#rtg', 'submit', 2);
      DoIfExists('#rtg-snp21 .rtg_btn', 3);DoIfExists('#rtg-snp2', 3);DoIfExists('#rtg-snp21 > button', 4);});
    BypassedByBloggerPemula(/acortalink.me/, () => {let acorta = setInterval(() => {let script = bp('body > script');
        if (script) {let text = script.text.trim(); let lines = text.split('\n'); let i = lines.findIndex(x => x.includes('acortalink.me'));
          let link = lines[i + 2].trim().split(',')[6].trim(); if (window[link]) {clearInterval(acorta); redirect(window[link]);}}}, 100);});
    BypassedByBloggerPemula(/(admediaflex|cdrab|financekita).com|ecq.info|wpcheap.net/, () => {
      elementReady('#wpsafe-link a[onclick*="window.open"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/window\.open\('([^']+)'/);
        if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/(tinybc|phimne).com|(mgame|sportweb|bitcrypto).info/, () => {
      elementReady('#wpsafe-link a[onclick*="handleClick"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/handleClick\('([^']+)'\)/);
        if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/bewbin.com/, () => {elementReady('.wpsafe-top > script:nth-child(4)').then((script) => sleep(3000).then(() =>
      redirect('https://bewbin.com?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/bewbin\.com\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/lajangspot.web.id/, () => {elementReady('#wpsafe-link > script:nth-child(2)').then((script) => sleep(3000).then(() =>
      redirect('https://lajangspot.web.id?safelink_redirect=' + script.textContent.match(/window\.open\("https:\/\/lajangspot\.web\.id\?safelink_redirect=([^"]+)"/)[1])));});
    BypassedByBloggerPemula(/jioupload.com/, () => {function calculateAnswer(text) {const parts = text.replace("Solve:", "").replace(/[=?]/g, "").trim().split(/\s+/);const [num1, op, num2] = [parseInt(parts[0]), parts[1], parseInt(parts[2])];return op === "+" ? num1 + num2 : num1 - num2;}
      elementReady('.file-details').then(() => {DoIfExists('form button.btn-secondary', 'click', 2);waitForElm('a.btn.btn-secondary[href*="/file/"]', (jiou) => redirect(jiou.href, false));});
      elementReady("#challenge").then((challenge) => {const answer = calculateAnswer(challenge.textContent);BpNote(`Solved captcha: ${challenge.textContent} Answer: ${answer}`);elementReady("#captcha").then((input) => {input.value = answer;elementReady("button[type='submit']").then((button) => sleep(3000).then(() => button.click()));});});});
    BypassedByBloggerPemula(/teknoasian.com/, () => {CheckVisibility('h4 > b', () => {DoIfExists('button:innerText("Continue")', 1);});CheckVisibility('.Skipper > h4 > b', () => {DoIfExists('button:innerText("Get Link")', 1);});
      CheckVisibility('.humanVerify button', '||', "bp('.humanVerify button').innerText == 'Click To'", () => {DoIfExists('button:innerText("Click To Verify")', 1);DoIfExists('button:innerText("Generate Link")', 2);});});
    BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com/, () => {ReadytoClick('#submit-button',2);ReadytoClick('#btn-2', 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > button ', 2);CaptchaDone(() => {DoIfExists('#btn-3');});});
    BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {if (window.hasOwnProperty('_lact')) {window.setInterval(() => {window._lact = Date.now();}, 5 * 1000);
      } else if (elementExists('#redirect-main-text')) {waitForElm('a#invalid-token-redirect-goto-site-button', yt => redirect(yt.href, false));}});
    BypassedByBloggerPemula(/hunterkiller.me|surflink.tech/, function() {
      waitForElm('div#showw center a.btn.btn-danger.btn-captcha', hun => redirect(hun.href, false));
      waitForElm('div#wpsafe-snp center a', hunt => redirect(hunt.href, false));});
    BypassedByBloggerPemula(/(lyricsbaazaar|ezeviral).com/, () => {CaptchaDone(() => {DoIfExists('#btn6');});
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online/, () => {
      CheckVisibility('.VerifyBtn', () => {DoIfExists('#VerifyBtn', 1);ReadytoClick('#NextBtn', 2);});if (elementExists('#SmileyBanner')) {setActiveElement('[id="div-gpt-ad"]');fakeHidden();}});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro/, async function() {const window = unsafeWindow;const executor = async () => {let El = window?.livewire?.components?.components()[0];
        while (!El) {await sleep(100); BpNote(1); El = window?.livewire?.components?.components()[0];}
        const payload = {fingerprint: El.fingerprint, serverMemo: El.serverMemo, updates: [{payload: {event: 'getData', id: 'whathappen', params: [],}, type: 'fireEvent',}, ],};
        const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json', 'X-Livewire': 'true', 'X-CSRF-TOKEN': window.livewire_token,},
            method: 'POST', body: JSON.stringify(payload),}); const json = await response.json(); const url = new URL(json.effects.emits[0].params[0]); redirect(url.href);};
      if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']"); BpNote('addRecord...'); const input = document.createElement('input');
          input.value = window.livewire_token; input.name = '_token'; input.hidden = true; a.appendChild(input); a.submit();}
      if (elementExists("button[x-text]")) { BpNote('getLink..'); executor();} return;} if (elementExists("div[class='max-w-5xl mx-auto']")) {BpNote('Executing..'); executor();}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), true);xhr.send();});
    BypassedByBloggerPemula(/(mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online/, function() {
      DoIfExists('.submitBtn', 2);DoIfExists('#go_d', 3);});
    BypassedByBloggerPemula(/suaurl.com/, () => {parent.open = BpBlock();CaptchaDone(() => {bp('#comment_form').removeAttribute('target');DoIfExists('#btn-capcha > .b-b', 1);});DoIfExists('#btn > button', 3, 'setInterval');});
    BypassedByBloggerPemula(/letsboost.net/, function() {waitForElm('body > script', () => {let stepDat = BpT('script')[BpT('script').length - 1];
      let stepname = stepDat.innerHTML;let lbDat = JSON.parse(stepname.match(/stepDat = '(.*)';/)[1]); let lbo = lbDat[lbDat.length - 1].url;redirect(lbo,false);});});
    BypassedByBloggerPemula(/oncoin.info|nishankhatri.com.np|quanngon.org/, function() {
      DoIfExists('#my-btn', 2);DoIfExists('#wpsafe-link > .btn-secondary.btn', 2);
      waitForElm('#pro-link', nhk => redirect(nhk.href, false));waitForElm('#wpsafe-link a', hrl => redirect(strBetween(hrl.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/bitcotasks.com/, () => {if (location.href.includes('/firewall')) {CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {DoIfExists('button:contains("Validate")');});}
      CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => {unsafeWindow.continueClicked();});CheckVisibility('.alert-success.alert', '||', "bp('.alert-success').innerText == 'This offer was successfully'", () => {unsafeWindow.close();});});
    BypassedByBloggerPemula(/(playonpc|yolasblog).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews).xyz/, () => {CaptchaDone(() => {DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);});
      let playonpc = setInterval(() => {if (!elementExists('.h-captcha') && !elementExists('.core-msg.spacer.spacer-top') && bp('#formButtomMessage').textContent == "Well done! You're ready to continue!" && !bp('#cbt').hasAttribute('disabled')) {
          clearInterval(playonpc);DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);});
    BypassedByBloggerPemula(/shortit.pw/, () => {if (elementExists('#captchabox')) {
        notify('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      DoIfExists('.pulse.btn-primary.btn', 3);CaptchaDone(() => {DoIfExists('#btn2');});});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, function() {setInterval(function() {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(function() {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(function() {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {const window = unsafeWindow;let adsh = setInterval(() => {
        if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);
          document.write(window._sharedData[0].destination);redirect(document.body.textContent);
        } else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/ify.ac|go.linkify.ru/, () => {unsafeWindow.open_href();});
    BypassedByBloggerPemula(/recut.ru/, () => {DoIfExists('#open_link > span > span', 2);});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/lifeezee.com/, () => waitForElm('.get-link', lifz => redirect(lifz.href)));
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/file-upload.in/, () => waitForElm('#getlink', fui => redirect(fui.href, false)));
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/appsinsta.com/, function() {waitForElm('.yu-blue.yu-btn', apBtn => apBtn.click());});
    BypassedByBloggerPemula(/apkadmin.com/, () => waitForElm('div.text.text-center a', apk => redirect(apk.href)));
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/(grtjobs|jksb).in/, () => {CheckVisibility('.step', () => {unsafeWindow.handleContinueClick();});});
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/paycut.pro/, () => {if (location.href.includes('/ad/')) {location = location.href.replace('ad/', '');}});
    BypassedByBloggerPemula(/(tejtime24|drinkspartner).com/, () => {DoIfExists('#bottomButton',2);ReadytoClick('#open-link > .pro_btn',3);});
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/(techleets|bonloan).xyz|sharphindi.in|nyushuemu.com/, () => waitForElm('a#tp-snp2', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/rockmods.net/, function() {if (location.href.includes('/rblink.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/foodupe.com/, function() {if (elementExists('.containerpanel')){let fdp = bp('#donead').href;setTimeout(() => {redirect(fdp,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(cricketgurupro|travelkuku).com/, function() {DoIfExists("form[name='tp']", 'submit', 3);waitForElm('#page > center > a', cgp => redirect(cgp.href, false));});
    BypassedByBloggerPemula(/mirrored.to/, () => {waitForElm('div.col-sm.centered.extra-top a', mirr => redirect(mirr.href, false)); waitForElm('div.centerd > a', mir => redirect(mir.href, false));});
    BypassedByBloggerPemula(/sub2unlock.net/, function() {if (elementExists('.linkDiv_btns.col-xs-12.col-sm-12.col-md-12')){let stu = bp('#theLinkID').textContent;setTimeout(() => {redirect(stu,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks|mealcold).com/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/mboost.me/, function() {if (elementExists('#firstsection')){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/mbantul.my.id|crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz/, () => {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/dutchycorp.ovh|(beingtek|encurt4|10short).com|(zagl|shrinkforearn|beinglink).in|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link/, () => {
      if (elementExists('.grecaptcha-badge') || elementExists('#captchaShortlink')) {var ticker = setInterval(function() {try {clearInterval(ticker); unsafeWindow.grecaptcha.execute();} catch (e) {}}, 3000);}});
    BypassedByBloggerPemula(/(remixsounds|helpdeep|thinksrace).com|uprwssp.org|gkfun.xyz/, () => {DoIfExists('.m-2.btn-captcha.btn-outline-primary.btn', 2);DoIfExists('.tpdev-btn', 3);DoIfExists("#tp98 button[class^='bt']", 3);DoIfExists("form[name='tp']", 'submit', 3);
      DoIfExists('#btn6', 4);var wssp = bp('body > center:nth-child(6) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > center:nth-child(3) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > script:nth-child(5)');
      if (wssp) {var scriptContent = wssp.textContent;var Linkc = scriptContent.match(/var\s+currentLink\s*=\s*["'](.*?)["']/);if (Linkc && Linkc[1]) {var CLink = Linkc[1];redirect(CLink);} else {BpNote("currentLink Not Found.");}} else {BpNote("Element Not Found.");}});
    BypassedByBloggerPemula(/shrinke\.*|shrinkme\.*|(paid4link|linkbulks|linclik|up4cash|smoner|minimonetize|encurtadorcashlinks|yeifly).com|(wordcounter|shrink).icu|(dutchycorp|galaxy-link).space|dutchycorp.ovh|pahe.plus|(pwrpa|snipn).cc|paylinks.cloud|oke.io|tinygo.co|tlin.me|wordcount.im|link.freebtc.my.id|get.megafly.in|skyfreeshrt.top/, () => {
      CaptchaDone(() => {DoIfExists('#invisibleCaptchaShortlink');});});
    BypassedByBloggerPemula(/virtuous-tech.net|newsminer.uno/, () => {const window = unsafeWindow;CheckVisibility('#clickMessage', '&&', "bp('#clickMessage').innerText == 'Click any ad'", () => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});
      if (elementExists('input.form-control')) {notify('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually', false, true);window.onscroll = BpBlock();window.check2();elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function () {let autoRoll = false;if (window.location.href.includes('/roll_game.php')) {window.scrollTo(0, 9999);
    if (!bp('#timer')) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/coin_roll.php');}, 3 * 1000);}}if (window.location.href.includes('/coin_roll.php')) {window.scrollTo(0, 9999);
    if (!bp("#timer")) {CaptchaDone(() => {if (bp('.boost-btn.unlockbutton') && autoRoll === false) {bp('.boost-btn.unlockbutton').click();autoRoll = true;}CheckVisibility('#claim_boosted', () => {bp('#claim_boosted').click();});});} else {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/wall.php');}, 3 * 1000);}}
    if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = bp(".col.s10.m6.l4 a[name='claim']", true);if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red';let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space' + hrefValue);}, 3 * 1000);} else {CheckVisibility('div.col.s12.m12.l8 center div p', () => {setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/ptc/');}, 3 * 1000);});}}
    if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {BpNote('Viewing Available Ads');if (elementExists('.fa-check-double')) {BpNote('All Available Ads Watched');
      setTimeout(() => {window.location.replace('https://autofaucet.dutchycorp.space/dashboard.php');}, 3 * 1000);}CaptchaDone(() => {CheckVisibility('#submit_captcha', () => {bp("button[type='submit']").click();});});}});
    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {const url = window.location.href;if (url.includes('go/')) {notify('BloggerPemula : Clear Cache and Cookies of this Site , if the Copied Key is Different', false, true);sleep(2000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(2000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}
      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists('#btn_link_start', 2);CheckVisibility('.iconcaptcha-modal__body-checkmark', () => {DoIfExists('#btn_link_continue', 1);});CheckVisibility('#btn_link_continue', () => {DoIfExists('#btn_link_continue');});
      CheckVisibility('.alert-success.alert-inline.alert', () => {DoIfExists('#btn_lpcont');});sleep(2000).then(() => {const input = bp('#link_input.form-control');if (input) {input.value = GM_getValue('lastKey', '');sleep(2000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|foodxor|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|zaku.pro|veganab.co|cegen.org|skyfreecoins.top|manga4nx.site/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|coinscap.info|insurancegold.in|wii.si', () => {
      TrustMe();elementReady('#captcha-result .bg-success').then(() => ReadytoClick('button', 1));const tano = window.location.href;if (['freeoseocheck.com', 'dailytech-news.eu','wii.si'].some(tino => tano.includes(tino))) {elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));} else {CheckVisibility('#loadingDiv[style^="display"] > span', () => {const buttonText = strBetween(bp('#loadingDiv[style^="display"] > span').textContent, "Click", "To Start", false);elementReady(`#loadingDiv[style^="display"] .btn.btn-primary:contains("${buttonText}")`).then(buttonElement => {
      const buttons = Array.from(bp('#loadingDiv[style^="display"] .btn.btn-primary', true));const index = buttons.indexOf(buttonElement);if (index === -1) return;const selectorOptions = ['button.btn:nth-child(2)', 'button.btn:nth-child(3)', 'button.btn:nth-child(4)', 'button.btn:nth-child(5)', 'button.btn:nth-child(6)'];const chosenSelector = selectorOptions[index];if (chosenSelector) sleep(2000).then(() => ReadytoClick(`#loadingDiv[style^="display"] ${chosenSelector}`));});});}elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});}})();
