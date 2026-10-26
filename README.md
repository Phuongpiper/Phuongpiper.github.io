# Website Portfolio & Profile Cá Nhân - Nguyễn Hồng Phương

Website portfolio cá nhân dạng **Single-page Responsive**, được xây dựng bằng **HTML5, CSS3 và JavaScript thuần (Vanilla JS)**. Giao diện được thiết kế theo phong cách hiện đại, chuyên nghiệp, tông màu **Xanh Navy chủ đạo (`#243447`)** kết hợp trắng và xám nhạt, đồng bộ với phong cách CV chuyên viên hỗ trợ hệ thống.

---

## 🌟 Tính Năng Nổi Bật

- **Giao diện hiện đại & Tone màu Navy chuẩn CV:** Thiết kế chuẩn chuyên viên kỹ thuật hệ thống, bố cục trực quan, đường nét tinh tế, viền avatar bo tròn với hiệu ứng glow đặc trưng.
- **Hỗ trợ Dark Mode:** Chuyển đổi mượt mà giữa chế độ Sáng (Light) và Tối (Dark Navy), tự động nhận diện thiết lập hệ thống của người dùng và lưu lại trạng thái qua `localStorage`.
- **Hỗ trợ Song ngữ Việt - Anh (VI / EN):** Tích hợp sẵn bộ từ điển i18n chuyển đổi toàn bộ nội dung website từ tiếng Việt sang tiếng Anh chỉ bằng một nút bấm trên thanh điều hướng.
- **Thanh điều hướng cố định (Sticky Header) & ScrollSpy:** Tự động bắt vị trí cuộn và đổi trạng thái active theo từng section.
- **Hiệu ứng cuộn mượt (Scroll Reveal):** Các thẻ nội dung, timeline và card xuất hiện êm ái khi người dùng cuộn tới.
- **Responsive 100%:** Tối ưu hiển thị hoàn hảo trên mọi kích thước màn hình từ điện thoại di động, tablet đến màn hình desktop lớn.
- **Chuẩn SEO & Tối ưu tải trang:** Đầy đủ thẻ Meta SEO, OpenGraph Facebook, Twitter Card, Favicon và không phụ thuộc framework nặng nề, tốc độ tải tức thì.
- **Sẵn sàng cho GitHub Pages:** Cấu trúc file chuẩn tĩnh (`index.html`, `style.css`, `script.js`), đưa lên GitHub Pages chạy ngay lập tức mà không cần bất kỳ bước build phức tạp nào.

---

## 📁 Cấu Trúc Thư Mục

```text
Profile ca nhan/
├── index.html           # Cấu trúc HTML chính, ngữ nghĩa chuẩn SEO
├── style.css            # Toàn bộ CSS, biến màu Navy, Dark mode & Animation
├── script.js            # Logic Dark mode, Chuyển đổi ngôn ngữ VI/EN, ScrollSpy, Form
├── avatar.jpg           # Ảnh đại diện cá nhân (hình tròn viền Navy)
├── cv.pdf               # File CV cá nhân (được tải về khi bấm nút Tải CV)
├── README.md            # Tài liệu hướng dẫn sử dụng và triển khai
└── assets/
    └── chat-app.jpg     # Ảnh minh họa dự án Website Chat Messages
```

---

## 🚀 Hướng Dẫn Chạy Thử Trên Máy Tính (Local)

Bạn có thể chạy thử website ngay trên máy tính bằng một trong các cách sau:

### Cách 1: Mở trực tiếp (Đơn giản nhất)
- Nhấp đúp chuột vào file `index.html` để mở ngay trên trình duyệt (Chrome, Edge, Firefox,...).

### Cách 2: Dùng VS Code Live Server (Khuyên dùng)
1. Mở thư mục này bằng **Visual Studio Code**.
2. Cài đặt tiện ích mở rộng **Live Server** (của tác giả Ritwick Dey).
3. Nhấp chuột phải vào file `index.html` và chọn **"Open with Live Server"**.

### Cách 3: Dùng lệnh Node.js
Mở terminal tại thư mục này và gõ:
```bash
npx serve .
```
Sau đó truy cập đường dẫn xuất hiện trên màn hình (thường là `http://localhost:3000`).

---

## 🌐 Hướng Dẫn Đưa Website Lên GitHub Pages (Miễn Phí)

Bạn có thể xuất bản website trực tuyến miễn phí trọn đời bằng **GitHub Pages** theo các bước sau:

### Bước 1: Khởi tạo Git và Commit mã nguồn
Mở terminal (PowerShell hoặc Git Bash) tại thư mục `Profile ca nhan` và chạy:
```bash
git init
git add .
git commit -m "Khoi tao website portfolio Nguyen Hong Phuong"
```

### Bước 2: Tạo Repository mới trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new) và đăng nhập vào tài khoản của bạn (`Phuongpiper`).
2. Đặt tên Repository:
   - **Cách A (Khuyên dùng - Tên miền dạng `username.github.io`):**  
     Đặt tên Repository là: `Phuongpiper.github.io`  
     *(Website sau khi tạo sẽ có link cực đẹp: `https://phuongpiper.github.io`)*
   - **Cách B (Đặt tên tự chọn):**  
     Đặt tên ví dụ: `portfolio` hoặc `profile`  
     *(Website sẽ có link dạng: `https://phuongpiper.github.io/portfolio`)*
3. Chọn chế độ: **Public**.
4. **Không** tích chọn *"Add a README file"* (vì ta đã có sẵn file ở máy).
5. Bấm nút **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub
Sao chép các lệnh mà GitHub hiển thị và chạy trong terminal của bạn:
```bash
# Đổi tên nhánh chính thành main
git branch -M main

# Thêm remote trỏ tới repository vừa tạo (thay URL bên dưới nếu dùng tên repo khác)
git remote add origin https://github.com/Phuongpiper/Phuongpiper.github.io.git

# Đẩy code lên
git push -u origin main
```

### Bước 4: Kích hoạt GitHub Pages
1. Tại trang Repository trên GitHub, vào tab **Settings** (Cài đặt).
2. Ở thanh bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.
   - **Branch:** Chọn `main` và thư mục `/(root)`.
   - Bấm nút **Save**.
4. Chờ khoảng 1 - 2 phút để GitHub xử lý. Sau đó, tại trang Pages này sẽ hiển thị thông báo:  
   `Your site is live at https://phuongpiper.github.io/`

---

## 🏷️ Hướng Dẫn Gắn Tên Miền Riêng (Custom Domain)

Nếu bạn muốn website có tên miền riêng chuyên nghiệp (ví dụ: `nguyenhongphuong.com` hoặc `phuongit.dev`):

### Bước 1: Mua tên miền
Bạn có thể đăng ký tên miền tại Tenten, PA Việt Nam, Mat Bao, Namecheap, GoDaddy hoặc Cloudflare.

### Bước 2: Cấu hình DNS tại nhà cung cấp tên miền
Đăng nhập vào trang quản trị tên miền của bạn và thêm các bản ghi DNS sau:
- **Bản ghi A (Trỏ tên miền chính `@` về các IP của GitHub):**
  - Type: `A` | Host: `@` | Value: `185.199.108.153`
  - Type: `A` | Host: `@` | Value: `185.199.109.153`
  - Type: `A` | Host: `@` | Value: `185.199.110.153`
  - Type: `A` | Host: `@` | Value: `185.199.111.153`
- **Bản ghi CNAME (Dành cho `www`):**
  - Type: `CNAME` | Host: `www` | Value: `Phuongpiper.github.io`

### Bước 3: Cấu hình tên miền trên GitHub
1. Vào **Settings** > **Pages** trên Repository GitHub của bạn.
2. Tại mục **Custom domain**, nhập tên miền của bạn (ví dụ: `nguyenhongphuong.com`) và bấm **Save**.
3. GitHub sẽ tự động tạo file `CNAME` trong repository của bạn.
4. Tích chọn vào ô **Enforce HTTPS** để kích hoạt chứng chỉ SSL bảo mật miễn phí.

---

## 🛠️ Hướng Dẫn Tùy Biến & Chỉnh Sửa Nội Dung

### 1. Thay đổi Ảnh đại diện
- Chuẩn bị ảnh chân dung của bạn, đổi tên file thành `avatar.jpg` và chép đè vào thư mục gốc `Profile ca nhan/`.
- Website sẽ tự động áp dụng và hiển thị ảnh chân dung bo tròn cùng viền Navy.

### 2. Cập nhật File CV PDF
- Xuất file CV của bạn thành định dạng PDF, đổi tên thành `cv.pdf` và chép đè vào thư mục gốc.
- Khi người dùng bấm nút **"Tải CV (PDF)"**, trình duyệt sẽ tải đúng file CV mới nhất này về máy.

### 3. Thêm Dự Án Mới
Trong file `index.html`, tìm đến phần `<!-- 7. DỰ ÁN (PROJECTS) -->`. Trong mã nguồn đã có sẵn đoạn khung mẫu được chú thích:
```html
<article class="project-card reveal reveal-up">
  <div class="project-thumb">
    <img src="assets/ten-anh-moi.jpg" alt="Tên dự án mới">
    <div class="project-overlay">
      <a href="https://github.com/Phuongpiper/ten-repo" target="_blank" class="overlay-btn">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </div>

  <div class="project-info">
    <div class="project-category">Ứng dụng Web / System</div>
    <h3 class="project-title">Tên Dự Án Của Bạn</h3>
    <p class="project-desc">Mô tả ngắn gọn về bài toán giải quyết và giá trị mang lại.</p>

    <div class="project-tech-stack">
      <span class="tech-tag">Java</span>
      <span class="tech-tag">Angular</span>
      <span class="tech-tag">MySQL</span>
    </div>

    <div class="project-links">
      <a href="https://github.com/Phuongpiper/..." target="_blank" class="btn-project-link">
        <i class="fa-brands fa-github"></i>
        <span>Xem trên GitHub</span>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </div>
</article>
```
Chỉ cần sao chép đoạn trên, dán vào bên dưới dự án hiện tại và thay thế nội dung là hoàn thành!

### 4. Nhận Tin Nhắn Qua Hòm Thư Bằng Formspree (Tùy Chọn Miễn Phí)
Hiện tại, form liên hệ sẽ tự động mở ứng dụng gửi mail (`mailto:nguyenhongphuong.vn1@gmail.com`) với đầy đủ tiêu đề và nội dung được điền sẵn.
Nếu bạn muốn tin nhắn gửi trực tiếp âm thầm về email mà không cần người dùng mở ứng dụng mail:
1. Đăng ký tài khoản miễn phí tại [https://formspree.io](https://formspree.io).
2. Tạo một Form mới với email nhận là `nguyenhongphuong.vn1@gmail.com`.
3. Bạn sẽ nhận được 1 đường dẫn Endpoint dạng `https://formspree.io/f/xv...`.
4. Trong file `index.html`, sửa thẻ form thành:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/MÃ_CỦA_BẠN" method="POST">
   ```

### 5. Cập nhật Nội Dung Song Ngữ
Nếu bạn muốn thay đổi bất kỳ câu từ nào khi người dùng chuyển sang tiếng Anh hoặc tiếng Việt, hãy mở file `script.js` và cập nhật trong đối tượng `const translations = { vi: { ... }, en: { ... } }`.

---

## 📞 Thông Tin Liên Hệ

- **Họ và tên:** Nguyễn Hồng Phương
- **Chức danh:** Chuyên viên Hỗ trợ Hệ thống (System Support Specialist)
- **Điện thoại:** 0788 726 707
- **Email:** [nguyenhongphuong.vn1@gmail.com](mailto:nguyenhongphuong.vn1@gmail.com)
- **Địa chỉ:** Thị trấn Tân Quới, huyện Bình Tân, tỉnh Vĩnh Long
- **GitHub:** [https://github.com/Phuongpiper](https://github.com/Phuongpiper)

---
*Chúc bạn có một website portfolio ấn tượng, chuyên nghiệp và gặt hái nhiều cơ hội phát triển sự nghiệp rực rỡ!*
