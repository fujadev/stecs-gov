import Image from 'next/image';
import AppButton from '../Common/AppButton';
import vaultIcon from '@/assets/images/metalSafe.gif';
import { setStoreModal } from '@/config/api/auth/slice';
import { useAppDispatch } from '@/config/api/config/store';

const CahngeTheWayYouBank = () => {
  const dispatch = useAppDispatch();
  return (
    <section className='wrapper-pad max-w-[739px] mx-auto py-[40px] flex flex-col justify-center'>
      <div className='flex items-center gap-[7px] justify-center mb-[8px]'>
        <h2 className='text-center font-bold max-sm:text-[19px] text-[48px]'>Change the way you Bank</h2>
        <Image src={vaultIcon} width={58} alt='Vault icon' />
      </div>
      <p className='mb-[24px] text-center text-[18px] leading-[24px] max-sm:text-[13px] '>For those who want more from their money—there’s STECS. Save, Spend, Invest, and Grow your wealth ethically in one seamless App. It’s purpose-driven wealth management, aligned with your values.</p>
      <AppButton onClick={() => dispatch(setStoreModal(true))} w="fit-content" fullWidth={false} mih={52} classNames={{ root: 'py-[14px] px-[16px] rounded-[10px] mx-auto' }}>
        <span className="text-[#fff] text-[14px] font-medium">Sign Up Now</span>
      </AppButton>
    </section>
  );
};

export default CahngeTheWayYouBank;
