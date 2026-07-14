"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Compass, Check, ArrowRight } from "lucide-react";

export default function PaketSection() {
  // hanya paket Bromo
  const paketList = [
    {
      id: "bromo-basic",
      name: "Paket BASIC Trip Bromo",
      duration: "1 Hari (Midnight)",
      price: 1750000,
      priceLabel: "per mobil (maks 4 tamu)",
      description:
        "Trip privat Bromo dari Surabaya. Tidak digabung rombongan lain, jadwal fleksibel, kendaraan terawat dan berpengalaman.",
      imagePath: "/Asset/BROMO.png",
      features: [
        "Transport PP Surabaya–Bromo",
        "Jeep Bromo 4x4",
        "Tiket Masuk Bromo (TNBTS)",
        "Driver Berpengalaman",
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
        "Semua fasilitas BASIC ditambah guide lokal profesional dan dokumentasi foto profesional sebagai kenangan perjalanan.",
      imagePath: "/Asset/BROMO.png",
      features: [
        "Transport PP Surabaya–Bromo",
        "Jeep Bromo 4x4",
        "Tiket Masuk Bromo (TNBTS)",
        "Driver Berpengalaman",
        "Guide Lokal Profesional",
        "Dokumentasi Foto Perjalanan",
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
    <section className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Private Trip Eksklusif
          </span>
          <h2 className="text-4xl font-extrabold text-brand-dark mt-2 font-nunito">
            Paket Wisata BERKAH Trip
          </h2>
          <p className="text-slate-500 mt-4 text-base font-light">
            Pilihan paket private trip Bromo yang nyaman, fleksibel, dan tidak digabung dengan rombongan lain.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="text-sm font-semibold text-slate-500">
            Menampilkan {filteredPaket.length} Paket Wisata Pilihan
          </div>
        </div>

        {/* Paket Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredPaket.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src={pkg.imagePath}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Top */}
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-brand-orange bg-brand-cream px-3 py-1.5 rounded-full border border-brand-orange/10">
                    {pkg.duration}
                  </span>
                  {pkg.isPopular && (
                    <span className="text-xs font-bold text-white bg-brand-orange px-3 py-1.5 rounded-full">
                      Terlaris
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-3 font-nunito">{pkg.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">{pkg.description}</p>

                {/* Features List */}
                <div className="space-y-2.5">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="h-4 w-4 text-brand-orange shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-5 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Mulai Dari
                  </span>
                  <span className="text-lg font-extrabold text-brand-dark">
                    Rp {pkg.price.toLocaleString("id-ID")}
                  </span>
                  <span className="block text-[10px] text-slate-400">{pkg.priceLabel}</span>
                </div>

                <a
                  href={`/booking?paket=${pkg.id}`}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                >
                  <span>Pesan</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPaket.length === 0 && (
          <div className="text-center py-20">
            <Compass className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Paket wisata tidak ditemukan.</p>
          </div>
        )}

        {/* Info harga */}
        <div className="mt-12 bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 text-center">
          <p className="text-sm text-brand-dark font-semibold">
            Harga dihitung per mobil (maksimal 4 tamu). Semakin banyak peserta, semakin hemat biaya per orang.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Penjemputan dari Hotel, Bandara, atau Rumah di area Surabaya & Sidoarjo.
          </p>
        </div>

      </div>
    </section>
  );
}
