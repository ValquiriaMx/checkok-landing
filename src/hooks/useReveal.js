import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal:not(.visible)')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
