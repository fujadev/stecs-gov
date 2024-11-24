import AppButton from "../Common/AppButton";
import { ReactNode } from "react";
import TabDescription from "./TabDescription";

interface props {
  words: string[]
  subText: string
  title: string
  btnText: string
  asideContent: ReactNode
  btnAction?: () => void

}
const FeaturesTabPanel: React.FC<props> = ({ btnText, subText, title, words, asideContent, btnAction }) => (
  <div className="flex gap-[51px] items-center w-fit mx-auto max-w-[850px] w-full">
    <TabDescription btnAction={() => btnAction && btnAction()} words={words} subText={subText} title={title} btnText={btnText} className="max-md:hidden" />
    {asideContent}
  </div>
)

export default FeaturesTabPanel