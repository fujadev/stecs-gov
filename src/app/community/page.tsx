'use client';

import AppHeader from "@/components/Header";
import Image from "next/image";
import groupBuilding from '@/assets/images/groupBuilding.webp'
import BankingReinvented from "@/components/BankingReinvented";
import StecsGlobal from "@/components/StecsGlobal";
import AppFooter from "@/components/AppFooter";
import FeedbackSection from "@/components/Feedback";
import AppButton from "@/components/Common/AppButton";
import Link from "next/link";


const About = () => {
  return (
    <main>
      <div className="pt-[25px] pb-[25px] md:pb-[0] bg-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] md:drop-shadow-none">
        <AppHeader />
      </div>

      <h2 className="wrapper-pad mt-[31px] sm:mt-[102px] text-center text-[31px] sm:text-[72px] font-bold leading-[43px] sm:leading-[87px] text-main-900 max-w-[1044px] mx-auto sm:tracking-[-2px]">We’re building the future of ethical finance education</h2>


      <div className="max-w-[1232px] mx-auto rounded-[20px] overflow-hidden w-fit mt-[35px] lg:mt-[96px]">
        <Image src={groupBuilding} alt="Group building" />
      </div>

      <section className="wrapper-pad text-center md:text-left max-w-[792px] mx-auto mt-[55px] flex justify-center flex-col">
        <p className="text-[18px] md:text-[22px] leading-[32px] text-sub-500 mb-[24px]">Are you a financially savvy Muslim looking for a community where you can share knowledge and grow? Look no further!</p>
        <p className="text-[18px] md:text-[22px] leading-[32px] text-sub-500 mb-[24px]">Stecs Learning Community is a growing community dedicated to empowering  Muslims with the tools and knowledge they need to make Shariah-compliant financial decisions. Our community offers educational content,  professional advice, valuable resources, and online workshops/webinars  tailored to help you navigate your financial journey.</p>
        <p className="text-[18px] md:text-[22px] leading-[32px] text-sub-500 mb-[24px]">Whether you're just starting or seeking to enhance your financial literacy, our welcoming community is here to support you. With Stecs Learning  Community, you can achieve your financial goals while staying true to  Islamic principles.</p>
        <p className="text-[18px] md:text-[22px] leading-[32px] text-sub-500 mb-[24px]">Become a member today and take charge of your financial future in a halal way business.</p>
        <Link className="mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSf3v_5_IXXNHD1gWSAVeuZ_hYzfyEyiGbDtRsz2qubHIGbHUQ/viewform" target="_blank">
          <AppButton fullWidth={false} mih={48} classNames={{ root: "mt-[27px] md:mt-[51px] w-[212px] mx-auto py-[14px] px-[16px] rounded-[10px]" }}>
            <span className="text-[#fff] text-[14px] font-medium">Join Us today</span>
          </AppButton>
        </Link>
      </section>

      <BankingReinvented />
      <StecsGlobal />
      <FeedbackSection className="rounded-tr-[20px] rounded-tl-[20px] mb-[69px]" />
      <AppFooter />
    </main>
  );
}

export default About;