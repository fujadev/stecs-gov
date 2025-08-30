"use client";
import AppHeader from "@/components/Header";
import PaymentSummary from "@/components/PaymentSummary";
import { useRouter } from "next/navigation";

const StudentOverview = () => {
    const router = useRouter();
    return (
        <>
            <AppHeader />
            {/* <div className="bg-[#F5F6FA] min-h-screen"> */}
            <div className=" ">
                <PaymentSummary />
            </div>
            {/* </div> */}
        </>
    );
};

export default StudentOverview;
