'use client';
import { Button, Modal } from '@mantine/core';

interface CustomModalProps {
	isLoading: boolean;
	opened: boolean;
	onClose: () => void;
	handleSendNotification: () => void;
}

const SendNotificationConfirmModal = ({ isLoading, opened, onClose, handleSendNotification }: CustomModalProps) => {
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
				<div className="flex flex-col items-center text-center  py-[40px]">
					<h3 className="text-lg font-semibold text-gray-900">Are you sure?</h3>
					<p className="text-[16px] text-[#003049] mt-[24px]">Send Notification to all recipient that haven’t withdrawn yet </p>
					<div className="flex gap-[10px] mt-[32px]">
						<Button onClick={onClose} miw={197} variant="outline" color="#3A86FF" className="h-[41px] text-[14px] font-semibold rounded-[12px]">
							Cancel
						</Button>
						<Button loading={isLoading} onClick={() => handleSendNotification()} miw={197} className="h-[41px] bg-[#008752] text-white text-[14px] font-semibold rounded-[12px]">
							Send Notification
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default SendNotificationConfirmModal;
