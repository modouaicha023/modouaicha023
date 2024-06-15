/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: 'https://modouaicha023.vercel.app',  // Remplacez par l'URL de votre site
  generateRobotsTxt: true,  // (facultatif) Génère également un fichier robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
};

module.exports = sitemapConfig;
