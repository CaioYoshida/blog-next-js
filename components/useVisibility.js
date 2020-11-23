import { useEffect, useRef, useState } from 'react'

export default function useVisibility({ children, tailwindCSS }) {
  const ref = useRef();

  const [elementIsViewed, setElementIsViewed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.1) {
          setElementIsViewed(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.5, 1.0]
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  })

  return <div ref={ref} className={`transition duration-1000 ease-in-out w-full z-20 ${elementIsViewed ? 'transform translate-y-20 opacity-0' : 'transform -translate-y-0 opacity-100'} ${tailwindCSS}`}>
    {children}
  </div>
}