Fortify:
What?
    - Sản phẩm của microfocus và HP
    - Có 2 sản phẩm nổi bật
        - Fortify Static Code Analyzer: Phân tích source code tĩnh tương tự SonarQueue, có thể cài đặt ở On-premise
        - Fortify on Demand: Giải pháp SAAS trên nền tảng web do Fortify quản lý, nâng cao hơn so với Fortify SCA, hỗ trợ quét mã nguồn (SAST) và scan tìm lỗi bảo mật bằng URL (DAST)
    - Hỗ trợ 22 ngôn ngữ lập trình (Có bao gồm IAC)
    - Cung cấp report khả năng tuân thủ theo các tiêu chuẩn: PCI DSS Compliance (Application Security Requirements), OWASP Top 10, OWASP Mobile Top 10, FISMA Compliance: FIPS 200, DISA STIG, CWE/SANS Top 25
How?
    - Cả 2 đều có thể tích hợp thông qua plugin của Jenkins
    - Fortify on Demand có thể upload trực tiếp source code để scan.
    - Fortify Static Code Analyzer cần cài đặt
        - 1 máy chủ Fortify SCA Translation để chạy lệnh sourceanalyzer, nhằm convert sang định dạng mà Fortify hỗ trợ.
        - 1 máy chủ Fortify SCA Scanning làm nhiệm vụ quét.
        - 1 máy chủ quản trị tập trung và Database cho FORTIFY SOFTWARE SECURITY CENTER (UI).
        - Có thể tích hợp IDE với Foritfy IDE-plugin
Cost?
    - Fortify Static Code Analyzer không cho dùng thử, chi phí không được hãng công bố và cần connect với sale
    - Fortify on Demand cho phép dùng thử giao diện portal, giá tham khảo https://aws.amazon.com/marketplace/pp/prodview-mmgtuyay3hhmk
    - Giá siêu đắt.
Why?
    - 10 năm liên tiếp trong nhóm Top Leader Gartner
    - Được hầu hết các tổ chức lớn trên thế giới (Foutune 500) ở các lĩnh vựa lựa chọn sử dụng



Snyk:
What?
    - Chỉ hỗ trợ dạng SAAS trên web.
    - Hỗ trợ đầy đủ quét SAST, SCA, Container, IAC và Cloud (Các tính năng khá tương đồng với Fortify)
    - Synk hỗ trợ các tiêu chuẩn như PCI, SOC 2, and ISO compliance https://snyk.io/platform/compliance/
    - Mặc định data center chọn ở US, không có JP (USA (default), EU (Germany, Frankfurt), AUS (Australia))
    
How?
    - Snyk hỗ trợ có thông qua IDE-plugin hoặc CI/CD phổ biến như Jenkins (https://docs.snyk.io/integrations/ci-cd-integrations/jenkins-integration-overview)
    - Snyk sử dụng cơ sở dữ liệu lỗ hổng riêng do Snyk phát triển (Open Source Vulnerability Database)
    - Snyk Open Source - supported languages and package managers (https://docs.snyk.io/scan-application-code/snyk-open-source/snyk-open-source-supported-languages-and-package-managers)
Cost?
    - Có cho dùng thử miễn phí.
    - Giá khoảng 79$ mỗi tháng cho mỗi tài khoản. (https://snyk.io/plans/)
Why?
    - Dễ dàng tích hợp, nổi tiếng và được nhiều khách hàng lựa chọn (Theo Gartner)

tfsec
What?
    - Sản phẩm của Aqua Security
    - tfsec là công cụ chạy ở local và không yêu cầu ra internet
    - Các rule mà tfsec hỗ trợ (https://aquasecurity.github.io/tfsec/v1.28.1/checks/aws/api-gateway/enable-access-logging/)
Cost?
    - Free
How?
    - Chạy trực tiếp trên cmd hoặc CI/CD đều được.
Why?
    - Dễ dàng phát hiện những lỗi phổ biến với Terraform, dễ dàng tích hợp với IDE và được sử dụng phổ biến.
    