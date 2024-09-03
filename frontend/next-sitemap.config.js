/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.carsstore7x24.in/",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.carsstore7x24.in/sitemap.xml",
      "https://www.carsstore7x24.in/cars/sitemap.xml",
    ],
  },
};
