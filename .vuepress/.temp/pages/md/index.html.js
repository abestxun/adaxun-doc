import comp from "C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/md/index.html.vue"
const data = JSON.parse("{\"path\":\"/md/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/head.jpg\",\"actionText\":\"快速开始 →\",\"actionLink\":\"/\",\"features\":[{\"title\":\"基础\",\"details\":\"整理基础\"},{\"title\":\"体系\",\"details\":\"知识体系\"},{\"title\":\"研发\",\"details\":\"Java&AIoT\"}],\"footer\":\"© 2025-present wenxun\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"md/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
