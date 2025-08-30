"use client";

import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useSignUpMutation } from "@/config/api/client/slice";
import { handleMutation } from "@/config/helpers/mutation";
import AppHeader from "@/components/Header";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(
      /[!@#$%^&*(),.?':{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get("code");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: any) => {
    // await handleMutation({
    //   mutation: () => signUp(values).unwrap(),
    //   onSuccess() {
    //     router.push("/congratulations");
    //   },
    // });
    router.push("/dashboard");
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#F5F6FA]">
      <AppHeader />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-[601px] shrink-0 border border-[#3C3B3B] rounded-[20px] p-[48px] bg-white shadow-sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
              referralCode: refCode,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              touched,
              values,
              setFieldTouched,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-[24px]">
                  <label htmlFor="email" className="text-[#003049] text-[14px]">
                    Email or Phone number
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="eg. janedoe@gmail.com"
                    className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full"
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                  />
                  {touched.email && (
                    <small className="text-[#E63946]">{errors.email}</small>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-[#003049] text-[14px]"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your Password"
                    className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full"
                    value={values.password}
                    onChange={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                  />
                  {touched.password && (
                    <small className="text-[#E63946]">{errors.password}</small>
                  )}
                </div>

                <span className="block text-right text-[#3A86FF] font-medium text-sm mt-[12px] cursor-pointer">
                  Forgot Password?
                </span>

                <button
                  type="submit"
                  className="bg-[#3A86FF] rounded-[12px] w-full py-[15px] text-[14px] text-white font-semibold mt-[32px]"
                >
                  "Log in"
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;
