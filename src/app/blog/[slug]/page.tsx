import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogCard } from "@/components/shared/cards";
import { blogPosts } from "@/data/blog";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { JsonLd, getBreadcrumbSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found | All Around Cleaners",
      description: "The requested blog article could not be found.",
    });
  }

  return buildMetadata({
    title: `${post.title} | All Around Cleaners`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Blog", url: `${siteUrl}/blog` },
          { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
        ])}
      />
      <div className="pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: post.title }]} />
        </div>
        <Hero eyebrow={post.category} title={post.title} description={post.description} compact />
      </div>
      <article className="section-space">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {post.date} • {post.readTime}
          </p>
          <div className="mt-8 h-72 rounded-4xl bg-gradient-to-br from-teal/15 via-mist to-mint/20" />
          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-slate">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <h2 className="text-3xl font-semibold text-ink">Related articles</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} title={item.title} description={item.description} href={`/blog/${item.slug}`} meta={`${item.category} • ${item.readTime}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
