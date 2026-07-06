import { useState } from 'react'

interface OptimizedImageProps {
  src: string          // Primary source (WebP or fallback)
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
  decoding?: 'async' | 'sync' | 'auto'
  fallbackColor?: string
  /** Optional WebP source — if different from src */
  webpSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  style = {},
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fallbackColor = '#0B0C10',
  webpSrc,
}: OptimizedImageProps) {
  const [error, setError] = useState(false)

  // If image failed to load, show a colored placeholder
  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: fallbackColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        role="img"
        aria-label={alt}
      >
        <svg className="w-6 h-6" style={{ color: 'rgba(0, 191, 255, 0.3)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
        </svg>
      </div>
    )
  }

  // Use <picture> with WebP source if available
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          style={style}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          onError={() => setError(true)}
        />
      </picture>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={() => setError(true)}
    />
  )
}
