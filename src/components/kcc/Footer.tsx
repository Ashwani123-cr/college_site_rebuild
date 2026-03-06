import { Phone, Mail, MapPin, ExternalLink, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-kcc-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-hero" />
      
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              
              <img 
                src="/kcc-logo.png"
                alt="KCC Institute Logo"
                className="h-12 w-auto"
              />
              <div>
                <p className="font-display font-bold text-sm">KCC Institute</p>
                <p className="text-[10px] text-primary-foreground/40 tracking-wider uppercase">Greater Noida</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed mb-6">
              Shaping futures through innovation, excellence, and holistic education for over two decades.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <s.icon size={16} className="text-primary-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-primary-foreground/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Admissions", href: "https://admissions.kccitm.edu.in/" },
                { label: "Placements", href: "#placements" },
                { label: "Life@KCC", href: "#life" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/50 hover:text-primary transition-colors flex items-center gap-1 group">
                    {link.label}
                    {link.href.startsWith("http") && <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-primary-foreground/40 mb-5">Programs</h4>
            <ul className="space-y-3">
              {["B.Tech", "MBA Plus", "BBA", "BCA", "B.COM (H)", "BA LLB (H)", "BBA LLB (H)"].map((prog) => (
                <li key={prog}>
                  <span className="text-sm text-primary-foreground/50">{prog}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-primary-foreground/40 mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone size={14} />
                </div>
                +91-120-XXX-XXXX
              </a>
              <a href="mailto:info@kccitm.edu.in" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Mail size={14} />
                </div>
                info@kccitm.edu.in
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>Knowledge Park II, Greater Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} KCC Institute, Greater Noida. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
