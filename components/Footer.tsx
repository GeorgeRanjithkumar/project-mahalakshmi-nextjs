import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  Award,
  BadgeCheck,
} from "lucide-react";

const quickLinks = [
  { label: "About the College", href: "#legacy" },
  { label: "Courses Offered", href: "#features" },
  { label: "Admissions 2026-27", href: "#contact" },
  { label: "Placement Cell", href: "#features" },
  { label: "Campus Life", href: "#features" },
  { label: "Alumni Network", href: "#testimonials" },
];

const courseLinks = [
  "Diploma - Pharmacy",
  "Diploma - OT Technician",
  "Diploma - Auto Mobile",
  "Nursing (DNA)",
  "Lab Technician (DMLT)",
  "A/C Mechanic, Fire & Safety",
];

const accreditations = [
  { icon: <ShieldCheck className="w-5 h-5" />, label: "ISO 9001:2008 Certified" },
  { icon: <Award className="w-5 h-5" />, label: "100% Placement Support" },
  { icon: <BadgeCheck className="w-5 h-5" />, label: "SC / ST Fee Concessions" },
];

export default function Footer() {
  return (
    <footer className="relative bg-royal-950 text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-[0.06]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="font-display font-bold text-base">Maha Lakshmi</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  Community College
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              An ISO 9001:2008 certified institution committed to honoring
              the dream of Bharathi&apos;s vision &mdash; nurturing skilled,
              future-ready professionals from the heart of Perambalur, Tamil
              Nadu.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-royal-950 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Programs Offered
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((c) => (
                <li key={c}>
                  <a href="#features" className="text-sm text-white/65 hover:text-white transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Accreditation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Visit Us
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/65 leading-relaxed">
                  No. 34,Rasi Mandabam Street, MaryPuram, Sangu Pettai, Perambalur - 621212
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/65">
                  97896 15860, 96267 36190, 86109 40704
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/65">admissions@mahalakshmicet.edu.in</p>
              </div>
            </div>

            <div className="space-y-2">
              {accreditations.map((a) => (
                <div key={a.label} className="flex items-center gap-2 text-xs text-white/50">
                  <span className="text-gold-400">{a.icon}</span>
                  {a.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2026 Maha Lakshmi Community College, Perambalur. All rights reserved.</p>
          <p>Admissions open for 2026 &ndash; 2027 Academic Year</p>
        </div>
      </div>
    </footer>
  );
}
