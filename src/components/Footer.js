import "@/styles/footer.sass"
import Image from "next/image"

export default function Footer() {
  return (
    <div id="footer">
      <div className="top">
          <div className="container">
            <div className="left">
              <div className="column">
                <div className="title">Wee Medical</div>
                <div className="item">電話：04 23016388</div>
                <div className="item">地址：403 台中市西區臺灣大道二段 186 號 20 樓之 1</div>
                <div className="item">營業時間：週一～週五 10:00~18:30</div>
              </div>
            </div>
            <div className="right">
              <div className="column">
                <div className="title">產品列表</div>
                <div className="item">產品項目</div>
                <div className="item">產品項目</div>
                <div className="item">產品項目</div>
              </div>
              
              <div className="column">
                <div className="title">服務列表</div>
                <div className="item">服務項目</div>
                <div className="item">服務項目</div>
                <div className="item">服務項目</div>
              </div>
              <div className="column">
                <div className="title">更多我們</div>
                <div className="item">關於我們</div>
                <div className="item">官方部落格</div>
            </div>
              </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">2014-2024 為人有限公司 All Rights Reserved</div>
        </div>
    </div>
  )
}