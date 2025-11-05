import BlogHero from "@/components/blog/blog-hero";
import FeaturedPost from "@/components/blog/featured-post";
import BlogFeed from "@/components/blog/blog-feed";
import BlogSidebar from "@/components/blog/blog-sidebar";
import BlogCTA from "@/components/blog/blog-cta";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPost />
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogFeed />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <BlogCTA />
    </>
  );
}
