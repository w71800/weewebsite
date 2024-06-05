import style from "@/styles/navbar.sass"

export default function Navbar() {
  return (
  <div id="navbar">
    <div className="container">
      <div className="logo">
        <img src="https://media.cakeresume.com/image/upload/s--SKtozer4--/c_pad,fl_png8,h_400,w_400/v1675224190/e1cvt4kt4qpngv3ntvdr.png" alt="" />
      </div>
      <div className="links">
        <div className="link"><a href=""> 首頁 </a></div>
        <div className="link"><a href=""> 服務項目 </a></div>
        <div className="link"><a href=""> 產品 </a></div>
        <div className="link"><a href=""> 技術分享 </a></div>
      </div>
    </div>
  </div>
  )
}