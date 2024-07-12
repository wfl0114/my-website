import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `Vite 官方中文文档`,
  description: 'Vite 官方中文文档',
  base: '/vite/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cn.vitejs.dev/viteconf.svg'
      }
    ]
  ],

  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false

  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },

  themeConfig: {
    logo: '/vite.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      // { icon: 'twitter', link: '...' },
    ],

    search: {
      provider: 'local'
    },

    nav: [
      { text: '指引', link: '/guide' },
      { text: '配置', link: '/config' },
      { text: '插件', link: '/plugin' },
      {
        text: '相关链接',
        items: [
          { text: 'Vite v3文档', link: 'https://v3.vitejs.dev/' },
          { text: 'Vite v3文档', link: 'https://v2.vitejs.dev/' }
        ]
      }
    ],

    footer: {
      message: '本中文文档内容版权为 Vite 官方中文翻译团队所有，保留所有权利。'
    }
  }
})

