'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';
import InviteModal from '../Modals/inviteAuthorizer';
import dayjs from 'dayjs';
import { statusTextColor } from '@/config/helpers/tailwindClasses';
import { numberWithCommas } from '@/config/helpers/globals';

const PaymentSummary = ({ data }: any) => {
	const [inviteOpen, setInviteOpen] = useState(false);

	return (
		<div className="w-full  rounded-[8px]">
			{/* <h1 className="text-[#292D32] text-[20px] mb-[32px]">
				You have been invited to authorize the following payment. Please make sure the information is correct before releasing the payments{' '}
			</h1> */}
			<div className=" bg-[#fff] rounded-[8px] pt-[24px] pb-[36px]">
				<div className="flex flex-col md:flex-row justify-between px-[28px] gap-4">
					<div className='grow'>
						<h1 className="text-[20px] text-center md:text-left md:text-[24px] font-bold text-[#292D32]">{data?.groupName}</h1>
						<span className="text-[#747D82] text-center md:text-left text-[14px] font-semibold mr-[8px] pr-[8px] border-r border-[#D7D7D7]">
							Created on {dayjs(data?.createdAt).format('DD MMM, YYYY')}
						</span>
						<span className="text-[#747D82] text-[14px] font-semibold">
							Status: <span className={statusTextColor[data?.status]}>{data?.status}</span>
						</span>
					</div>

					<div className="flex flex-col md:flex-row md:justify-between gap-[8px] grow-0 mt-[26px] md:mt-[0px]">
						<Button
							radius="xl"
							className="w-full lg:w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold"
							onClick={() => setInviteOpen(true)}
						>
							Invite Authorizer
						</Button>

						<Button
							radius="xl"
							className="w-full lg:w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold"
						>
							Release Payment
						</Button>

						<Button
							radius="xl"
							className="w-full lg:w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold"
						>
							Send Notification
						</Button>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-[8px] md:gap-[0px] items-center px-[24px]  mt-[32px]">
					<div className="md:w-[323px] md:pl-[24px] border-[#D7D7D7] md:border-r text-center md:text-left">
						<h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Total Amount</h2>
						<p className="text-[#003049] text-[24px] font-semibold">₦{numberWithCommas(data?.totalAmount)}</p>
					</div>
					<div className="md:w-[323px] md:pl-[24px] border-[#D7D7D7] md:border-r text-center md:text-left">
						<h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Avg Payment per recipient</h2>
						<p className="text-[#003049] text-[24px] font-semibold">₦{numberWithCommas(data?.averagePayment)}</p>
					</div>
					<div className="md:w-[323px] md:pl-[24px] text-center md:text-left">
						<h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Total Recipient</h2>
						<p className="text-[#003049] text-[24px] font-semibold">{numberWithCommas(data?.totalAmount)}</p>
					</div>
				</div>
			</div>

			<InviteModal groupId={data?.id} opened={inviteOpen} onClose={() => setInviteOpen(false)} />
		</div>
	);
};

export default PaymentSummary;
