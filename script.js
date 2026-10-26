/**
 * ==============================================================================
 * PORTFOLIO SCRIPT - NGUYỄN HỒNG PHƯƠNG
 * Chức năng:
 *  - Chuyển đổi giao diện Sáng / Tối (Dark / Light Mode) có lưu LocalStorage
 *  - Chuyển đổi song ngữ Việt / Anh (Bilingual VI / EN) có lưu LocalStorage
 *  - Navbar cố định, hiệu ứng đổ bóng & ScrollSpy đổi active menu
 *  - Menu mobile dạng ngăn kéo (drawer/dropdown)
 *  - Hiệu ứng cuộn mượt và xuất hiện (Scroll Reveal with IntersectionObserver)
 *  - Xử lý Form liên hệ (gửi qua Mailto với thông báo thân thiện)
 *  - Nút cuộn nhanh lên đầu trang (Back to top)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. TỪ ĐIỂN SONG NGỮ (VIETNAMESE - ENGLISH DICTIONARY)
  // ==========================================================================
  const translations = {
    vi: {
      page_title: "Nguyễn Hồng Phương | Chuyên viên Hỗ trợ Hệ thống (System Support Specialist)",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_experience: "Kinh nghiệm",
      nav_education: "Học vấn",
      nav_projects: "Dự án",
      nav_contact: "Liên hệ",

      hero_greeting: "Xin chào, tôi là",
      hero_role_vi: "Chuyên viên Hỗ trợ Hệ thống",
      hero_role_en: "System Support Specialist",
      hero_status: "Sẵn sàng nhận cơ hội mới",
      hero_desc: "Chuyên gia hỗ trợ & vận hành hạ tầng doanh nghiệp với tư duy ưu tiên tính <strong>ổn định, bảo mật</strong> và <strong>hiệu quả vận hành</strong>. Quản trị toàn diện hệ thống DMS, SAP, TMS, WMS và cơ sở dữ liệu.",
      info_location: "Vĩnh Long, Việt Nam",
      btn_contact: "Liên hệ ngay",
      btn_github: "Xem GitHub",
      btn_cv: "Tải CV (PDF)",

      tag_about: "GIỚI THIỆU",
      title_about: "Về Bản Thân Tôi",
      about_text: "\"Tôi là chuyên gia hỗ trợ hệ thống với tư duy ưu tiên tính ổn định, bảo mật và hiệu quả vận hành. Với khả năng áp dụng các quy trình chuẩn quốc tế vào việc xử lý các thách thức kỹ thuật, tôi cam kết duy trì sự xuyên suốt và an toàn cho hạ tầng hệ thống của doanh nghiệp. Tôi luôn chủ động học hỏi và cập nhật công nghệ mới để đóng góp vào sự phát triển bền vững của tổ chức.\"",
      signature_role: "Chuyên viên Hỗ trợ Hệ thống (5S Software)",
      hl1_title: "Ổn Định & Bảo Mật",
      hl1_desc: "Ưu tiên hàng đầu cho việc bảo vệ dữ liệu, kiểm soát phân quyền và ngăn ngừa rủi ro hệ thống.",
      hl2_title: "Quy Trình Quốc Tế",
      hl2_desc: "Kinh nghiệm phối hợp với đối tác Accenture, điều phối sự cố chuyên sâu qua hệ thống OTRS.",
      hl3_title: "Hệ Thống Đa Nền Tảng",
      hl3_desc: "Vận hành đồng bộ các hệ thống cốt lõi: SAP ERP, DMS, Quản lý vận tải TMS & Quản lý kho WMS.",
      hl4_title: "Tư Duy Phát Triển",
      hl4_desc: "Nền tảng vững chắc về Lập trình (Java, Angular), CSDL MySQL và thiết kế hệ thống tối ưu.",

      tag_skills: "NĂNG LỰC CHUYÊN MÔN",
      title_skills: "Kỹ Năng Kỹ Thuật & Nghiệp Vụ",
      sub_skills: "Sự kết hợp giữa quản trị hệ thống thực chiến, nền tảng phát triển phần mềm và tư duy giải quyết vấn đề.",
      skills_cat1_title: "Hệ Thống & Quản Trị",
      skills_cat1_sub: "System & Administration",
      sk1_desc: "Cài đặt, cấu hình, quản trị người dùng và bảo trì định kỳ hệ điều hành máy chủ.",
      sk2_desc: "Đồng bộ luồng dữ liệu nghiệp vụ, quản lý đơn hàng, kho bãi và chuỗi cung ứng.",
      sk3_desc: "Thiết lập tài khoản, kiểm soát quyền truy cập và bảo mật dữ liệu doanh nghiệp.",
      sk4_desc: "Tiếp nhận, phân loại và xử lý sự cố từ xa cho khối Văn phòng (Admin) và Thị trường (Sales).",
      sk5_desc: "Kiểm thử tính năng mới, tái hiện lỗi và tư vấn phương án khắc phục cho khách hàng.",
      skills_cat2_title: "Phát Triển & Cơ Sở Dữ Liệu",
      skills_cat2_sub: "Development & Database",
      sk6_desc: "Quản lý, vận hành, viết truy vấn tối ưu và lập kế hoạch sao lưu/phục hồi dữ liệu.",
      sk7_desc: "Lập trình hướng đối tượng (OOP), xây dựng kiến trúc dịch vụ và xử lý logic backend.",
      sk8_desc: "Xây dựng giao diện người dùng đơn trang (SPA), quản lý component và reactive state.",
      sk9_desc: "Thiết kế và tiêu thụ endpoint API an toàn, xử lý dữ liệu JSON bất đồng bộ.",
      sk10_desc: "Quản lý phiên bản mã nguồn, phân tích thiết kế hệ thống theo nguyên lý hướng đối tượng.",
      skills_cat3_title: "Kỹ Năng Mềm & Tư Duy",
      skills_cat3_sub: "Soft Skills & Mindset",
      sk11_desc: "Phân tích nguyên nhân gốc rễ (Root Cause Analysis) và đưa ra giải pháp bền vững.",
      sk12_desc: "Liên tục trau dồi công nghệ mới, thích ứng nhanh với thay đổi nghiệp vụ thực tế.",
      sk13_desc: "Phối hợp nhịp nhàng giữa các phòng ban, làm việc ăn ý với đối tác quốc tế.",
      sk14_desc: "Truyền tải các vấn đề kỹ thuật phức tạp thành ngôn ngữ dễ hiểu cho người dùng cuối.",

      tag_exp: "HÀNH TRÌNH NGHỀ NGHIỆP",
      title_exp: "Kinh Nghiệm Làm Việc",
      sub_exp: "Quá trình công tác thực chiến tại doanh nghiệp giải pháp phần mềm chuyên nghiệp.",
      exp1_role: "Chuyên viên Hỗ trợ Hệ thống",
      exp1_company: "Công ty Giải pháp Phần mềm 5S",
      exp1_point1: "Chịu trách nhiệm trực tiếp về <strong>tính ổn định của hệ thống DMS</strong> cho mạng lưới Nhà phân phối toàn quốc; phối hợp với đối tác chiến lược <strong>Accenture</strong> để điều phối và xử lý sự cố (ticket) chuyên sâu qua hệ thống <strong>OTRS</strong>.",
      exp1_point2: "Tiếp nhận, xử lý vấn đề của người dùng qua kênh hỗ trợ từ xa; tư vấn khắc phục sự cố kịp thời cho khối văn phòng (Admin, Giám sát) và khối thị trường (Sales), đảm bảo hoạt động kinh doanh diễn ra <strong>liên tục và không gián đoạn</strong>.",
      exp1_point3: "Quản lý tài khoản, phân quyền, giám sát tính bảo mật của hệ thống nghiệp vụ; vận hành đồng bộ hệ thống <strong>SAP</strong>, <strong>TMS</strong> (Quản lý vận tải), <strong>WMS</strong> (Quản lý kho hàng).",
      exp2_role: "Thực tập sinh IT (IT Intern)",
      exp2_company: "Công ty Giải pháp Phần mềm 5S",
      exp2_point1: "Tham gia phát triển giao diện người dùng (UI) với <strong>Angular</strong>, thiết kế và kết nối <strong>RESTful API</strong> giữa Front-end và Back-end với Java.",
      exp2_point2: "Thực hiện kiểm thử (testing), debug phát hiện lỗi và tối ưu hóa hiệu suất website, đảm bảo trải nghiệm người dùng mượt mà.",
      exp2_point3: "Thực hành thiết kế cơ sở dữ liệu với <strong>MySQL</strong>, quản lý mã nguồn chặt chẽ qua <strong>GitHub</strong> theo quy trình nhóm.",

      tag_edu: "NỀN TẢNG HỌC THUẬT",
      title_edu: "Học Vấn & Đào Tạo",
      edu_school: "Cao đẳng FPT Polytechnic",
      edu_major: "Chuyên ngành: Phát triển phần mềm (Software Development)",
      edu_desc: "Được đào tạo bài bản theo phương pháp thực học - thực nghiệp: tư duy lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật, phân tích thiết kế hệ thống, cơ sở dữ liệu quan hệ (SQL/MySQL), phát triển ứng dụng Web đa tầng (Java Spring Boot, Angular) và quy trình làm việc chuẩn Agile/Scrum.",

      tag_proj: "SẢN PHẨM & DỰ ÁN",
      title_proj: "Dự Án Nổi Bật",
      sub_proj: "Các dự án tiêu biểu áp dụng kiến trúc hiện đại và công nghệ tiên tiến.",
      proj1_type: "Ứng dụng Web / Full-Stack",
      proj1_desc: "Hệ thống trò chuyện tin nhắn trực tuyến hỗ trợ gửi/nhận tin nhắn thời gian thực, quản trị danh sách người dùng, giao diện trực quan thân thiện và kiến trúc API bảo mật cao.",
      btn_view_github: "Xem trên GitHub",
      proj2_badge: "Enterprise System Architecture",
      proj2_type: "Hệ Thống Doanh Nghiệp / Enterprise",
      proj2_title: "Quy Trình Vận Hành & Điều Phối DMS - SAP",
      proj2_desc: "Mô hình quy trình giám sát, bảo trì và đồng bộ dữ liệu liên tục giữa hệ thống DMS, SAP ERP, hệ thống quản lý vận tải (TMS) và kho hàng (WMS) cho chuỗi phân phối toàn quốc.",
      btn_consult: "Trao đổi kinh nghiệm",
      proj_cta_text: "Xem thêm các mã nguồn và dự án khác trên kho lưu trữ của tôi:",

      tag_contact: "KẾT NỐI VỚI TÔI",
      title_contact: "Thông Tin Liên Hệ",
      sub_contact: "Sẵn sàng trao đổi về cơ hội việc làm, tư vấn kỹ thuật hoặc hợp tác phát triển hệ thống.",
      contact_col_title: "Thông tin trực tiếp",
      contact_col_desc: "Bạn có thể liên lạc với tôi qua số điện thoại, gửi email hoặc ghé thăm trang GitHub cá nhân. Tôi sẽ phản hồi sớm nhất có thể.",
      c_phone_label: "Số điện thoại / Zalo",
      c_email_label: "Email liên hệ",
      c_addr_label: "Địa chỉ",
      c_addr_val: "Thị trấn Tân Quới, huyện Bình Tân, tỉnh Vĩnh Long",
      c_github_label: "Trang GitHub cá nhân",
      btn_download_cv_full: "Tải Hồ Sơ Năng Lực (CV PDF)",
      form_title: "Gửi Tin Nhắn Cho Tôi",
      form_subtitle: "Điền thông tin vào form dưới đây để gửi tin nhắn trực tiếp.",
      form_lbl_name: "Họ và tên của bạn",
      form_lbl_email: "Email liên hệ",
      form_lbl_subject: "Tiêu đề tin nhắn",
      form_lbl_message: "Nội dung tin nhắn",
      btn_send_msg: "Gửi tin nhắn",

      footer_bio: "Chuyên viên hỗ trợ hệ thống (System Support Specialist) — Cam kết duy trì tính ổn định, an toàn và tối ưu cho hạ tầng công nghệ doanh nghiệp.",
      footer_links_title: "Liên Kết Nhanh",
      footer_social_title: "Kết Nối Trực Tuyến",
      footer_copy: "Bản quyền đã được bảo lưu. Tối ưu cho GitHub Pages.",
      footer_motto: "Ổn Định • Bảo Mật • Hiệu Quả",

      ph_name: "Ví dụ: Nguyễn Văn A",
      ph_email: "name@example.com",
      ph_subject: "Ví dụ: Trao đổi về vị trí tuyển dụng",
      ph_message: "Nhập nội dung bạn muốn gửi..."
    },

    en: {
      page_title: "Nguyen Hong Phuong | System Support Specialist",
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_greeting: "Hello, I am",
      hero_role_vi: "System Support Specialist",
      hero_role_en: "IT Operations & Database",
      hero_status: "Available for new opportunities",
      hero_desc: "Enterprise system support and operations specialist dedicated to <strong>stability, security</strong>, and <strong>operational efficiency</strong>. Comprehensive administration of DMS, SAP, TMS, WMS, and relational databases.",
      info_location: "Vinh Long, Vietnam",
      btn_contact: "Contact Me",
      btn_github: "View GitHub",
      btn_cv: "Download CV (PDF)",

      tag_about: "ABOUT ME",
      title_about: "Professional Profile",
      about_text: "\"I am a system support specialist with a mindset prioritizing stability, security, and operational efficiency. With the capability to apply international standard workflows in addressing technical challenges, I am committed to maintaining continuity and safety for corporate system infrastructures. I proactively research and adapt modern technologies to contribute to the organization's sustainable growth.\"",
      signature_role: "System Support Specialist (5S Software)",
      hl1_title: "Stability & Security",
      hl1_desc: "Top priority on enterprise data protection, fine-grained access control, and proactive risk mitigation.",
      hl2_title: "Global Standards",
      hl2_desc: "Hands-on experience collaborating with Accenture, coordinating in-depth incident tickets via OTRS.",
      hl3_title: "Multi-Platform Systems",
      hl3_desc: "Seamless synchronization of core business systems: SAP ERP, DMS, Transport Management (TMS) & Warehouse (WMS).",
      hl4_title: "Development Mindset",
      hl4_desc: "Solid foundation in programming (Java, Angular), relational databases (MySQL), and robust architecture design.",

      tag_skills: "PROFESSIONAL COMPETENCIES",
      title_skills: "Technical & Operational Skills",
      sub_skills: "A powerful blend of enterprise system operations, software engineering principles, and methodical troubleshooting.",
      skills_cat1_title: "System & Administration",
      skills_cat1_sub: "Infrastructure & Operations",
      sk1_desc: "Installation, configuration, user directory administration, and periodic maintenance of Windows Server environments.",
      sk2_desc: "Synchronizing business workflows, managing sales distribution, logistics routing, and warehouse stocks.",
      sk3_desc: "Account provisioning, granular role-based permissions, and enterprise data security protocols.",
      sk4_desc: "Remote helpdesk troubleshooting for back-office administrators, supervisors, and nationwide sales representatives.",
      sk5_desc: "Testing release builds, reproducing bugs, and providing consultative technical solutions to clients.",
      skills_cat2_title: "Development & Database",
      skills_cat2_sub: "Engineering & Data",
      sk6_desc: "Database administration, query optimization, indexing, and backup/restore contingency planning.",
      sk7_desc: "Object-Oriented Programming (OOP), layered service architecture, and robust backend business logic.",
      sk8_desc: "Building intuitive Single-Page Applications (SPA), component architecture, and reactive state management.",
      sk9_desc: "Designing and consuming secure RESTful APIs with asynchronous JSON payload handling.",
      sk10_desc: "Collaborative Git/GitHub version control workflows and clean modular system modeling.",
      skills_cat3_title: "Soft Skills & Mindset",
      skills_cat3_sub: "Professional Attributes",
      sk11_desc: "In-depth root cause analysis (RCA), methodical debugging, and lasting resolution design.",
      sk12_desc: "Continuous self-learning, quickly mastering new technologies, and agile business adaptation.",
      sk13_desc: "Effective inter-departmental collaboration and seamless teamwork with international strategic partners.",
      sk14_desc: "Translating complex technical concepts into clear, actionable guidance for business end-users.",

      tag_exp: "CAREER JOURNEY",
      title_exp: "Work Experience",
      sub_exp: "Proven track record supporting mission-critical enterprise software systems.",
      exp1_role: "System Support Specialist",
      exp1_company: "5S Software Solution Company",
      exp1_point1: "Directly accountable for the <strong>high stability of the DMS distribution system</strong> for nationwide distributor networks; teamed up with strategic partner <strong>Accenture</strong> to coordinate and resolve complex tickets via <strong>OTRS</strong>.",
      exp1_point2: "Handled user support requests via remote channels; provided swift issue resolution for headquarters (Admins, Supervisors) and field personnel (Sales reps), ensuring <strong>uninterrupted business operations</strong>.",
      exp1_point3: "Managed account provisioning, role authorizations, and system security integrity; synchronized operations across <strong>SAP</strong>, <strong>TMS</strong> (Transport), and <strong>WMS</strong> (Warehouse).",
      exp2_role: "IT Intern",
      exp2_company: "5S Software Solution Company",
      exp2_point1: "Contributed to Frontend UI development with <strong>Angular</strong>, designed and integrated <strong>RESTful APIs</strong> linking client views with Java backend.",
      exp2_point2: "Executed test cases, debugged application bottlenecks, and optimized web performance for fluid user experiences.",
      exp2_point3: "Designed relational database schemas with <strong>MySQL</strong> and maintained version control rigor via <strong>GitHub</strong>.",

      tag_edu: "ACADEMIC BACKGROUND",
      title_edu: "Education & Qualifications",
      edu_school: "FPT Polytechnic College",
      edu_major: "Major: Software Development",
      edu_desc: "Trained in hands-on industry-standard practices: Object-Oriented Programming (OOP), Data Structures & Algorithms, Systems Analysis and Design, Relational Databases (MySQL), Multi-tier Web Development (Java Spring Boot, Angular), and Agile/Scrum workflows.",

      tag_proj: "PORTFOLIO & PRODUCTS",
      title_proj: "Featured Projects",
      sub_proj: "Notable engineering solutions leveraging modern architectures and proven technologies.",
      proj1_type: "Web Application / Full-Stack",
      proj1_desc: "Full-featured real-time web messaging chat platform supporting instant messaging, user directories, modern UI, and secure API architecture.",
      btn_view_github: "View on GitHub",
      proj2_badge: "Enterprise System Architecture",
      proj2_type: "Enterprise Infrastructure / Case Study",
      proj2_title: "Nationwide DMS & SAP Coordination Model",
      proj2_desc: "Monitoring, operational maintenance, and data synchronization framework interconnecting DMS, SAP ERP, TMS (logistics), and WMS (warehousing).",
      btn_consult: "Discuss Architecture",
      proj_cta_text: "Discover more repositories and code samples on my GitHub profile:",

      tag_contact: "GET IN TOUCH",
      title_contact: "Contact Information",
      sub_contact: "Available for job opportunities, technical consulting, and enterprise systems collaboration.",
      contact_col_title: "Direct Channels",
      contact_col_desc: "Feel free to reach out via phone, email, or explore my GitHub profile. I will respond as soon as possible.",
      c_phone_label: "Phone / Zalo",
      c_email_label: "Email Address",
      c_addr_label: "Location",
      c_addr_val: "Tan Quoi Town, Binh Tan District, Vinh Long Province, Vietnam",
      c_github_label: "GitHub Profile",
      btn_download_cv_full: "Download Resume (CV PDF)",
      form_title: "Send Me a Message",
      form_subtitle: "Fill out the form below to get in touch directly.",
      form_lbl_name: "Your Full Name",
      form_lbl_email: "Your Email Address",
      form_lbl_subject: "Subject",
      form_lbl_message: "Message Content",
      btn_send_msg: "Send Message",

      footer_bio: "System Support Specialist — Committed to delivering stability, security, and sustained operational efficiency for enterprise technology infrastructures.",
      footer_links_title: "Quick Links",
      footer_social_title: "Connect Online",
      footer_copy: "All rights reserved. Optimized for GitHub Pages.",
      footer_motto: "Stability • Security • Efficiency",

      ph_name: "e.g., Alex Johnson",
      ph_email: "name@example.com",
      ph_subject: "e.g., Job Opportunity Discussion",
      ph_message: "Write your message here..."
    }
  };

  // ==========================================================================
  // 2. THEME (DARK / LIGHT MODE) MANAGER
  // ==========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlRoot = document.documentElement;

  // Determine initial theme: localStorage -> default to dark (Cyber Sapphire & Cyan)
  const savedTheme = localStorage.getItem('portfolio-theme');
  const initialTheme = savedTheme || 'dark';

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun theme-icon';
      themeToggle.setAttribute('title', 'Chuyển sang chế độ Sáng / Switch to Light Mode');
      themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      themeIcon.className = 'fa-solid fa-moon theme-icon';
      themeToggle.setAttribute('title', 'Chuyển sang chế độ Tối / Switch to Dark Mode');
      themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }

  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // Listen to OS theme changes if user has not explicitly chosen
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // ==========================================================================
  // 3. BILINGUAL (VI / EN) MANAGER
  // ==========================================================================
  const langToggle = document.getElementById('langToggle');
  const langFlag = document.getElementById('langFlag');
  const langText = document.getElementById('langText');
  const pageTitle = document.getElementById('pageTitle');

  let currentLang = localStorage.getItem('portfolio-lang') || 'vi';

  function applyLanguage(lang) {
    currentLang = lang;
    htmlRoot.setAttribute('lang', lang);
    localStorage.setItem('portfolio-lang', lang);

    const dict = translations[lang] || translations.vi;

    // Update document title
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update input placeholders
    const placeholders = document.querySelectorAll('[data-i18n-ph]');
    placeholders.forEach((input) => {
      const phKey = input.getAttribute('data-i18n-ph');
      if (dict[phKey]) {
        input.setAttribute('placeholder', dict[phKey]);
      }
    });

    // Update Language Button Indicator
    if (lang === 'vi') {
      langFlag.textContent = '🇻🇳';
      langText.textContent = 'VI';
      langToggle.setAttribute('title', 'Chuyển sang tiếng Anh (Switch to English)');
      langToggle.setAttribute('aria-label', 'Switch to English');
    } else {
      langFlag.textContent = '🇬🇧';
      langText.textContent = 'EN';
      langToggle.setAttribute('title', 'Chuyển sang tiếng Việt (Switch to Vietnamese)');
      langToggle.setAttribute('aria-label', 'Switch to Vietnamese');
    }
  }

  // Apply default or stored language
  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'vi' ? 'en' : 'vi';
    applyLanguage(nextLang);
  });

  // ==========================================================================
  // 4. STICKY HEADER & SCROLL SPY
  // ==========================================================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky header shadow
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll Spy: highlight active menu item
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ==========================================================================
  // 5. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function toggleMobileMenu() {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('open');
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  }

  navToggle.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      toggleMobileMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

  // ==========================================================================
  // 6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  // Immediately activate hero elements so above-the-fold content is always visible
  document.querySelectorAll('#hero .reveal').forEach((el) => {
    el.classList.add('active');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal once
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px 40px 0px'
      }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains('active')) {
        revealObserver.observe(el);
      }
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('active'));
  }

  // ==========================================================================
  // 7. BACK TO TOP BUTTON
  // ==========================================================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 8. CONTACT FORM HANDLER
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const btnSubmit = document.getElementById('btnSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('msgSubject').value.trim() || 'Liên hệ từ Website Portfolio';
      const message = document.getElementById('msgContent').value.trim();

      if (!name || !email || !message) {
        showAlert('Vui lòng điền đầy đủ các trường bắt buộc (*)', 'error');
        return;
      }

      // Format mailto link
      const myEmail = 'nguyenhongphuong.vn1@gmail.com';
      const fullSubject = encodeURIComponent(`[Portfolio] ${subject} - ${name}`);
      const fullBody = encodeURIComponent(
        `Xin chào Nguyễn Hồng Phương,\n\nTôi là: ${name}\nEmail liên hệ: ${email}\n\nNội dung lời nhắn:\n${message}\n\nTrân trọng,\n${name}`
      );

      const mailtoUrl = `mailto:${myEmail}?subject=${fullSubject}&body=${fullBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show friendly success confirmation
      const isVi = currentLang === 'vi';
      const successMsg = isVi
        ? `Cảm ơn <strong>${name}</strong>! Ứng dụng email của bạn đang được mở để gửi tin nhắn đến <strong>${myEmail}</strong>.`
        : `Thank you <strong>${name}</strong>! Your email client is opening to send the message to <strong>${myEmail}</strong>.`;

      showAlert(successMsg, 'success');
      contactForm.reset();
    });
  }

  function showAlert(msg, type) {
    formAlert.innerHTML = msg;
    formAlert.className = `form-alert ${type}`;
    formAlert.style.display = 'block';

    setTimeout(() => {
      formAlert.style.display = 'none';
    }, 9000);
  }

  // ==========================================================================
  // 9. INTERACTIVE FLUID NEON MOUSE SPOTLIGHT
  // ==========================================================================
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const spotlight = document.createElement('div');
    spotlight.className = 'mouse-spotlight';
    document.body.appendChild(spotlight);

    let mouseX = -1000, mouseY = -1000;
    let spotX = -1000, spotY = -1000;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    function renderSpotlight() {
      spotX += (mouseX - spotX) * 0.16;
      spotY += (mouseY - spotY) * 0.16;
      spotlight.style.transform = `translate3d(${spotX - 250}px, ${spotY - 250}px, 0)`;
      requestAnimationFrame(renderSpotlight);
    }
    requestAnimationFrame(renderSpotlight);
  }

});
