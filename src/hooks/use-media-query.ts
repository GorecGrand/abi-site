import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', handler)
    setMatches(mql.matches)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

/** Desktop = >= 1024px (lg breakpoint) — для тяжелых эффектов */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}

/** Tablet = 768px–1023px */
export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

/** Mobile = < 768px */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}

/** Reduced motion preference */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
