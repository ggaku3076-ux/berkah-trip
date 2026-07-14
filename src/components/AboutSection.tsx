"use client";

import { useState, useMemo } from "react";
import { Users, Calendar, Award, CheckCircle2, ChevronRight, Car, Compass, Plane } from "lucide-react";

interface TransportService {
  id: string;
  name: string;
  maxCapacity: number;
  features: string[];
  description: string;
}

export default function AboutSection() {
  const [passengers, setPassengers] = useState<number>(4);
  const [serviceType, setServiceType] = useState<string>("paket");
  const [date, setDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("1");
  const [clientName, setClientName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const services: TransportService[] = [
    {
      id: "basic",
      name: "Paket BASIC Trip Bromo",
      maxCapacity: 4,
      description: "Layanan private trip standar lengkap transportasi PP Surabaya & Jeep Bromo.",
      features: ["Transport PP Surabaya-Bromo", "Jeep Bromo 4x4", "Tiket Masuk Bromo", "Driver Profesional"],
    },
    {
      id: "premium",
      name: "Paket PREMIUM Trip Bromo",
      maxCapacity: 4,
      description: "Layanan premium dengan tambahan guide lokal profesional dan dokumentasi foto.",
      features: ["Transport PP Surabaya-Bromo", "Jeep Bromo 4x4", "Tiket Masuk Bromo", "Driver", "Guide Lokal", "Dokumentasi Foto"],
    },
  ];

  const recommendedService = useMemo(() => {
    if (serviceType === "basic") {
      return services[0];
    }
    return services[1]; // default premium
  }, [serviceType]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !date) return;

    const typeLabel = 
      serviceType === "basic" ? "Paket BASIC Trip Bromo" : "Paket PREMIUM Trip Bromo";

    let message = `Halo BERKAH Trip, saya ingin menanyakan ketersediaan & booking paket Bromo:\n\n`;
    message += `- *Nama Pemesan:* ${clientName}\n`;
    message += `- *Pilihan Paket:* ${typeLabel}\n`;
    message += `- *Jumlah Penumpang:* ${passengers} orang\n`;
    message += `- *Tanggal Perjalanan:* ${date}\n`;
    message += `- *Durasi:* ${duration} Hari\n\n`;
    message += `Mohon info harga total dan konfirmasi jadwal ketersediaan. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6283116788444?text=${encoded}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setClientName("");
      setDate("");
    }, 3000);
  };

  return (
    <section 
      id="booking" 
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24 border-y border-slate-200"
      aria-labelledby="booking-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase">
            Form Pemesanan Mudah
          </span>
          <h2 
            id="booking-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3 font-nunito"
          >
            Booking Private Trip Bromo
          </h2>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            Isi formulir di bawah ini untuk memesan paket BASIC atau PREMIUM. Kami akan mengarahkan Anda ke WhatsApp CS kami untuk detail pelunasan dan konfirmasi.
          </p>
        </div>

        {/* Form & Recommendation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Nama Pemesan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                />
              </div>

              {/* Jenis Layanan Custom Radio Cards */}
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-3">Pilihan Paket Wisata</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Option 1: Basic */}
                  <button
                    type="button"
                    onClick={() => setServiceType("basic")}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                      serviceType === "basic"
                        ? "border-brand-orange bg-brand-cream/50 ring-2 ring-brand-orange/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`p-2 rounded-xl mb-3 ${serviceType === "basic" ? "bg-brand-orange text-white" : "bg-slate-200 text-slate-500"}`}>
                      <Compass className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark">Paket BASIC</span>
                    <span className="text-[10px] text-slate-400 mt-1">Rp 1.750.000 / mobil</span>
                  </button>

                  {/* Option 2: Premium */}
                  <button
                    type="button"
                    onClick={() => setServiceType("premium")}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                      serviceType === "premium"
                        ? "border-brand-orange bg-brand-cream/50 ring-2 ring-brand-orange/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`p-2 rounded-xl mb-3 ${serviceType === "premium" ? "bg-brand-orange text-white" : "bg-slate-200 text-slate-500"}`}>
                      <Compass className="h-5 w-5 animate-pulse" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark">Paket PREMIUM</span>
                    <span className="text-[10px] text-slate-400 mt-1">Rp 1.950.000 / mobil</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Jumlah Penumpang</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={passengers}
                    onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Durasi (Hari)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Tanggal Berangkat</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Membuka WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Hubungi CS via WhatsApp</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Recommendation Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-orange text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/15 px-3 py-1 rounded-full">
                Detail Paket Anda
              </span>

              <h3 className="text-2xl font-bold mt-4 font-nunito">{recommendedService.name}</h3>
              <p className="text-xs text-white/85 mt-1 font-light">{recommendedService.description}</p>

              <div className="mt-6 space-y-3">
                {recommendedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="h-4 w-4 text-white shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex gap-4 items-center">
              <div className="h-10 w-10 bg-brand-cream border border-brand-orange/20 flex items-center justify-center text-brand-orange rounded-xl shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-brand-dark">Garansi Pelayanan</h4>
                <p className="text-xs text-slate-400 font-light">
                  Semua armada private trip terawat, bersih, ber-AC dingin, dan dikemudikan oleh driver berpengalaman di medan Bromo.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
