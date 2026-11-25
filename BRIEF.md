# GÔM — Brief chung cho 8 bản thử phong cách

Mỗi phong cách là **một trang chủ tĩnh độc lập** (HTML + CSS + JS thuần, không framework, không build) trong thư mục riêng `NN-ten-phong-cach/` gồm `index.html`, `styles.css`, `app.js`.

## Ràng buộc kỹ thuật
- Đường dẫn ảnh dùng **tương đối** `../assets/...` (thư mục dùng chung, KHÔNG sao chép ảnh vào thư mục phong cách, KHÔNG sửa thư mục `assets/` hay thư mục phong cách khác).
- Được dùng Google Fonts (phải hỗ trợ tiếng Việt: Be Vietnam Pro, Playfair Display, Lora, Fraunces, Noto Serif, Inter, Space Grotesk, DM Serif Display, Bricolage Grotesque, Archivo, ...). Không dùng thư viện JS ngoài.
- Responsive đủ cho desktop `1280px` và mobile `375px`, **không tràn ngang**, tôn trọng `prefers-reduced-motion`.
- **Chữ phải rõ ràng, nhất quán**: dùng thang cỡ chữ có kỷ luật (biến CSS), chữ nội dung ≥ 15–16px, nhãn nhỏ ≥ 12px, tương phản tốt (chữ trên ảnh phải có lớp phủ). Người dùng đã phàn nàn bản trước "chữ to chữ nhỏ, chưa rõ ràng".
- Có liên kết nhỏ cố định "← Các phong cách" trỏ về `../index.html` (góc dưới trái hoặc nơi không che nội dung).
- Toàn bộ nội dung tiếng Việt, đúng giọng GÔM.

## Thương hiệu GÔM
- Nhà hàng ẩm thực miền Trung tại **25 Lê Hồng Phong, Hải Châu, Đà Nẵng**, mở **8AM – 10PM**. Hotline: "Sắp cập nhật".
- Slogan: **"Gôm về bên nhau. Quây tròn bữa ăn vui."** · Tinh thần: **ĐẬM trong hương vị — TƯƠI trong nguyên liệu — VUI trong trải nghiệm**.
- Giọng văn: ấm áp, mộc mạc, thân tình miền Trung, hay dùng "hè", "chi", "gôm". Ví dụ: "Ăn chi hè?", "Gôm đủ người, mình gặp nhau hè!", "Hôm nay đi mấy người, ăn mâm chi hè?", "Một tiếng gọi thân thương", "Món ngon đặt giữa bàn, câu chuyện nối câu chuyện".
- Câu chuyện tên: người miền Trung gọi nhau bằng tiếng "gôm" mộc mạc — có khách thì thêm đôi đũa, có món ngon thì gắp cho nhau miếng đầu tiên.
- Tính năng đặc trưng: **Bốc mâm ngẫu nhiên** (chọn 1–20 người, quay bàn ra gợi ý mâm món) và mini-game **Dino nói từ giọng Quảng Nam**. Có **đặt bàn**.
- Thực đơn 44 món, 7 nhóm: Món địa phương, Gỏi & Rau, Món hải sản, Món thịt, Canh & Lẩu, Cơm, Tráng miệng & Nước.
- Màu gốc: đỏ sơn mài `#851923`, đỏ thẫm `#68121a`, vàng đồng `#d4b273`, kem `#f4ead6`, nâu mực `#40241e`. Mỗi phong cách được biến tấu bảng màu cho hợp phong cách nhưng phải nhận ra là GÔM.

## Tài sản dùng chung (`../assets/`)
- `wordmark-header.webp` (chữ GÔM màu kem/vàng, nền trong suốt), `gom-mark-small.webp` (biểu tượng tròn), `rooster-card.webp` (gà Đông Hồ), `dino-card.webp`, `chili-card.webp`, `gom-map-danang.svg` (bản đồ minh họa).
- `photos/`: `gathering.webp` (mâm ăn quây quần), `garden.webp` (lối đi xanh), `drinks.webp`, `coffee-together.webp`, `coffee-roasting.mp4` + `coffee-roasting-poster.jpg` (video rang cà phê), `01-89190164.webp` … `12-88af7984.webp` (ảnh không khí/không gian tạm).
- `dishes/` (44 ảnh minh họa món, nền trong suốt, dạng tranh vẽ món trên đĩa): `banh-xeo-hau-pho-mai`, `banh-xeo-hai-san`, `banh-xeo-truyen-thong`, `cao-lau-hoi-an`, `mi-quang-phu-chiem`, `bun-bo-hue`, `pho-bo`, `banh-mi-thit-nuong`, `banh-trang-dai-loc`, `xien-nuong-hoi-an`, `nem-lui-cuon`, `bo-la-lot-cuon`, `cha-ram-tom-dat`, `goi-xoai-hai-san-dua-nuoc`, `goi-buoi-tom-muc-dua-nuoc`, `goi-ngo-sen-hue`, `rau-muong-xao-oc-mong-tay`, `tom-sot-bo-toi`, `muc-nuong-sa-te`, `hau-nuong-pho-mai`, `so-diep-nuong-pho-mai`, `oc-huong-sot-trung-muoi`, `hai-san-sot-bo-toi`, `ca-bop-kho-tieu`, `suon-heo-nuong`, `ba-chi-heo-nuong`, `canh-ga-nuong-xien-ga`, `ngu-qua-luoc-kho-quet`, `canh-chua-ca`, `canh-rau-tom`, `canh-khe-ca-dia`, `ga-ham-sam-dua-nuoc`, `hai-san-ham-sam-ngoc-linh`, `lau-hai-san-cu-lao-cham`, `com-nieu`, `com-trang`, `com-ruoc-hue-nhieu-mau`, `com-chien-dua-hai-san`, `com-chien-trai-dua`, `banh-xu-xe-hoi-an`, `che-sen-dua-nuoc`, `flan-dua-non`, `ruou-hong-dao`, `tra-sam-dua-thao-moc` (đuôi `.webp`).

## Nội dung tối thiểu mỗi trang chủ phải có
Header/điều hướng (Thực đơn · Chuyện GÔM · Chơi cùng GÔM · Ghé GÔM + nút Đặt bàn) → Hero → Giới thiệu "gôm" → Món tiêu biểu / Thực đơn → Bốc mâm hoặc trò chơi → Ghé GÔM (địa chỉ, giờ) + đặt bàn → Footer. Cách sắp xếp, điều hướng và tương tác phải **thể hiện rõ đặc trưng phong cách**, không chỉ đổi màu.
