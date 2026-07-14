"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Trip Bromo", href: "/paket" },
  { name: "Galeri", href: "/bromo" },
  { name: "Armada", href: "/armada" },
  { name: "Booking", href: "/booking" },
  { name: "Kontak", href: "/lokasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#111111]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between max-w-7xl px-5 md:px-10 py-3">

          {/* Logo — TANPA card/border bezel, langsung transparan bersih */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="BERKAH Trip — Beranda"
          >
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 flex items-center justify-center bg-transparent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Asset/LOGO_BARU.png"
                alt="BERKAH Trip Logo"
                className="h-full w-full object-contain"
              />
            </div>
            {/* Font tipis/light profesional sama dengan style headline */}
            <div className="flex flex-col leading-none">
              <span className="font-sans font-light text-base md:text-lg text-white tracking-wide">
                BERKAH Trip
              </span>
              <span className="text-[9px] text-white/40 font-light tracking-widest uppercase mt-0.5">
                Bromo Private
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-light tracking-wide transition-colors duration-200 ${
                    active ? "text-white" : "text-white/55 hover:text-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link href="/booking" className="btn-primary text-xs">
              <span>Booking Sekarang</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* === MOBILE FULLSCREEN MENU === */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#111111]/85 backdrop-blur-xl z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-0 left-0 right-0 z-[999] md:hidden bg-[#111111] border-b border-white/10 px-6 pt-24 pb-8"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/8 text-sm font-light tracking-wide ${
                          active ? "text-white" : "text-white/60"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Booking Sekarang
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
