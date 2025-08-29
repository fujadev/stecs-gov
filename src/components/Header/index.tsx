'use client';
import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import AppButton from '../Common/AppButton';
import ArrowRightLine from '@/assets/icons/ArrowRightLine';
import Close from '@/assets/icons/Close';
import Hamburger from '@/assets/icons/Hamburger';
import HeaderLogo from '@/assets/icons/HeaderLogo';
import { setStoreModal } from '@/config/api/auth/slice';
import { useAppDispatch } from '@/config/api/config/store';

const navs = [
	// {
	// 	title: 'Home',
	// 	path: '/',
	// },
	// {
	// 	title: 'About Us',
	// 	path: '/about',
	// },
	// {
	// 	title: 'Community',
	// 	path: '/community',
	// },
	// // {
	// //   title: 'Ramadan Drive',
	// //   path: '/ramadan',
	// // },
];

const AppHeader = () => {
	const pathname = usePathname();
	const [isMobileNavActive, setIsMobileNavActivee] = useState<boolean>(false);
	const params = useParams();
	const dispatch = useAppDispatch();

	const toogleMobileNav = (): void => {
		setIsMobileNavActivee(!isMobileNavActive);
	};

	useEffect(() => {
		setIsMobileNavActivee(false);
	}, [params]);

	return (
		<header className="w-full wrapper-pad border-b-[1px] border-[#D9D9D9] pl-[48px]">
			<Link href="/">
				<HeaderLogo />
			</Link>
		</header>
	);
};

export default AppHeader;
