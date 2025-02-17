import comp from "C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/md/about/about-me.html.vue"
const data = JSON.parse("{\"path\":\"/md/about/about-me.html\",\"title\":\"wenxun\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"md/about/about-me.md\"}")
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
