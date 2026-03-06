import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE, Batch 2023",
    company: "Placed at TCS",
    text: "KCC transformed my career. The placement cell's dedication and the exposure to real-world projects made me industry-ready. I received multiple offers before graduating!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MBA, Batch 2022",
    company: "Placed at Deloitte",
    text: "The MBA Plus program gave me certifications alongside my degree. The faculty's mentorship and industry visits made all the difference in my career trajectory.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "BBA LLB, Batch 2024",
    company: "Interned at Supreme Court",
    text: "The integrated law program is exceptional. Moot courts, legal aid clinics, and visits from eminent jurists gave me practical knowledge that textbooks can't provide.",
    rating: 5,
  },
  {
    name: "Vikash Kumar",
    role: "B.Tech ME, Batch 2021",
    company: "Placed at L&T",
    text: "From workshops to hackathons, every day was a learning experience. The infrastructure and lab facilities are truly world-class for a college in Greater Noida.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Voices of Our Community</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="glass-card-light rounded-3xl p-8 sm:p-12">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonials[current].rating ? "text-accent fill-accent" : "text-border"}
                    />
                  ))}
                </div>

                <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role} • {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
