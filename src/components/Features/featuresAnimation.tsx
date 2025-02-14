import { Tabs } from "@mantine/core";
import FeaturesTabPanel from "../FeaturesTabPanel";
import { useEffect, useLayoutEffect, useState } from "react";
import AppButton from "../Common/AppButton";
import gsap from 'gsap';

import image1 from '@/assets/images/image6.png'
import RefundIcon from "@/assets/icons/RefundIcon";
import PaymentRow from "./PaymentRow";
import Image from "next/image";

const FeaturesSection2 = () => {

  const tabs = [
    {
      title: "Send and Receive Money",
      // content: <FeaturesTabPanel
      // // words={['SEND', 'RECEIVE', 'MANAGE']}
      // // title="Your Personal and Business Financial Hub"
      // // subText="Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs."
      // // btnText="Open An Account"
      // />,
      value: "sendAndReceive",
    },
    {
      title: "Pay Bills with Ease",
      // content: <FeaturesTabPanel />,
      value: "payBills",
    },
    {
      title: "Track Your Expenses with Insights",
      // content: <FeaturesTabPanel />,
      value: "insights",
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  const changeTab = (idx: number) => {
    const wrapper = document.querySelector(".content_wrapper")
    const tabContent: any = gsap.utils.toArray('.tab-content ')
    if (idx === activeIdx) return
    setActiveIdx(idx)
    const descs = gsap.utils.toArray('.f_desc')
    const descTl = gsap.timeline()
    const contentTl = gsap.timeline()

    const movement = activeIdx < idx
    const y = 45

    descTl.to(descs[activeIdx] as any, {
      duration: 0.9,
      opacity: 0,
      y: movement ? -y : y,
    }).fromTo(descs[idx] as any, {
      y: movement ? y : -y,
    }, {
      delay: -0.6,
      duration: 0.9,
      opacity: 1,
      y: 0,
    })

    const wrapperBounding = wrapper?.getBoundingClientRect()
    const tabContentActiveBounding = tabContent[activeIdx]?.getBoundingClientRect()
    const tabContentNewBounding = tabContent[idx]?.getBoundingClientRect()

    // const rightMovement = (tabContentNewBounding.left) - wrapperBounding!.left
    // const leftMovement = (tabContentNewBounding.left + tabContentNewBounding.width) - wrapperBounding!.left




    contentTl.to(tabContent[0] as any, {
      marginLeft: -tabContent[idx]?.offsetLeft,
      // marginLeft: "-100%",
      // x: "-100%",
      duration: 1
    })
    // contentTl.to(movement ? tabContent[activeIdx] : tabContent[activeIdx - 1] as any, {
    //   marginLeft: movement ? -tabContent[activeIdx]?.getBoundingClientRect().width : 0,
    //   // marginLeft: "-100%",
    //   // x: "-100%",
    //   duration: 1
    // })
    // .to(tabContent[idx] as any, {
    //   // x: -tabContent[activeIdx]?.getBoundingClientRect().width,
    //   duration: 1,
    //   delay: -1,
    //   css: {
    //     x: -tabContent[activeIdx]?.getBoundingClientRect().width,
    //     minWidth: "440px !important",
    //   }
    // })




  }
  return (
    <section className="wrapper-pad pt-[81px] max-w-[1253px] mx-auto">

      <Tabs color="#375DFB" defaultValue={tabs[0].value}>
        <Tabs.List className="w-fit mx-auto mb-[51px]">
          {tabs.map((val, idx) =>
            <Tabs.Tab onClick={() => changeTab(idx)} value={val.value} className="text-[18px] textm-main-900 font-regular pb-[14px] border-b-[3px]" >
              {val.title}
            </Tabs.Tab>
          )}
        </Tabs.List>
      </Tabs>

      <div className="flex gap-[51px] min-h-[500px]">
        <div className="max-w-[353px] w-[100%] relative flex items-center">
          <div className="f_desc absolute" >
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="text-[12px] text-main-900">SEND</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">1</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">MANAGE</span>
            </div>

            <h2 className="mb-[24px] font-bold text-[32px] text-black">Your Personal and Business Financial Hub</h2>
            <p className="text-[16px] text-sub-500 leading-[24px] mb-[24px]">Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.</p>
            <AppButton fullWidth={false} mih={48} classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}>
              <span className="text-[#fff] text-[14px] font-medium">Open An Account</span>
            </AppButton>
          </div>
          <div className="f_desc absolute" style={{ opacity: 0 }}>
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="text-[12px] text-main-900">SEND</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">2</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">MANAGE</span>
            </div>

            <h2 className="mb-[24px] font-bold text-[32px] text-black">Your Personal and Business Financial Hub</h2>
            <p className="text-[16px] text-sub-500 leading-[24px] mb-[24px]">Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.</p>
            <AppButton fullWidth={false} mih={48} classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}>
              <span className="text-[#fff] text-[14px] font-medium">Open An Account</span>
            </AppButton>
          </div>
          <div className="f_desc absolute" style={{ opacity: 0 }}>
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="text-[12px] text-main-900">SEND</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">3</span>
              <span className="w-[4px] h-[4px] bg-main-900" />
              <span className="text-[12px] text-main-900">MANAGE</span>
            </div>

            <h2 className="mb-[24px] font-bold text-[32px] text-black">Your Personal and Business Financial Hub</h2>
            <p className="text-[16px] text-sub-500 leading-[24px] mb-[24px]">Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.</p>
            <AppButton fullWidth={false} mih={48} classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}>
              <span className="text-[#fff] text-[14px] font-medium">Open An Account</span>
            </AppButton>
          </div>
        </div>


        <div className="content_wrapper gap-[51px] flex items-center overflow-hidden relative">
          <div className="min-w-[350px] tab-content rounded-[20px] px-[13px] pt-[30px] bg-[#FDEDF0] relative">
            <Image src={image1} alt="Stecs Features" />
            <div className="rounded-b-[20px] absolute left-[0] bottom-[0] w-full h-[143px] bg-gradient-to-b from-transparent to-white"></div>
          </div>

          <div className="min-w-[350px] p-[33px] tab-content rounded-[20px] bg-neutral-100">
            <div className="p-[12px] bg-white rounded-[13px] max-w-[283px] border-[1px] border-[#E2E4E9]">
              <div className="flex items-center gap-[7px] mb-[16px]">
                <RefundIcon />
                <span className="text-[16px] text-main-900">Payments</span>
                <span className="ml-auto border-[1px] border-[#E2E4E9] p-[4.8px] rounded-[6px]">See All</span>
              </div>
              <div className="flex flex-col gap-[6px]">
                <PaymentRow />
              </div>
            </div>
          </div>

          <div className="min-w-[350px] p-[33px] tab-content rounded-[20px] bg-neutral-100">
            <div className="p-[12px] bg-white rounded-[13px] max-w-[283px] border-[1px] border-[#E2E4E9]">
              <div className="flex items-center gap-[7px] mb-[16px]">
                <RefundIcon />
                <span className="text-[16px] text-main-900">Payments</span>
                <span className="ml-auto border-[1px] border-[#E2E4E9] p-[4.8px] rounded-[6px]">See All</span>
              </div>
              <div className="flex flex-col gap-[6px]">
                <PaymentRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection2;



