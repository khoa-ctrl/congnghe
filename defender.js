(function () {
  'use strict';
  let mutationCount = 0;
  let lastTime = Date.now();

  const observer = new MutationObserver((mutations) => {
    let now = Date.now();
    if (now - lastTime > 1000) { mutationCount = 0; lastTime = now; }
    mutationCount += mutations.length;
    if (mutationCount > 200) {
      console.warn('[DEFENDER] Tần suất thay đổi DOM cao, có thể xảy ra xung đột vòng lặp.');
    }

    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeName === 'SCRIPT') {
          let src = node.src || '';
          if (!src.includes('main.js') && !src.includes('background.js') && !src.includes('data.js') && !src.includes('defender.js') && src !== '') {
            console.error('[DEFENDER] Phát hiện script không hợp lệ. Đã vô hiệu hóa để bảo vệ.');
            node.remove();
          }
        }
      });
    });
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    });
  }

  window.__SAFE_EXECUTE__ = function(fn, fallback) {
    try {
      if (typeof fn === 'function') return fn();
    } catch (e) {
      console.error('[DEFENDER] Ngoại lệ thực thi:', e);
      if (typeof fallback === 'function') return fallback(e);
    }
  };
})();
