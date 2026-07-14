"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Check, ArrowRight } from "lucide-react";

export default function PaketSection() {
  const paketList = [
    {
      id: "bromo-basic",
      name: "Paket BASIC Trip Bromo",
      duration: "1 Hari (Midnight)",
      price: 1750000,
      priceLabel: "per mobil (maks 4 tamu)",
      description:
        "Layanan private trip standar lengkap transportasi PP Surabaya & Jeep Bromo. Cocok bagi yang ingin perjalanan praktis dan bebas repot.",
      imagePath: "/Asset/BROMO.png",
      features: [
        "Transport PP Surabaya–Bromo (Avanza/Xenia)",
        "Jeep Bromo 4x4 Eksklusif",
        "Tiket Masuk Bromo (TNBTS)",
        "Driver & BBM Surabaya-Bromo",
        "Penjemputan di Hotel/Rumah/Bandara",
      ],
      isPopular: false,
    },
    {
      id: "bromo-premium",
      name: "Paket PREMIUM Trip Bromo",
      duration: "1 Hari (Midnight)",
      price: 1950000,
      priceLabel: "per mobil (maks 4 tamu)",
      description:
        "Semua fasilitas BASIC ditambah asisten guide lokal berpengalaman dan dokumentasi foto profesional untuk mengabadikan momen terbaik Anda.",
      imagePath: "/Asset/BROMO.png",
      features: [
        "Semua fasilitas Paket BASIC",
        "Guide Lokal Berpengalaman",
        "Dokumentasi Foto Profesional",
        "Snack Box & Air Mineral",
        "Upgrade Armada (Innova Reborn Opsional)",
      ],
      isPopular: true,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaket = useMemo(() => {
    return paketList.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="py-24 bg-[var(--canvas)] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <Reveal>
          <div className="max-w-xl mb-16 pt-12">
            <span className="eyebrow">Pilihan Paket</span>
            <h1 className="display-lg text-[var(--ink)] mt-4 font-nunito">
              Paket Private Trip Bromo
            </h1>
            <p className="text-[var(--ink-muted)] mt-4 text-sm font-light leading-relaxed">
              Pilih paket trip yang paling sesuai dengan preferensi Anda. Seluruh perjalanan bersifat privat tanpa dicampur orang lain.
            </p>
          </div>
        </Reveal>

        {/* Paket Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {filteredPaket.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 100}>
              <div className={`bezel h-full relative ${pkg.isPopular ? "ring-2 ring-[var(--accent)]/40" : ""}`}>
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-[var(--accent)] text-white px-3 py-1 rounded-full">
                      Paling Direkomendasikan
                    </span>
                  </div>
                )}
                <div className="bezel-inner p-7 md:p-8 flex flex-col h-full card-lift">
                  {/* Card Image Header */}
                  <div className="relative h-48 w-full bg-[var(--surface-tint)] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={pkg.imagePath}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                      <div className="text-right">
                        <span className="block text-lg font-black text-[var(--amber)]">
                          Rp {pkg.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-[10px] text-[var(--ink-faint)] leading-none">
                          {pkg.priceLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--ink)] mb-2 font-nunito">{pkg.name}</h3>
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-6 font-light">{pkg.description}</p>

                    {/* Features List */}
                    <div className="space-y-2.5">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--ink-muted)]">
                          <Check className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/booking?paket=${pkg.id}`}
                    className={`btn-primary mt-8 justify-center ${!pkg.isPopular ? "bg-[var(--ink)] hover:bg-[#2d3528]" : ""}`}
                  >
                    <span>Pesan Paket</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Info penting */}
        <Reveal delay={200}>
          <div className="mt-12 bg-white/40 border border-[var(--border)] rounded-2xl p-6 max-w-4xl text-center">
            <p className="text-xs text-[var(--ink-muted)] font-medium leading-relaxed">
              Catatan: Harga di atas merupakan harga per unit kendaraan, bukan per kepala (maksimal 4 tamu per unit).
              Informasikan kepada tim kami jika jumlah peserta lebih dari 4 orang untuk penyesuaian unit penjemputan.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
