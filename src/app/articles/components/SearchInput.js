'use client'
import Image from "next/image"

export default function SearchInput({ onValueChange, onSearch }) {
  // 當事件發生時，執行傳進來的回調函數（抽象化，表示要執行某件事，在 typing status 發生改變時）
  
  const handleChange = (event) => {
    onValueChange(event)
  }
  const handleClick = () => {
    onSearch()
  }
  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="請輸入標題關鍵字或標籤"
        onChange={handleChange}
      />
      <Image 
        src='/search.png'
        width={64}
        height={64}
      />
      <div 
        className="button"
        onClick={handleClick}> 
        搜尋 
      </div>
    </div>
  )
}