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
    ]
  }
})
