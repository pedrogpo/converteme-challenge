import { useEffect, useState } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent))
  }, [])

  return isMobile
}
