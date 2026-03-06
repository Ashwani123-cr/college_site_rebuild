import { motion } from "framer-motion";

const clubs = [
  { name: "Art Attack", img: "ins-1", instagram: "https://www.instagram.com/kcc.artattack/" },
  { name: "Glitz", img: "ins-2", instagram: "https://www.instagram.com/kcc.glitz/" },
  { name: "Sports Villa", img: "ins-3", instagram: "https://www.instagram.com/kcc.sportsvilla/" },
  { name: "Thespian", img: "ins-4", instagram: "https://www.instagram.com/kcc.thespian/" },
  { name: "Melomania", img: "ins-5", instagram: "https://www.instagram.com/kcc.melomania/" },
  { name: "Sway", img: "ins-6", instagram: "https://www.instagram.com/kcc.sway/" },
  { name: "Bibliophile", img: "ins-7", instagram: "https://www.instagram.com/kcc.bibliophile/" },
  { name: "Shutterburg", img: "ins-8", instagram: "https://www.instagram.com/kcc.shutterburg/" },
];

const ClubsSection = () => {
  return (
    <section className="section-padding bg-kcc-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Clubs & Societies</span>
          <h2 className="section-title-light">Find Your Tribe</h2>
          <p className="mt-4 text-primary-foreground/50 max-w-2xl mx-auto text-base sm:text-lg">
            From art to athletics, music to drama — 8+ student-led clubs fuel creativity and camaraderie
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clubs.map((club, i) => (
            <motion.a
              key={club.name}
              href={club.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden aspect-square"
            >
              <img
                src={`https://www.kccitm.edu.in/images/${club.img}.webp`}
                alt={club.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kcc-dark/80 via-kcc-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display font-bold text-primary-foreground text-sm">{club.name}</p>
                <p className="text-[10px] text-primary-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5">
                  @kcc.{club.name.toLowerCase().replace(/\s/g, '')}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
