/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gnstradingplc.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "out",
  sitemapSize: 7000,
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
};
