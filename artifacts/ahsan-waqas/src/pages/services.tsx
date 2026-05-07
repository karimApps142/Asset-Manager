import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Search, ShoppingCart, Zap, LayoutTemplate, BarChart3, Target, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "wordpress",
      title: "WordPress Development",
      icon: <Code2 size={40} className="text-primary" />,
      image: "/service-wordpress.png",
      desc: "Custom-built, scalable, and secure WordPress websites tailored to your exact business needs without the bloat of generic themes.",
      features: ["Custom Theme Development", "Plugin Integration & Development", "API Integrations", "Security Hardening", "Content Migration"]
    },
    {
      id: "seo",
      title: "Technical & On-Page SEO",
      icon: <Search size={40} className="text-primary" />,
      image: "/service-seo.png",
      desc: "Deep architectural optimization and content structuring that search engines love, driving qualified organic traffic to your site.",
      features: ["Crawlability Optimization", "Indexation Management", "Schema Markup", "Keyword Strategy", "Content Intent Matching"]
    },
    {
      id: "woocommerce",
      title: "WooCommerce Solutions",
      icon: <ShoppingCart size={40} className="text-primary" />,
      image: "/service-woocommerce.png",
      desc: "High-converting e-commerce platforms designed for speed, user experience, and seamless checkout flows.",
      features: ["Custom Store Design", "Payment Gateway Setup", "Inventory Management", "Cart Abandonment Recovery", "Subscription Models"]
    },
    {
      id: "elementor",
      title: "Elementor Design",
      icon: <LayoutTemplate size={40} className="text-primary" />,
      image: null,
      desc: "Pixel-perfect, visually stunning layouts using Elementor Pro, optimized for performance and mobile responsiveness.",
      features: ["Custom Landing Pages", "Dynamic Content Templates", "Interactive Animations", "Global Theme Styling", "Mobile-First Design"]
    },
    {
      id: "speed",
      title: "Speed Optimization",
      icon: <Zap size={40} className="text-primary" />,
      image: "/service-speed.png",
      desc: "Passing Core Web Vitals and achieving sub-second load times to decrease bounce rates and improve rankings.",
      features: ["Image WebP Conversion", "CSS/JS Minification", "Advanced Caching", "Database Cleanup", "CDN Implementation"]
    },
    {
      id: "audits",
      title: "Comprehensive SEO Audits",
      icon: <BarChart3 size={40} className="text-primary" />,
      image: "/service-seo.png",
      desc: "In-depth analysis of your website's health, uncovering hidden technical issues that are actively preventing you from ranking.",
      features: ["150+ Point Technical Checklist", "Backlink Toxicity Analysis", "Competitor Gap Analysis", "UI/UX Review", "Actionable Roadmap"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Ahsan Waqas - WordPress & SEO Solutions</title>
        <meta name="description" content="Explore professional WordPress development, technical SEO, WooCommerce, and speed optimization services by Ahsan Waqas." />
        <meta property="og:title" content="Services | Ahsan Waqas - WordPress & SEO Solutions" />
        <meta property="og:description" content="Expert WordPress development, technical SEO, WooCommerce & speed optimization services." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Digital Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end technical solutions designed to establish authority, maximize visibility, and drive revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg">
                    <Link href={`/contact?service=${service.id}`}>Discuss Your Project</Link>
                  </Button>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden relative group">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                        <div className="relative z-10 scale-[2] text-border group-hover:text-primary/20 transition-colors duration-500 flex items-center justify-center h-full">
                          {service.icon}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't See What You Need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I handle highly custom technical implementations and complex migrations. Contact me to discuss your specific requirements.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}