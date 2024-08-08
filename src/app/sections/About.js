/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

import Image from "next/image"
import style from "@/styles/about.sass"

export default function About (){
  return (
    <div id="about">
      <div className="container">
        <div className="left">
          <h1 className="title"> 關於 Wee Medical </h1>
          <p className="subtitle"> Transforming Healthcare, One Innovation at a Time. </p>
          <p className="content"> 為人有限公司（WeeMedicial.ai）於 2014 年成立，自詡為「推進企業數位轉型的陪伴者」，擁有堅實的技術能力和高效的溝通能力，致力於協助企業順利實施數位轉型。 
            {/* <span> 公司經過多項資訊服務專案的歷練後，近年來專注於「智慧健康照護」產業，成功打造了多個令人矚目的案例。其中，大同醫院健康管理中心是全國首家實現即時線上預約健康檢查的資訊系統。這項創新的系統為使用者提供更方便、迅速的健康檢查預約方式，顯示公司在智慧健康照護領域的先驅地位。 </span>
            <span> 另一成功案例是 QR Code 簽到管理系統，這系統結合了 IoT 設備和 LINE Bot，建立了一套低成本的簽到管理系統。該系統目前應用於醫院清潔人員的簽到管理，並透過 LINE Bot 定時發送簽到異常通知。這不僅提高了簽到的效率，同時也強化了管理和監控的能力，為智慧照護領域的應用帶來了實質的價值。 </span> */}
          </p>
        </div>
        <div className="right">
          <Image
            src="/about.jpg"
            width={100}
            height={100}
          ></Image>
        </div>
      </div>
    </div>
  )
}