import Link from "next/link";
import { MapPin, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#0f172a] text-white pt-16 md:pt-20 pb-8 border-t border-white/5"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Brand/Logo Section */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="relative h-16 w-16 shrink-0 bg-white/8 border border-white/12 rounded-xl p-1.5 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Asset/LOGO_BARU.png" alt="BERKAH Trip Logo" className="h-full w-full object-contain" />
          </div>
          <div className="leading-none">
            <span className="block font-nunito font-black text-lg text-white">BERKAH Trip</span>
            <span className="block text-[10px] text-white/35 tracking-widest uppercase mt-1">Private Trip</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-white/50 leading-relaxed max-w-md mx-auto mb-8 font-light">
          Layanan private trip Bromo & Tumpak Sewu dari Surabaya & Sidoarjo yang privat, fleksibel, dan berkesan.
        </p>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
          {[
            { Icon: MapPin, label: "Surabaya & Sidoarjo" },
            { Icon: Clock, label: "24 Jam Nonstop" },
          ].map(({ Icon, label }) => (
            <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-4 flex items-center justify-center gap-3">
              <Icon className="h-4 w-4 text-green-400 shrink-0" />
              <span className="text-xs text-white/80 font-light">{label}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp Call to Action Button */}
        <div className="mb-10 max-w-xs mx-auto">
          <a
            href="https://wa.me/6283116788444"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-xs py-3"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat WhatsApp (083116788444)</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-6 border-t border-white/8">
          {[
            ["Home", "/"],
            ["Paket Trip", "/paket"],
            ["Galeri Bromo", "/bromo"],
            ["Galeri Tumpak Sewu", "/tumpak-sewu"],
            ["Armada", "/armada"],
            ["Booking", "/booking"],
            ["Kontak", "/lokasi"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className="text-xs text-white/50 hover:text-white transition-colors duration-200">
              {label}
            </Link>
          ))}
        </div>

        {/* Bottom copyright and legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/5 text-[11px] text-white/30 gap-4">
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
