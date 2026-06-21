"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Karthik Selvam",
    role: "Software Engineer, TCS Digital",
    batch: "Batch of 2023, Computer Science",
    quote:
      "The hands-on lab exposure and placement training at Maha Lakshmi gave me the confidence to crack interviews at top IT firms. The faculty's mentorship made all the difference.",
    rating: 5,
  },
  {
    name: "Priyadharshini R.",
    role: "Junior Process Engineer, Industrial Park, Perambalur",
    batch: "Batch of 2022, Mechanical Engineering",
    quote:
      "Being close to home in Perambalur meant I could focus entirely on my studies. The college's industry tie-ups helped me secure an internship that turned into a full-time role.",
    rating: 5,
  },
  {
    name: "Mohammed Arfath",
    role: "HR Manager & Campus Recruiter",
    batch: "Recruiting Partner since 2021",
    quote:
      "Every batch from Maha Lakshmi College comes well-prepared — strong technical fundamentals paired with excellent communication skills. It's consistently one of our top hiring campuses in the region.",
    rating: 5,
  },
  {
    name: "Dhivya Bharathi",
    role: "Graduate Trainee, Renewable Energy Sector",
    batch: "Batch of 2024, Electrical & Electronics",
    quote:
      "The OT Technician and core diploma programs gave me a strong technical edge. The campus culture also helped me grow as a confident, well-rounded professional.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-royal-50/60 overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-30" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-bold uppercase tracking-widest mb-4">
            Voices of Success
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-royal-900 tracking-tight">
            Alumni &amp; Recruiters{" "}
            <span className="text-gradient-gold">Speak</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative rounded-3xl glass shadow-glass p-8 sm:p-12 mx-auto max-w-3xl text-center"
            >
              <Quote className="w-10 h-10 text-gold-500 mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-royal-800 leading-relaxed font-medium mb-7">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal-700 to-royal-900 mx-auto mb-3 flex items-center justify-center text-gold-400 font-display font-bold text-lg">
                {testimonials[index].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <p className="font-display font-bold text-royal-900">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-royal-600">{testimonials[index].role}</p>
              <p className="text-xs text-royal-500 mt-1">{testimonials[index].batch}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full glass shadow-glass flex items-center justify-center text-royal-700 hover:bg-white/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gold-500" : "w-2 bg-royal-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full glass shadow-glass flex items-center justify-center text-royal-700 hover:bg-white/80 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
