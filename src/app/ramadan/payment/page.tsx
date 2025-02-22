'use client';

import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/Header';
import TransactionSuccess from '@/components/TransactionSucess';
import TransferDetails from '@/components/TransferDetails';

const DonationForm = dynamic(
  () => import('../../../components/DonationForm'), // Adjust the path
  { ssr: false } // Disable server-side rendering for this component
);

const Payment = () => {
  const [isTransactionDetailsOpen, setIsTransactionDetailsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  return (
    <Suspense>
      <div className="">
        <div className="md:p-md ">
          <div className="relative  min-h-screen rounded-[20px] pb-[24px] pt-[20px]">
            <div>
              <AppHeader />
              <div className="flex flex-col   md:flex-row px-[1.5rem] md:px-[4rem] gap-x-xxl mt-[28px]">
                <div className="md:w-1/2 xl:w-3/5 mt-[8px] md:mt-0">
                  <h1 className="text-[18px] sm:text-[30px] font-medium underline md:no-underline ">
                    RAMADAN CHARITY DRIVE 2024
                  </h1>
                  <div className=" text-[16px] sm:text-[22px]">
                    <p className="my-[20px]">
                      Allah the Exalted says, “Spend in charity , O son of Adam,
                      and I shall spend on you.”
                    </p>
                    <p className="italic"> - Sahih Bukhari 5352</p>
                    <p className="font-semibold not-italic my-[20px]">
                      Thank You for Supporting Our Ramadan Drive 1445/2024
                    </p>
                    <p className="my-[20px]">
                      Assalamu alaykum wa rahmatullahi wa barakatuh,
                    </p>
                    <p>
                      We are deeply grateful for your incredible support during
                      last year’s Ramadan Charity Drive. Together, we made a
                      significant impact by spreading love, providing comfort, and
                      fulfilling the obligations of giving during this blessed
                      month.
                    </p>
                    <p className="my-[20px]">
                      For a detailed breakdown of the campaign’s impact, we invite
                      you to read the full pdf report here: <Link href='https://docs.google.com/document/d/1JN72VrBa0hyI88If-AS0OWLCcyXcgl5qtPePodMRX-g/edit?tab=t.0' target="_blank" className='underline'>Stecs Ramadan Charity
                      ‘24</Link>
                    </p>
                    <p>
                      Jazakum Allahu Khairan for being a part of this noble cause.
                      We look forward to your continued support in making an even
                      greater impact this year, in sha Allah.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 xl:w-2/5">
                  <div className="mt-[68px]">
                    {!isTransactionDetailsOpen && !isSuccessOpen ? (
                      <DonationForm
                        setIsTransactionDetailsOpen={setIsTransactionDetailsOpen}
                        setIsSuccessOpen={setIsSuccessOpen}
                        onAmountChange={setAmount}
                      />
                    ): null}
                    {isTransactionDetailsOpen ? (
                      <TransferDetails amount={amount} />
                    ): null}
                    {isSuccessOpen ? (
                      <TransactionSuccess onClose={() => router.push('/ramadan')} />
                    ): null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </Suspense>
  );
};

export default Payment;
