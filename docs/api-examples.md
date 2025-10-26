---
outline: deep
---

# 试卷分析接口

Base URLs:

* <a href="https://www.gxxuetu.cn">正式环境: https://www.gxxuetu.cn</a>

# Authentication

# 试卷分析/config

<a id="opIdgrade_ifno_v2_config_grade_ifno_get"></a>

## GET 获取年级和课程信息

GET /v2/config/grade_ifno

> 返回示例

> 200 Response

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Response|Inline|

### 返回数据结构

# 试卷分析/questions

<a id="opIdanalysis_v2_questions_analysis_post"></a>

## POST 一键分析接口

POST /v2/questions/analysis

> Body 请求参数

```yaml
grade: ""
subject: ""
auto_detect: "true"
image_urls: []
cut_type: baidu
images: ""

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» grade|body|string| 是 | Grade|none|
|» subject|body|string| 是 | Subject|none|
|» auto_detect|body|boolean| 否 | Auto Detect|none|
|» image_urls|body|[string]| 否 | Image Urls|none|
|» cut_type|body|string| 否 | Cut Type|none|
|» images|body|[string]| 否 | Images|none|

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
          "url": "http://124.222.20.138:8700/v2/questions/download/doc/109ab915-8578-47e4-86db-636c1245f7c8.pdf"
        }
      ]
    },
    "files": [
      {
        "url": "http://124.222.20.138:8700/v2/questions/img/WechatIMG3231.jpg",
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

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» analysis|object|true|none||none|
|»»» weak_points|[object]|true|none||none|
|»»»» weak_point_name|string|false|none||none|
|»»»» data|[object]|false|none||none|
|»»»»» weak_point_detail|string|false|none||none|
|»»»»» num|[integer]|false|none||none|
|»»»»» percent|string|false|none||none|
|»»» advice|string|true|none||none|
|»»» recommend|[object]|true|none||none|
|»»»» text|string|false|none||none|
|»»»» url|string|false|none||none|
|»» files|[object]|true|none||none|
|»»» url|string|false|none||none|
|»»» qus_figure|[object]|false|none||none|
|»»»» fig_location|object|false|none||none|
|»»»»» points|[object]|true|none||none|
|»»»»»» x|integer|true|none||none|
|»»»»»» y|integer|true|none||none|
|»»»» ocr_text|string|false|none||none|

状态码 **422**

*HTTPValidationError*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|
|»» ValidationError|[ValidationError](#schemavalidationerror)|false|none|ValidationError|none|
|»»» loc|[anyOf]|true|none|Location|none|

*anyOf*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|string|false|none||none|

*or*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|integer|false|none||none|

*continued*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»» msg|string|true|none|Message|none|
|»»» type|string|true|none|Error Type|none|

<a id="opIdserve_file_v2_questions_download_doc__filename__get"></a>

## GET 获取推荐题目文档

GET /v2/questions/download/doc/{filename}

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

*anyOf*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|string|false|none||none|

*or*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|integer|false|none||none|

*continued*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»» msg|string|true|none|Message|none|
|»»» type|string|true|none|Error Type|none|

<a id="opIdserve_file_v2_questions_img__filename__get"></a>

## GET 获取图片

GET /v2/questions/img/{filename}

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

*anyOf*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|string|false|none||none|

*or*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»»» *anonymous*|integer|false|none||none|

*continued*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|»»» msg|string|true|none|Message|none|
|»»» type|string|true|none|Error Type|none|

# 数据模型

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>

<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

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

HTTPValidationError

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|Detail|none|

<h2 id="tocS_ValidationError">ValidationError</h2>

<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}

```

ValidationError

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|loc|[anyOf]|true|none|Location|none|

anyOf

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» *anonymous*|string|false|none||none|

or

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» *anonymous*|integer|false|none||none|

continued

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|msg|string|true|none|Message|none|
|type|string|true|none|Error Type|none|

