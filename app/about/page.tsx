'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Sparkles,
  TrendingUp,
  Palette,
  ShieldCheck,
  Server,
  Zap,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const stats = [
  { value: '250+', label: 'Global Clients', sub: 'Brands Scaled' },
  { value: '$15M+', label: 'Ad Spend Managed', sub: 'High ROAS Track Record' },
  { value: '4.9 / 5', label: 'Average Client Score', sub: 'Top Tier Satisfaction' },
  { value: '15+', label: 'Countries Served', sub: 'Global Reach' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#100022] text-[#E9E1F5] flex flex-col selection:bg-[#7606CB] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 md:pt-40 pb-20">
        {/* About Hero */}
        <section className="px-4 md:px-8 max-w-5xl mx-auto text-center space-y-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#5B0BB5]/30 to-[#8B2BE2]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
              Global Growth Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            We Architect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
              Digital Dominance.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B8A9CC] max-w-3xl mx-auto leading-relaxed">
            Born at the intersection of rigorous performance analytics and bold creative strategy, UplixBD empowers forward-thinking companies to capture outsized market share and compound revenue.
          </p>
        </section>

        {/* Stats Strip */}
        <section className="mt-16 py-12 px-4 md:px-8 border-y border-[#54218A]/30 bg-[#16022E]/60 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C084FC] font-mono">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">{item.label}</div>
                <div className="text-xs text-[#B8A9CC]">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Triad of Growth Bento Grid */}
        <section className="mt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] px-3 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/20 inline-block mb-3">
              Our Triad of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Where Science Meets Art.
            </h2>
            <p className="text-base text-[#B8A9CC] mt-3">
              Marketing fails when either data, creative, or technology is isolated. We fuse all three pillars seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Performance */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B0BB5]/20 rounded-full blur-2xl group-hover:bg-[#8B2BE2]/30 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] transition-all mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Algorithmic Precision
                </h3>
                <p className="text-sm text-[#B8A9CC] leading-relaxed">
                  We do not gamble with ad spend. Our media buyers construct multi-tier audience segmentation and automated bidding strategies across Meta &amp; Google that drive down customer acquisition costs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#54218A]/40 text-xs font-semibold text-[#8B2BE2]">
                ● High ROAS Media Buying
              </div>
            </div>

            {/* Pillar 2: Creativity */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7606CB]/20 rounded-full blur-2xl group-hover:bg-[#8B2BE2]/30 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] transition-all mb-6">
                  <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  High-Impact Creative
                </h3>
                <p className="text-sm text-[#B8A9CC] leading-relaxed">
                  The strongest algorithm fails without compelling creatives. Our design studio engineers scroll-stopping video hooks, 3D motion graphics, and visual storytelling that captivates audiences.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#54218A]/40 text-xs font-semibold text-[#8B2BE2]">
                ● Cinema-Grade Production
              </div>
            </div>

            {/* Pillar 3: Data */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 rounded-full blur-2xl group-hover:bg-[#8B2BE2]/30 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] transition-all mb-6">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Server-Side Integrity
                </h3>
                <p className="text-sm text-[#B8A9CC] leading-relaxed">
                  We deploy server-side Google Tag Manager and Meta CAPI to defeat ad blockers and browser privacy barriers, giving you complete visibility and true attribution across all channels.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#54218A]/40 text-xs font-semibold text-[#8B2BE2]">
                ● First-Party Attribution
              </div>
            </div>
          </div>
        </section>

        {/* Core Values with Team Collaboration Asset */}
        <section className="mt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#1B0638] border border-[#54218A] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Values */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24004F] border border-[#8B2BE2]/40 text-xs font-semibold text-[#E9E1F5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Our Principles</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built on Unshakeable Core Values.
              </h2>

              <p className="text-sm sm:text-base text-[#B8A9CC] leading-relaxed">
                We believe that long-term agency partnerships are forged through radical transparency, exceptional technical competence, and obsessive dedication to client growth.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Absolute Transparency</h3>
                    <p className="text-xs sm:text-sm text-[#B8A9CC] mt-0.5">No smoke and mirrors. You retain 100% ownership of your ad accounts, assets, and raw data.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Modern Technologists</h3>
                    <p className="text-xs sm:text-sm text-[#B8A9CC] mt-0.5">We avoid outdated tactics. We continuously adapt to algorithmic changes, AI tooling, and tracking updates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Business-Oriented Results</h3>
                    <p className="text-xs sm:text-sm text-[#B8A9CC] mt-0.5">We measure success by commercial outcomes—revenue, margin, and customer lifetime value.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Collaboration Asset */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#54218A] shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBogKIaAPKgzwyQi7x4ucNTzQljSsIm-jFyhA2HYa-sN3e-IIQ2th9Ek4teyTy0CrArJVYa3usz4nmD-XwO5k1YKZc4uCQmr5T4Oyba5tHaDHfmUH8k5OTEpYZhJUfytftcW2zNpPpFUeuTpo6VoIE8aLcjSAufqmLVECX3kMohUYOtkFHeLJUe1vFncfBivtlnhUJWxEVrgRiZFJB4Bhb2R26FEquxf1rYtjOJ8zswpbbkLOv3w3ZV"
                  alt="UplixBD Global Strategic Growth Team in Collaboration"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100022]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#100022]/90 backdrop-blur-md border border-[#8B2BE2]/40 text-xs">
                  <div className="text-white font-bold">UplixBD Strategic Growth Hub</div>
                  <div className="text-[#B8A9CC]">Cross-functional teams collaborating globally in real time.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Band */}
        <section className="mt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center bg-gradient-to-r from-[#24004F] via-[#5B0BB5] to-[#24004F] border border-[#8B2BE2]/50 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Your Growth Strategy.
            </h2>
            <p className="text-sm sm:text-base text-[#E9E1F5] max-w-xl mt-3">
              Ready to elevate your performance marketing and creative standards? Let&apos;s connect today.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 shadow-[0_0_30px_rgba(139,43,226,0.5)] flex items-center gap-2"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
