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
            ? "bg-[#1a1f16]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between max-w-7xl px-5 md:px-10 py-3">

          {/* Logo — pojok kiri, besar & prominent */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="BERKAH Trip — Beranda"
          >
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 flex items-center justify-center
                            rounded-xl bg-white/8 border border-white/12 p-1.5 
                            transition-all duration-300 group-hover:bg-white/12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Asset/LOGO.png"
                alt="BERKAH Trip Logo"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-nunito font-black text-base md:text-lg text-white tracking-tight">
                BERKAH Trip
              </span>
              <span className="text-[10px] text-white/45 font-medium tracking-widest uppercase mt-0.5">
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
                  className={`text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
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
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center
                       bg-white/8 border border-white/12 text-white
                       transition-colors duration-200 hover:bg-white/15"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
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
              className="fixed inset-0 bg-[#1a1f16]/80 backdrop-blur-2xl z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-[999] md:hidden bg-[#1a1f16] border-b border-white/10 px-6 pt-24 pb-8"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/8 text-base font-semibold transition-colors ${
                          active ? "text-green-400" : "text-white/70 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Booking Sekarang
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
