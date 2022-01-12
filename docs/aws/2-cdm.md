---
sidebar_position: 2
---

# Common Data Model

[GitHub - microsoft/CDM: The Common Data Model (CDM) is a standard and extensible collection of schemas (entities, attributes, relationships) that represents business concepts and activities with well-defined semantics, to facilitate data interoperability. Examples of entities include: Account, Contact, Lead, Opportunity, Product, etc.](https://github.com/microsoft/CDM)

## Mục đích

- Tăng tốc quá trình phát triển phần mềm

- Tận dụng lại các chức năng đi kèm theo thực thể (**Entity**) đã xây dựng với ít công sức

- Cung cấp cho khách hàng một cách để tương tác với hệ thống một cách linh hoạt do dữ liệu được tổ chức dưới dạng tổng quát (**Generic**)

- Có thể xem đây là lớp nền tảng để các lớp nghiệm vụ kế thừa và phát triển (Ví dụ: theo dõi sự thay đổi của Entity, audit logs)

## Thuật ngữ cơ bản

**Entity**:
Một thực thể bao gồm các thuộc tính và giá trị

**Entity Schema**:
Cung cấp hình dáng của các thực thể Entity và quan hệ giữa chúng
Định nghĩa các thuộc tính và các chứng năng đi kèm

**Attribute**: 
Tên biến và kiẻu dữ liệu

**Relation**:
Mối quan hệ giữa các entity

**Capability**:
Các chức năng mà Entity có

## Các phương pháp thiết kế

**CQRS**: Phân tách lớp đọc và ghi
**Event Sourcing**: Dễ dàng truy xét trạng thái từ các sự kiện thay đổi
