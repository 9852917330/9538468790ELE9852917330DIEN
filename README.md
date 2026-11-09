# Điện dân dụng — Bản 1.0

Website học điện dân dụng từ số 0, bằng tiếng Việt, không cần tài khoản.

## Nội dung
- 30 bài học / 6 phần có nội dung thực tế và sơ đồ vector riêng cho mỗi bài.
- Giải thích nguyên lý, nhận diện rủi ro, tình huống và câu hỏi cuối bài.
- Mục lục, bản đồ kiến thức, tìm kiếm toàn chương trình, từ điển 42 thuật ngữ.
- Công cụ tính dòng điện và điện năng; mô phỏng hai đèn hoạt động độc lập.
- Lưu tiến độ, dấu trang, câu trả lời và ghi chú trong trình duyệt; hỗ trợ xuất/nhập dữ liệu.
- Giao diện di động và desktop, chế độ sáng/tối.
- PWA offline sau khi được cài qua HTTPS và tải các tài nguyên lần đầu.

## Cách sử dụng nhanh nhất
1. Mở tệp **Dien_dan_dung.html** bản một tệp riêng (được gửi kèm ngoài ZIP) bằng Chrome, Edge hoặc Safari. Không cần cài đặt. Lưu ý lưu tiến độ khi mở `file://` phụ thuộc chính sách từng trình duyệt.
2. Nếu muốn một địa chỉ web công khai và cài PWA, dùng toàn bộ nội dung trong ZIP này, **giữ nguyên cấu trúc tệp**, đưa lên dịch vụ hosting tĩnh như GitHub Pages, Cloudflare Pages hoặc Netlify. Phải dùng HTTPS cho service worker và chức năng cài PWA.
3. Nếu đã có repository GitHub, giải nén ZIP, đưa nội dung bên trong lên gốc repository, bật **Settings → Pages → Deploy from a branch → main / (root)**. GitHub Pages có thể cần vài phút để cập nhật.

## Tệp chính
- `index.html` — điểm vào trang web
- `styles.css` — giao diện
- `data.js` — 30 bài học và từ điển
- `diagrams.js` — 30 hình SVG khái niệm
- `app.js` — điều hướng, tra cứu, lưu tiến độ, tương tác
- `manifest.webmanifest`, `service-worker.js`, `assets/` — PWA, icon và offline

## An toàn
Các sơ đồ là minh họa nguyên lý, không phải hồ sơ thiết kế hoặc sơ đồ đấu dây thi công. Không được thử điện trên nguồn 220 V, sử dụng dây màu để đoán chức năng hoặc bỏ qua quy trình cách ly và xác nhận mất điện. Công việc liên quan dây điện cố định cần được huấn luyện và kiểm tra bởi người có năng lực phù hợp.

## Ghi chú bản quyền
Sơ đồ minh họa được vẽ bằng SVG trong mã nguồn, không phụ thuộc ảnh bên ngoài; website tự hoạt động offline. Liên kết nguồn chuyên môn trong mục Cài đặt chỉ phục vụ tra cứu.
