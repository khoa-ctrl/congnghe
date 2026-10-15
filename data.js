const WIKI_SECTIONS_DATA = [
  {
    id: "sec-1",
    title: "1. Nội Dung Chính & Vấn Đề Hướng Nghiệp",
    items: [
      {
        tag: "Mục Tiêu Cốt Lõi",
        title: "Giải Quyết Bài Toán Bối Rối Hướng Nghiệp Của Học Sinh",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        content: "• Vấn đề thực tế: Học sinh THPT và sinh viên năm đầu thường gặp khó khăn vì chưa hiểu rõ bản chất công việc thực tế của ngành Khoa học máy tính, dẫn đến chọn sai chuyên ngành.\n• Mục tiêu sản phẩm: Cung cấp tài liệu tra cứu trực quan, chi tiết về công việc, kiến thức, kỹ năng và giúp người học tự đối chiếu sở thích, năng lực cá nhân với yêu cầu công việc."
      }
    ]
  },
  {
    id: "sec-2",
    title: "2. Tìm Hiểu Chung Về Ngành Khoa Học Máy Tính",
    items: [
      {
        tag: "Bản Chất & Nền Tảng",
        title: "Từ Thuật Toán Của Ada Lovelace Đến Hệ Thống Tính Toán Hiện Đại",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        content: "• Khoa học máy tính (Computer Science) không chỉ đơn thuần là viết mã (coding) mà là nghiên cứu các nền tảng toán học, cấu trúc dữ liệu, giải thuật và khả năng tự động hóa tính toán.\n• Ngành học này trang bị cho người học tư duy logic cấp cao để giải quyết các bài toán phức tạp trong mọi lĩnh vực của đời sống."
      }
    ]
  },
  {
    id: "sec-3",
    title: "3. Yêu Cầu Cần Có Về Kiến Thức & Kỹ Năng",
    items: [
      {
        tag: "Năng Lực Chuyên Môn",
        title: "Phân Tích Mức Độ Yêu Cầu Kỹ Năng & Tư Duy Cốt Lõi",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
        content: "Để thành công trong ngành, học sinh cần trang bị các nhóm năng lực chính được phân tích qua biểu đồ kỹ năng dưới đây:\n\n" +
                 '<div class="chart-container">' +
                   '<div class="chart-row"><div class="chart-label"><span>Tư duy Toán học & Logic</span><span>90%</span></div><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 90%;"></div></div></div>' +
                   '<div class="chart-row"><div class="chart-label"><span>Kỹ năng Lập trình (Python/C++/Java)</span><span>85%</span></div><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 85%;"></div></div></div>' +
                   '<div class="chart-row"><div class="chart-label"><span>Giải quyết bài toán & Thuật toán</span><span>88%</span></div><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 88%;"></div></div></div>' +
                   '<div class="chart-row"><div class="chart-label"><span>An ninh mạng & Bảo mật hệ thống</span><span>75%</span></div><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 75%;"></div></div></div>' +
                 '</div>'
      }
    ]
  },
  {
    id: "sec-4",
    title: "4. Liên Kết Thực Tiễn & Tư Liệu Hình Ảnh",
    items: [
      {
        tag: "Ứng Dụng Thực Tiễn",
        title: "Từ Hệ Thống Nhúng Thông Minh Đến Trí Tuệ Nhân Tạo (AI)",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
        content: "• Liên kết thực tế: Các kỹ sư khoa học máy tính hiện nay tham gia phát triển hệ thống AI tạo sinh, xe tự hành, thiết bị vi điều khiển thông minh và các giải pháp điện toán đám mây quy mô lớn.\n• Nguồn tham khảo kiểm chứng: Tài liệu chuẩn từ tổ chức ACM (Association for Computing Machinery) và IEEE Computer Society."
      }
    ]
  },
  {
    id: "sec-5",
    title: "5. Hướng Đi Phù Hợp: Đối Chiếu Sở Thích & Năng Lực",
    items: [
      {
        tag: "Định Hướng Cá Nhân Hóa",
        title: "Phương Pháp Tự Đối Chiếu Năng Lực Để Chọn Nhánh Nghề Nghiệp",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        content: "• Nếu bạn yêu thích Toán học & Thống kê: Phù hợp với nhánh Trí tuệ Nhân tạo (AI) và Khoa học Dữ liệu (Data Science).\n• Nếu bạn thích mày mò Phần cứng & Mạch điện: Phù hợp với Kỹ sư Hệ thống Nhúng (Embedded Systems) và IoT.\n• Nếu bạn thích Xây dựng Ứng dụng & Giao diện: Phù hợp với Kỹ sư Phần mềm (Software Engineer) hoặc Phát triển Web/Mobile.\n• Nếu bạn thích Bảo mật: Phù hợp với chuyên ngành An ninh mạng (Cybersecurity)."
      }
    ]
  },
  {
    id: "sec-6",
    title: "6. Tổng Kết Triển Vọng Nghề Nghiệp",
    items: [
      {
        tag: "Kết Luận Chuyên Khảo",
        title: "Tương Lai & Cơ Hội Phát Triển Trong Kỷ Nguyên Số",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        content: "• Tóm tắt: Ngành Khoa học máy tính là bệ phóng vững chắc cho học sinh có tư duy sáng tạo và mong muốn dẫn dắt công nghệ.\n• Lời khuyên: Xác định rõ thế mạnh bản thân từ bậc phổ thông sẽ giúp học sinh xây dựng lộ trình học tập, chọn trường và tích lũy kỹ năng thực tế hiệu quả nhất."
      }
    ]
  }
];
