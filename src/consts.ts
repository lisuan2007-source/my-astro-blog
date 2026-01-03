// src/consts.ts

export const SITE_INFO = {
  title: "瑪奇朵的部落格",              // 網站標題
  icon_type: "image/jpeg",              // 分頁小圖標資料類型
  icon: "/image/marin4.jpg",             // 分頁小圖標
  Logo: "/image/marin.jpg",             // 導覽列logo
  description: "歡迎來到我的網路空間",  // 網站描述
  author: "瑪奇朵的空間",                // 導覽列名字
  createDate: "2025/12/26",        // 創建日期
  githubRepo: "https://github.com/lisuan2007-source/my-astro-blog", // GitHub 網址

  // 留言板
  giscus: {
    enable: true, // 預設啟用
    repo: "lisuan2007-source/my-astro-blog",
    repoId: "R_kgDOQyqjOg",
    category: "Announcements",
    categoryId: "DIC_kwDOQyqjOs4C0h2i",
    mapping: "pathname",
    inputPosition: "top", 
    theme: "preferred_color_scheme",
    lang: "zh-TW",
  },

  github: {
    username: "lisuan2007-source",
    repo: "my-astro-blog",
  },
};
