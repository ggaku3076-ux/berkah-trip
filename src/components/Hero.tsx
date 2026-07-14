"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#0f172a]"
      aria-labelledby="hero-title"
    >
      {/* === BACKGROUND IMAGES (Asli tanpa grayscale filter) === */}
      <div className="absolute inset-0 hidden lg:block z-0">
        <Image
          src="/Asset/BACKGROUND SECTION 1.png"
          alt="BERKAH Trip — Gunung Bromo"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/92 via-[#0f172a]/30 to-[#0f172a]/35" />
      </div>
      <div className="absolute inset-0 block lg:hidden z-0">
        <Image
          src="/Asset/BACKGROUND MOBILE.png"
          alt="BERKAH Trip — Bromo Mobile"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/96 via-[#0f172a]/40 to-[#0f172a]/45" />
      </div>

      {/* === CONTENT — BOTTOM LEFT ALIGNED === */}
      <div className="relative z-20 mt-auto mx-auto w-full max-w-7xl px-6 md:px-10 pb-16 lg:pb-24">
        {/* Headline — less bold, smaller, clean */}
        <h1
          id="hero-title"
          className="display-xl text-white max-w-2xl animate-fade-up font-light"
          style={{ animationDelay: "100ms" }}
        >
          Bromo tanpa campur rombongan lain.
        </h1>

        {/* Subtext — clean and professional */}
        <p
          className="mt-4 text-xs md:text-sm text-white/70 max-w-md leading-relaxed font-light animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Trip privat sunrise Bromo dari Surabaya. Jadwal fleksibel, kendaraan terawat, dijemput dari pintu ke pintu.
        </p>

        {/* CTAs */}
        <div
          className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a href="https://wa.me/6283116788444" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Booking via WhatsApp</span>
            <ArrowRight className="h-3 w-3" />
          </a>
          <Link href="/bromo" className="btn-ghost">
            <span>Lihat Galeri Bromo</span>
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 pt-6 border-t border-white/10 hidden md:flex items-center gap-10 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            { val: "Rp 1.750.000", label: "Mulai dari / mobil" },
            { val: "Privat", label: "Tidak gabung rombongan" },
            { val: "24 Jam", label: "CS siap melayani" },
          ].map((s) => (
            <div key={s.val} className="flex flex-col">
              <span className="text-white font-light text-sm leading-none">{s.val}</span>
              <span className="text-white/40 text-[10px] mt-1 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
