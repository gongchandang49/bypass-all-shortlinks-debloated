// ==UserScript==
// @name         psa.wf bypass shorlink
// @namespace    https://github.com/cyan-n1d3/PSAbypass
// @version      2.0.0
// @description  bypass and autoredirect shortlink for web psa.wf.
// @author       cyan-n1d3
// @homepage     https://github.com/cyan-n1d3/PSAbypass
// @homepageURL  https://github.com/cyan-n1d3/PSAbypass
// @supportURL   https://github.com/cyan-n1d3/PSAbypass/issues
// @updateURL    https://github.com/cyan-n1d3/PSAbypass/raw/main/psa.wf-bypass.js
// @downloadURL  https://github.com/cyan-n1d3/PSAbypass/raw/main/psa.wf-bypass.js
// @icon         https://psa.wf/favicon.ico
// @include      /^https?:\/\/(.*\.)?(cashgrowth\.online|starkroboticsfrc\.com|ravellawfirm\.com)/
// @include      /^https?:\/\/(.*\.)?(exe\.io|exe-links\.com|exeygo\.com)/
// @include      /^https?:\/\/(mtc\d\.|shortxlinks\.com)/
// @include      /^https?:\/\/(.*\.)?(shrinkme\.click|themezon\.net|mrproblogger\.com)/
// @include      /^https?:\/\/(.*\.)?(fc-lc\.xyz|fc\.lc|jobzhub\.store)/
// @include      /^https?:\/\/(.*\.)?(shrtslug\.biz|digiztechno\.com|tournguide\.com|yrtourguide\.com|techmize\.net|technons\.com|biovetro\.net|dailyjobposting\.xyz)/
// @include      /^https?:\/\/(.*\.)?(tpi\.li|oii\.la)/
// @include      /^https?:\/\/(.*\.)?(bitcotrade\.net|mobiend\.com|adurl\.io)/
// @include      /^https?:\/\/(psa\.wf\/goto\/|go2\.pics\/go2|get-to\.link|uiil\.ink)/
// @run-at       document-start
// ==/UserScript==

(() => {
  'use strict';

  const host = location.hostname;
  const href = location.href;

  const lim = Object.freeze({
    go2Depth: 8,
    ravTry: 50,
    ravGap: 100,
  });

  const say = (...msg) => console.log('[Bypass]', ...msg);

  function spoof() {
    try {
      Object.defineProperty(document, 'hidden', { value: false });
      Object.defineProperty(document, 'visibilityState', { value: 'visible' });
      Object.defineProperty(document, 'hasFocus', { value: () => true });
    } catch { }
  }

  //== helpers
  function b64(v) {
    if (!v) return null;
    try {
      return atob(v.replace(/-/g, '+').replace(/_/g, '/'));
    } catch {
      return null;
    }
  }

  function isGo2(u) {
    try {
      const x = new URL(u);
      return x.hostname === 'go2.pics' && x.pathname === '/go2';
    } catch {
      return false;
    }
  }

  function unGo2(u) {
    try {
      const x = new URL(u);
      if (!isGo2(u)) return null;
      const id = x.searchParams.get('id');
      return b64(id);
    } catch {
      return null;
    }
  }

  function go2Chain(start) {
    let cur = start;
    for (let d = 0; d < lim.go2Depth; d++) {
      const dec = unGo2(cur);
      if (!dec) break;
      say('decode', dec);
      if (isGo2(dec)) {
        cur = dec;
        continue;
      }
      location.replace(dec);
      return;
    }
  }

  function hXHR(cb, path) {
    const X = XMLHttpRequest.prototype, o = X.open, s = X.send, h = X.setRequestHeader;
    X.open = function (m, u) { this._u = u; this._h = {}; return o.apply(this, arguments); };
    X.setRequestHeader = function (k, v) { this._h[k] = v; return h.apply(this, arguments); };
    X.send = function (b) {
      this.addEventListener('load', () => {
        if (this._u && this._u.includes(path)) {
          try {
            const r = JSON.parse(this.responseText);
            cb(r, b, this._u, this._h);
          } catch (e) { }
        }
      });
      return s.apply(this, arguments);
    };
  }

  function sUI(t) {
    let c = document.getElementById('psa-ui');
    if (!c) {
      c = document.createElement('div');
      c.id = 'psa-ui';
      Object.assign(c.style, { position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '2147483647', background: '#b21d1dff', color: '#fff', padding: '10px', fontSize: '24px', textAlign: 'center', fontWeight: 'bold' });
      document.body ? document.body.appendChild(c) : document.addEventListener('DOMContentLoaded', () => document.body.appendChild(c), { once: true });
    }
    c.innerText = t;
  }

  function wBtn(s, f, i = 500) {
    const t = setInterval(() => {
      const e = document.querySelector(s);
      if (e && e.offsetParent && !e.disabled) {
        if (f(e) !== false) clearInterval(t);
      }
    }, i);
    return t;
  }

  //== start here
  // psa.wf auto redirect
  if (host === 'psa.wf' && location.pathname.startsWith('/goto/')) {
    say('detected');

    const realSet = window.setTimeout;
    window.setTimeout = (fn, _delay, ...args) => {
      if (typeof fn === 'function') {
        return realSet(fn, 0, ...args);
      }
      return realSet(fn, 0);
    };

    function doJump() {
      const form = document.forms?.redirect;
      if (!form) return false;
      say('inject redirect');
      try {
        form.submit();
      } catch { }
      return true;
    }

    if (!doJump()) {
      document.addEventListener('DOMContentLoaded', doJump, { once: true });
      window.addEventListener('load', doJump, { once: true });
    }
    return;
  }

  // go2.pics decode
  if (host === 'go2.pics' && location.pathname === '/go2') {
    say('decode');
    const dec = unGo2(href);
    if (!dec) {
      say('not found');
      return;
    }
    if (isGo2(dec)) {
      go2Chain(dec);
    } else {
      location.replace(dec);
    }
    return;
  }

  //== cashgrowth
  // cashgrowth bypass
  if (host.includes('cashgrowth.online') || host.includes('starkroboticsfrc.com')) {
    say('success');
    spoof();

    // redirect manual mode
    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
      const response = await originalFetch(...args);

      try {
        const url = args[0] instanceof Request ? args[0].url : args[0];
        if (url && typeof url === 'string' && url.includes('/api/session/')) {
          const clone = response.clone();
          clone.json().then(data => {
            if (data.redirect) {
              console.log('redirect:', data.redirect);
              location.replace(data.redirect);
            }
            else if (data.data && data.data.finalRedirect) {
              console.log('final redirect:', data.data.finalRedirect);
              location.replace(data.data.finalRedirect);
            }
          }).catch(e => console.error('JSON parse error', e));
        }
      } catch (e) {
        console.error('error', e);
      }

      return response;
    };

    // auto click delete session button
    const loop = setInterval(() => {
      const btn = document.getElementById('delete-session-btn');
      if (btn) {
        say('delete session');
        btn.click();
      }
    }, 500);
    return;
  }

  // ravellawfirm redirect
  if (host.includes('ravellawfirm.com')) {
    say('ok');

    function getDest() {
      for (const island of document.querySelectorAll('astro-island')) {
        const prop = island.getAttribute('props');
        if (!prop || !prop.includes('finalDestination')) continue;
        const m = prop.match(/"finalDestination":\[\d+,"([^"]+)"\]/);
        if (m) return m[1];
      }
      return null;
    }

    let cnt = 0;
    const t = setInterval(() => {
      cnt++;
      const dest = getDest();
      if (!dest && cnt < lim.ravTry) return;

      clearInterval(t);
      if (!dest) {
        say('fail');
        return;
      }

      say('final', dest);
      if (isGo2(dest)) {
        go2Chain(dest);
      } else {
        location.replace(dest);
      }
    }, lim.ravGap);

    return;
  }

  //== exe.io
  if (/exe\.io|exe-links\.com|exeygo\.com/.test(host)) {
    say('exe');
    window.open = () => { };
    const OSI = setInterval;
    window.setInterval = (f, t, ...a) => OSI(f, t === 1e3 ? 100 : t, ...a);

    hXHR((r, b, u, h) => {
      if (r.url) location.href = r.url;
      else if (r.message) fetch(u, { method: 'POST', headers: { ...h, 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }, body: b })
        .then(x => x.json()).then(d => d.url && (location.href = d.url));
    }, '/links/go');

    wBtn('#before-captcha .button, button.link-button', b => b.innerText.includes('Continue') && b.click());
    wBtn('#invisibleCaptchaShortlink', b => b.click());
    wBtn('#g-recaptcha-response', c => {
      if (c.value.length > 20) { (document.getElementById('link-view') || document.forms[0]).submit(); return true; }
      sUI('Solve captcha manual');
      return false;
    });
    return;
  }

  // recaptcha
  if (/google\.com|recaptcha\.net/.test(host)) {
    setInterval(() => {
      const b = document.querySelector('.recaptcha-checkbox-border');
      if (b && !b.classList.contains('recaptcha-checkbox-checked')) b.click();
    }, 1000);
    return;
  }

  //== shortxlinks (seems removed from psa)
  if (/mtc\d/.test(host)) {
    let check = setInterval(() => {
      const d = s => { try { return JSON.parse(atob(s)); } catch (e) { } };
      const p = new URLSearchParams(location.search).get('safelink_redirect');

      if (p) {
        const res = d(p);
        if (res && res.safelink) { clearInterval(check); location.href = res.safelink; }
      } else {
        const e = document.getElementById('value') || document.querySelector('input[name="newwpsafelink"]');
        const v = e ? e.value : window.ad_mem;
        if (v && document.body) {
          clearInterval(check);
          const j = d(v);
          if (j && j.linkr) {
            let u = j.linkr, t = (parseInt(j.delay) || 25) + 2;
            try { u = d(new URL(u).searchParams.get('safelink_redirect')).safelink || u; } catch (e) { }
            let i = setInterval(() => {
              sUI(`Redirecting in ${t--}s...`);
              if (t < 0) { clearInterval(i); location.href = u; }
            }, 1000);
          }
        }
      }
    }, 500);
    return;
  }

  if (host.includes('shortxlinks')) hXHR(r => r.url && (location.href = r.url), '/links/go');

  //== shrinkme
  // shrinkme
  if (/shrinkme\.click/.test(host)) {
    say('shrinkme');
    const t = setInterval(() => {
      const v = document.getElementById('div-human-verification');
      if (v && v.dataset.link) { clearInterval(t); location.href = 'https://themezon.net/link.php?link=' + v.dataset.link; }
    }, 500);
    return;
  }

  // themezon
  if (/themezon\.net/.test(host)) {
    say('themezon');
    const t = setInterval(() => {
      const v = document.querySelector('input[name="newwpsafelink"]');
      const n = document.querySelector('#nextPage a');
      if (v) {
        clearInterval(t);
        const f = document.createElement('form');
        f.method = 'POST'; f.action = '/?redirect_to=random';
        const h = document.createElement('input');
        h.type = 'hidden'; h.name = 'newwpsafelink'; h.value = v.value;
        f.appendChild(h); document.body.appendChild(f); f.submit();
      } else if (n) {
        clearInterval(t); location.href = n.href;
      }
    }, 500);
    return;
  }

  // mrproblogger
  if (/mrproblogger\.com/.test(host)) {
    say('mrproblogger');
    hXHR(r => r.url && (location.href = r.url), '/links/go');
    wBtn('a.get-link, #btn-get-link, #get-link-btn, button#go-submit', b => b.click(), 1000);
    sUI('WAIT FOR COUNTDOWN');
    return;
  }

  //== fc.lc
  if (/fc-lc|fc\.lc|jobzhub/.test(host)) {
    say('fc.lc');
    const t = setInterval(() => {
      const b = document.getElementById('invisibleCaptchaShortlink'), c = document.querySelector('textarea[name$="captcha-response"]');
      if (b && c) {
        if (c.value.length > 10) { clearInterval(t); b.disabled = 0; b.click(); }
        else sUI('Solve captcha manual');
        return;
      }
      const m = document.documentElement.innerHTML.match(/REDIRECT_URL\s*=\s*"([^"]+)"/);
      if (m) { clearInterval(t); location.replace(m[1]); return; }
      const f = document.querySelector('input[name="fdata"]');
      if (f) { clearInterval(t); fetch('?start_countdown=1').then(r => r.json()).then(d => { f.value = d.rand; f.closest('form').submit(); }); return; }
      const f12 = document.getElementById('form12');
      if (f12) { clearInterval(t); fetch('https://fc.lc/links/go', { method: 'POST', body: new FormData(f12) }).then(r => r.json()).then(d => d.url && (location.href = d.url)); }
    }, 500);
    return;
  }

  //== shrtslug and others
  // shrtslug / digiztechno / tournguide / techmize / technons / biovetro / dailyjobposting
  if (/shrtslug|digiztechno|tournguide|techmize|technons|yrtourguide|biovetro|dailyjobposting/.test(host)) {
    say('shrtslug');
    let s = document.createElement('style');
    s.innerHTML = '#warning_area{display:none!important}#main_area{display:block!important}';
    document.head.appendChild(s);
    try { Object.defineProperty(window, 'abwn', { value: () => { }, writable: false }); } catch (e) { }
    new MutationObserver(m => m.forEach(n => { if (n.addedNodes[0]?.id === 'main_area') n.addedNodes[0].remove = () => { }; })).observe(document, { childList: true, subtree: true });

    const t = setInterval(() => {
      let f = document.querySelector('div[id$="_final"] a, div[id$="_final"] button');
      if (f && f.offsetParent) { clearInterval(t); f.click(); return; }

      document.querySelectorAll('button, a.btn, input[type="submit"]').forEach(b => {
        if (b.offsetParent && !b.disabled && /verify|proceed|get link|open|begin|start/i.test(b.innerText || b.value)) b.click();
      });
    }, 1000);
    return;
  }

  //== tpi.li, oii.la
  if (/tpi\.li|oii\.la/.test(host)) {
    say('tpi.li');
    const t = setInterval(() => {
      let m = document.documentElement.innerHTML.match(/aHR0c[a-zA-Z0-9+/=]+(?<!=)/);
      if (m) {
        let d = atob(m[0]);
        if (d.includes('http') && !d.includes(location.hostname)) {
          clearInterval(t); location.href = d; return;
        }
      }

      let c = document.querySelector('input[name="cf-turnstile-response"]'),
        b = document.querySelector('#continue, button[type="submit"]');
      if (c && c.value && b) { clearInterval(t); b.click(); }
    }, 500);
    return;
  }

  //== bitcotrade, mobiend, adurl (seems removed from psa)
  if (/bitcotrade\.net|mobiend\.com|adurl\.io/.test(host)) {
    say('bitcotrade');
    hXHR(r => r.url && (location.href = r.url), '/links/go');
    wBtn('#go_d', b => b.href && b.href.startsWith('http') && (location.href = b.href));
    if (host.includes('adurl.io')) sUI('WAIT FOR COUNTDOWN');
    return;
  }

  //== uiil.ink
  if (host.includes('uiil.ink')) {
    say('uiil');
    window.open = () => { };
    const t = setInterval(() => {
      const c = document.querySelector('input[name="cf-turnstile-response"]');
      const b = document.getElementById('invisibleCaptchaShortlink');
      if (c && c.value && b && !b.disabled) b.click();

      const f = document.getElementById('go-link');
      const s = document.getElementById('go-submit');
      if (f && s && s.offsetParent && !s.disabled) {
        clearInterval(t);
        f.submit();
      }

      const l = document.querySelector('a.get-link, #get-link');
      if (l && l.href && l.href.startsWith('http')) {
        clearInterval(t);
        location.href = l.href;
      }
    }, 1000);
    return;
  }

  // get-to.link
  if (host === 'get-to.link') {
    say('tada');
    const t = setInterval(() => {
      const b = document.querySelector('a.btn.btn-primary, a.btn.btn-secondary, a.get-link');
      if (b && b.href && b.href.startsWith('http')) {
        clearInterval(t);
        location.href = b.href;
      }
    }, 500);
    return;
  }
})();
