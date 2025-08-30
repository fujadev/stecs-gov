"use client";
import AppHeader from "@/components/Header";
import PaymentSummary from "@/components/PaymentSummary";
import checklist from "../../assets/images/checklist.png";
import { useRouter } from "next/navigation";

const StudentOverview = () => {
     const router = useRouter();
    return (
        <>
            <AppHeader />
          <PaymentSummary />
        </>
    );
};

export default StudentOverview;
