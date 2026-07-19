import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.uoagdg.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.uoagdg.com/games",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
