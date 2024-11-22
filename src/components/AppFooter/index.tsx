import AppStoreLight from "@/assets/icons/AppStoreLight";
import ArrowUp from "@/assets/icons/ArrowUpIcon";
import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedinIcon from "@/assets/icons/LinkedIn";
import LogoLight from "@/assets/icons/LogoWhite";
import PlayStoreLight from "@/assets/icons/PlayStoreLight";
import XIcon from "@/assets/icons/xIcon";
import ndrp from '@/assets/images/ndrp.png'
import Image from "next/image";
import Link from "next/link";
import FeedbackSection from "../Feedback";
import React from "react";


const companyLinks = [
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Features",
    href: ""
  },
  {
    title: "Community",
    href: "/community"
  },
  {
    title: "Shariah Compliance",
    href: ""
  },
]
const legalLinks = [
  {
    title: "Terms Of Use",
    href: ""
  },
  {
    title: "Privacy Policy",
    href: ""
  },
  {
    title: "Terms of Service",
    href: ""
  },
]
interface props {
  showFeedBackSection?: boolean
}
const AppFooter: React.FC<props> = ({ showFeedBackSection }) => {
  return (
    <footer className="bg-[#151718]">
      <div className="wrapper-pad">
        {showFeedBackSection && <FeedbackSection />}
        <div className="max-w-[1216px] mx-auto pb-[48px]">
          <div className="text-[#fff] w-full pt-[72px] flex flex-wrap gap-x-[16px] gap-y-[32px] justify-start sm:justify-between">
            <div className="w-full sm:w-fit">
              <LogoLight />
              <Image src={ndrp} alt="NDRP regulation" className="mt-[32px]" />
              <div className="gap-[12px] flex items-center mt-[32px]">
                <AppStoreLight />
                <PlayStoreLight />
              </div>
            </div>
            <ul className="flex flex-col gap-[12px]">
              <li className="opacity-40 mb-[12px]">Company</li>
              {companyLinks.map(val =>
                <li>
                  <Link href={val.href} className="opacity-80 text-[#fff]">{val.title}</Link>
                </li>
              )}
            </ul>
            <ul className="flex flex-col gap-[12px]">
              <li className="opacity-40 mb-[12px]">Legal</li>
              {legalLinks.map(val =>
                <li>
                  <Link href={val.href} className="opacity-80 text-[#fff]">{val.title}</Link>
                </li>
              )}
            </ul>
            <ul className="flex flex-col gap-[12px] w-full sm:w-fit">
              <li className="opacity-40 mb-[12px]">Contact</li>
              <li className="underline">
                <Link href="mailto:support@stecs.ng" className="opacity-80 text-[#fff]">support@stecs.ng</Link>
              </li>
              <li className="underline">
                <Link href="mailto:support@stecs.ng" className="opacity-80 text-[#fff]">support@stecs.ng</Link>
              </li>
              <li className="underline">
                <Link href="tel:02013309146" className="opacity-80 text-[#fff]">tel: 02013309146</Link>
              </li>
            </ul>
          </div>
          <p className="text-[12px] sm:text-[16px] text-[#CDD0D5] my-[64px]">Stecs is a Financial Technology company duly registered with the Corporate Affairs Commission, Nigeria (RC: 1873053) with our office at 12F Tola Adewumi Street, TAAT Estate, Maryland, Lagos, Nigeria. Banking services provided in partnership with Providus Bank Limited. It's savings and Investments scheme is duly registered under the Co-operative Societies Laws of Lagos State with registration number LSCS 18966 as Stecs (Alausa) Multipurpose Cooperative Society Limited. Other activities and partnerships are in line with the best ethical practices and the laws of the Federal Republic of Nigeria. Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary.</p>
          <div className="flex justify-between flex-wrap gap-[28px] items-center">
            <div className="flex items-center gap-[20px]">
              <ArrowUp />
              <span className="text-[#fff] opacity-50"> © {new Date().getFullYear()} Stecs Ltd. All Rights Reserved</span>
            </div>

            <div className="flex items-center gap-[8px]">
              <InstagramIcon /> <LinkedinIcon /> <FacebookIcon /> <XIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;