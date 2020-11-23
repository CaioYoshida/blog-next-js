import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import htmlCoding from '../public/assets/svg/html-coding.svg'

export default function Header() {
  const router = useRouter()
  const [toogleMenu, setToogleMenu] = useState(false)
  const [headerIsScrolled, setHeaderIsScrolled] = useState(true)
  
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setHeaderIsScrolled(true)
    } else {
      setHeaderIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleToogleMenu() {
    setToogleMenu(!toogleMenu)
  }

  function handleToogleMenuOff() {
    setToogleMenu(false)
  }

  return (
    <div className={`fixed top-0 w-full z-30`}>
      <nav className={`transition duration-300 ease-in-out flex items-center justify-between flex-wrap bg-white ${headerIsScrolled ? '' : 'shadow'} px-2 py-2`}>
        <div className="flex items-center flex-shrink-0 text-white">
          {/*<img src={htmlCoding} className="fill-white h-8 w-8 mr-2" />*/}
          <Link href="/" >
            <a className={`font-semibold font-lobster text-orange-500 text-3xl tracking-tight`}>Você + Pet</a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={handleToogleMenu} className="transition duration-500 ease-in-out rounded flex items-center px-3 py-2 hover:opacity-50 transform hover:-translate-y-1">
            <svg className="fill-black h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow ${toogleMenu ? null : 'transition-all duration-500 ease-in-out hidden'} lg:flex lg:items-center lg:w-auto lg:ml-16`}>
          <div className="text-xl font-medium font-mono lg:flex lg:items-center lg:w-full lg:justify-end">
            {/*<div className="flex w-64 h-8 bg-white border border-gray-300 rounded mt-2 lg:mt-0 lg:mr-4">
              <input className="ml-4 bg-transparent focus:outline-none text-gray-700 placeholder-black" type="text" placeholder="Search"/>
            </div>*/}
            <Link href="/#blog">
              <a className={`block mt-4 lg:inline-block lg:mt-0 text-orange-500 font-lobster hover:text-gray-500 mr-6`} onClick={handleToogleMenuOff}>
                Blog
              </a>
            </Link>
            <Link href="/#more-stories">
              <a className={`block mt-4 lg:inline-block lg:mt-0 text-orange-500 font-lobster hover:text-gray-500 mr-6`} onClick={handleToogleMenuOff}>
                More Stories
              </a>
            </Link>
            <Link href="/#about" >
              <a className={`block mt-4 lg:inline-block lg:mt-0 text-orange-500 font-lobster hover:text-gray-500 mr-6`} onClick={handleToogleMenuOff}>
                About
              </a>
            </Link>
            <Link href="/#contact" >
              <a className={`block mt-4 lg:inline-block lg:mt-0 text-orange-500 font-lobster hover:text-gray-500 mr-6`} onClick={handleToogleMenuOff}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
