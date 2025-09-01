'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useTypedSelector } from '@/config/api/config/store';
import { resetStore } from '@/config/api/auth/slice';
import { getInitials } from '@/config/helpers/globals';
import appLogo from '@/assets/images/appLogo.jpeg';
import Image from 'next/image';
import { ROUTES } from '@/config/routes';

const AppHeader = () => {
	const dispatch = useAppDispatch();
	const pathname = usePathname();
	const user = useTypedSelector((state) => state.auth.user);

	const handleLogOut = (): void => {
		dispatch(resetStore());
	};

	return (
		<header className="w-full wrapper-pad px-[20px] md:px-[48px] h-[72px] flex items-center shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
			<div className="flex justify-between items-center w-full">
				<Link href={user ? ROUTES.DASHBOARD : ROUTES.LOGIN}>
					<Image src={appLogo} alt="" width={150} />
				</Link>

				{pathname !== '/' && !pathname.includes('payout-details') && (
					<>
						{user && (
							<div className="flex items-center gap-[16px]">
								<div className="bg-[#D9D9D9] rounded-full w-[48px] h-[48px] flex justify-center items-center">
									<span className="text-[#003049] text-[20px] font-medium">{getInitials(user?.fullName)}</span>
								</div>
								<span onClick={handleLogOut} className="text-[crimson] font-semibold cursor-pointer">
									Log Out
								</span>
							</div>
						)}
					</>
				)}
			</div>
		</header>
	);
};

export default AppHeader;
