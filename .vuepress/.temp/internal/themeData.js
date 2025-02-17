export const themeData = JSON.parse("{\"sidebarDepth\":0,\"navbar\":[{\"text\":\"Java\",\"link\":\"/md/java/\"},{\"text\":\"数据库\",\"link\":\"/md/database/\"},{\"text\":\"框架\",\"link\":\"/md/framework/\"},{\"text\":\"算法\",\"link\":\"/md/algorithm/\"},{\"text\":\"开发\",\"link\":\"/md/backend/\"},{\"text\":\"物联网\",\"link\":\"/md/iot/\"},{\"text\":\"面试\",\"link\":\"/md/interview\"},{\"text\":\"方法论\",\"link\":\"/md/methods\"},{\"text\":\"关于\",\"link\":\"md/about/about-me.md\"}],\"lastUpdated\":true,\"contributors\":true,\"sidebar\":{\"/md/about/\":[{\"text\":\"关于\",\"children\":[\"about-me.md\",\"about-me-cn.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
