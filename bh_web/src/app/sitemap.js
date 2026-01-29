const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bhbetterhome.com";

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}
