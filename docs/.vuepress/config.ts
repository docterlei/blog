import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  // lang: 'en-US',
  // title: 'Hello VuePress',
  // description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: '前端', link: '/fontend/js/closure' },
      { text: '后端', link: '/backend/' },
      { text: '算法', link: '/algorithm/' },
      { text: '设计模式', link: '/designPattern/' },
      { 
          text: 'lgh博客', 
          children: [
              { text: 'Github', link: 'https://github.com/mqyqingfeng' },
              { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
          ]
      },
    ],
    sidebar: {
      '/fontend/':[{
          text: '前端',
          collapsible: true, 
          children: [
            '/fontend/js/closure',
            '/fontend/js/ha',
          ]
      }],
      '/backend/':[{
          text: '前端',
          collapsible: true, 
          children: [
            '/backend/closure'
          ]
      }],
      '/algorithm/':[{
          text: '前端',
          collapsible: true,
          children: [
            '/algorithm/closure'
          ]
      }],
      '/designPattern/':[{
          text: '前端',
          collapsible: true, 
          children: [
            '/designPattern/closure'
          ]
      }],

    }
    

  },
})