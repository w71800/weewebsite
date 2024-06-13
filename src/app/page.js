import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>  
      <Hero />
      <About />
      <Services />
    </>
  )
}
