'use client';

import { useReleasePaymentMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';
import { Button, Modal } from '@mantine/core';
import { useEffect, useState } from 'react';

interface CustomModalProps {
	groupName: string;
	groupId: string;
	opened: boolean;
	onClose: () => void;
}

const ReleaseConfirmMoadal = ({ opened, onClose, groupId, groupName }: CustomModalProps) => {
	const [successful, setSuccessful] = useState(false);

	const [releasePayment, { isLoading }] = useReleasePaymentMutation();

	const handleReleasePayment = () => {
		if (!groupId) return;
		handleMutation({
			mutation: () => releasePayment(groupId).unwrap(),
			onSuccess(result) {
				setSuccessful(true);
			},
		});
	};

	useEffect(() => {
		if (!opened) setSuccessful(false);
	}, [opened]);
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			size={719}
			withCloseButton={false}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
			padding={0}
		>
			<div>
				{!successful ? (
					<div className="flex flex-col items-center text-center  py-[40px]">
						<h3 className="text-lg font-semibold text-gray-900">Release Payment</h3>
						<p className="text-[16px] text-[#003049] mt-[24px]">Are you sure you want to release this payment ({groupName})?</p>
						<div className="flex gap-[10px] mt-[32px]">
							<Button disabled={isLoading} onClick={onClose} miw={197} variant="outline" color="#3A86FF" className="h-[41px] text-[14px] font-semibold rounded-[12px]">
								Cancel
							</Button>
							<Button loading={isLoading} onClick={() => handleReleasePayment()} miw={197} className="h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold rounded-[12px]">
								Release Payment
							</Button>
						</div>
					</div>
				) : (
					<div className="flex flex-col items-center text-center py-[40px]">
						{/* <SuccesCheckIcon /> */}
						<h3 className="text-lg font-semibold text-gray-900">Payment Release Successful</h3>
						<p className="text-[16px] text-[#003049] mt-[8px]">Payment has been released</p>
						<div className="mx-auto w-full mt-[16px] max-w-[197px]">
							<Button onClick={onClose} color="#3A86FF" fullWidth className="h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold rounded-[12px]">
								Close
							</Button>
						</div>
					</div>
				)}
			</div>
		</Modal>
	);
};

export default ReleaseConfirmMoadal;
