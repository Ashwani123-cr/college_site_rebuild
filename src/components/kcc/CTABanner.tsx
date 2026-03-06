import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(0_0%_100%_/_0.1),_transparent_60%)]" />
      
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-primary-foreground/10 animate-float" />
      <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full border border-primary-foreground/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-7 h-7 text-primary-foreground" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Future Starts <br className="hidden sm:block" />
            With One Decision
          </h2>
          <p className="text-primary-foreground/70 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
            Join 12,000+ alumni who chose KCC and built extraordinary careers. 
            Admissions for 2026-27 are now open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://admissions.kccitm.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary-foreground text-kcc-dark font-bold rounded-xl hover:shadow-elevated transition-all text-base group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all text-base"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
