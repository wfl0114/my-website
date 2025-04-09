# Markdown Extension Examples

### push github 提示报错：

<!-- ![图片](https://img-blog.csdnimg.cn/20231101153457751.png)

![图片](https://pic4.zhimg.com/v2-2732d99eb6dda2b9f51b0cd965f67c59_1440w.jpg)

![图片](https://gitee.com/wfl0114/image-hosting/raw/master/img/2022/202202141053381.png)

![图片](https://gitee.com/wfl0114/image-hosting/raw/master/img/2025/20250401111423630.png)

![图片](https://cdn.nlark.com/yuque/0/2025/png/2490323/1743420210600-53c827c5-28c8-4453-a6cb-a1d4c4b0ffc5.png?x-oss-process=image%2Fformat%2Cwebp) -->

![](https://raw.githubusercontent.com/wfl0114/image-hosting/master/img/2025/20250407183815061.png)

```
https://blog.csdn.net/2301_80197997/article/details/145884328
```

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
