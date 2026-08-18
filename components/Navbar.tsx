'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UplixLogo } from './Logo';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  isHash?: boolean;
}

const mainNavLinks: NavItem[] = [
  { name: 'Home', href: '/', isHash: false },
  { name: 'Services', href: '/#services', isHash: true },
  { name: 'Process', href: '/#process', isHash: true },
  { name: 'Results', href: '/#results', isHash: true },
  { name: 'Reviews', href: '/#reviews', isHash: true },
];

const pageNavLinks: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section if on homepage
      if (pathname === '/') {
        const sections = ['reviews', 'results', 'process', 'services', 'contact'];
        let current = 'home';
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              current = sectionId;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed z-50 transition-all duration-300 left-0 right-0 ${
        isScrolled
          ? 'top-4 md:top-5 max-w-6xl mx-auto px-4 md:px-6'
          : 'top-0 w-full px-4 md:px-8 py-2'
      }`}
    >
      <div
        className={`transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'liquid-glass rounded-2xl md:rounded-full py-2.5 px-5 md:px-7 shadow-[0_12px_40px_rgba(16,0,34,0.6)] border border-[#8B2BE2]/30'
            : 'bg-[#100022]/80 backdrop-blur-xl border-b border-[#54218A]/25 py-3.5 px-2 md:px-4'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 cursor-pointer transition-transform duration-200 active:scale-95"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }
          }}
          id="nav-logo-link"
        >
          <UplixLogo size={isScrolled ? 'sm' : 'md'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" id="desktop-nav-items">
          <div className="flex items-center gap-5 xl:gap-6">
            {mainNavLinks.map((item) => {
              const sectionKey = item.name.toLowerCase();
              const isCurrent =
                pathname === '/' &&
                ((sectionKey === 'home' && activeSection === 'home') || activeSection === sectionKey);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 px-1.5 ${
                    isCurrent
                      ? 'text-white font-semibold'
                      : 'text-[#B8A9CC] hover:text-[#E9E1F5]'
                  }`}
                >
                  {item.name}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#8B2BE2] rounded-full shadow-[0_0_8px_#C084FC]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-[#54218A]/50" />

          {/* Secondary Pages (About, Careers) */}
          <div className="flex items-center gap-5">
            {pageNavLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 px-1.5 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#B8A9CC] hover:text-[#E9E1F5]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#8B2BE2] rounded-full shadow-[0_0_8px_#C084FC]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            onClick={(e) => scrollToSection(e, '/#contact')}
            id="nav-cta-btn"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 shadow-[0_0_20px_rgba(139,43,226,0.35)] transition-all duration-200 active:scale-95 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#1B0638] border border-[#54218A] text-white hover:border-[#8B2BE2] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden mt-2 p-5 rounded-2xl liquid-glass border border-[#8B2BE2]/30 shadow-[0_20px_50px_rgba(16,0,34,0.9)] animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-[#B8A9CC] font-semibold px-2">Navigation</span>
            {mainNavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-2 rounded-lg text-[#E9E1F5] hover:bg-[#24004F] hover:text-white text-base font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="h-[1px] bg-[#54218A]/40 my-1" />
            
            <span className="text-xs uppercase tracking-wider text-[#B8A9CC] font-semibold px-2">Agency</span>
            {pageNavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-[#5B0BB5]/30 text-white border border-[#8B2BE2]/40'
                    : 'text-[#E9E1F5] hover:bg-[#24004F]'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={(e) => scrollToSection(e, '/#contact')}
                className="w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] shadow-[0_0_20px_rgba(139,43,226,0.4)]"
              >
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
