import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EduCopilot-Api 文档",
  description: "EduCopilot 在线API文档地址",
  base: '/EduCopilotApi/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '接口', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '接口',
        items: [
          { text: '试卷分析', link: '/api-examples' },
          { text: 'GGB 生成', link: '/ggb-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '本项目基于 MIT License 开源，欢迎使用和贡献。',
      copyright: 'Copyright © 2025-present HycJack'
    },


    editLink: {
      pattern: 'https://github.com/HycJack/EduCopilotApi/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },
  }
})
