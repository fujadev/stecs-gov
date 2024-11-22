import image1 from '@/assets/images/vualt2.png'
import image2 from '@/assets/images/vualt3.png'
import image3 from '@/assets/images/vualt4.png'
import AppButton from '../Common';
import BankCardLine from '@/assets/icons/BankCardLine';
import React from 'react';
import Image, { StaticImageData } from 'next/image';


const data = [
  {
    title: "Regular Vaults for Everyday Savings",
    desc: "Whether you prefer the security of a Locked Vault or the flexibility of an Unlocked Vault, our Regular Vaults provide a convenient solution for your everyday savings needs.",
    btnText: "Save with Regular Vaults",
    imgSrc: image1,
    color: "#C7DBFF"
  },
  {
    title: "Target Vaults for your milestones",
    desc: "Need flexibility and high returns? Our vaults offer both. Lock for up to 13.5% interest or unlock after 30 days. Perfect for long-term savings or short-term needs.",
    btnText: "Save with Target Vaults",
    imgSrc: image2,
    color: "#CDF9F5"
  },
  {
    title: "Regular Vaults for Everyday Savings",
    desc: "Whether you prefer the security of a Locked Vault or the flexibility of an Unlocked Vault, our Regular Vaults provide a convenient solution for your everyday savings needs.",
    btnText: "Save with Regular Vaults",
    imgSrc: image3,
    color: "#FBD4CB"

  },
]
const VaultSavingsSection = () => {
  return (
    <section className="wrapper-pad py-[73px] max-w-[1225px] mx-auto">
      <div className="max-w-[531px] mx-auto">
        <h2 className="text-center font-bold text-[32px] text-[#000]">Grow your savings, without compromising flexibility</h2>
        <p className="text-[16px] text-sub-500 mb-[104px]">Looking to save for your future without sacrificing accessibility?  Our vaults provide the flexibility and security you need to reach your financial goals.</p>
      </div>
      <div className='flex gap-[20px] max-md:flex-col'>
        {data.map(({ btnText, desc, imgSrc, title, color }, idx) =>
          <VaultCard title={title} imgSrc={imgSrc} desc={desc} btnText={btnText} color={color} key={idx} />
        )}
      </div>
    </section>
  );
}

export default VaultSavingsSection;

interface vaultCardprops {
  title: string
  desc: string
  btnText: string
  color: string
  imgSrc: string | StaticImageData
}
const VaultCard: React.FC<vaultCardprops> = ({ desc, imgSrc, title, btnText, color }) => (
  <div className='flex flex-col'>
    <p className='max-md:text-center text-[#000] text-[18px] mb-[24px]'> {title}</p>
    <div className="rounded-[20px] px-[12px] pt-[59px] flex flex-col items-center" style={{ backgroundColor: color }}>
      <div className='max-w-[396px] mx-auto rounded-t-[20px] border-[10px] border-b-0 border-[#ffffff50] overflow-x-hidden'>
        <div className='bg-[#fff] p-[16px]'>
          <div className='flex items-center gap-[8px] mb-[20px] w-full'>
            <BankCardLine />
            <span>Vaults</span>
          </div>
          <Image src={imgSrc!} alt='Stecs Features' />
        </div>
      </div>
    </div>
    <div className='mt-auto' />
    <p className='max-md:text-center text-[16px] leading-[24px] mt-[29px] mb-[24px]'>{desc}</p>
    <div className='max-md:mx-auto max-md:w-fit'>
      <AppButton fullWidth={false} mih={48} classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}>
        <span className="text-[#fff] text-[14px] font-medium">{btnText}</span>
      </AppButton>
    </div>
  </div>
)