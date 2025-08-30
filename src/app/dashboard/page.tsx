'use client';
import CustomTable from '@/components/CustomTable';
import DashboardLayout from '@/components/DashboardLayout';
import AppHeader from '@/components/Header';
import WalletSummary from '@/components/WalletSummary';
import { statusClasses } from '@/config/helpers/tailwindClasses';
import { groupsTableColumn, tableData1 } from '@/config/helpers/url';
import { Button, Table } from '@mantine/core';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
	const router = useRouter();

	const rows = tableData1.map((element) => (
		<Table.Tr className="text-[#003049] font-[14px] font-medium" key={element.date}>
			<Table.Td>{element.transactionType}</Table.Td>
			<Table.Td>{element.date}</Table.Td>
			<Table.Td>{element.amount}</Table.Td>
			<Table.Td>{element.reference}</Table.Td>
			<Table.Td>
				<span className={statusClasses[element.status]}>{element.status}</span>
			</Table.Td>
			<Table.Td>
				<Button variant="outline" color="#003049" radius={8}>
					View
				</Button>
			</Table.Td>
		</Table.Tr>
	));
	return (
		<DashboardLayout>
			<div className="max-w-[1137px] mx-auto">
				<div className="flex items-center justify-between mb-[40px]">
					<h1 className="text-[#292D32] text-[24px] font-bold">Ekiti State</h1>
					<div className="flex gap-[8px] justify-end">
						<Button radius="xl" className="w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold" onClick={() => router.push('/group/233')}>
							Fund Wallet
						</Button>

						<Button radius="xl" className="w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold" onClick={() => router.push('/uploadcsv')}>
							Upload CSV
						</Button>
					</div>
				</div>
				<WalletSummary />

				<div className="rounded-[8px] py-[24px] px-[20px] mt-[36px] bg-[white]">
					<span className="font-bold text-[24px] block mb-[24px]">Payment Groups</span>

					<CustomTable
						// loading
						// overlayLoading
						data={tableData1}
						renderRowActions={() => (
							<Button variant="outline" color="#003049" radius={8}>
								View
							</Button>
						)}
						columns={groupsTableColumn}
					/>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
