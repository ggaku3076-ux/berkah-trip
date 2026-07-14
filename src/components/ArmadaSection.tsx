import Image from "next/image";
import { ShieldCheck, UserCheck, Heart } from "lucide-react";

export default function ArmadaSection() {
  const armadas = [
    {
      name: "Jeep Bromo 4x4",
      type: "Offroad Bromo",
      capacity: "Maksimal 6 Tamu",
      price: 0, // di-bundling di paket
      priceLabel: "Sudah Termasuk di Paket",
      imagePath: "/Asset/BROMO.png",
      description: "Kendaraan 4x4 tangguh wajib untuk melintasi lautan pasir Bromo, menanjak ke sunrise view point, dan mengelilingi kaldera.",
      features: ["Sistem Penggerak 4x4", "Driver Khusus Gunung Bromo", "Bahan Bakar Termasuk"],
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
    },
  ];

  return (
    <section 
      id="armada" 
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24 border-y border-slate-200"
      aria-labelledby="armada-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase">
            Armada Pilihan BERKAH Trip
          </span>
          <h2 
            id="armada-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3 font-nunito"
          >
            Kendaraan Nyaman & Terawat
          </h2>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            BERKAH Trip berkomitmen menyajikan armada terawat, bersih, ber-AC dingin, dan Jeep tangguh guna menjamin kelancaran private trip Bromo Anda.
          </p>
        </div>

        {/* Armada Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {armadas.map((mobil, index) => {
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-150 hover:border-brand-orange card-hover-effect flex flex-col justify-between overflow-hidden shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Header */}
                <div className="relative h-44 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                  <Image
                    src={mobil.imagePath}
                    alt={mobil.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-3 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-brand-orange bg-brand-cream px-2.5 py-1 rounded-full border border-brand-orange/10">
                      {mobil.type}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mt-4 font-nunito">{mobil.name}</h3>
                    <span className="text-xs text-slate-400 block mt-1">{mobil.capacity}</span>
                    <p className="text-sm text-brand-dark/60 leading-relaxed mt-4 font-light">{mobil.description}</p>
                    
                    {/* Mini Features */}
                    <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                      {mobil.features.map((feat, idx) => (
                        <span key={idx} className="block text-xs text-slate-500">• {feat}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Biaya</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-sm font-extrabold text-brand-dark">
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
        <div className="mt-16 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 rounded-full bg-brand-cream border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Butuh Rombongan Besar / Elf Long?</h4>
              <p className="text-xs text-brand-dark/60">Hubungi CS kami untuk konsultasi ketersediaan armada rombongan besar dan penjemputan stasiun Surabaya.</p>
            </div>
          </div>
          <a
            href="/booking"
            className="rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orange-light transition-colors shrink-0"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  );
}
