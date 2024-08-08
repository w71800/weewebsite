/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

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
      imgUrl: "/members/潘威利.png",
      content: "技術是為了眾人而存在，而我們用技術來服務眾人",
      projects: [
        {
          name: "高雄市市立大同醫院 ebest 智慧清床系統",
          role: "Line 端工程師"
        },
        {
          name: "WeeMed 官方形象網站（企劃、前端工程師）",
          role: "企劃、前端工程師"
        }
      ]
    },
    {
      name: "賴柏瑜",
      position: "後端工程師",
      imgUrl: "/members/賴柏瑜.png",
      content: "Technology lies in humanity.",
      projects: [
        {
          name: "大同醫院健檢中心網站",
          role: "後端工程師"
        }
      ]
    },
    {
      name: "林靜雪",
      position: "實習生",
      imgUrl: "/members/林靜雪.png",
      content: "在協作中成長，共繪理想藍圖",
      projects: [
        {
          name: "高雄市市立大同醫院簽到系統(Line端)",
          role: ""
        }
      ]
    },
    {
      name: "Shan",
      position: "後端工程師",
      imgUrl: "/members/Shan.png",
      content: "改變的確需要勇氣，但結果值得冒險。 <全職高手 - 葉修>",
      projects: [
        {
          name: "童話童畫",
          role: "後端工程師"
        },
        {
          name: "WebAR",
          role: "工程師"
        }
      ]
    },
    {
      name: "Jim Zhang",
      position: "前端工程師",
      imgUrl: "/members/Jim Zhang.png",
      content: "Know thyself.",
      projects: [
        {
          name: "Talkie",
          role: "前端"
        },
        {
          name: "VR Serious Game",
          role: "企劃"
        }
      ]
    },
    {
      name: "李森儀 Sammy",
      position: "網頁企劃",
      imgUrl: "/members/李森儀 Sammy.png",
      content: "The details are not the details. They make the design.",
      projects: [
        {
          name: "大同醫院健檢中心英文版網站",
          role: "專案經理"
        },
        {
          name: "社區照顧關懷據點",
          role: "專案經理"
        },
        {
          name: "大同船員體檢報告",
          role: "專案經理"
        },
        {
          name: "大同醫院病床終期清消調度系統",
          role: "網頁企劃"
        },
        {
          name: "大同醫院健檢中心報告電子簽收系統",
          role: "網頁企劃"
        },
        {
          name: "大同醫院電子秤重系統",
          role: "網頁企劃"
        },
        {
          name: "雲科人文學院-英文網站",
          role: "網頁企劃"
        },
        {
          name: "HI-HOPE個案管理系統",
          role: "網頁企劃"
        }
      ]
    }
  ];

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
            <div 
              className={`btn btn_left ${nowIndex === 0 ? 'inactive' : ''}`}
              onClick={handleLeftClicked}
            >
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
            <div 
              className={`btn btn_right ${nowIndex === memberDatas.length - 1 ? 'inactive' : ''}`}
              onClick={handleRightClicked}
            >
              <Image
                src='/right-arrow.png'
                width={64}
                height={64}
              />
            </div>
            <div className="dots">
              { memberDatas.map( (data, index) => {
                    return (
                      <div 
                        className={`dot ${index == nowIndex ? 'active' : ''}`}
                      >
                      </div>
                    )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}