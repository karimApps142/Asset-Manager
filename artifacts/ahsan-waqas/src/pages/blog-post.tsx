import { Helmet } from "react-helmet-async";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  // Mock post data based on slug. In a real app this would be fetched.
  const post = {
    title: "The Ultimate Guide to Passing Core Web Vitals on WordPress in 2024",
    category: "Technical SEO",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    author: "Ahsan Waqas",
    content: `
      <h2>The Core Web Vitals Landscape</h2>
      <p>Google's Core Web Vitals (CWV) are no longer just a tie-breaker; they are a fundamental requirement for competitive rankings. If your WordPress site is failing LCP, INP, or CLS, you are actively losing traffic to faster competitors.</p>
      
      <h2>1. Fixing Largest Contentful Paint (LCP)</h2>
      <p>LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</p>
      <ul>
        <li>Preload your hero image</li>
        <li>Eliminate render-blocking CSS and JS</li>
        <li>Upgrade your hosting environment</li>
      </ul>

      <h2>2. Addressing Interaction to Next Paint (INP)</h2>
      <p>INP has replaced FID as the responsiveness metric. It measures the latency of all interactions a user has with the page.</p>
      <p>WordPress sites heavily reliant on bloated page builders often fail INP. The solution involves deferring non-critical JS, breaking up long tasks, and optimizing third-party scripts.</p>

      <h2>3. Stabilizing Cumulative Layout Shift (CLS)</h2>
      <p>CLS measures visual stability. The most common culprits in WordPress are images without dimensions, dynamically injected ads, and web fonts causing FOIT.</p>
      <p>Always declare width and height attributes on your images and videos, and use font-display: swap in your CSS.</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Ahsan Waqas</title>
        <meta name="description" content="Read expert insights on technical SEO and WordPress development." />
      </Helmet>

      {/* Article Header */}
      <section className="pt-32 pb-12 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article 
                className="prose prose-invert prose-blue max-w-none
                  prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-muted-foreground prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
                <Tag size={18} className="text-muted-foreground" />
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-card border border-border rounded-md text-xs text-muted-foreground hover:text-foreground cursor-pointer">WordPress</span>
                  <span className="px-3 py-1 bg-card border border-border rounded-md text-xs text-muted-foreground hover:text-foreground cursor-pointer">Performance</span>
                  <span className="px-3 py-1 bg-card border border-border rounded-md text-xs text-muted-foreground hover:text-foreground cursor-pointer">Core Web Vitals</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Author Bio */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-4">
                  AW
                </div>
                <h3 className="font-bold text-lg mb-2">{post.author}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Senior WordPress Developer & SEO Specialist with 15+ years experience building revenue-generating systems.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/about">About Ahsan</Link>
                </Button>
              </div>

              {/* Related CTA */}
              <div className="bg-primary p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <h3 className="font-bold text-xl text-white mb-4 relative z-10">Is your site failing Core Web Vitals?</h3>
                <p className="text-white/80 mb-6 text-sm relative z-10">
                  Get a comprehensive technical audit to identify exactly what is holding your rankings back.
                </p>
                <Button variant="secondary" className="w-full text-primary font-bold relative z-10" asChild>
                  <Link href="/contact">Request Audit</Link>
             </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}