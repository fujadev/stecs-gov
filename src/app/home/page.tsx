'use client';

import type { ReactNode } from 'react';
import AppHeader from '@/components/Header';
import HeroSection from '@/components/Hero';
import Register from '../UploadCSV/page';
import WalletSummary from '@/components/WalletSummary';
import Total from '@/components/Total';
import ButtonPill from '@/components/ButtonPill';
import checklist from "../../assets/images/checklist.png";
import PaymentSummary from '@/components/PaymentSummary';
import CustomModal from '@/components/Modals/CustomModal';
import CancelCircle from '@/assets/icons/CancelCircle';
import UploadCSV from '../UploadCSV/page';



const Home = (): ReactNode => (
  <main>
    {/* <AppHeader /> */}
    {/* <HeroSection /> */}
    {/* <WalletSummary /> */}
    {/* <ButtonPill /> */}
    {/* <PaymentSummary /> */}
    {/* Invite modal */}
    {/* <CustomModal
      variant="invite"
      image={checklist}
      title="Invite Successful"
      description="Authorizer has been successfully invited"
      buttonText="Back Home"
    /> */}

    {/* <CustomModal
      variant="releasePayment"
      title="Release Payment"
      description="Do you really want to release the payment?"
      cancelText="Cancet"
      releaseText='Release Paymrnt'

    /> */}

    {/* <CustomModal variant="status"/> */}
<UploadCSV />
  </main>
);

export default Home;