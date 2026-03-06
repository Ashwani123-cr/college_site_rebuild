import { motion } from "framer-motion";

const legends = [
  { name: "Shri Ajai Chaudhary", title: "Founder, HCL", img: "ajai_chowdhry" },
  { name: "Ankur Warikoo", title: "Entrepreneur & Content Creator", img: "legend-1b" },
  { name: "Smt. Smriti Irani", title: "Former Union Minister, GOI", img: "legend-4" },
  { name: "Shri Sumit Awasthi", title: "Media Professional", img: "shri-sumit-awasthi" },
  { name: "Justice G.S. Sistani (Retd.)", title: "Delhi High Court", img: "justice-gs-sistani" },
  { name: "Shri Gauranga Das", title: "Spiritual Leader", img: "legend-1a" },
];

const LegendsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-60 h-60 rounded-full bg-accent/[0.03] blur-3xl" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Distinguished Visitors</span>
          <h2 className="section-title">Legends Walk the Halls</h2>
          <p className="section-subtitle">Icons who inspire a generation at KCC campus</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {legends.map((legend, i) => (
            <motion.div
              key={legend.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-3 aspect-[3/4] bg-secondary">
                <img
                  src={`https://www.kccitm.edu.in/images/${legend.img}.webp`}
                  alt={legend.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kcc-dark/80 via-kcc-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-display font-bold text-primary-foreground text-xs sm:text-sm leading-tight">{legend.name}</p>
                  <p className="text-[10px] text-primary-foreground/50 mt-0.5">{legend.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;
