'use client'

import style from "@/styles/navbar.sass"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Navbar() {
  const links = [
    { content: '首頁', url: '/' },
    { content: '服務項目', url: '/services' },
    { content: '產品', url: '/products' },
    { content: '技術分享', url: '/articles' }
  ]
  const [ isHidden, setIsHidden ] = useState(false)
  const [ lastScrollY, setLastScrollY ] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if(typeof window !== "undefined") {
        if(window.scrollY > lastScrollY) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }

        setLastScrollY(window.scrollY)
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [])

  
  return (
  <div id="navbar" className={isHidden ? "hide" : ""}>
    <div className="container">
      <div className="logo">
        <Image
          src="/navbar_icon.png"
          alt="icon"
          width={65}
          height={65}
        />
      </div>
      <div className="links">
        { links.map(link => {
          return (
            <div className="link">
              <a href={link.url}>{link.content}</a>
            </div>
          )
        }) }
      </div>
    </div>
  </div>
  )
}