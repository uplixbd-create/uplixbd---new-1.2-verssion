'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  Zap,
  Globe2,
  Users,
  Heart,
  X,
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const openPositions: JobPosition[] = [
  {
    id: 'senior-uiux',
    title: 'Senior UI/UX & Brand Designer',
    department: 'Creative & Product',
    location: 'Remote (Global) / Hybrid',
    type: 'Full-time',
    description: 'We are seeking a visionary UI/UX designer to craft high-converting web applications, landing pages, and luxury brand identity systems for international clients.',
    responsibilities: [
      'Design conversion-focused website wireframes and interactive prototypes in Figma',
      'Establish comprehensive design systems and brand style guides',
      'Collaborate with developers to ensure pixel-perfect responsive execution',
      'Conduct usability testing and conversion rate optimization (CRO) audits',
    ],
    requirements: [
      '4+ years of professional digital design experience with an international portfolio',
      'Mastery of Figma, typography hierarchy, and modern glassmorphism/dark SaaS aesthetics',
      'Strong understanding of CRO and user psychology in e-commerce and B2B',
      'Excellent English verbal and written communication skills',
    ],
  },
  {
    id: 'performance-marketing-lead',
    title: 'Lead Performance Media Buyer (Meta & Google Ads)',
    department: 'Growth & Performance',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Lead multi-million dollar ad spend campaigns across Meta (Facebook/Instagram), Google Search, and Performance Max for high-growth e-commerce and B2B enterprises.',
    responsibilities: [
      'Manage and scale monthly ad budgets from $20k to $250k+ profitably',
      'Perform continuous multi-variant creative testing and angle exploration',
      'Monitor and optimize CAC, ROAS, and conversion attribution via GA4 & CAPI',
      'Deliver clear strategic growth presentations and client reports',
    ],
    requirements: [
      '3+ years of proven media buying experience with verified ROAS track records',
      'Deep technical knowledge of Meta Ads Manager, Google Ads, and Server-Side GTM',
      'Analytical mindset with strong proficiency in Looker Studio and Excel/Sheets',
      'Experience in e-commerce, lead generation, or high-ticket B2B verticals',
    ],
  },
  {
    id: 'creative-frontend-engineer',
    title: 'Creative Frontend Engineer (Next.js & Motion)',
    department: 'Engineering',
    location: 'Hybrid (Dhaka) / Remote',
    type: 'Full-time',
    description: 'Build bleeding-edge, hyper-responsive web applications and landing pages using Next.js 15, Tailwind CSS, TypeScript, and motion design animations.',
    responsibilities: [
      'Develop modern client web properties with sub-second Core Web Vitals performance',
      'Implement fluid interactive UI animations with Motion and Tailwind',
      'Integrate Server-Side GTM, GA4 events, and CRM webhooks cleanly',
      'Ensure cross-browser compatibility and accessibility standards',
    ],
    requirements: [
      '3+ years of React/Next.js and TypeScript frontend development experience',
      'Expertise in Tailwind CSS, CSS Grid/Flexbox, and performance optimization',
      'Passion for interactive micro-animations and polished aesthetics',
      'Familiarity with modern headless CMS platforms (Sanity, WordPress REST)',
    ],
  },
  {
    id: 'motion-video-editor',
    title: 'Senior Motion Designer & Video Editor',
    department: 'Creative Media',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Produce high-converting commercial video ads, TikTok/Reels UGC hooks, 3D product animations, and cinematic brand promos.',
    responsibilities: [
      'Edit fast-paced, retention-focused video ads for social media placements',
      'Create 3D product animations and visual effects using After Effects / Blender',
      'Direct sound design, typography animations, and color grading',
      'Iterate on high-performing creative variations based on ad performance data',
    ],
    requirements: [
      '3+ years of commercial video editing and motion graphics experience',
      'Mastery of Adobe Premiere Pro, After Effects, and 3D software (Blender/C4D)',
      'Proven track record of high-converting social media ads',
      'Portfolio showcasing dynamic kinetic typography and visual storytelling',
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showOpenAppModal, setShowOpenAppModal] = useState(false);
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantRole, setApplicantRole] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppSubmitted(true);
    setTimeout(() => {
      // Auto dismiss after a moment
    }, 1500);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setShowOpenAppModal(false);
    setAppSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPortfolio('');
    setApplicantRole('');
  };

  return (
    <div className="min-h-screen bg-[#100022] text-[#E9E1F5] flex flex-col selection:bg-[#7606CB] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 md:pt-40 pb-20">
        {/* Careers Hero */}
        <section className="px-4 md:px-8 max-w-5xl mx-auto text-center space-y-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#5B0BB5]/30 to-[#8B2BE2]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40">
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
              We Are Actively Hiring
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Shape the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
              Future of Digital.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B8A9CC] max-w-3xl mx-auto leading-relaxed">
            Join a fast-moving, globally distributed collective of performance media buyers, creative designers, and growth technologists building the next generation of marketing excellence.
          </p>
        </section>

        {/* Culture Bento Grid */}
        <section className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Big Main Image Panel */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden relative aspect-[16/10] md:aspect-[16/9] border border-[#54218A] shadow-2xl group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr20wgoBuhchm6e3e74c1jeWjv2ssnFLFtnmT8eFDB21LGbLJaASFla9DgaDfLB7-ZYGYBnscDY2vD7LbIU2aouyMnoG2Z9IjbA9FN-RTlAXhLy1klgesEafog2paLlrsUN_z7pS_gKt_ZN7mlykgzaWCRE8kQ5i2iV9UBd8g6NlxpKYKpd0SDR6fAlDdQPAgsumppPCkDSEDYnkKokGOxTdsnaVEJsxPpg8ScqbA0Ami2PMbrEOMI"
                alt="UplixBD Global Team Working Together"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100022] via-[#100022]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#100022]/85 backdrop-blur-md border border-[#8B2BE2]/40">
                <div className="text-xs font-mono uppercase text-[#FACC15] font-bold">Culture & Mission</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">Global Impact. Local Excellence.</div>
                <div className="text-xs text-[#B8A9CC] mt-1">Autonomous growth squads tackling high-stakes international client campaigns.</div>
              </div>
            </div>

            {/* Right Column Culture Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Stat Card */}
              <div className="glass-card rounded-3xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C084FC] font-mono">
                  15+
                </div>
                <div className="text-base font-bold text-white mt-1">Countries Served Globally</div>
                <div className="text-xs text-[#B8A9CC] mt-1 leading-relaxed">
                  Work on high-profile campaigns with clients from London, New York, Singapore, Sydney, and beyond.
                </div>
              </div>

              {/* Value Perks */}
              <div className="glass-card rounded-3xl p-6 flex-1 flex flex-col justify-center space-y-3">
                <div className="text-sm font-bold text-white uppercase tracking-wider">Perks & Flexibility</div>
                <div className="space-y-2 text-xs text-[#E9E1F5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Remote-First & Async Workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Competitive Global Compensation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Continuous Learning & Tooling Budgets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Fast-Track Leadership Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="mt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] px-3 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/20 inline-block mb-3">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Find Your Next Role.
            </h2>
            <p className="text-base text-[#B8A9CC] mt-3">
              Explore our current vacancies. We are always on the lookout for top-tier talent.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#8B2BE2] transition-all duration-300 shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 text-[#C084FC]">
                      {job.department}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#24004F] text-[#B8A9CC]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#C084FC] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#B8A9CC]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8B2BE2]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8B2BE2]" />
                      <span>Immediate Start</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-6 py-3 rounded-xl bg-[#5B0BB5] hover:bg-[#7606CB] text-xs font-bold text-white shadow-[0_0_20px_rgba(91,11,181,0.4)] flex items-center gap-2 transition-all"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous Application Card */}
          <div className="mt-10 p-8 rounded-3xl bg-[#1B0638] border border-[#54218A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Don’t See Your Exact Role?</h3>
              <p className="text-xs sm:text-sm text-[#B8A9CC] mt-1">
                We are always excited to connect with exceptional copywriters, media buyers, 3D artists, and developers.
              </p>
            </div>

            <button
              onClick={() => setShowOpenAppModal(true)}
              className="px-6 py-3 rounded-xl bg-[#24004F] hover:bg-[#5B0BB5] border border-[#54218A] hover:border-[#8B2BE2] text-xs font-bold text-white transition-all shrink-0"
            >
              Send Open Application
            </button>
          </div>
        </section>
      </main>

      {/* Role Details & Application Modal */}
      {(selectedJob || showOpenAppModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#100022]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1B0638] border border-[#8B2BE2]/50 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#24004F] text-[#B8A9CC] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!appSubmitted ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#C084FC] uppercase font-bold">
                    {selectedJob ? selectedJob.department : 'General Growth Application'}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {selectedJob ? selectedJob.title : 'Send Spontaneous Application'}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#B8A9CC] mt-2">
                    <span>{selectedJob ? selectedJob.location : 'Remote / Hybrid'}</span>
                    <span>•</span>
                    <span>{selectedJob ? selectedJob.type : 'Full-time / Contract'}</span>
                  </div>
                </div>

                {selectedJob && (
                  <div className="space-y-4 text-xs sm:text-sm text-[#E9E1F5] pb-4 border-b border-[#54218A]/40">
                    <p className="leading-relaxed text-[#B8A9CC]">{selectedJob.description}</p>

                    <div>
                      <h4 className="font-bold text-white mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1.5 list-disc list-inside text-[#B8A9CC]">
                        {selectedJob.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1.5 list-disc list-inside text-[#B8A9CC]">
                        {selectedJob.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Quick Apply Form */}
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Submit Your Application
                  </h4>

                  <div className="space-y-1">
                    <label className="text-xs text-[#E9E1F5] font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Rachel Adams"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] text-white text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#E9E1F5] font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="rachel@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] text-white text-xs"
                    />
                  </div>

                  {!selectedJob && (
                    <div className="space-y-1">
                      <label className="text-xs text-[#E9E1F5] font-semibold">Desired Role / Discipline *</label>
                      <input
                        type="text"
                        required
                        value={applicantRole}
                        onChange={(e) => setApplicantRole(e.target.value)}
                        placeholder="e.g. TikTok Media Buyer / 3D Artist"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] text-white text-xs"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs text-[#E9E1F5] font-semibold">Portfolio / LinkedIn / GitHub URL *</label>
                    <input
                      type="url"
                      required
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                      placeholder="https://linkedin.com/in/... or https://portfolio.site"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] text-white text-xs"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#B8A9CC] hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] text-xs font-bold text-white shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#22C55E] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                <p className="text-xs sm:text-sm text-[#B8A9CC] max-w-md mx-auto">
                  Thank you for applying to UplixBD. Our talent acquisition squad will review your portfolio and reach out within 48 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-xl bg-[#5B0BB5] text-xs font-bold text-white hover:bg-[#7606CB]"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
