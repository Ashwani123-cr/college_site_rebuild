import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, Factory, Globe, Palette } from "lucide-react";

const categories = [
  { label: "Campus Life", icon: Camera, images: ["cr-1a", "cr-2", "cr-3", "cr-4", "cr-5"] },
  { label: "Social Impact", icon: Heart, images: ["social-impact-1", "social-impact-2", "social-impact-3", "social-impact-4", "social-impact-5"] },
  { label: "Industry", icon: Factory, images: ["industry-exposure-1", "industry-exposure-2", "industry-exposure-3", "industry-exposure-4", "industry-exposure-5"] },
  { label: "Culture", icon: Globe, images: ["culture-diversity-1", "culture-diversity-2", "culture-diversity-3", "culture-diversity-4", "culture-diversity-5"] },
  { label: "Entrepreneurship", icon: Palette, images: ["enterp-1", "enterp-2", "enterp-3", "enterp-4", "enterp-5"] },
];

const LifeSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="life" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Life at KCC</span>
          <h2 className="section-title">Experience the Vibrant Campus</h2>
          <p className="section-subtitle">
            Where every day brings new adventures, friendships, and growth opportunities
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? "bg-gradient-hero text-primary-foreground shadow-red scale-[1.02]"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/20"
                }`}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]"
          >
            {categories[active].images.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl overflow-hidden group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={`https://www.kccitm.edu.in/images/${img}.webp`}
                  alt={`Life at KCC - ${categories[active].label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LifeSection;
