import { BlogCard } from "@/components/shared/cards";
import { Hero } from "@/components/sections/hero";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cleaning Blog | All Around Cleaners",
  description: "Read practical cleaning advice, pricing guides, and service planning articles from All Around Cleaners.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Practical cleaning advice that helps clients plan smarter."
        description="Browse original articles covering move-out pricing, deep cleaning, renovation cleanup, pre-sale prep, and more."
        compact
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} title={post.title} description={post.description} href={`/blog/${post.slug}`} meta={`${post.category} • ${post.readTime}`} />
          ))}
        </div>
      </section>
    </>
  );
}
