---
outline: deep
---

# 试卷分析接口

Base URLs:

* https://www.gxxuetu.cn


## GET 获取年级和课程信息

GET /v2/config/grade_ifno

> 返回示例

> 200 Response

```json
[
  {
    "grade": "初中",
    "subjects": [
      "数学",
      "物理",
      "化学",
      "生物"
    ]
  },
  {
    "grade": "高中",
    "subjects": [
      "数学",
      "物理",
      "化学",
      "生物"
    ]
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Response|Inline|

### 响应数据结构
| 参数名   | 类型   | 可选值示例                   | 说明             |
|----------|--------|------------------------------|------------------|
| grade    | string | 初中 / 高中                   | 题目所属年级段   |
| subject  | string | 数学 / 物理 / 化学 / 生物     | 题目所属学科     |


## POST 一键分析接口

POST /v2/questions/analysis

> Body 请求参数

类型 multipart/form-data
```json
  {
    "grade": "",
    "subject": "",
    "image_urls": [],
    "images": ""
  }
```

### 请求参数

| 名称         | 位置 | 类型       | 必选 | 中文名     | 说明 |
|--------------|------|------------|------|------------|------|
| body         | body | object     | 否   | 请求主体   | 整个请求的主体对象 |
| » grade      | body | string     | 是   | 年级       | 指定试题所属的年级段，例如“初中”或“高中” |
| » subject    | body | string     | 是   | 学科       | 指定试题所属学科，例如“数学”“物理”“化学”“生物” |
| » image_urls | body | [string]   | 否   | 题目图片URL | 题目中图片的在线链接，`image_urls` 和 `images` 二选一，如果同时存在，则以 `images` 为准 |
| » images     | body | [string]   | 否   | 题目图片Base64 | 题目中图片的 Base64 编码内容，`image_urls` 和 `images` 二选一，如果同时存在，则以 `images` 为准 |


> 请求示例
  ```
  curl -X 'POST' \
    'http://xxxxx/v2/questions/analysis' \                    
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \  
    -F 'grade=高中' \
    -F 'subject=数学' \  
    -F 'image_urls=' \
    -F 'images=@WechatIMG3231.jpg;type=image/jpeg'
  ```

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "Success",
  "data": {
    "analysis": {
      "weak_points": [
        {
          "weak_point_name": "椭圆的标准方程",
          "data": [
            {
              "weak_point_detail": "根据a、b、c求椭圆标准方程",
              "num": [
                1
              ],
              "percent": "100%"
            }
          ]
        }
      ],
      "advice": "整体情况来看，你在根据a、b、c求椭圆标准方程这个知识点上还有待提高。\n\n问题主要集中在：根据a、b、c求椭圆标准方程（100%）。\n\n需要做的练习：我会给你这个错题的相似练习题，重点是求椭圆标准方程的练习，其他可以简单看看。\n\n其他：像这类题目，我们之后会复习到，积极听课，听课是最重要的！听完再去练题！相信你通过努力一定能掌握这个知识点。加油！",
      "recommend": [
        {
          "text": "题目下载",
          "url": "http://xxxxx/v2/questions/download/doc/109ab915-8578-47e4-86db-636c1245f7c8.pdf"    
        }
      ]
    },
    "files": [
      {
        "url": "http://xxxxx/v2/questions/img/WechatIMG3231.jpg",
        "qus_figure": [
          {
            "fig_location": {
              "points": [
                {
                  "x": 19,
                  "y": 17
                },
                {
                  "x": 1336,
                  "y": 30
                },
                {
                  "x": 1336,
                  "y": 485
                },
                {
                  "x": 0,
                  "y": 476
                }
              ]
            },
            "ocr_text": "(19)(本小题15分)\n已知E:+=1的离心率为 ,椭圆上的点到两焦点距离之和为4,\n(I)求椭圆方程;\n(Ⅱ)设O为原点,M(x,yo)(x≠0)为椭圆上一点,直线xx+2yy-4=0与直线y=2,\n"
          }
        ]
      }
    ]
  }
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

| 名称                      | 类型       | 必选  | 约束 | 中文名              | 说明 |
|---------------------------|------------|-------|------|---------------------|------|
| » code                    | integer    | true  | none | 状态码              | 接口返回状态码，0表示成功，其他为错误码 |
| » message                 | string     | true  | none | 提示信息            | 接口返回的提示文字或错误信息 |
| » data                    | object     | true  | none | 数据主体            | 接口返回的主要数据对象 |
| »» analysis               | object     | true  | none | 学情分析            | 学情分析结果对象 |
| »»» weak_points           | [object]   | true  | none | 弱项知识点列表            | 学生学习中需要提升的知识点列表 |
| »»»» weak_point_name      | string     | false | none | 弱项知识点名称            | 知识点名称 |
| »»»» data                 | [object]   | false | none | 弱项数据            | 与该弱项相关的详细数据集合 |
| »»»»» weak_point_detail   | string     | false | none | 弱项描述            | 知识点详细说明 |
| »»»»» num                 | [integer]  | false | none | 错题题目序号         | 错题题目序号 |
| »»»»» percent             | string     | false | none | 占比                | 弱项在整体错题中的比例，如百分比字符串 |
| »»» advice                | string     | true  | none | 学习建议            | 针对当前学情的改进意见或学习建议 |
| »»» recommend             | [object]   | true  | none | 推荐题目            | 根据分析结果推荐的练习或资源列表 |
| »»»» text                 | string     | false | none | 推荐文档标题            | 推荐文档标题 |
| »»»» url                  | string     | false | none | 推荐题目文档链接            | 推荐题目文档访问链接 |
| »» files                  | [object]   | true  | none | 图片列表            | 题目图片的列表 |
| »»» url                   | string     | false | none | 图片链接            | 图片链接 |
| »»» qus_figure            | [object]   | false | none | 题目图片信息        | 题目相关的图片及标注信息列表 |
| »»»» fig_location         | object     | false | none | 图片位置            | 图片中标注内容的位置数据 |
| »»»»» points              | [object]   | true  | none | 坐标点集合          | 标注位置的坐标点集合 |
| »»»»»» x                  | integer    | true  | none | X坐标               | 坐标点的横向位置 |
| »»»»»» y                  | integer    | true  | none | Y坐标               | 坐标点的纵向位置 |
| »»»» ocr_text             | string     | false | none | OCR识别文字         | 图片中识别出的文字内容 |


状态码 **422**

*HTTPValidationError*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|
|»» ValidationError|[ValidationError](#schemavalidationerror)|false|none|ValidationError|none|
|»»» loc|[anyOf]|true|none|Location|none|


## GET 获取推荐题目文档

GET /v2/questions/download/doc/{filename}

### 请求示例
http://xxxxx/v2/questions/download/doc/109ab915-8578-47e4-86db-636c1245f7c8.pdf

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|filename|path|string| 是 | Filename|none|

> 返回示例

> 200 Response

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Response|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

### 返回数据结构

状态码 **422**

*HTTPValidationError*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|
|»» ValidationError|[ValidationError](#schemavalidationerror)|false|none|ValidationError|none|
|»»» loc|[anyOf]|true|none|Location|none|

## GET 获取图片

GET /v2/questions/img/{filename}

### 请求示例
http://xxxx/v2/questions/img/WechatIMG3231.jpg

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|filename|path|string| 是 | Filename|none|

> 返回示例

> 200 Response

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Response|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

### 返回数据结构

状态码 **422**

*HTTPValidationError*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|
|»» ValidationError|[ValidationError](#schemavalidationerror)|false|none|ValidationError|none|
|»»» loc|[anyOf]|true|none|Location|none|


