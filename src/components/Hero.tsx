"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#1a1f16]"
      aria-labelledby="hero-title"
    >
      {/* === BACKGROUND IMAGES === */}
      <div className="absolute inset-0 hidden lg:block z-0">
        <Image
          src="/Asset/BACKGROUND SECTION 1.png"
          alt="BERKAH Trip — Gunung Bromo"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        {/* gradient overlay — bottom darkened for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f16]/85 via-[#1a1f16]/25 to-[#1a1f16]/40" />
      </div>
      <div className="absolute inset-0 block lg:hidden z-0">
        <Image
          src="/Asset/BACKGROUND MOBILE.png"
          alt="BERKAH Trip — Bromo Mobile"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f16]/90 via-[#1a1f16]/30 to-[#1a1f16]/50" />
      </div>

      {/* === CONTENT — BOTTOM LEFT ALIGNED (anti-center-bias) === */}
      <div className="relative z-20 mt-auto mx-auto w-full max-w-7xl px-6 md:px-10 pb-12 md:pb-16 lg:pb-20">

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 mb-6 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
            Private Trip · Surabaya ke Bromo
          </span>
        </div>

        {/* Headline — max 2 lines, large display */}
        <h1
          id="hero-title"
          className="display-xl text-white max-w-3xl animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Bromo tanpa{" "}
          <em className="not-italic text-green-400">campur</em>
          <br />
          rombongan lain.
        </h1>

        {/* Subtext — max 20 words */}
        <p
          className="mt-4 text-sm md:text-base text-white/65 max-w-md leading-relaxed font-light animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          Trip privat sunrise Bromo dari Surabaya. Jadwal fleksibel, kendaraan terawat, dijemput dari pintu ke pintu.
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "420ms" }}
        >
          <a href="https://wa.me/6283116788444" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Booking via WhatsApp</span>
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
          <Link href="/bromo" className="btn-ghost">
            <span>Lihat Galeri Bromo</span>
          </Link>
        </div>

        {/* Horizontal rule + stats */}
        <div
          className="mt-10 pt-8 border-t border-white/10 hidden md:flex items-center gap-10 animate-fade-up"
          style={{ animationDelay: "520ms" }}
        >
          {[
            { val: "Rp 1.75jt", label: "Mulai dari / mobil" },
            { val: "Privat", label: "Tidak gabung rombongan" },
            { val: "24 Jam", label: "CS siap melayani" },
          ].map((s) => (
            <div key={s.val} className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">{s.val}</span>
              <span className="text-white/50 text-[11px] mt-1 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
