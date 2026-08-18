'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Share2,
  Search,
  BarChart3,
  Youtube,
  Globe,
  Palette,
  Video,
  Sparkles,
  ShoppingBag,
  Server,
  Layers,
  ArrowRight,
  Check,
  X,
  Target,
  ExternalLink,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'ads' | 'seo' | 'creative' | 'web' | 'analytics';
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  badge?: string;
  deliverables: string[];
  bestFor: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'meta-ads',
    category: 'ads',
    title: 'Facebook & Instagram Ads',
    shortDesc: 'Precision audience targeting, high-converting creative testing, and ruthless ROAS optimization across Meta channels.',
    fullDesc: 'We architect full-funnel Meta advertising campaigns—from cold audience acquisition to dynamic retargeting. We engineer high-converting UGC ad hooks, copy variations, and custom bidding strategies that lower Customer Acquisition Cost (CAC) while scaling revenue.',
    icon: Share2,
    badge: 'High Impact',
    deliverables: ['Lookalike & Custom Audience Modeling', 'Creative Angle & Hook Testing', 'Dynamic Catalog & Retargeting', 'Daily Bid & Budget Optimization'],
    bestFor: 'E-commerce, D2C, Local Lead Gen & High-Ticket B2B',
  },
  {
    id: 'google-ads',
    category: 'ads',
    title: 'Google Ads (Search & PMax)',
    shortDesc: 'Capture high-intent buyers the moment they search for your products with Search, Performance Max, and Shopping campaigns.',
    fullDesc: 'Dominate Google search results with laser-focused intent bidding, negative keyword pruning, compelling ad extensions, and automated Performance Max machine learning campaigns that maximize return on ad spend.',
    icon: Search,
    badge: 'High Intent',
    deliverables: ['High-Intent Search Campaigns', 'Performance Max Setup & Asset Tuning', 'Google Shopping Feed Optimization', 'Negative Keyword & Placement Scrubbing'],
    bestFor: 'Service Businesses, B2B, E-commerce Stores',
  },
  {
    id: 'seo',
    category: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDesc: 'Sustainable organic growth through technical audits, keyword authority mapping, on-page optimization, and high-tier backlinks.',
    fullDesc: 'Transform search engines into an unstoppable, organic lead pipeline. We conduct in-depth technical audits, eliminate crawl errors, optimize core web vitals, build topical authority clusters, and earn authoritative backlinks.',
    icon: Globe,
    deliverables: ['Technical SEO & Core Web Vitals Audit', 'Topical Keyword Clustering', 'On-Page Content Architecture', 'High-Authority Backlink Acquisition'],
    bestFor: 'Brands looking for durable long-term traffic & low CAC',
  },
  {
    id: 'youtube-seo',
    category: 'seo',
    title: 'YouTube SEO & Video Growth',
    shortDesc: 'Optimize your video content to rank on YouTube and Google video search, driving qualified subscribers and organic watch hours.',
    fullDesc: 'Maximize video discovery and subscriber velocity with search-optimized titles, high-CTR custom thumbnail concepts, retention-focused tags, timestamps, and strategic end-screen conversion funnels.',
    icon: Youtube,
    deliverables: ['Search-Optimized Video Metadata & Tags', 'High CTR Thumbnail Direction', 'Channel Authority & Playlist Structuring', 'Video Description Conversion Funnels'],
    bestFor: 'Creators, Coaches, B2B SaaS, Educational Brands',
  },
  {
    id: 'ga4-analytics',
    category: 'analytics',
    title: 'GA4 & Advanced Analytics',
    shortDesc: 'Enterprise-grade Google Analytics 4 implementation, custom conversion event tracking, and intuitive live BI dashboards.',
    fullDesc: 'Stop guessing which marketing channels drive actual pipeline. We configure complete GA4 properties, custom dimensions, funnel exploration reports, and real-time Looker Studio dashboards that give your executive team 100% data confidence.',
    icon: BarChart3,
    badge: 'Critical',
    deliverables: ['Custom GA4 Event & Conversion Mapping', 'E-commerce Purchase Funnel Tracking', 'Looker Studio Executive Dashboard', 'Cross-Domain & User Journey Stitching'],
    bestFor: 'Any business spending $1k+/month on marketing',
  },
  {
    id: 'gtm-server-tracking',
    category: 'analytics',
    title: 'Google Tag Manager & CAPI',
    shortDesc: 'Server-side tracking, Facebook Conversions API (CAPI), and clean tag management that survives iOS 14+ ad blockers.',
    fullDesc: 'Bypass browser ad blockers and cookie restrictions with robust Server-Side Google Tag Manager and Meta Conversions API. Restore 20-30% of lost conversion data and supercharge ad algorithm accuracy.',
    icon: Server,
    deliverables: ['Server-Side GTM Setup (Cloud Run/Stape)', 'Meta Conversions API (CAPI) Integration', 'First-Party Cookie Preservation', 'Consent Mode v2 Implementation'],
    bestFor: 'High-scale advertisers losing attribution data',
  },
  {
    id: 'web-design',
    category: 'web',
    title: 'WordPress & Modern Web Design',
    shortDesc: 'Lightning-fast, mobile-first websites and landing pages engineered specifically for high conversion rates and SEO dominance.',
    fullDesc: 'We design and build bespoke WordPress, Next.js, and Webflow digital experiences that mesmerize visitors and guide them toward conversion. Optimized for sub-second load times, mobile ergonomics, and seamless CMS editing.',
    icon: Layers,
    deliverables: ['Custom UX/UI Wireframes & Prototypes', 'Responsive WordPress / React Build', 'Sub-Second Page Speed Optimization', 'Conversion Rate Optimization (CRO) Layouts'],
    bestFor: 'Brands needing a modern, authoritative web presence',
  },
  {
    id: 'graphic-design',
    category: 'creative',
    title: 'Graphic Design & Brand Identity',
    shortDesc: 'Striking brand guidelines, social media assets, marketing collateral, and ad visuals that command attention and trust.',
    fullDesc: 'Elevate your visual presence with unforgettable brand identity systems, logo design, typography systems, vector illustrations, and dynamic social media templates that make your company instantly recognizable.',
    icon: Palette,
    deliverables: ['Comprehensive Brand Guidelines', 'Ad Creative Asset Packs (Static & Carousel)', 'Marketing Collateral & Pitch Decks', 'Custom Social Media Templates'],
    bestFor: 'Startups launching new brands or rebranding existing businesses',
  },
  {
    id: 'video-editing',
    category: 'creative',
    title: 'High-Impact Video Editing',
    shortDesc: 'Fast-paced, hook-driven short-form (Reels/TikToks) and long-form video editing designed to maximize viewer retention.',
    fullDesc: 'Captivate scrolling audiences with dynamic pacing, sound design, animated subtitles, b-roll selection, and hypnotic visual hooks tailored specifically for TikTok, Reels, YouTube Shorts, and paid video ad placements.',
    icon: Video,
    deliverables: ['Hook-Driven Ad Creatives (9:16 & 16:9)', 'Subtitles, Sound Design & Color Grading', 'B-Roll Sourcing & Visual Storytelling', 'Multi-Platform Aspect Ratio Formatting'],
    bestFor: 'D2C brands, Personal Brands, Influencers & E-commerce',
  },
  {
    id: 'vfx-motion',
    category: 'creative',
    title: 'VFX & 3D Motion Graphics',
    shortDesc: 'Cinema-grade 3D product renders, animated logo stingers, and visual effects that give your campaigns an international edge.',
    fullDesc: 'Differentiate your brand with custom 3D product animations, particle effects, UI/UX software walkthroughs, and cinematic promo videos that communicate high technology and premium luxury.',
    icon: Sparkles,
    deliverables: ['3D Product Modeling & Rendering', 'Animated Logo Intros & Kinetic Typography', 'Software UI Showcase Animations', 'Commercial VFX Compositing'],
    bestFor: 'Tech startups, Luxury goods, SaaS platforms',
  },
  {
    id: 'smm',
    category: 'creative',
    title: 'Social Media Marketing & Growth',
    shortDesc: 'Strategic content calendar creation, community engagement, and organic virality campaigns that build loyal customer tribes.',
    fullDesc: 'Turn social platforms into vibrant brand communities. We handle everything from content ideation and hashtag strategy to daily posting, comment engagement, and influencer collaboration management.',
    icon: Share2,
    deliverables: ['Monthly Strategic Content Calendar', 'Daily Community Management & Growth', 'Copywriting & Caption Engineering', 'Influencer Outreach & Sponsoring'],
    bestFor: 'Consumer brands, Retail, Hospitality, Fitness & Beauty',
  },
  {
    id: 'ecommerce-solutions',
    category: 'web',
    title: 'E-commerce Growth Solutions',
    shortDesc: 'End-to-end Shopify and WooCommerce storefront setup, upsell checkout funnels, and automated retention email flows.',
    fullDesc: 'Scale your online store with high-converting checkout funnels, one-click upsells, automated abandoned cart recovery sequences (Klaviyo), and speed-optimized product pages built to maximize Average Order Value (AOV).',
    icon: ShoppingBag,
    badge: 'Turnkey',
    deliverables: ['Custom Shopify/WooCommerce Store Setup', 'One-Click Upsell & Cross-Sell Funnels', 'Klaviyo Email & SMS Automation', 'AOV & LTV Optimization Strategies'],
    bestFor: 'D2C Brands, Retailers & Digital Product Sellers',
  },
];

const categoryTabs = [
  { key: 'all', label: 'All Services' },
  { key: 'ads', label: 'Paid Ads' },
  { key: 'seo', label: 'SEO & Organic' },
  { key: 'creative', label: 'Creative & Video' },
  { key: 'web', label: 'Web & E-com' },
  { key: 'analytics', label: 'Tracking & Data' },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5B0BB5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <Sparkles className="w-4 h-4 text-[#FACC15]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Full-Spectrum Digital Capabilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Services Engineered For{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Exponential Growth.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          From high-velocity paid acquisition to conversion-optimized web architecture, we provide the full stack of skills needed to dominate your category.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeCategory === tab.key
                  ? 'bg-gradient-to-r from-[#5B0BB5] to-[#8B2BE2] text-white shadow-[0_0_16px_rgba(139,43,226,0.5)]'
                  : 'bg-[#1B0638]/70 text-[#B8A9CC] hover:text-white border border-[#54218A]/50 hover:border-[#8B2BE2]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-[#8B2BE2]/10 rounded-full blur-2xl group-hover:bg-[#8B2BE2]/30 transition-all duration-500" />

              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#A855F7] group-hover:text-white group-hover:bg-[#5B0BB5] group-hover:border-[#8B2BE2] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/30 text-[#FACC15]">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Heading & Short Description */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#C084FC] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#B8A9CC] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#54218A]/40">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E9E1F5]/90">
                      <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Action */}
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#24004F]/60 hover:bg-[#5B0BB5] border border-[#54218A] hover:border-[#8B2BE2] text-xs font-semibold text-white flex items-center justify-between transition-all duration-200 group/btn"
              >
                <span>View Full Strategy</span>
                <ArrowRight className="w-4 h-4 text-[#C084FC] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Section CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/#contact"
          id="services-cta-growth-strategy"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 shadow-[0_0_30px_rgba(139,43,226,0.4)] transition-all duration-200 group"
        >
          <span>Get a Custom Growth Strategy</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#100022]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1B0638] border border-[#8B2BE2]/50 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(16,0,34,0.9)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#24004F] text-[#B8A9CC] hover:text-white hover:bg-[#5B0BB5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5B0BB5] to-[#7606CB] flex items-center justify-center text-white shadow-lg">
                {React.createElement(selectedService.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <span className="text-xs font-semibold text-[#FACC15] bg-[#FACC15]/10 px-2.5 py-0.5 rounded-full border border-[#FACC15]/20">
                  UplixBD Signature Strategy
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#E9E1F5] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#C084FC]">
                What You Get (Core Deliverables)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#24004F]/60 border border-[#54218A]/40 text-xs text-[#E9E1F5]">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#100022]/80 border border-[#54218A]/50 mb-6">
              <div className="text-xs font-semibold text-[#B8A9CC]">Best Suited For:</div>
              <div className="text-sm font-bold text-white mt-0.5">{selectedService.bestFor}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#54218A]/50">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#B8A9CC] hover:text-white transition-colors"
              >
                Close
              </button>

              <Link
                href="/#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] shadow-[0_0_20px_rgba(139,43,226,0.5)] flex items-center justify-center gap-2"
              >
                <span>Request {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
