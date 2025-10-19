'use client';
import EditIcon from '@/assets/icons/EditIcon';
import SendIcon from '@/assets/icons/SendIcon';
import TrashIcon from '@/assets/icons/TrashIcon';
import VerticalHoriz from '@/assets/icons/VerticalHoriz';
import WithdrawIcon from '@/assets/icons/Withdrawlcon';
import CustomTable from '@/components/CustomTable';
import DashboardLayout from '@/components/DashboardLayout';
import EditRecipient from '@/components/Modals/EditRecipient';
import PaymentSummary from '@/components/PaymentSummary';
import SearchInput from '@/components/SearchInput';

import { useDeleteBeneficiaryAccountMutation, useRetrieveGroupQuery, useSendSingleNotificationMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';
import { groupTableColumn } from '@/config/helpers/url';
import { Loader, Menu } from '@mantine/core';
import { useMemo, useState } from 'react';

const GroupOverview = ({ params }: { params: { groupId: string } }): JSX.Element => {
	const [editDetails, setEditDetails] = useState(null);
	const { data, isLoading: groupLoading } = useRetrieveGroupQuery(params?.groupId);
	const [sendNotification, { isLoading }] = useSendSingleNotificationMutation();
	const [deleteBeneficiary, { isLoading: deletingBeneficiary }] = useDeleteBeneficiaryAccountMutation();

	const [search, setSearch] = useState('');

	const handleSendNotification = (id: string) => {
		if (!id) return;
		handleMutation({
			mutation: () => sendNotification(id).unwrap(),
		});
	};
	const handleDeleteBeneficiary = (id: string) => {
		if (!id) return;
		handleMutation({
			mutation: () => deleteBeneficiary(id).unwrap(),
		});
	};

	const tableData = useMemo(() => {
		if (search.length >= 1) {
			return data?.beneficiaries.filter((val) => val.firstName.toLowerCase().includes(search.toLowerCase()));
		}
		return data?.beneficiaries || [];
	}, [data?.beneficiaries, search]);

	if (groupLoading) {
		return (
			<div className="flex min-h-[300px] items-center justify-center">
				<Loader size={40} />
			</div>
		);
	}

	return (
		<DashboardLayout>
			<PaymentSummary data={data} />
			<div className="bg-[#FFFFFF] mt-[32px] py-[32px] px-[19px] rounded-[8px]">
				<div className="mb-[32px]">
					<SearchInput placeholder="Search Recipient" onChange={(e) => setSearch(e.target.value)} />
				</div>
				<CustomTable
					selectable
					columns={groupTableColumn}
					data={tableData || []}
					renderRowActions={(row) => (
						<>
							<Menu openDelay={100} closeDelay={400}>
								<Menu.Target>
									<div className="flex justify-center cursor-pointer w-[30px] h-[20px]">
										<VerticalHoriz />
									</div>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Item
										disabled={row?.withdrawalStatus}
										onClick={() => handleSendNotification(row.id)}
										className="mb-[4px]"
										leftSection={!isLoading ? <SendIcon /> : <Loader size={16} />}
									>
										Resend Notification
									</Menu.Item>

									<Menu.Item
										className="mb-[4px]"
										onClick={() => {
											setEditDetails(row);
										}}
										leftSection={<EditIcon />}
									>
										Edit Recipient
									</Menu.Item>
									<Menu.Item className="mb-[4px]" leftSection={<WithdrawIcon />}>
										Withdraw Funds
									</Menu.Item>
									<Menu.Item onClick={() => handleDeleteBeneficiary(row.id)} leftSection={!deletingBeneficiary ? <TrashIcon /> : <Loader size={16} />}>
										Delete Recipient
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</>
					)}
				/>
			</div>
			<EditRecipient data={editDetails} opened={!!editDetails} onClose={() => setEditDetails(null)} />
		</DashboardLayout>
	);
};

export default GroupOverview;
