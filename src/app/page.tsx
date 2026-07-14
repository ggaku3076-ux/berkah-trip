import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    label: "Privat",
    title: "Tidak Dicampur Rombongan Lain",
    body: "Perjalanan eksklusif hanya bersama orang-orang terdekat Anda. Tidak ada orang asing yang bergabung.",
    href: "/paket",
  },
  {
    label: "Fleksibel",
    title: "Jadwal Sesuai Keinginan Anda",
    body: "Atur waktu keberangkatan sendiri. Kami menyesuaikan, bukan sebaliknya.",
    href: "/booking",
  },
  {
    label: "Door-to-Door",
    title: "Dijemput dari Pintu ke Pintu",
    body: "Penjemputan dari Hotel, Bandara Juanda, Stasiun Gubeng, atau Rumah di area Surabaya & Sidoarjo.",
    href: "/lokasi",
  },
];

const paketPreview = [
  {
    name: "BASIC",
    price: "Rp 1.750.000",
    per: "per mobil · maks 4 tamu",
    features: ["Transport PP Surabaya–Bromo", "Jeep Bromo 4x4", "Tiket Masuk TNBTS", "Driver Profesional"],
    href: "/paket",
    popular: false,
  },
  {
    name: "PREMIUM",
    price: "Rp 1.950.000",
    per: "per mobil · maks 4 tamu",
    features: ["Semua fasilitas BASIC", "Guide Lokal Profesional", "Dokumentasi Foto Perjalanan"],
    href: "/paket",
    popular: true,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* === SECTION 1: THREE HIGHLIGHTS (asymmetric grid) === */}
      <section className="bg-[var(--canvas)] py-20 md:py-32 section-rule">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* header left-aligned — anti-center bias */}
          <Reveal>
            <div className="max-w-xl mb-14">
              <span className="eyebrow">Mengapa BERKAH Trip</span>
              <h2 className="display-md text-[var(--ink)] mt-4 font-nunito">
                Trip Bromo yang berbeda dari yang lain.
              </h2>
            </div>
          </Reveal>

          {/* asymmetric: 1 large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5">

            {/* Large card (col-span-3) */}
            <Reveal className="lg:col-span-3" delay={50}>
              <Link href="/paket" className="group block h-full">
                <div className="bezel h-full">
                  <div className="bezel-inner p-8 md:p-10 flex flex-col justify-between min-h-[320px] lg:min-h-full
                                  bg-[var(--ink)] card-lift">
                    {/* background pattern */}
                    <div className="absolute inset-0 opacity-5"
                      style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #3d8c54 0%, transparent 60%)" }} />
                    <div className="relative">
                      <span className="eyebrow bg-white/10 text-white/70 mb-6 inline-flex">Privat</span>
                      <h3 className="display-md text-white font-nunito leading-tight">
                        Tidak Dicampur<br />Rombongan Lain
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-sm">
                        Perjalanan eksklusif hanya bersama orang-orang terdekat Anda. Tidak ada orang asing yang bergabung dalam satu kendaraan.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-8 text-green-400 text-sm font-semibold
                                    group-hover:gap-3 transition-all duration-300">
                      <span>Lihat Paket</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Right stack (col-span-2) */}
            <div className="lg:col-span-2 flex flex-col gap-4 md:gap-5">
              {highlights.slice(1).map((h, i) => (
                <Reveal key={h.label} delay={100 + i * 80}>
                  <Link href={h.href} className="group block">
                    <div className="bezel">
                      <div className="bezel-inner p-6 md:p-7 card-lift">
                        <span className="eyebrow mb-4 inline-flex">{h.label}</span>
                        <h3 className="text-[var(--ink)] font-nunito font-bold text-lg leading-snug">{h.title}</h3>
                        <p className="text-[var(--ink-muted)] text-sm leading-relaxed mt-2">{h.body}</p>
                        <div className="flex items-center gap-2 mt-5 text-[var(--accent)] text-xs font-bold
                                        group-hover:gap-3 transition-all duration-300">
                          <span>Selengkapnya</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: PAKET PREVIEW (2-col, tightly spaced) === */}
      <section className="bg-[var(--surface-tint)] py-20 md:py-32 section-rule">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-lg">
                <span className="eyebrow">Harga Transparan</span>
                <h2 className="display-md text-[var(--ink)] mt-4 font-nunito">
                  Dua paket, satu tujuan.
                </h2>
              </div>
              <p className="text-[var(--ink-muted)] text-sm max-w-xs leading-relaxed">
                Harga per mobil, bukan per orang. Semakin banyak teman, semakin hemat per kepala.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {paketPreview.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <div className={`bezel h-full relative ${pkg.popular ? "ring-2 ring-[var(--accent)]/40" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-[var(--accent)] text-white px-3 py-1 rounded-full">
                        Terlaris
                      </span>
                    </div>
                  )}
                  <div className="bezel-inner p-7 md:p-8 flex flex-col h-full card-lift">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-[var(--ink-faint)]">
                          Paket
                        </span>
                        <h3 className="text-2xl font-black text-[var(--ink)] font-nunito mt-0.5">{pkg.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="block text-xl font-black text-[var(--amber)]">{pkg.price}</span>
                        <span className="text-[10px] text-[var(--ink-faint)]">{pkg.per}</span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-3 flex-grow">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--ink-muted)]">
                          <span className="w-4 h-4 rounded-full bg-[var(--accent-dim)] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <path d="M1 3l2 2 4-4" stroke="#2d6a3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={pkg.href}
                      className={`btn-primary mt-8 justify-center ${!pkg.popular ? "bg-[var(--ink)] hover:bg-[#2d3528]" : ""}`}
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

      {/* === SECTION 3: WA STRIP CTA === */}
      <section className="bg-[var(--accent)] py-14 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black font-nunito leading-tight">
                Siap berangkat ke Bromo?
              </h2>
              <p className="text-white/70 text-sm mt-2">
                Hubungi CS kami sekarang — respons cepat, tanpa antri.
              </p>
            </div>
            <a
              href="https://wa.me/6283116788444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[var(--accent)] font-black text-sm px-7 py-3.5 rounded-full
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shrink-0"
            >
              <span>083116788444</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
