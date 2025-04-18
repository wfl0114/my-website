# markdown 语法

[Markdown 语法教程](https://markdown.com.cn/basic-syntax/)

[Markdown 在线编辑器 ](https://markdown.com.cn/editor/)

## markdown 基础语法

### 标题 {#markdown-标题}

```md
# 这是 <h1> 一级标题

## 这是 <h2> 二级标题

### 这是 <h3> 三级标题

#### 这是 <h4> 四级标题

##### 这是 <h5> 五级标题

###### 这是 <h6> 六级标题
```

### 段落

```md
使用空白行将一行或多行文本进行分隔，相当于<p>
```

### 强调

```md
_斜体_
**粗体**
**_粗斜体_**
```

### 引用

```md
> 这是一个引用
>
> > 这是引用的嵌套
```

### 列表 {#markdown-列表}

```md
- 无序列表
- 无序列表
- 无序列表

1. 有序列表
2. 有序列表
3. 有序列表
```

### 链接

> **注意使用`%20`代替链接中的空格**

```md
这是一个链接 [Markdown 语法](https://markdown.com.cn)。
这是一个邮箱链接 <fake@example.com>
```

### 图片

```md
![alt 属性文本](图片地址 "可选标题")
```

### 代码 {#markdown-代码}

````md
单行代码：使用反引号(`)包裹代码

多行代码：使用三个反引号(```)包裹代码
````

### 转义字符

```md
反斜杠字符 \
```

`<` `>` `#` `*` `{}` `[]` `()` `!` `|`

### HTML 标签

```md
<!-- 文字居中 -->
<p style="text-align:center">这段文字居中显示。</p>

<!-- 文字颜色 -->

<font color="red">这段文字是红色的！</font>

<p style="color:blue">这段文字是蓝色的。</p>

<!-- 图片大小 -->
<img src="/images/rocks.jpg" width="200" height="100">

<!-- 新标签打开链接 -->

<a href="https://markdown.com.cn" target="_blank">学习 Markdown！</a>

<!-- 插入视频 -->
<iframe height="400" width="600" src="//player.bilibili.com/player.html?aid=49775093&cid=87150521&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

## markdown 扩展语法

注意并非所有 Markdown 应用程序都支持扩展语法元素

### 自定义标题锚点

某些 Markdown 解析器支持自动目录生成（如 Markdeep），但如果不支持，可以手动创建：

```md
# 标题 {#markdown-标题}
```

```md
- [标题](#markdown-标题)
- [列表](#markdown-列表)
- [代码](#markdown-代码)
```

> 渲染效果：

- [标题](#markdown-标题)
- [列表](#markdown-列表)
- [代码](#markdown-代码)

### 注释

```md
这是可见的段落。
[这是一个隐藏的注释]: #
这是另一个可见的段落。
```

> 渲染效果：

这是可见的段落。

[这是一个隐藏的注释]: #

这是另一个可见的段落。

### 删除线

```md
~~删除线~~
```

### 表格

```md
| 表头 1   |  表头 2  |   表头 3 |
| :------- | :------: | -------: |
| 单元格 1 | 单元格 2 | 单元格 3 |
| 单元格 4 | 单元格 5 | 单元格 6 |
```

### 任务列表

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

### Emoji 表情

```md
:100:

真好笑！ :joy:
```

> 渲染效果：

:100:

真好笑！ :joy:
