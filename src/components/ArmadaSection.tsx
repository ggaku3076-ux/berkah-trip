import Image from "next/image";
import { Heart, Shield, Car, Compass, Layers } from "lucide-react";

export default function ArmadaSection() {
  const armadas = [
    {
      name: "Jeep Bromo 4x4",
      type: "Offroad Bromo",
      capacity: "Maksimal 6 Tamu",
      price: 0,
      priceLabel: "Sudah Termasuk di Paket",
      imagePath: "/Asset/JEEP.png", // Diganti menggunakan JEEP.png baru
      description: "Kendaraan 4x4 tangguh wajib untuk melintasi lautan pasir Bromo, menanjak ke sunrise view point, dan mengelilingi kaldera.",
      features: ["Sistem Penggerak 4x4", "Driver Khusus Gunung Bromo", "Bahan Bakar Termasuk"],
      icon: Shield,
    },
    {
      name: "Toyota Avanza / Xenia",
      type: "MPV Standar",
      capacity: "Maksimal 6 Tamu",
      price: 0,
      priceLabel: "Sudah Termasuk PP Surabaya",
      imagePath: "/Asset/AVANZA.png",
      description: "Mobil penjemputan keluarga yang hemat bahan bakar dan ber-AC dingin untuk perjalanan PP Surabaya-Bromo yang nyaman.",
      features: ["AC Double Blower", "Driver Profesional", "BBM Termasuk"],
      icon: Car,
    },
    {
      name: "Toyota Innova Reborn",
      type: "MPV Premium",
      capacity: "Maksimal 7 Tamu",
      price: 0,
      priceLabel: "Opsional Upgrade Premium",
      imagePath: "/Asset/INOVA REBORNN.png",
      description: "Mobil penjemputan premium dengan kenyamanan ekstra, suspensi empuk, dan kabin senyap untuk perjalanan ke Bromo.",
      features: ["AC Dingin Nyaman", "Suspensi Premium", "Kabin Sangat Lega"],
      icon: Compass,
    },
    {
      name: "Toyota Hiace Commuter",
      type: "Minibus",
      capacity: "14 Penumpang",
      price: 0,
      priceLabel: "Tersedia Rombongan Sedang",
      imagePath: "/Asset/HIACE.png",
      description: "Minibus nyaman untuk rombongan keluarga besar atau dinas kantor dari Surabaya menuju transit Bromo.",
      features: ["Kapasitas Lega", "Reclining Seats", "Audio & AC Ducting"],
      icon: Layers,
    },
  ];

  return (
    <section 
      id="armada" 
      className="bg-[var(--canvas)] pt-32 pb-16 md:pt-40 md:pb-24 border-y border-slate-200"
      aria-labelledby="armada-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-medium tracking-wider text-[var(--ink)] bg-[var(--accent-dim)] px-2 py-0.5 rounded uppercase">
            Pilihan Armada Terbaik
          </span>
          <h2 
            id="armada-title" 
            className="text-2xl font-light text-[var(--ink)] sm:text-3xl mt-3 font-sans"
          >
            Kendaraan Nyaman & Terawat
          </h2>
          <p className="text-xs text-[var(--ink-muted)] mt-2 font-light leading-relaxed">
            Armada terawat bersih dan Jeep tangguh demi kelancaran perjalanan Anda.
          </p>
        </div>

        {/* Armada Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {armadas.map((mobil, index) => {
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-150 flex flex-col justify-between overflow-hidden shadow-sm card-lift"
              >
                {/* Image Header (Warna Asli) */}
                <div className="relative h-44 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                  <Image
                    src={mobil.imagePath}
                    alt={mobil.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={`object-contain transition-transform duration-500 hover:scale-105 ${
                      mobil.name.toLowerCase().includes("jeep")
                        ? "p-0 scale-135 hover:scale-140"
                        : "p-3"
                    }`}
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-medium text-[var(--ink)] bg-[var(--accent-dim)] px-2 py-0.5 rounded">
                      {mobil.type}
                    </span>
                    <h3 className="text-base font-medium text-[var(--ink)] mt-4 font-sans leading-none">{mobil.name}</h3>
                    <span className="text-[10px] text-slate-400 block mt-1.5 font-light">{mobil.capacity}</span>
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed mt-4 font-light">{mobil.description}</p>
                    
                    {/* Mini Features */}
                    <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                      {mobil.features.map((feat, idx) => (
                        <span key={idx} className="block text-[11px] text-slate-500 font-light">• {feat}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="block text-[9px] font-medium text-slate-400 uppercase tracking-wider">Status Biaya</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xs font-medium text-[var(--ink)]">
                        {mobil.priceLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white border border-slate-250 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-8 w-8 rounded bg-[var(--accent-dim)] flex items-center justify-center text-[var(--ink)] shrink-0">
              <Heart className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-[var(--ink)]">Butuh Rombongan Besar / Elf Long?</h4>
              <p className="text-xs text-[var(--ink-muted)] font-light mt-0.5">Hubungi CS kami untuk detail ketersediaan armada berkapasitas besar.</p>
            </div>
          </div>
          <a
            href="/booking"
            className="rounded bg-[var(--ink)] px-5 py-2.5 text-xs font-medium text-white hover:opacity-95 transition-all shrink-0"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  );
}
