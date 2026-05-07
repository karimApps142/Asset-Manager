import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, TrendingUp, Zap } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      title: "E-Commerce Organic Turnaround",
      tag: "WooCommerce & SEO",
      image: "/case-study-traffic.png",
      challenge: "A major electronics retailer lost 60% of organic traffic following a poorly executed platform migration, resulting in massive revenue loss.",
      solution: "Conducted a deep technical audit, fixed indexation bloat, restored canonical structures, and implemented advanced schema markup.",
      results: [
        { label: "Organic Traffic", value: "+340%" },
        { label: "Revenue", value: "+$120k/mo" }
      ]
    },
    {
      title: "Local Market Domination",
      tag: "Local SEO",
      image: "/case-study-local.png",
      challenge: "A regional dental clinic chain was stuck on page 3 for their primary high-intent keywords, losing patients to competitors.",
      solution: "Overhauled Google Business Profiles, built hyper-local landing pages, and cleaned up NAP citations across data aggregators.",
      results: [
        { label: "Map Pack Rankings", value: "Top 3" },
        { label: "Lead Volume", value: "+215%" }
      ]
    },
    {
      title: "Core Web Vitals Optimization",
      tag: "Speed Optimization",
      image: "/service-speed.png",
      challenge: "A high-traffic publishing site was failing CWV on mobile, leading to poor ad viewability and dropping search visibility.",
      solution: "Refactored the WordPress theme, deferred non-critical JS, implemented proper image sizing, and shifted to edge caching.",
      results: [
        { label: "Load Time", value: "-70%" },
        { label: "Bounce Rate", value: "-45%" }
      ]
    },
    {
      title: "B2B SaaS Lead Generation",
      tag: "Technical SEO",
      image: "/service-seo.png",
      challenge: "A software company was generating traffic but zero qualified leads due to poor intent matching and terrible site architecture.",
      solution: "Restructured the URL hierarchy, mapped content to the buyer's journey, and optimized conversion paths on Elementor.",
      results: [
        { label: "Organic SQLs", value: "+180%" },
        { label: "Keyword Rankings", value: "+45 Top 10" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Ahsan Waqas Results</title>
        <meta name="description" content="View real results and case studies demonstrating how Ahsan Waqas drives organic growth, revenue, and technical excellence." />
        <meta property="og:title" content="Case Studies | Ahsan Waqas Results" />
        <meta property="og:description" content="Real client results: +340% organic traffic, dominating local map packs, slashing load times by 70%." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Proven Results</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Data-driven case studies detailing exact methodologies used to achieve massive organic growth and technical turnarounds.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studies.map((study, i) => (
              <Card key={i} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors flex flex-col h-full">
                {study.image && (
                  <div className="h-44 overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                )}
                {!study.image && <div className="h-2 bg-primary"></div>}
                <CardContent className="p-8 flex flex-col flex-1">
                  <span className="inline-block px-3 py-1 bg-secondary text-xs font-semibold rounded-full mb-6 self-start">{study.tag}</span>
                  <h2 className="text-2xl font-bold mb-6">{study.title}</h2>
                  
                  <div className="space-y-6 flex-1">
                    <div>
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Activity size={16}/> The Challenge
                      </h3>
                      <p className="text-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Zap size={16}/> The Solution
                      </h3>
                      <p className="text-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp size={16}/> The Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((res, idx) => (
                        <div key={idx} className="bg-background rounded-lg p-4 border border-border">
                          <div className="text-2xl font-bold text-foreground mb-1">{res.value}</div>
                          <div className="text-xs text-muted-foreground">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Want similar results? Let's talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}