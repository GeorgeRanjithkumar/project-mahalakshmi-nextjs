"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Karthik Selvam",
    role: "Pharmacist, Apollo Pharmacy, Chennai",
    batch: "Batch of 2023, Diploma in Pharmacy",
    quote:
      "The practical lab sessions and clinical training at Maha Lakshmi gave me a strong foundation in dispensing and patient care. I cleared my pharmacy licensing exam on the first attempt, thanks to the faculty's dedicated preparation.",
    rating: 5,
  },
  {
    name: "Priyadharshini R.",
    role: "OT Technician, Government Hospital, Perambalur",
    batch: "Batch of 2022, Diploma in OT Technician",
    quote:
      "Being close to home meant I could focus entirely on my studies without compromise. The surgical assisting practicals and hospital tie-ups gave me real OT exposure before I even graduated. I joined my current role within a month of completing the course.",
    rating: 5,
  },
  {
    name: "Mohammed Arfath",
    role: "Service Technician, Authorised Automobile Workshop, Trichy",
    batch: "Batch of 2023, Diploma in Auto Mobile",
    quote:
      "The hands-on workshop training on engines, transmission, and diagnostics was exceptional. The placement cell connected me directly with the workshop before I finished my final semester. I now handle independent service jobs confidently.",
    rating: 5,
  },
  {
    name: "Dhivya Bharathi",
    role: "Staff Nurse, Private Multi-Specialty Hospital, Salem",
    batch: "Batch of 2022, Nursing (DNA)",
    quote:
      "The DNA program at Maha Lakshmi prepared me beyond just theory — the ward rounds, patient interaction training, and clinical postings built real confidence. The campus culture is supportive and the staff truly care about your future.",
    rating: 5,
  },
  {
    name: "Rajeshkumar M.",
    role: "Lab Technician, Diagnostic Centre, Namakkal",
    batch: "Batch of 2024, Lab Technician (DMLT)",
    quote:
      "The DMLT course covered haematology, biochemistry, and microbiology with excellent lab infrastructure. The faculty made sure every student was industry-ready. I was placed before results were even announced.",
    rating: 5,
  },
  {
    name: "Sangeetha Devi",
    role: "Front Office Executive, 4-Star Hotel, Coimbatore",
    batch: "Batch of 2023, Catering & Hotel Management",
    quote:
      "From food production to hospitality operations, the training at Maha Lakshmi was comprehensive and industry-aligned. The mock service sessions and event management exposure gave me the edge I needed to land my role in Coimbatore.",
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
