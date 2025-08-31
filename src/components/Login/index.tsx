'use client';

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useSignInMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';
import AppHeader from '@/components/Header';
import AppButton from '../Common/AppButton';
import { storeToken, storeUser } from '@/config/api/auth/slice';
import { useAppDispatch } from '@/config/api/config/store';
import { ROUTES } from '@/config/routes';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

const Login = () => {
	const router = useRouter();
	const [signIn, { isLoading }] = useSignInMutation();
	const dispatch = useAppDispatch();

	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (values: any) => {
		await handleMutation({
			mutation: () => signIn(values).unwrap(),
			onSuccess(result: any) {
				const { token, ...rest } = result?.data;
				dispatch(storeToken(token));
				dispatch(storeUser(rest));
				router.push(ROUTES.DASHBOARD);
			},
		});
	};

	return (
		<section className="min-h-screen flex flex-col bg-[#F5F6FA]">
			<AppHeader />

			<div className="flex flex-1 items-center justify-center px-4">
				<div className="w-full max-w-[601px] shrink-0 border border-[#3C3B3B] rounded-[20px] p-[48px] bg-white shadow-sm">
					<Formik
						initialValues={{
							email: '',
							password: '',
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({ handleChange, handleSubmit, errors, touched, values, setFieldTouched, isValid }) => (
							<form onSubmit={handleSubmit}>
								<div className="mb-[24px]">
									<label htmlFor="email" className="text-[#003049] text-[14px]">
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="eg. janedoe@gmail.com"
										className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full"
										value={values.email}
										onChange={handleChange('email')}
										onBlur={() => setFieldTouched('email')}
									/>
									{touched.email && <small className="text-[#E63946]">{errors.email}</small>}
								</div>

								<div className="relative">
									<input
										id="password"
										name="password"
										type={showPassword ? 'text' : 'password'}
										placeholder="Your Password"
										className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full pr-12"
										value={values.password}
										onChange={handleChange('password')}
										onBlur={() => setFieldTouched('password')}
									/>

									{touched.password && <small className="text-[#E63946]">{errors.password}</small>}
								</div>

								<span className="block text-right text-[#3A86FF] font-medium text-sm mt-[12px] cursor-pointer">Forgot Password?</span>
								<div className="mt-[32px]">
									<AppButton loading={isLoading} type="submit" title="Log in" w="100%" mih={60} color="#3A86FF" />
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default Login;
