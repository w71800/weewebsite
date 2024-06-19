import Image from "next/image"
// import "@/styles/memberCard.sass"

export default function MemberCard({data: member, ...props }) {
  const { name, imgUrl, position } = member
  return (
  <div 
    className={props.className}
    key={props.key}
    style={props.style}
    >
    <Image 
      src={imgUrl}
      width={400}
      height={400}
    />
    <h1 className="name">{ name }</h1>
    <h3 className="position">{ position }</h3>
  </div>
)
}
