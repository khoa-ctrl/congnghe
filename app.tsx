import React, { useState, useEffect, useRef } from 'react';

// Danh sách video nền công nghệ trực quan cho từng chuyên ngành Khoa học máy tính
const CS_CAREER_VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4', // AI & Machine Learning
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4', // Hệ thống Nhúng & IoT
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4', // Phát triển Phần mềm
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4', // An ninh Mạng
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4', // Khoa học Dữ liệu
];

// Dữ liệu chuyên sâu giúp học sinh nắm khái niệm, đối chiếu năng lực và định hướng cải thiện
const CS_CAREER_DETAILS = [
  { 
    code: 'CS-AI-01', 
    title: 'TRÍ TUỆ NHÂN Tạo (AI & MACHINE LEARNING)', 
    concept: 'Nghiên cứu cách máy tính học từ dữ liệu để thực hiện các tác vụ thông minh giống con người như nhận diện hình ảnh, xử lý ngôn ngữ và dự đoán xu hướng.',
    skills: 'Toán cao cấp, Xác suất thống kê, Python, PyTorch/TensorFlow.',
    aptitude: 'Phù hợp với học sinh thích tư duy logic trừu tượng, yêu thích toán học và mô hình hóa.',
    improvement: 'Cần chủ động rèn luyện tư duy xác suất, tự học lập trình Python và tìm hiểu các mô hình mạng neural cơ bản từ phổ thông.'
  },
  { 
    code: 'CS-IOT-02', 
    title: 'HỆ THỐNG NHÚNG & IOT (VI ĐIỀU KHIỂN)', 
    concept: 'Kết hợp giữa phần cứng (mạch điện tử, cảm biến, vi điều khiển như ESP32) và phần mềm để điều khiển các thiết bị thông minh, drone và robot tự hành.',
    skills: 'C/C++, Lập trình vi điều khiển, Điện tử cơ bản, Giao thức truyền thông.',
    aptitude: 'Phù hợp với học sinh thích mày mò thực tế, lắp ráp thiết bị, yêu thích robot và các hệ thống điều khiển vật lý.',
    improvement: 'Nên bắt đầu làm quen với các kit thực hành nhỏ, tìm hiểu cách đọc giản đồ mạch và rèn luyện kỹ năng lập trình C cơ bản.'
  },
  { 
    code: 'CS-DEV-03', 
    title: 'PHÁT TRIỂN PHẦN MỀM & ỨNG DỤNG', 
    concept: 'Quy trình thiết kế, xây dựng, kiểm thử và vận hành các phần mềm, ứng dụng di động hoặc nền tảng web phục vụ hàng triệu người dùng.',
    skills: 'C#, Java, JavaScript/TypeScript, Cấu trúc dữ liệu & Giải thuật, Git.',
    aptitude: 'Phù hợp với học sinh tỉ mỉ, thích sáng tạo sản phẩm công nghệ có tính ứng dụng trực tiếp vào đời sống.',
    improvement: 'Cần tập trung nắm vững nền tảng cấu trúc dữ liệu, rèn thói quen viết mã sạch và tham gia các dự án lập trình nhỏ.'
  },
  { 
    code: 'CS-SEC-04', 
    title: 'AN NINH MẠNG & BẢO MẬT HỆ THỐNG', 
    concept: 'Bảo vệ các hệ thống thông tin, mạng lưới và dữ liệu trước các cuộc tấn công mạng, mã độc và lỗ hổng bảo mật hiểm nghèo.',
    skills: 'Giao thức TCP/IP, Mật mã học, Hệ điều hành Linux, Phòng thủ mạng.',
    aptitude: 'Phù hợp với học sinh có tính cẩn trọng cao, tò mò về cơ chế hoạt động bên trong của hệ thống và thích giải mã.',
    improvement: 'Cần tìm hiểu sâu về cách thức hoạt động của mạng máy tính, rèn luyện kỹ năng sử dụng Linux và tư duy phản biện.'
  },
  { 
    code: 'CS-DATA-05', 
    title: 'KHOA HỌC DỮ LIỆU & BIG DATA', 
    concept: 'Thu thập, xử lý, phân tích và trực quan hóa các tập dữ liệu khổng lồ nhằm tìm ra các quy luật ẩn giúp doanh nghiệp ra quyết định chiến lược.',
    skills: 'SQL, Python/R, Thống kê ứng dụng, Công cụ trực quan hóa (PowerBI/Tableau).',
    aptitude: 'Phù hợp với học sinh yêu thích con số, có khả năng kể chuyện bằng biểu đồ và tư duy phân tích sắc bén.',
    improvement: 'Nên củng cố kỹ năng truy vấn cơ sở dữ liệu SQL, luyện tập phân tích các tập dữ liệu thực tế công khai trên internet.'
  },
];

export default function App() {
  const cardCount = 5;
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef<number>(0);
  
  const progress = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  const [metrics, setMetrics] = useState({
    cardW: 320,
    cardH: 200,
  });

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };
    const handleMouseLeave = () => {
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      let cardW = Math.round(w * 0.15 + 110);
      const heightFactor = Math.min(1.0, Math.max(0.6, h / 850));
      cardW = Math.round(cardW * heightFactor);
      cardW = Math.min(300, Math.max(140, cardW));
      const cardH = Math.round(cardW / 1.5925);
      setMetrics({ cardW, cardH });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLoop = () => {
    progress.current += 0.0014; 
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;
    
    const currentProgress = progress.current;
    const currentIdx = Math.round(currentProgress) % cardCount;
    setActiveCardIndex(Math.abs(currentIdx));

    const cards = cardsRefs.current;
    const h = window.innerHeight;
    const { cardH } = metrics;
    const roundedIndex = Math.round(currentProgress);
    const diffFromRound = currentProgress - roundedIndex;
    
    const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
    const virtualActiveIndex = roundedIndex + easedDiff;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
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

      const gap = 32;
      const peekAmount = -45;
      const D = 1350;
      let y = 0;
      let z = 0;
      let rot = 0;

      if (absOffset <= 1) {
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);
        const targetY = cardH + gap;
        y = -sign * (easedT * targetY);
        z = 380 + easedT * (200 - 380);
        rot = easedT * 125;
      } else if (absOffset <= 2) {
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);
        const yStart = cardH + gap;
        const zStart = 200;
        const rotStart = 125;
        const zEnd = -50;
        const rotEnd = 165;
        const sEnd = D / (D - zEnd);
        const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);
        const currentY = yStart + easedT * (yEnd - yStart);
        y = -sign * currentY;
        z = zStart + easedT * (zEnd - zStart);
        rot = rotStart + easedT * (rotEnd - rotStart);
      } else {
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);
        const zStart = -50;
        const rotStart = 165;
        const zEnd3 = -220;
        const rotEnd3 = 185;
        const sEnd2 = D / (D - zStart);
        const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);
        const sEnd3 = D / (D - zEnd3);
        const yEnd3 = (h / 2 + 80) / sEnd3 + (cardH / 2);
        const currentY = yEnd2 + easedT * (yEnd3 - yEnd2);
        y = -sign * currentY;
        z = zStart + easedT * (zEnd3 - zStart);
        rot = rotStart + easedT * (rotEnd3 - rotStart);
      }

      const localCardRotation = -sign * rot;
      const centerFactor = Math.max(0, 1 - absOffset);
      const maxTiltY = 12;
      const maxTiltX = 10;
      const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
      const activeTiltY = mouse.current.x * maxTiltY * centerFactor;
      const totalRotX = localCardRotation + activeTiltX;
      const totalRotY = activeTiltY;

      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = '1';
      card.style.transform = `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-2deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };
    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  const thicknessLayers = [-1.2, -0.6, 0, 0.6, 1.2];
  const activeCareer = CS_CAREER_DETAILS[activeCardIndex];

  return (
    <div className="absolute inset-0 bg-[#020617] text-white flex flex-col lg:flex-row items-center justify-between overflow-hidden select-none p-4 sm:p-8">
      
      {/* VÙNG BÊN TRÁI: Khối Carousel 3D trực quan */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center pointer-events-none">
        
        {/* Tiêu đề góc trên */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none w-full">
          <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 font-mono bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Khám Phá Chuyên Ngành 3D
          </span>
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ perspective: '1350px' }}
        >
          <div
            className="absolute"
            style={{
              width: `${metrics.cardW}px`,
              height: `${metrics.cardH}px`,
              transformStyle: 'preserve-3d',
            }}
          >
            {Array.from({ length: cardCount }).map((_, i) => (
              <div
                key={i}
                ref={(el) => { cardsRefs.current[i] = el; }}
                className="absolute inset-0"
                style={{
                  width: `${metrics.cardW}px`,
                  height: `${metrics.cardH}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                }}
              >
                {thicknessLayers.map((zOffset, layerIdx) => {
                  const isFrontFace = layerIdx === thicknessLayers.length - 1;
                  const isBackFace = layerIdx === 0;
                  const videoSrc = CS_CAREER_VIDEOS[i % CS_CAREER_VIDEOS.length];
                  const career = CS_CAREER_DETAILS[i % CS_CAREER_DETAILS.length];
                  const baseBgColor = '#0f172a';

                  if (!isFrontFace && !isBackFace) {
                    return (
                      <div
                        key={layerIdx}
                        className="absolute inset-0 rounded-[14px] border border-slate-700 pointer-events-none overflow-hidden"
                        style={{
                          backgroundColor: '#334155',
                          transform: `translateZ(${zOffset}px)`,
                        }}
                      />
                    );
                  }

                  // Mặt trước thẻ 3D
                  if (isFrontFace) {
                    return (
                      <div
                        key={layerIdx}
                        className="absolute inset-0 rounded-[14px] border border-cyan-500/30 pointer-events-none overflow-hidden shadow-2xl shadow-cyan-950"
                        style={{
                          backgroundColor: baseBgColor,
                          transform: `translateZ(${zOffset}px)`,
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover rounded-[14px] opacity-75"
                        />
                        <div className="absolute inset-0 p-4 text-white h-full w-full font-sans z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-[10px] text-cyan-300 bg-black/70 px-2 py-0.5 rounded border border-cyan-500/40">
                              {career.code}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-serif text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
                              {career.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Mặt sau thẻ 3D
                  if (isBackFace) {
                    return (
                      <div
                        key={layerIdx}
                        className="absolute inset-0 rounded-[14px] border border-slate-600 pointer-events-none overflow-hidden"
                        style={{
                          backgroundColor: baseBgColor,
                          transform: `translateZ(${zOffset}px) rotateX(180deg)`,
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ filter: 'blur(12px)' }}>
                          <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute left-0 right-0 top-3 h-5 bg-black/90 z-10" />
                        <div 
                          className="absolute left-3 right-3 bottom-3 z-20 flex flex-col gap-1 text-left bg-slate-900/90 p-2.5 rounded border border-cyan-500/30 text-[10px]"
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                        >
                          <span className="text-cyan-300 font-bold">{career.code}</span>
                          <span className="text-white/90 line-clamp-3">Khám phá chi tiết chuyên ngành ở bảng điều khiển bên phải.</span>
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VÙNG BÊN PHẢI: Bảng thông tin chi tiết, khái niệm, đối chiếu năng lực & định hướng cải thiện */}
      <div className="w-full lg:w-1/2 h-[45vh] lg:h-full flex flex-col justify-center lg:pl-8 z-20 overflow-y-auto">
        <div className="bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/40">
              {activeCareer.code}
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              Định Hướng Nghề Nghiệp Khoa Học Máy Tính
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 font-serif">
            {activeCareer.title}
          </h2>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
            <div>
              <h5 className="text-cyan-300 font-semibold mb-1 text-xs uppercase tracking-wider font-mono">1. Khái Niệm & Bản Chất:</h5>
              <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-slate-200">
                {activeCareer.concept}
              </p>
            </div>

            <div>
              <h5 className="text-cyan-300 font-semibold mb-1 text-xs uppercase tracking-wider font-mono">2. Kỹ Năng & Yêu Cầu Chuyên Môn:</h5>
              <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-slate-200">
                {activeCareer.skills}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-mono text-xs block mb-1 font-semibold">Tự Đối Chiếu Năng Lực:</span>
                <p className="text-xs text-slate-300">{activeCareer.aptitude}</p>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-mono text-xs block mb-1 font-semibold">Cần Cải Thiện Gì?</span>
                <p className="text-xs text-slate-300">{activeCareer.improvement}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>Xoay vòng thẻ để xem các chuyên ngành khác</span>
            <span className="text-cyan-400 font-bold">{activeCardIndex + 1} / {cardCount}</span>
          </div>

        </div>
      </div>

    </div>
  );
}
