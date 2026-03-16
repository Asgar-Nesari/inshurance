import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Home,
  Info,
  Menu,
  Phone,
  Shield,
  Users,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
  { name: "About Us", path: "/about", icon: <Info className="w-4 h-4" /> },
  {
    name: "Services",
    path: "/services",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { name: "Our Team", path: "/team", icon: <Users className="w-4 h-4" /> },
  { name: "Contact Us", path: "/contact", icon: <Phone className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {/* ══════════════════════════  NAVBAR  ════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          bg-white border-b border-gray-100
          ${
            scrolled ? "shadow-lg shadow-yellow-400/10 py-2" : "shadow-sm py-3"
          }`}
      >
        {/* Yellow top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ── Logo ──────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3 group"
              >
                {/* Icon box */}
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md shadow-yellow-400/30 group-hover:scale-105 transition-transform duration-200 ">
                  <Shield className="w-5 h-5 text-navy-900" />
                </div>

                {/* Text */}
                <div className="leading-none">
                  <p className="font-heading font-black text-xl text-navy-900">
                    Chadedar<span className="text-yellow-500">Insurance</span>
                  </p>
                  <p className="text-yellow-500 text-[10px] font-bold tracking-[0.18em] uppercase">
                    Vehicle Protection
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* ── Desktop Nav links ─────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 group ${
                      isActive(link.path)
                        ? "bg-yellow-400 text-navy-900 shadow-md shadow-yellow-400/25"
                        : "text-navy-700 hover:text-navy-900 hover:bg-yellow-50"
                    }`}
                  >
                    <span
                      className={`transition-transform duration-200 group-hover:scale-110 ${
                        isActive(link.path)
                          ? "text-navy-900"
                          : "text-yellow-500"
                      }`}
                    >
                      {link.icon}
                    </span>
                    {link.name}

                    {/* Animated underline for active */}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="activeBar"
                        className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-navy-900/30 rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* ── Desktop CTA ──────────────────────────────────────── */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 bg-navy-900 hover:bg-navy-700 text-yellow-400 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-navy-900/20 hover:-translate-y-0.5"
              >
                <Shield className="w-4 h-4" />
                Get Free Quote
              </Link>
            </motion.div>

            {/* ── Mobile hamburger ─────────────────────────────────── */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.92 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2.5 rounded-xl bg-navy-900 hover:bg-navy-700 text-yellow-400 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Scrolled bottom shadow glow */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-400/40 to-transparent"
          />
        )}
      </nav>

      {/* ══════════════  MOBILE SLIDE-OUT DRAWER  ══════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-navy-900 z-60 shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* ── Drawer Header ──────────────────────────────────── */}
              <div className="px-5  pb-4 border-b border-white/10 flex items-center justify-end">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* ── Nav Links ──────────────────────────────────────── */}
              <nav className="flex-1 px-4 py-5 space-y-1.5">
                <p className="text-white text-[10px] font-bold tracking-widest uppercase px-2 mb-4">
                  Navigation
                </p>

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                        isActive(link.path)
                          ? "bg-yellow-400 text-navy-900"
                          : "text-white/70 hover:text-white hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl transition-colors duration-200 ${
                            isActive(link.path)
                              ? "bg-navy-900/15"
                              : "bg-white/10 group-hover:bg-white/15"
                          }`}
                        >
                          {link.icon}
                        </div>
                        <span className="font-semibold text-sm">
                          {link.name}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                          isActive(link.path)
                            ? "text-navy-900/40"
                            : "text-white/20"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* ── Drawer Footer ──────────────────────────────────── */}
              <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
                {/* Phone quick-call */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-white/8 rounded-2xl px-4 py-3 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-green-500 group-hover:bg-green-400 rounded-full flex items-center justify-center  transition-colors duration-200">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">
                        Call Us Now
                      </p>
                      <p className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors duration-200">
                        +91 98765 43210
                      </p>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="tel:+917083786975"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-white/8 rounded-2xl px-4 py-3 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-green-500 group-hover:bg-green-400 rounded-full flex items-center justify-center  transition-colors duration-200">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">
                        Call Us Now
                      </p>
                      <p className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors duration-200">
                        +91 70837 86975
                      </p>
                    </div>
                  </a>
                </motion.div>

                <p className="text-white text-xs text-center pt-1">
                  Mon–Sat · 9 AM – 7 PM
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
