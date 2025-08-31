'use client';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AppHeader from '@/components/Header';
import checklist from '../../assets/images/checklist.png';
import Image from 'next/image';

const validationSchema = Yup.object().shape({
	bankName: Yup.string().required('Bank name is required'),
	accountNumber: Yup.string()
		.required('Account number is required')
		.matches(/^[0-9]+$/, 'Must be only digits')
		.length(10, 'Account number must be 10 digits'),
	accountHolder: Yup.string().required('Account holder name is required'),
});

const PayoutDetails = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const fetchAccountDetails = async (accountNumber: string, setFieldValue: any) => {
		setLoading(true);

		setTimeout(() => {
			if (accountNumber === '1234567890') {
				setFieldValue('accountHolder', 'John Doe');
				setFieldValue('bankName', 'Access Bank');
			} else {
				setFieldValue('accountHolder', 'Jane Smith');
				setFieldValue('bankName', 'GTBank');
			}
			setLoading(false);
		}, 1500);
	};

	const handleSubmit = (values: any) => {
		console.log('Submitted payout details:', values);
	};

	return (
		<>
			<AppHeader />
			<div className="max-w-[1137px] px-[20px] mx-auto mt-[32px] py-[20px]">
				<div className="">
					<h1 className="text-[14px] md:text-[24px] font-bold  text-[#003049] text-center">Ekiti State</h1>
					<p className="text-[14px] mt-[24px] text-[#003049] font-medium text-left md:text-center">Enter your account details below to receive payment</p>

					<div className="bg-[#F5F6FA] px-[24px] py-[20px] w-full text-center mt-[16px] mb-[24px]">
						<span className="block text-[#003049] text-[20px] font-bold">₦5,000</span>
						<span className="block text-[#003049] text-[16px] font-medium mt-[16px]">Payment for students</span>
					</div>

					<Formik
						initialValues={{
							bankName: '',
							accountNumber: '',
							accountHolder: '',
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({ handleChange, handleSubmit, errors, touched, values, isValid, dirty, setFieldValue, setFieldTouched }) => (
							<Form onSubmit={handleSubmit}>
								<div className="flex flex-col justify-between">
									<div className="mb-[24px]">
										<label htmlFor="accountNumber" className="text-[#003049] text-[14px] font-semibold">
											Account Number
										</label>
										<input
											id="accountNumber"
											name="accountNumber"
											type="text"
											placeholder="Enter 10-digit account number"
											className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full  mt-[8px]"
											value={values.accountNumber}
											onChange={async (e) => {
												handleChange(e);
												if (e.target.value.length === 10) {
													await fetchAccountDetails(e.target.value, setFieldValue);
												}
											}}
											onBlur={() => setFieldTouched('accountNumber')}
										/>
										{touched.accountNumber && errors.accountNumber && <small className="text-[#E63946]">{errors.accountNumber}</small>}
									</div>

									<div className="mb-[24px]">
										<label htmlFor="bankName" className="text-[#003049] text-[14px] font-semibold">
											Bank Name
										</label>
										<input
											id="bankName"
											name="bankName"
											type="text"
											placeholder="Bank will be detected"
											className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full  mt-[8px]"
											value={values.bankName}
											readOnly
										/>
										{touched.bankName && errors.bankName && <small className="text-[#E63946]">{errors.bankName}</small>}
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
											className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full   mt-[8px]"
											value={values.accountHolder}
											readOnly
										/>
										{touched.accountHolder && errors.accountHolder && <small className="text-[#E63946]">{errors.accountHolder}</small>}
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

				<div className="flex flex-col justify-center items-center ">
					<Image src={checklist} alt="Success checklist" width={129} height={129} />
					<span className="text-[20px] text-[#00000] font-bold mb-[12px] text-center">Payment Sent Successfully</span>
					<span className="text-[14px] text-[#3C3B3B] font-[400] text-center">Payment of 5000 has been successfully sent to your account</span>
					<button type="button" className="bg-[#3A86FF] rounded-[12px] w-full py-[15px] text-[14px] text-white font-semibold mt-[24px]">
						"Close"
					</button>
				</div>
			</div>
		</>
	);
};

export default PayoutDetails;
