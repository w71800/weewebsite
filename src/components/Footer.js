import "@/styles/footer.sass"
import Image from "next/image"

export default function Footer({ data }) {
  const { services, products } = data

  return (
    <div id="footer">
      <div className="top">
        <div className="container">
          <div className="column">
            <div className="title">Wee Medical</div>
            <div className="item">電話：04 23016388</div>
            <div className="item">地址：403 台中市西區臺灣大道二段 186 號 20 樓之 1</div>
            <div className="item">營業時間：週一～週五 10:00~18:30</div>
          </div>
            <div className="column">
              <div className="title">產品列表</div>
              {products.map( (product, index) => (
                <div key={index} className="item"> {product} </div>
              ))}
            </div>
            
            <div className="column">
              <div className="title">服務列表</div>
              {services.map( (service, index) => (
                <div key={index} className="item"> {service.title} </div>
              ))}
            </div>
            <div className="column">
              <div className="title">更多我們</div>
              <div className="item">關於我們</div>
              <div className="item">官方部落格</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            2014 - 2024 為人有限公司 All Rights Reserved
            <span className="privacy"> 
              <a href="/privacy"> 隱私權政策 </a> 
            </span>
          </div>
        </div>
    </div>
  )
}