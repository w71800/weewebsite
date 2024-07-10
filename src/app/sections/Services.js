'use client'

import Image from "next/image"
import style from "@/styles/services.sass"
import { useState } from 'react'
import { useData } from "../contexts/DataContext";

export default function Services() {
  const { services } = useData()
  const [ selectedService, setSelectedService ] = useState({
    title: "服務項目一",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id aliquid ducimus aspernatur doloribus deserunt voluptatum qui, natus, officiis excepturi illo debitis.",
    iconUrl: "/customer-support.png" 
  })

  const { title, content, iconUrl } = selectedService

  const handleMouseEnter = (service) => {
    setSelectedService(service)
  }

  
  return (
    <section id="services">
      <div className="container">
        <div className="services">
          { services.map((service, index) => {
            const { title } = service
            return (
              <div 
                key={index}
                className="service"
                onMouseEnter={() => handleMouseEnter(service)}
              > 
                { title } 
              </div>
            )
          }) }
        </div>
        <div className="show">
          <Image
            className="icon"
            src={iconUrl}
            width={64}
            height={64}
          ></Image>
          <div className="title"> { title } </div>
          <div className="content"> { content } </div>
        <div className="more">
          <a href="/services"> Learn more </a>
        </div>
        </div>
      </div>
    </section>
  )
}