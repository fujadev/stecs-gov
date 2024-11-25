"use client"

import React, { useState } from "react";
import classes from "./styles.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import HeaderLogo from "@/assets/icons/HeaderLogo";
import EyeClose from "@/assets/icons/EyeClose";
import EyeIcon from "@/assets/icons/EyeIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { handleMutation } from '@/config/helpers/mutation';
import { useSignUpMutation } from "@/config/api/client/slice";

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

export default function Register() {
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
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        // congratulations
        // router.push('/verify-email');
      },
    });
  }

  return (
    <div className="wrapper-pad max-w-[1216px] mx-auto pt-[32px]">
      <Link href='/'>
        <HeaderLogo />
      </Link>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <h1 className={classes.title}>Accept your invite to Stecs</h1>
          <p className={classes.subtitle}>Sign up for Stecs</p>
        </header>
        <main className={classes.mainContent}>
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
              <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.formField}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    onChange={handleChange("email")}
                    type="email"
                    name="email"
                    onBlur={() => setFieldTouched("email")}
                    placeholder="Enter your email"
                    value={values.email}
                  />
                  {touched.email && <small className="text-[red]">{errors.email}</small>}

                </div>

                <div className={classes.formField}>
                  <label htmlFor="password">Password</label>
                  <div className={classes.passwordContainer}>
                    <input
                      id="password"
                      onChange={handleChange("password")}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onBlur={() => setFieldTouched("password")}
                      placeholder="Enter your password"
                      className={classes.passwordInput}
                      value={values.password}
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className={classes.eyeContainer}
                    >
                      <div className="cursor-pointer">
                        {!showPassword ? <EyeClose /> : <EyeIcon />}
                      </div>
                    </div>
                  </div>
                  {touched.password && <small className="text-[red]">{errors.password}</small>}
                </div>

                <div className={classes.formField}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className={classes.passwordContainer}>
                    <input
                      id="confirmPassword"
                      onChange={handleChange("confirmPassword")}
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      onBlur={() => setFieldTouched("confirmPassword")}
                      placeholder="Confirm your password"
                      className={classes.passwordInput}
                      value={values.confirmPassword}
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className={classes.eyeContainer}
                    >
                      <div className="cursor-pointer">
                        {!showPassword ? <EyeClose /> : <EyeIcon />}
                      </div>
                    </div>
                  </div>
                  {touched.confirmPassword && <small className="text-[red]">{errors.confirmPassword}</small>}
                </div>

                <div className={classes.formField}>
                  <label htmlFor="referral">Referral Code</label>
                  <input
                    id="referral"
                    onChange={handleChange("referral")}
                    type="text"
                    readOnly
                    name="referral"
                    onBlur={() => setFieldTouched("referral")}
                    placeholder="Enter your referral code"
                    value={values.referralCode || ''}
                  />
                </div>

                <div className={classes.checkboxGroup}>
                  <div className={classes.checkboxField}>
                    <div className={classes.checkboxWrapper}>
                      <input
                        id="ageDeclaration"
                        type="checkbox"
                        onChange={handleChange("ageDeclaration")}
                        onBlur={() => setFieldTouched("ageDeclaration")}
                        checked={values.ageDeclaration}
                      />
                      <label htmlFor="ageDeclaration">I am 18 years and above</label>
                    </div>
                    {touched.ageDeclaration && <small className="text-[red]">{errors.ageDeclaration}</small>}
                  </div>
                  <div className={classes.checkboxField}>
                    <div className={classes.checkboxWrapper}>
                      <input
                        id="terms"
                        type="checkbox"
                        onChange={handleChange("terms")}
                        onBlur={() => setFieldTouched("terms")}
                        checked={values.terms}
                      />
                      <label htmlFor="terms">
                        By clicking the sign-up button, you have read and agree to the
                        <Link href='/terms' target="_blank"> Terms and Conditions </Link>
                        and
                        <Link href='/privacy-policy' target="_blank"> Privacy Policy </Link>
                        for Stecs.
                      </label>
                    </div>
                    {touched.terms && <small className="text-[red]">{errors.terms}</small>}
                  </div>
                </div>

                <button
                  className={classes.submitButton}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? <div className={classes.loader}></div> : "Sign Up"}
                </button>
              </form>
            )}
          </Formik>
        </main>
      </div>
    </div>
  );
}