'use client';

import AppHeader from "@/components/Header";
import Image from "next/image";
import businesswoman from '@/assets/images/businesswoman1.webp'
import businesswomanM from '@/assets/images/businesswoman1M.webp'
import image1 from '@/assets/images/image6.png'
import ArrowRightLine from "@/assets/icons/ArrowRightLine";
import ValueCard from "@/components/ValueCard";
import SimplicityIcon from "@/assets/icons/SimplicityIcon";
import TransparencyIcon from "@/assets/icons/TransparancyIcon";
import EducationIcon from "@/assets/icons/EducationIcon";
import ControlIcon from "@/assets/icons/ControlIcon";
import SactisfactionIcon from "@/assets/icons/SactisfactionIcon";
import BankingReinvented from "@/components/BankingReinvented";
import StecsGlobal from "@/components/StecsGlobal";
import AppFooter from "@/components/AppFooter";
import FeedbackSection from "@/components/Feedback";
import AppButton from "@/components/Common/AppButton";
import { useAppDispatch } from "@/config/api/config/store";
import { setStoreModal } from "@/config/api/auth/slice";


const values = [
  {
    title: "Simplicity",
    desc: "A platform that is easy-to-use and accessible to everyone.",
    svg: <SimplicityIcon />,
  },
  {
    title: "Transparency",
    desc: "No hidden charges and fees. Users know where their money goes.",
    svg: <TransparencyIcon />,
  },
  {
    title: "Education",
    desc: "Educating our users towards helping them make informed decision about their money.",
    svg: <EducationIcon />,
  },
  {
    title: "Control",
    desc: "A platform designed to give you the tools and information to take charge of your money.",
    svg: <ControlIcon />,
  },
  {
    title: "Satisfaction",
    desc: "Delivering an exceptional experience that meets and exceeds your expectations.",
    svg: <SactisfactionIcon />,
  },
]


const About = () => {
  const dispatch = useAppDispatch()
  return (
    <main>
      <div className="pt-[25px] pb-[25px] md:pb-[0] bg-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] md:drop-shadow-none">
        <AppHeader />
      </div>

      <section className="wrapper-pad flex items-center gap-[24px] max-lg:flex-col justify-between max-w-[1216px] mx-auto mt-[102px] max-sm:mt-[31px]">
        <h2 className="max-lg:text-center max-sm:text-[43px] text-[72px] font-bold max-sm:leading-[45px] leading-[87px] text-main-900 max-w-[577px] sm:tracking-[-2px]">The one money app for an ethical lifestyle</h2>
        <p className="max-lg:text-center text-[18px] leading-[24px] text-main-900 max-w-[488px]">
          Stecs is an ethical mobile money app that lets you manage all your finances in just one app. Swift account opening process, savings and investment options, money management tools are some of the things you stand to gain by opening an account with us.
        </p>
      </section>
      <div className="wrapper-pad max-w-[1232px] mx-auto overflow-hidden w-fit mt-[96px]">
        <Image src={businesswoman} className="max-sm:hidden rounded-[20px]" alt="" />
        <Image src={businesswomanM} className="sm:hidden rounded-[5px]" alt="" />
      </div>

      <section className="wrapper-pad gap-[16px] flex max-md:flex-col max-md:text-center items-center justify-around max-w-[1216px] w-full mx-auto py-[70px]">
        <div className="max-w-[468px] w-full">
          <h2 className="max-md:text-center font-bold text-[32px] leading-[40px] text-[#000] mb-[24px]">We’re on a mission to remove your ethical financial worries</h2>
          <p className="max-md:text-center text-sub-500 text-[16px] leading-[24px]">From budgeting and saving to spending and investing, our app offers everything you need to take control of your money and reach your financial goals. Say goodbye to juggling multiple apps and hello to simplicity and convenience with our all-in-one money app that takes care of all your ethical financial worries.</p>
          <button onClick={() => dispatch(setStoreModal(true))} className="max-md:justify-center mt-[25px] flex items-center gap-[4px] max-md:mx-auto">
            <span>Download app</span>
            <ArrowRightLine fill="#0A0D14" />
          </button>

        </div>
        <div className="rounded-[20px] px-[13px] pt-[30px] bg-[#EBF2FF] relative">
          <Image src={image1} className="max-w-[414px] w-full" alt="Stecs Features" />
          <div className="rounded-b-[20px] absolute left-[0] bottom-[0] w-full h-[143px] bg-gradient-to-b from-transparent to-white"></div>
        </div>

      </section>

      <section className="wrapper-pad max-w-[1216px] mx-auto">
        <h2 className="mx-auto max-w-[275px] w-full text-[#000] text-[32px] font-bold mb-[12px]">What we stand for</h2>
        <p className="mx-auto text-center max-w-[446px] w-full text-sub-500 text-[16px]">Our values define the Stecs culture, who we are, and what we do every day</p>

        <div className="max-sm:flex-col mt-[59px] flex flex-wrap gap-y-[47px] gap-x-[24px] ">
          {values.map(val => <div className="flex-[1_1_32%]"><ValueCard title={val.title} desc={val.desc} svg={val.svg} key={val.title} /></div>)}
        </div>
      </section>

      <BankingReinvented />
      <StecsGlobal />
      <FeedbackSection className="rounded-tr-[20px] rounded-tl-[20px] mb-[69px]" />
      <AppFooter />
    </main>
  );
}

export default About;
