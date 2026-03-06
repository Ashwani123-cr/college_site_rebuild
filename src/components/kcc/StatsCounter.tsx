import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  { value: 250, suffix: "+", label: "Recruiting Companies", color: "text-gradient-red" },
  { value: 12000, suffix: "+", label: "Successful Alumni", color: "text-gradient-gold" },
  { value: 31, suffix: " LPA", label: "Highest Int'l Package", color: "text-gradient-red" },
  { value: 500, suffix: "+", label: "Expert Mentors", color: "text-gradient-gold" },
];

const StatsCounter = () => {
  return (
    <section className="py-16 sm:py-20 bg-kcc-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-primary-foreground/50 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
