import heroImg from '@/assets/images/hero_img.webp'
import heroImgM from '@/assets/images/hero_imgM.png'
import mtnLogo from '@/assets/images/mtnLogo.webp'
import horizontalBarChart from '@/assets/images/horizontalBarChart1.webp'
import cash1 from '@/assets/images/cash1.gif'
import chart1 from '@/assets/images/chart1.gif'
import Image from 'next/image';
import StoreButton from '../Common/StoreButton';

const HeroSection = () => {
  return (<section className="wrapper-pad w-[100%] max-w-[1253px] mx-auto flex max-lg:flex-col max-lg:items-center">
    <div className="md:min-w-[539px] max-lg:text-center w-full lg:max-w-[592px] pb-[90px] max-sm:pb-[32px]">
      <h1 className="text-[72px] max-sm:text-[42px] font-bold leading-[84px] max-sm:leading-[49px] tracking-[-2px] mb-[20px] text-main-900">One app, all your ethical financial needs.</h1>
      <p className="text-main-900 text-[18px] max-sm:text-[13px] leading-[24px] max-sm:leading-[19px] font-light">Save for your goals, Earn ethical returns. Manage your wealth. Experience finance that aligns with your values, all in one app.</p>
      <StoreButton theme='dark' className='max-lg:mx-auto max-lg:w-fit' />
    </div>
    <div className='max-h-[693px] h-[100%] w-auto relative max-md:hidden'>
      <div className='p-[20px] rounded-[24px] bg-[#F9F9F7] max-w-[300px] w-full absolute right-[50px] top-[-60px]'>
        <span className='text-[12px] text-sub-500'>TRANSACTION</span>
        <div className='mt-[6px] flex item-center gap-[8px]'>
          <Image src={mtnLogo} alt='MTN' className='max-w-[28px]' />
          <span className='text-[18px] text-sub-500'>MTN Airtime</span>
          <span className='ml-auto'>₦1500.00</span>
        </div>
      </div>
      <Image src={heroImg} className='w-full max-w-[719px]' alt="Stecs Features" />

      <div className='p-[12px] rounded-[20px] bg-[white] max-w-[265px] absolute bottom-[63px] max-lg:left-[0px] left-[-100px]'>
        <div className='flex gap-[5.82px] items-center mb-[4px]'>
          <Image src={cash1} width={16} alt="Stecs Features" />
          <span className='text-[12px] text-main-900'>Savings</span>
        </div>
        <span className='text-[18px] text-main-900'>₦14,480,567.24</span>
        <div className='flex gap-[5.82px] items-center mt-[8px] mb-[11px] pb-[14px] border-b-1 border-[#E2E4E9]'>
          <Image width={16} src={chart1} alt="Stecs Features" />
          <span className='text-[12px] text-main-900'>Expenses</span>
        </div>
        <Image src={horizontalBarChart} alt="Stecs Features" />
      </div>
    </div>
    <Image src={heroImgM} alt="Features" className='md:hidden' />
  </section>
  );
}

export default HeroSection;