import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, MapPin, Star, Camera, Shield, Calendar } from "lucide-react";

const galeriFoto = [
  { src: "/Asset/IMG-20260713-WA0010.jpg", alt: "Lautan Pasir Bromo bersama Jeep 4x4", caption: "Lautan Pasir", location: "Bromo, Jawa Timur" },
  { src: "/Asset/IMG-20260713-WA0011.jpg", alt: "Sunrise golden hour dari Penanjakan Bromo", caption: "Sunrise Penanjakan 1", location: "Bromo, Jawa Timur" },
  { src: "/Asset/IMG-20260713-WA0012.jpg", alt: "Kawah aktif Gunung Bromo", caption: "Kawah Bromo", location: "Bromo, Jawa Timur" },
  { src: "/Asset/IMG-20260713-WA0014.jpg", alt: "Bukit Teletubbies dan Pasir Berbisik", caption: "Bukit Teletubbies", location: "Bromo, Jawa Timur" },
];

const keunggulan = [
  { icon: Shield, judul: "Privat Murni", deskripsi: "Tidak dicampur rombongan lain." },
  { icon: Calendar, judul: "Jadwal Bebas", deskripsi: "Atur waktu sendiri, kami ikuti." },
  { icon: MapPin, judul: "Jemput Pintu", deskripsi: "Hotel, Bandara, Stasiun, Rumah." },
];

export default function BromoPage() {
  return (
    <section className="bg-[var(--canvas)] pt-28 md:pt-36 pb-20" aria-labelledby="bromo-title">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* === HEADER === */}
        <Reveal>
          <div className="max-w-xl mb-12">
            <span className="eyebrow">
              <Camera className="h-3 w-3 mr-1" />
              Foto Perjalanan Nyata
            </span>
            <h1 id="bromo-title" className="display-lg text-[var(--ink)] font-sans mt-3">
              Mediasi Trip Bromo
            </h1>
            <p className="text-[var(--ink-muted)] text-xs mt-2 font-light leading-relaxed max-w-sm">
              Foto dokumentasi riil perjalanan bersama kami. Bukan stok foto, ini nyata.
            </p>
          </div>
        </Reveal>

        {/* === GALERI — Asymmetric masonry 2×2 === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">

          {/* Large left — col-span-3 */}
          <Reveal className="lg:col-span-3" delay={0}>
            <div className="bezel h-full">
              <div className="bezel-inner relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={galeriFoto[0].src}
                  alt={galeriFoto[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="h-3.5 w-3.5 text-neutral-300 shrink-0" />
                    <span className="text-xs font-medium drop-shadow">{galeriFoto[0].caption}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-[10px] font-medium text-white">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column 2 stacked — col-span-2 */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-5">
            {galeriFoto.slice(1, 3).map((foto, i) => (
              <Reveal key={foto.caption} delay={100 + i * 80}>
                <div className="bezel">
                  <div className="bezel-inner relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/65 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white">
                      <MapPin className="h-3 w-3 text-neutral-300 shrink-0" />
                      <span className="text-[10px] font-medium">{foto.caption}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom row — last photo */}
        <Reveal delay={200} className="mt-4 md:mt-5">
          <div className="bezel">
            <div className="bezel-inner relative overflow-hidden" style={{ aspectRatio: "21/7" }}>
              <Image
                src={galeriFoto[3].src}
                alt={galeriFoto[3].alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white">
                <MapPin className="h-3.5 w-3.5 text-neutral-300 shrink-0" />
                <span className="text-xs font-medium">{galeriFoto[3].caption}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* === KEUNGGULAN STRIP === */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {keunggulan.map((k, i) => {
            const Icon = k.icon;
            return (
              <Reveal key={k.judul} delay={i * 80}>
                <div className="bezel">
                  <div className="bezel-inner p-5 card-lift bg-[var(--surface)]">
                    <div className="w-8 h-8 rounded bg-[var(--accent-dim)] flex items-center justify-center text-[var(--ink)] mb-3">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-[var(--ink)] font-sans text-xs">{k.judul}</h3>
                    <p className="text-[var(--ink-muted)] text-[11px] mt-1 font-light leading-relaxed">{k.deskripsi}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* === CTA === */}
        <Reveal delay={100} className="mt-12">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl font-light">Siap Berangkat ke Bromo?</h2>
              <p className="text-white/50 text-xs mt-1 font-light">
                Hubungi kami via WhatsApp dan tentukan jadwal private trip terbaik Anda.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/6283116788444"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Booking via WhatsApp</span>
                <ArrowRight className="h-3 w-3" />
              </a>
              <Link href="/paket" className="btn-ghost">
                Lihat Paket Trip
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
