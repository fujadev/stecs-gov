import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useMemo } from "react";

interface props {
  title: string
  desc: string
  image?: StaticImport
  svg?: JSX.Element
  alt?: string

}
const ValueCard: React.FC<props> = ({ alt = "Stecs Value", desc, image, title, svg }) => {

  const imageDisplay = useMemo(() => {
    if (svg) return svg
    if (image) return <Image src={image} alt={alt} />
    return null;
  }, [svg, image])

  return (
    <div className="max-sm:py-[25px] py-[50px] max-sm:px-[12px] px-[30px] flex flex-col rounded-[20px] bg-[#F9F9F7] h-full">
      <span className="max-sm:mb-[12px] mb-[24px] text-main-900 text-[24px]" >{title}</span>
      <span className="text-sub-500 text-[16px] keading-[24px] max-w-[344px]">{desc}</span>
      {imageDisplay && <div className="ml-auto max-sm:mt-[24px] mt-auto">
        {imageDisplay}
      </div>}
    </div>
  );
}

export default ValueCard;