import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://ffw-assignment-movie-friends-seven.vercel.app/sitemap.xml",
  };
}
