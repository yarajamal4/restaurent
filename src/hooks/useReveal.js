import { useEffect, useRef } from 'react'

export default function useReveal() {
  const refs = useRef([])

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      }),
      { threshold: 0.05 }
    )

    const timer = setTimeout(() => {
      refs.current.forEach(el => {
        if (el) observer.observe(el)
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }) 

  return addRef
}
