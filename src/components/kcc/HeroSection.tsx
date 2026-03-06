import { motion } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Users, Award } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const stats = [
  { icon: GraduationCap, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "12K+", label: "Alumni Network" },
  { icon: Award, value: "250+", label: "Recruiting Companies" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroCampus}
          alt="KCC Institute Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kcc-dark/95 via-kcc-dark/85 to-kcc-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-kcc-dark/60 via-transparent to-kcc-dark/20" />
        {/* Mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(0_78%_50%_/_0.08),_transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-foreground/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm font-medium text-primary-foreground/90">Admissions Open 2026-27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] mb-6"
          >
            <span className="text-primary-foreground">Shape Your </span>
            <span className="text-gradient-red">Future</span>
            <br />
            <span className="text-primary-foreground">at KCC Institute</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/60 max-w-xl mb-10 font-body leading-relaxed"
          >
            A premier institution in Greater Noida offering B.Tech, MBA, BBA, BCA & more — 
            with world-class placements and vibrant campus life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="https://admissions.kccitm.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-hero text-primary-foreground font-semibold rounded-xl shadow-red hover:shadow-elevated hover:scale-[1.02] transition-all duration-300 text-base"
            >
              Apply Now 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 glass-card text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 text-base"
            >
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <Play size={12} className="text-primary-foreground ml-0.5" />
              </div>
              Explore Campus
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-8 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                </div>
                <p className="text-xs text-primary-foreground/40">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
