// ==UserScript==
// @name            MonkeyConfig Mod
// @noframes
// @version         0.1
// @namespace       https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/
// @contributionURL https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/issues
// @description     Enhanced Configuration Dialog Builder with column layout, custom styling, additional input types, and scrollable labels
// @require         https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js#sha384-qSFej5dZNviyoPgYJ5+Xk4bEbX8AYddxAHPuzs1aSgRiXxJ3qmyWNaPsRkpv/+x5
// ==/UserScript==
/* eslint-disable no-undef */
/*
 * MonkeyConfig Enhanced
 * Based on version 0.1.4 by Michal Wojciechowski (odyniec.net)
 * v0.1.4 - January 2020 - David Hosier (https://github.com/david-hosier/MonkeyConfig)
 * Enhanced by Bloggerpemula - March 2025
 * Debloated by gongchandang49 - Feb 2026
 * Additions: Column layout, font size/color customization, new input types (textarea, range, radio, file, button, group)
 * Modified: Checkbox, number, and text inputs aligned inline with labels - March 2025
 * Fixed: Improved Shadow DOM and Optimized Iframe for consistent styling across sites - March 2025
 * Enhanced: Scrollable labels, customizable checkbox/number sizes, new column options (left&top, right&top, left&bottom, right&bottom) - April 2025
 * Security: Added Trusted Types support, DOMPurify sanitization, and robust error handling - May 2025
 */
  function MonkeyConfig(data) {
    let cfg = this,
      params = data.parameters || data.params,
      values = {},
      storageKey,
      displayed,
      openLayer,
      shadowRoot,
      container,
      iframeFallback;
    function log(message, level = 'info') {
      try {console[level](`[MonkeyConfig v2.4] ${message}`);} catch (e) {
        console.error(`[MonkeyConfig v2.4] Logging failed: ${e.message}`);}}
    let trustedPolicy;
    try {trustedPolicy = window.trustedTypes?.createPolicy('monkeyConfigPolicy', {
        createHTML: (input) => {
          if (typeof DOMPurify === 'undefined') {
            log('DOMPurify not available, falling back to basic sanitization', 'warn');
            return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/on\w+\s*=\s*".*?"/gi, '');}
          return DOMPurify.sanitize(input, {RETURN_TRUSTED_TYPE: true});}}) || {createHTML: (input) => input};} catch (e) {
      log(`Failed to create Trusted Types policy: ${e.message}`, 'error');
      trustedPolicy = {
        createHTML: (input) => input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/on\w+\s*=\s*".*?"/gi, '')};}
    function createTrustedHTML(htmlString) {
      try {return trustedPolicy.createHTML(htmlString);} catch (e) {
        log(`Failed to create TrustedHTML: ${e.message}`, 'error');
        return '';}}
    function init() {
      try {data.buttons = data.buttons || ['save', 'reset', 'close', 'reload', 'homepage'];
        storageKey = '_MonkeyConfig_' + (data.title || 'Configuration').replace(/[^a-zA-Z0-9]/g, '_') + '_cfg';
        let storedValues;
        try {storedValues = GM_getValue(storageKey) ? JSON.parse(GM_getValue(storageKey)) : {};} catch (e) {
          log(`Failed to parse stored values: ${e.message}`, 'error');
          storedValues = {};}
        cfg.shadowWidth = data.shadowWidth || storedValues.shadowWidth || "600px";
        cfg.shadowHeight = data.shadowHeight || storedValues.shadowHeight || "400px";
        cfg.iframeWidth = data.iframeWidth || storedValues.iframeWidth || "600px";
        cfg.iframeHeight = data.iframeHeight || storedValues.iframeHeight || "400px";
        cfg.shadowFontSize = data.shadowFontSize || storedValues.shadowFontSize || "14px";
        cfg.shadowFontColor = data.shadowFontColor || storedValues.shadowFontColor || "#000000";
        cfg.iframeFontSize = data.iframeFontSize || storedValues.iframeFontSize || "14px";
        cfg.iframeFontColor = data.iframeFontColor || storedValues.iframeFontColor || "#000000";
        cfg.title = data.title || (typeof GM_getMetadata === 'function' ? GM_getMetadata('name') + ' Configuration' : 'Configuration');
        for (let key in params) {const param = params[key];values[key] = storedValues[key] ?? param.default ?? '';}
        if (data.menuCommand) {try {
            GM_registerMenuCommand(data.menuCommand === true ? cfg.title : data.menuCommand, () => cfg.open());} catch (e) {
            log(`Failed to register menu command: ${e.message}`, 'error');}}
        cfg.open = open;
        cfg.close = close;
        cfg.get = name => values[name];
        cfg.set = (name, value) => {
          try {values[name] = value;
            update();} catch (e) {
            log(`Failed to set value for ${name}: ${e.message}`, 'error');}};} catch (e) {
        log(`Initialization failed: ${e.message}`, 'error');}}
    function setDefaults() {
      try {for (let key in params) {
          if (params[key].default !== undefined) {values[key] = params[key].default;}}
        update();} catch (e) {
        log(`Failed to set defaults: ${e.message}`, 'error');}}
    function render() {
      try {let html = `<div class="__MonkeyConfig_container">
        <div style="position: absolute; top: 5px; right: 5px;">
          <button type="button" id="__MonkeyConfig_button_close" style="background: none !important; border: none !important; padding: 5px !important; display: flex !important; align-items: center !important; justify-content: center !important;">
            <img src="data:image/png;base64,${MonkeyConfig.res.icons.close}" alt="Close" style="width: 16px !important; height: 16px !important;"/>
          </button>
        </div>
        <h1>${MonkeyConfig.esc(cfg.title)}</h1><div class="__MonkeyConfig_content"><div class="__MonkeyConfig_top">`;
        for (let key in params) {
          if (params[key].column === 'top') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `<div class="__MonkeyConfig_top_columns"><div class="__MonkeyConfig_left_top">`;
        for (let key in params) {
          if (params[key].column === 'left&top') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div><div class="__MonkeyConfig_right_top">`;
        for (let key in params) {
          if (params[key].column === 'right&top') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div></div>`;
        html += `</div><div class="__MonkeyConfig_columns"><div class="__MonkeyConfig_left_column">`;
        for (let key in params) {
          if (params[key].column === 'left') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div><div class="__MonkeyConfig_right_column">`;
        for (let key in params) {
          if (params[key].column === 'right') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div></div><table class="__MonkeyConfig_default">`;
        for (let key in params) {
          if (!params[key].column) {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</table><div class="__MonkeyConfig_bottom">`;
        for (let key in params) {
          if (params[key].column === 'bottom') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `<div class="__MonkeyConfig_bottom_columns"><div class="__MonkeyConfig_left_bottom">`;
        for (let key in params) {
          if (params[key].column === 'left&bottom') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div><div class="__MonkeyConfig_right_bottom">`;
        for (let key in params) {
          if (params[key].column === 'right&bottom') {html += MonkeyConfig.formatters.tr(key, params[key]);}}
        html += `</div></div>`;
        html += `</div></div><div class="__MonkeyConfig_buttons_container"><table><tr>`;
        data.buttons.forEach(btn => {if (btn === 'close') return;
          html += '<td>';
          if (btn === 'save') {
            html += `<button type="button" id="__MonkeyConfig_button_save" style="display: flex !important; align-items: center !important; justify-content: center !important; padding: 4px 8px !important; border-radius: 0.5em !important; border: 1px solid #999 !important; background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; line-height: 1.2 !important;"><img src="data:image/png;base64,${MonkeyConfig.res.icons.save}" alt="Save Without Reload" style="width: 16px !important; height: 16px !important; margin-right: 8px !important;" onerror="this.style.display='none'"/> Save Without Reload</button>`;
          } else if (btn === 'reset') {
            html += `<button type="button" id="__MonkeyConfig_button_reset" style="display: flex !important; align-items: center !important; justify-content: center !important; padding: 4px 8px !important; border-radius: 0.5em !important; border: 1px solid #999 !important; background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; line-height: 1.2 !important;"><img src="data:image/png;base64,${MonkeyConfig.res.icons.reset}" alt="Reset" style="width: 16px !important; height: 16px !important; margin-right: 8px !important;" onerror="this.style.display='none'"/> Reset</button>`;
          } else if (btn === 'reload') {
            html += `<button type="button" id="__MonkeyConfig_button_reload" style="display: flex !important; align-items: center !important; justify-content: center !important; padding: 4px 8px !important; border-radius: 0.5em !important; border: 1px solid #999 !important; background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; line-height: 1.2 !important;"><img src="data:image/png;base64,${MonkeyConfig.res.icons.reload}" alt="Save With Reload" style="width: 16px !important; height: 16px !important; margin-right: 8px !important;" onerror="this.style.display='none'"/> Save With Reload</button>`;
          } else if (btn === 'homepage') {
            html += `<button type="button" id="__MonkeyConfig_button_homepage" style="display: flex !important; align-items: center !important; justify-content: center !important; padding: 4px 8px !important; border-radius: 0.5em !important; border: 1px solid #999 !important; background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; line-height: 1.2 !important;"><img src="data:image/png;base64,${MonkeyConfig.res.icons.home}" alt="Homepage" style="width: 16px !important; height: 16px !important; margin-right: 8px !important;" onerror="this.style.display='none'"/> Homepage</button>`;}
          html += '</td>';});
        html += '</tr></table></div></div>';
        return createTrustedHTML(html);} catch (e) {
        log(`Failed to render HTML: ${e.message}`, 'error');
        return createTrustedHTML('<div>Error rendering configuration dialog</div>');}}
    function update() {
      try {if (!displayed) return;
        const root = shadowRoot || (iframeFallback && iframeFallback.contentDocument);
        if (!root) {
          log('Root element not found for update', 'error');
          return;}
        for (let key in params) {
          const elem = root.querySelector(`[name="${MonkeyConfig.esc(key)}"]`),
            param = params[key];
          if (!elem) {log(`Element for ${key} not found`, 'warn');continue;}
          if (param.type === 'checkbox') {
            elem.checked = !!values[key];
            elem.style.width = param.checkboxWidth || '11px';
            elem.style.height = param.checkboxHeight || '11px';
          } else if (param.type === 'number') {
            elem.value = values[key] || param.default;
            elem.style.width = param.inputWidth || '50px';
            elem.style.height = param.inputHeight || '15px';
          } else if (param.type === 'text') {
            elem.value = values[key] || param.default;
            elem.style.width = param.inputWidth || '100px';
            elem.style.height = param.inputHeight || '15px';
          } else if (param.type === 'custom' && param.set) {
            try {
              param.set(values[key], root.querySelector(`#__MonkeyConfig_parent_${MonkeyConfig.esc(key)}`));} catch (e) {
              log(`Failed to set custom param ${key}: ${e.message}`, 'error');}
          } else if (['text', 'color', 'textarea', 'range'].includes(param.type)) {
            elem.value = values[key] || param.default;
          } else if (param.type === 'radio') {
            const radio = root.querySelector(`[name="${MonkeyConfig.esc(key)}"][value="${MonkeyConfig.esc(values[key])}"]`);
            if (radio) radio.checked = true;
          } else if (param.type === 'file') {
            elem.value = '';
          } else if (param.type === 'select') {
            const currentValue = values[key];
            if (elem.type === 'checkbox') {
              const checkboxes = root.querySelectorAll(`input[name="${MonkeyConfig.esc(key)}"]`);
              checkboxes.forEach(cb => {cb.checked = currentValue.includes(cb.value);});
            } else if (elem.multiple) {
              const options = root.querySelectorAll(`select[name="${MonkeyConfig.esc(key)}"] option`);
              options.forEach(opt => {opt.selected = currentValue.includes(opt.value);});} else {
              elem.value = currentValue;}}
          const fontSize = shadowRoot ? cfg.shadowFontSize : cfg.iframeFontSize;
          const defaultFontColor = shadowRoot ? cfg.shadowFontColor : cfg.iframeFontColor;
          const labelFontColor = param.fontColor || defaultFontColor;
          elem.style.fontSize = fontSize;elem.style.color = labelFontColor;
          if (param.type === 'checkbox' || param.type === 'textarea') {
            elem.style.backgroundColor = 'inherit';
            elem.style.color = labelFontColor;}
          const label = root.querySelector(`label[for="__MonkeyConfig_field_${MonkeyConfig.esc(key)}"]`);
          if (label) {label.style.fontSize = fontSize;
            label.style.color = labelFontColor;
            label.style.cssText += param.type === 'textarea' ? 'text-align:center;display:block;width:100%' : 'text-align:left;display:inline-block;width:auto';}}
      } catch (e) {
        log(`Failed to update UI: ${e.message}`, 'error');}}
    function saveClick() {
      try {const root = shadowRoot || (iframeFallback && iframeFallback.contentDocument);
        if (!root) {
          log('Root element not found for save', 'error');
          return;}
        for (let key in params) {
          const elem = root.querySelector(`[name="${MonkeyConfig.esc(key)}"]`),
            param = params[key];
          if (!elem) {
            log(`Element for ${key} not found during save`, 'warn');
            continue;}
          if (param.type === 'checkbox') {
            values[key] = elem.checked;
          } else if (param.type === 'custom' && param.get) {
            try {
              values[key] = param.get(root.querySelector(`#__MonkeyConfig_parent_${MonkeyConfig.esc(key)}`));} catch (e) {
              log(`Failed to get custom param ${key}: ${e.message}`, 'error');}
          } else if (['number', 'text', 'color', 'textarea', 'range'].includes(param.type)) {
            values[key] = elem.value;
          } else if (param.type === 'radio') {
            values[key] = root.querySelector(`[name="${MonkeyConfig.esc(key)}"]:checked`)?.value || '';
          } else if (param.type === 'file') {
            values[key] = elem.dataset.value || values[key];
          } else if (param.type === 'select') {
            if (elem.type === 'checkbox') {
              values[key] = Array.from(root.querySelectorAll(`input[name="${MonkeyConfig.esc(key)}"]:checked`)).map(input => input.value);
            } else if (elem.multiple) {
              values[key] = Array.from(root.querySelectorAll(`select[name="${MonkeyConfig.esc(key)}"] option:selected`)).map(opt => opt.value);
            } else {
              values[key] = elem.value;}}}
        const allValues = {
          ...values,
          shadowWidth: cfg.shadowWidth,
          shadowHeight: cfg.shadowHeight,
          iframeWidth: cfg.iframeWidth,
          iframeHeight: cfg.iframeHeight,
          shadowFontSize: cfg.shadowFontSize,
          shadowFontColor: cfg.shadowFontColor,
          iframeFontSize: cfg.iframeFontSize,
          iframeFontColor: cfg.iframeFontColor};

        try {
          GM_setValue(storageKey, JSON.stringify(allValues));} catch (e) {
          log(`Failed to save values: ${e.message}`, 'error');}
        close();
        if (data.onSave) {try {data.onSave(values);} catch (e) {
            log(`onSave callback failed: ${e.message}`, 'error');}}
      } catch (e) {
        log(`Save operation failed: ${e.message}`, 'error');}}
    function open() {if (window.self !== window.top) {
        log('Cannot open dialog in iframe', 'warn');
        return;}
      function openDone(root) {
        try {
          const saveBtn = root.querySelector('#__MonkeyConfig_button_save');
          if (saveBtn) saveBtn.addEventListener('click', saveClick, false);
          const resetBtn = root.querySelector('#__MonkeyConfig_button_reset');
          if (resetBtn) resetBtn.addEventListener('click', setDefaults, false);
          const closeBtn = root.querySelector('#__MonkeyConfig_button_close');
          if (closeBtn) closeBtn.addEventListener('click', close, false);
          const reloadBtn = root.querySelector('#__MonkeyConfig_button_reload');
          if (reloadBtn) reloadBtn.addEventListener('click', () => {saveClick();location.reload();}, false);
          const homepageBtn = root.querySelector('#__MonkeyConfig_button_homepage');
          if (homepageBtn) homepageBtn.addEventListener('click', () => window.open('https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/', '_blank'), false);
          displayed = true;
          const checkboxes = root.querySelectorAll('input[type="checkbox"]');
          checkboxes.forEach(cb => {
            cb.style.width = cb.style.width || '11px';
            cb.style.height = cb.style.height || '11px';});
          const numbers = root.querySelectorAll('input[type="number"]');
          numbers.forEach(num => {
            num.style.width = num.style.width || '40px';
            num.style.height = num.style.height || '20px';});
          update();} catch (e) {
          log(`Failed to initialize dialog: ${e.message}`, 'error');}}
      const body = document.querySelector('body') || document.documentElement;
      if (!body) {log('Body not found, cannot open dialog', 'error');
        return;}
      openLayer = document.createElement('div');
      openLayer.className = '__MonkeyConfig_layer';
      try {shadowRoot = openLayer.attachShadow({
          mode: 'open'});} catch (e) {
        log(`Failed to attach Shadow DOM: ${e.message}`, 'error');
        shadowRoot = null;}
      const shadowWidth = cfg.shadowWidth || "600px";
      const shadowHeight = cfg.shadowHeight || "300px";
      log(`Preparing Shadow DOM with title: ${MonkeyConfig.esc(cfg.title)}, dimensions - Width: ${shadowWidth}, Height: ${shadowHeight}`);
      const heightStyle = shadowHeight === 'auto' ? 'auto' : shadowHeight;
      if (shadowRoot) {try {shadowRoot.innerHTML = createTrustedHTML(`
            <style>
              :host { all: initial; display: block !important; font-family: Arial, sans-serif !important; isolation: isolate; z-index: 2147483647 !important; font-size: ${MonkeyConfig.esc(cfg.shadowFontSize)} !important; color: ${MonkeyConfig.esc(cfg.shadowFontColor)} !important; }
              h1 { font-size: 120% !important; font-weight: normal !important; margin: 0 !important; padding: 0 !important; }
              ${MonkeyConfig.res.stylesheets.main.replace(/__FONT_SIZE__/g, MonkeyConfig.esc(cfg.shadowFontSize)).replace(/__FONT_COLOR__/g, MonkeyConfig.esc(cfg.shadowFontColor))}
              .__MonkeyConfig_overlay { position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background-color: rgba(0, 0, 0, 0.6) !important; z-index: 2147483646 !important; }
              .__MonkeyConfig_container { position: fixed !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; z-index: 2147483647 !important; width: ${MonkeyConfig.esc(shadowWidth)} !important; height: ${MonkeyConfig.esc(heightStyle)} !important; max-width: 90vw !important; max-height: 80vh !important; overflow-y: auto !important; box-sizing: border-box !important; }
            </style>
            <div class="__MonkeyConfig_overlay"></div>
            ${render()}`);
          container = shadowRoot.querySelector('.__MonkeyConfig_container');
          openLayer.style.cssText = 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: 2147483647 !important;';
          body.appendChild(openLayer);
          log('Dialog appended to body via Shadow DOM');
          const appliedWidth = container?.offsetWidth || 'unknown';
          const appliedHeight = container?.offsetHeight || 'unknown';
          log(`Actual applied dimensions - Width: ${appliedWidth}px, Height: ${appliedHeight}px`);
          if (!container || shadowRoot.querySelector('.__MonkeyConfig_overlay')?.offsetHeight === 0) {
            throw new Error('Shadow DOM rendering failed');}
          openDone(shadowRoot);} catch (e) {
          log(`Shadow DOM failed: ${e.message}, switching to iframe fallback`, 'warn');
          body.removeChild(openLayer);
          shadowRoot = null;}}
      if (!shadowRoot) {
        iframeFallback = document.createElement('iframe');
        const iframeWidth = cfg.iframeWidth || "600px";
        const iframeHeight = cfg.iframeHeight || "300px";
        log(`Switching to iframe with dimensions - Width: ${iframeWidth}, Height: ${iframeHeight}`);
        iframeFallback.style.cssText = `position: fixed !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: ${MonkeyConfig.esc(iframeWidth)} !important; height: ${MonkeyConfig.esc(iframeHeight)} !important; max-width: 90vw !important; max-height: 80vh !important; z-index: 2147483647 !important; border: none !important; background: #eee !important; box-shadow: 2px 2px 16px #000 !important; border-radius: 0.5em !important;`;
        body.appendChild(iframeFallback);
        const iframeDoc = iframeFallback.contentDocument;
        try {iframeDoc.open();
          const iframeHTML = createTrustedHTML(`<!DOCTYPE html><html><head><style>
            html, body, * { all: initial !important; margin: 0 !important; padding: 0 !important; font-family: Arial, sans-serif !important; font-size: ${MonkeyConfig.esc(cfg.iframeFontSize)} !important; color: ${MonkeyConfig.esc(cfg.iframeFontColor)} !important; height: 100% !important; width: 100% !important; box-sizing: border-box !important; }
            html, body { background: #eee !important; display: block !important; isolation: isolate !important; }
            input, textarea, button, label, table, td, div, span { all: unset !important; }
            ${MonkeyConfig.res.stylesheets.main.replace(/__FONT_SIZE__/g, MonkeyConfig.esc(cfg.iframeFontSize)).replace(/__FONT_COLOR__/g, MonkeyConfig.esc(cfg.iframeFontColor))}
            .__MonkeyConfig_overlay { position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background-color: rgba(0, 0, 0, 0.6) !important; z-index: 2147483646 !important; }
            .__MonkeyConfig_container { position: relative !important; width: 100% !important; height: 100% !important; padding: 1em !important; box-sizing: border-box !important; overflow-y: auto !important; border-radius: 0.5em !important; font-size: ${MonkeyConfig.esc(cfg.iframeFontSize)} !important; isolation: isolate !important; background: #eee linear-gradient(180deg, #f8f8f8 0, #ddd 100%) !important; }
            .__MonkeyConfig_container h1 { font-size: 120% !important; font-weight: normal !important; margin: 0 !important; padding: 0 !important; display: block !important; }
            .__MonkeyConfig_container td.__MonkeyConfig_inline input[type="checkbox"] { width: 11px !important; height: 11px !important; margin: 0 0.5em 0 0 !important; vertical-align: middle !important; accent-color: #007bff !important; display: inline-block !important; }
            .__MonkeyConfig_container td.__MonkeyConfig_inline input[type="number"] { width: 40px !important; height: 20px !important; margin: 0 0.5em 0 0 !important; vertical-align: middle !important; display: inline-block !important; }
            .__MonkeyConfig_container textarea { width: 100% !important; padding: 1.2em !important; border: 1px solid #ccc !important; border-radius: 0.3em !important; box-sizing: border-box !important; font-size: 20px !important; color: ${MonkeyConfig.esc(cfg.iframeFontColor)} !important; resize: vertical !important; min-height: 140px !important; white-space: pre-wrap !important; display: block !important; }
            .__MonkeyConfig_container button { background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; border: 1px solid #999 !important; border-radius: 0.5em !important; box-shadow: 0 0 1px #000 !important; padding: 12px 16px 12px 48px !important; white-space: nowrap !important; font-size: 20px !important; color: ${MonkeyConfig.esc(cfg.iframeFontColor)} !important; cursor: pointer !important; display: inline-block !important; }
            .__MonkeyConfig_container button:hover { background: #d2d2d2 linear-gradient(180deg, #e2e2e2 0, #d2d2d2 45%, #c2c2c2 50%, #b2b2b2 100%) !important; }
            .__MonkeyConfig_container label { display: inline-block !important; line-height: 120% !important; vertical-align: middle !important; }
            .__MonkeyConfig_container table { border-spacing: 0 !important; margin: 0 !important; width: 100% !important; display: table !important; }
            .__MonkeyConfig_container td { border: none !important; line-height: 100% !important; padding: 0.3em !important; text-align: left !important; vertical-align: middle !important; white-space: normal !important; display: table-cell !important; }
          </style></head><body><div class="__MonkeyConfig_overlay"></div>${render()}</body></html>`);
          iframeDoc.write(iframeHTML);
          iframeDoc.close();
          openLayer = iframeFallback;
          openDone(iframeDoc);
          const iframeAppliedWidth = iframeFallback.offsetWidth || 'unknown';
          const iframeAppliedHeight = iframeFallback.offsetHeight || 'unknown';
          log(`Iframe actual applied dimensions - Width: ${iframeAppliedWidth}px, Height: ${iframeAppliedHeight}px`);} catch (e) {
          log(`Iframe rendering failed: ${e.message}`, 'error');
          body.removeChild(iframeFallback);
          iframeFallback = null;}}}
    function close() {
      try {if (openLayer && openLayer.parentNode) {openLayer.parentNode.removeChild(openLayer);}
        openLayer = shadowRoot = iframeFallback = undefined;
        displayed = false;} catch (e) {log(`Failed to close dialog: ${e.message}`, 'error');}}
    init();}
  MonkeyConfig.esc = string => {
    try {
      return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');} catch (e) {
      log(`Failed to escape string: ${e.message}`, 'error');
      return '';}};
  MonkeyConfig.HTML = {
    _field: (name, opt) => {
      try {
        return opt.type && MonkeyConfig.HTML[opt.type] ? (opt.html ? opt.html.replace(/\[FIELD\]/, MonkeyConfig.HTML[opt.type](name, opt)) :
            MonkeyConfig.HTML[opt.type](name, opt)) :
          '';} catch (e) {
        log(`Failed to render field ${name}: ${e.message}`, 'error');
        return '';}},
    _label: (name, opt) => {try {
        return `<label for="__MonkeyConfig_field_${MonkeyConfig.esc(name)}"${
        opt.labelAlign || opt.fontSize || opt.fontColor? ` style="${[
              opt.labelAlign && `text-align:${MonkeyConfig.esc(opt.labelAlign)}`,
              opt.fontSize && `font-size:${MonkeyConfig.esc(opt.fontSize)}`,
              opt.fontColor && `color:${MonkeyConfig.esc(opt.fontColor)}`
            ].filter(Boolean).join(';')};"`
          : ''
      }>${MonkeyConfig.esc(opt.label || name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' '))}</label>`;} catch (e) {
        log(`Failed to render label for ${name}: ${e.message}`, 'error');
        return '';}},
    checkbox: name => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="checkbox" name="${MonkeyConfig.esc(name)}" />`,
    custom: (name, opt) => opt.html || '',
    number: (name, opt) => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="number" class="__MonkeyConfig_field_number" name="${MonkeyConfig.esc(name)}" min="${MonkeyConfig.esc(opt.min || '')}" max="${MonkeyConfig.esc(opt.max || '')}" step="${MonkeyConfig.esc(opt.step || '1')}" />`,
    text: name => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="text" class="__MonkeyConfig_field_text" name="${MonkeyConfig.esc(name)}" />`,
    color: name => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="color" class="__MonkeyConfig_field_text" name="${MonkeyConfig.esc(name)}" />`,
    textarea: (name, opt) => `<textarea id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" class="__MonkeyConfig_field_text" name="${MonkeyConfig.esc(name)}" rows="${MonkeyConfig.esc(opt.rows || 4)}" cols="${MonkeyConfig.esc(opt.cols || 20)}"></textarea>`,
    range: (name, opt) => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="range" name="${MonkeyConfig.esc(name)}" min="${MonkeyConfig.esc(opt.min || 0)}" max="${MonkeyConfig.esc(opt.max || 100)}" step="${MonkeyConfig.esc(opt.step || 1)}" />`,
    radio: (name, opt) => {
      try {
        return Object.entries(opt.choices).map(([val, text]) =>
          `<label><input type="radio" name="${MonkeyConfig.esc(name)}" value="${MonkeyConfig.esc(val)}" /> ${MonkeyConfig.esc(text)}</label><br/>`
        ).join('');} catch (e) {
        log(`Failed to render radio for ${name}: ${e.message}`, 'error');
        return '';}},
    file: (name, opt) => `<input id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" type="file" name="${MonkeyConfig.esc(name)}" accept="${MonkeyConfig.esc(opt.accept || '*/*')}" />`,
    button: (name, opt) => `<button type="button" id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" name="${MonkeyConfig.esc(name)}">${MonkeyConfig.esc(opt.label || 'Click')}</button>`,
    group: (name, opt) => {try {
        return `<fieldset><legend>${MonkeyConfig.esc(opt.label || name)}</legend>${
        Object.entries(opt.params).map(([subName, subOpt]) =>
          MonkeyConfig.formatters.tr(subName, subOpt)
        ).join('')
      }</fieldset>`;} catch (e) {
        log(`Failed to render group for ${name}: ${e.message}`, 'error');
        return '';}},
    select: (name, opt) => {try {
        const choices = Array.isArray(opt.choices) ? Object.fromEntries(opt.choices.map(val => [val, val])) :
          opt.choices;
        return `<select id="__MonkeyConfig_field_${MonkeyConfig.esc(name)}" class="__MonkeyConfig_field_select" name="${MonkeyConfig.esc(name)}"${
        opt.multiple ? ' multiple="multiple"' : ''
      }>${
        Object.entries(choices).map(([val, text]) =>
          `<option value="${MonkeyConfig.esc(val)}">${MonkeyConfig.esc(text)}</option>`
        ).join('')
      }</select>`;} catch (e) {
        log(`Failed to render select for ${name}: ${e.message}`, 'error');
        return '';}}};
  MonkeyConfig.formatters = {
    tr: (name, opt) => {try {return `<tr>${
        ['checkbox', 'number', 'text'].includes(opt.type)? `<td id="__MonkeyConfig_parent_${MonkeyConfig.esc(name)}" colspan="2" class="__MonkeyConfig_inline">${MonkeyConfig.HTML._label(name, opt)} ${MonkeyConfig.HTML._field(name, opt)}</td>`
          : opt.type === 'group'? `<td colspan="2">${MonkeyConfig.HTML._field(name, opt)}</td>`
            : `<td>${MonkeyConfig.HTML._label(name, opt)}</td><td id="__MonkeyConfig_parent_${MonkeyConfig.esc(name)}">${MonkeyConfig.HTML._field(name, opt)}</td>`
      }</tr>`;} catch (e) {
        log(`Failed to format table row for ${name}: ${e.message}`, 'error');
        return '';}}};
  MonkeyConfig.res = {
  icons: {
    save: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC',
    reset: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIJSURBVDjLpVM9aJNRFD35GsRSoUKKzQ/B0NJJF3EQlKrVgijSCBmC4NBFKihIcXBwEZdSHVoUwUInFUEkQ1DQ4CKiFsQsTrb5xNpgaZHw2Uog5t5zn0NJNFaw0guX97hwzuPcc17IOYfNlIdNVrhxufR6xJkZjAbSQGXjNAorqixSWFDV3KPhJ+UGLtSQMPryrDscPwLnAHOEOQc6gkbUpIagGmApWIb/pZRX4fjj889nWiSQtgYyBZ1BTUEj6AjPa0P71nb0Jfqwa+futIheHrzRn2yRQCUK/lOQhApBJVQJChHfnkCqOwWEQ+iORJHckUyX5ksvAEyGNuJC+s6xCRXNHNxzKMmQ4luwgjfvZp69uvr2+IZcyJ8rjIporrxURggetnV0QET3rrPxzMNM2+n7p678jUTrCiWhphAjVHR9DlR0WkSzf4IHxg5MSF0zXZEuVKWKSlCBCostS8zeG7oV64wPqxInbw86lbVXKEQ8mkAqmUJ4SxieeVhcnANFC02C7N2h69HO2IXeWC8MDj2JnqaFNAMd8f3HKjx6+LxQRmnOz1OZaxKIaF1VISYwB9ARZoQaYY6o1WpYCVYxt+zDn/XzVBv/MOWXW5J44ubRyVgkelFpmF/4BJVfOVDlVyqLVBZI5manPjajDOdcswfG9k/3X9v3/vfZv7rFBanriIo++J/f+BMT+YWS6hXl7QAAAABJRU5ErkJggg==',
    close: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdklEQVR4nH2RzWucVRjFf899ZyaTNE0FC6K0LjIV/AJBF4IglcFWBTdON1WkDSS48A8QxBYrKIKgSzdiAonBKk0DxUVpQaFQwUU3opAaEmmxCEUqMk1m5r3Ph4smr50ontXlnOecc+9zBeCFr9Z3IRwI5+aFo5O/8z84fHp9nyTuC+fXC0cnb8mh02v3jBb8OSpOGYnbSufiq63l/zI//+VaZ3ctlkYEeiH0lPuTWjw0EkqBMSaZ8cLOthdXX9lpbi+uHtld2NKYKIIygqIerRThf/TNMXOyBo1QxpOdfW7+ahVycP5qZzzZmUYoWQM3p6dOuN8UgGfnV6Ymks+NFk4gCEHPEn9lXgbSnjrnhjRPdFWmLx1/ZFa2W56Z/XlqorC5ZiEEIMCmQgKaNSqub0E3p+nLM4/PssVVePqzH6fGC5trJsEjkC01AkSE0oOupukf3nhidtszFADw5KdXXpuox2IjpSF+4M7tLMeuvPnUwt18bWeAltotBSQFEVstAvnOkm/tnB+qeezjy51m4edqEagp5oa5oabUCJri3zz6yfdDX1w94eGPLh0ZaxRntpcIUOqdU6Mm1XDfgs1SOytvHVyuAg58+F1nV6NYqichIhARsgebpR9HpDdWl6//rWln9e32sky+f/GBZr12o1lLVXM2Y7NkZv1E+3OA1gffvj5aZ6FeFP/cRJ1etn3J3O+VCLI5ak5/oHQHWpkB1t5pf9Et7Vi/VNScbI5EEO57UwTXB2qoGv2sbOQ8c+3k4cq8jWsnDi1sDHSqnxVVo1dmImJFAPafOv9gRLSAG7+999IvO813Y/+751tB7E0iP10/9eLG328sUoT0ZNvDAAAAAElFTkSuQmCC',
    reload: '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',
    home: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAACB0RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgTVi7kSokAAAAFnRFWHRDcmVhdGlvbiBUaW1lADExLzA1LzA33bqJ2wAAAlxJREFUeJx9U0tIVGEU/v7fe30wLQxCDKdykmrUCiqTIgrG1pGBMElto1VQyySMWhVl0qJNix6QGLhQWom6isRHE5SWBWLFNGqlmTWOd+bOf85pcfU6I9WBsznn+77z4BwlIsi1089e791QWHDNVqrOUggaJiQzJpFyTSzpmqsDZ46M5eJVrsC53rfdtlaNsa+/EE86cMnL2VqhrMRCKGDDMdTTf/boqTyBqcXl4ruvPk9O/VwODs0s4n8WClgotZDYF5Adt5siaQ0AN4Y/dv6NHA1vRntDdV7sU8pgLk3B5wumEwDUhf53Bw3L6NMPs+vI5WiPhMECdL2ZwqWhL3n5qkICMdcXhKPnH43NJasW0tk88p1IGCwCFmBXWSm22IS+xG8fYwRQTJV6Y1FBTTzp/IO85id3V+JmfYWPS7GCJlNjEUvF6raj4XK0RcIgETCL3wGLQERwonYbWASXX86AoWCIKrRh8lUvHqj0iJxbncEinqgIjm0vh/1jxhuDGDqTpWlbKwDA4Y5h0AqYRPDwxRgeD46vibHg+K0OaGcJSgRZ4mk957gTZSWW30UuuK1vBG19IyAWz1eOLhPcCYtcuNATulijJRSwfQFaGWEVnN5anbfMVdPpFEw226K7mg7FHEM9oYDld0DrwMTsdwEAVnoJWZae+dbmmAUADZsKmwe+OZPBIhUMPxhEcfx93tHsfzLqx7QCOOMk3Nl4M7Dumerv93cLc+N3o5BiBYa3XCUCi1zodMqrfCWa/0y5Vnuvdw+YrgtRHZEJGmK4jERWJGZEtc63NI3n4v8As6uX85AjWHEAAAAASUVORK5CYII='},
    stylesheets: {
      main: `:host, body { all: initial; font-family: Arial, sans-serif !important; display: block !important; isolation: isolate; }
.__MonkeyConfig_container { display: flex !important; flex-direction: column !important; padding: 1em !important; font-size: __FONT_SIZE__ !important; color: __FONT_COLOR__ !important; background: #eee linear-gradient(180deg, #f8f8f8 0, #ddd 100%) !important; border-radius: 0.5em !important; box-shadow: 2px 2px 16px #000 !important; box-sizing: border-box !important; }
.__MonkeyConfig_container h1 { border-bottom: solid 1px #999 !important; font-size: 120% !important; font-weight: normal !important; margin: 0 0 0.5em 0 !important; padding: 0 0 0.3em 0 !important; text-align: center !important; }
.__MonkeyConfig_content { flex: 1 !important; overflow-y: auto !important; max-height: 60vh !important; }
.__MonkeyConfig_top, .__MonkeyConfig_bottom { margin-bottom: 1em !important; }
.__MonkeyConfig_top_columns, .__MonkeyConfig_bottom_columns { display: flex !important; justify-content: space-between !important; margin-bottom: 1em !important;}
.__MonkeyConfig_left_top, .__MonkeyConfig_right_top, .__MonkeyConfig_left_bottom, .__MonkeyConfig_right_bottom { width: 48% !important; }
.__MonkeyConfig_columns { display: flex !important; justify-content: space-between !important; margin-bottom: 1em !important; }
.__MonkeyConfig_left_column, .__MonkeyConfig_right_column { width: 48% !important; }
.__MonkeyConfig_container table { border-spacing: 0 !important; margin: 0 !important; width: 100% !important; }
.__MonkeyConfig_container td { border: none !important; line-height: 100% !important; padding: 0.3em !important; text-align: left !important; vertical-align: middle !important; white-space: normal !important; }
.__MonkeyConfig_container td.__MonkeyConfig_inline { display: flex !important; align-items: center !important; white-space: nowrap !important; }
.__MonkeyConfig_container td.__MonkeyConfig_inline label { margin-right: 0.5em !important; flex-shrink: 0 !important; display: block !important; max-width: 100% !important; overflow-x: auto !important; white-space: nowrap !important; scrollbar-width: thin !important; }
.__MonkeyConfig_container td.__MonkeyConfig_inline input[type="checkbox"] { flex-grow: 0 !important; margin: 0 0.3em 0 0 !important; display: inline-block !important; width: 11px !important; height: 11px !important; }
.__MonkeyConfig_container td.__MonkeyConfig_inline input[type="number"] { flex-grow: 0 !important; width: 40px !important; height: 20px !important; }
.__MonkeyConfig_buttons_container { margin-top: 1em !important; border-top: solid 1px #999 !important; padding-top: 0.6em !important; text-align: center !important; }
.__MonkeyConfig_buttons_container table { width: auto !important; margin: 0 auto !important; }
.__MonkeyConfig_buttons_container td { padding: 0.3em !important; }
.__MonkeyConfig_container button { background: #ccc linear-gradient(180deg, #ddd 0, #ccc 45%, #bbb 50%, #aaa 100%) !important; border: solid 1px !important; border-radius: 0.5em !important; box-shadow: 0 0 1px #000 !important; padding: 3px 8px 3px 24px !important; white-space: nowrap !important; }
.__MonkeyConfig_container button img { vertical-align: middle !important; }
.__MonkeyConfig_container label { line-height: 120% !important; vertical-align: middle !important; display: inline-block !important; max-width: 100% !important; overflow-x: auto !important; white-space: nowrap !important; scrollbar-width: thin !important; }
.__MonkeyConfig_container textarea { vertical-align: text-top !important; width: 100% !important; white-space: pre-wrap !important; resize: vertical !important; text-align: left !important; }
.__MonkeyConfig_container input[type="text"], .__MonkeyConfig_container input[type="number"], .__MonkeyConfig_container input[type="color"] { background: #fff !important; }
.__MonkeyConfig_container button:hover { background: #d2d2d2 linear-gradient(180deg, #e2e2e2 0, #d2d2d2 45%, #c2c2c2 50%, #b2b2b2 100%) !important; }
@media (max-width: 500px) {
    .__MonkeyConfig_columns, .__MonkeyConfig_top_columns, .__MonkeyConfig_bottom_columns { flex-direction: column !important; }
    .__MonkeyConfig_left_column, .__MonkeyConfig_right_column, .__MonkeyConfig_left_top, .__MonkeyConfig_right_top, .__MonkeyConfig_left_bottom, .__MonkeyConfig_right_bottom { width: 100% !important; }
    .__MonkeyConfig_container label { animation: scroll-text 10s linear infinite; }
    @keyframes scroll-text { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }}`}};