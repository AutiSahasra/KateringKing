import React from 'react';

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  centered = true,
  theme = 'light'
}) {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '840px' : '100%',
        margin: centered ? '0 auto 64px' : '0 0 48px',
      }}
    >
      {kicker && (
        <div style={{ marginBottom: '18px' }}>
          <span
            className="badge-kicker"
            style={{
              backgroundColor: isDark ? 'rgba(200, 138, 46, 0.16)' : 'var(--color-accent-champagne)',
              color: isDark ? 'var(--color-primary)' : '#8C550A',
              borderColor: isDark ? 'rgba(200, 138, 46, 0.4)' : 'rgba(200, 138, 46, 0.35)',
              fontWeight: 800
            }}
          >
            {kicker}
          </span>
        </div>
      )}

      <h2
        style={{
          fontSize: 'var(--font-size-h1)',
          fontWeight: 'var(--fw-black)',
          color: isDark ? '#FFFFFF' : 'var(--color-text-primary)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          marginBottom: '20px'
        }}
      >
        {title}
      </h2>

      {centered && (
        <div className="ornament-divider">
          <div className="ornament-line"></div>
          <div className="ornament-diamond"></div>
          <div className="ornament-line"></div>
        </div>
      )}

      {subtitle && (
        <p
          className="text-lead"
          style={{
            fontSize: 'var(--font-size-body-lead)',
            color: isDark ? 'rgba(255, 255, 255, 0.82)' : 'var(--color-text-secondary)',
            lineHeight: 1.65,
            marginTop: '16px',
            fontWeight: 'var(--fw-medium)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
