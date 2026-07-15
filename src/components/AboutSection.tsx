"use client";

import { useState, useMemo, useEffect } from "react";
import { Users, Calendar, Award, CheckCircle2, ChevronRight, Compass } from "lucide-react";

interface TransportService {
  id: string;
  name: string;
  maxCapacity: number;
  features: string[];
  description: string;
}

export default function AboutSection() {
  const [passengers, setPassengers] = useState<number>(4);
  const [serviceType, setServiceType] = useState<string>("bromo-premium");
  const [date, setDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("1");
  const [clientName, setClientName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const services: TransportService[] = [
    {
      id: "bromo-basic",
      name: "Paket BASIC Trip Bromo",
      maxCapacity: 4,
      description: "Layanan private trip standar lengkap transportasi PP Surabaya & Jeep Bromo.",
      features: ["Transport PP Surabaya-Bromo (Avanza/Xenia)", "Jeep Bromo 4x4 Eksklusif", "Tiket Masuk Bromo (TNBTS)", "Driver & BBM Surabaya-Bromo"],
    },
    {
      id: "bromo-premium",
      name: "Paket PREMIUM Trip Bromo",
      maxCapacity: 4,
      description: "Layanan premium dengan tambahan guide lokal profesional dan dokumentasi foto.",
      features: ["Transport PP Surabaya-Bromo", "Jeep Bromo 4x4", "Tiket Masuk Bromo (TNBTS)", "Driver & BBM", "Guide Lokal", "Dokumentasi Foto"],
    },
    {
      id: "tumpak-sewu-reguler",
      name: "Paket REGULER Trip Tumpak Sewu",
      maxCapacity: 4,
      description: "Layanan private trip standar transportasi PP Surabaya, Tiket Tumpak Sewu, Kapas Biru, & Teras Semeru.",
      features: ["Transport PP Surabaya–Tumpak Sewu", "Tiket Masuk Tumpak Sewu", "Eksplorasi Kapas Biru & Teras Semeru", "Driver & BBM Surabaya-Tumpak Sewu"],
    },
    {
      id: "tumpak-sewu-premium",
      name: "Paket PREMIUM Trip Tumpak Sewu",
      maxCapacity: 4,
      description: "Semua fasilitas REGULER ditambah local guide, akses ke bawah air terjun, Goa Tetes (opsional), dan dokumentasi.",
      features: ["Semua fasilitas Paket REGULER", "Local Guide Pendamping Berpengalaman", "Akses Turun ke Bawah Air Terjun", "Eksplorasi Goa Tetes (Opsional)", "Dokumentasi Foto Perjalanan (Group)"],
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const paket = params.get("paket");
      if (paket && services.some((s) => s.id === paket)) {
        setServiceType(paket);
      } else if (paket === "basic" || paket === "bromo-basic") {
        setServiceType("bromo-basic");
      } else if (paket === "premium" || paket === "bromo-premium") {
        setServiceType("bromo-premium");
      } else if (paket === "tumpak-sewu-reguler") {
        setServiceType("tumpak-sewu-reguler");
      } else if (paket === "tumpak-sewu-premium") {
        setServiceType("tumpak-sewu-premium");
      }
    }
  }, []);

  const recommendedService = useMemo(() => {
    const found = services.find((s) => s.id === serviceType);
    return found || services[1];
  }, [serviceType, services]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !date) return;

    const found = services.find((s) => s.id === serviceType);
    const typeLabel = found ? found.name : "Paket PREMIUM Trip Bromo";

    let message = `Halo BERKAH Trip, saya ingin menanyakan ketersediaan & booking paket wisata:\n\n`;
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
          <span className="font-sans text-[10px] font-medium tracking-wider text-[var(--ink)] bg-[var(--accent-dim)] px-2 py-0.5 rounded uppercase">
            Form Pemesanan
          </span>
          <h2 
            id="booking-title" 
            className="text-2xl font-light text-brand-dark sm:text-3xl mt-3 font-sans"
          >
            Booking Private Trip
          </h2>
          <p className="text-xs text-brand-dark/70 mt-2 font-light">
            Isi formulir di bawah ini untuk memesan paket Trip Bromo atau Trip Tumpak Sewu.
          </p>
        </div>

        {/* Form & Recommendation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              <div>
                <label className="block text-xs font-medium text-brand-dark mb-2">Nama Pemesan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                />
              </div>

              {/* Jenis Layanan Custom Radio Cards */}
              <div className="space-y-4">
                <label className="block text-xs font-medium text-brand-dark mb-1">Pilihan Paket Wisata</label>
                
                {/* Bromo Trip Group */}
                <div>
                  <span className="text-[10px] uppercase font-light text-slate-400 block mb-2">Trip Bromo</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceType("bromo-basic")}
                      className={`flex flex-col items-start p-4 rounded border text-left transition-all ${
                        serviceType === "bromo-basic"
                          ? "border-brand-dark bg-slate-50"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center mb-3">
                        <Compass className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-brand-dark">Paket BASIC Bromo</span>
                      <span className="text-[10px] text-slate-400 mt-1">Rp 1.750.000 / mobil</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType("bromo-premium")}
                      className={`flex flex-col items-start p-4 rounded border text-left transition-all ${
                        serviceType === "bromo-premium"
                          ? "border-brand-dark bg-slate-50"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center mb-3">
                        <Compass className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-brand-dark">Paket PREMIUM Bromo</span>
                      <span className="text-[10px] text-slate-400 mt-1">Rp 1.950.000 / mobil</span>
                    </button>
                  </div>
                </div>

                {/* Tumpak Sewu Trip Group */}
                <div>
                  <span className="text-[10px] uppercase font-light text-slate-400 block mb-2">Trip Tumpak Sewu</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceType("tumpak-sewu-reguler")}
                      className={`flex flex-col items-start p-4 rounded border text-left transition-all ${
                        serviceType === "tumpak-sewu-reguler"
                          ? "border-brand-dark bg-slate-50"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center mb-3">
                        <Compass className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-brand-dark">Paket REGULER Tumpak Sewu</span>
                      <span className="text-[10px] text-slate-400 mt-1">Rp 1.400.000 / mobil</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType("tumpak-sewu-premium")}
                      className={`flex flex-col items-start p-4 rounded border text-left transition-all ${
                        serviceType === "tumpak-sewu-premium"
                          ? "border-brand-dark bg-slate-50"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center mb-3">
                        <Compass className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-brand-dark">Paket PREMIUM Tumpak Sewu</span>
                      <span className="text-[10px] text-slate-400 mt-1">Rp 1.650.000 / mobil</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-brand-dark mb-2">Jumlah Penumpang</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={passengers}
                    onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                    className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-brand-dark focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-dark mb-2">Durasi (Hari)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-brand-dark focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-dark mb-2">Tanggal Berangkat</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-brand-dark focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-3.5 rounded bg-[var(--ink)] hover:opacity-90 text-white font-medium text-xs transition-all flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
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
            <div className="bg-[var(--ink)] text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <span className="text-[9px] font-medium uppercase tracking-wider text-white/50">
                Detail Paket Anda
              </span>

              <h3 className="text-lg font-light mt-3 font-sans">{recommendedService.name}</h3>
              <p className="text-xs text-white/70 mt-1 font-light leading-relaxed">{recommendedService.description}</p>

              <div className="mt-6 space-y-3">
                {recommendedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-light">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex gap-4 items-center">
              <div className="h-8 w-8 bg-slate-100 flex items-center justify-center text-brand-dark rounded shrink-0">
                <Award className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-medium text-brand-dark">Garansi Pelayanan</h4>
                <p className="text-[10px] text-slate-400 font-light leading-relaxed">
                  Semua armada private trip terawat, bersih, ber-AC dingin, dan dikemudikan oleh driver berpengalaman di medan perjalanan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
