import { setStoreModal } from "@/config/api/auth/slice";
import { useAppDispatch, useTypedSelector } from "@/config/api/config/store";
import { Modal } from "@mantine/core";
import Image from "next/image";
import IOSQR from '@/assets/images/iosqrcode.png'
import androidSQR from '@/assets/images/androidqrcode.png'
import AppButton from "./AppButton";

const StoreModal = () => {
  const dispatch = useAppDispatch()
  const { showStoreModal } = useTypedSelector(state => state.auth);

  const closeModal = () => dispatch(setStoreModal(false))
  return (
    <Modal
      withCloseButton={false}
      centered
      size={700}
      closeOnClickOutside={true}
      opened={showStoreModal || false}
      onClose={() => closeModal()}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 8,
      }}
    >
      <h2 className="text-center text-[#333] text-[64px] font-bold leading-[64px] max-sm:text-[32px] max-sm:leading-[40px]">Get the Stecs App</h2>
      <p className="text-center text-[#696969] text-[18px] font-medium leading-[28px]">Scan the QR code below to download the app</p>
      <div className="mt-[32px] w-full mx-auto max-w-[400px] flex justify-between gag-[32px] flex-wrap max-sm:justify-center">
        <div className="flex flex-col gap-[16px]">
          <span className="text-[16px] font-bold leading-[28px] text-center">IOS</span>
          <Image src={IOSQR} alt="ios qr code for download" width={150} />
        </div>
        <div className="flex flex-col gap-[16px]">
          <span className="text-[16px] font-bold leading-[28px] text-center">ANDROID</span>
          <Image src={androidSQR} alt="Android qr code for download" width={150} />
        </div>

      </div>
      <div className="flex justify-center mt-[32px]">
        <AppButton title="Download" fullWidth={true}
          onClick={() => {
            closeModal()
            document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>
    </Modal>
  );
}

export default StoreModal;