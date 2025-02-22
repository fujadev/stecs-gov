'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FreeFood from '../../assets/images/free-food.png';
import RamadanDriveBg from '../../assets/images/header-card-image2.png';
import ArrowRightLine from '@/assets/icons/ArrowRightLine';
import AppFooter from '@/components/AppFooter';
import AppButton from '@/components/Common/AppButton';
import StoreButton from '@/components/Common/StoreButton';
import AppHeader from '@/components/Header';
import HowToContribute from '@/components/HowToContribute';
import { useDonationQuery } from '@/config/api/donation/slice';

const RamadanDriveIntro = dynamic(() => import('../../components/RamadanDriveIntro'), {
  ssr: false,
});

const Ramadan = () => {
  const { data } = useDonationQuery();
  const router = useRouter();

  return (
    <div className="">
      <div className="px-sm py-md md:p-md ">
        <div className="relative  min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../assets/images/ramadan-drive-bg-mobile.png')]  md:bg-[url('../assets/images/ramadan-drive-bg.png')] rounded-[5px] md:rounded-[20px] pb-[24px] pt-[20px]">
          <div className="absolute inset-0 "></div>
          <div>
            <AppHeader />
            <div className="flex flex-col md:items-center px-[20px] mt-[80px] md:mt-[0px] md:justify-between md:flex-row md:pl-[48px] md:pr-xl  gap-x-xl ">
              <div className=" md/i:max-w-[50%] xl:max-w-[62%]  text-white text-center md:text-start">
                <h1 className="text-[28px] leading-[33px] sm:text-[36px] sm:leading-[41px] font-bold md:leading-[5rem] md:text-[56px] xl:text-[72px] xl:leading-[6rem]">
                  Join Our 2025 Ramadan Charity Drive
                </h1>
                <p className="text-[14px] md:text-h2 font-medium mt-md mb-[20px]">
                  Every Ramadan, Stecs brings communities together to give back
                  and uplift those in need. Join us this Ramadan to make a
                  difference through generous contributions and collective
                  compassion.
                </p>
                <AppButton
                  fullWidth={false}
                  onClick={() => router.push('/ramadan/payment')}
                  mih={52}
                  classNames={{
                    root: 'py-[14px] px-[16px] rounded-[10px] w-[101px]',
                  }}
                >
                  <span className="text-[#fff] text-[14px] font-medium flex items-center gap-x-2">
                    Donate <ArrowRightLine  />
                  </span>
                </AppButton>
              </div>
              <div className="bg-white px-[12px] pt-[12px] pb-xl rounded-[45px] drop-shadow-lg md:max-w-[50%]  xl:max-w-[32rem] w-full mt-[48px]">
                {/* Card Image */}
                <div className="relative w-full h-[364px] rounded-lg overflow-hidden">
                  <Image
                    src={RamadanDriveBg}
                    alt="Charity Card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-sm">
                  <RamadanDriveIntro
                    onClick={() => router.push('/ramadan/payment')}
                    raisedAmount={data?.amountRaised}
                    goalAmount={data?.target}
                    progressWidth={data?.percentageAchieved}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <h4 className="text-[18px] md:text-[32px] italic my-[30px] text-center">
            "Those who in charity spend of their goods by night and by day, in
            secret and in public, have their reward with their Lord: on them
            shall be no fear, nor shall they grieve" (2:274)
          </h4>
          <div>
            <HowToContribute />
          </div>
        </div>
        <div className="w-[90%] mb-[100px] px-sm md:px-[16px] mx-auto my-[36px] md:pl-[45px] md:pr-[16px] py-[20px] md:border border-[#EDF2F7] rounded-sm md:rounded-[38px]">
          <div className="flex flex-col items-center justify-between md:flex-row gap-x-xl">
            <div className="md:w-1/2">
              <RamadanDriveIntro
                quoteSize="22px"
                descSize="24px"
                titleSize="57px"
                lineHeight="62px"
                quoteLineHeight="27px"
                buttonWidth="60%"
                buttonMargin="40px"
                raisedAmount={data?.amountRaised}
                goalAmount={data?.target}
                progressWidth={data?.percentageAchieved}
                onClick={() => router.push('/ramadan/payment')}
              />
            </div>

            <div className="md:w-[510px] md:h-[570px] mt-[40px] md:mt-0">
              <Image
                src={FreeFood}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative justify-center flex flex-col items-center min-h-screen  md:min-h-[70vh] bg-cover bg-center bg-no-repeat bg-[url('../assets/images/ellipse-mobile.png')] md:bg-[url('../assets/images/ellipse.png')] rounded-[20px] pb-[24px] pt-[0px]">
          <div className="w-[90%] sm:w-4/5 md:w-1/2 lg:w-2/5 mx-auto">
            <div className="text-center ">
              <h1 className=" text-[16px]  sm:text-[28px] md:text-[36px] font-bold leading-[30px] md:leading-[45px]">
                Grow Together with STECS: <br className=" hidden" /> Share,
                Save, and Earn!
              </h1>
              <p className="text-[16px] sm:text-[18px] text-[#525866] mt-lg ">
                Invite your friends and family to STECS and get rewarded.
                Share your unique referral link, and once your referrals have
                active, funded accounts, you both earn rewards. Start spreading
                the love and watch your rewards grow!
              </p>
            </div>
            <div className="flex justify-center">
              <StoreButton
                theme="dark"
                className="max-lg:mx-auto max-lg:w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <AppFooter showFeedBackSection />
    </div>
  );
};

export default Ramadan;
