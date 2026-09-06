import React, { useState } from 'react';
import BufferingSpinner from './BufferingSpinner';

export default function ImageWithLoader({
  src,
  alt = '',
  style = {},
  className = '',
  containerStyle = {},
  spinnerSize = 38,
  theme = 'light',
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: theme === 'dark' ? '#0A0D12' : '#F5F2EC',
        ...containerStyle
      }}
      className={`img-loader-container ${!isLoaded ? (theme === 'dark' ? 'shimmer-placeholder-dark' : 'shimmer-placeholder') : ''}`}
    >
      {/* Buffering Spinner overlay while image is downloading */}
      {!isLoaded && !hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <BufferingSpinner size={spinnerSize} theme={theme} />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setHasError(true);
          setIsLoaded(true);
          if (onError) onError(e);
        }}
        className={`${className} ${isLoaded ? 'img-loaded-visible' : 'img-loading-hidden'}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...style
        }}
        {...props}
      />
    </div>
  );
}
