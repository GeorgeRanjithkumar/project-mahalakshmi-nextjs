"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Award, Users, BookOpenCheck, Briefcase } from "lucide-react";
import CountUp from "./CountUp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Background pattern + gradient */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-60" />
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-royal-radial blur-3xl opacity-70" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left: Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass shadow-glass mb-6"
          >
            <MapPin className="w-4 h-4 text-gold-600" />
            <span className="text-xs sm:text-sm font-semibold text-royal-800">
              Perambalur, Tamil Nadu &middot; ISO 9001:2008 Certified
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-royal-900 tracking-tight"
          >
            Engineering Global Careers,{" "}
            <span className="text-gradient-royal">Rooted in</span>{" "}
            <span className="text-gradient-gold">Local Excellence</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-royal-700/80 max-w-xl leading-relaxed"
          >
            Maha Lakshmi College of Engineering blends cutting-edge technology
            education with the values of Tamil heritage — empowering students
            from Perambalur and beyond with industry-ready skills, 100%
            placement assistance, and a campus built for tomorrow&apos;s
            innovators.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-royal-700 to-royal-900 text-white font-bold text-sm sm:text-base shadow-glow-royal hover:scale-105 transition-transform duration-300"
            >
              Apply for 2026 – 2027
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#legacy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass shadow-glass text-royal-800 font-bold text-sm sm:text-base hover:bg-white/80 transition-colors duration-300"
            >
              Explore Campus
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-600" />
              <span className="text-sm font-semibold text-royal-800">
                NAAC-Aligned Curriculum
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gold-600" />
              <span className="text-sm font-semibold text-royal-800">
                100% Placement Support
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Glass stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            {/* Floating badge */}
            <motion.div
              className="absolute -top-6 -left-6 z-20 glass shadow-glass rounded-2xl px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-royal-950" />
              </div>
              <div>
                <p className="text-xs text-royal-600 font-medium">Accredited</p>
                <p className="text-sm font-bold text-royal-900">ISO 9001:2008</p>
              </div>
            </motion.div>

            {/* Main card */}
            <div className="relative rounded-3xl glass shadow-glass p-7 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 geo-pattern opacity-50" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-1">
                  Campus at a Glance
                </p>
                <h3 className="font-display font-bold text-xl text-royal-900 mb-6">
                  Where Talent Meets Opportunity
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  <StatBlock
                    icon={<Briefcase className="w-5 h-5" />}
                    value={100}
                    suffix="%"
                    label="Placement Record"
                  />
                  <StatBlock
                    icon={<BookOpenCheck className="w-5 h-5" />}
                    value={50}
                    suffix="+"
                    label="Advanced Labs"
                  />
                  <StatBlock
                    icon={<Users className="w-5 h-5" />}
                    value={3500}
                    suffix="+"
                    label="Alumni Network"
                  />
                  <StatBlock
                    icon={<Award className="w-5 h-5" />}
                    value={10}
                    suffix="+"
                    label="Years of Legacy"
                  />
                </div>

                <div className="mt-7 pt-6 border-t border-royal-200/50 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-royal-600 font-medium">Located in</p>
                    <p className="text-sm font-bold text-royal-900">
                      Perambalur, Tamil Nadu
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center shadow-glow-royal">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating shape */}
            <motion.div
              className="absolute -bottom-8 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-gold-300/40 to-gold-500/30 blur-xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatBlock({
  icon,
  value,
  suffix,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-9 h-9 rounded-lg bg-royal-100 flex items-center justify-center text-royal-700">
        {icon}
      </div>
      <p className="font-display font-extrabold text-2xl sm:text-3xl text-royal-900">
        <CountUp value={value} suffix={suffix} />
      </p>
      <p className="text-xs font-medium text-royal-600 leading-tight">{label}</p>
    </div>
  );
}
