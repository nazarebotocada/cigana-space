import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

// Sparkles - estrelas brilhantes místicas
export const SparklesIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" 
          fill="url(#sparkle-grad)" />
    <path d="M19 15L20 18L23 19L20 20L19 23L18 20L15 19L18 18L19 15Z" 
          fill="url(#sparkle-grad)" opacity="0.7" />
    <path d="M5 1L6 4L9 5L6 6L5 9L4 6L1 5L4 4L5 1Z" 
          fill="url(#sparkle-grad)" opacity="0.5" />
    <defs>
      <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#c9a227" />
      </linearGradient>
    </defs>
  </svg>
)

// Crescent Moon - lua crescente mística
export const MoonIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
          fill="url(#moon-grad)" />
    <circle cx="8" cy="8" r="1" fill="#ffd700" opacity="0.6" />
    <circle cx="12" cy="14" r="0.7" fill="#ffd700" opacity="0.4" />
    <circle cx="6" cy="13" r="0.5" fill="#ffd700" opacity="0.5" />
    <defs>
      <linearGradient id="moon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8d5f2" />
        <stop offset="50%" stopColor="#c9b8d9" />
        <stop offset="100%" stopColor="#9d8aa5" />
      </linearGradient>
    </defs>
  </svg>
)

// Star - estrela mística de 5 pontas
export const StarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L14.4 9.2L22 9.6L16.4 14.4L18.2 22L12 17.8L5.8 22L7.6 14.4L2 9.6L9.6 9.2L12 2Z" 
          fill="url(#star-grad)" />
    <path d="M12 6L13.2 10.4L18 10.6L14.2 13.6L15.4 18L12 15.2L8.6 18L9.8 13.6L6 10.6L10.8 10.4L12 6Z" 
          fill="url(#star-inner)" />
    <defs>
      <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
      <linearGradient id="star-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff8dc" />
        <stop offset="100%" stopColor="#ffd700" />
      </linearGradient>
    </defs>
  </svg>
)

// Heart - coração místico
export const HeartIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
          fill="url(#heart-grad)" />
    <path d="M12 18l-1-0.9C7.1 13.8 5 11.5 5 9c0-2 1.5-3.5 3.5-3.5 1.1 0 2.2.5 3 1.3.8-.8 1.9-1.3 3-1.3 2 0 3.5 1.5 3.5 3.5 0 2.5-2.1 4.8-6 8.1L12 18z" 
          fill="url(#heart-inner)" opacity="0.5" />
    <defs>
      <linearGradient id="heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b2252" />
        <stop offset="50%" stopColor="#722f5a" />
        <stop offset="100%" stopColor="#5c1a47" />
      </linearGradient>
      <linearGradient id="heart-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a5c9" />
        <stop offset="100%" stopColor="#8b2252" />
      </linearGradient>
    </defs>
  </svg>
)

// Energy/Lightning - energia mística
export const EnergyIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L4 14h7l-2 8 11-12h-7l2-8z" 
          fill="url(#energy-grad)" />
    <path d="M12 5L6 13h5l-1.5 5 7-8h-5l1.5-5z" 
          fill="url(#energy-inner)" opacity="0.6" />
    <defs>
      <linearGradient id="energy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
      <linearGradient id="energy-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8d5f2" />
        <stop offset="100%" stopColor="#9b59b6" />
      </linearGradient>
    </defs>
  </svg>
)

// Glowing Star - estrela radiante
export const GlowStarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#glow-bg)" opacity="0.3" />
    <path d="M12 4L13.8 9.6L20 10L15.2 13.8L16.8 20L12 16.4L7.2 20L8.8 13.8L4 10L10.2 9.6L12 4Z" 
          fill="url(#glow-star-grad)" />
    <circle cx="12" cy="12" r="3" fill="#fff8dc" opacity="0.8" />
    <defs>
      <radialGradient id="glow-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="glow-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="50%" stopColor="#ffed4a" />
        <stop offset="100%" stopColor="#c9a227" />
      </linearGradient>
    </defs>
  </svg>
)

// Target - alvo/precisão místico
export const TargetIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="url(#target-grad)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="url(#target-grad)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="2" fill="url(#target-center)" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="url(#target-grad)" strokeWidth="1.5" opacity="0.6" />
    <defs>
      <linearGradient id="target-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
      <radialGradient id="target-center" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#c9a227" />
      </radialGradient>
    </defs>
  </svg>
)

// Lock - cadeado místico (privacidade)
export const LockIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="10" width="16" height="12" rx="2" fill="url(#lock-body)" />
    <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="url(#lock-shackle)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.5" fill="#ffd700" />
    <path d="M12 16.5v2" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="lock-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c3483" />
        <stop offset="100%" stopColor="#4a235a" />
      </linearGradient>
      <linearGradient id="lock-shackle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#967117" />
      </linearGradient>
    </defs>
  </svg>
)

// Five Stars Rating - 5 estrelas para avaliações
export const FiveStarsIcon: React.FC<IconProps> = ({ size = 100, className }) => (
  <svg width={size} height={size * 0.2} viewBox="0 0 100 20" fill="none" className={className}>
    {[0, 20, 40, 60, 80].map((x, i) => (
      <path 
        key={i}
        d={`M${x + 10} 2L${x + 12} 7.5L${x + 18} 8L${x + 13.5} 12L${x + 15} 18L${x + 10} 14.5L${x + 5} 18L${x + 6.5} 12L${x + 2} 8L${x + 8} 7.5L${x + 10} 2Z`}
        fill="url(#stars-rating-grad)" 
      />
    ))}
    <defs>
      <linearGradient id="stars-rating-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#c9a227" />
      </linearGradient>
    </defs>
  </svg>
)

// Book - livro místico
export const BookIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="url(#book-grad)" strokeWidth="2" fill="none" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" 
          fill="url(#book-fill)" stroke="url(#book-grad)" strokeWidth="1.5" />
    <path d="M8 6h8M8 10h6M8 14h4" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <defs>
      <linearGradient id="book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
      <linearGradient id="book-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a235a" />
        <stop offset="100%" stopColor="#2c1338" />
      </linearGradient>
    </defs>
  </svg>
)

// Briefcase - maleta/carreira
export const BriefcaseIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" fill="url(#brief-fill)" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="url(#brief-grad)" strokeWidth="2" />
    <path d="M12 12v4" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="#ffd700" />
    <defs>
      <linearGradient id="brief-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c3483" />
        <stop offset="100%" stopColor="#4a235a" />
      </linearGradient>
      <linearGradient id="brief-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#967117" />
      </linearGradient>
    </defs>
  </svg>
)

// Brain - cérebro/IA
export const BrainIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 4.5C10 2.5 7 2 5 4s-1.5 5.5 0 7.5c-2 1-3 3.5-2 5.5s3.5 3 5.5 2c1 2 3.5 3 5.5 2s3-3.5 2-5.5c2-1 3-3.5 2-5.5s-3.5-3-5.5-2c-.3-.7-.7-1.3-1.5-2z" 
          fill="url(#brain-fill)" />
    <path d="M12 4.5v15M8 8c2 1 4 1 6 0M8 14c2-1 4-1 6 0" stroke="url(#brain-lines)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="11" r="1" fill="#ffd700" opacity="0.8" />
    <circle cx="15" cy="11" r="1" fill="#ffd700" opacity="0.8" />
    <defs>
      <linearGradient id="brain-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
      <linearGradient id="brain-lines" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8d5f2" />
        <stop offset="100%" stopColor="#c9b8d9" />
      </linearGradient>
    </defs>
  </svg>
)

// Clock - relógio 24/7
export const ClockIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#clock-fill)" />
    <circle cx="12" cy="12" r="8" stroke="url(#clock-ring)" strokeWidth="1" fill="none" />
    <path d="M12 6v6l4 2" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="#ffd700" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <circle 
        key={i}
        cx={12 + 7 * Math.cos((angle - 90) * Math.PI / 180)} 
        cy={12 + 7 * Math.sin((angle - 90) * Math.PI / 180)} 
        r={i % 3 === 0 ? 0.8 : 0.4} 
        fill="#c9a227" 
      />
    ))}
    <defs>
      <linearGradient id="clock-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a235a" />
        <stop offset="100%" stopColor="#2c1338" />
      </linearGradient>
      <linearGradient id="clock-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#967117" />
      </linearGradient>
    </defs>
  </svg>
)

// Read/Page - página de leitura
export const ReadIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="url(#read-left)" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="url(#read-right)" />
    <path d="M5 8h3M5 12h2M17 8h2M17 12h3" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <defs>
      <linearGradient id="read-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c3483" />
        <stop offset="100%" stopColor="#4a235a" />
      </linearGradient>
      <linearGradient id="read-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
    </defs>
  </svg>
)

// Key - chave mística
export const KeyIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="8" cy="8" r="5" fill="url(#key-head)" stroke="url(#key-stroke)" strokeWidth="1.5" />
    <path d="M11 11l10 10M17 17l2 2M14 14l2 2" stroke="url(#key-stroke)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="8" r="2" fill="url(#key-hole)" />
    <defs>
      <linearGradient id="key-head" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a235a" />
        <stop offset="100%" stopColor="#2c1338" />
      </linearGradient>
      <linearGradient id="key-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#c9a227" />
      </linearGradient>
      <linearGradient id="key-hole" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a0a2e" />
        <stop offset="100%" stopColor="#0d0518" />
      </linearGradient>
    </defs>
  </svg>
)

// Card - carta de tarot/baralho
export const CardIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" fill="url(#card-bg)" />
    <rect x="6" y="4" width="12" height="16" rx="1" fill="url(#card-inner)" />
    <path d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z" fill="url(#card-star)" />
    <defs>
      <linearGradient id="card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9b59b6" />
        <stop offset="100%" stopColor="#6c3483" />
      </linearGradient>
      <linearGradient id="card-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a0a2e" />
        <stop offset="100%" stopColor="#2c1338" />
      </linearGradient>
      <linearGradient id="card-star" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#c9a227" />
      </linearGradient>
    </defs>
  </svg>
)
