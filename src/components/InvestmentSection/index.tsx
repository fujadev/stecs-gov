import BlueDot from "@/assets/icons/BlueDot";
import PieChartCircle from "@/assets/icons/PieChart";
import PieChartLine from "@/assets/icons/PieChartLine";
import StoreButton from "../Common/StoreButton";

const InvestmentSection = () => {
  return (
    <section className="bg-[#F6F8FA] max-md:py-[29px] py-[106px]">
      <div className="wrapper-pad max-md:flex-col max-md:gap-[38px] flex max-w-[1160px] w-full mx-auto gap-[14px] max-md:justify-center justify-evenly items-center">
        <div className="bg-[#fff] rounded-[16px] border-1 border-[#E2E4E9] p-[16px] max-w-[352px] w-full">
          <div className="flex gap-[8px] pb-[16px] border-b-1 border-[#E2E4E9]">
            <PieChartLine />
            <span className="text-[16px] text-main-900">Portfolio</span>
          </div>
          <div className="flex items-center justify-center py-[16px] relative">
            <PieChartCircle />
            <div className="absolute flex flex-col gap-[4px] items-center">
              <span className="text-[14px] text-sub-500">Global Stocks</span>
              <span className="text-[28] text-main-900 font-bold">53.3%</span>
            </div>
          </div>
          <div className="pt-[16px] border-t-1 border-[#E2E4E9]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <BlueDot />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] text-sub-500">Global Stocks</span>
                  <span className="text-main-900 text-[14px]">$900.00</span>
                </div>
              </div>
              <span className="text-[16px] text-[#01A539]">+23.4%</span>
            </div>
          </div>
        </div>

        <div className="max-md:text-center flex flex-col max-md:items-center max-w-[468px] w-full">
          <h2 className="max-w-[366px] max-sm:text-[19px] max-sm:leading-[24px] text-[32px] font-bold leading-[40px] mb-[24px]">Ethical Investments with Peace of Mind</h2>
          <p className="text-[16px] leading-[24px]">STECS Vault ensures that all your savings are invested in low-risk, Shari'ah-compliant vehicles like Sukuks, Ijarah, and Murabahah contracts. Your money grows responsibly, with capital preservation at the core of everything we do.</p>
          <StoreButton theme="dark" />
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;