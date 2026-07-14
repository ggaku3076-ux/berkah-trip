import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#0f172a] text-white pt-16 md:pt-20 pb-8 border-t border-white/5"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* === DESKTOP === */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-16">

          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0 bg-white/8 border border-white/12 rounded-xl p-1.5 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Asset/LOGO_BARU.png" alt="BERKAH Trip Logo" className="h-full w-full object-contain" />
              </div>
              <div className="leading-none">
                <span className="block font-nunito font-black text-lg text-white">BERKAH Trip</span>
                <span className="block text-[10px] text-white/35 tracking-widest uppercase mt-0.5">Bromo Private</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Layanan private trip Bromo dari Surabaya & Sidoarjo yang privat, fleksibel, dan berkesan.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/30 mb-5">Halaman</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {[
                ["Beranda", "/"],
                ["Trip Bromo", "/paket"],
                ["Galeri Bromo", "/bromo"],
                ["Armada", "/armada"],
                ["Booking", "/booking"],
                ["Kontak", "/lokasi"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/30 mb-5">Layanan</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>Private Trip Bromo</li>
              <li>Paket BASIC – Rp 1.750.000</li>
              <li>Paket PREMIUM – Rp 1.950.000</li>
              <li>Jemput Hotel & Bandara</li>
              <li>Penjemputan 24 Jam</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white/30 mb-5">Kontak</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                <span>Surabaya & Sidoarjo, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-400 shrink-0" />
                <a href="tel:+6283116788444" className="hover:text-white transition-colors">083116788444</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-green-400 shrink-0" />
                <span>24 Jam Nonstop</span>
              </li>
            </ul>

            <a
              href="https://wa.me/6283116788444"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full justify-center text-xs"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* === MOBILE === */}
        <div className="block md:hidden mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-14 w-14 bg-white/8 border border-white/12 rounded-xl p-1.5 flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Asset/LOGO_BARU.png" alt="BERKAH Trip Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <span className="block font-nunito font-black text-base text-white">BERKAH Trip</span>
              <span className="block text-[10px] text-white/35 tracking-widest uppercase">Bromo Private</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { Icon: MapPin, label: "Surabaya & Sidoarjo" },
              { Icon: Clock, label: "24 Jam Nonstop" },
            ].map(({ Icon, label }) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-3.5 flex items-center gap-2.5">
                <Icon className="h-3.5 w-3.5 text-green-400 shrink-0" />
                <span className="text-[11px] text-white/75">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/6283116788444"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mb-6"
          >
            <MessageSquare className="h-4 w-4" />
            083116788444
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 py-4 border-t border-white/8">
            {[["Home", "/"], ["Trip", "/paket"], ["Galeri", "/bromo"], ["Armada", "/armada"], ["Booking", "/booking"]].map(([l, h]) => (
              <Link key={l} href={h} className="text-[11px] text-white/50 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/8 text-[11px] text-white/30">
          <p>© 2026 BERKAH Trip. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/60 transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Privasi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
