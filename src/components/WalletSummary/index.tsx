import Money from "@/assets/icons/Money";
import StoreButton from "../Common/StoreButton";
import Total from "../Total";
import AppHeader from "../Header";

const WalletSummary = () => {
    return (
        <div className="w-full">
            <div className='flex gap-[32px]'>
                <div className="bg-[#003049] px-[32px] py-[48px] rounded-[12px] w-full">
                    <div className="bg-[#FFFFFF] p-[8px] rounded-full mb-[12px] w-[40px] h-[40px] flex items-center justify-center">
                        <Money />
                    </div>
                    <span className="block text-[#F5F6FA] text-[14px]">Wallet Balance</span>
                    <span className="block text-[#FFFFFF] text-[36px]">₦6,718,000</span>
                </div>
                <div className='flex flex-col w-full justify-between'>
                    <Total title={'Total Disbursed'} figure={'₦718,000'} />
                    <div className='flex justify-between gap-[14px]'>
                        <Total title={'Total Disbursed'} figure={'5,000'} />
                        <Total title={'Total Disbursed'} figure={'10'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletSummary;
