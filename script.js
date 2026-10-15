const CARD_VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4'
];

const CARD_DETAILS = [
  { code: 'CS-AI-01', name: 'TRÍ TUỆ NHÂN TẠO & ML', skills: 'PYTHON' },
  { code: 'CS-IOT-02', name: 'HỆ THỐNG NHÚNG & IOT', skills: 'C / C++' },
  { code: 'CS-DEV-03', name: 'PHÁT TRIỂN PHẦN MỀM', skills: 'JAVA / C#' },
  { code: 'CS-SEC-04', name: 'AN NINH MẠNG & BẢO MẬT', skills: 'LINUX' },
  { code: 'CS-DATA-05', name: 'KHOA HỌC DỮ LIỆU', skills: 'SQL / R' },
];

const cardCount = 5;
const viewport3D = document.getElementById('viewport3D');
const cardsElements = [];

let progress = 0;
let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let cardW = 336;
let cardH = 211;

function updateMetrics() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let cw = Math.round(w * 0.16 + 130);
  const heightFactor = Math.min(1.0, Math.max(0.65, h / 850));
  cw = Math.round(cw * heightFactor);
  cardW = Math.min(336, Math.max(150, cw));
  cardH = Math.round(cardW / 1.5925);

  viewport3D.style.width = `${cardW}px`;
  viewport3D.style.height = `${cardH}px`;
}

function initCards() {
  updateMetrics();
  viewport3D.innerHTML = '';

  for (let i = 0; i < cardCount; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.style.width = `${cardW}px`;
    wrapper.style.height = `${cardH}px`;

    const videoSrc = CARD_VIDEOS[i % CARD_VIDEOS.length];
    const details = CARD_DETAILS[i % CARD_DETAILS.length];

    const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

    thicknessLayers.forEach((zOffset, layerIdx) => {
      const isFront = layerIdx === thicknessLayers.length - 1;
      const isBack = layerIdx === 0;

      if (!isFront && !isBack) {
        const midLayer = document.createElement('div');
        midLayer.className = 'card-layer card-middle';
        midLayer.style.transform = `translateZ(${zOffset}px)`;
        wrapper.appendChild(midLayer);
        return;
      }

      if (isFront) {
        const frontLayer = document.createElement('div');
        frontLayer.className = 'card-layer card-front';
        frontLayer.style.transform = `translateZ(${zOffset}px)`;
        
        frontLayer.innerHTML = `
          <video src="${videoSrc}" autoplay loop muted playsinline class="card-video"></video>
          <div class="card-content-front">
            <div style="display:flex; justify-content:flex-end;">
              <span style="font-family:monospace; font-size:11px; font-weight:bold; color:#67e8f9; background:rgba(0,0,0,0.7); padding:2px 8px; border-radius:4px; border:1px solid rgba(103,232,249,0.4);">${details.code}</span>
            </div>
            <div>
              <div style="width:28px; height:28px; background:linear-gradient(135deg, #fff, #999); border-radius:4px; margin-bottom:8px; display:flex; align-items:center; justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 60 60" fill="none"><path d="M20 8H40V14C40.0016 14.5299 40.2128 15.0377 40.5875 15.4125C40.9623 15.7872 41.4701 15.9984 42 16H59V24H42C41.4701 24.0016 40.9623 24.2128 40.5875 24.5875C40.2128 24.9623 40.0016 25.4701 40 26V52H20V8Z" fill="#333"/></svg>
              </div>
              <span style="font-family:serif; font-size:13px; font-weight:bold; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.8);">${details.name}</span>
            </div>
          </div>
        `;
        wrapper.appendChild(frontLayer);
      }

      if (isBack) {
        const backLayer = document.createElement('div');
        backLayer.className = 'card-layer card-back';
        backLayer.style.transform = `translateZ(${zOffset}px) rotateX(180deg)`;

        backLayer.innerHTML = `
          <div class="card-back-video-wrap">
            <video src="${videoSrc}" autoplay loop muted playsinline class="card-video"></video>
          </div>
          <div class="magnetic-stripe"></div>
          <div class="card-content-back">
            <div style="font-size:12px; font-weight:bold; color:#67e8f9; margin-bottom:2px;">${details.code}</div>
            <div style="font-size:9px; color:rgba(255,255,255,0.8); display:flex; gap:8px;">
              <span>${details.name}</span>
              <span>•</span>
              <span style="color:#38bdf8;">SKILLS: ${details.skills}</span>
            </div>
          </div>
        `;
        wrapper.appendChild(backLayer);
      }
    });

    viewport3D.appendChild(wrapper);
    cardsElements.push(wrapper);
  }
}

window.addEventListener('mousemove', (e) => {
  const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  mouse.targetX = Math.max(-1, Math.min(1, rx));
  mouse.targetY = Math.max(-1, Math.min(1, ry));
});

window.addEventListener('mouseleave', () => {
  mouse.targetX = 0;
  mouse.targetY = 0;
});

window.addEventListener('resize', () => {
  updateMetrics();
});

function renderLoop() {
  progress += 0.0016;
  mouse.x += (mouse.targetX - mouse.x) * 0.08;
  mouse.y += (mouse.targetY - mouse.y) * 0.08;

  const h = window.innerHeight;
  const roundedIndex = Math.round(progress);
  const diffFromRound = progress - roundedIndex;
  const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
  const virtualActiveIndex = roundedIndex + easedDiff;

  for (let i = 0; i < cardCount; i++) {
    const card = cardsElements[i];
    if (!card) continue;

    let offset = i - virtualActiveIndex;
    const halfCount = cardCount / 2;
    while (offset > halfCount) offset -= cardCount;
    while (offset < -halfCount) offset += cardCount;

    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);

    if (absOffset > 3.0) {
      card.style.visibility = 'hidden';
      continue;
    } else {
      card.style.visibility = 'visible';
    }

    const gap = 36;
    const peekAmount = -55;
    const D = 1350;
    let y = 0;
    let z = 0;
    let rot = 0;

    if (absOffset <= 1) {
      const t = absOffset;
      const easedT = t * t * (3 - 2 * t);
      const targetY = cardH + gap;
      y = -sign * (easedT * targetY);
      z = 400 + easedT * (220 - 400);
      rot = easedT * 132;
    } else if (absOffset <= 2) {
      const t = absOffset - 1;
      const easedT = t * t * (3 - 2 * t);
      const yStart = cardH + gap;
      const zStart = 220;
      const rotStart = 132;
      const zEnd = -60;
      const rotEnd = 175;
      const sEnd = D / (D - zEnd);
      const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);
      y = -sign * (yStart + easedT * (yEnd - yStart));
      z = zStart + easedT * (zEnd - zStart);
      rot = rotStart + easedT * (rotEnd - rotStart);
    } else {
      const t = Math.min(absOffset - 2, 1);
      const easedT = t * t * (3 - 2 * t);
      const zStart = -60;
      const rotStart = 175;
      const zEnd3 = -250;
      const rotEnd3 = 195;
      const sEnd2 = D / (D - zStart);
      const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);
      const sEnd3 = D / (D - zEnd3);
      const yEnd3 = (h / 2 + 100) / sEnd3 + (cardH / 2);
      y = -sign * (yEnd2 + easedT * (yEnd3 - yEnd2));
      z = zStart + easedT * (zEnd3 - zStart);
      rot = rotStart + easedT * (rotEnd3 - rotStart);
    }

    const localCardRotation = -sign * rot;
    const centerFactor = Math.max(0, 1 - absOffset);
    const activeTiltX = -mouse.y * 12 * centerFactor;
    const activeTiltY = mouse.x * 15 * centerFactor;
    const totalRotX = localCardRotation + activeTiltX;
    const totalRotY = activeTiltY;

    card.style.zIndex = Math.round(z).toString();
    card.style.transform = `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
  }

  requestAnimationFrame(renderLoop);
}

window.addEventListener('DOMContentLoaded', () => {
  initCards();
  requestAnimationFrame(renderLoop);
});