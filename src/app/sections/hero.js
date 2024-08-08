/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

import Image from "next/image"
import style from "@/styles/hero.sass"

export default function Hero() {
  return (
    <section id="hero"> 
      <Image
        src="/hero.jpg"
        width={400}
        height={300}
        alt="hero"
      />
      {/* <div className="slider"></div> */}
    </section>
  )
}