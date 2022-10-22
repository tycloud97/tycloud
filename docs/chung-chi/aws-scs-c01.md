# AWS Certified Security - Specialty

# Review quá trình thi chứng chỉ AWS Security Specialty

Đầu tiên, lý do mình chọn thi chứng chỉ này phần lớn là do được tặng một cái voucher 100% từ chương trình AWS Community Builder. (Anh em cố gắng chia sẻ kiến thức với mọi người, tới đợt AWS xét duyệt mình apply là sẽ được tham gia).
Mặc dù dự định ban đầu của mình là sẽ thi Data Analytics - Specialty, nhưng do một sự cố là mình làm lab xong quên xóa DynamoDB cấp phát 5000 WCU và Notebook (Legacy) nên bị AWS trừ 500$ credit nên mình thấy chứng chỉ này quá khó so với một người chưa từng làm Big Data như mình nên mình đành chuyển hướng.
Data Analytics sẽ hữu ích hơn với mình do công việc của mình là lập trình viên cũng thường xuyên phải trích xuất số liệu cho khách hàng xem nên cũng có hứng thú làm với những dịch vụ của AWS.
Security chỉ quay đi quẩn lại mấy cái dịch vụ đã học ở SAA nhưng lấy thêm 1 chứng chỉ nữa cho củng cố thêm kiến thức cũng không thừa. Giang hồ đồn đại Security là thứ nên bắt đầu đầu tiên (Step 0).
Các dịch vụ về phân tích dữ liệu lớn của AWS khá đắt đỏ nếu mình không có đủ kiến thức, kinh nghiệm và trải nghiệm thì sẽ tốn rất nhiều $ nữa để mình có thể theo đuổi bộ môn này.
Nên kinh nghiệm của mình là trước khi làm bài lab thì nên đọc hết cái CloudFormation của họ xem tạo cái gì trước đã rồi mới apply vào account của mình.
Theo nhiều ý kiến trên mạng thì chứng chỉ SCS-C01 là chứng chỉ dễ nhất ở cấp độ Specialty, theo mình nó dễ hơn SA Professional và khó hơn SA Associate một chút. Do chỉ tập trung vào các một số dịch vụ bảo mật của AWS.
Do đã có kiến thức từ các lần thi chứng chỉ trước nên lần này mình không phải học thêm nhiều dịch vụ nữa.
Chủ yếu vẫn dừng lại ở mức hiểu biết chứ không đi sâu vào cách triển khai như thế nào (Nếu bạn học chay hoặc chưa từng làm cũng không sao).

Các kiến thức mọi người nên nắm vì thường xuyên xuất hiện trong đề thi:

IAM
- Sharing role with External ID with other account
- IAM Policy syntax (Có mấy câu hỏi có chứa syntax bị sai nên phải để ý đọc kỹ)
- Bảo vệ account root, password, xóa access key, MFA.
- SCP, permission boundary
- Revoke access key khi có truy cập lạ hoặc phát hiện lộ access key
- Dùng Active Directory thì mình phải dùng IAM Role
CloudTrail
- Theo dõi hành vi của user, ví dụ kiểm tra xem account bị xâm nhập đã làm gì gần đây.
- Làm sao để kích hoạt Multi region, multi account.
- Làm sao để block được người dùng thay đổi trail.
- Integrity validation -> Làm sao để đảm bảo không có ai can thiệp vào log.
S3
- Hiểu được chế độ mã hóa, SSE-KMS, SSE-S3, SSE-C và Client Encryption cài đặt mặc định và yêu cầu mã hóa bằng Bucket policy.
KMS
- Hiểu về các loại key như AWS managed, customer managed, material key
- Thời hạn tối thiểu để xóa key là 7 ngày, nếu muốn xóa ngay lập tức thì dùng xóa material key
- Cơ chế rotate mã hóa, nếu dùng KMS thì không cần mã hóa lại dữ liệu cũ đã được encrypt.
- Mã hóa phong thư, data key là gì, cipher key là gì?
Macie
- Phát hiện lộ thông tin nhạy cảm trên S3.
CloudFront
- Khi cài đặt với ALB thì làm sao chặn truy cập tới ALB mà chỉ cho đi thông qua CloudFront?
- Dùng OI để chặn truy cập trực tiếp tới S3 mà không thông qua CDN
- Dùng ACM
AWS ELB
- Làm sao để không làm giảm độ trễ của hệ thống khi kết nối với EC2 -> Dùng NLB
VPC
- Phân biệt Security Group inbound và outbound
- Phân biệt Stateless và Stateful firewall.
- Hiểu về NACL, Route Table.
- NACL bắt buộc phải dùng dải IP, còn Security Group thì có thể chỉ dùng một SG khác làm nguồn
- Peering
Shield Advanced
- Chống DDOS
WAF
- Chống khai thác lỗ hổng SQL Injection, limit số lần gọi trên một khoảng thời gian để hạn chế việc DDOS.
Config
- Config remediate action với Lambda để revert thay đổi vi phạm tự động.
CloudWatch
- Điều tra tại sao không nhận được log -> Thiếu quyền hoặc ko có mạng
- Nếu yêu cầu tường lửa mà không tốn thêm phí thì dùng iptable hoặc tính năng của hệ điều hành.

Còn dịch vụ GuardDuty hay Security Hub mình chưa phân biệt được do chưa xài nhưng cơ bản thì GuardDuty sẽ scan log DNS, CloudTrail, Config còn Security Hub sẽ tập trung cảnh bảo của rất nhiều service để tiện quan sát. Biết vậy là đủ rồi.

Sau khi thi thì mình chưa có kết quả ngay mà phải đợi 24 tiếng (tính cả T7) mới có kết quả nên khá hồi hộp.

Thú thật việc thi chứng chỉ vẫn chỉ là động lực để mình cố gắng hơn trong chuyên môn. Rất nhiều thứ trong chứng chỉ này mình chưa từng trải nghiệm thực tế, thâm chí chưa bao giờ mò vào console để xem. (Ví dụ: CloudHSM, Private ACM 400$, KMS, WAF, Security Hub, GuardDuty...)
Mình thi hết 180 phút cho 65 câu và đạt được 834/1000 điểm.