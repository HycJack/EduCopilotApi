---
outline: deep
---

# GGB 生成接口

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:


**请求方式**: GET

**URL**: `/api/user`

**参数**:
- `id` (string, 必填): 用户ID

**响应**:
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
