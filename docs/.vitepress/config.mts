import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Website",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "学习笔记", link: "/markdown-examples" },

      { text: "问题经验", link: "/markdown-examples" },
      { text: "案例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "案例",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/wfl0114" },
      { icon: "yuque", link: "https://github.com/wfl0114" },
    ],
  },
});
