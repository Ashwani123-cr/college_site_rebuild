import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen, GraduationCap, Briefcase, Scale } from "lucide-react";

const programs = [
  {
    category: "Undergraduate",
    icon: GraduationCap,
    items: [
      { name: "B.Tech", desc: "Computer Science, Mechanical, Civil, Electronics & more", duration: "4 Years", link: "https://www.kccitm.edu.in/courses/b-tech/", color: "from-primary/10 to-primary/5" },
      { name: "BBA", desc: "Business Administration with industry exposure", duration: "3 Years", link: "https://www.kccitm.edu.in/ilhe/ipu-bba", color: "from-accent/10 to-accent/5" },
      { name: "BCA", desc: "Computer Applications with hands-on projects", duration: "3 Years", link: "https://www.kccitm.edu.in/ilhe/ipu-bca", color: "from-primary/10 to-primary/5" },
      { name: "B.COM (H)", desc: "Commerce with specialization tracks", duration: "3 Years", link: "https://www.kccitm.edu.in/ilhe/ipu-bcom", color: "from-accent/10 to-accent/5" },
    ],
  },
  {
    category: "Postgraduate",
    icon: Briefcase,
    items: [
      { name: "MBA Plus", desc: "Management with industry certifications", duration: "2 Years", link: "https://www.kccitm.edu.in/courses/mba-admissions-greater-noida", color: "from-primary/10 to-primary/5" },
      { name: "M.Tech", desc: "Advanced engineering research & specialization", duration: "2 Years", link: "https://www.kccitm.edu.in/courses/m-tech/", color: "from-accent/10 to-accent/5" },
    ],
  },
  {
    category: "Law",
    icon: Scale,
    items: [
      { name: "BA LLB (H)", desc: "Integrated law program with arts foundation", duration: "5 Years", link: "https://www.kccitm.edu.in/ilhe/ipu-cet-ba-llb", color: "from-primary/10 to-primary/5" },
      { name: "BBA LLB (H)", desc: "Law with business management integration", duration: "5 Years", link: "https://www.kccitm.edu.in/ilhe/ipu-cet-bba-llb", color: "from-accent/10 to-accent/5" },
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/[0.02] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">Innovation is in Our DNA</h2>
          <p className="section-subtitle">
            Explore our pillars of knowledge across engineering, management, law, and more
          </p>
        </motion.div>

        <div className="space-y-14">
          {programs.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon size={16} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {category.category} Programmes
                </h3>
              </div>
              <div className={`grid sm:grid-cols-2 ${category.items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"} gap-4`}>
                {category.items.map((program, pi) => (
                  <motion.a
                    key={program.name}
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.05 }}
                    className={`group relative bg-card rounded-2xl p-6 hover-lift border border-border overflow-hidden`}
                  >
                    {/* Subtle gradient bg */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {program.name}
                        </h4>
                        <div className="w-8 h-8 rounded-lg bg-secondary group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                          <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2">
                        {program.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Clock size={12} />
                        {program.duration}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
