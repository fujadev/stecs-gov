import Image from "next/image";
import AppButton from "../Common";
import phones from '@/assets/images/phonePairs.png'
import phonesM from '@/assets/images/phonePairsM.png'

const BankingReinvented = () => {
  return (
    <section className="wrapper-pad mt-[45px] sm:mt-[96px] max-w-[1218px] w-full mx-auto">
      <div className="bg-[#20232D] sm:rounded-[20px]">
        <div className="flex flex-col items-center pt-[90px] bg-[url('../assets/images/stecsLogoBg.png')]">
          <h2 className="px-[13px] text-[22px] sm:text-[48px] font-bold text-[#fff] text-center mb-[12px]">Banking, Reinvented for Your Values</h2>
          <p className=" px-[13px] text-[12px] sm:text-[16px] mb-[30px] max-w-[671px] w-full text-[#CDD0D5] text-center">Ethical banking shouldn’t be hard. STECS combines digital banking with personalized, Shariah-compliant investments and wealth management tools, so you can spend, save, invest, and plan—all without compromise.</p>
          <AppButton color="#fff" fullWidth={false} classNames={{ root: "min-h-[43px] sm:min-h-[48px] mb-[20px] py-[14px] px-[12px] sm:px-[16px] rounded-[10px]" }}>
            <span className="text-[#000] text-[12px] sm:text-[14px] font-medium">Open an Account</span>
          </AppButton>
          <Image src={phones} className="hidden sm:block" alt="Stecs Banking Features" />
          <Image src={phonesM} className="sm:hidden" alt="Stecs Banking Features" />
        </div>
      </div>
    </section>
  );
}

export default BankingReinvented;