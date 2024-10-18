import Image from "next/image"


const BenefitsCard = ({alt, src, title}) => {
  
  return (
    <div className="flex flex-col bg-white justify-center items-center w-[200px] h-[200px] my-[6%]">
      <Image src={src} alt={alt} width={150} height={100}/>
      <p className="text-purple font-bold">{title}</p>
    </div>
  )
}

export default BenefitsCard