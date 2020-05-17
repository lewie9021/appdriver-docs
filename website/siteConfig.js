const siteConfig = {
  title: "AppDriver",
  tagline: "A mobile focused test automation framework",
  url: "https://lewie9021.github.io",
  baseUrl: "/appdriver/",
  projectName: "appdriver",
  organizationName: "lewie9021",
  headerLinks: [
    {doc: "getting-started", label: "Docs"},
    {doc: "api-reference", label: "API"},
    {href: "https://github.com/lewie9021/appdriver", label: "GitHub"}
  ],
  algolia: {
    apiKey: "d839f55633ab9f2eb63ca0b59ef53884",
    indexName: "lewie9021_appdriver",
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  // headerIcon: "img/favicon.ico",
  // footerIcon: "img/favicon.ico",
  // favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#a62424",
    secondaryColor: "#741919",
  },
  copyright: `Copyright © ${new Date().getFullYear()} Lewis Barnes`,
  highlight: {
    theme: "darcula"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  cleanUrl: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  enableUpdateTime: true,

  repoUrl: "https://github.com/lewie9021/appdriver",
};

module.exports = siteConfig;
