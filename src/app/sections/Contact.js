/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

import '@/styles/contact.sass'

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <h1 className="title"> 有需求嗎？那就聯絡我們吧！ </h1>
        <form action="">
          <input type="text" name="name" placeholder="怎麼稱呼？"/>
          <input type="text" name="contact" placeholder="聯絡方式" />
          <textarea name="need" placeholder="需求說明"></textarea>
          <input type="submit" value="送出" />
        </form>
      </div>
    </div>
  )
}