import { Tabs } from "@mantine/core";
import FeaturesTabPanel from "../FeaturesTabPanel";
import RefundIcon from "@/assets/icons/RefundIcon";
import PaymentRow from "./PaymentRow";
import Image from "next/image";
import image1 from '@/assets/images/image6.png'
import TabDescription from "../FeaturesTabPanel/TabDescription";


const FeaturesSection = () => {

  const tabs = [
    {
      title: "Send and Receive Money",
      component: FeaturesTabPanel,
      value: "sendAndReceive",
      props: {
        words: ['SEND', 'RECEIVE', 'MANAGE'],
        title: "Your Personal and Business Financial Hub",
        subText: "Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.",
        btnText: "Open An Account",
        asideContent:
          <>
            <div className="rounded-[20px] px-[13px] pt-[30px] bg-[#FDEDF0] relative">
              <Image src={image1} alt="Stecs Features" />
              <div className="rounded-b-[20px] absolute left-[0] bottom-[0] w-full h-[143px] bg-gradient-to-b from-transparent to-white"></div>
            </div>
            {/* <div className="p-[33px] rounded-[20px] bg-neutral-100 max-w-[350px] w-full">
              <div className="p-[12px] bg-white rounded-[13px] border-[1px] border-[#E2E4E9]">
                <div className="flex items-center gap-[7px] mb-[16px]">
                  <RefundIcon />
                  <span className="text-[16px] text-main-900">Payments</span>
                  <span className="ml-auto border-[1px] border-[#E2E4E9] p-[4.8px] rounded-[6px]">See All</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <PaymentRow />
                </div>
              </div>
            </div> */}
          </>
      }
    },
    {
      title: "Pay Bills with Ease",
      component: FeaturesTabPanel,
      value: "payBills",
      props: {
        words: ['SEND', 'RECEIVE', 'MANAGE'],
        title: "Your Personal and Business Financial Hub",
        subText: "Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.",
        btnText: "Open An Account",
        asideContent:
          <>
            <div className="max-md:p-[12px] p-[33px] rounded-[20px] bg-[#F9FAE0] max-w-[350px] w-full flex justify-center items-center max-w-[440px] min-h-[465px] max-md: min-h-[100%]">
              <div className="p-[12px] bg-white rounded-[13px] border-[1px] border-[#E2E4E9] max-w-[285px]">
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
          </>
      }
    },
    {
      title: "Track Your Expenses with Insights",
      component: FeaturesTabPanel,
      value: "insights",
      props: {
        words: ['SEND', 'RECEIVE', 'MANAGE'],
        title: "Your Personal and Business Financial Hub",
        subText: "Manage your transactions effortlessly with Stecs.Send and receive money seamlessly, whether it’s for personal or business needs.",
        btnText: "Open An Account",
        asideContent: <h3>Loading...</h3>
      }
    },
  ]
  return (
    <section className="wrapper-pad pt-[81px] max-w-[1253px] mx-auto">

      <Tabs color="#375DFB" defaultValue={tabs[0].value}>

        <div className="max-md:block hidden mb-[66px]">
          {tabs.map(val =>
            <Tabs.Panel value={val.value}>
              <TabDescription words={val.props.words} subText={val.props.subText} title={val.props.title} btnText={val.props.btnText} />
            </Tabs.Panel>
          )}
        </div>

        <Tabs.List className="max-w-[723px] mx-auto mb-[51px] flex overflow-auto flex-nowrap">
          {tabs.map(val =>
            <Tabs.Tab value={val.value} className="max-sm:text-[12px] text-[18px] textm-main-900 font-regular pb-[14px] pt-[8px] border-b-[3px]" >
              {val.title}
            </Tabs.Tab>
          )}
        </Tabs.List>

        {tabs.map(val =>
          <Tabs.Panel value={val.value}>
            {<val.component {...val.props} />}
          </Tabs.Panel>
        )}
      </Tabs>
    </section>
  );
}

export default FeaturesSection;










