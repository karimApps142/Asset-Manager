import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing & Packages | Ahsan Waqas</title>
        <meta name="description" content="Transparent pricing for professional WordPress and SEO services. Choose the package that fits your business needs." />
        <meta property="og:title" content="Pricing & Packages | Ahsan Waqas" />
        <meta property="og:description" content="Transparent pricing for professional WordPress and SEO services." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-card text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Investment in Growth</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Clear, transparent pricing packages designed to deliver measurable ROI, whether you're launching a new site or scaling an enterprise platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="bg-card flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">From $499</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Perfect for small businesses needing a solid foundation.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-6 border-t border-border">
                <ul className="space-y-4">
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">WordPress Basic Setup</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Premium Theme Customization</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Essential On-Page SEO</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Basic Speed Optimization</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Mobile Responsive</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Contact Form Integration</span></li>
                </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-border">
                <Button className="w-full" variant="outline" asChild><Link href="/contact?plan=starter">Get Started</Link></Button>
              </CardFooter>
            </Card>

            {/* Growth */}
            <Card className="bg-card flex flex-col relative border-primary transform md:-translate-y-4 shadow-2xl shadow-primary/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                Recommended
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-primary">Growth</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">From $999</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Comprehensive setup for businesses ready to scale.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-6 border-t border-border">
                <ul className="space-y-4">
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Full WordPress + WooCommerce</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Custom Elementor Design</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Advanced Technical SEO Setup</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Advanced Speed & Core Web Vitals</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Schema Markup Implementation</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Google Analytics 4 & Search Console</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">1 Month SEO Reporting</span></li>
                </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-border">
                <Button className="w-full" size="lg" asChild><Link href="/contact?plan=growth">Get Started</Link></Button>
              </CardFooter>
            </Card>

            {/* Premium */}
            <Card className="bg-card flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">From $1,999</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Enterprise-grade solutions and full SEO campaigns.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-6 border-t border-border">
                <ul className="space-y-4">
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Bespoke Theme/Plugin Development</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Complex API Integrations</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Enterprise E-commerce Scaling</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Full Ongoing SEO Campaign Setup</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Server-Level Optimization</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary flex-shrink-0" size={20}/><span className="text-sm">Priority 24/7 Support</span></li>
                </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-border">
                <Button className="w-full" variant="outline" asChild><Link href="/contact?plan=premium">Contact for Quote</Link></Button>
              </CardFooter>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-2 p-4 bg-secondary rounded-lg border border-border">
              <ShieldCheck className="text-green-500" size={24} />
              <span className="font-medium text-foreground">100% Satisfaction Guarantee. I don't stop until the project meets your exact specifications.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Pricing Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">Why do prices say "From"?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Every business is unique. A 5-page informational site requires vastly different resources than a 500-product WooCommerce store. The "from" price represents the minimum baseline for that tier. We will agree on a fixed, final price before any work begins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">What are your payment terms?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Typically, I require a 50% deposit to commence work, with the remaining 50% due upon project completion and final approval before launch. For larger enterprise projects, we can structure milestone-based payments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">Are there any hidden fees?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No. The proposal price is the final price. The only additional costs you will incur are third-party services you own directly, such as your domain name, web hosting, and any premium plugin licenses required (which I will clearly specify upfront).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}