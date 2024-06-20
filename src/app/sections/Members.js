'use client'

import style from '@/styles/members.sass'
import Image from 'next/image'
import { useRef, useState } from 'react'
import MemberCard from '@/components/MemberCard'

export default function Members() {
  const [ nowIndex, setNowIndex ] = useState(0)
  const memberDatas = [
    {
      name: "潘威利",
      position: "前端工程師",
      imgUrl: "/威利.jpg",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        },
      ]
    },
    {
      name: "潘威利",
      position: "前端工程師",
      imgUrl: "/威利.jpg",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        },
      ]
    },
    {
      name: "潘威利",
      position: "前端工程師",
      imgUrl: "/威利.jpg",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        },
      ]
    },
    {
      name: "潘威利",
      position: "前端工程師",
      imgUrl: "/威利.jpg",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        },
      ]
    },
    {
      name: "潘威利",
      position: "前端工程師",
      imgUrl: "/威利.jpg",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        },
      ]
    },
  ]

  function handleLeftClicked() {
    setNowIndex(prev => {
      return prev == 0 ? 0 : prev - 1
    })
  }
  
  function handleRightClicked() {
    setNowIndex(prev => {
      return prev == memberDatas.length - 1 ? memberDatas.length - 1 : prev + 1
    })
  }

  function handleCardClicked() {
    console.log("");
    // setNowIndex(cardIndex)
  }

  function handleMouseEnter() {
    
  }
  return (
    <div id="members">
      <div className="container">
        <div className="left">
          <h1 className="title"> 團隊成員 </h1>
        </div>
        <div className="right">
          <div className="carousel">
            <div className="btn btn_left" onClick={handleLeftClicked}>
              <Image
                src='/left-arrow.png'
                width={64}
                height={64}
              />
            </div>
            <div className="window">
              <div className="cards">
                { memberDatas.map( (data, index) => {
                  return <MemberCard 
                    key={index}
                    className={`
                      memberCard 
                      ${index != nowIndex ? 'hide' : 'active'}
                      `}
                    data={data}
                    style={
                      {
                        '--index': index,
                        '--delta': index - nowIndex
                      }
                    }
                    />
                }) }
              </div>
            </div>
            <div className="btn btn_right" onClick={handleRightClicked}>
              <Image
                src='/right-arrow.png'
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}