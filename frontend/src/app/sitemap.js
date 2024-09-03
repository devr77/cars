export default async function sitemap() {
  const defaultSitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}about-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}car-loan`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}cars`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}terms-and-condition`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  return [...defaultSitemap];
}
