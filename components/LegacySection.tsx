"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Wifi,
  FlaskConical,
  Dumbbell,
  Train,
  Factory,
  GraduationCap,
  MapPinned,
} from "lucide-react";

const campusFeatures = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Modern Academic Blocks",
    desc: "Spacious, ventilated classrooms equipped with smart boards and high-speed connectivity across every department.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Research-Grade Laboratories",
    desc: "50+ specialized labs covering core engineering, electronics, AI, and emerging technology research.",
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: "Digital-First Infrastructure",
    desc: "Campus-wide Wi-Fi, centralized digital library, and e-learning resources accessible round the clock.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    title: "Sports & Wellness Facilities",
    desc: "Dedicated grounds, indoor courts, and fitness centers nurturing holistic student development.",
  },
];

const cityFeatures = [
  {
    icon: <Train className="w-5 h-5" />,
    title: "Strategic Connectivity",
    desc: "Located on the Trichy–Chennai corridor in Perambalur, ensuring smooth access via NH-45 and regional rail links.",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "Growing Industrial Belt",
    desc: "Proximity to emerging industrial clusters in and around Perambalur opens doors to internships and on-the-job training.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Regional Educational Hub",
    desc: "Part of a thriving academic ecosystem, with collaborative ties to neighboring institutions across Tamil Nadu.",
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    title: "Affordable Student Living",
    desc: "Comfortable hostel accommodation and budget-friendly local amenities make Perambalur an ideal student town.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function LegacySection() {
  return (
    <section id="legacy" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-royal-50/50 overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-bold uppercase tracking-widest mb-4">
            Legacy &amp; Location
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-royal-900 tracking-tight">
            World-Class Infrastructure,{" "}
            <span className="text-gradient-gold">Strategically Placed</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-royal-700/80">
            A campus engineered for the future, set in the heart of
            Perambalur — a region rapidly emerging as Tamil Nadu&apos;s next
            industrial and educational frontier.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8">
          {/* Campus Infrastructure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative rounded-3xl bg-white border border-royal-100 shadow-glass p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-royal-100/60 blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center mb-5 shadow-glow-royal">
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-2xl text-royal-900 mb-3">
                A Campus Built for Innovation
              </h3>
              <p className="text-royal-700/80 mb-7 leading-relaxed">
                Spanning a sprawling, purpose-designed campus, Maha Lakshmi Community
                College integrates academic blocks, research
                laboratories, and recreational spaces into a single,
                future-ready environment for holistic learning.
              </p>
              <div className="space-y-5">
                {campusFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-royal-900">
                        {f.title}
                      </p>
                      <p className="text-sm text-royal-700/70 mt-1 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* City Integration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="relative rounded-3xl bg-gradient-to-br from-royal-800 to-royal-950 shadow-glow-royal p-8 lg:p-10 overflow-hidden text-white"
          >
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="absolute inset-0 geo-pattern opacity-[0.08]" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-5">
                <MapPinned className="w-6 h-6 text-royal-950" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">
                Perambalur: A Hub of Opportunity
              </h3>
              <p className="text-white/75 mb-7 leading-relaxed">
                Positioned along Tamil Nadu&apos;s key central corridor,
                Perambalur connects students to major cities like Trichy and
                Chennai — bridging local roots with statewide industrial and
                academic networks.
              </p>
              <div className="space-y-5">
                {cityFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-white">
                        {f.title}
                      </p>
                      <p className="text-sm text-white/65 mt-1 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
