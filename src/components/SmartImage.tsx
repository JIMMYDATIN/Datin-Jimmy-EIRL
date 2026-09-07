import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  badge?: string;
  containerClassName?: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80';

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackSrc,
  badge,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc || DEFAULT_FALLBACK);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (errorCount === 0 && fallbackSrc && fallbackSrc !== currentSrc) {
      setErrorCount(1);
      setCurrentSrc(fallbackSrc);
    } else if (errorCount < 2) {
      setErrorCount(2);
      setCurrentSrc(DEFAULT_FALLBACK);
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full min-h-[160px] bg-[#2E261E] ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt || 'Menuiserie et charpente Menuiserie Datin J.'}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer"
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-90'} ${className}`}
        loading="lazy"
        {...props}
      />
      {badge && (
        <span className="absolute top-3 right-3 bg-[#1C2826]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 shadow-xs z-10">
          {badge}
        </span>
      )}
    </div>
  );
};

