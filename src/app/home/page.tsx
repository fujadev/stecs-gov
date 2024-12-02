'use client';

import type { ReactNode } from 'react';
import AppHeader from '@/components/Header';
import HeroSection from '@/components/Hero';
import ChangeTheWayYouBank from '@/components/ChangeTheWayYouBank';
import FeaturesSection from '@/components/Features';
import VaultSavingsSection from '@/components/VaultSavings';
import InvestmentSection from '@/components/InvestmentSection';
import BankingReinvented from '@/components/BankingReinvented';
import StecsGlobal from '@/components/StecsGlobal';
import AppFooter from '@/components/AppFooter';


const Home = (): ReactNode => (
  <main>
    <div className='mb-[28px] max-sm:p-[0px] p-[20px] pb-[0]'>
      <div className="flex flex-col max-w-[1440px] gap-[254px] max-lg:gap-[100px] max-sm:gap-[40px] rounded-[20px]  bg-[url('../assets/images/shadergradient1.gif')] pt-[34px] mx-auto">
        <AppHeader />
        <HeroSection />
      </div>
    </div>
    <ChangeTheWayYouBank />
    <FeaturesSection />
    <VaultSavingsSection />
    <InvestmentSection />
    <BankingReinvented />
    <StecsGlobal />
    <AppFooter showFeedBackSection />
  </main>
);

export default Home;