import { Tabs } from "@mantine/core";
import FeaturesTabPanel from "../FeaturesTabPanel";
import RefundIcon from "@/assets/icons/RefundIcon";
import PaymentRow from "./PaymentRow";
import Image from "next/image";
import image1 from '@/assets/images/mobileHomeMock.webp'
import TabDescription from "../FeaturesTabPanel/TabDescription";
import PieChartLine from "@/assets/icons/PieChartLine";
import { useAppDispatch } from "@/config/api/config/store";
import { setStoreModal } from "@/config/api/auth/slice";
import GuageBar from "@/assets/icons/GaugeBar";
import Vector1 from "@/assets/icons/Vector1";
import horizontalBarChart from "@/assets/images/horizontalBarChart2.webp";


const FeaturesSection = () => {
  const dispatch = useAppDispatch()

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
        btnAction: () => dispatch(setStoreModal(true)),
        asideContent:
          <div className="max-md:mx-auto rounded-[20px] px-[13px] pt-[30px] h-full w-full flex justify-center items-center bg-[#FDEDF0] max-w-[440px] min-h-[465px]">
            <Image src={image1} className="max-w-[295px]" alt="Stecs Features" />
          </div>
      }
    },
    {
      title: "Pay Bills with Ease",
      component: FeaturesTabPanel,
      value: "payBills",
      props: {
        words: ['Pay', 'MANAGE', 'SIMPLIFY'],
        title: "Simplify Your Bills with STECS",
        subText: "From airtime to electricity, STECS makes bill payments simple. Take care of your essentials like airtime, data, cable, and electricity, all from one app.",
        btnText: "Pay Bills",
        btnAction: () => dispatch(setStoreModal(true)),
        asideContent:
          <>
            <div className="max-md:p-[12px] max-md:mx-auto p-[33px] rounded-[20px] bg-[#F9FAE0] w-full flex justify-center items-center max-w-[440px] min-h-[465px]">
              <div className="p-[12px] bg-white rounded-[13px] border-[1px] border-[#E2E4E9] max-w-[285px]">
                <div className="flex items-center gap-[7px] mb-[16px]">
                  <RefundIcon />
                  <span className="text-[16px] text-main-900">Payments</span>
                  <span className="ml-auto border-[1px] border-[#E2E4E9] p-[4.8px] rounded-[6px]">See All</span>
                </div>
                <div className="flex flex-col gap-[6px] w-full">
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
        words: ['FINANCIAL', 'CONTROL', 'INSIGHTS'],
        title: "Insights: Your Financial Compass",
        subText: "Stay in control of your finances with the Insights feature. Monitor your spending habits, set budgets, and make informed financial decisions with ease.",
        btnText: "Start Tracking Now",
        btnAction: () => dispatch(setStoreModal(true)),
        asideContent:
          <>
            <div className=" max-md:mx-auto max-md:p-[12px] p-[33px] rounded-[20px] bg-[#DAF2FB] w-full flex justify-center items-center max-w-[440px] min-h-[465px]">
              <div className="p-[12px] bg-white rounded-[13px] border-[1px] border-[#E2E4E9] max-w-[285px] w-full">
                <div className="flex items-center gap-[7px] mb-[16px]">
                  <PieChartLine />
                  <span className="text-[16px] text-main-900">Insights</span>
                  <span className="ml-auto border-[1px] border-[#E2E4E9] p-[4.8px] rounded-[6px]">OCT 2024</span>
                </div>
                <div className="relative items-center flex flex-col gap-[6px] justify-center border-b pb-[10px] border-[#E2E4E9]">
                  <GuageBar />
                  <div className="absolute bottom-[10px] flex flex-col items-center">
                    <span className="text-[11px] text-sub-500 font-medium">SPENT SO FAR</span>
                    <span className="text-[19.23px] text-main-900 font-medium">₦580,000.00</span>
                  </div>
                </div>

                <div>
                  <div className="px-[11px] mt-[10px] pb-[11px] rounded-[11px] border border-[#E2E4E9]">
                    <div className="flex gap-[6px] items-center py-[12px] border-b border-[#E2E4E9]">
                      <Vector1 />
                      <span>Where your money went</span>
                    </div>
                    <Image src={horizontalBarChart} alt="Bar chart" />
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    },
  ]
  return (
    <section className="wrapper-pad pt-[81px] max-w-[1253px] mx-auto">

      <Tabs color="#375DFB" defaultValue={tabs[0].value}>

        <div className="max-md:block hidden mb-[66px]">
          {tabs.map(val =>
            <Tabs.Panel value={val.value}>
              <TabDescription words={val.props.words} subText={val.props.subText} title={val.props.title} btnText={val.props.btnText} btnAction={val.props.btnAction} />
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










