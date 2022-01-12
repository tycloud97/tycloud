---
sidebar_position: 9
---

# Event Bus

## Khái niệm

- Cung cấp cách tương tác thứ 3 ra bên ngoài

- Cho phép bên thứ 3 có thể theo đõi sự thay đổi

## Cách cấu hình hoạt động

- Bất kỳ dịch vụ nào muốn publish một sự kiện cho dịch vụ webhooks, phải

có một bus sự kiện đã được tạo

- Nơi xuất bản các sự kiện lên tạo cấu hình trong AWS SSM Parameter Store với quy ước sau:`/webhook_events/${stage}/{eventName}`
  Ví dụ:` /webhook_events/prod/customer_request_create`

```
{
  "eventName": "customer_request_created"
  "eventBus": "event_bus_name/ARN", 
  "eventSource": "event source in the event bus",
  "eventDetailType": "event detail in the event bus"
}
```

- Bắt đầu xuất bản các sự kiện lên EventBus của riêng nó
* Bất kỳ consumer nào muốn sử dụng webhooks, phải:

* Chuyển đến giao diện người dùng Webhook và chọn sự kiện mà họ muốn định cấu hình

* Giao diện người dùng Webhook sẽ gọi dịch vụ webhooks-config để quản lý webhooks (tạo, xóa, cập nhật, bật / tắt, v.v.)

* Dịch vụ webhooks-config sẽ quản lý cấu hình dưới dạng Quy tắc sự kiện dưới bus sự kiện của nhà xuất bản
  
  * Ví dụ: PUT / webhooks / $ {orgId} / configs / {configId} sẽ tạo Quy tắc mới cho EventBus đã được định cấu hình cho sự kiện này.

## Cách vận hành

* Bây giờ mọi thứ đã ở đúng vị trí

* Giờ đây, bất cứ lúc nào nhà xuất bản sẽ xuất bản một sự kiện lên EventBus của chính họ, EventBus sẽ gọi ra Quy tắc mà chúng tôi đã tạo trước đó và thực hiện theo nó:

* Nó sẽ lọc tải trọng của sự kiện: đích API bị vô hiệu hóa / lọc trong EventRule không vượt qua / v.v.

* Nó sẽ xác thực theo cấu hình đã đặt

* Nó sẽ gửi trọng tải đến URL webhook đã được định cấu hình.

* Trong trường hợp không thành công, nó sẽ thử lại trong 24 giờ tới để gửi trọng tải sự kiện đến webhook. Mỗi lần có một lỗi khác trên cùng một sự kiện, sẽ mất nhiều thời gian hơn cho đến lần thử lại tiếp theo (hay còn gọi là lùi theo cấp số nhân).

* Trong trường hợp không thể phân phối sự kiện trong khoảng thời gian của 24 giờ đó, sự kiện sẽ được định cấu hình trên Hàng đợi DL, được triển khai bởi dịch vụ webhook.

* Bất kỳ lỗi nào sẽ được lưu trữ trong hàng đợi DL đó, tối đa là 14 ngày. Sau đó, chúng tôi có thể thử lại những lỗi đó sau đó hoặc xây dựng giao diện người dùng ưa thích để hiển thị chúng.