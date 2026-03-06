import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const faculty = [
  { name: "Ms. Payal Teotia", role: "Assistant Professor", img: "Payal-Teotia", linkedin: "https://www.linkedin.com/in/payal-teotia-42b92b133/" },
  { name: "Dr. Indraneel Mandal", role: "Assistant Professor", img: "Indraneel-Mandal", linkedin: "https://www.linkedin.com/in/indraneel-mandal-5752b69/" },
  { name: "Mr. Nishit Ranjan Chaki", role: "Faculty", img: "Nishit-Ranjan-Chaki", linkedin: "https://www.linkedin.com/in/nishit-ranjan-chaki-95a51221a/" },
  { name: "Dr. Akanksha Singh", role: "Assistant Professor", img: "Akanksha-Singh", linkedin: "https://www.linkedin.com/in/dr-akanksha-singh-5a4214186/" },
  { name: "Mr. Balak Ram", role: "Assistant Professor", img: "Balak-Ram", linkedin: "https://www.linkedin.com/in/balak-ram-45a7b6251/" },
  { name: "Dr. Abhilasha Sisodia", role: "Associate Professor", img: "Abhilasha-Sisodia", linkedin: "https://www.linkedin.com/in/dr-abhilasha-sisodia-2445b71a3/" },
];

const FacultySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Our Faculty</span>
          <h2 className="section-title">Mentors & Academic Council</h2>
          <p className="section-subtitle">
            Real-time access to 500+ mentors who shape the leaders of tomorrow
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group text-center"
            >
              <div className="relative rounded-2xl overflow-hidden mb-3 aspect-square bg-secondary">
                <img
                  src={`https://www.kccitm.edu.in/images/${f.img}.webp`}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-kcc-dark/0 group-hover:bg-kcc-dark/50 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-red"
                  >
                    <Linkedin size={16} className="text-primary-foreground" />
                  </a>
                </div>
              </div>
              <h4 className="font-display font-bold text-foreground text-xs sm:text-sm leading-tight">{f.name}</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{f.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
