import AppButton from "../Common";
import { ReactNode } from "react";
import TabDescription from "./TabDescription";

interface props {
  words: string[]
  subText: string
  title: string
  btnText: string
  asideContent: ReactNode

}
const FeaturesTabPanel: React.FC<props> = ({ btnText, subText, title, words, asideContent }) => (
  <div className="flex gap-[51px] items-center w-fit mx-auto max-w-[850px] w-full">
    <TabDescription words={words} subText={subText} title={title} btnText={btnText} className="max-md:hidden" />
    {asideContent}
  </div>
)

export default FeaturesTabPanel