"use client";
import Image from "next/image";
import AppButton from "../Common/AppButton";
import CircleCheckList from "../../assets/images/circle-checklist.png";

const TransactionSuccess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-[24px] rounded-[12px] w-full  bg-white shadow-two ">
      <div className="flex flex-col items-center justify-center">
        <Image
          width={268}
          height={268}
          src={CircleCheckList}
          alt="circle checklist"
        />
        <p className="text-center text-base text-[#344054]">Thank you for your donation</p>
      </div>
      {/* Confirmation Button */}
      <div className="mt-[20px]">
        <AppButton
        onClick={onClose}
          fullWidth={true}
          mih={52}
          classNames={{
            root: "py-[14px] px-[16px] rounded-[10px]",
          }}
        >
          <span className="text-[#fff] text-[14px] font-medium flex items-center gap-x-2 ">
            Continue
          </span>
        </AppButton>
      </div>
    </div>
  );
};

export default TransactionSuccess;
