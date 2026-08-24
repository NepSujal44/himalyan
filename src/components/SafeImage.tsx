import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const DEFAULT_MOUNTAIN_FALLBACK = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80';

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = DEFAULT_MOUNTAIN_FALLBACK,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Sync state if prop changes
  React.useEffect(() => {
    if (src) {
      setCurrentSrc(src);
      setHasError(false);
      setIsLoaded(false);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={props.loading || 'lazy'}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${!isLoaded ? 'opacity-90 transition-opacity duration-300' : 'transition-opacity duration-300'}`}
      {...props}
    />
  );
};
