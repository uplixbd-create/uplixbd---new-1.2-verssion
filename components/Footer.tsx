'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UplixLogo } from './Logo';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  X,
} from 'lucide-react';

export function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="border-t border-[#54218A]/40 bg-[#0C001B] relative overflow-hidden text-[#B8A9CC]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#5B0BB5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Massive Top Banner */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-14 border-b border-[#54218A]/30">
        <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#1B0638] via-[#24004F]/90 to-[#1B0638]">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 text-xs font-semibold text-white mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Scale With Confidence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Let’s Build Your Growth Engine.
            </h3>
            <p className="text-sm sm:text-base text-[#B8A9CC] max-w-xl">
              Tell us where you are. We’ll help you figure out where to go next with precision analytics and high-converting marketing.
            </p>
          </div>

          <Link
            href="/#contact"
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 shadow-[0_0_30px_rgba(139,43,226,0.45)] transition-all duration-200 flex items-center gap-2.5 shrink-0 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <UplixLogo size="md" />
            </Link>
            <p className="text-sm text-[#B8A9CC] leading-relaxed max-w-sm">
              UplixBD is an elite digital marketing and creative agency based in Bangladesh, driving performance advertising, organic authority, and digital excellence for brands worldwide.
            </p>
            <a
              href="https://share.google/8yknN3GIfedVQJB4w"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#E9E1F5] hover:text-[#C084FC] transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#8B2BE2] group-hover:text-[#C084FC] transition-colors" />
              <span className="underline decoration-[#54218A] hover:decoration-[#C084FC] underline-offset-4">
                Bangladesh · Working Globally
              </span>
            </a>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About UplixBD</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers & Hiring</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/#results" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors">Client Reviews</Link></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Capabilities</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:text-white transition-colors">Meta (FB & IG) Ads</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Google Ads & PMax</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Search Engine Optimization (SEO)</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">GA4 & Server-Side Tracking</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">High-Converting Web Design</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">VFX & Video Editing</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Connect With Us</div>
            <p className="text-xs text-[#B8A9CC]">
              Have a direct question? Reach out to our strategy desk.
            </p>
            <div className="space-y-2.5">
              <div>
                <a
                  href="mailto:contact@uplixbd.com"
                  className="inline-flex items-center gap-2 text-sm text-[#E9E1F5] hover:text-[#C084FC] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8B2BE2]" />
                  <span>contact@uplixbd.com</span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+8801314-085991"
                  className="inline-flex items-center gap-2 text-sm text-[#E9E1F5] hover:text-[#C084FC] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8B2BE2]" />
                  <span>+8801314-085991</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/uplixbd"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1B0638] border border-[#54218A] hover:border-[#8B2BE2] hover:bg-[#5B0BB5] flex items-center justify-center text-[#E9E1F5] hover:text-white transition-all shadow-sm group"
                aria-label="Facebook - UplixBD"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/uplixbd"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1B0638] border border-[#54218A] hover:border-[#8B2BE2] hover:bg-[#5B0BB5] flex items-center justify-center text-[#E9E1F5] hover:text-white transition-all shadow-sm group"
                aria-label="Instagram - UplixBD"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/uplixbd"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1B0638] border border-[#54218A] hover:border-[#8B2BE2] hover:bg-[#5B0BB5] flex items-center justify-center text-[#E9E1F5] hover:text-white transition-all shadow-sm group"
                aria-label="X (Twitter) - UplixBD"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@UPLIX_BD"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1B0638] border border-[#54218A] hover:border-[#8B2BE2] hover:bg-[#5B0BB5] flex items-center justify-center text-[#E9E1F5] hover:text-white transition-all shadow-sm group"
                aria-label="YouTube - UplixBD"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.link/ajslww"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1B0638] border border-[#54218A] hover:border-[#22C55E] hover:bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] hover:text-[#22C55E] transition-all shadow-sm group"
                aria-label="WhatsApp - UplixBD"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.54 1.772.82 2.79.82 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.767-5.769zm10.222 5.834c0 5.66-4.603 10.264-10.264 10.264-1.761 0-3.447-.45-4.928-1.258l-5.617 1.472 1.501-5.474c-.899-1.536-1.398-3.325-1.398-5.004 0-5.661 4.604-10.264 10.264-10.264 5.66 0 10.264 4.603 10.264 10.264zm-5.023 3.652c-.279-.14-1.651-.815-1.907-.908-.256-.093-.442-.14-.628.14-.186.279-.721.908-.884 1.094-.163.186-.325.21-.604.07-.279-.14-1.178-.434-2.244-1.385-.829-.739-1.389-1.652-1.552-1.931-.163-.279-.018-.43.122-.569.126-.125.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.489s-.628-1.512-.86-2.07c-.227-.544-.457-.47-.628-.479-.163-.008-.349-.01-.535-.01-.186 0-.488.07-.744.349-.256.279-.977.954-.977 2.326s1.001 2.698 1.14 2.884c.14.186 1.968 3.005 4.77 4.215.667.288 1.188.46 1.595.59.67.213 1.28.183 1.762.111.537-.08 1.651-.674 1.884-1.326.233-.651.233-1.209.163-1.326-.07-.116-.256-.186-.535-.326z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#54218A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8A9CC]">
          <div>
            © 2026 <span className="text-[#E9E1F5] font-semibold">UplixBD</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#100022]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#1B0638] border border-[#8B2BE2]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#24004F] text-[#B8A9CC] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs sm:text-sm text-[#B8A9CC] space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2">
              <p>
                At UplixBD, we are committed to upholding the highest standards of data security, attribution privacy, and ethical media buying practices.
              </p>
              <p>
                We do not sell, rent, or distribute any proprietary client campaign data, ad account credentials, or business leads to third-party entities.
              </p>
              <p>
                All analytics integrations adhere strictly to GDPR, CCPA, and Meta/Google platform policies, utilizing server-side consent mode and encrypted tokens.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#54218A]/40 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#5B0BB5] text-xs font-bold text-white hover:bg-[#7606CB]"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
