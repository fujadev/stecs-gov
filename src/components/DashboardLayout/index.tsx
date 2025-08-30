'use client';
import { resetStore, storeUser } from '@/config/api/auth/slice';
import { useRetrieveClientQuery } from '@/config/api/client/slice';
import { useAppDispatch, useTypedSelector } from '@/config/api/config/store';
import { Avatar, Loader, useDrawersStack } from '@mantine/core';
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import AppHeader from '../Header';

const DashboardLayout: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const { isLoading, data: user } = useRetrieveClientQuery();

	const { token, user: appuser } = useTypedSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user) {
			dispatch(storeUser(user));
		}
	}, [user]);

	if (isLoading) {
		return (
			<div className="flex min-h-[300px] items-center justify-center">
				<Loader size={40} />
			</div>
		);
	}

	if (!token) return <></>;

	return (
		<>
			<AppHeader />
			<div className="bg-[#F5F6FA] min-h-screen pt-[36px]">{children}</div>
		</>
	);
};

export default DashboardLayout;
