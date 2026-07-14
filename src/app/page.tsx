import Link from "next/link";
import Hero from "@/components/Hero";
import { Car, Compass, CalendarRange, MapPin, Image as LucideImage, ArrowRight } from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      icon: Compass,
      title: "Trip Bromo",
      description: "Lihat pilihan paket private trip Bromo dengan harga per mobil. BASIC dan PREMIUM tersedia.",
      href: "/paket",
      linkText: "Lihat Paket Trip",
    },
    {
      icon: LucideImage,
      title: "Galeri Bromo",
      description: "Foto-foto real perjalanan trip Bromo bersama BERKAH Trip. Buktikan pengalaman terbaik kami.",
      href: "/bromo",
      linkText: "Lihat Galeri",
    },
    {
      icon: Car,
      title: "Armada Kendaraan",
      description: "Kendaraan terawat dan berpengalaman siap mengantar Anda ke Bromo dari Surabaya & Sidoarjo.",
      href: "/armada",
      linkText: "Jelajahi Armada",
    },
    {
      icon: CalendarRange,
      title: "Booking Sekarang",
      description: "Simulasi dan booking private trip Bromo secara mudah. Tim kami akan konfirmasi via WhatsApp.",
      href: "/booking",
      linkText: "Mulai Booking",
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Home Portal Navigation Grid */}
      <section 
        className="py-16 md:py-24 bg-brand-blue-bg border-t border-brand-blue/10"
        aria-labelledby="portal-title"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-brand-blue uppercase">
              Layanan Private Trip Kami
            </span>
            <h2 
              id="portal-title" 
              className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
            >
              Solusi Perjalanan ke Bromo
            </h2>
            <p className="text-base text-brand-dark/70 mt-4">
              Pilih layanan di bawah ini untuk melihat detail paket trip, galeri foto, armada kendaraan, atau langsung booking privat trip Bromo Anda bersama kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portalCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-brand-blue/10 hover:border-brand-blue card-hover-effect flex flex-col justify-between items-start text-left shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-blue-bg border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{card.title}</h3>
                    <p className="text-sm text-brand-dark/60 leading-relaxed">{card.description}</p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-blue-light group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-brand-orange py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center text-white">
          <p className="text-sm font-semibold">
            Private Trip — Tidak Digabung Rombongan. Jadwal Fleksibel. Penjemputan dari Hotel, Bandara, atau Rumah.
          </p>
          <p className="text-xs text-white/80 mt-2">
            WA: <a href="https://wa.me/6283116788444" className="underline font-bold">083116788444</a>
          </p>
        </div>
      </section>
    </>
  );
}
