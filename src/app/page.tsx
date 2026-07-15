import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Shield, Calendar, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    label: "Privat",
    title: "Privat Murni",
    body: "Tidak dicampur rombongan lain.",
    href: "/paket",
  },
  {
    icon: Calendar,
    label: "Fleksibel",
    title: "Jadwal Bebas",
    body: "Atur waktu sendiri, kami ikuti.",
    href: "/booking",
  },
  {
    icon: MapPin,
    label: "Jemput Pintu",
    title: "Jemput Pintu",
    body: "Hotel, Bandara, Stasiun, Rumah.",
    href: "/lokasi",
  },
];

const paketPreview = [
  {
    name: "PREMIUM BROMO",
    price: "Rp 1.950.000",
    per: "per mobil · maks 5 tamu",
    features: ["Transport PP Surabaya–Bromo", "Jeep Bromo 4x4", "Tiket Masuk TNBTS", "Guide Lokal & Dokumentasi"],
    href: "/booking?paket=bromo-premium",
    popular: true,
  },
  {
    name: "PREMIUM TUMPAK SEWU",
    price: "Rp 1.650.000",
    per: "per mobil · maks 5 tamu",
    features: ["Transport PP Surabaya–Tumpak Sewu", "Tiket Masuk Tumpak Sewu", "Eksplorasi Kapas Biru & Teras Semeru", "Local Guide & Dokumentasi Foto"],
    href: "/booking?paket=tumpak-sewu-premium",
    popular: true,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* === SECTION 1: HIGHLIGHTS === */}
      <section className="bg-[var(--canvas)] py-20 md:py-28 section-rule">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>
            <div className="max-w-md mb-12">
              <span className="eyebrow">Mengapa BERKAH Trip</span>
              <h2 className="display-md text-[var(--ink)] mt-3 font-sans font-light">
                Standar Pelayanan Private Trip
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.label} delay={i * 80}>
                  <Link href={h.href} className="group block">
                    <div className="bezel">
                      <div className="bezel-inner p-6 card-lift bg-[var(--surface)]">
                        <div className="w-8 h-8 rounded bg-[var(--accent-dim)] flex items-center justify-center text-[var(--ink)] mb-4">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="text-[var(--ink)] font-sans font-light text-sm leading-snug">{h.title}</h3>
                        <p className="text-[var(--ink-muted)] text-xs font-light leading-relaxed mt-1">{h.body}</p>
                        <div className="flex items-center gap-1.5 mt-4 text-[var(--ink)] text-[10px] font-light
                                        group-hover:gap-2.5 transition-all duration-200">
                          <span>Selengkapnya</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SECTION 2: PAKET PREVIEW === */}
      <section className="bg-[var(--surface-tint)] py-20 md:py-28 section-rule">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-md">
                <span className="eyebrow">Harga Transparan</span>
                <h2 className="display-md text-[var(--ink)] mt-3 font-sans font-light">
                  Pilihan Paket Wisata
                </h2>
              </div>
              <p className="text-[var(--ink-muted)] text-xs max-w-xs font-light leading-relaxed">
                Harga per mobil, bukan per orang. Semakin banyak teman, semakin hemat per kepala.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {paketPreview.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <div className={`bezel h-full relative ${pkg.popular ? "ring-1 ring-[var(--ink)]" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-2.5 left-5 z-10">
                      <span className="text-[9px] font-light uppercase tracking-wider bg-[var(--ink)] text-white px-2.5 py-0.5 rounded">
                        Rekomendasi
                      </span>
                    </div>
                  )}
                  <div className="bezel-inner p-6 md:p-8 flex flex-col h-full card-lift bg-[var(--surface)]">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-[10px] font-light uppercase tracking-wider text-[var(--ink-faint)]">
                          Paket
                        </span>
                        <h3 className="text-xl font-light text-[var(--ink)] font-sans mt-0.5">{pkg.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="block text-base font-light text-[var(--ink)]">{pkg.price}</span>
                        <span className="text-[9px] text-[var(--ink-faint)] font-light">{pkg.per}</span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2.5 flex-grow">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-[var(--ink-muted)] font-light">
                          <span className="w-3.5 h-3.5 rounded bg-[var(--accent-dim)] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="6" height="5" viewBox="0 0 8 6" fill="none">
                              <path d="M1 3l2 2 4-4" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={pkg.href}
                      className="btn-primary mt-6 justify-center text-xs"
                    >
                      Pesan Paket {pkg.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] py-12 md:py-16">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-light leading-tight">
                Hubungi kami untuk reservasi cepat.
              </h2>
            </div>
            <a
              href="https://wa.me/6283116788444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] font-medium text-xs px-5 py-2.5 rounded
                         transition-all hover:bg-blue-50 shrink-0"
            >
              <span>083116788444</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
