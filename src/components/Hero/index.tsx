import React, { useState } from "react";
// import classes from "./styles.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import HeaderLogo from "@/assets/icons/HeaderLogo";
import EyeClose from "@/assets/icons/EyeClose";
import EyeIcon from "@/assets/icons/EyeIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { handleMutation } from '@/config/helpers/mutation';
import { useSignUpMutation } from "@/config/api/client/slice";
import AppHeader from "@/components/Header";
import AppFooter from "@/components/AppFooter";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
    .matches(/[!@#$%^&*(),.?':{}|<>]/, 'Password must contain at least one special character (!, @, #, $, etc.)')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref('password')], "Passwords must match"),
  referral: Yup.string().label("Referral"),
  ageDeclaration: Yup.boolean().oneOf([true], 'You must declare that you are 18 years and above'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
});

const HeroSection = () => {

  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();
  const searchParams = useSearchParams()
  const refCode = searchParams.get('code')
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    await handleMutation({
      mutation: () => signUp(values).unwrap(),
      onSuccess(result: any) {
        router.push('/congratulations');
      },
    });
  }


  return (
    <section className="border-[1px] border-[#3C3B3B] rounded-[20px] p-[48px] max-w-[601px]">
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            referralCode: refCode,
            ageDeclaration: false,
            terms: false
          }}
          validateOnMount={true}
          validateOnChange={true}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
            isValid
          }) => (
            <form onSubmit={handleSubmit}>

              <div className="mb-[24px]">
                <label htmlFor="email" className="text-[#003049] text-[14px]">Email or Phone number</label>
                <div>
                  <input
                    className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full"
                    id="email"
                    onChange={handleChange("email")}
                    type="email"
                    name="email"
                    onBlur={() => setFieldTouched("email")}
                    placeholder="eg. janedoe@gmail.com"
                    value={values.email}
                  />
                </div>
                {touched.email && <small className="text-[#E63946]">{errors.email}</small>}
              </div>
              
              <div>
                <label htmlFor="password" className="text-[#003049] text-[14px]">Password</label>
                <div className="relative w-full">
                  <input
                    className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full pr-[40px]"
                    id="password"
                    onChange={handleChange("password")}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onBlur={() => setFieldTouched("password")}
                    placeholder="Your Password"
                    value={values.password}
                  />
                  {/* <div
                    className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <EyeClose /> : <EyeIcon />}
                  </div> */}
                </div>
                {touched.password && <small className="text-[#E63946]">{errors.password}</small>}
              </div>

              <span className="block text-right text-[#3A86FF] font-medium text-sm mt-[12px]">Forgot Password?</span>

              <button
                className="bg-[#3A86FF] rounded-[12px] w-full py-[15px] text-center text-[14px] text-[#FFFFFF] font-semibold mt-[32px]"
                type="submit"
                disabled={isLoading || !isValid}
              >
                {isLoading ? "Loading..." : "Log in"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>

  );
}

export default HeroSection;