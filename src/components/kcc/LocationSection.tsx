import { motion } from "framer-motion";
import { MapPin, Train, Building, Plane, Navigation } from "lucide-react";

const advantages = [
  { icon: Train, text: "10 Mins Walk From Knowledge Park II Metro Station", highlight: "10 Mins" },
  { icon: Building, text: "Surrounded by Enterprises and MNCs", highlight: "MNCs" },
  { icon: Navigation, text: "2 Mins From Noida Greater Noida Expressway", highlight: "2 Mins" },
  { icon: Plane, text: "30 Mins Away From Jewar International Airport", highlight: "30 Mins" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/[0.03] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Location & Advantage</span>
            <h2 className="section-title mb-4">
              Strategically Located in{" "}
              <span className="text-gradient-red">Greater Noida</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              At the heart of India's knowledge corridor, connecting you to opportunities everywhere.
            </p>

            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card-light hover-lift group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <adv.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{adv.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-elevated border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.953!2d77.4969!3d28.4571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e1e5555555%3A0x1234567890abcdef!2sKCC%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-80 lg:h-[480px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KCC Institute Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
