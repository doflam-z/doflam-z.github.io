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
      "code/tp6",
      "code/Python",
      {
        text: "Linux",
        icon: "",
        prefix: "",
        children: [
          "linux/iptables",
          "linux/linux基础命令",
          "linux/Debian10"
        ],
      },
    ],
  },
  {
    text: "服务",
    icon: "app",
    prefix: "/",
    children: [
      "services/redis",
      "services/mysql",
      "services/mongo"
    ],
  },
  {
    text: "工具",
    icon: "tool",
    prefix: "/",
    children: [
      "tool/Git",
      "tool/mac"
    ],
  }
]);
