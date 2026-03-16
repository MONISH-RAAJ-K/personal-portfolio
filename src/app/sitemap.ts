import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://monish-portfolio-blond.vercel.app",
      lastModified: new Date(),
    },
  ];
}