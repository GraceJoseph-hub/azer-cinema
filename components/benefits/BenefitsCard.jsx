import Image from "next/image"


const BenefitsCard = ({alt, src, title}) => {
  
  return (
    <div className="flex flex-col bg-white justify-center items-center xs:w-[120px] xs:h-auto w-[200px] h-[200px] my-[6%]">
      <Image src={src} alt={alt} width={150} height={100} className="" />
      <p className="text-purple font-bold xs:text-center">{title}</p>
    </div>
  );
}

export default BenefitsCard