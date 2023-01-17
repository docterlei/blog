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
      { text: '网络', link: '/netWork/http/cache' },
      // { text: '后端', link: '/backend/' },
      // { text: '算法', link: '/algorithm/' },
      // { text: '设计模式', link: '/designPattern/' },
      { text: '其它', link: '/other/command' },
      { 
          text: 'lgh博客', 
          children: [
              // { text: 'Github', link: 'https://github.com/mqyqingfeng' },
              // { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
          ]
      },
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
        {
          text: 'TS',
          collapsible: true, 
          children: [
            '/frontend/ts/info',
            '/frontend/ts/typeManipulation/keyof',
          ]
        }],

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