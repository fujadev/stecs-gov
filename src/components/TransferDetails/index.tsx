'use client';

import { useState } from 'react';
import CopyIcon from '@/assets/icons/CopyIcon';
import { useDonationQuery } from '@/config/api/donation/slice';
import { formatAmount } from '@/config/helpers/url';

const TransferDetails = ({ amount }: { amount: number }) => {
  const { data } = useDonationQuery();

  const [copied, setCopied] = useState(false);
  const accountNumber = data?.accountDetails?.accountNumber;
  const accountName = data?.accountDetails?.accountName;

  const handleCopy = async (text?: string) => {
    if (typeof window !== 'undefined' && navigator?.clipboard && text) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="p-[24px] rounded-[12px] w-full  bg-white shadow-two">
      <h2 className="text-center  font-medium text-base">
        Transfer ₦{formatAmount(amount)} to STECS RAMADAN DRIVE
      </h2>

      <div className="bg-[#F9F9FA] rounded-[10px] py-[20px] px-[15px] mt-[8px]">
        {/* Bank Name */}
        <div className="mb-md">
          <p className="text-sm text-[#030E1280] font-medium">BANK NAME</p>
          <p className="text-[#344054] text-base font-semibold">
            {accountName}
          </p>
        </div>

        {/* Account Number */}
        <div className="mb-md flex items-center justify-between">
          <div>
            <p className="text-sm text-[#030E1280] font-medium">
              ACCOUNT NUMBER
            </p>
            <p className="text-[#344054] text-base font-semibold">
              {accountNumber}
            </p>
          </div>
          <button
            onClick={() => handleCopy(accountNumber)}
            className="text-gray-600 hover:text-gray-900 transition"
            aria-label="Copy account number"
          >
            <CopyIcon />
          </button>
        </div>

        {/* Amount */}
        <div className="mb-md flex items-center justify-between">
          <div>
            <p className="text-sm text-[#030E1280] font-medium">AMOUNT</p>
            <p className="text-[#344054] text-base font-semibold">₦{formatAmount(amount)}</p>
          </div>
          <button
            onClick={() => handleCopy(amount.toString())}
            className="text-gray-600 hover:text-gray-900 transition"
            aria-label="Copy account number"
          >
            <CopyIcon />
          </button>
        </div>
      </div>

      {/* Confirmation Button */}
      {/* <div className="mt-[20px]">
        <AppButton
          fullWidth={true}
          mih={52}
          classNames={{
            root: "py-[14px] px-[16px] rounded-[10px]",
          }}
        >
          <span className="text-[#fff] text-[14px] font-medium flex items-center gap-x-2 ">
            I’ve sent the money
          </span>
        </AppButton>
      </div> */}
      {/* Copy Notification */}
      {copied && (
        <p className="text-green-500 text-center mt-2 text-sm">
          Copied to clipboard!
        </p>
      )}
    </div>
  );
};

export default TransferDetails;
