import { Link } from "wouter";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiUpwork, SiFiverr, SiLinktree } from "react-icons/si";
import { Mail } from "lucide-react";

const SOCIAL = [
  { href: "https://api.whatsapp.com/send?phone=923463256941", label: "WhatsApp", icon: <FaWhatsapp size={16} /> },
  { href: "https://www.instagram.com/ahsan142p/", label: "Instagram", icon: <FaInstagram size={16} /> },
  { href: "https://pk.linkedin.com/in/ahsan142p", label: "LinkedIn", icon: <FaLinkedin size={16} /> },
  { href: "https://upwork.com/freelancers/ahsan1", label: "Upwork", icon: <SiUpwork size={16} /> },
  { href: "https://fiverr.com/ahsan142p", label: "Fiverr", icon: <SiFiverr size={16} /> },
  { href: "https://linktr.ee/ahsanwaqas", label: "Linktree", icon: <SiLinktree size={16} /> },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="font-bold tracking-tight">
                <span className="text-xl text-foreground">Ahsan <span className="text-primary">Waqas</span></span>
                <div className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase mt-0.5">WordPress & SEO Expert</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Senior WordPress Developer & SEO Specialist turning underperforming websites into revenue-generating machines with 15+ years of battle-tested experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "WordPress Development", href: "/services#wordpress" },
                { label: "SEO Optimization", href: "/services#seo" },
                { label: "WooCommerce Solutions", href: "/services#woocommerce" },
                { label: "Elementor Design", href: "/services#elementor" },
                { label: "Speed Optimization", href: "/services#speed" },
                { label: "SEO Audits", href: "/services#audit" },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contactahsanwaqas@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={15} className="flex-shrink-0" />
                  contactahsanwaqas@gmail.com
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=923463256941" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <FaWhatsapp size={15} className="flex-shrink-0" />
                  +92 346 3256941
                </a>
              </li>
              <li>
                <a href="https://linktr.ee/ahsanwaqas" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <SiLinktree size={15} className="flex-shrink-0" />
                  linktr.ee/ahsanwaqas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ahsan Waqas. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
