import Image from "next/image"
import { truncateContent } from '@/utils/utils'

const data = {
  "id": 666,
  "title": "文章標題",
  "publishedTime": "2024/07/03",
  "author": {
    "id": 1,
    "name": "潘威利",
    "imgUrl": "/威利.jpg"
  },
  "content": "咻咻咻 ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio minima minima minima",
  "tags": ["#文章", "#哈囉"],
  "smallImgUrl": '/about.jpg' // TODO: 這邊應該要接到圖在遠端的位置，圖不會放在本機
}

export default function ArticleCard ({ articleData }){
  const {
    smallImgUrl,
    title,
    content,
    author,
    publishedTime,
    tags } = articleData
  const validImgUrl = smallImgUrl || '/altImg.png'
  
  return (
    <div className="articleCard">
      <div className="left">
        <Image
          src={validImgUrl}
          width={150}
          height={150}
          alt={smallImgUrl? "文章配圖" : "預設佔位圖"}
        ></Image>
      </div>
      <div className="right">
        <div className="title"> 
          { title } 
          <span className="publishedTime"> {`published @ ${publishedTime}`} </span>
          <span className="tags">
            { tags.map( tag =>  <span className="tag"> { tag } </span> )}
          </span>
          
        </div>
        <div className="content"> 
          { truncateContent(content) } 
          <span className="readmore"> Read more </span>
        </div>
        <div className="icon">
          <Image
            src={author.imgUrl}
            width={100}
            height={100}
          ></Image>
        </div>
      </div>
    </div>
  )
}