import Money from '@/assets/icons/Money';
import Total from '../Total';
import { numberWithCommas } from '@/config/helpers/globals';

const WalletSummary = ({ data }: any) => {
	return (
		<div className="w-full">
			<div className="md:flex md:gap-[32px] ">
				<div className="bg-[#003049] px-[20px] py-[20px] md:px-[32px] md:py-[48px] rounded-[12px] w-full mb-[12px] md:mb-[0px]">
					<div className="bg-[#FFFFFF] p-[8px] rounded-full mb-[12px] w-[40px] h-[40px] flex items-center justify-center">
						<Money />
					</div>
					<span className="block text-[#F5F6FA] text-[14px]">Wallet Balance</span>
					<span className="block text-[#FFFFFF] font-bold text-[14px] md:text-[36px]">₦{numberWithCommas(data?.wallet?.availableBalance)}</span>
				</div>
				<div className="flex flex-col justify-between  md:gap-[0px] w-full">
					<Total title={'Total Disbursed'} figure={`₦${numberWithCommas(data?.totalDisbursed)}`} />
					<div className="md:flex justify-between gap-[14px]">
						<Total title={'Total Recipient'} figure={data?.totalPaymentGroups || 0} />
						<Total title={'Total Payment Groups'} figure={data?.totalRecipients || 0} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletSummary;