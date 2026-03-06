import { motion } from "framer-motion";
import { TrendingUp, Building2, Briefcase, ArrowRight } from "lucide-react";

const placementStats = [
  { value: "14.2 LPA", label: "Highest National Package", icon: TrendingUp },
  { value: "31 LPA", label: "Highest International Package", icon: Briefcase },
  { value: "250+", label: "Companies Visited", icon: Building2 },
];

const packageTiers = [
  { range: "20 LPA+", companies: "2 Companies", glow: true },
  { range: "10 LPA+", companies: "8+ Companies", glow: false },
  { range: "7 LPA+", companies: "25+ Companies", glow: false },
  { range: "5 LPA+", companies: "50+ Companies", glow: false },
];

const recruiterLogos = Array.from({ length: 12 }, (_, i) =>
  `https://www.kccitm.edu.in/images/place-recruiter-${i + 1}.webp`
);

const PlacementsSection = () => {
  return (
    <section id="placements" className="section-padding bg-gradient-dark text-primary-foreground overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Placements</span>
          <h2 className="section-title-light">Producing Skilled Professionals</h2>
          <p className="mt-4 text-primary-foreground/50 max-w-2xl mx-auto text-base sm:text-lg">
            Our placement cell works tirelessly to connect talent with top companies across the globe
          </p>
        </motion.div>

        {/* Big Stats */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {placementStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 sm:p-10 rounded-2xl glass-card group hover:bg-primary-foreground/[0.06] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Package Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12"
        >
          {packageTiers.map((tier) => (
            <div
              key={tier.range}
              className={`p-5 sm:p-6 rounded-xl text-center transition-all duration-300 ${
                tier.glow
                  ? "glass-card border-primary/30 shadow-red"
                  : "glass-card hover:bg-primary-foreground/[0.04]"
              }`}
            >
              <p className={`font-display text-xl sm:text-2xl font-bold ${tier.glow ? "text-primary" : "text-primary-foreground/80"}`}>
                {tier.range}
              </p>
              <p className="text-xs text-primary-foreground/40 mt-1">{tier.companies}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="https://admissions.kccitm.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground font-semibold text-sm rounded-xl shadow-red hover:shadow-elevated transition-all"
          >
            Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.kccitm.edu.in/training-placement/placement-updates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-primary-foreground/80 font-semibold text-sm rounded-xl hover:text-primary-foreground transition-colors"
          >
            View Placements
          </a>
        </div>

        {/* Recruiter Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-kcc-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-kcc-navy to-transparent z-10" />
          <div className="overflow-hidden mb-4">
            <div className="flex gap-10 animate-marquee">
              {[...recruiterLogos, ...recruiterLogos].map((logo, i) => (
                <img
                  key={`a-${i}`}
                  src={logo}
                  alt="Recruiter"
                  className="h-10 sm:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 flex-shrink-0 grayscale hover:grayscale-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee-reverse">
              {[...recruiterLogos.slice().reverse(), ...recruiterLogos.slice().reverse()].map((logo, i) => (
                <img
                  key={`b-${i}`}
                  src={logo}
                  alt="Recruiter"
                  className="h-10 sm:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 flex-shrink-0 grayscale hover:grayscale-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
