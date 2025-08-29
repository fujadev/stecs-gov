import Money from "@/assets/icons/Money";
import StoreButton from "../Common/StoreButton";
import ButtonPill from "../ButtonPill";

const PaymentSummary = () => {
    return (
        <div className="max-w-[1137px] bg-[#fff] w-full px-[28px] py-[24px] rounded-[8px] mx-auto">
            <div className="flex flex-row justify-between align-center">
                <div>
                    <h1 className="text-[24px] font-bold text-[#292D32]">Payment for Students</h1>
                    <span className="text-[#747D82] text-[14px] font-semibold mr-[8px]  pr-[8px] border-r border-[#D7D7D7]">Created on 12 June 2025</span>
                    <span className="text-[#747D82] text-[14px] font-semibold">Status: <span>Pending</span></span>
                </div>
                {/* <ButtonPill /> */}
            </div>
            <div className="flex flex-row px-[24px] py-[12px] mt-[32px]">
                {/* <div className="flex flex-row px-[24px] py-[12px] justify-between"> */}
                <div className="w-[323px] border-[#D7D7D7] border-r">
                    <h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Total Amount</h2>
                    <p className="text-[#003049] text-[24px] font-semibold">₦718,000</p>
                </div>
                <div className="w-[323px] pl-[24px] border-[#D7D7D7] border-r">
                    <h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Avg Payment per recipient</h2>
                    <p className="text-[#003049] text-[24px] font-semibold">₦18,000</p>
                </div>
                <div className="w-[323px] pl-[24px]">
                    <h2 className="text-[#1C1C1C] text-[14px]  mb-[12px]">Total Recipient</h2>
                    <p className="text-[#003049] text-[24px] font-semibold">3000</p>
                </div>
            </div>
        </div>
    );
}

export default PaymentSummary;