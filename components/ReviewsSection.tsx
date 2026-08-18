'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: 'David Reynolds',
    role: 'Managing Director',
    company: 'Vanguard Retail UK',
    avatar: 'https://picsum.photos/seed/dreynolds/150/150',
    stars: 5,
    highlight: '4.8x ROAS across Black Friday',
    text: 'Working with UplixBD transformed our European e-commerce operations. Their team restructured our Meta and Google ads while fixing severe tracking gaps in GA4. We achieved a 4.8x blended ROAS during Q4 without blowing our CPA targets.',
    verified: true,
    country: 'United Kingdom',
  },
  {
    id: 2,
    name: 'Alina Rostova',
    role: 'Chief Marketing Officer',
    company: 'Synapse AI Software',
    avatar: 'https://picsum.photos/seed/arostova/150/150',
    stars: 5,
    highlight: '140+ qualified demos every month',
    text: 'Finding a performance marketing agency that actually understands technical B2B buyer journeys is rare. UplixBD built our search funnels, designed stunning comparison landing pages, and gave us absolute clarity on pipeline attribution.',
    verified: true,
    country: 'United States',
  },
  {
    id: 3,
    name: 'Kazi Mahmudur Rahman',
    role: 'Founder & CEO',
    company: 'Apex Health & Wellness',
    avatar: 'https://picsum.photos/seed/kazi/150/150',
    stars: 5,
    highlight: '-50% Cost Per Booking',
    text: 'The video creatives and hyper-targeted local campaigns that UplixBD engineered brought our clinic so many patient bookings that we had to open a second location. They are by far the most reliable growth partners we have ever hired.',
    verified: true,
    country: 'Bangladesh / Singapore',
  },
  {
    id: 4,
    name: 'Elena Rossi',
    role: 'Brand Director',
    company: 'Lumiere Luxe Cosmetics',
    avatar: 'https://picsum.photos/seed/elena/150/150',
    stars: 5,
    highlight: 'Flawless VFX & Creative Hooks',
    text: 'Their creative production quality is unmatched. The 3D motion graphics and UGC ad angles they produced for our cosmetics line outperformed our previous internal assets by over 260% in click-through rates.',
    verified: true,
    country: 'Italy',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#5B0BB5]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            4.9 / 5 Average Client Rating
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          What Leaders Say About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            UplixBD.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          Hear directly from founders, CMOs, and marketing directors scaling their businesses with our team.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {reviewsData.map((rev) => (
          <div
            key={rev.id}
            className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden shadow-xl"
          >
            {/* Top quote icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#54218A]/50 group-hover:text-[#8B2BE2]/60 transition-colors" />
            </div>

            {/* Highlight Metric */}
            <div className="text-sm font-bold text-[#22C55E] mb-2 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Result: {rev.highlight}</span>
            </div>

            {/* Body Quote */}
            <p className="text-sm text-[#E9E1F5] leading-relaxed mb-6 italic">
              &ldquo;{rev.text}&rdquo;
            </p>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#54218A]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#8B2BE2]/60 shrink-0">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span title="Verified Client" className="inline-flex">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#B8A9CC]">
                    {rev.role}, <span className="text-[#E9E1F5] font-semibold">{rev.company}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#24004F] text-[#B8A9CC] border border-[#54218A]/30">
                  {rev.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
