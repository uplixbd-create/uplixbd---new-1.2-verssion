'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export function ConversionBanner() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#24004F] via-[#5B0BB5] to-[#7606CB] border border-[#8B2BE2]/60 shadow-[0_0_80px_rgba(139,43,226,0.35)] relative overflow-hidden text-center flex flex-col items-center">
        {/* Ambient background particles/glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C084FC]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Floating pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#100022]/60 border border-[#C084FC]/40 backdrop-blur-md mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#FACC15]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
            Transform Your Digital Trajectory Today
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl leading-tight">
          Ready to Turn Marketing Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#E9E1F5]">
            Measurable Growth?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#E9E1F5]/90 max-w-2xl mt-4 leading-relaxed">
          Let&apos;s engineer a bespoke digital strategy designed to turn traffic into qualified pipeline and compounding revenue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          <Link
            href="/#contact"
            id="banner-start-project-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-[#100022] bg-white hover:bg-[#E9E1F5] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#5B0BB5] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/#contact"
            id="banner-contact-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-[#100022]/70 hover:bg-[#100022] border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Talk to a Growth Strategist</span>
          </Link>
        </div>

        {/* Guarantee checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs sm:text-sm text-[#E9E1F5]/90 pt-6 border-t border-white/10 w-full max-w-3xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
            <span>Comprehensive Audit Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FACC15]" />
            <span>Rapid 7–10 Day Launch Window</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FACC15]" />
            <span>100% Attribution Transparency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
