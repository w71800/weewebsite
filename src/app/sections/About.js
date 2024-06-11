'use client'

import Image from "next/image"
import style from "@/styles/about.sass"
import { useState } from 'react'

export default function About() {
  const services = ["服務項目一", "服務項目二", "服務項目三"]
  const [selectedService, setSelectedService ] = useState(null)

  const handleMouseEnter = (service) => {
    setSelectedService(service)
  }
  
  const handleMouseLeave = () => {
    setSelectedService(null)
  }

  
  return (
    <section id="about"> 
      { services.map((service, index) => {
        return (
          <div 
            key={index}
            className="service"
            onMouseEnter={() => handleMouseEnter(service)}
            onMouseLeave={handleMouseLeave}
          > 
            { service } 
          </div>
        )
      }) }
      <div className="show"> {selectedService} </div>
    </section>
  )
}