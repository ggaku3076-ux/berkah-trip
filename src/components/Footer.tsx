import Link from "next/link";
import { MapPin, Phone, Clock, Compass, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      id="kontak" 
      className="bg-brand-dark text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-brand-orange/10"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* === MOBILE FOOTER LAYOUT === */}
        <div className="block md:hidden">
          
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Asset/LOGO.png"
                  alt="BERKAH Trip Logo"
                  className="h-full w-full object-contain bg-transparent"
                />
              </div>
              <span className="font-nunito font-light text-xl text-white tracking-tight">
                BERKAH Trip
              </span>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-[280px]">
              Layanan Private Trip Bromo dari Surabaya & Sidoarjo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <p className="text-[11px] text-white/90 leading-snug">
                Surabaya & Sidoarjo, Jawa Timur
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <Clock className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-semibold text-white/90">Setiap Hari</p>
                <p className="text-[11px] text-white/70">24 Jam Nonstop</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <a href="tel:+6283116788444" className="text-[11px] text-white/90 leading-snug">
                083116788444
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <Compass className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span className="text-[11px] text-white/90 leading-snug">
                Hotel, Bandara, Rumah
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/6283116788444"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-white py-3 text-xs font-bold text-brand-orange hover:bg-white/90 transition-all duration-200 shadow-sm mb-6"
          >
            <Compass className="h-4 w-4 text-brand-orange" />
            <span>Hubungi via WhatsApp</span>
            <ExternalLink className="h-3 w-3 text-brand-orange" />
          </a>

          <div className="flex items-center justify-center gap-5 py-4 border-t border-white/10">
            <Link href="/" className="text-[11px] text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/paket" className="text-[11px] text-white/70 hover:text-white transition-colors">Trip Bromo</Link>
            <Link href="/bromo" className="text-[11px] text-white/70 hover:text-white transition-colors">Galeri</Link>
            <Link href="/armada" className="text-[11px] text-white/70 hover:text-white transition-colors">Armada</Link>
            <Link href="/booking" className="text-[11px] text-white/70 hover:text-white transition-colors">Booking</Link>
            <Link href="/lokasi" className="text-[11px] text-white/70 hover:text-white transition-colors">Kontak</Link>
          </div>

          <p className="text-center text-[10px] text-white/50 mt-3">
            © 2026 BERKAH Trip. All rights reserved.
          </p>
        </div>

        {/* === DESKTOP FOOTER LAYOUT === */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Asset/LOGO.png"
                    alt="BERKAH Trip Logo"
                    className="h-full w-full object-contain bg-transparent"
                  />
                </div>
                <span className="font-nunito font-semibold text-xl text-white tracking-tight">
                  BERKAH Trip
                </span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Menyediakan layanan private trip Bromo dari Surabaya & Sidoarjo yang nyaman, fleksibel, dan tidak digabung rombongan lain.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-orange">Halaman</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/paket" className="hover:text-white transition-colors">Trip Bromo</Link></li>
                <li><Link href="/bromo" className="hover:text-white transition-colors">Galeri Bromo</Link></li>
                <li><Link href="/armada" className="hover:text-white transition-colors">Armada Kendaraan</Link></li>
                <li><Link href="/booking" className="hover:text-white transition-colors">Booking Sekarang</Link></li>
                <li><Link href="/lokasi" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-orange">Layanan</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li>Private Trip Bromo</li>
                <li>Paket BASIC – Rp 1.750.000/mobil</li>
                <li>Paket PREMIUM – Rp 1.950.000/mobil</li>
                <li>Penjemputan Hotel & Bandara</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-orange">Kontak Kami</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-orange" />
                  <span>Surabaya & Sidoarjo, Jawa Timur</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
                  <a href="tel:+6283116788444" className="hover:text-white transition-colors">083116788444</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Compass className="h-5 w-5 shrink-0 text-brand-orange" />
                  <a href="https://wa.me/6283116788444" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Langsung</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/10 text-xs text-white/60">
            <p>© 2026 BERKAH Trip. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
