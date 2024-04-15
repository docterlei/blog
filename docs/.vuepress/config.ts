import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

// 生成对应menus
let generateMenu = (prefix, arr) => arr.map(item => `${prefix}${item}`)
// js
let jsPrefix = '/frontend/js/';
let jsArr = ['context','lexicalScope','variableObject', 'scopeChain','this','arguments','paramsPass','closure','prototype','module','call-apply-bind']

// react
let reactPrefix = '/frontend/react/';
let reactArr = ['mini-react']

// bundle
let bundlePrefix = '/frontend/bundle/';
let bundletArr = ['vite']



// mysql
let mysqlPrefix = '/backend/mysql/';
let mysqlArr = ['query']

// 其它
let otherPrefix = '/other/';
let otherArr = ['regexp','command','setting','cache','DNS','get-post','urlProcess','xss']


export default defineUserConfig<DefaultThemeOptions>({
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: '前端', link: '/frontend/js/context' },
      { text: '后端', link: '/backend/mysql/query' },
      { text: '其它', link: '/other/regexp' },
    ],
    sidebar: {
      '/frontend/':[
        {
          text: 'JS',
          collapsible: true, 
          children: generateMenu(jsPrefix,jsArr)
        },
        {
          text: 'React',
          collapsible: true, 
          children: generateMenu(reactPrefix,reactArr)
        },
        {
          text: 'Bundle',
          collapsible: true, 
          children: generateMenu(bundlePrefix,bundletArr)
        },
       ],

       '/backend/':[{
        text: 'mysql',
        collapsible: true, 
        children: generateMenu(mysqlPrefix,mysqlArr)
      }],

      '/other/':[{
          text: '其它',
          collapsible: true, 
          children: generateMenu(otherPrefix,otherArr)
        }],
    }
    

  },
})