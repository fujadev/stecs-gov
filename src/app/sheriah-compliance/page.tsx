'use client';

import sheriahCertificate from '@/assets/images/sheriahCertificate.jpg'
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/Header';
import Image from 'next/image';
const SheriahCompliance = () => {
  return (
    <main>
      <div className="pt-[25px] pb-[25px] md:pb-[0] bg-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] md:drop-shadow-none">
        <AppHeader />
      </div>
      <div className='mx-auto w-fit mb-[32px] mt-[30px]'>
        <Image src={sheriahCertificate} alt='Sheriah Compliance Certificate' />
      </div>
      <AppFooter />
    </main>
  );
}

export default SheriahCompliance;