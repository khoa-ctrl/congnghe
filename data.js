const ARCHIVE_ITEMS = [
  {
    id: "hist_01_ada_lovelace",
    title: "1. Khai Sơ Nền Tảng: Ada Lovelace (1843)",
    place: "Lịch sử nền tảng · Thuật toán máy tính đầu tiên",
    note: "• Sự kiện: Ada Lovelace viết thuật toán đầu tiên cho máy phân tích cơ khí của Charles Babbage.\n• Ý nghĩa: Đặt nền móng triết học và kỹ thuật cho lập trình hiện đại.\n• Số liệu: 1 thuật toán tính số Bernoulli trên bản thảo G.\n• Kiểm chứng: Tài liệu lưu trữ Khoa học Hoàng gia Anh (Royal Society)."
  },
  {
    id: "hist_02_alan_turing",
    title: "2. Lý Thuyết Tính Toán: Máy Turing (1936)",
    place: "Mô hình vạn năng · Nền tảng Khoa học Máy tính",
    note: "• Sự kiện: Alan Turing công bố khái niệm máy Turing vạn năng giải quyết bài toán quyết định.\n• Ý nghĩa: Định nghĩa giới hạn toán học của mọi thuật toán và máy tính điện tử sau này.\n• Kiểm chứng: Proceedings of the London Mathematical Society."
  },
  {
    id: "hist_03_eniac_1946",
    title: "3. Phần Cứng Tiên Phong: Máy ENIAC (1946)",
    place: "Đột phá phần cứng · Máy tính điện tử số đa năng",
    note: "• Sự kiện: ENIAC ra mắt tại Đại học Pennsylvania, thực hiện 5.000 phép tính/giây.\n• Thông số thực: Nặng 27 tấn, gồm 17.468 đèn điện tử chân không, tiêu thụ 150 kW.\n• Kiểm chứng: IEEE Computer Society Milestones."
  },
  {
    id: "hist_04_shannon_information",
    title: "4. Lý Thuyết Thông Tin: Claude Shannon (1948)",
    place: "Khoa học thông tin · Đơn vị Bit & Mã hóa",
    note: "• Sự kiện: Đặt nền móng toán học cho lý thuyết truyền thông và đại số Boolean.\n• Ý nghĩa: Cho phép biểu diễn mọi dữ liệu dưới dạng chuỗi nhị phân (0 và 1).\n• Kiểm chứng: Bell System Technical Journal."
  },
  {
    id: "hist_05_von_neumann",
    title: "5. Kiến Trúc Von Neumann (1945 - 1952)",
    place: "Kiến trúc hệ thống · Lưu trữ chương trình",
    note: "• Sự kiện: Chuẩn hóa mô hình cấu trúc bao gồm CPU, bộ nhớ, thiết bị nhập/xuất.\n• Tác động: 99% các dòng vi xử lý hiện đại (ARM, x86) vẫn vận hành theo nguyên lý này.\n• Kiểm chứng: IAS Computer Project Reports."
  },
  {
    id: "hist_06_fortran_1957",
    title: "6. Ngôn Ngữ Cấp Cao Đầu Tiên: Fortran (1957)",
    place: "Phát triển phần mềm · IBM & John Backus",
    note: "• Sự kiện: Ra mắt ngôn ngữ lập trình bậc cao thương mại giúp tự động hóa mã máy.\n• Ý nghĩa: Lập trình viên viết mã bằng ký hiệu toán học thay vì đục lỗ thủ công.\n• Kiểm chứng: ACM History of Programming Languages."
  },
  {
    id: "hist_07_arpanet_1969",
    title: "7. Mạng Lưới Phân Tán: ARPANET (1969)",
    place: "Hạ tầng mạng · Tiền thân Internet",
    note: "• Sự kiện: Kết nối thành công 4 node mạng đầu tiên giữa các trường đại học Mỹ.\n• Số liệu thực tế: Gói tin dữ liệu đầu tiên gửi đi mang từ 'LO' (ý định gõ 'LOGIN').\n• Kiểm chứng: DARPA Historical Archives."
  },
  {
    id: "hist_08_unix_c_1972",
    title: "8. Hệ Điều Hành UNIX & Ngôn Ngữ C (1972)",
    place: "Bell Labs · Dennis Ritchie & Ken Thompson",
    note: "• Sự kiện: Phát minh hệ điều hành UNIX và ngôn ngữ lập trình C.\n• Tác động: Nền tảng sinh ra các hệ sinh thái lớn như Linux, macOS, iOS và Windows.\n• Kiểm chứng: Communications of the ACM."
  },
  {
    id: "hist_09_tcp_ip_1983",
    title: "9. Giao Thức TCP/IP & Mạng Toàn Cầu (1983)",
    place: "Chuẩn hóa giao tiếp · Vint Cerf & Bob Kahn",
    note: "• Sự kiện: ARPANET chuyển đổi hoàn toàn sang bộ giao thức TCP/IP tiêu chuẩn.\n• Ý nghĩa: Cho phép các mạng máy tính độc lập liên thông thành Internet thống nhất.\n• Kiểm chứng: Internet RFC Standards."
  },
  {
    id: "hist_10_world_wide_web_1989",
    title: "10. World Wide Web: Tim Berners-Lee (1989)",
    place: "CERN · Siêu văn bản & Trình duyệt web",
    note: "• Sự kiện: Tim Berners-Lee phát minh ra HTML, HTTP và giao thức web tại CERN.\n• Số liệu: Từ 1 trang web duy nhất năm 1991 phát triển lên hơn 1,1 tỷ trang web hoạt động.\n• Kiểm chứng: CERN Document Server."
  },
  {
    id: "hist_11_deep_blue_1997",
    title: "11. Trí Tuệ Nhân Tạo: Deep Blue hạ gục Vua Cờ (1997)",
    place: "IBM Research · Đột phá giải thuật tìm kiếm",
    note: "• Sự kiện: Siêu máy tính Deep Blue đánh bại nhà vô địch cờ vua thế giới Garry Kasparov.\n• Số liệu: Khả năng tính toán và đánh giá 200 triệu vị thế nước cờ mỗi giây.\n• Kiểm chứng: ACM Journal on Computing."
  },
  {
    id: "hist_12_linux_open_source",
    title: "12. Phong Trào Mã Nguồn Mở & Linux (1991 - 2000s)",
    place: "Hợp tác toàn cầu · Linus Torvalds",
    note: "• Sự kiện: Phát triển hạt nhân hệ điều hành mã nguồn mở Linux phục vụ cộng đồng.\n• Số liệu: Hơn 96% top 1 triệu máy chủ web thế giới và 100% siêu máy tính TOP500 chạy Linux.\n• Kiểm chứng: TOP500 Supercomputing Statistics."
  },
  {
    id: "hist_13_smartphone_cloud",
    title: "13. Kỷ Nguyên Di Động & Điện Toán Đám Mây (2007 - 2010)",
    place: "Hạ tầng phân tán · iOS, Android & AWS",
    note: "• Sự kiện: Bùng nổ điện thoại thông minh và điện toán đám mây quy mô lớn.\n• Số liệu: Hơn 6,8 tỷ thiết bị di động kết nối băng thông rộng toàn cầu.\n• Kiểm chứng: IEEE Spectrum & ITU Statistics."
  },
  {
    id: "hist_14_alexnet_deep_learning",
    title: "14. Cuộc Cách Mạng Deep Learning: AlexNet (2012)",
    place: "Mọc neural tích chập · Thị giác máy tính",
    note: "• Sự kiện: Mạng neural AlexNet chiến thắng áp đảo tại cuộc thi phân loại ảnh ImageNet.\n• Ý nghĩa: Khơi nguồn cho làn sóng phát triển Trí tuệ Nhân tạo hiện đại.\n• Kiểm chứng: Neural Information Processing Systems (NeurIPS)."
  },
  {
    id: "hist_15_alphago_2016",
    title: "15. AlphaGo và Học Tăng Cường (2016)",
    place: "DeepMind · Trí tuệ nhân tạo siêu việt",
    note: "• Sự kiện: AlphaGo đánh bại kỳ thủ vô địch cờ vây thế giới Lee Sedol.\n• Ý nghĩa: Chứng minh AI có khả năng tự học hỏi và sáng tạo chiến lược vượt tri thức nhân loại.\n• Kiểm chứng: Tạp chí khoa học Nature."
  },
  {
    id: "hist_16_quantum_supremacy",
    title: "16. Ưu Thế Lượng Tử: Google Sycamore (2019)",
    place: "Điện toán lượng tử · Xử lý siêu tốc",
    note: "• Sự kiện: Bộ xử lý lượng tử hoàn thành tác vụ tính toán trong 200 giây.\n• So sánh: Tác vụ mà siêu máy tính cổ điển mạnh nhất mất khoảng 10.000 năm để hoàn thành.\n• Kiểm chứng: Tạp chí khoa học Nature Vol 574."
  },
  {
    id: "hist_17_alphafold_biology",
    title: "17. AI Giải Mã Sinh Học: AlphaFold (2020 - 2024)",
    place: "Tin sinh học tính toán · Cấu trúc Protein",
    note: "• Sự kiện: AlphaFold dự đoán chính xác cấu trúc 3D của hầu như toàn bộ protein được khoa học biết đến.\n• Tác động: Rút ngắn hàng thập kỷ nghiên cứu y sinh học và phát triển dược phẩm mới.\n• Kiểm chứng: Nobel Prize in Chemistry & Science Magazine."
  },
  {
    id: "hist_18_generative_ai_era",
    title: "18. Kỷ Nguyên AI Tạo Sinh & LLM (2022 - Hiện tại)",
    place: "Mô hình ngôn ngữ lớn · Transformers",
    note: "• Sự kiện: Sự bùng nổ của các hệ thống AI tạo sinh định hình lại cách con người giao tiếp và lập trình.\n• Dữ liệu: Nhu cầu nhân lực chuyên sâu Khoa học máy tính tăng trưởng 25%/năm.\n• Kiểm chứng: US Bureau of Labor Statistics (BLS)."
  },
  {
    id: "hist_19_edge_ai_iot",
    title: "19. Hệ Thống Nhúng Thông Minh & AI Biên (2026)",
    place: "Phần cứng thông minh · Vi điều khiển năng lượng thấp",
    note: "• Sự kiện: Tích hợp mô hình trí tuệ nhân tạo trực tiếp lên vi điều khiển nhỏ gọn và thiết bị tự hành.\n• Ứng dụng: Xe tự hành, hệ thống drone điện ảnh, thiết bị sonar thông minh.\n• Kiểm chứng: IEEE Transactions on Industrial Informatics."
  },
  {
    id: "hist_20_ethics_cyber_security",
    title: "20. An Ninh Mạng & Đạo Đức Công Nghệ Toàn Cầu",
    place: "Bảo mật thông tin · Quy chuẩn pháp lý số",
    note: "• Thách thức: Đảm bảo chủ quyền dữ liệu, phòng thủ mã độc và kiểm soát an toàn hệ thống AI tự động.\n• Tiêu chuẩn: ISO/IEC 27001 và Đạo luật Quản trị AI Quốc tế.\n• Kiểm chứng: World Economic Forum Tech Report."
  },
  {
    id: "hist_21_future_research_scientist",
    title: "21. Tương Lai: Nhà Khoa Học Máy Tính Thế Hệ Mới",
    place: "Đỉnh cao khoa học · Khám phá giới hạn vũ trụ số",
    note: "• Vai trò cốt lõi: Dẫn dắt tương lai nhân loại qua thuật toán lượng tử, y sinh học tính toán và công nghệ kiến tạo thế giới số.",
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
