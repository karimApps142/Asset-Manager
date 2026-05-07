import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiUpwork, SiFiverr, SiLinktree } from "react-icons/si";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent Successfully!",
      description: "I will get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <>
      <Helmet>
        <title>Contact Ahsan Waqas | Hire Senior WP & SEO Expert</title>
        <meta name="description" content="Get in touch to discuss your WordPress development or SEO project. Available for consulting and full-scale builds." />
        <meta property="og:title" content="Contact Ahsan Waqas | Hire Senior WP & SEO Expert" />
        <meta property="og:description" content="Get in touch to discuss your WordPress development or SEO project." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something Great</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you need a complete technical overhaul, a new platform built from scratch, or expert SEO consulting, I'm ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Form Column */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="text-primary" /> Send a Message
                </h2>
                <p className="text-muted-foreground">Fill out the form below and I'll respond within 24 hours.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-card" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-card" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" className="bg-card" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-card">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wp-dev">WordPress Development</SelectItem>
                              <SelectItem value="seo">Technical SEO & Audits</SelectItem>
                              <SelectItem value="woo">WooCommerce Setup</SelectItem>
                              <SelectItem value="speed">Speed Optimization</SelectItem>
                              <SelectItem value="consulting">General Consulting</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your business, current challenges, and goals..." 
                              className="bg-card min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full sm:w-auto font-bold px-8">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* Info Column */}
            <div className="space-y-10">
              
              {/* Contact Details */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Email</p>
                      <a href="mailto:contactahsanwaqas@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">contactahsanwaqas@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">WhatsApp / Phone</p>
                      <a href="https://api.whatsapp.com/send?phone=923463256941" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+92 346 3256941</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Location</p>
                      <p className="text-muted-foreground">Remote / Global Availability</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Connect Socially</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { href: "https://api.whatsapp.com/send?phone=923463256941", icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
                      { href: "https://www.instagram.com/ahsan142p/", icon: <FaInstagram size={18} />, label: "Instagram" },
                      { href: "https://pk.linkedin.com/in/ahsan142p", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
                      { href: "https://upwork.com/freelancers/ahsan1", icon: <SiUpwork size={18} />, label: "Upwork" },
                      { href: "https://fiverr.com/ahsan142p", icon: <SiFiverr size={18} />, label: "Fiverr" },
                      { href: "https://linktr.ee/ahsanwaqas", icon: <SiLinktree size={18} />, label: "Linktree" },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-4">Schedule a Discovery Call</h3>
                <p className="text-muted-foreground mb-6">Prefer to chat directly? Book a 30-minute free consultation call at your convenience.</p>
                <div className="p-6 border border-dashed border-primary/30 bg-primary/5 rounded-xl">
                  <p className="text-sm font-medium text-primary mb-4">Calendly Integration Goes Here</p>
                  <Button variant="outline" asChild>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer">Open Calendly</a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}