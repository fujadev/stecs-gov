"use client";
import AppHeader from "@/components/Header";
import WalletSummary from "@/components/WalletSummary";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

const Dashboard = () => {
     const router = useRouter();
    return (
        <>
            <AppHeader />
            <div className="bg-[#F5F6FA] min-h-screen pt-[36px]">
                <div className="max-w-[1137px] mx-auto">
                    <div className="flex items-center justify-between mb-[40px]">
                        <h1 className="text-[#292D32] text-[24px] font-bold">Ekiti State</h1>
                        <div className="flex gap-[8px] justify-end">
                            <Button
                                radius="xl"
                                className="w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold"
                                onClick={() => router.push("/studentoverview")}
                            >
                                Fund Wallet
                            </Button>

                            <Button
                                radius="xl"
                                className="w-[182px] h-[41px] bg-[#3A86FF] text-white text-[14px] font-semibold"
                                onClick={() => router.push("/uploadcsv")}
                            >
                                Upload CSV
                            </Button>
                        </div>
                    </div>
                    <WalletSummary />
                </div>

            </div>
        </>
    );
};

export default Dashboard;
