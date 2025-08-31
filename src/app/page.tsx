'use client';

import type { ReactNode } from 'react';
import AppHeader from '@/components/Header';
import HeroSection from '@/components/Login';
import Register from '../uploadcsv/page';
import WalletSummary from '@/components/WalletSummary';
import Total from '@/components/Total';
import ButtonPill from '@/components/ButtonPill';
import PaymentSummary from '@/components/PaymentSummary';
import CustomModal from '@/components/Modals/inviteAuthorizer';
import CancelCircle from '@/assets/icons/CancelCircle';
import UploadCSV from '../uploadcsv/page';
import Login from '@/components/Login';

const Home = (): ReactNode => (
	<main>
		<Login />
	</main>
);

export default Home;
