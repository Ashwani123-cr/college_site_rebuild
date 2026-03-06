import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Placements", href: "#placements" },
  { label: "Life@KCC", href: "#life" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-kcc-dark/98 backdrop-blur-xl shadow-elevated border-b border-primary/5"
          : "bg-kcc-dark/80 backdrop-blur-md"
      }`}
    >
      <div className="container-wide mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
                src="/kcc-logo.png"
                alt="KCC Institute Logo"
                className="h-12 w-auto"
              />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-primary-foreground text-sm lg:text-base leading-tight">KCC Institute</p>
            <p className="text-primary-foreground/40 text-[10px] lg:text-xs tracking-wider">GREATER NOIDA</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-lg group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+911234567890"
            className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://admissions.kccitm.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-hero text-primary-foreground font-semibold text-sm rounded-xl shadow-red hover:shadow-elevated hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary-foreground rounded-lg hover:bg-primary-foreground/5 transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-kcc-dark/98 backdrop-blur-xl border-t border-primary-foreground/5"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground rounded-xl hover:bg-primary-foreground/5 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="https://admissions.kccitm.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-6 py-3.5 bg-gradient-hero text-primary-foreground font-semibold text-sm rounded-xl text-center shadow-red"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
