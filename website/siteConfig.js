const siteConfig = {
  title: "AppDriver",
  tagline: "A mobile focused test automation framework",
  url: "https://lewie9021.github.io",
  baseUrl: "/appdriver/",
  projectName: "appdriver",
  organizationName: "lewie9021",
  headerLinks: [
    {doc: "getting-started", label: "Docs"},
    {doc: "api/device/device", label: "API"},
    {href: "https://github.com/lewie9021/appdriver", label: "GitHub"}
  ],
  algolia: {
    apiKey: "my-api-key",
    indexName: "my-index-name",
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  headerIcon: "img/favicon.ico",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#243da6",
    secondaryColor: "#192a74",
  },
  copyright: `Copyright © ${new Date().getFullYear()} Lewis Barnes`,
  highlight: {
    theme: "darcula"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: false,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  enableUpdateTime: true,

  repoUrl: "https://github.com/lewie9021/appdriver",
};

module.exports = siteConfig;
