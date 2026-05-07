import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      slug: "core-web-vitals-guide-2024",
      title: "The Ultimate Guide to Passing Core Web Vitals on WordPress in 2024",
      excerpt: "Stop losing rankings to slow load times. Learn the exact technical steps to optimize LCP, INP, and CLS on any WordPress setup.",
      category: "Technical SEO",
      date: "Oct 12, 2024",
      readTime: "8 min read"
    },
    {
      slug: "woocommerce-scaling-issues",
      title: "Why Your WooCommerce Store is Slow (And How to Fix It)",
      excerpt: "Database bloat and inefficient queries are killing your conversion rate. Here's a deep dive into scaling high-traffic WooCommerce sites.",
      category: "WooCommerce",
      date: "Sep 28, 2024",
      readTime: "6 min read"
    },
    {
      slug: "elementor-performance-optimization",
      title: "Optimizing Elementor: Fast Sites Without Sacrificing Design",
      excerpt: "Yes, you can have a blazing fast Elementor site. Discover the specific settings, plugins, and server tweaks needed to achieve 90+ mobile scores.",
      category: "Elementor",
      date: "Sep 15, 2024",
      readTime: "5 min read"
    },
    {
      slug: "local-seo-schema-markup",
      title: "Mastering Local SEO Schema Markup for Dominance",
      excerpt: "How to implement advanced JSON-LD structured data to force Google to show your business in the local map pack.",
      category: "SEO",
      date: "Aug 30, 2024",
      readTime: "7 min read"
    },
    {
      slug: "wordpress-security-checklist",
      title: "The 15-Point Technical WordPress Security Checklist",
      excerpt: "Protect your site from automated attacks and malicious injections. A developer's guide to hardening WordPress infrastructure.",
      category: "WordPress",
      date: "Aug 14, 2024",
      readTime: "10 min read"
    },
    {
      slug: "ai-seo-future",
      title: "How AI is Changing Technical SEO (And What Remains the Same)",
      excerpt: "SGE and AI overviews are changing the SERPs, but technical foundation matters more than ever. Here is how to adapt.",
      category: "AI SEO",
      date: "Jul 22, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "SEO", "WordPress", "WooCommerce", "Elementor", "Technical SEO", "AI SEO"];

  return (
    <>
      <Helmet>
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
        <title>Blog | Technical SEO & WordPress Insights</title>
        <meta name="description" content="Expert articles, tutorials, and insights on technical SEO, WordPress development, WooCommerce scaling, and digital growth." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights & Engineering</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep dives into technical SEO, high-performance WordPress development, and strategies that actually move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors flex flex-col group">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-10">
              {/* Search */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input placeholder="Search..." className="pl-10 bg-background border-border" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <button key={i} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground hover:text-foreground border border-border'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card p-6 rounded-xl border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[30px] translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="font-bold text-lg mb-2 relative z-10">Join the Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4 relative z-10">Get technical SEO and WordPress tips delivered straight to your inbox.</p>
                <div className="space-y-3 relative z-10">
                  <Input placeholder="Email address" className="bg-background border-border" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}