import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'


export default defineUserConfig({
  // 添加标题和描述 borrow from https://pdai.tech/md/about/blog/blog-build-vuepress.html
  dest: 'docs',
  base: '/',
  locales: {
    "/": {
      lang: "zh-CN",
      title: "wenxun",
      description: "个人知识库",
    }
  },
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebarDepth: 0,
    // 顶部导航栏
    navbar: [
      { text: "Java", link: "/md/java/" },
      { text: "数据库", link: "/md/database/" },
      { text: "框架", link: "/md/framework/" },
      { text: "算法", link: "/md/algorithm/" },
      { text: "开发", link: "/md/backend/" },
      { text: "物联网", link: "/md/iot/" },
      { text: "面试", link: "/md/interview" },
      { text: "方法论", link: "/md/methods" },
      { text: "关于", link: "md/about/about-me.md" },
    ],
    lastUpdated: true,
    contributors: true,

    // 侧边栏
    sidebar: {
      '/md/about/': genSiderbar4About(),
    },

    themePlugins: {
      backToTop: true,

    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})


function genSiderbar4About() {

  return [
    {
      text: "关于",
      children: [
        "about-me.md", //自动填充 md/about
        "about-me-cn.md"
      ]

    }
  ]
}