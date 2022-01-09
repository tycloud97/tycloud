---
sidebar_position: 3
---

# Fargate

Được nhấn mạnh là “Serverless” nên nó hoạt động theo cách tương tự Lambda. Đó là chúng ta sẽ không cần phải quan tâm tới việc quản lý tài nguyên hệ thống và HĐH nên sẽ phù hợp cho những ứng dụng container hóa (Docker, K8S).

## Tại sao chúng ta phải sử dụng Fargate nếu đã có Lambda?

Bởi vì giới hạn của Lambda đó chính là thời gian thực thị không thể lớn hơn 15 phút. Nên chúng ta có thể sử dụng Fargate cho những ứng dụng cần khả năng hoạt động liên tục thời gian dài và không bị gián đoạn. Ví dụ: Batch, Database…


