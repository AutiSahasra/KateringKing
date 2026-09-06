import React from 'react';

export default function BufferingSpinner({
  size = 42,
  label = '',
  theme = 'light',
  style = {}
}) {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        ...style
      }}
      role="status"
      aria-label={label || 'Loading content'}
    >
      <div
        className="buffering-ring-double"
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}
      />
      {label && (
        <span
          style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.06em',
            color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-primary)',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
