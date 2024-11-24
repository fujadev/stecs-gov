import { useAppDispatch } from "@/config/api/config/store";
import AppButton from "../Common/AppButton";
import { setStoreModal } from "@/config/api/auth/slice";
const FeedbackSection: React.FC<{ className?: string }> = ({ className = "" }) => {
  const dispatch = useAppDispatch()
  return (
    <section className={`wrapper-pad max-w-[946px] w-full mx-auto`}>
      <div className={`min-h-[280px] px-[16px] flex flex-col justify-center bg-[url('../assets/images/feedbackbg.png')] bg-no-repeat rounded-b-[20px] overflow-hidden ${className}`}>
        <h2 className="text-center text-[18px] sm:text-[32px] text-[#fff]">Join Thousands Making Ethical Finance Simple</h2>
        <p className="text-center text-[12px] sm:text-[16px] text-[#fff] mb-[32px]">Sign up today and start building your financial future—ethically and effortlessly.</p>

        <AppButton onClick={() => dispatch(setStoreModal(true))} color="#fff" fullWidth={false} classNames={{ root: "min-h-[43px] sm:min-h-[48px] w-fit mx-auto mb-[20px] py-[14px] px-[12px] sm:px-[16px] rounded-[10px]" }}>
          <span className="text-[#000] text-[12px] sm:text-[14px] font-medium">Get Started Now</span>
        </AppButton>
      </div>
    </section>
  );
}

export default FeedbackSection;