---
outline: deep
---

# GGB 生成接口

Base URLs:

* https://www.gxxuetu.cn

POST /v2/ggb/genhtml

> Body 请求参数

类型 multipart/form-data
```json
  {
    "streaming": false,
    "question": "",
    "file": ""
  }
```

### 请求参数

| 名称          | 位置 | 类型       | 必选 | 中文名     | 说明 |
|--------------|------|------------|------|------------|------|
| body          | body | object     | 否   | 请求主体   | 整个请求的主体对象 |
| » question       | body | string     | 是   | 用户输入问题       | 用户输入内容 |
| » streaming       | body | boolean     | 否   | 是否流式，默认非流式       | 流式输出结果 |
| » callback      | body | string   | 否   | 回调地址 | 非流式输出时，为异步任务，通过传入的回调接口返回最终生成的课件链接 |
| » file      | body | string   | 否   | 题目图片Base64 | 题目中图片的 Base64 编码内容 |


> 请求示例
  ```
  curl -X 'POST' \
    'http://xxxxx/v2/ggb/genhtml' \                    
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \  
    -F 'question=勾股定理' \
    -F 'gile=@WechatIMG3231.jpg;type=image/jpeg'
  ```



### 字段说明表

| 字段名   | 类型   | 必选 | 示例值              | 中文名        | 说明 |
|----------|--------|------|---------------------|---------------|------|
| event    | string | 是   | `"gen_ggb:end"`     | 事件标识      | 流程事件标识字符串，如 `gen_ggb:end` 完成 |
| type     | string | 是   | `"success"`         | 返回状态      | 接口返回状态类型，`success` 表示成功， `info` 表示流式返回消息， `error` 表示失败 |
| msg      | string | 是   | `"生成的HTML结果..."` | 返回信息      | 生成结果的主要内容，如 HTML 文本、分析结论等 |

---

### 返回示例

> 200 Response

**成功示例：**
```json
{
    "event": "gen_ggb:end",
    "type": "success",
    "msg": "<div>错题分析完成，以下是练习册内容...</div>"
}
```

**错误示例：**
```json
{
    "event": "gen_ggb:end",
    "type": "error",
    "msg": "生成过程中发生错误：图片无法识别"
}
```


> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Response|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

### 返回数据结构

状态码 **200**


状态码 **422**

*HTTPValidationError*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|
|»» ValidationError|[ValidationError](#schemavalidationerror)|false|none|ValidationError|none|
|»»» loc|[anyOf]|true|none|Location|none|


