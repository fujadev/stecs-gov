'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import HeaderLogo from '@/assets/icons/HeaderLogo';
import { useAppDispatch } from '@/config/api/config/store';
import NotificationBell from '@/assets/icons/notificationBell';


const AppHeader = () => {
	const pathname = usePathname();
	const [isMobileNavActive, setIsMobileNavActivee] = useState<boolean>(false);
	const params = useParams();
	const dispatch = useAppDispatch();

	// const toogleMobileNav = (): void => {
	// 	setIsMobileNavActivee(!isMobileNavActive);
	// };

	useEffect(() => {
		setIsMobileNavActivee(false);
	}, [params]);

	return (
		<header className="w-full wrapper-pad px-[48px] h-[72px] flex items-center shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
			<div className="flex justify-between items-center w-full">
				<Link href="/">
					<HeaderLogo />
				</Link>

				<div className="flex items-center gap-[36px]">
					<div className="bg-[#F5F6FA] rounded-full w-[44px] h-[44px] flex justify-center items-center">
						<NotificationBell />
					</div>
					<div className="bg-[#D9D9D9] rounded-full w-[48px] h-[48px] flex justify-center items-center">
						<span className="text-[#003049] text-[20px] font-medium">JD</span>
					</div>
				</div>
			</div>
		</header>


	);
};

export default AppHeader;
