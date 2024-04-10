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
      { text: '前端', link: '/frontend/js/basics/context' },
      { text: '后端', link: '/backend/' },
      { text: '网络', link: '/netWork/http/cache' },
      { text: '其它', link: '/other/command' },
      // { text: '算法', link: '/algorithm/' },
      // { text: '设计模式', link: '/designPattern/' },
    ],
    sidebar: {
      '/frontend/':[
        {
          text: 'JS',
          collapsible: true, 
          children: [
            {
              text:'basics',
              collapsible: true,
              children: [
                '/frontend/js/basics/context',
                '/frontend/js/basics/lexicalScope',
                '/frontend/js/basics/variableObject',
                '/frontend/js/basics/scopeChain',
                '/frontend/js/basics/this',
                '/frontend/js/basics/arguments',
                '/frontend/js/basics/paramsPass',
                '/frontend/js/basics/closure',
                '/frontend/js/basics/prototype',
                '/frontend/js/basics/module',
              ]
            },
            '/frontend/js/call-apply-bind'
          ]
        },
       ],

      '/netWork/':[
        {
          text: '网络',
          collapsible: true, 
          children: [
            {
              text:'http',
              collapsible: true,
              children: [
                '/netWork/http/cache',
                '/netWork/http/DNS',
                '/netWork/http/get-post',
                '/netWork/http/urlProcess',
              ]
            },
            {
              text:'安全',
              collapsible: true,
              children: [
                '/netWork/security/xss'
              ]
            }
          ]
        }],

      '/backend/':[{
          text: '后端',
          collapsible: true, 
          children: [
            '/mysql/closure'
          ]
        }],
      '/other/':[{
          text: '其它',
          collapsible: true, 
          children: [
            '/other/regexp',
            '/other/command',
            '/other/setting',
          ]
        }],

    }
    

  },
})