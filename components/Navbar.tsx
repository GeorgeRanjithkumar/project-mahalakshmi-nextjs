"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#legacy" },
  { label: "Programs", href: "#features" },
  { label: "Campus Life", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const portalLinks = [
  { label: "Student Portal", href: "#" },
  { label: "Faculty Login", href: "#" },
  { label: "Examination Cell", href: "#" },
  { label: "Alumni Network", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass shadow-glass"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center shadow-glow-royal group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-6 h-6 text-gold-400" strokeWidth={2} />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-400 animate-pulse" />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-base sm:text-lg text-royal-900 tracking-tight">
              Maha Lakshmi
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-royal-600 tracking-widest uppercase">
              Community College
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-royal-800 hover:text-royal-600 rounded-lg hover:bg-royal-50 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Portal Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-royal-800 hover:text-royal-600 rounded-lg hover:bg-royal-50 transition-colors duration-200">
              Portals
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {portalOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-1 w-52 rounded-xl glass shadow-glass p-2"
                >
                  {portalLinks.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="block px-4 py-2.5 text-sm font-medium text-royal-800 hover:text-royal-600 hover:bg-white/60 rounded-lg transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-bold text-sm shadow-glow-gold animate-pulse-cta hover:scale-105 transition-transform duration-300"
          >
            Apply Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-royal-800 hover:bg-royal-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-white/30 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {[...navLinks, ...portalLinks].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-royal-800 hover:text-royal-600 hover:bg-white/60 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-bold text-sm shadow-glow-gold"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
