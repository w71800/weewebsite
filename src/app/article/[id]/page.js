/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

import { getArticle } from "@/utils/utils"
import '@/styles/article.sass'
import Image from "next/image"

export default async function ArticlePage({ params }) {
  // const article = await getArticle(params.id)
  let article = {
    "id": 666,
    "title": "文章標題",
    "publishedTime": "2024/07/03",
    "author": {
      "id": 1,
      "name": "潘威利",
      "imgUrl": "/威利.jpg",
      "position": "前端工程師"
    },
    "content": "咻咻咻 ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio minima minima minima",
    "tags": ["文章", "哈囉"],
    "smallImgUrl": '/about.jpg' // TODO: 刪除掉測試資料
  }
  const {
    title,
    content,
    publishedTime,
    imgUrl,
    tags,
    author: {
      name,
      imgUrl: authorImg,
      position
    } 
  } = article

  return (
    <div id="article">
      <div className="header">
          <Image 
            width={400}
            height={400}
            src={imgUrl || '/hero.jpg'}
          />
      </div>
      <div className="container">
        <div className="title"> { title } </div>
        <div className="publishedTime"> { publishedTime } </div>
        <div className="tags"> 
          { tags.map( (tag,index) => <span className="tag" key={index}> {`# ${tag}`} </span> ) }
        </div>
        <hr className="divider" />
        <div className="content"> { content } </div>
        <hr className="divider" />
        <div className="author"> 
          <div className="left">
            <div className="author__img">
              <Image 
                width={400}
                height={400}
                src={authorImg} // TODO: 這邊也要放上替代用的，或許可以將處理照片錯誤的方法抽出來用
              />
            </div>
          </div>
          <div className="right">
            <div className="author__name"> { name } </div>
            <div className="author__position"> { position } </div>
          </div>
        </div>
      </div>
    </div>
  )
}