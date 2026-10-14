const ARCHIVE_ITEMS = [
  {
    id: "cs_01_software_engineer",
    title: "1. Kỹ Sư Phần Mềm (Software Engineer)",
    place: "Hồ sơ công việc · Phát triển ứng dụng & hệ thống",
    note: "• Công việc: Thiết kế, lập trình, kiểm thử và bảo trì các hệ thống phần mềm quy mô lớn.\n• Yêu cầu: Thành thạo cấu trúc dữ liệu, giải thuật, ngôn ngữ lập trình (C#, Java, Python, C++).\n• Hướng đào tạo: Khoa học máy tính, Kỹ thuật phần mềm.\n• Kiểm chứng: IEEE Computer Society & ACM Curricula."
  },
  {
    id: "cs_02_ai_engineer",
    title: "2. Kỹ Sư Trí Tuệ Nhân Tạo (AI Engineer)",
    place: "Hồ sơ công việc · Deep Learning & Machine Learning",
    note: "• Công việc: Xây dựng các mô hình học máy, mạng neural và hệ thống AI tạo sinh.\n• Yêu cầu: Toán cao cấp, xác suất thống kê, Python, PyTorch/TensorFlow.\n• Hướng đào tạo: Chuyên sâu Trí tuệ nhân tạo và Khoa học dữ liệu.\n• Kiểm chứng: Báo cáo AI Index Stanford."
  },
  {
    id: "cs_03_cybersecurity",
    title: "3. Chuyên Gia An Ninh Mạng (Cybersecurity Analyst)",
    place: "Hồ sơ công việc · Bảo mật & Phòng thủ hệ thống",
    note: "• Công việc: Phát hiện lỗ hổng, ngăn chặn tấn công mạng, bảo vệ dữ liệu doanh nghiệp.\n• Yêu cầu: Hiểu sâu về mạng máy tính, giao thức TCP/IP, mã hóa và mật mã học.\n• Hướng đào tạo: An toàn thông tin, An ninh mạng.\n• Kiểm chứng: Tiêu chuẩn bảo mật quốc tế ISO/IEC 27001."
  },
  {
    id: "cs_04_data_scientist",
    title: "4. Nhà Khoa Học Dữ Liệu (Data Scientist)",
    place: "Hồ sơ công việc · Phân tích dữ liệu lớn",
    note: "• Công việc: Khai thác kho dữ liệu khổng lồ để đưa ra quyết định chiến lược kinh doanh.\n• Yêu cầu: SQL, Python/R, tư duy thống kê và trực quan hóa dữ liệu.\n• Hướng đào tạo: Thống kê toán học, Khoa học dữ liệu.\n• Kiểm chứng: Harvard Business Review Data Career Guide."
  },
  {
    id: "cs_05_cloud_architect",
    title: "5. Kiến Trúc Sư Điện Toán Đám Mây (Cloud Architect)",
    place: "Hồ sơ công việc · Hạ tầng phân tán & DevOps",
    note: "• Công việc: Thiết kế và quản trị hệ thống đám mây (AWS, Azure, GCP), tối ưu hóa hiệu năng.\n• Yêu cầu: Kiến trúc hệ thống phân tán, Docker, Kubernetes, CI/CD.\n• Hướng đào tạo: Kỹ thuật hệ thống máy tính, Mạng máy tính.\n• Kiểm chứng: Tài liệu kỹ thuật Cloud Native Computing Foundation."
  },
  {
    id: "cs_06_embedded_engineer",
    title: "6. Kỹ Sư Hệ Thống Nhúng & AI Biên",
    place: "Hồ sơ công việc · Vi điều khiển & IoT",
    note: "• Công việc: Lập trình firmware cho các thiết bị phần cứng, vi điều khiển (như ESP32) và cảm biến.\n• Yêu cầu: C/C++, điện tử số, giao tiếp phần cứng thấp.\n• Hướng đào tạo: Kỹ thuật Điện - Điện tử, Kỹ thuật Máy tính.\n• Kiểm chứng: IEEE Transactions on Industrial Informatics."
  },
  {
    id: "cs_07_database_admin",
    title: "7. Quản Trị Cơ Sở Dữ Liệu (DBA)",
    place: "Hồ sơ công việc · Lưu trữ & Tối ưu truy vấn",
    note: "• Công việc: Quản lý, sao lưu, bảo mật và tối ưu hóa hiệu suất cơ sở dữ liệu lớn (SQL/NoSQL).\n• Yêu cầu: Quản trị hệ quản trị cơ sở dữ liệu (PostgreSQL, Oracle, MongoDB).\n• Hướng đào tạo: Hệ thống thông tin, Khoa học máy tính.\n• Kiểm chứng: Tiêu chuẩn cơ sở dữ liệu ACID."
  },
  {
    id: "cs_08_ui_ux_engineer",
    title: "8. Kỹ Sư Giao Diện & Trải Nghiệm (UI/UX Developer)",
    place: "Hồ sơ công việc · Frontend & Tương tác người dùng",
    note: "• Công việc: Hiện thực hóa thiết kế giao diện thành mã nguồn tương tác mượt mà, tối ưu trải nghiệm.\n• Yêu cầu: HTML5, CSS3, JavaScript nâng cao, React/Vue.\n• Hướng đào tạo: Công nghệ phần mềm, Thiết kế tương tác.\n• Kiểm chứng: Nielsen Norman Group Usability Principles."
  },
  {
    id: "cs_09_devops_engineer",
    title: "9. Kỹ Sư DevOps & Tự Động Hóa",
    place: "Hồ sơ công việc · Vận hành & Triển khai liên tục",
    note: "• Công việc: Tự động hóa quy trình xây dựng, kiểm thử và phát hành phần mềm.\n• Yêu cầu: Linux, Bash scripting, Jenkins, Terraform, Docker.\n• Hướng đào tạo: Kỹ thuật phần mềm, Quản trị hệ thống.\n• Kiểm chứng: DORA (DevOps Research and Assessment)."
  },
  {
    id: "cs_10_blockchain_dev",
    title: "10. Kỹ Sư Chuỗi Khối (Blockchain Developer)",
    place: "Hồ sơ công việc · Hợp đồng thông minh & Phi tập trung",
    note: "• Công việc: Phát triển các ứng dụng phi tập trung (dApps) và hợp đồng thông minh an toàn.\n• Yêu cầu: Solidity, mật mã học, cấu trúc dữ liệu phân tán.\n• Hướng đào tạo: Khoa học máy tính chuyên sâu bảo mật.\n• Kiểm chứng: NIST Blockchain Technology Overview."
  },
  {
    id: "cs_11_game_developer",
    title: "11. Lập Trình Viên Trò Chơi (Game Developer)",
    place: "Hồ sơ công việc · Đồ họa 3D & Vật lý thời gian thực",
    note: "• Công việc: Lập trình logic game, hệ thống vật lý và tối ưu hóa khung hình trên Unity/Unreal Engine.\n• Yêu cầu: C++, C#, Đại số tuyến tính, thuật toán đồ họa.\n• Hướng đào tạo: Công nghệ game, Khoa học máy tính.\n• Kiểm chứng: GDC Standards."
  },
  {
    id: "cs_12_qa_automation",
    title: "12. Kỹ Sư Kiểm Thử Tự Động (QA Automation)",
    place: "Hồ sơ công việc · Chất lượng phần mềm",
    note: "• Công việc: Viết kịch bản kiểm thử tự động, phát hiện lỗi hệ thống trước khi phát hành.\n• Yêu cầu: Selenium, Python/Java, tư duy logic sắc bén.\n• Hướng đào tạo: Kỹ thuật phần mềm, Kiểm định chất lượng.\n• Kiểm chứng: ISTQB Foundation Syllabus."
  },
  {
    id: "cs_13_mobile_developer",
    title: "13. Kỹ Sư Ứng Dụng Di Động (Mobile Developer)",
    place: "Hồ sơ công việc · iOS & Android Native/Cross-platform",
    note: "• Công việc: Phát triển ứng dụng di động thông minh, tối ưu pin và tài nguyên phần cứng.\n• Yêu cầu: Swift, Kotlin, Flutter hoặc React Native.\n• Hướng đào tạo: Công nghệ phần mềm.\n• Kiểm chứng: Apple & Google Developer Guidelines."
  },
  {
    id: "cs_14_systems_analyst",
    title: "14. Phân Tích Viên Hệ Thống (Systems Analyst)",
    place: "Hồ sơ công việc · Tư vấn giải pháp doanh nghiệp",
    note: "• Công việc: Khảo sát nhu cầu thực tế, chuyển đổi yêu cầu kinh doanh thành đặc tả kỹ thuật phần mềm.\n• Yêu cầu: UML, tư duy hệ thống, kỹ năng giao tiếp và tài liệu hóa.\n• Hướng đào tạo: Hệ thống thông tin quản lý, Khoa học máy tính.\n• Kiểm chứng: BABOK Guide."
  },
  {
    id: "cs_15_network_engineer",
    title: "15. Kỹ Sư Mạng Máy Tính (Network Engineer)",
    place: "Hồ sơ công việc · Định tuyến & Hạ tầng viễn thông",
    note: "• Công việc: Thiết kế, cấu hình và giám sát hệ thống mạng nội bộ và diện rộng.\n• Yêu cầu: CCNA/CCNP, mô hình OSI, TCP/IP, bảo mật mạng.\n• Hướng đào tạo: Mạng máy tính và Truyền thông.\n• Kiểm chứng: Cisco Networking Academy."
  },
  {
    id: "cs_16_bioinformatics",
    title: "16. Chuyên Gia Tin Sinh Học (Bioinformatician)",
    place: "Hồ sơ công việc · Y sinh học tính toán",
    note: "• Công việc: Phân tích dữ liệu gen, protein phục vụ nghiên cứu y học và dược phẩm.\n• Yêu cầu: Sinh học phân tử kết hợp thuật toán xử lý chuỗi và Python/R.\n• Hướng đào tạo: Tin sinh học, Khoa học máy tính y sinh.\n• Kiểm chứng: NIH Bioinformatics."
  },
  {
    id: "cs_17_robotics_engineer",
    title: "17. Kỹ Sư Robot & Tự Động Hóa (Robotics Engineer)",
    place: "Hồ sơ công việc · Điều khiển tự hành & Kinematics",
    note: "• Công việc: Lập trình hệ thống điều khiển chuyển động cho robot công nghiệp và xe tự hành.\n• Yêu cầu: ROS (Robot Operating System), C++, điều khiển học.\n• Hướng đào tạo: Cơ điện tử, Kỹ thuật Robot.\n• Kiểm chứng: IEEE Robotics and Automation Society."
  },
  {
    id: "cs_18_quantum_scientist",
    title: "18. Nhà Nghiên Cứu Điện Toán Lượng Tử",
    place: "Hồ sơ công việc · Thuật toán lượng tử thế hệ mới",
    note: "• Công việc: Nghiên cứu và lập trình trên các bộ xử lý lượng tử siêu dẫn hoặc quang học.\n• Yêu cầu: Cơ học lượng tử, toán học cao cấp, Qiskit.\n• Hướng đào tạo: Vật lý lý thuyết, Khoa học máy tính lượng tử.\n• Kiểm chứng: IBM Quantum Research Roadmap."
  },
  {
    id: "cs_19_solution_architect",
    title: "19. Kiến Trúc Sư Giải Pháp (Solution Architect)",
    place: "Hồ sơ công việc · Hoạch định công nghệ tổng thể",
    note: "• Công việc: Định hướng giải pháp công nghệ toàn diện, cân đối chi phí và hiệu quả cho doanh nghiệp lớn.\n• Yêu cầu: Kinh nghiệm thực chiến đa lĩnh vực, hiểu sâu về Enterprise Architecture.\n• Hướng đào tạo: Khoa học máy tính kết hợp quản trị kinh doanh.\n• Kiểm chứng: TOGAF Standard."
  },
  {
    id: "cs_20_tech_lead",
    title: "20. Trưởng Nhóm Kỹ Thuật (Tech Lead / Engineering Manager)",
    place: "Hồ sơ công việc · Lãnh đạo đội ngũ kỹ thuật",
    note: "• Công việc: Dẫn dắt đội ngũ kỹ sư, định hướng kiến trúc mã nguồn và quản lý tiến độ dự án.\n• Yêu cầu: Kỹ năng chuyên môn vững chắc kết hợp lãnh đạo và giao tiếp.\n• Hướng đào tạo: Khoa học máy tính và Quản trị kỹ thuật.\n• Kiểm chứng: PMI Standards."
  },
  {
    id: "cs_21_research_scientist",
    title: "21. Nhà Nghiên Cứu Khoa Học Máy Tính (Research Scientist)",
    place: "Hồ sơ công việc · Đổi mới sáng tạo & Sách trắng công nghệ",
    note: "• Công việc: Khám phá các giới hạn mới của thuật toán, lý thuyết tính toán và công nghệ tương lai.",
    tall: true
  }
];

const ARCHIVE_ASSETS = {
  CDN: "https://upload.wikimedia.org/wikipedia/commons/",
  avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/640px-Ada_Lovelace_portrait.jpg",
  items: [
    "thumb/0/0c/Software_Engineering_Code.jpg/800px-Software_Engineering_Code.jpg",
    "thumb/6/6f/Lee_Sedol_and_AlphaGo_2016.jpg/800px-Lee_Sedol_and_AlphaGo_2016.jpg",
    "thumb/5/52/IBM_Quantum_System_One.jpg/800px-IBM_Quantum_System_One.jpg",
    "thumb/f/f2/AlexNet_architecture.png/800px-AlexNet_architecture.png",
    "thumb/e/e5/Arpanet_logical_map,_March_1977.png/800px-Arpanet_logical_map,_March_1977.png",
    "thumb/e/ed/Microcontroller_XIAO.jpg/800px-Microcontroller_XIAO.jpg",
    "thumb/8/8f/IBM_PC_5150.jpg/800px-IBM_PC_5150.jpg",
    "thumb/f/f9/Tim_Berners-Lee_2009.jpg/800px-Tim_Berners-Lee_2009.jpg",
    "thumb/3/3f/Agile_Manifesto_Signers.jpg/800px-Agile_Manifesto_Signers.jpg",
    "thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
    "thumb/d/d4/Kasparov_and_Deep_Blue_1997.jpg/800px-Kasparov_and_Deep_Blue_1997.jpg",
    "thumb/5/5b/ENIAC_Real_1946.jpg/800px-ENIAC_Real_1946.jpg",
    "thumb/b/b3/Ken_Thompson_and_Dennis_Ritchie.jpg/800px-Ken_Thompson_and_Dennis_Ritchie.jpg",
    "thumb/e/ec/John_von_Nouns_Los_Alamos.jpg/800px-John_von_Nouns_Los_Alamos.jpg",
    "thumb/e/e2/Intel_4004_chip.jpg/800px-Intel_4004_chip.jpg",
    "thumb/e/ef/AlphaFold_Predicted_Structure.jpg/800px-AlphaFold_Predicted_Structure.jpg",
    "thumb/8/8c/OpenAI_logo.svg/800px-OpenAI_logo.svg.png",
    "thumb/a/a6/Alan_Turing_Aged_16.jpg/800px-Alan_Turing_Aged_16.jpg",
    "thumb/0/07/IBM_704_Fortran.jpg/800px-IBM_704_Fortran.jpg",
    "thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg",
    "thumb/5/51/Transistor,_first.jpg/800px-Transistor,_first.jpg"
  ]
};