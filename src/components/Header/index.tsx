"use client";
import HeaderLogo from "@/assets/icons/HeaderLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppButton from "../Common/AppButton";
import Hamburger from "@/assets/icons/Hamburger";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Transition } from "@mantine/core";
import Close from "@/assets/icons/Close";
import { useAppDispatch } from "@/config/api/config/store";
import { setStoreModal } from "@/config/api/auth/slice";
import ArrowRight from "@/assets/icons/ArrowRight";
import ArrowRightLine from "@/assets/icons/ArrowRightLine";

const navs = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Ramadan Drive",
    path: "/ramadan",
  },
];

const AppHeader = () => {
  const pathname = usePathname();
  const [isMobileNavActive, setIsMobileNavActivee] = useState<boolean>(false);
  const params = useParams();
  const dispatch = useAppDispatch();

  const toogleMobileNav = (): void => {
    setIsMobileNavActivee(!isMobileNavActive);
  };

  useEffect(() => {
    setIsMobileNavActivee(false);
  }, [params]);

  return (
    <header className="flex items-center justify-between max-w-[1280px] mx-auto w-full wrapper-pad">
      <Link href="/">
        <HeaderLogo />
      </Link>
      <nav className="md:flex items-center gap-[4px] hidden">
        {navs.map((nav) => {
          return (
            <Link href={nav.path} key={nav.path}>
              <div
                className={`py-[8px] px-[29px] rounded-[6px] hover:bg-[#F4F4F4] text-[14px] font-medium  transition-all duration-[500ms] ${pathname == "/ramadan" ? "text-white hover:text-sub-500" : "text-sub-500"}`}
              >
                {nav.title}
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="hidden md:block">
        <AppButton
          onClick={() => dispatch(setStoreModal(true))}
          fullWidth={false}
          mih={52}
          classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}
        >
          <span className="text-[#fff] text-[14px] font-medium">
            Open an Account
          </span>
          <ArrowRightLine/>
        </AppButton>
      </div>
      <button className="md:hidden" onClick={() => toogleMobileNav()}>
        <Hamburger />
      </button>
      <Transition
        mounted={isMobileNavActive}
        transition="pop"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <div
            style={styles}
            className="lg:hidden bg-[white] fixed top-none left-none py-xl p-md z-50 w-full"
          >
            <div className="flex justify-end">
              <button className="h-xl w-xl" onClick={() => toogleMobileNav()}>
                <Close />
              </button>
            </div>
            <nav className="flex flex-col gap-[16px] pb-[32px]">
              {navs.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-[14px] font-medium text-sub-500"
                >
                  {link.title}
                </Link>
              ))}
              <AppButton
                onClick={() => dispatch(setStoreModal(true))}
                fullWidth={false}
                mih={48}
                classNames={{ root: "py-[14px] px-[16px] rounded-[10px]" }}
              >
                <span className="text-[#fff] text-[14px] font-medium">
                  Open an Account
                </span>
              </AppButton>
            </nav>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default AppHeader;
