import CancelCircle from '@/assets/icons/CancelCircle';
import { Modal } from '@mantine/core';
import CopyRow from '../CopyRow';

interface CustomModalProps {
	wallet: any;
	opened: boolean;
	onClose: () => void;
}

const WalletModal: React.FC<CustomModalProps> = ({ onClose, opened, wallet }) => {
	return (
		<Modal
			withCloseButton={false}
			centered
			size={719}
			closeOnClickOutside={true}
			opened={opened}
			onClose={onClose}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 8,
			}}
		>
			<div className="flex justify-between items-center">
				<h1 className="text-[#003049] text-[24px] font-semibold">Your wallet Details</h1>

				<div className="flex items-center gap-[16px]">
					<button type="button" onClick={onClose} className="bg-[#F5F5F5] p-[12px] rounded-full cursor-pointer">
						<CancelCircle />
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-[16px] mt-[24px]">
				<CopyRow label="Account Number" value={wallet?.walletNumber} />
				<CopyRow label="Account Name" value={wallet?.walletName} />
				<CopyRow label="Bank Name" value={wallet?.bankName} />
			</div>
		</Modal>
	);
};

export default WalletModal;
