'use client'

import ArticleCard from "@/components/ArticleCard"
import LoadmoreButton from "@/components/LoadmoreButton"
import SearchInput from "./components/SearchInput"
import { useState } from "react"
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
        "imgUrl": "/members/潘威利.png"
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
        "imgUrl": "/members/潘威利.png"
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
        "imgUrl": "/members/潘威利.png"
      },
      "content": "ure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio! 汪汪汪汪 哈囉 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos iure vel aspernatur animi debitis illo sint? Nisi, culpa. Provident ducimus esse necessitatibus sit quo, aspernatur fugit minima ad odio minima minima minima",
      "tags": ["#咻咻"],
    }
  ]
  const [ searchValue, setSearchValue ] = useState("")
  const [ displayedArticles, setDisplayedArticles ] = useState(defaultArticles)
  
  const handleValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearch = () => {
    const filtered = articleFilter(defaultArticles, searchValue)
    setDisplayedArticles(filtered)
  }
  
  
  return (
    <div id="articles">
      <div className="container">
        <div className="panel">
          <SearchInput 
            onValueChange={handleValueChange}
            onSearch={handleSearch}
          />
        </div>
        {displayedArticles.map((article, index) => (
          <ArticleCard key={index} articleData={ article }/>
        ))}
        <div 
          className={`searchHint ${displayedArticles.length !== 0 ? '' : 'show'}`}
        > 
          查無相關文章 
        </div>
      </div>
    </div>
  )
}