export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const routes = [
    "",
    "/company",
    "/company/mission",
    "/company/history",
    "/company/message",
    "/services",
    "/homecare",
    "/it",
    "/news",
    "/contact",
    "/recruit",
    "/faq",
    "/privacy",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
