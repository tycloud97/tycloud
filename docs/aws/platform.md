---
sidebar_position: 3
---
# The 5 Pillars of the AWS Well-Architected Framework

## Operational Excellence

Ở trụ cột hoạt động xuất sắc, yêu cầu những phương diện về sự tin cậy.

- Xác định rõ ràng quy trình phản ứng khi có sự cố , bao gồm cách trao đặc quyền cho người ứng phó khi có sự cố, sổ tay ứng phó với sự cố, thông báo điều động con người khi có sự cố.
- Tạo một kênh trao đổi thông tin khi có sự cố (Ví dụ: Slack)
- Phân tích sau khi xử lý sự cố và kinh nghiệm rút ra.
- Gia tăng hệ thống giám sát để phòng ngừa sự cố tái diễn

## Security

Trụ cột bảo mật bao gồm các yếu tố liên quan đến bảo mật trong Cloud và bộ công cụ mở rộng xung quanh nó.

- Theo dõi cấu hình tài nguyên thường xuyên để phát hiện rò rỉ thông tin
- Xác định dựa trên vai trò (Role) trên môi trường (Ví dụ: nhà phát triển không được xóa database trên môi trường production)
- Tách biệt môi trường phát triển và môi trường sản phẩm rõ ràng để phòng ngừa rủi ro.
- Mã dữ liệu của người dùng (mã hóa trên đường truyền và trạng thái nghỉ)
- Hạn chế bề mặt tiếp xúc có thể bị tấn công.
- Hệ thống tự động phản ứng khi có sự cố (Ví dụ: tự động thông báo Slack khi phát hiện đăng nhập bằng account root)

## Reliability

Trụ cột độ tin cậy bao gồm các khía cạnh xung quanh việc giảm thiểu gián đoạn dịch vụ, cung cấp khả năng khôi phục nhanh chóng và xác định các lỗi tiềm ẩn trước khi chúng xảy ra.

- Xác định chiến lược sao lưu và phục hồi
- Mô phỏng các hợp trường hợp khủng hoảng để kiểm tra quá trình khôi phục hoạt động và thời gian cần thiết để xử lý sự cố có thể xảy ra. Đảm bảo rằng backup có thể thực sự hoạt động. (Không nên thực hiện ở môi trường sản phẩm)
- Xác định các điểm tắc nghẽn về khả năng mở rộng kiến trúc tiềm năng

## Performance Efficiency

Trụ cột về hiệu suất hoạt động bao gồm khả năng sử dụng nền tảng AWS một cách hiệu quả bất kể tải hệ thống và có thể đưa sản phẩm ra thị trường trong khoảng thời gian ít nhất có thể.

- Tích hợp với công cụ phân tích mã/chất lượng mã như SonarCloud
- Xem lại chính sách bộ nhớ đệm AWS CloudFront
- Chuẩn hóa các phương pháp hay nhất cho cấu trúc CI/CD pipeline
- Ứng dụng DevSecOps trên CI/CD pipeline (Ví dụ: phát hiện rò rỉ mật khẩu trong source code)
- Đảm bảo sự động nhất của CI/CD pipeline (Các repository tương tự đều tham chiếu chung cấu hình pipeline)
- Điều tra và ủng hộ việc áp dụng các dịch vụ mới

## Cost Optimization

Trụ cột tối ưu hóa chi phí bao gồm khả năng tránh hoặc loại bỏ chi phí không cần thiết hoặc các nguồn lực dưới mức tối ưu.

- Hiển thị chi phí bằng cách triển khai cài đặt ngân sách cho mỗi tài khoản
- Cung cấp tích hợp cảnh báo ngân sách với Slack
- Cung cấp các phương tiện xác định các nguồn lực chưa được sử dụng
- Cung cấp các phương tiện để 'tắt đèn' vào cuối ngày làm việc hoặc khi không sử dụng tới.
- Đảm bảo sử dụng và phạm vi phù hợp cho các Kế hoạch Tiết kiệm (Savings Plans)

## Các tác vụ liên quan tới nền tảng.

- Giúp các nhà phát triển mới bắt đầu nhanh
- Đào tạo và chia sẻ kỹ thuật
- Quản lý mạng lưới
- Quản lý AWS Account
- Quản lý định tuyển Route53
- Tag và naming convention cho tai nguyên AWS (Tham khảo: https://confluence.huit.harvard.edu/pages/viewpage.action?pageId=40576020)
- Cung cấp sớm sự cố vấn và thảo luận về kiến trúc phần mềm cho đội phát triển
- Nâng cấp phiên bản AWS Service, tạo lập các công cụ để tối ưu hóa năng suất.
- Cung cấp kiến trúc tham khảo và khuôn mẫu (AWS Refarch)
- Triển khai 5 (hoặc 6) trụ cột của AWS Well Architected để nâng cao chất lượng dự án.