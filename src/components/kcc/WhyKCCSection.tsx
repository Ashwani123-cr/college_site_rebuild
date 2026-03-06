import { motion } from "framer-motion";
import { Target, Lightbulb, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Industry-Aligned Curriculum",
    desc: "Programs designed with industry leaders to ensure job-ready graduates from day one.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    desc: "State-of-the-art labs, incubation centers, and mentorship for budding entrepreneurs.",
  },
  {
    icon: Trophy,
    title: "Outstanding Placements",
    desc: "250+ companies recruit on campus with packages reaching up to 31 LPA internationally.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "8+ student clubs, cultural fests, sports, and social impact initiatives for all-round growth.",
  },
];

const WhyKCCSection = () => {
  return (
    <section id="about" className="section-padding bg-background mesh-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/[0.04] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Why KCC?</span>
            <h2 className="section-title mb-6">
              Where Ambition Meets{" "}
              <span className="text-gradient-red">Opportunity</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              For over two decades, KCC Institute has been nurturing future leaders through 
              cutting-edge education, global exposure, and a campus that feels like home. 
              Affiliated with AKTU and IP University, we bridge the gap between 
              academics and industry.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient-red">25+</p>
                <p className="text-xs text-muted-foreground mt-1">Years</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient-red">12K+</p>
                <p className="text-xs text-muted-foreground mt-1">Alumni</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient-red">A+</p>
                <p className="text-xs text-muted-foreground mt-1">NAAC Grade</p>
              </div>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl glass-card-light hover-lift cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKCCSection;
