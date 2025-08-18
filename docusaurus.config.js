// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// 判斷當前環境是否是 vercel 還是 github pages
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "前端操作說明文件",
  tagline:
    "本文件提供美容百科、運動百科網站以及美容鏡產品的使用入門指南，詳細說明註冊流程、文章瀏覽、搜尋功能與檢測功能的操作步驟，並列出各類操作限制及注意事項。",
  favicon: "img/favicon.ico",

  // 設定當前連接 vercel 還是 github page 設定 start
  url: isVercel
    ? // ? "https://kingly-frontend-doc-gyrm.vercel.app/"
      "https://kingly-frontend-doc.vercel.app/"
    : "https://kingly_frontend_doc.github.io",
  baseUrl: isVercel ? "/" : "/kingly_frontend_doc/",
  organizationName: "kingly",
  projectName: "kingly_frontend_doc",
  // 設定當前連接 vercel 還是 github page 設定 end

  onBrokenLinks: "throw", // 'ignore' 允許建構失敗仍繼續，或者 'log' 來記錄錯誤但不阻止構建
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hant", // "en","zh-Hans"=簡中 "zh-Hant"=繁中
    locales: ["zh-Hant", "zh-Hans"],
    path: "i18n",
    localeConfigs: {
      "zh-Hant": {
        label: "繁體中文",
        direction: "ltr",
        htmlLang: "zh-Hant",
      },
      "zh-Hans": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-Hans",
      },
    },
  },

  stylesheets: [
    {
      href: "./src/css/custom.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: true, // 顯示最後更新時間
          showLastUpdateAuthor: true, // (可選) 顯示最後更新作者
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "美容百科前端文件",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.png",
        // },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "說明文件指南",
          },
          {
            type: "docSidebar",
            sidebarId: "webTutorialSidebar",
            position: "left",
            label: "美容百科網站",
          },
          {
            type: "docSidebar",
            sidebarId: "sportWikiSidebar",
            position: "left",
            label: "運動百科網站",
          },
          {
            type: "docSidebar",
            sidebarId: "mirrorTutorialSidebar",
            position: "left",
            label: "美容鏡",
          },
          {
            type: "docSidebar",
            sidebarId: "nluSidebar",
            position: "left",
            label: "對話訓練平台",
          },
          {
            type: "localeDropdown",
            position: "right",
            className: "custom-locale-switcher",
          },
          {
            href: "https://github.com/ben0588/kingly_frontend_doc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true, // sidebar 新增收合功能
        },
      },
      footer: {
        style: "light",
        links: [
          {
            title: "網站連結",
            items: [
              {
                label: "後台管理系統入口",
                to: "https://wiki.kinglyrobot.com/",
              },
              {
                label: "美容百科網站",
                to: "https://beauty.kinglyrobot.com/",
              },
              {
                label: "運動百科網站",
                to: "https://sport.kinglyrobot.com/",
              },
            ],
          },
          {
            title: "相關文件連結",
            items: [
              {
                label: "美容百科前端網站說明",
                to: "/docs/intro",
              },
              {
                label: "後台管理系統教學 ( Vercel )",
                to: "https://kingly-backend-doc.vercel.app/",
              },
              {
                label: "後台管理系統教學 ( GitHub-Pages )",
                to: "https://mestochang.github.io/kingly_backend_doc/",
              },
            ],
          },
          // {
          //   title: "Links",
          //   items: [
          //     {
          //       label: "backend-docs",
          //       to: "https://kingly-backend-doc.vercel.app/",
          //     },
          //     {
          //       label: "frontend-docs",
          //       to: "/",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. 王道機器人股份有限公司`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark", // 預設主題模式 (light or dark)
        disableSwitch: false, // 是否禁用切換按鈕
        respectPrefersColorScheme: true, // 根據瀏覽器設定自動切換主題
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"], // zh 等於支持 zh-Cn 與 zh-Hant (簡/繁)
      },
    ],
  ],
};

export default config;
