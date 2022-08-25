import { path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  //主题选项
  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html
  hostname: "https://doflam-z.github.io",

  author: {
    name: "zax",
    url: "doflam-z.github.io",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",
  
  //是否全局启用路径导航
  breadcrumb: false,

  //页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: true,

  //深色模式配置
  //darkmode: "disable",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "rockbenben/LearnData",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  // docsDir: "demo/src",

  // navbar
  navbar: navbar,
  //导航栏布局
  navbarLayout: {
	left: ["Brand"],
	center: ["Links"],
	right: ["Repo", "Outlook", "Search"],
  },
  //是否在向下滚动时自动隐藏导航栏
  //navbarAutoHide: "always",


  //侧边栏排序规则
  //sidebarSorter: ['readme', 'order', 'title'],
  // sidebar
  sidebar: sidebar,

  // footer: "默认页脚",

  // displayFooter: true,
  pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],
  //https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  // pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],

  //https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html
  blog: {
    articleInfo: ["Date", "Category", "Tag", "ReadingTime", "PageView"],
    name: "zax",
    avatar: "/avatar_self.webp",
    description: "现实就是，并不是所有人都能功成名就，我们当中大多数人都注定要在生活中寻找生命的意义",
    intro: "/intro.html",
    roundAvatar: true,
  },

  plugins: {

    blog: {
      // 自动摘要
      autoExcerpt: true,
    },

    //评论配置
    comment: {
      //部署 Waline：https://waline.js.org/guide/get-started.html
      provider: "Waline",
      serverURL: "https://waline-seven-sepia.vercel.app",
      pageview: true,
      //Giscus 备用配置
      //provider: "Giscus",
      //repo: "rockbenben/LearnData",
      //repoId: "R_kgDOHdfk6Q",
      //category: "Comments",
      //categoryId: "DIC_kwDOHdfk6c4CQYNn",
    },

    mdEnhance: {
      enableAll: false,
      footnote: true,
      tasklist: true,
      mark: true,
      container: true,
      lazyLoad: true,
    },
  },
});
