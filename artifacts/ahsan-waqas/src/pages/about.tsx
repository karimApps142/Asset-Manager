import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Ahsan Waqas | 15+ Years WordPress & SEO Expert</title>
        <meta name="description" content="Learn about Ahsan Waqas, a seasoned professional specializing in WordPress development, technical SEO, and scalable digital solutions." />
        <meta property="og:title" content="About Ahsan Waqas | 15+ Years WordPress & SEO Expert" />
        <meta property="og:description" content="Senior WordPress Developer & SEO Specialist with 15+ years helping businesses rank higher and convert better." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Ahsan Waqas.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              For over 15 years, I've been bridging the gap between high-performance code and search engine algorithms. I build systems that don't just look good—they dominate search results.
            </p>
            <div className="flex gap-4">
              <Button asChild><Link href="/contact">Let's Talk</Link></Button>
              <Button variant="outline" asChild><Link href="/case-studies">View Portfolio</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Skills */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey in 2009, when WordPress was just emerging as a dominant CMS and SEO was a completely different landscape. Over the years, I've evolved alongside the web, adapting to every major algorithmic shift and technological advancement.
                </p>
                <p>
                  What sets my approach apart is the fusion of development and marketing. Most developers write great code but ignore crawlability. Most SEOs understand rankings but can't optimize server architecture. I do both.
                </p>
                <p>
                  From fixing complex WooCommerce databases that drag down conversion rates, to auditing massive corporate sites for indexation blockers, my goal is singular: measurable ROI for my clients.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Advanced WordPress Dev", "Technical SEO Audits", "WooCommerce Scaling", 
                  "Core Web Vitals", "Local & Enterprise SEO", "Elementor Pro Expert",
                  "Server Optimization", "Schema & Structured Data", "E-commerce SEO",
                  "Migration Strategy"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-12">
            {[
              {
                year: "2018 - Present",
                role: "Senior Independent Consultant",
                desc: "Consulting for enterprise clients and agencies, specializing in complex technical SEO recoveries, high-traffic WooCommerce scaling, and custom WP development."
              },
              {
                year: "2014 - 2018",
                role: "Lead SEO & Web Engineer",
                desc: "Led a team of developers and marketers to execute full-stack digital strategies for B2B tech companies, achieving an average 200% organic growth year-over-year."
              },
              {
                year: "2009 - 2014",
                role: "Freelance Web Developer",
                desc: "Began specializing in WordPress theme development and early on-page SEO techniques, building foundational websites for local businesses."
              }
            ].map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="hidden md:flex flex-col items-center justify-center relative md:col-span-1">
                    <div className="w-4 h-4 rounded-full bg-primary relative z-10"></div>
                    <div className="absolute top-4 bottom-[-48px] w-px bg-border"></div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Certifications & Accolades</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Award />, title: "Google Analytics 4" },
              { icon: <Briefcase />, title: "Google Ads Search" },
              { icon: <BookOpen />, title: "SEMrush Technical SEO" },
              { icon: <GraduationCap />, title: "HubSpot Content Mkt" }
            ].map((cert, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold">{cert.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}