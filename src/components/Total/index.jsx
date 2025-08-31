import Money from '@/assets/icons/Money';
import StoreButton from '../Common/StoreButton';

const Total = ({ title, figure }) => {
	return (
		<div className="bg-[#FFFFFF] px-[24px] py-[20px] rounded-[16px] w-full max-h-[108px] mb-[12px] md:mb-[0px]">
			<span className="block text-[#1C1C1C] text-[14px]">{title}</span>
			<span className="block text-[#1C1C1C] text-[14px] md:text-[24px]">{figure}</span>
		</div>
	);
};

export default Total;
