import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

const galeriFoto = [
  {
    src: "/Asset/IMG-20260713-WA0010.jpg",
    alt: "Pemandangan Gunung Bromo — Jeep di Lautan Pasir",
    caption: "Lautan Pasir Bromo",
  },
  {
    src: "/Asset/IMG-20260713-WA0011.jpg",
    alt: "Sunrise Gunung Bromo — Golden Hour Penanjakan",
    caption: "Sunrise Penanjakan 1",
  },
  {
    src: "/Asset/IMG-20260713-WA0012.jpg",
    alt: "Kawah Gunung Bromo — Pemandangan Kawah Aktif",
    caption: "Kawah Bromo",
  },
  {
    src: "/Asset/IMG-20260713-WA0014.jpg",
    alt: "Bukit Teletubbies & Pasir Berbisik Bromo",
    caption: "Bukit Teletubbies",
  },
];

export default function BromoPage() {
  return (
    <section
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24"
      aria-labelledby="bromo-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase">
            Galeri Perjalanan Nyata
          </span>
          <h1
            id="bromo-title"
            className="text-3xl font-extrabold text-brand-dark sm:text-5xl mt-3 font-nunito leading-tight"
          >
            Mediasi Trip Bromo<br />
            <span className="text-brand-orange">bersama BERKAH Trip</span>
          </h1>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            Inilah foto-foto nyata perjalanan private trip Bromo bersama kami. Buktikan sendiri pengalaman yang tak terlupakan di keindahan Gunung Bromo.
          </p>
        </div>

        {/* Galeri Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {galeriFoto.map((foto, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg card-hover-effect animate-fade-up bg-slate-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Foto */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gelap di bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex items-end justify-between">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-brand-orange shrink-0" />
                  <span className="text-sm font-bold drop-shadow">{foto.caption}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold text-white">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              judul: "Private Trip",
              deskripsi: "Tidak digabung rombongan lain. Perjalanan eksklusif bersama keluarga atau sahabat terdekat Anda.",
            },
            {
              judul: "Jadwal Fleksibel",
              deskripsi: "Atur waktu keberangkatan sesuai kebutuhan. Kami siap melayani kapanpun Anda siap berangkat.",
            },
            {
              judul: "Penjemputan Langsung",
              deskripsi: "Dijemput dari Hotel, Bandara Juanda, Stasiun, atau Rumah Anda di area Surabaya & Sidoarjo.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-brand-dark font-nunito mb-2">{item.judul}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-dark rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl font-bold font-nunito">Siap Berangkat ke Bromo?</h2>
            <p className="text-white/70 text-sm mt-2 font-light">
              Hubungi kami via WhatsApp dan tentukan jadwal private trip terbaik Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6283116788444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
            >
              <span>Booking via WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/paket"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm border border-white/20"
            >
              <span>Lihat Paket Trip</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
