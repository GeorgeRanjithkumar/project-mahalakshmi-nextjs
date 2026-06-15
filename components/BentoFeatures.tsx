"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  FlaskConical,
  Sparkles,
  Library,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import CountUp from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const placementBars = [62, 78, 85, 92, 100];

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-xs font-bold uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-royal-900 tracking-tight">
            A Foundation Built on{" "}
            <span className="text-gradient-royal">Four Pillars</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-royal-700/80">
            From state-of-the-art labs to a thriving campus culture, every
            corner of Maha Lakshmi College of Engineering is designed to
            shape industry-ready professionals.
          </p>
        </motion.div>

        {/* Bento Grid: asymmetric 4-card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Placement Records - large, spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bento-glow lg:col-span-2 rounded-3xl bg-gradient-to-br from-royal-800 to-royal-950 p-8 lg:p-10 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 geo-pattern opacity-[0.08]" />
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-royal-950" />
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3">
                  Placement Records
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                  Our dedicated Training &amp; Placement Cell partners with
                  leading recruiters across IT, manufacturing, and core
                  engineering sectors — ensuring every eligible student walks
                  into a rewarding career.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-display font-extrabold text-3xl lg:text-4xl text-gold-400">
                      <CountUp value={100} suffix="%" />
                    </p>
                    <p className="text-xs text-white/60 mt-1">Placement Assistance</p>
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-3xl lg:text-4xl text-gold-400">
                      <CountUp value={150} suffix="+" />
                    </p>
                    <p className="text-xs text-white/60 mt-1">Recruiting Partners</p>
                  </div>
                </div>
              </div>

              {/* Micro chart */}
              <div className="lg:w-56 shrink-0">
                <p className="text-xs text-white/60 mb-3 font-semibold uppercase tracking-wide">
                  5-Year Placement Growth
                </p>
                <div className="flex items-end gap-2 h-32">
                  {placementBars.map((val, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-gold-600 to-gold-300"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/50">
                  <span>&apos;22</span>
                  <span>&apos;23</span>
                  <span>&apos;24</span>
                  <span>&apos;25</span>
                  <span>&apos;26</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Advanced Labs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bento-glow rounded-3xl bg-royal-50 border border-royal-100 p-8 relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-royal-200/40 blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 flex items-center justify-center mb-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <FlaskConical className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-royal-900 mb-3">
                Advanced Labs &amp; Research
              </h3>
              <p className="text-royal-700/75 leading-relaxed text-sm mb-5">
                From robotics and IoT to AI &amp; ML research clusters, our
                labs give students hands-on exposure to next-generation
                engineering tools.
              </p>
              <p className="font-display font-extrabold text-3xl text-royal-800">
                <CountUp value={50} suffix="+" />
              </p>
              <p className="text-xs text-royal-600 mt-1">
                Specialized Labs &amp; Research Centers
              </p>
            </div>
          </motion.div>

          {/* Card 3: Student Life */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bento-glow rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 p-8 relative overflow-hidden group text-royal-950"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-royal-950/90 flex items-center justify-center mb-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                Vibrant Student Life
              </h3>
              <p className="text-royal-950/75 leading-relaxed text-sm mb-5">
                Annual cultural festivals, technical symposiums, sports meets,
                and clubs that celebrate Tamil heritage alongside modern
                innovation challenges.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold">
                <span>25+ Annual Events</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Digital Library - spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bento-glow lg:col-span-2 rounded-3xl bg-white border border-royal-100 p-8 lg:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 geo-pattern opacity-30" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center mb-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <Library className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-royal-900 mb-3">
                  Digital Library &amp; Smart Classrooms
                </h3>
                <p className="text-royal-700/75 leading-relaxed max-w-md">
                  Access thousands of e-books, journals, and research papers
                  through our centralized digital library, while smart
                  classrooms bring interactive, technology-driven teaching to
                  every lecture.
                </p>
              </div>
              <div className="flex sm:flex-col gap-6 sm:gap-5 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal-50 flex items-center justify-center text-royal-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-xl text-royal-900">
                      <CountUp value={15000} suffix="+" />
                    </p>
                    <p className="text-xs text-royal-600">Digital Resources</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal-50 flex items-center justify-center text-royal-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-xl text-royal-900">
                      <CountUp value={40} suffix="+" />
                    </p>
                    <p className="text-xs text-royal-600">Smart Classrooms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
