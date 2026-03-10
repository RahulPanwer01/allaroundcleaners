import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { cities, provinces } from "@/data/locations";
import { services } from "@/data/services";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/book-now",
  "/checklist",
  "/contact",
  "/coverage",
  "/faq",
  "/join-us",
  "/pricing",
  "/privacy",
  "/quote",
  "/services",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaroundcleaners.ca";

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...provinces.map((province) => ({
      url: `${baseUrl}/locations/${province.slug}`,
      lastModified: new Date(),
    })),
    ...cities.map((city) => ({
      url: `${baseUrl}/locations/${city.provinceSlug}/${city.slug}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
