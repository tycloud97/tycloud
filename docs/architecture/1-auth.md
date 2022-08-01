---
sidebar_position: 1
---

# Auth

## Yêu cầu nghiệp vụ

- Login

## Authorization

Full permissions, sẽ xử lý Authorization bằng API Permission

## Authentication

- Sử dụng AWS Amplify (cung cấp UserPoolId, UserPoolClientId và IdentityPoolId), cần cài đặt Identity Pools
- Xác thực qua HTTP request và trả về JWT token
- Sử dụng SigV4 để Auth ở Internal (hỗ trợ CLI)


Lưu trữ dữ liệu định danh người dùng

Database DynamoDB với khả năng sync dữ liệu tới Cognito (1 chiều DynamoDB -> Cognito), nên lưu password dưới dạng hash để có khả năng khôi phục khi gặp sự cố, cần bảo mật kỹ càng password. Do không thể backup password trực tiếp từ Cognito.



- MFA
- Reset password
- Sign up

## Có khả năng tiếp tục khi gặp sự cố hoặc revert hoàn toàn nếu lỗi xảy ra để người dùng có thể tiếp tục đăng ký sau khi sự cố được khắc phục.

Nên phản hồi nhanh và bất đồng bộ nếu có thể và gửi mail thông báo xác nhận khi đã thành công tạo tài khoản.
Trường hợp lỗi phải thông báo tới người dùng trên UI để mời thử lại. (Consider sử dụng Step Functions)
Sử dụng cơ chế Single Tenant để quản lý tập trung (1 User Pool)


- Caching
Sử dụng Lambda Authorizer và đặt cache

Lược đồ:
React -> Cognito -> Token -> API Gateway -> API Backend
API -> Lambda Auth HTTP -> Token -> JWT Call API Backend

Nếu không biết password thì phải tạo script ở JS để capture password của người dùng.

Monitor:
Theo dõi log
Test automation e2e
 - Login
 - Reset
 - Reset