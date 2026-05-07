import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Code2, 
  Search, 
  ShoppingCart, 
  Zap, 
  LineChart, 
  LayoutTemplate,
  MonitorSmartphone,
  Trophy,
  Users,
  Clock,
  Star,
  SearchCheck,
  Target
} from "lucide-react";
import { 
  SiWordpress, 
  SiWoocommerce, 
  SiElementor, 
  SiGoogleanalytics, 
  SiShopify
} from "react-icons/si";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahsan Waqas",
    "jobTitle": "Senior WordPress Developer & SEO Specialist",
    "url": "https://ahsanwaqas.com",
    "sameAs": [
      "https://pk.linkedin.com/in/ahsan142p",
      "https://upwork.com/freelancers/ahsan1",
      "https://fiverr.com/ahsan142p"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ahsan Waqas | Senior WordPress Developer & SEO Expert</title>
        <meta name="description" content="Turn your underperforming website into a revenue-generating machine with Ahsan Waqas, a Senior WordPress Developer and SEO Specialist with 15+ years of experience." />
        <meta property="og:title" content="Ahsan Waqas | Senior WordPress Developer & SEO Expert" />
        <meta property="og:description" content="15+ years of WordPress mastery and technical SEO expertise. Helping businesses rank higher and convert better." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ahsanwaqas.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahsan Waqas | Senior WordPress Developer & SEO Expert" />
        <meta name="twitter:description" content="15+ years of WordPress mastery and technical SEO expertise. Helping businesses rank higher and convert better." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://ahsanwaqas.com" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section — two-column split like reference */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#030712]">
        {/* Purple/blue radial glow on right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(109,40,217,0.35)_0%,_rgba(37,99,235,0.15)_50%,_transparent_75%)]"></div>
        </div>
        {/* Floating dots */}
        <div className="absolute right-[38%] top-[30%] w-3 h-3 rounded-full bg-primary/60 blur-[1px] animate-pulse"></div>
        <div className="absolute right-[20%] top-[65%] w-2 h-2 rounded-full bg-violet-500/60 blur-[1px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute right-[55%] top-[70%] w-1.5 h-1.5 rounded-full bg-primary/40"></div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

            {/* LEFT — Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="flex flex-col justify-center"
            >
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-6"
              >
                I Help Businesses{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-violet-500">
                  Rank Higher
                </span>{" "}
                &amp; Convert Better
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                className="text-lg text-white/55 mb-10 max-w-xl leading-relaxed"
              >
                Combining 15+ years of WordPress mastery and technical SEO expertise to build high-performance digital growth systems that dominate search rankings.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-4 mb-5"
              >
                <Button size="lg" asChild className="h-13 px-8 text-base font-semibold shadow-xl shadow-primary/25 inline-flex items-center gap-2">
                  <Link href="/contact" data-testid="button-hero-primary">
                    Get a Free SEO Audit <ArrowRight size={16} />
                  </Link>
                </Button>
                <button
                  onClick={() => document.getElementById('case-studies-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-base font-medium text-white/70 hover:text-white transition-colors px-2"
                  data-testid="button-hero-secondary"
                >
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowRight size={14} />
                  </span>
                  View Case Studies
                </button>
              </motion.div>

              {/* Urgency / social proof line */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex items-center gap-2 text-sm text-white/40"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                Limited availability — <span className="text-primary font-semibold">3 client spots open for June 2025</span>
              </motion.div>
            </motion.div>

            {/* RIGHT — Circular photo with glow ring + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex items-center justify-center py-16 lg:py-0"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-600/30 via-primary/20 to-transparent blur-2xl"></div>
              </div>

              {/* Photo circle with gradient ring */}
              <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full flex-shrink-0">
                {/* Rotating gradient ring */}
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary via-violet-500 to-primary/20 animate-spin" style={{ animationDuration: "8s" }}></div>
                {/* Inner mask */}
                <div className="absolute inset-[3px] rounded-full bg-[#030712]"></div>
                {/* Ahsan's photo */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#030712]">
                  <img
                    src="/ahsan-photo.png"
                    alt="Ahsan Waqas — Senior WordPress Developer & SEO Specialist"
                    className="w-full h-full object-cover object-top scale-110"
                    loading="eager"
                    width="380"
                    height="380"
                  />
                </div>
              </div>

              {/* Floating Badge — Google Analytics (hidden on mobile to prevent overflow) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="hidden sm:flex absolute left-0 bottom-[20%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 items-center gap-2 shadow-xl"
              >
                <SiGoogleanalytics size={20} className="text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-white text-xs font-semibold leading-none">Google</div>
                  <div className="text-white/50 text-[10px]">Analytics Certified</div>
                </div>
              </motion.div>

              {/* Floating Badge — Upwork Top Rated */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden sm:flex absolute right-0 top-[22%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 items-center gap-2 shadow-xl"
              >
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold leading-none">Upwork</div>
                  <div className="text-white/50 text-[10px]">Top Rated Plus</div>
                </div>
              </motion.div>

              {/* Floating Badge — WordPress Expert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden sm:flex absolute right-[10%] bottom-[8%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 items-center gap-2 shadow-xl"
              >
                <SiWordpress size={18} className="text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white text-xs font-semibold leading-none">WordPress</div>
                  <div className="text-white/50 text-[10px]">15+ Years Expert</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Marquee */}
      <section className="py-12 border-b border-border bg-card">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Tools I Master Daily</h2>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiWordpress size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiWoocommerce size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiElementor size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><span className="text-sm font-bold tracking-widest px-3 py-1 border border-border rounded-full">AHREFS</span></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><span className="text-sm font-bold tracking-widest px-3 py-1 border border-border rounded-full">SEMRUSH</span></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiGoogleanalytics size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiShopify size={40} /></li>
            {/* Duplicate for seamless looping */}
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiWordpress size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiWoocommerce size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><SiElementor size={40} /></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><span className="text-sm font-bold tracking-widest px-3 py-1 border border-border rounded-full">AHREFS</span></li>
            <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><span className="text-sm font-bold tracking-widest px-3 py-1 border border-border rounded-full">SEMRUSH</span></li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What I Do Best</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technical solutions designed to elevate your online presence and drive measurable business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code2 className="text-primary" size={32} />, title: "WordPress Development", desc: "Custom, scalable, and high-performance WordPress websites built from scratch." },
              { icon: <SearchCheck className="text-primary" size={32} />, title: "Technical SEO", desc: "Deep architectural optimization to ensure search engines crawl and index perfectly." },
              { icon: <ShoppingCart className="text-primary" size={32} />, title: "WooCommerce", desc: "Conversion-optimized e-commerce stores that maximize your revenue." },
              { icon: <Search className="text-primary" size={32} />, title: "Shopify SEO", desc: "Targeted strategies to increase organic traffic and sales for Shopify stores." },
              { icon: <Target className="text-primary" size={32} />, title: "Local SEO", desc: "Dominate your local market and Google Maps with proven local ranking tactics." },
              { icon: <Zap className="text-primary" size={32} />, title: "Speed Optimization", desc: "Lightning-fast load times to improve user experience and Core Web Vitals." },
              { icon: <BarChart3 className="text-primary" size={32} />, title: "SEO Audits", desc: "Comprehensive technical, on-page, and off-page analysis with actionable roadmaps." },
              { icon: <LayoutTemplate className="text-primary" size={32} />, title: "Elementor Design", desc: "Pixel-perfect, responsive, and visually stunning layouts using Elementor Pro." },
              { icon: <LineChart className="text-primary" size={32} />, title: "On-Page SEO", desc: "Content optimization, intent matching, and perfect semantic structure." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-xl bg-primary/10 inline-block group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary font-medium hover:underline">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Animated */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2"><AnimatedCounter end={300} suffix="+" /></div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">Websites Built</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2"><AnimatedCounter end={500} suffix="+" /></div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">SEO Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2"><AnimatedCounter end={15} suffix="+" /></div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2"><AnimatedCounter end={98} suffix="%" /></div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Results That Speak</h2>
              <p className="text-lg text-muted-foreground">Real numbers from real businesses. See how technical precision translates to organic growth.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: "E-Commerce SEO", title: "TechGadget Store", metric: "Traffic: +340%", desc: "Recovered lost rankings after a botched migration and tripled organic revenue in 6 months." },
              { tag: "Local SEO", title: "Elite Dental Clinic", metric: "Leads: +215%", desc: "Dominated the local map pack and increased monthly patient bookings significantly." },
              { tag: "Speed Optimization", title: "NewsPortal Daily", metric: "Load Time: -70%", desc: "Passed Core Web Vitals, resulting in a 45% drop in bounce rate and better ad viewability." }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-full rounded-2xl bg-card border border-border overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-secondary text-xs font-semibold rounded-full mb-6">{study.tag}</span>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg mb-6">
                      <TrendingUpIcon className="mr-2" size={20} />
                      {study.metric}
                    </div>
                    <p className="text-muted-foreground mb-8">{study.desc}</p>
                    <Link href={`/case-studies/${i}`} className="inline-flex items-center font-medium hover:text-primary transition-colors">
                      View Case Study <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why 300+ Businesses Trust Me</h2>
            <p className="text-lg text-muted-foreground">I don't just write code or tweak meta tags. I engineer complete digital growth systems.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Trophy size={24}/>, title: "15+ Years Expertise", desc: "Battle-tested experience across hundreds of diverse technical challenges and algorithm updates." },
              { icon: <LayersIcon size={24}/>, title: "Full-Stack SEO + Dev", desc: "No finger-pointing between developers and SEOs. I handle the complete technical pipeline." },
              { icon: <MousePointerClickIcon size={24}/>, title: "Conversion-First Approach", desc: "Traffic is useless without revenue. Every decision is optimized for actual business growth." },
              { icon: <CpuIcon size={24}/>, title: "Technical Excellence", desc: "Clean code, optimal server architecture, and pixel-perfect implementation every time." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-background border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">What Clients Say</h2>
          </div>

          <div className="max-w-6xl mx-auto" ref={emblaRef}>
            <div className="flex">
              {[
                { name: "Sarah Jenkins", role: "CEO, TechFlow", quote: "Ahsan completely rebuilt our messy WordPress site. Not only does it load in under a second now, but our organic traffic has doubled since the launch." },
                { name: "David Chen", role: "Founder, Peak Performance", quote: "Finding someone who truly understands both deep technical WordPress dev AND advanced SEO is rare. Ahsan is that rare find. Highly recommended." },
                { name: "Michael Roberts", role: "E-com Director", quote: "Our WooCommerce store was crawling. Ahsan's speed optimization and technical SEO audit uncovered issues 3 other agencies missed." },
                { name: "Emma Thompson", role: "Marketing VP", quote: "The Elementor redesign combined with his on-page SEO strategy increased our lead conversion rate by 140% in just three months." },
                { name: "James Wilson", role: "Local Business Owner", quote: "Ahsan's local SEO strategy put us in the top 3 map pack for all our main keywords. My phone hasn't stopped ringing." }
              ].map((testimonial, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                  <div className="h-full p-8 rounded-2xl bg-card border border-border relative">
                    <div className="flex gap-1 text-yellow-500 mb-6">
                      {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-foreground text-lg mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Proven 4-Step Process</h2>
            <p className="text-lg text-muted-foreground">A systematic approach to ensuring project success, delivered on time and above expectations.</p>
          </div>

          <div className="relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { num: "01", icon: <Search size={28}/>, title: "Discovery & Audit", desc: "Deep dive into your current setup, identifying technical bottlenecks and SEO opportunities." },
                { num: "02", icon: <LayoutTemplate size={28}/>, title: "Strategy", desc: "Creating a comprehensive roadmap for development, redesign, or ranking improvements." },
                { num: "03", icon: <Code2 size={28}/>, title: "Development", desc: "Flawless execution of code, design, and technical SEO implementations." },
                { num: "04", icon: <LineChart size={28}/>, title: "Growth & Scale", desc: "Monitoring, tweaking, and scaling the results to ensure long-term ROI." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-background border-2 border-primary flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/20 relative">
                    {step.icon}
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">Do you offer ongoing SEO maintenance?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. SEO is an ongoing process. I offer monthly retainers that cover technical monitoring, content optimization, link building, and performance reporting to ensure your rankings continually improve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">How long does it take to see SEO results?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                While technical fixes (like speed optimization) yield immediate metric improvements, meaningful organic traffic growth typically takes 3 to 6 months depending on your industry's competitiveness and your site's current state.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">Do you build custom WordPress themes?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. I build lightweight, custom WordPress themes from scratch without relying on bloated templates. I also specialize in custom Elementor Pro setups for clients who prefer visual builders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">Can you fix my slow WooCommerce store?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. WooCommerce speed optimization is one of my core specialties. I optimize database queries, implement advanced caching, configure CDNs, and clean up bloated plugins to achieve sub-second load times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium">What is included in an SEO Audit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                My technical SEO audits cover over 150+ data points including crawlability issues, indexation status, site architecture, Core Web Vitals, keyword gaps, backlink profile analysis, and a prioritized action plan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Dominate Google?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Stop losing revenue to your competitors. Let's build a technical foundation that drives sustained growth.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base text-primary font-bold">
              <Link href="/contact">Start My Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base text-white border-white/30 hover:bg-white/10">
              <a href="https://calendly.com" target="_blank" rel="noreferrer">Book Free Call</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Icon Components for missing Lucide imports
function TrendingUpIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  );
}

function LayersIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
  );
}

function MousePointerClickIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>
  );
}

function CpuIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
  );
}