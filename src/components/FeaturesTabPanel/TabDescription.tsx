import AppButton from "../Common/AppButton";
import React from "react";

interface props {
  words: string[]
  subText: string
  title: string
  btnText: string
  className?: string
  btnAction?: () => void
}
const TabDescription: React.FC<props> = ({ btnText, subText, title, words, className = "", btnAction }) => (
  <div className={`max-w-[353px] w-[100%] max-md:max-w-[100%] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center ${className}`}>
    <div className="flex items-center  gap-[8px] mb-[8px]">
      {words.map((val, idx) => <>
        <span className="text-[12px] text-main-900">{val}</span>
        {idx + 1 !== words.length && <span className="w-[4px] h-[4px] bg-main-900" />}
      </>
      )}
    </div>
    <h2 className="mb-[24px] font-bold max-sm:text-[20px] text-[32px] text-black">{title}</h2>
    <p className="text-[16px] text-sub-500 leading-[24px] mb-[24px]">{subText}</p>
    <AppButton onClick={() => btnAction && btnAction()} fullWidth={false} mih={48} classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}>
      <span className="text-[#fff] text-[14px] font-medium">{btnText}</span>
    </AppButton>
  </div>
)

export default TabDescription