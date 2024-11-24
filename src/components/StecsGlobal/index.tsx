import StoreButton from "../Common/StoreButton";
import StecsGlobalSVG from '@/assets/icons/StecsGlobal';

const StecsGlobal = () => {
  return (
    <section className="wrapper-pad flex flex-col sm:flex-row items-center justify-center sm:justify-around max-w-[1216px] w-full mx-auto py-[70px] gap-y-[118px]">
      <div className="max-w-[468px] w-full text-center sm:text-left">
        <h2 className="font-bold text-[32px] leading-[40px] text-[#000] mb-[24px]">Grow Together with STECS: Share, Save, and Earn!</h2>
        <p className="text-sub-500 text-[16px] leading-[24px]">Invite your friends and family to STECS and get rewarded. Share your unique referral link, and once your referrals have active, funded accounts, you both earn rewards. Start spreading the love and watch your rewards grow!</p>
        <StoreButton theme="dark" />
      </div>
      <StecsGlobalSVG />
    </section>
  );
}

export default StecsGlobal;