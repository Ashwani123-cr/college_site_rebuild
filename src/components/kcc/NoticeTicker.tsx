import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const notices = [
  { date: "4 Feb 2024", text: "Get ready for a soulful blues night" },
  { date: "12 Jan 2024", text: "Kai Po Che 24 — Annual Sports Festival" },
  { date: "5 Jan 2024", text: "Annual Fest: Fuel 2024 — Night of Laughter!" },
  { date: "28 Nov 2022", text: "Placement Success Stories at KCC Institute" },
  { date: "15 Dec 2019", text: "Campus Placement Drive — Emicon Advisory" },
  { date: "2 Dec 2019", text: "Campus Placement Drive — Extramarks" },
];

const NoticeTicker = () => {
  return (
    <div className="bg-kcc-dark border-b border-primary/10">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-10 overflow-hidden">
        <div className="flex items-center gap-2 flex-shrink-0 pr-4 border-r border-primary/20">
          <Bell size={12} className="text-primary" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-primary">Notices</span>
        </div>
        <div className="overflow-hidden flex-1 ml-4">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="text-xs text-primary-foreground/60 inline-flex items-center gap-2">
                <span className="text-primary/70 font-semibold">{n.date}</span>
                <span className="text-primary-foreground/30">—</span>
                {n.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
