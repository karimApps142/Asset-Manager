import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo: Name + Subtitle stacked */}
        <Link href="/" className="group flex-shrink-0">
          <div className="font-bold tracking-tight leading-none">
            <span className="text-lg md:text-xl text-white group-hover:text-white/90 transition-colors">
              AHSAN <span className="text-primary">WAQAS</span>
            </span>
            <div className="text-[10px] md:text-xs text-white/40 font-medium tracking-widest uppercase mt-0.5">
              WordPress & SEO Expert
            </div>
          </div>
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                location === item.href
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          data-testid="button-book-call"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex-shrink-0"
        >
          Book a Call <ArrowRight size={15} />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030712] border-b border-white/5 shadow-2xl">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                  location === item.href
                    ? "text-white bg-primary/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call <ArrowRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
