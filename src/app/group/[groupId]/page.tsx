'use client';
import CustomTable from '@/components/CustomTable';
import DashboardLayout from '@/components/DashboardLayout';
import PaymentSummary from '@/components/PaymentSummary';
import SearchInput from '@/components/SearchInput';

import { useRetrieveGroupQuery } from '@/config/api/client/slice';
import { groupTableColumn } from '@/config/helpers/url';
import { Loader } from '@mantine/core';
import { useMemo, useState } from 'react';

const GroupOverview = ({ params }: { params: { groupId: string } }): JSX.Element => {
	const { data, isLoading: groupLoading } = useRetrieveGroupQuery(params?.groupId);

	const [search, setSearch] = useState('');

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
				<CustomTable columns={groupTableColumn} data={tableData || []} />
			</div>
		</DashboardLayout>
	);
};

export default GroupOverview;
