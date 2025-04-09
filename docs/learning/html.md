# HTML

## 开发相关

### 浏览器（输出）

- chrome（谷歌）、firefox（火狐）、Edge（IE）、Safari（苹果）等
- 浏览器内核

  - 内核引擎

    - 渲染引擎，取得网页的内容，整理讯息，计算网页的显示方式，然后输出至显示器或打印机。
    - JS 引擎，解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果

  - 常见内核

    - Trident（IE） 、Gecko（firefox）、webkit（Safari） 、Chromium/Blink（chrome）、 Presto（Opera）

  - 移动端系统内置浏览器内核

    - Android： Webkit

    - IOS： Safari、Trident

### 编辑器（编写）

Sublime、Webstorm10、Visual Studio Code、HBuilder、Dreamweaver

### 文档类型<!DOCTYPE>

```html
<!-- html5 版本 -->
<!DOCTYPE html>
```

### 字符集

统一使用 `UTF-8` 字符集

> utf-8 是目前最常用的字符集编码方式，常用的字符集编码方式还有 gbk 和 gb2312。
>
> gb2312 简单中文 包括 6763 个汉字
>
> BIG5 繁体中文 港澳台等用
>
> GBK 包含全部中文字符 是 GB2312 的扩展，加入对繁体字的支持，兼容 GB2312
>
> UTF-8 则包含全世界所有国家需要用到的字符

### 特殊字符

| 特殊字符 | 描述             | 字符的代码 |
| -------- | ---------------- | ---------- |
|          | 空格符           | `&nbsp;`   |
| <        | 小于号           | `&lt;`     |
| >        | 大于号           | `&gt;`     |
| &        | 和号             | `&amp;`    |
| ¥        | 人民币           | `&yen;`    |
| ©        | 版权             | `&copy;`   |
| ®        | 注册商标         | `&reg;`    |
| °        | 摄氏度           | `&deg;`    |
| ±        | 正负号           | `&plusmn;` |
| ×        | 乘号             | `&times;`  |
| ÷        | 除号             | `&divide;` |
| ²        | 平方 2（上标 2） | `&sup2;`   |
| ³        | 立方 3（上标 3） | `&sup3;`   |

## HTML 基础

### Web 标准

- `结构标准` - html（超文本标记语言）

- `表现标准` - css

- `行为标准` - Javascript

### HTML 骨架结构

```html
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

### HTML 标签

```html
<标签 属性="值">
```

### 标签语义化

- 方便代码的阅读和维护
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容
- 使用语义化标签会具有更好地搜索引擎优化

### HTML 标签分类

- 双标签 开始标签与结束标签
- 单标签 也称空标签

### HTML 标签关系

- 嵌套（包含）关系
- 并列关系

### 路径

- 相对路径

```html
<!-- 同级向下 -->
"img01/img02/img001.jpg"

<!-- 同级向上 -->
"../../img001.jpg"
```

- 绝对路径

```html
<!-- 本地 -->
"D:\web\img\logo.gif"

<!-- 线上  -->
"http://www.itcast.cn/images/logo.gif"
```

### 注释

切换注释语句：`ctrl + /`

<!-- 或者 `alt + shift + A` 或者 `ctrl + shift + /` -->

```html
<!-- 这是注释内容 -->
```

```css
/* 这是注释内容 */
```

```js
// 这是注释内容

/**
 * 这是注释内容
 */
```

> js 中多行注释：/\*\* + enter

## HTML 标签

### 标题标签 h1~h6

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

### 段落标签 p

```html
<p>文本内容</p>
```

### 水平线标签 hr

```html
<hr />
```

### 换行标签 br

```html
<br />
```

### 无语义标签 div/span

```html
<!-- div 独占一行 -->
<div></div>

<!-- span 同行显示 -->
<span></span>
```

### 文本格式化标签

```html
<!-- 加粗 -->
<strong></strong> <b></b>

<!-- 斜体 -->
<em></em> <i></i>

<!-- 删除线 -->
<del></del> <s></s>

<!-- 下划线 -->
<ins></ins> <u></u>

<!-- 上标 -->
<sup></sup>

<!-- 下标 -->
<sub></sub>
```

### 图像标签 img

```html
<img
  src="图片URL"
  alt="替换文本"
  title="悬停时显示文本"
  width="宽"
  height="高"
  border="边框宽"
/>
```

### 超链接标签 a

```html
<a href="跳转目标" target="目标窗口的弹出方式">目标</a>

<!-- 内链 -->
<a href="index.html">目标</a>

<!-- 外链 -->
<a href="http://www.baidu.com">目标</a>

<!-- 空链 -->
<a href="#">目标</a>
```

- href：指定链接目标的 url 地址
- target：指定链接页面的打开方式
  - \_self 默认当前页面
  - \_blank 新页面

### 锚点

> id：唯一标识符

```html
<!-- 1 设置锚点 -->
<p id="标记">目标</p>

<!-- 2 找到锚点 -->
<a herf="#标记">目标</a>
```

### 目标链接标签 base

整体页面链接的打开式，写到 `head标签`之间，把所有的跳转链接都默认添加 `target="_blank"`，整体控制文本、图片、视频、音频等元素

```html
<head>
  <base target="_blank" />
</head>
```

- 在一个文档中，最多能使用一个 base 元素
- base 标签必须位于 head 元素内部
- base 标签是单标签

### 列表标签 ul/ol

> ul/ol 只能嵌套 li
>
> 清除默认列表符号样式 list-style: none;

- 无序列表 ul

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ul>
```

- 有序列表 ol

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ol>
```

- 自定义列表

```html
<dl>
  <dt>名词1</dt>
  <dd>名词1解释1</dd>
  <dd>名词1解释2</dd>
  ...
  <dt>名词2</dt>
  <dd>名词2解释1</dd>
  <dd>名词2解释2</dd>
  ...
</dl>
```

### 表格标签 table

- 表格属性

| 属性        | 含义                                     | 常用属性值              |
| ----------- | ---------------------------------------- | ----------------------- |
| border      | 设置表格的边框（默认 border="0"无边框）  | 像素值                  |
| cellspacing | 设置单元格与单元格边框之间的空白间距     | 像素值（默认为 2 像素） |
| cellpadding | 设置单元格内容与单元格边框之间的空白间距 | 像素值（默认为 1 像素） |
| width       | 设置表格的宽度                           | 像素值                  |
| height      | 设置表格的高度                           | 像素值                  |
| align       | 设置表格在网页中的水平对齐方式           | left、center、right     |

- 表格结构

```html
<table>
  <!-- 表格标题 紧随 table 标签后，居中表格之上 -->
  <caption>
    2023年员工绩效评分
  </caption>

  <!-- 表格的头部 -->
  <thead>
    <tr>
      <th>员工姓名</th>
      <th>绩效评分</th>
    </tr>
  </thead>

  <!-- 表格的主体 -->
  <tbody>
    <tr>
      <td>张三</td>
      <td>92</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>88</td>
    </tr>
    <tr>
      <td>王五</td>
      <td>95</td>
    </tr>
  </tbody>

  <!-- 表格的页脚 -->
  <tfoot>
    <tr>
      <td colspan="2">平均分: 91.67</td>
    </tr>
  </tfoot>
</table>
```

> 表头一般位于表格的第一行或第一列，表头单元格默认加粗居中
>
> tr 中只能嵌套 td/th，td/th 中可以嵌套其他标签
>
> tr 用于定义表格中的一行，必须嵌套在 table 标签中，在 table 中包含几对 tr，就有几行表格
>
> td 用于定义表格中的单元格，必须嵌套在 tr 标签中，一对 tr 中包含几对 td，就表示该行中有多少列（或多少个单元格）

- 合并单元格

  > border-collapse: collapse; 表格边框合并（细线边框）

  - rowspan 跨行合并（垂直方向的列合并）

  - colspan 跨列合并（水平方向的行合并）

### 表单标签 form

```html
<form action="url地址" method="提交方式" name="表单名称">
  <!-- 表单控件 -->
</form>
```

在 HTML 中，一个完整的表单通常由表单域、提示信息、表单控件 3 个部分构成

- 表单域（form）

  > 一个容器，容纳所有的表单控件和提示信息，上传后台服务器

- 提示信息

  > 说明性的文字

- 表单控件（表单元素）

  > 单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等

- method 提交方式

  - get 默认通过地址栏，不安全
  - post 貌似安全
  - put
  - delete

### 表单元素输入框 input/label

| 控件类型 | 类型值   | 描述               | 备注  |
| -------- | -------- | ------------------ | ----- |
| type     | text     | 单行文本输入框     |       |
| type     | password | 密码输入框         |       |
| type     | radio    | 单选按钮           |       |
| type     | checkbox | 复选框             |       |
| type     | button   | 普通按钮           |       |
| type     | submit   | 提交按钮           |       |
| type     | reset    | 重置按钮           |       |
| type     | image    | 图像形式的提交按钮 |       |
| type     | file     | 文件域选择按钮     |       |
| type     | email    | 邮箱格式输入框     | HTML5 |
| type     | tel      | 手机号码输入框     | HTML5 |
| type     | url      | url 格式输入框     | HTML5 |
| type     | number   | 数字输入框         | HTML5 |
| type     | date     | 日期输入框         | HTML5 |

| 控件属性     | 属性值         | 描述                 | 备注  |
| ------------ | -------------- | -------------------- | ----- |
| name         | 自定义         | 控件的名称           |       |
| value        | 自定义         | 默认文本值           |       |
| size         | 正整数         | 在页面中显示宽度     |       |
| checked      | checked        | 默认被选中的选择控件 |       |
| multiple     | multiple       | 多选                 |       |
| maxlength    | 正整数         | 输入的最大字符数     |       |
| placeholder  | 自定义         | 灰色占位符           | HTML5 |
| autofocus    | autofocus      | 自动获得焦点         | HTML5 |
| autocomplete | off（默认 on） | 自动完成             | HTML5 |
| required     | required       | 必填项               | HTML5 |

```html
<!-- 绑定一个表单元素，点击获得输入焦点 -->
<input id="male" type="radio" name="sex" value="male" />
<label for="male">Male</label>
```

- `input标签`为单标签
- 属性和值一样时尽量简写，例如 checked="checked" 可简写为 checked
- :checked 表示检测选中的表单元素
- 单选按钮实现单选效果，将单选的 name 值设置相同，name="gender"
- 获取光标焦点的状态样式 input: focus;
- 清除轮廓线样式 outline: none / 0;

### 表单元素文本域 textarea

```html
<textarea cols="每行中的字符数" rows="显示的行数">文本内容</textarea>
```

- 多行文本输入框，双标签
- rows 行数
- cols 一行输入的字符长度
- resize 是否可以操作元素大小（css3）
  - none 不能调节尺寸
  - both 可以调节尺寸
  - horizontal 只可以调节宽度
  - inherit 只可以调节高度

### 表单元素下拉菜单 select/option

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

- select 里至少要包含一项 option
- selected = "selected" 默认选中项

### 布局标签（HTML5）

```html
<!-- 头部 -->
<header></header>

<!-- 导航 -->
<nav></nav>

<!-- 文章 -->
<article></article>

<!-- 侧边栏 -->
<aside></aside>

<!-- 区块 -->
<section></section>

<!-- 底部 -->
<footer></footer>
```

- 创建自定义标签

```js
document.createElement("tagName");
```

- 检测 IE 版本，加载第三方 JS 库

```js
<!--[if lte IE 8]>
  <script src="./libs/html5shiv.min.js"></script>
<![endif]-->
```

### 音频标签（HTML5）

```html
<audio src="a.mp3"></audio>
```

- autoplay 自动播放
- controls 是否显不默认播放控件
- loop 循环播放

|    格式    |  IE 9  | Firefox 3.5 | Opera 10.5 | Chrome 3.0 | Safari 3.0 |
| :--------: | :----: | :---------: | :--------: | :--------: | :--------: |
| Ogg Vorbis | 不支持 |    支持     |    支持    |    支持    |   不支持   |
|    MP3     |  支持  |   不支持    |   不支持   |    支持    |    支持    |
|    Wav     | 不支持 |    支持     |    支持    |   不支持   |    支持    |

```html
<!-- 多浏览器解决方案 -->
<audio controls>
  <source src="a.mp3" />
  <source src="a.wav" />
  <source src="a.ogg" />
  您的浏览器版本过低,请升级
</audio>
```

### 视频标签（HTML5）

```html
<video src="a.mp4"></video>
```

- autoplay 自动播放
- controls 是否显示默认播放控件
- loop 循环播放
- width 设置播放窗口宽度
- height 设置播放窗口的高度

| 格式   | IE     | Firefox | Opera  | Chrome | Safari |
| ------ | ------ | ------- | ------ | ------ | ------ |
| Ogg    | 不支持 | 3.5+    | 10.5+  | 5.0+   | 不支持 |
| MPEG 4 | 9.0+   | 不支持  | 不支持 | 5.0+   | 3.0+   |
| WebM   | 不支持 | 4.0+    | 10.6+  | 6.0+   | 不支持 |

```html
<!-- 多浏览器解决方案 -->
<video>
  <source src="movie.mp4" />
  <source src="movie.ogg" />
  <source src="movie.webm" />
</video>
```
