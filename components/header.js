import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const [toogleMenu, setToogleMenu] = useState(false)
  const [headerIsScrolled, setHeaderIsScrolled] = useState(false)
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setHeaderIsScrolled(false)
    } else {
      setHeaderIsScrolled(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  /*return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className={router.pathname === '/' ? "hover:underline px-2 opacity-50": 'px-2'}>Blog</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? "hover:underline px-2 opacity-50": 'px-2'}>About</a>
      </Link>
      <Link href="/contact">
        <a className={router.pathname === '/contact' ? "hover:underline px-2 opacity-50": 'px-2'}>Contact</a>
      </Link>
    </h2>
  )*/

  function handleToogleMenu() {
    setToogleMenu(!toogleMenu)
  }

  return (
    <div className="fixed top-0 w-full">
      <nav className={`transition duration-500 ease-in-out flex items-center justify-between flex-wrap ${headerIsScrolled ? 'bg-white shadow' : 'bg-white bg-opacity-50'} p-4`}>
        <div className="flex items-center flex-shrink-0 text-white">
          <svg className="fill-black h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <Link href="/" >
            <a className="font-semibold text-black text-2xl tracking-tight">Tailwind CSS</a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={handleToogleMenu} className="transition duration-500 ease-in-out rounded border-black flex items-center px-3 py-2 hover:opacity-50 transform hover:-translate-y-1">
            <svg className="fill-black h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow ${toogleMenu ? null : 'hidden'} lg:flex lg:items-center lg:w-auto lg:ml-16`}>
          <div className="text-2xl font-medium lg:flex lg:w-full lg:justify-end">
            <Link href="/#blog" >
              <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-6">
                Blog
              </a>
            </Link>
            <Link href="/#about" >
              <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-6">
                About
              </a>
            </Link>
            <Link href="/#contact" >
              <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-6">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
