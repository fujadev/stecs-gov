import Money from '@/assets/icons/Money';
import StoreButton from '../Common/StoreButton';

const Total = ({ title, figure }) => {
	return (
		<div className="bg-[#FFFFFF] px-[24px] py-[20px] rounded-[16px] w-full max-h-[108px]">
			<span className="block text-[#1C1C1C] text-[14px]">{title}</span>
			<span className="block text-[#1C1C1C] text-[24px]">{figure}</span>
		</div>
	);
};

export default Total;
