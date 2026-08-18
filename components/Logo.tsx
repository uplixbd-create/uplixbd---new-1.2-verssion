import React from 'react';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function UplixLogo({ className = '', showWordmark = true, size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official UplixBD Angular Monogram: Upward Arrow / Flame Glyph */}
      <div
        className={`${iconSizes[size]} relative rounded-xl bg-gradient-to-br from-[#7606CB] via-[#5B0BB5] to-[#24004F] p-[1.5px] shadow-[0_0_20px_rgba(139,43,226,0.4)] flex items-center justify-center shrink-0 overflow-hidden`}
      >
        <div className="w-full h-full bg-[#100022] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5B0BB5]/30 to-[#8B2BE2]/40 pointer-events-none" />
          
          {/* SVG Monogram */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 relative z-10 drop-shadow-[0_2px_8px_rgba(192,132,252,0.6)]"
          >
            <path
              d="M16 3.5L24.5 13.5L20 13.5L20 23C20 24.6569 18.6569 26 17 26H15C13.3431 26 12 24.6569 12 23L12 13.5L7.5 13.5L16 3.5Z"
              fill="url(#uplixGradient)"
            />
            <path
              d="M16 7.5L21 13.5L18.5 13.5L18.5 22.5C18.5 23.3284 17.8284 24 17 24H15C14.1716 24 13.5 23.3284 13.5 22.5L13.5 13.5L11 13.5L16 7.5Z"
              fill="#FFFFFF"
            />
            <defs>
              <linearGradient id="uplixGradient" x1="7.5" y1="3.5" x2="24.5" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C084FC" />
                <stop offset="0.5" stopColor="#8B2BE2" />
                <stop offset="1" stopColor="#5B0BB5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showWordmark && (
        <div className="flex items-baseline">
          <span className={`font-black tracking-tighter text-white ${textSizes[size]}`}>
            Uplix
          </span>
          <span className={`font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#8B2BE2] ${textSizes[size]}`}>
            BD
          </span>
        </div>
      )}
    </div>
  );
}
