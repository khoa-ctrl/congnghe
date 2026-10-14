(function () {
  'use strict';

  const N = ARCHIVE_ITEMS.length;
  const GA = Math.PI * (3 - Math.sqrt(5));

  let itemsData = [];
  let assetsLoaded = 0;
  let totalAssets = N + 1; // 21 stills + avatar

  let spin = 0, tilt = -4, camZ = 0;
  let dragX = 0, dragY = 0, velX = 0, velY = 0;
  let focusedIdx = -1, isDragging = false;
  let startX = 0, startY = 0, lastX = 0, lastY = 0;
  let pointerDownCard = null, didMove = false;
  let lastWidth = window.innerWidth, lastHeight = window.innerHeight;

  const body = document.body;
  const stage = document.getElementById('stage');
  const world = document.getElementById('world');
  const orb = document.getElementById('orb');
  const headline = document.getElementById('headline');
  const splash = document.getElementById('splash');
  const bar = document.getElementById('bar');
  const avatar = document.getElementById('avatar');
  const gridRows = document.getElementById('gridRows');
  const gridBtn = document.getElementById('gridBtn');
  const menuBtn = document.getElementById('menuBtn');
  const lit = document.getElementById('lit');
  const litImg = document.getElementById('litImg');
  const litTitle = document.getElementById('litTitle');
  const litWhere = document.getElementById('litWhere');
  const litNote = document.getElementById('litNote');
  const dot = document.getElementById('dot');

  function initData() {
    avatar.onload = checkAssetLoaded;
    avatar.onerror = checkAssetLoaded;

    for (let i = 0; i < N; i++) {
      let item = ARCHIVE_ITEMS[i];
      let url = ARCHIVE_ASSETS.CDN + ARCHIVE_ASSETS.items[i];
      itemsData.push({
        idx: i,
        title: item.title,
        place: item.place,
        note: item.note,
        tall: !!item.tall,
        url: url,
        imgEl: null,
        cardEl: null,
        gridImgEl: null,
        loaded: false
      });
    }
    buildScene();
    preloadImages();
  }

  function checkAssetLoaded() {
    assetsLoaded++;
    let progress = Math.min(1, assetsLoaded / totalAssets);
    if (bar) bar.style.transform = `scaleX(${progress})`;
    if (assetsLoaded >= totalAssets) triggerReady();
  }

  function preloadImages() {
    itemsData.forEach(item => {
      let img = new Image();
      img.onload = () => finishItemLoad(item);
      img.onerror = () => finishItemLoad(item);
      img.src = item.url;
    });
  }

  function finishItemLoad(item) {
    if (!item.loaded) {
      item.loaded = true;
      if (item.imgEl) { item.imgEl.src = item.url; item.imgEl.onload = () => item.imgEl.classList.add('in'); }
      if (item.gridImgEl) { item.gridImgEl.src = item.url; }
      checkAssetLoaded();
    }
  }

  // Dự phòng mở khóa giao diện sau 1.2 giây để tuyệt đối không bao giờ treo màn hình đen
  setTimeout(() => {
    if (!body.classList.contains('revealed')) {
      triggerReady();
    }
  }, 1200);

  function triggerReady() {
    if (splash) {
      splash.classList.add('out');
      setTimeout(() => splash.remove(), 400);
    }
    startReveal();
  }

  function buildScene() {
    orb.innerHTML = '';
    gridRows.innerHTML = '';

    itemsData.forEach((item, i) => {
      let card = document.createElement('div');
      card.className = 'card' + (item.tall ? ' tall' : '');
      card.setAttribute('data-idx', i);

      let fig = document.createElement('figure');
      let img = document.createElement('img');
      img.alt = item.title;
      if (item.loaded) { img.src = item.url; img.onload = () => img.classList.add('in'); }
      fig.appendChild(img);
      card.appendChild(fig);
      orb.appendChild(card);
      item.imgEl = img;
      item.cardEl = card;

      let gItem = document.createElement('figure');
      gItem.className = 'grid-item';
      gItem.setAttribute('data-idx', i);
      let gImg = document.createElement('img');
      gImg.alt = item.title;
      gImg.src = item.loaded ? item.url : '';
      gItem.appendChild(gImg);
      let gCap = document.createElement('figcaption');
      gCap.textContent = item.title;
      gItem.appendChild(gCap);
      gridRows.appendChild(gItem);
      item.gridImgEl = gImg;

      gItem.addEventListener('click', () => openLightbox(i, gImg));
    });
    computeLayout();
  }

  let sphereCoords = [];
  function computeLayout() {
    sphereCoords = [];
    let w = window.innerWidth, h = window.innerHeight;
    let hr = w <= 380 ? 0.38 : w <= 640 ? 0.42 : 0.46;
    let wr = w <= 380 ? 0.48 : w <= 640 ? 0.52 : 0.58;
    let floor = w <= 380 ? 108 : w <= 640 ? 120 : 155;
    let R = Math.max(floor, Math.min(480, h * hr, w * wr));
    let scale = w <= 380 ? 0.44 : w <= 640 ? 0.46 : 0.47;
    let cw = Math.round(Math.max(72, R * scale));

    itemsData.forEach((item, i) => {
      let y = 1 - (i / (N - 1)) * 2;
      let rad = Math.sqrt(Math.max(0, 1 - y * y));
      let theta = i * GA;
      let x = Math.cos(theta) * rad, z = Math.sin(theta) * rad;
      let lat = Math.asin(y) * 180 / Math.PI;
      let lon = Math.atan2(x, z) * 180 / Math.PI;

      sphereCoords.push({ x, y, z, lat, lon });

      let card = item.cardEl;
      if (!card) return;
      let ch = item.tall ? cw * 1.25 : cw / 1.5;
      let mt = item.tall ? cw * -0.625 : -cw / 3;
      let ml = -cw / 2;

      card.style.width = cw + 'px';
      card.style.height = ch + 'px';
      card.style.marginLeft = ml + 'px';
      card.style.marginTop = mt + 'px';
      card.style.transform = `translate3d(${x * R}px, ${-y * R}px, ${z * R}px) rotateY(${lon}deg) rotateX(${lat}deg)`;
    });

    let persp = w <= 380 ? 620 : w <= 640 ? 760 : w <= 900 ? 920 : 1150;
    stage.style.setProperty('--persp', persp + 'px');
    window._R = R; window._persp = persp;
  }

  function startReveal() {
    body.classList.remove('locked');
    document.documentElement.style.overflow = '';
    window.__SAFE_EXECUTE__(() => {
      computeLayout();
      requestAnimationFrame(() => {
        body.classList.add('revealed');
      });
    });
  }

  let lastSy = -999, lastSx = -999, lastCamZ = -999, lastHeadOp = -999;
  function animLoop() {
    requestAnimationFrame(animLoop);
    if (!body.classList.contains('revealed') || body.classList.contains('gridview') || body.classList.contains('lit')) return;

    if (!isDragging) {
      dragX += velX; dragY += velY;
      velX *= 0.94; velY *= 0.94;
      if (Math.abs(velX) < 0.002) velX = 0;
      if (Math.abs(velY) < 0.002) velY = 0;
    }

    let limit = 32;
    let curTilt = tilt + dragY;
    if (curTilt > limit) dragY = limit - tilt;
    if (curTilt < -limit) dragY = -limit - tilt;

    let R = window._R || 300;
    let scrollY = window.scrollY || window.pageYOffset;
    let p = Math.max(0, Math.min(1, scrollY / (window.innerHeight * 0.16)));
    let targetZ = p * Math.min(64, R * 0.12);
    camZ += (targetZ - camZ) * 0.075;

    let sx = tilt + dragY, sy = spin + dragX;
    if (Math.abs(sy - lastSy) > 0.001 || Math.abs(sx - lastSx) > 0.001 || Math.abs(camZ - lastCamZ) > 0.01) {
      world.style.transform = `translateZ(${camZ}px) rotateY(${sy}deg) rotateX(${sx}deg)`;
      let hOp = Math.max(0, 1 - p * 0.55);
      if (Math.abs(hOp - lastHeadOp) > 0.005) { headline.style.opacity = hOp; lastHeadOp = hOp; }
      headline.style.transform = `rotateX(${-sx}deg) rotateY(${-sy}deg) translateZ(${R * 0.62}px)`;

      let radX = sx * Math.PI / 180, radY = sy * Math.PI / 180;
      let cosX = Math.cos(radX), sinX = Math.sin(radX);
      let cosY = Math.cos(radY), sinY = Math.sin(radY);

      for (let i = 0; i < N; i++) {
        let sc = sphereCoords[i];
        if (!sc) continue;
        let x0 = sc.x * R, y0 = -sc.y * R, z0 = sc.z * R;
        let x1 = x0 * cosY + z0 * sinY, y1 = y0, z1 = -x0 * sinY + z0 * cosY;
        let zf = (y1 * sinX + z1 * cosX) / R;
        let base = 0.14 + 0.86 * Math.pow((zf + 1) / 2, 0.85);
        let shade = 1 - Math.min(1, p * 1.6);
        let dim = shade * (1 - base);
        if (focusedIdx === i) dim = 1;

        let card = itemsData[i].cardEl;
        if (card) {
          let dimStr = dim.toFixed(3);
          if (card._lastDim !== dimStr) { card.style.setProperty('--d', dimStr); card._lastDim = dimStr; }
        }
      }
      lastSy = sy; lastSx = sx; lastCamZ = camZ;
    }
  }
  requestAnimationFrame(animLoop);

  stage.addEventListener('pointerdown', e => {
    if (body.classList.contains('lit') || body.classList.contains('gridview')) return;
    let cardEl = e.target.closest('.card');
    pointerDownCard = cardEl ? cardEl : null;
    isDragging = true; didMove = false;
    startX = e.clientX; startY = e.clientY; lastX = e.clientX; lastY = e.clientY;
    velX = 0; velY = 0;
  });

  window.addEventListener('pointermove', e => {
    if (!isDragging) return;
    let dx = e.clientX - lastX, dy = e.clientY - lastY;
    if (Math.hypot(e.clientX - startX, e.clientY - startY) > 6) didMove = true;
    dragX += dx * 0.13; dragY -= dy * 0.13;
    velX = dx * 0.13; velY = -dy * 0.13;
    lastX = e.clientX; lastY = e.clientY;
  });

  window.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    let slop = e.pointerType === 'touch' ? 14 : 6;
    if (!didMove || Math.hypot(e.clientX - startX, e.clientY - startY) <= slop) {
      if (pointerDownCard) {
        let idx = parseInt(pointerDownCard.getAttribute('data-idx'), 10);
        if (!isNaN(idx)) openLightbox(idx, itemsData[idx].imgEl);
      }
    }
    pointerDownCard = null;
  });

  let sourceElForLit = null;
  function openLightbox(idx, sourceImg) {
    let item = itemsData[idx];
    focusedIdx = idx; sourceElForLit = sourceImg;
    litImg.src = item.url;
    litTitle.textContent = item.title;
    litWhere.textContent = item.place;
    litNote.textContent = item.note;
    body.classList.add('lit', 'deep');

    let plate = lit.querySelector('.plate');
    let fromRect = sourceImg.getBoundingClientRect();
    plate.style.transition = 'none'; plate.style.opacity = '0';
    lit.style.display = 'grid';

    requestAnimationFrame(() => {
      let toRect = plate.getBoundingClientRect();
      let dx = fromRect.left - toRect.left + (fromRect.width - toRect.width) / 2;
      let dy = fromRect.top - toRect.top + (fromRect.height - toRect.height) / 2;
      let dw = toRect.width ? fromRect.width / toRect.width : 0.04;
      plate.style.transform = `translate(${dx}px, ${dy}px) scale(${Math.max(0.04, dw)})`;
      void plate.offsetWidth;
      plate.style.transition = ''; plate.style.transform = ''; plate.style.opacity = '1';
    });
  }

  function closeLightbox() {
    if (!body.classList.contains('lit')) return;
    focusedIdx = -1;
    body.classList.remove('lit');
    if (!body.classList.contains('gridview')) body.classList.remove('deep');

    let plate = lit.querySelector('.plate');
    if (sourceElForLit) {
      let fromRect = plate.getBoundingClientRect();
      let toRect = sourceElForLit.getBoundingClientRect();
      let dx = toRect.left - fromRect.left + (toRect.width - fromRect.width) / 2;
      let dy = toRect.top - fromRect.top + (toRect.height - fromRect.height) / 2;
      let dw = fromRect.width ? toRect.width / fromRect.width : 0.04;

      plate.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1), opacity .4s ease';
      plate.style.transform = `translate(${dx}px, ${dy}px) scale(${Math.max(0.04, dw)})`;
      plate.style.opacity = '0';
      setTimeout(() => {
        plate.style.transition = ''; plate.style.transform = ''; plate.style.opacity = '';
        sourceElForLit = null;
      }, 520);
    }
  }

  gridBtn.addEventListener('click', () => { body.classList.toggle('gridview'); body.classList.toggle('deep'); });
  menuBtn.addEventListener('click', () => body.classList.toggle('menu-open'));

  document.querySelectorAll('#menu a[data-grid]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      body.classList.remove('menu-open');
      body.classList.add('gridview', 'deep');
    });
  });

  document.querySelectorAll('#menu a[data-close-menu]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); body.classList.remove('menu-open'); });
  });

  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeLightbox));

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (body.classList.contains('lit')) closeLightbox();
      else if (body.classList.contains('menu-open')) body.classList.remove('menu-open');
      else if (body.classList.contains('gridview')) body.classList.remove('gridview', 'deep');
    }
  });

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, dotX = mouseX, dotY = mouseY;
  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  function cursorLoop() {
    requestAnimationFrame(cursorLoop);
    dotX += (mouseX - dotX) * 0.2; dotY += (mouseY - dotY) * 0.2;
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    let t = document.elementFromPoint(mouseX, mouseY);
    if (t && (t.closest('.card') || t.closest('button') || t.closest('a') || t.closest('.grid-item'))) dot.classList.add('wide');
    else dot.classList.remove('wide');
  }
  requestAnimationFrame(cursorLoop);

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (Math.abs(window.innerWidth - lastWidth) < 20 && Math.abs(window.innerHeight - lastHeight) < 20) return;
    lastWidth = window.innerWidth; lastHeight = window.innerHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(computeLayout, 220);
  });

  initData();
})();
