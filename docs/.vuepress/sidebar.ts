import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  {
    text: "code",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "linux",
    icon: "",
    prefix: "/linux/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "services",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "工具",
    icon: "",
    prefix: "/tool/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "博客",
    icon: "",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
]);
