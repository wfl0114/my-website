# 如何使用 vitepress 搭建个人静态网站

[vitepress 官方文档](https://vitepress.dev/zh/guide/what-is-vitepress)

## 前置准备

[Node.js](https://nodejs.org/zh-cn) 18+

## 安装

```bash
npm add -D vitepress
```

## 安装向导

```bash
npx vitepress init
```

```painter
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
└  Done! Now run pnpm run docs:dev and start writing.
```

## 文件结构

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

## 手动添加配置文件

```bash
├── docs
│   ├── .vitepress
│   │   ├── config.ts
│   │   └── theme
│   │       └── Layout.vue
│   ├── .gitignore
│   ├── index.md
│   └── README.md
├── package.json
└── tsconfig.json
```

## 基本配置

```

```
