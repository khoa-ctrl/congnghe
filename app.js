const CAREER_DATA = [
  {
    code: 'CS-AI-01',
    title: 'Trí Tuệ Nhân Tạo (AI & Machine Learning)',
    concept: 'Nghiên cứu và xây dựng các hệ thống mô phỏng trí thông minh con người, giúp máy tính tự học từ dữ liệu, nhận diện hình ảnh, xử lý ngôn ngữ tự nhiên và dự đoán xu hướng.',
    skills: 'Toán cao cấp, Xác suất thống kê, Ngôn ngữ Python, Thư viện Deep Learning (PyTorch, TensorFlow).',
    aptitude: 'Phù hợp với học sinh có tư duy logic trừu tượng, yêu thích toán học, mô hình hóa và giải quyết các bài toán phức tạp.',
    improvement: 'Cần chủ động rèn luyện tư duy xác suất, tập làm quen với lập trình Python cơ bản từ bậc phổ thông.'
  },
  {
    code: 'CS-IOT-02',
    title: 'Hệ Thống Nhúng & IoT (Vi Điều Khiển)',
    concept: 'Kết hợp chặt chẽ giữa phần cứng (mạch điện tử, cảm biến, vi điều khiển như ESP32) và phần mềm để điều khiển các thiết bị thông minh, drone, robot và tự động hóa công nghiệp.',
    skills: 'Lập trình C/C++, Kiến trúc vi điều khiển, Điện tử cơ bản, Giao thức truyền thông mạng không dây.',
    aptitude: 'Phù hợp với học sinh thích mày mò lắp ráp thực tế, yêu thích phần cứng, robot và các hệ thống điều khiển vật lý.',
    improvement: 'Nên tìm hiểu các bộ kit thực hành vi điều khiển nhỏ, làm quen với sơ đồ mạch điện và logic lập trình C.'
  },
  {
    code: 'CS-DEV-03',
    title: 'Phát Triển Phần Mềm & Ứng Dụng',
    concept: 'Quy trình thiết kế, xây dựng, kiểm thử và vận hành các phần mềm ứng dụng, hệ thống web hoặc nền tảng di động phục vụ hàng triệu người dùng hàng ngày.',
    skills: 'Ngôn ngữ C#, Java, JavaScript/TypeScript, Cấu trúc dữ liệu & Giải thuật, Quản lý mã nguồn Git.',
    aptitude: 'Phù hợp với học sinh tỉ mỉ, thích sáng tạo sản phẩm công nghệ có tính ứng dụng trực tiếp và giải quyết bài toán thực tế.',
    improvement: 'Cần tập trung nắm vững cấu trúc dữ liệu cơ bản, rèn thói quen viết mã sạch và tham gia làm các dự án thực tế nhỏ.'
  },
  {
    code: 'CS-SEC-04',
    title: 'An Ninh Mạng & Bảo Mật Hệ Thống',
    concept: 'Chuyên nghiên cứu cách bảo vệ các hệ thống thông tin, mạng lưới máy tính và dữ liệu trước các cuộc tấn công mạng, mã độc tống tiền và các lỗ hổng bảo mật hiểm nghèo.',
    skills: 'Giao thức mạng TCP/IP, Mật mã học, Quản trị hệ điều hành Linux, Kỹ năng phòng thủ không gian mạng.',
    aptitude: 'Phù hợp với học sinh có tính cẩn trọng cao, tò mò về cơ chế vận hành bên trong của hệ thống và thích giải mã, bảo vệ công lý số.',
    improvement: 'Cần tìm hiểu kỹ về mạng máy tính, rèn luyện cách sử dụng hệ điều hành Linux và tư duy phản biện sắc bén.'
  },
  {
    code: 'CS-DATA-05',
    title: 'Khoa Học Dữ Liệu & Big Data',
    concept: 'Thu thập, xử lý, phân tích và trực quan hóa các tập dữ liệu khổng lồ nhằm tìm ra các quy luật ngầm, hỗ trợ doanh nghiệp và tổ chức đưa ra chiến lược tối ưu.',
    skills: 'Ngôn ngữ SQL, Python/R, Thống kê ứng dụng, Công cụ trực quan hóa dữ liệu (PowerBI, Tableau).',
    aptitude: 'Phù hợp với học sinh yêu thích con số, có năng lực tổng hợp thông tin và khả năng truyền đạt ý nghĩa qua biểu đồ.',
    improvement: 'Cần củng cố kỹ năng truy vấn cơ sở dữ liệu SQL, rèn luyện thói quen phân tích các bộ dữ liệu công khai trên mạng.'
  }
];

function renderApp() {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  CAREER_DATA.forEach((career, index) => {
    const item = document.createElement('div');
    item.className = `career-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <span class="career-item-title">${career.title}</span>
      <span class="career-item-code">${career.code}</span>
    `;

    item.addEventListener('click', () => {
      document.querySelectorAll('.career-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      updateDetails(career);
    });

    container.appendChild(item);
  });

  // Hiển thị mặc định thẻ đầu tiên
  updateDetails(CAREER_DATA[0]);
}

function updateDetails(career) {
  document.getElementById('detCode').innerText = career.code;
  document.getElementById('detTitle').innerText = career.title;
  document.getElementById('detConcept').innerText = career.concept;
  document.getElementById('detSkills').innerText = career.skills;
  document.getElementById('detAptitude').innerText = career.aptitude;
  document.getElementById('detImprovement').innerText = career.improvement;
}

window.addEventListener('DOMContentLoaded', renderApp);