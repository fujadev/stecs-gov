import ArrowRight from "@/assets/icons/ArrowRight"
import LightBulb from "@/assets/icons/Lightbulb";
import { ReactNode } from "react";
import WifiIcon from "@/assets/icons/Wifi";
import LincenceBill from "@/assets/icons/LincenceBill";
import DonationIcon from "@/assets/icons/DonationIcon";


const payments = [
  {
    title: "Electricity & Utility",
    desc: "Monthly salary from Apex Finance",
    icon: <LightBulb />
  },
  {
    title: "Mobile & Internet Data",
    desc: "Payment from stock investments.",
    icon: <WifiIcon />
  },
  {
    title: "Licenses & Bills",
    desc: "Payment from stock investments.",
    icon: <LincenceBill />
  },
  {
    title: "Donations & Gifts",
    desc: "Refund of Order No #124235",
    icon: <DonationIcon />
  }
]

const PaymentRow = (): ReactNode => (
  <>
    {payments.map(({ desc, icon, title }) =>
      <div className="flex gap-[10px] items-center py-[6.44px]">
        {icon}
        <div className="flex flex-col mr-auto">
          <span className="text-main-900 text-[14px]">{title}</span>
          <span className="text-sub-500 text-[12px]">{desc}</span>
        </div>
        <ArrowRight />
      </div>
    )}
  </>
)

export default PaymentRow