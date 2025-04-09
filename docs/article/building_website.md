# 如何使用 vitepress 搭建个人静态网站

[vitepress 官方文档](https://vitepress.dev/zh/guide/what-is-vitepress)

## 前置准备

[Node.js](https://nodejs.org/zh-cn) 18+

## 初始化

### 安装

```bash
$ npm add -D vitepress
```

### 构建向导

```bash
$ npx vitepress init
```

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run npm run docs:dev and start writing.
```

### 文件结构

```bash
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

<!-- ### 添加配置文件

```bash
├── docs
│   ├── .vitepress
│   │   ├── config.ts
│   │   └── theme
│   │       └── Layout.vue
│   ├── index.md
├── package.json
├── .gitignore
# └── tsconfig.json
``` -->

### 更改配置

```json
"scripts": {
  "dev": "vitepress dev docs --open",
  "build": "vitepress build docs",
  "preview": "vitepress preview docs --port 8080",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

## 基本配置

```

```

## 部署

### 构建

```bash
$ npm run docs:build
```

输出目录： `docs/.vitepress/dist`

### GitHub Pages

https://vitepress.dev/zh/guide/deploy#github-pages
