'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AppHeader from '@/components/Header';
import checklist from '../../assets/images/checklist.png';
import Image from 'next/image';
import { useGetBankListQuery, useGetBankAccountDetailsMutation } from '@/config/api/client/slice';

const validationSchema = Yup.object().shape({
	bankCode: Yup.string().required('Bank is required'),
	accountNumber: Yup.string()
		.required('Account number is required')
		.matches(/^[0-9]+$/, 'Must be only digits')
		.length(10, 'Account number must be 10 digits'),
	accountHolder: Yup.string().required('Account holder name is required'),
});

const PayoutDetails = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const { data: bankList } = useGetBankListQuery();

	const [getBankAccountDetails] = useGetBankAccountDetailsMutation();

	const fetchAccountDetails = async (
		accountNumber: string,
		bankCode: string,
		setFieldValue: any
	) => {
		setLoading(true);
		try {
			console.log('Making API call with:', {
				account_number: accountNumber,
				sort_code: bankCode,
			});

			const response = await getBankAccountDetails({
				account_number: accountNumber,
				sort_code: bankCode,
			}).unwrap();

			const { accountName } = response || {};
			setFieldValue('accountHolder', accountName || '');

			if (accountName) {

			} else {

			}
		} catch (error) {
			console.error('Failed to fetch account details:', error);
		} finally {
			setLoading(false);
		}
	};


	const handleSubmit = async (values: any) => {
		try {
			console.log('Submitted payout details:', values);
			setShowSuccess(true);
		} catch (err) {
			console.error('Transfer failed:', err);
		}
	};

	return (
		<>
			<AppHeader />
			<div className="max-w-[1137px] px-[20px] mx-auto mt-[32px] py-[20px]">
				{!showSuccess ? (
					<div>
						<h1 className="text-[14px] md:text-[24px] font-bold text-[#003049] text-center">Ekiti State</h1>
						<p className="text-[14px] mt-[24px] text-[#003049] font-medium text-left md:text-center">
							Enter your account details below to receive payment
						</p>

						<div className="bg-[#F5F6FA] px-[24px] py-[20px] w-full text-center mt-[16px] mb-[24px]">
							<span className="block text-[#003049] text-[20px] font-bold">₦5,000</span>
							<span className="block text-[#003049] text-[16px] font-medium mt-[16px]">Payment for students</span>
						</div>

						<Formik
							initialValues={{
								bankCode: '',
								accountNumber: '',
								accountHolder: '',
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
								isValid,
								dirty,
								setFieldValue,
								setFieldTouched,
							}) => (
								<Form onSubmit={handleSubmit}>
									<div className="flex flex-col justify-between">
										<div className="mb-[24px]">
											<label htmlFor="bankCode" className="text-[#003049] text-[14px] font-semibold">
												Select Bank
											</label>
											<select
												id="bankCode"
												name="bankCode"
												className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full mt-[8px]"
												value={values.bankCode}
												onChange={handleChange}
											>
												<option value="">-- Select Bank --</option>
												{bankList?.map((bank: any) => (
													<option key={bank.code} value={bank.code}>
														{bank.name}
													</option>
												))}
											</select>
											{touched.bankCode && errors.bankCode && (
												<small className="text-[#E63946]">{errors.bankCode}</small>
											)}
										</div>

										<div className="mb-[24px]">
											<label htmlFor="accountNumber" className="text-[#003049] text-[14px] font-semibold">
												Account Number
											</label>
											<input
												id="accountNumber"
												name="accountNumber"
												type="text"
												placeholder="Enter 10-digit account number"
												className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full mt-[8px]"
												value={values.accountNumber}
												onChange={async (e) => {
													handleChange(e);
													if (e.target.value.length === 10 && values.bankCode) {
														await fetchAccountDetails(e.target.value, values.bankCode, setFieldValue);
													}
												}}
												onBlur={() => setFieldTouched('accountNumber')}
											/>
											{touched.accountNumber && errors.accountNumber && (
												<small className="text-[#E63946]">{errors.accountNumber}</small>
											)}
										</div>

										<div className="mb-[24px]">
											<label htmlFor="accountHolder" className="text-[#003049] text-[14px] font-semibold">
												Account Holder Name
											</label>
											<input
												id="accountHolder"
												name="accountHolder"
												type="text"
												placeholder="Account name will appear here"
												className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full mt-[8px]"
												value={values.accountHolder}
												readOnly
											/>
											{touched.accountHolder && errors.accountHolder && (
												<small className="text-[#E63946]">{errors.accountHolder}</small>
											)}
										</div>
									</div>

									<button
										type="submit"
										className="bg-[#3A86FF] rounded-[12px] w-full py-[15px] text-[14px] text-white font-semibold mt-[16px]"
										disabled={loading || !isValid || !dirty}
									>
										{loading ? 'Verifying...' : 'Submit'}
									</button>
								</Form>
							)}
						</Formik>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center mt-[40px]">
						<Image src={checklist} alt="Success checklist" width={129} height={129} />
						<span className="text-[20px] text-[#000000] font-bold mb-[12px] text-center">
							Payment Sent Successfully
						</span>
						<span className="text-[14px] text-[#3C3B3B] font-[400] text-center">
							Payment of ₦5,000 has been successfully sent to your account
						</span>
						<button
							type="button"
							className="bg-[#3A86FF] rounded-[12px] w-full py-[15px] text-[14px] text-white font-semibold mt-[24px]"
							onClick={() => router.push('/')}
						>
							Close
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default PayoutDetails;
