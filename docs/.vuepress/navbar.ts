import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "code/PHP",
      "code/tp6笔记",
      "code/Python笔记",
      {
        text: "Linux",
        icon: "",
        prefix: "",
        children: [
          "linux/iptables",
          "linux/Linux基础命令",
          "linux/Debian10常用命令"
        ],
      },
    ],
  },
  {
    text: "service",
    icon: "app",
    prefix: "/",
    children: [
      "service/redis",
      "service/Mysql常用命令",
      "service/mongo"
    ],
  }
]);
