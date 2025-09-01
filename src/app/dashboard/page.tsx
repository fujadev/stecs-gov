'use client';
import CustomTable from '@/components/CustomTable';
import DashboardLayout from '@/components/DashboardLayout';
import WalletModal from '@/components/Modals/WalletModal';
import WalletSummary from '@/components/WalletSummary';
import { useRetrieveAccountQuery, useRetrieveGroupsQuery } from '@/config/api/client/slice';
import { groupsTableColumn } from '@/config/helpers/url';
import { ROUTES } from '@/config/routes';
import { Button, Loader } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Dashboard = () => {
	const router = useRouter();

	const [openWalletModal, setOpenWalletModal] = useState(false);

	const { data: groups = [], isLoading: groupsLoading } = useRetrieveGroupsQuery();
	const { data: accountData, isLoading: accountLoading } = useRetrieveAccountQuery();

	if (accountLoading) {
		return (
			<div className="flex min-h-[300px] items-center justify-center">
				<Loader size={40} />
			</div>
		);
	}

	return (
		<DashboardLayout>
			<div className="max-w-[1137px] mx-auto px-[20px] pb-[30px]">
				<div className="md:flex items-center justify-between mb-[40px]">
					<h1 className="text-[#292D32] text-[16px] md:text-[24px] font-bold mb-[8px] md:mb-[0px]">{accountData?.accountName}</h1>
					<div className="flex md:gap-[8px] md:justify-end justify-between">
						<Button onClick={() => setOpenWalletModal(true)} radius="xl" className="md:w-[182px] h-[41px] bg-[#008752] text-white text-[12px] md:text-[14px] font-semibold">
							Fund Wallet
						</Button>

						<Button radius="xl" className="md:w-[182px] h-[41px] bg-[#008752] text-white text-[12px] md:text-[14px] font-semibold" onClick={() => router.push(ROUTES.UPLOAD)}>
							Upload CSV
						</Button>
					</div>
				</div>
				<WalletSummary data={accountData} />

				<div className="rounded-[8px] py-[24px] px-[20px] mt-[24px] md:mt-[36px] bg-[white]">
					<span className="font-bold text-[16px] md:text-[24px] block mb-[0px] md:mb-[24px]">Payment Groups</span>

					<CustomTable
						loading={groupsLoading}
						emptyMessage="No data Found"
						data={groups}
						renderRowActions={(row) => (
							<Button variant="outline" color="#003049" radius={8} onClick={() => router.push(ROUTES.GROUP_DASHBOARD(row?.id))}>
								View
							</Button>
						)}
						columns={groupsTableColumn}
					/>
				</div>
			</div>

			<WalletModal wallet={accountData?.wallet} opened={openWalletModal} onClose={() => setOpenWalletModal(false)} />
		</DashboardLayout>
	);
};

export default Dashboard;
