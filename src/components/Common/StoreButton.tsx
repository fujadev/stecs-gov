import AppStoreDark from "@/assets/icons/AppStoreDark";
import AppStoreLight from "@/assets/icons/AppStoreLight";
import PlayStoreDark from "@/assets/icons/PlayStoreDark";
import PlayStoreLight from "@/assets/icons/PlayStoreLight";
import { APPSTORE, PLAYSTORE } from "@/config/constants/globals";
import Link from "next/link";
import React from "react";

const StoreButton: React.FC<{ theme: 'light' | 'dark', className?: string }> = ({ theme, className }) => {
  return (
    <div className={`gap-[12px] flex items-center mt-[32px] ${className || ""}`}>
      {theme === "light" && <>
        <Link href={APPSTORE} target="_blank">
          <AppStoreLight />
        </Link>
        <Link href={PLAYSTORE} target="_blank">
          <PlayStoreLight />
        </Link>
      </>}
      {theme === "dark" && <>
        <Link href={APPSTORE} target="_blank">
          <AppStoreDark />
        </Link>
        <Link href={PLAYSTORE} target="_blank">
          <PlayStoreDark />
        </Link>
      </>}
    </div>
  );
}

export default StoreButton;