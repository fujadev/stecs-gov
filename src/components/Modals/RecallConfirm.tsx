'use client';

import { useBulkRecallFundsMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';
import { Button, Modal } from '@mantine/core';

interface CustomModalProps {
	groupId: string;
	opened: boolean;
	onClose: () => void;
}

const RecallConfirm = ({ opened, onClose, groupId }: CustomModalProps) => {
	const [bulkRecall, { isLoading }] = useBulkRecallFundsMutation();

	const handleBulkRecall = () => {
		if (!groupId) return;
		handleMutation({
			mutation: () => bulkRecall(groupId).unwrap(),
			onSuccess(result) {
				onClose();
			},
		});
	};

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
			padding={40}
		>
			<div className="flex flex-col items-center text-center">
				<h3 className="text-lg font-semibold text-gray-900">Withdraw Funds</h3>
				<p className="text-[16px] text-[#003049] mt-[24px]">Are you sure you want to withdraw all pending funds. This will automatically completer this group payment.</p>
				<div className="flex gap-[10px] mt-[32px]">
					<Button disabled={isLoading} onClick={onClose} miw={197} variant="outline" color="#3A86FF" className="h-[41px] text-[14px] font-semibold rounded-[12px]">
						Cancel
					</Button>
					<Button loading={isLoading} onClick={() => handleBulkRecall()} miw={197} className="h-[41px] bg-[#008752] text-white text-[14px] font-semibold rounded-[12px]">
						Withdraw funds
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default RecallConfirm;
