"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, User, BookOpenText } from "lucide-react";

const courses = [
  "B.E / B.Tech - Engineering",
  "Diploma - Pharmacy",
  "Diploma - OT Technician",
  "Diploma - Auto Mobile",
  "Nursing (DNA)",
  "Lab Technician (DMLT)",
  "Catering & Hotel Management",
];

export default function CTABanner() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-800 via-royal-900 to-royal-950" />
      <div className="absolute inset-0 geo-pattern opacity-[0.08]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-royal-500/20 blur-3xl animate-float" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-widest mb-4">
            Admissions Open &middot; 2026 - 2027
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5">
            Your Future Begins at{" "}
            <span className="text-gradient-gold">Maha Lakshmi</span>
          </h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-md">
            Take the first step toward a rewarding engineering career.
            Limited seats available for our 10th Anniversary batch — with a
            special &frac12; gram gold coin welcome for the first 50
            admissions, plus free books, uniforms, and 100% placement
            assistance.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-xs text-white/50">Call our admissions office</p>
                <p className="font-semibold">97896 15860 &middot; 96267 36190</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-xs text-white/50">Visit our campus</p>
                <p className="font-semibold">
                  No. 34, Mariyamman Koil Street, Perambalur - 621212
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-3xl glass-dark shadow-glass p-8 sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10 text-white">
              <CheckCircle2 className="w-14 h-14 text-gold-400 mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">
                Thank You for Your Interest!
              </h3>
              <p className="text-white/70 text-sm max-w-xs">
                Our admissions counselor will reach out to you within 24
                hours to guide you through the next steps.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Request Admission Info
              </h3>
              <p className="text-sm text-white/60 mb-6">
                Fill in your details and our team will get in touch.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
                  />
                </div>
                <div className="relative">
                  <BookOpenText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all appearance-none"
                  >
                    <option value="" disabled className="text-royal-900">
                      Select Course of Interest
                    </option>
                    {courses.map((c) => (
                      <option key={c} value={c} className="text-royal-900">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-bold text-sm shadow-glow-gold hover:scale-[1.02] transition-transform duration-300"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
