import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { Globe, BadgeCheck } from "lucide-react";
import { ProfileActions } from "./profile-actions";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return `<p>${escapeHtml(fallback)}</p>`;
  if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
  return source
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
    .join("");
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const username = content.username as string | undefined || post.slug;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    (content.bio as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  
  // Stats from content or defaults
  const followers = (content.followers as number | undefined) || 0;
  const following = (content.following as number | undefined) || 0;
  const isVerified = (content.isVerified as boolean | undefined) || false;
  
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const profileUrl = `${baseUrl}/profile/${post.slug}`;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/profile/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarShell />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Pinterest-style Profile Card */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Logo/Avatar - Left side */}
            <div className="flex-shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-100 bg-zinc-50 shadow-sm sm:h-32 sm:w-32 md:h-36 md:w-36">
                {logoUrl ? (
                  <ContentImage 
                    src={logoUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover" 
                    sizes="144px" 
                    intrinsicWidth={144} 
                    intrinsicHeight={144} 
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#BFFF00] to-lime-500 text-3xl font-bold text-black sm:text-4xl">
                    {post.title.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            
            {/* Content - Right side */}
            <div className="flex-1 min-w-0">
              {/* Header: Name and Verified Badge */}
              <div className="flex items-start gap-2">
                <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl">{brandName}</h1>
                {isVerified && (
                  <BadgeCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[#BFFF00] sm:h-6 sm:w-6" />
                )}
              </div>
              
              {/* Username */}
              <p className="mt-1 text-sm font-medium text-zinc-500">@{username}</p>
              
              {/* Stats Row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="font-semibold text-zinc-900">
                  {followers.toLocaleString()}
                  <span className="ml-1 font-normal text-zinc-500">followers</span>
                </span>
                <span className="text-zinc-300">·</span>
                <span className="font-semibold text-zinc-900">
                  {following.toLocaleString()}
                  <span className="ml-1 font-normal text-zinc-500">following</span>
                </span>
              </div>
              
              {/* Description/Bio */}
              <article
                className="article-content prose prose-slate mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 prose-p:my-2 prose-a:text-lime-600 prose-a:underline prose-strong:font-semibold sm:text-base sm:prose-p:my-3"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
              
              {/* Website Link */}
              {domain && (
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-zinc-500" />
                  <Link 
                    href={website || `#`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-zinc-900 hover:text-[#BFFF00] hover:underline"
                  >
                    {domain}
                  </Link>
                </div>
              )}
              
              {/* Follow and Share Buttons */}
              <div className="mt-6">
                <ProfileActions profileUrl={profileUrl} />
              </div>
            </div>
          </div>
        </section>

        {suggestedArticles.length ? (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Suggested articles</h2>
              <Link href="/articles" className="text-sm font-medium text-[#BFFF00] hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <TaskPostCard
                  key={article.id}
                  post={article}
                  href={buildPostUrl("article", article.slug)}
                  compact
                />
              ))}
            </div>
            <nav className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-zinc-200">Related links</p>
              <ul className="mt-2 space-y-2 text-sm">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <li key={`related-${article.id}`}>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="text-[#BFFF00] underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/profile" className="text-[#BFFF00] underline-offset-4 hover:underline">
                    Browse all profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
