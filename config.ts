export default {
  /** ⇊⇊⇊⇊⇊⇊  必须修改  ⇊⇊⇊⇊⇊⇊ */
  githubName: "even-day", // 必须修改，github账户名
  /** ⇈⇈⇈⇈⇈⇈  必须修改  ⇈⇈⇈⇈⇈⇈ */

  /** --------------------------------------------------- */

  /** ⇊⇊⇊⇊⇊⇊  可选修改  ⇊⇊⇊⇊⇊⇊ */
  // --- 下面是强烈建议修改的 ---
  title: "even days", // 网站标题
  nickName: "偶数日", // 昵称
  domain: "https://www.eaea.ml", // rss域名
  SEO_title: " - evendays blog", // 搜索引擎显示的标题
  SEO_description: "偶数日的博客，书写值得书写的东西", // description meta header
  SEO_keywords: "evendays,evendays's blog,偶数日,偶数日的博客", // keywords meta header
  // --- 下面是需要额外设置的 ---
  CloudflareAnalyze: "", // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "R_kgDOI2fiXQ", // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: "DIC_kwDOI2fiXc4CT2VV", // https://giscus.app/zh-CN
  Comment: {
    articles: true,
    records: false,
    knowledges: false
  }, // 是否开启评论，请先设置上面的 CommentRepoId 和 CommentDiscussionCategoryId
  MongoDb: {
    enabled: true, // 是否开启mongodb(浏览量统计)，请先设置 https://vercel.com/integrations/mongodbatlas
    initialVisitors: 100, // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false // 网站拥有者访问时，是否增加浏览量
  },
  // --- 下面是可改可不改的 ----
  themeColor: "#2aa0bb", // 主题色
  /** ⇈⇈⇈⇈⇈⇈  可选修改  ⇈⇈⇈⇈⇈⇈ */

  /** --------------------------------------------------- */

  /** ⇊⇊⇊⇊⇊⇊  不可修改  ⇊⇊⇊⇊⇊⇊ */
  githubRepo: "nuxt3-blog", // 勿修改
  githubBranch: "master" // 勿修改
  /** ⇈⇈⇈⇈⇈⇈  不可修改  ⇈⇈⇈⇈⇈⇈ */
};
