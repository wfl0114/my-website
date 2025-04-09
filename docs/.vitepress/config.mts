import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  title: "我的网站",
  description: "",
  lastUpdated: true, // 最近更新时间
  markdown: {
    // 代码块风格
    // theme: "material-theme-palenight",
    // theme: "github-light",
    // lineNumbers: true, // 代码块显示行数
  },
  themeConfig: {
    // 搜索框
    search: {
      provider: "local",
    },

    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/learning/html" },
      { text: "文章", link: "/article/building_website" },
      { text: "工具", link: "/markdown-examples" },
      { text: "案例", link: "/markdown-examples" },
    ],

    // 侧边栏
    sidebar: {
      "/learning/": [
        {
          text: "前端",
          items: [
            { text: "HTML", link: "/learning/html" },
            { text: "CSS", link: "/learning/css" },
            { text: "Vue", link: "/learning/vue" },
            { text: "AJAX", link: "/learning/ajax" },
            { text: "JS", link: "/learning/js" },
            { text: "TS", link: "/learning/ts" },
            { text: "Node", link: "/learning/node" },
            { text: "jQuery", link: "/learning/jquery" },
            { text: "小程序", link: "/learning/mini_program" },
            { text: "Flutter", link: "/learning/flutter" },
            // { text: "Git", link: "/learning/git" },
          ],
        },

        {
          text: "后端",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },

        {
          text: "案例",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],

      "/article/": [
        { text: "搭建vitepress网站", link: "/article/building_website" },
        { text: "前端必备", link: "/article/front_end_development" },
        { text: "常用快捷键", link: "/article/keyboard_shortcuts" },
        { text: "markdown语法", link: "/article/markdown" },
        { text: "Git", link: "/article/git" },
      ],
    },

    // 右侧导航栏
    outline: {
      level: [2, 4],
      label: "大纲",
    },

    // 社交帐户链接
    socialLinks: [
      { icon: "github", link: "https://github.com/wfl0114" },
      { icon: "yuque", link: "https://www.yuque.com/free_doc" },
    ],

    // 上次更新
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present SunFei",
    },
  },
});
