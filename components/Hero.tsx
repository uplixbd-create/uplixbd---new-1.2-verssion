'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Target, Zap, Award, Star, CheckCircle2 } from 'lucide-react';

const clientLogos = [
  { name: 'NEXUS', font: 'tracking-widest font-black uppercase' },
  { name: 'Vortex.AI', font: 'tracking-tighter font-extrabold' },
  { name: 'QUANTUM', font: 'tracking-wide font-bold uppercase' },
  { name: 'strata', font: 'tracking-widest font-semibold lowercase' },
  { name: 'HYPERION', font: 'tracking-wider font-extrabold uppercase' },
  { name: 'AURA CREATIVE', font: 'tracking-tight font-bold uppercase' },
  { name: 'ELEVATE D2C', font: 'tracking-widest font-medium uppercase' },
  { name: 'SynapseMedia', font: 'tracking-tight font-extrabold' },
];

const heroTestimonialSnippets = [
  {
    name: 'Marcus Vance',
    role: 'CMO, Strata Corp',
    avatar: 'https://picsum.photos/seed/mvance/100/100',
    quote: '4.8x ROAS within 90 days of onboarding.',
    metric: '+380% Revenue',
  },
  {
    name: 'Sarah Chen',
    role: 'Founder, Lumina D2C',
    avatar: 'https://picsum.photos/seed/schen2/100/100',
    quote: 'Zero wasted spend. The tracking clarity is unmatched.',
    metric: '-42% CPA',
  },
  {
    name: 'Tariq Rahman',
    role: 'Growth Lead, Apex Health',
    avatar: 'https://picsum.photos/seed/trahman/100/100',
    quote: 'UplixBD turned our paid ads into a predictable revenue engine.',
    metric: '12.4k Monthly Leads',
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<'overview' | 'meta' | 'google'>('overview');

  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Radial Atmospheric Purple Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#5B0BB5]/30 via-[#7606CB]/25 to-[#8B2BE2]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-[#2563EB]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Hero Header Content */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638]/90 border border-[#8B2BE2]/40 backdrop-blur-md shadow-[0_0_20px_rgba(139,43,226,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[#E9E1F5]">
            Global Performance & Creative Growth Agency
          </span>
        </div>

        {/* Dominant Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
          We Turn Digital Marketing Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Measurable Business Growth.
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#B8A9CC] max-w-2xl mx-auto leading-relaxed">
          Data-driven performance marketing strategies designed for high-growth startups and established enterprises. We bring transparency, innovation, and serious ROI to your digital ecosystem.
        </p>

        {/* Two Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="/#contact"
            id="hero-start-project-btn"
            className="btn-pulse w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 shadow-[0_0_30px_rgba(139,43,226,0.5)] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-[#FACC15]" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/#services"
            id="hero-explore-services-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-[#E9E1F5] bg-[#1B0638]/80 hover:bg-[#24004F] border border-[#54218A] hover:border-[#8B2BE2] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#8B2BE2]" />
          </Link>
        </div>

        {/* Social Proof Quick Tag */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs md:text-sm text-[#B8A9CC]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>250+ Verified Client Campaigns</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Zero Wasted Ad Spend</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Real-time Live Analytics</span>
          </div>
        </div>
      </div>

      {/* Hero Dashboard Mockup Card */}
      <div className="mt-14 relative z-10 max-w-5xl mx-auto">
        <div className="relative rounded-2xl p-2 sm:p-4 bg-[#1B0638]/70 backdrop-blur-2xl border border-[#54218A]/60 shadow-[0_0_80px_rgba(91,11,181,0.25)] overflow-hidden group">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-3 px-3 border-b border-[#54218A]/40 text-xs text-[#B8A9CC]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FACC15]/80" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
              <span className="ml-2 font-mono text-[11px] text-[#E9E1F5]/80">uplixbd.agency/dashboard/growth-live</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#24004F] text-[#FACC15] font-mono text-[10px] font-bold">
                LIVE ATTRIBUTION
              </span>
              <span className="text-[11px] text-[#22C55E] font-semibold">● Engine Active</span>
            </div>
          </div>

          {/* Interactive Hero Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[16/8.5] rounded-xl overflow-hidden mt-3 bg-[#100022]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkvoQ1CRjDT1CRk-nNVnVahQnfCFSbMUauP_m1yLWK-WMwE9W1huVxPg8K37-ZzLJ-NfHU2-nfBHCBOC9cDozpiBRNzJQQWJa0F3VbpO4ZFrMWQM6yrFw_Rqm5wLwBqCVIbN_UYFRK2ZshyZKD6ouPQSusKUeVmD0N0BRakCn6cLjwzNMdjV53QjhSB3TfhuOYAyhVfUgP2K1cToeDJArIDe06-wtvG9cWCDHkyqemqQWLMmm-fbQ-"
              alt="UplixBD Digital Marketing Growth & Analytics Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              priority
              referrerPolicy="no-referrer"
            />
            
            {/* Live Highlight Floating Pill Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md p-3.5 rounded-xl bg-[#100022]/90 backdrop-blur-xl border border-[#8B2BE2]/40 shadow-2xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#5B0BB5] to-[#7606CB] flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#E9E1F5]">October Campaign Run</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#22C55E]/20 text-[#22C55E]">
                    +402% ROAS
                  </span>
                </div>
                <p className="text-xs text-[#B8A9CC] mt-0.5 font-mono">
                  $114,890.00 Revenue generated from $28,750 spend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Auto-Scrolling Marquee Strip */}
      <div className="mt-16 pt-10 border-t border-[#54218A]/30">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#B8A9CC]/80 font-bold mb-6">
          Empowering Brands & High-Growth Startups Across The Globe
        </p>

        <div className="relative w-full overflow-hidden mask-fade">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#100022] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#100022] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-12 sm:gap-16 items-center opacity-70 hover:opacity-95 transition-opacity">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center shrink-0 px-4 py-2 rounded-lg hover:bg-[#24004F]/40 transition-colors"
              >
                <span className={`text-lg sm:text-xl text-[#E9E1F5] hover:text-white transition-colors select-none ${logo.font}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Short Testimonial Snippets Row */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {heroTestimonialSnippets.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#1B0638]/60 border border-[#54218A]/40 backdrop-blur-md flex items-center gap-3.5 hover:border-[#8B2BE2]/60 transition-all duration-200"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#8B2BE2]">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-semibold text-white truncate">{item.name}</span>
                <span className="text-[11px] font-bold text-[#FACC15] shrink-0 font-mono">{item.metric}</span>
              </div>
              <p className="text-[11px] text-[#B8A9CC] truncate mt-0.5 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
