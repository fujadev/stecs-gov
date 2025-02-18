import ArrowRightLine from '@/assets/icons/ArrowRightLine';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import AppButton from '../Common/AppButton';

interface RamadanDriveIntroProps {
  quoteSize?: string;
  titleSize?: string;
  descSize?: string;
  raisedAmount?: number;
  goalAmount?: number;
  progressWidth?: string;
  buttonWidth?: string;
  lineHeight?: string;
  quotelineHeight?: string;
  buttonMargin?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const RamadanDriveIntro: React.FC<RamadanDriveIntroProps> = ({
  quoteSize = '12px',
  titleSize = '32px',
  descSize = '16px',
  raisedAmount = '₦51,245',
  goalAmount = '₦5,000,000',
  progressWidth = '20',
  lineHeight="30px",
  quotelineHeight="20px",
  buttonWidth = '100%',
  buttonMargin,
  onClick
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mt-xl mb-[12px]">
      {/* Quote */}
      <p className="mt-[16px] " style={{ fontSize: isMobile ? '16px' : quoteSize ,lineHeight: isMobile ? '28px' : quotelineHeight}}>
        "By No Means Shall You Attain Righteousness Unless You Give Freely Of That Which You Love, And Whatever You Give, Allah Knows It Well" 
        <span className="font-bold"> [Quran 3:92]</span>
      </p>

      {/* Title & Description */}
      <h1
        className="font-bold mt-[24px] mb-[8px] md:my-md  text-[#262A2C]"
        style={{ fontSize: isMobile ? '24px' : titleSize , lineHeight: isMobile ? '28px' : lineHeight}}
      >
        Join Our 2025 Ramadan Charity Drive
      </h1>
      <p className="text-[#030E1280]" style={{ fontSize: isMobile ? '16px' : descSize }}>
        Spread Love and Support to Those in Need
      </p>

      {/* Donation Progress Bar */}
      <div className="my-[20px]">
        <div className="text-sm flex justify-between text-[#1A1A1A]">
          <span>Raised: ₦{raisedAmount}</span>
          <span>Goal: ₦{goalAmount}</span>
        </div>
        <div className="w-full h-[8px] bg-[#D9D9D9] mt-[4px] rounded-lg">
          <div
            className="h-full bg-[#233C8B] rounded-lg "
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Donate Button */}
      <div style={{ width: buttonWidth, margin: isMobile ? `${buttonMargin} auto 0px` :  `${buttonMargin} 0px 0px`  }}>
      <AppButton
      onClick={onClick}
        fullWidth={true}
        mih={52}
        classNames={{
          root: "py-[14px] px-[16px] rounded-[10px]",
        }}
      
      >
        <span className="text-[#fff] text-[14px] font-medium flex items-center gap-x-2 ">
          Donate <ArrowRightLine fill="white" />
        </span>
      </AppButton>
      </div>
  
    </div>
  );
};

export default RamadanDriveIntro;
