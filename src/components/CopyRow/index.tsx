import CopyIcon from '@/assets/icons/CopyIcon';
import { showNotification } from '@mantine/notifications';

const CopyRow: React.FC<{ label: string; value: string }> = ({ label, value }) => {
	const copy = async () => {
		await navigator.clipboard.writeText(value);
		showNotification({ message: 'Copied' });
	};

	return (
		<div className="">
			<div className="text-[16px] text-[#003049] font-medium">{label}</div>
			<div className="flex items-center justify-between w-[100%]">
				<span className=" text-[20px] font-semibold">{value}</span>
				<div
					onClick={copy}
					className="cursor-pointer mt-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<CopyIcon />
				</div>
			</div>
		</div>
	);
};

/* --- tiny inline icons --- */
const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M13.3333 10.75V14.25C13.3333 17.1666 12.1667 18.3333 9.24999 18.3333H5.74999C2.83332 18.3333 1.66666 17.1666 1.66666 14.25V10.75C1.66666 7.83329 2.83332 6.66663 5.74999 6.66663H9.24999C12.1667 6.66663 13.3333 7.83329 13.3333 10.75Z"
			stroke="#292D32"
			stroke-width="1.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M18.3333 5.74996V9.24996C18.3333 12.1666 17.1667 13.3333 14.25 13.3333H13.3333V10.75C13.3333 7.83329 12.1667 6.66663 9.24999 6.66663H6.66666V5.74996C6.66666 2.83329 7.83332 1.66663 10.75 1.66663H14.25C17.1667 1.66663 18.3333 2.83329 18.3333 5.74996Z"
			stroke="#292D32"
			stroke-width="1.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

export default CopyRow;
