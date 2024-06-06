import style from "@/styles/navbar.sass"
import Image from "next/image"


export default function Navbar() {
  const links = [
    { content: '首頁', url: '/' },
    { content: '服務項目', url: '/services' },
    { content: '產品', url: '/products' },
    { content: '技術分享', url: '/articles' }
  ]
  return (
  <div id="navbar">
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