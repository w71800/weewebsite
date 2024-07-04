'use client'

import ArticleCard from "@/components/ArticleCard"
import LoadmoreButton from "@/components/LoadmoreButton"
import Image from "next/image"
import { useEffect, useState } from "react"
import '@/styles/articles.sass'
import { articlesLoader, articleFilter } from "@/utils/utils"

export default function Articles() {
  const defaultArticles = [
    {
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
    },
    {
      "id": 666,
      "title": "文章標題汪汪汪",
      "publishedTime": "2024/07/03",
      "author": {
        "id": 1,
        "name": "潘威利",
        "imgUrl": "/威利.jpg"
      },
      "content": "ure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio minima minima minima",
      "tags": ["#喵嗚"],
    },
    {
      "id": 666,
      "title": "文章標題汪汪汪",
      "publishedTime": "2024/07/03",
      "author": {
        "id": 1,
        "name": "潘威利",
        "imgUrl": "/威利.jpg"
      },
      "content": "ure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio minima minima minima",
      "tags": ["#咻咻"],
    }
  ]
  const [ searchValue, setSearchValue ] = useState("")
  const [ filteredArticles, setFilteredArticles ] = useState([])
  const [ isBlured, setIsBlured ] = useState(false)
  
  function handleChange(event) {
    setSearchValue(event.target.value)
  }
  function handleBlur() {
    setIsBlured(true)
    let result = articleFilter(defaultArticles, searchValue)
    setFilteredArticles(result)
  }
  
  const displayedArticles = isBlured ? filteredArticles : defaultArticles
  
  return (
    <div id="articles">
      <div className="container">
        <div className="panel">
          <div className="search">
            <input 
              type="text" 
              placeholder="請輸入標題關鍵字或標籤"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Image 
              src='/search.png'
              width={64}
              height={64}
            />
          </div>
        </div>
        { displayedArticles.map( article => <ArticleCard articleData={ article }/> ) }
        {/* <div 
          className={`searchHint ${filteredArticles.length == 0 && isBlured ? 'show' : ''}`}
        > 
        查無此文章 
        </div> */}
        {/* <LoadmoreButton onClick={ () => articlesLoader() } /> */}
      </div>
    </div>
  )
}