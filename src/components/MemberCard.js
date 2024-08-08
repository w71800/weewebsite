/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

import Image from "next/image"
import { useState } from "react"
// import "@/styles/memberCard.sass"

export default function MemberCard({data: member, ...props }) {
  const { 
    name, 
    imgUrl, 
    position, 
    content } = member

  const [ validImgUrl, setValidImgUrl ] = useState(imgUrl)

  const handerError = () => {
    setValidImgUrl('/members/member_alt.png')
  }
  return (
  <div 
    className={props.className}
    key={props.key}
    style={props.style}
    >
    <Image 
      src={validImgUrl}
      width={400}
      height={400}
      onError={handerError}
    />
    <h1 className="name">{ name }</h1>
    <h3 className="position">{ position }</h3>
    <div className="cover"></div>
    <div className="content">
      <span>「{ content }。」</span>
    </div>
  </div>
)
}
