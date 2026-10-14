const ARCHIVE_ITEMS = [
  {
    id: "hist_01_ada_lovelace",
    title: "1. Khai Sáu Nền Tảng: Ada Lovelace (1843)",
    place: "Lịch sử nền tảng · Thuật toán máy tính đầu tiên",
    note: "• Sự kiện: Ada Lovelace viết thuật toán đầu tiên cho máy phân tích của Charles Babbage.\n• Ý nghĩa: Đặt nền móng cho khái niệm lập trình và vai trò của nhà khoa học máy tính.\n• Số liệu: 1 thuật toán tính số Bernoulli đầu tiên trên lý thuyết cơ khí.\n• Kiểm chứng: Tài liệu lưu trữ lịch sử Khoa học Hoàng gia Anh (Royal Society)."
  },
  {
    id: "hist_02_alan_turing",
    title: "2. Kỷ Nguyên Tính Toán: Máy Turing (1936)",
    place: "Lý thuyết cơ sở · Mô hình tính toán vạn năng",
    note: "• Sự kiện: Alan Turing công bố bài báo định hình máy Turing và giải quyết bài toán quyết định (Entscheidungsproblem).\n• Dữ liệu thực tế: Khái niệm cốt lõi cho mọi kiến trúc máy tính hiện đại (CPU, RAM).\n• Kiểm chứng: Proceedings of the London Mathematical Society."
  },
  {
    id: "hist_03_eniac_1946",
    title: "3. Phần Cứng Đầu Tiên: Máy ENIAC (1946)",
    place: "Đột phá phần cứng · Máy tính điện tử số đa năng",
    note: "• Sự kiện: ENIAC ra mắt tại Đại học Pennsylvania, thực hiện 5.000 phép tính/giây.\n• Thông số thực: Nặng 27 tấn, chiếm diện tích 167 m², tiêu thụ 150 kW điện năng.\n• Kiểm chứng: IEEE Computer Society Milestones."
  },
  {
    id: "hist_04_shannon_information",
    title: "4. Lý Thuyết Thông Tin: Claude Shannon (1948)",
    place: "Khoa học thông tin · Đơn vị đo lường Bit",
    note: "• Sự kiện: Đặt nền móng cho toán học truyền thông và mã hóa nhị phân (Binary Code).\n• Tác động: Cho phép các nhà khoa học máy tính định lượng hóa dữ liệu.\n• Kiểm chứng: Bell System Technical Journal."
  },
  {
    id: "hist_05_von_neumann",
    title: "5. Kiến Trúc Von Neumann (1945 - 1952)",
    place: "Kiến trúc hệ thống · Lưu trữ chương trình",
    note: "• Sự kiện: Chuẩn hóa mô hình CPU, bộ nhớ chính, thiết bị nhập/xuất.\n• Tác động: 99% máy tính và bộ vi xử lý hiện đại (như kiến trúc ARM, x86) vẫn tuân theo mô hình này.\n• Kiểm chứng: IAS Computer Project Reports."
  },
  {
    id: "hist_06_fortran_1957",
    title: "6. Ngôn Ngữ Lập Trình Cấp Cao: Fortran (1957)",
    place: "Phát triển phần mềm · IBM & John Backus",
    note: "• Sự kiện: Ra mắt ngôn ngữ lập trình cấp cao thương mại đầu tiên.\n• Ý nghĩa: Giúp lập trình viên viết mã bằng ký hiệu toán học thay vì mã máy thủ công.\n• Kiểm chứng: ACM History of Programming Languages."
  },
  {
    id: "hist_07_arpanet_1969",
    title: "7. Mạng Lưới Toàn Cầu: ARPANET (1969)",
    place: "Hệ thống phân tán · Tiền thân Internet",
    note: "• Sự kiện: Kết nối thành công 4 node mạng đầu tiên giữa các trường đại học Mỹ.\n• Số liệu thực tế: Gói tin dữ liệu đầu tiên gửi đi mang từ 'LO' (ý định gõ 'LOGIN').\n• Kiểm chứng: DARPA Historical Archives."
  },
  {
    id: "hist_08_unix_c_1972",
    title: "8. Hệ Điều Hành UNIX & Ngôn Ngữ C (1972)",
    place: "Phòng thí nghiệm Bell · Dennis Ritchie & Ken Thompson",
    note: "• Sự kiện: Phát minh hệ điều hành UNIX và ngôn ngữ C tại Bell Labs.\n• Tác động: Nền tảng trực tiếp sinh ra Linux, Windows, macOS và iOS.\n• Kiểm chứng: Communications of the ACM."
  },
  {
    id: "hist_09_tcp_ip_1983",
    title: "9. Giao Thức Mạng TCP/IP (1983)",
    place: "Hạ tầng mạng · Chuẩn hóa Internet toàn cầu",
    note: "• Sự kiện: ARPANET chuyển đổi hoàn toàn sang bộ giao thức TCP/IP do Vint Cerf và Bob Kahn phát triển.\n• Kiểm chứng: Internet RFC Standards."
  },
  {
    id: "hist_10_world_wide_web_1989",
    title: "10. World Wide Web: Tim Berners-Lee (1989)",
    place: "CERN · Hệ thống siêu văn bản công khai",
    note: "• Sự kiện: Tim Berners-Lee phát minh ra HTML, HTTP và trình duyệt đầu tiên tại CERN.\n• Số liệu: Từ 1 trang web duy nhất năm 1991 lên tới hơn 1,1 tỷ trang web hoạt động.\n• Kiểm chứng: CERN Document Server."
  },
  {
    id: "hist_11_deep_blue_1997",
    title: "11. Trí Tuệ Nhân Tạo: Deep Blue hạ gục Vua Cờ (1997)",
    place: "IBM Research · Bước ngoặt AI đầu tiên",
    note: "• Sự kiện: Siêu máy tính Deep Blue đánh bại nhà vô địch cờ vua thế giới Garry Kasparov.\n• Số liệu: Khả năng tính toán 200 triệu vị thế cờ mỗi giây.\n• Kiểm chứng: ACM Journal on Computing."
  },
  {
    id: "hist_12_linux_open_source",
    title: "12. Phong Trào Mã Nguồn Mở & Linux (1991 - 2000s)",
    place: "Hợp tác toàn cầu · Linus Torvalds",
    note: "• Sự kiện: Xây dựng hệ điều hành mã nguồn mở phục vụ cộng đồng khoa học toàn cầu.\n• Số liệu: Hơn 96% top 1 triệu máy chủ web thế giới và toàn bộ siêu máy tính TOP500 chạy Linux.\n• Kiểm chứng: TOP500 Supercomputing Statistics."
  },
  {
    id: "hist_13_smartphone_revolution",
    title: "13. Kỷ Nguyên Di Động & Điện Toán Đám Mây (2007 - 2010)",
    place: "Di động hóa · iOS, Android & Cloud Computing",
    note: "• Sự kiện: Bùng nổ điện thoại thông minh và các dịch vụ đám mây quy mô lớn (AWS, Azure).\n• Số liệu: Hơn 6,8 tỷ thiết bị di động kết nối toàn cầu.\n• Kiểm chứng: IEEE Spectrum & ITU Statistics."
  },
  {
    id: "hist_14_alexnet_deep_learning",
    title: "14. Cuộc Cách Mạng Deep Learning: AlexNet (2012)",
    place: "Học sâu · Thị giác máy tính",
    note: "• Sự kiện: Mạng neural tích chập AlexNet chiến thắng áp đảo tại cuộc thi ImageNet.\n• Tác động: Khơi nguồn cho làn sóng phát triển AI hiện đại ngày nay.\n• Kiểm chứng: Neural Information Processing Systems (NeurIPS)."
  },
  {
    id: "hist_15_alphago_2016",
    title: "15. AlphaGo và Học Tăng Cường (2016)",
    place: "DeepMind · Trí tuệ nhân tạo siêu việt",
    note: "• Sự kiện: AlphaGo đánh bại kỳ thủ vô địch cờ vây thế giới Lee Sedol.\n• Ý nghĩa: Chứng minh AI có thể tự học hỏi và sáng tạo nước đi vượt quá giới hạn tri thức nhân loại.\n• Kiểm chứng: Tạp chí khoa học Nature."
  },
  {
    id: "hist_16_quantum_supremacy",
    title: "16. Ưu Thế Lượng Tử: Google Sycamore (2019)",
    place: "Điện toán lượng tử · Xử lý siêu tốc",
    note: "• Sự kiện: Bộ xử lý lượng tử hoàn thành tác vụ trong 200 giây mà siêu máy tính cổ điển mất 10.000 năm.\n• Kiểm chứng: Tạp chí khoa học Nature Vol 574."
  },
  {
    id: "hist_17_alphafold_biology",
    title: "17. AI Giải Mã Sinh Học: AlphaFold (2020 - 2024)",
    place: "Tin sinh học · Dự đoán cấu trúc Protein",
    note: "• Sự kiện: AlphaFold dự đoán cấu trúc của gần như toàn bộ protein đã biết trong cơ thể sống.\n• Tác động: Rút ngắn hàng thập kỷ nghiên cứu y học và phát triển dược phẩm.\n• Kiểm chứng: Nobel Prize in Chemistry & Science Magazine."
  },
  {
    id: "hist_18_generative_ai_era",
    title: "18. Kỷ Nguyên AI Tạo Sinh & LLM (2022 - Hiện tại)",
    place: "Mô hình ngôn ngữ lớn · Tự động hóa tri thức",
    note: "• Sự kiện: Sự bùng nổ của các hệ thống AI tạo sinh (Transformers, LLMs) thay đổi cách con người làm việc và lập trình.\n• Dữ liệu: Nhu cầu nhân lực Khoa học máy tính tăng trưởng 25%/năm theo Bộ Lao động Mỹ.\n• Kiểm chứng: US Bureau of Labor Statistics (BLS)."
  },
  {
    id: "hist_19_edge_ai_iot",
    title: "19. Hệ Thống Nhúng Thông Minh & AI Biên (2026)",
    place: "Phần cứng thông minh · Vi điều khiển năng lượng thấp",
    note: "• Sự kiện: Tích hợp trí tuệ nhân tạo trực tiếp lên các vi điều khiển nhỏ gọn (như ESP32) và thiết bị tự hành.\n• Ứng dụng: Xe tự hành, drone quay phim điện ảnh, hệ thống sonar quân sự.\n• Kiểm chứng: IEEE Transactions on Industrial Informatics."
  },
  {
    id: "hist_20_ethics_cyber_security",
    title: "20. Đạo Đức Công Nghệ & An Ninh Mạng Toàn Cầu",
    place: "Bảo mật thông tin · Quy chuẩn pháp lý AI",
    note: "• Thách thức: Đảm bảo quyền riêng tư dữ liệu, chống tấn công mạng quy mô lớn và kiểm soát an toàn AI.\n• Tiêu chuẩn: ISO/IEC 27001 và Đạo luật AI Châu Âu (EU AI Act).\n• Kiểm chứng: World Economic Forum Tech Report."
  },
  {
    id: "hist_21_future_research_scientist",
    title: "21. Tương Lai: Nhà Khoa Học Máy Tính Thế Hệ Mới",
    place: "Đỉnh cao khoa học · Khám phá giới hạn vũ trụ số",
    note: "• Vai trò: Định hình tương lai nhân loại qua thuật toán, mật mã lượng tử, công nghệ sinh học tính toán và khám phá không gian.",
    tall: true
  }
];

const ARCHIVE_ASSETS = {
  CDN: "https://upload.wikimedia.org/wikipedia/commons/",
  avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/640px-Ada_Lovelace_portrait.jpg",
  items: [
    "thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg",
    "thumb/a/a6/Alan_Turing_Aged_16.jpg/800px-Alan_Turing_Aged_16.jpg",
    "thumb/5/5b/ENIAC_Real_1946.jpg/800px-ENIAC_Real_1946.jpg",
    "thumb/0/07/IBM_704_Fortran.jpg/800px-IBM_704_Fortran.jpg",
    "thumb/e/ec/John_von_Nouns_Los_Alamos.jpg/800px-John_von_Nouns_Los_Alamos.jpg",
    "thumb/0/0c/Software_Engineering_Code.jpg/800px-Software_Engineering_Code.jpg",
    "thumb/e/e5/Arpanet_logical_map,_March_1977.png/800px-Arpanet_logical_map,_March_1977.png",
    "thumb/b/b3/Ken_Thompson_and_Dennis_Ritchie.jpg/800px-Ken_Thompson_and_Dennis_Ritchie.jpg",
    "thumb/5/52/IBM_Quantum_System_One.jpg/800px-IBM_Quantum_System_One.jpg",
    "thumb/f/f9/Tim_Berners-Lee_2009.jpg/800px-Tim_Berners-Lee_2009.jpg",
    "thumb/d/d4/Kasparov_and_Deep_Blue_1997.jpg/800px-Kasparov_and_Deep_Blue_1997.jpg",
    "thumb/8/8f/IBM_PC_5150.jpg/800px-IBM_PC_5150.jpg",
    "thumb/e/e2/Intel_4004_chip.jpg/800px-Intel_4004_chip.jpg",
    "thumb/f/f2/AlexNet_architecture.png/800px-AlexNet_architecture.png",
    "thumb/6/6f/Lee_Sedol_and_AlphaGo_2016.jpg/800px-Lee_Sedol_and_AlphaGo_2016.jpg",
    "thumb/5/52/IBM_Quantum_System_One.jpg/800px-IBM_Quantum_System_One.jpg",
    "thumb/e/ef/AlphaFold_Predicted_Structure.jpg/800px-AlphaFold_Predicted_Structure.jpg",
    "thumb/8/8c/OpenAI_logo.svg/800px-OpenAI_logo.svg.png",
    "thumb/e/ed/Microcontroller_XIAO.jpg/800px-Microcontroller_XIAO.jpg",
    "thumb/3/3f/Agile_Manifesto_Signers.jpg/800px-Agile_Manifesto_Signers.jpg",
    "thumb/5/51/Transistor,_first.jpg/800px-Transistor,_first.jpg"
  ]
};
