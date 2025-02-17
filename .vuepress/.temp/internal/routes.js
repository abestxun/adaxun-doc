export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/md/about/about-me-cn.html", { loader: () => import(/* webpackChunkName: "md_about_about-me-cn.html" */"C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/md/about/about-me-cn.html.js"), meta: {"title":""} }],
  ["/md/about/about-me.html", { loader: () => import(/* webpackChunkName: "md_about_about-me.html" */"C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/md/about/about-me.html.js"), meta: {"title":"wenxun"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/wenxun/Desktop/code/adaxun-doc/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
