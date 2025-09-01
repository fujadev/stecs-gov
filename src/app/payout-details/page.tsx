'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import AppHeader from '@/components/Header';
import checklist from '../../assets/images/checklist.png';
import Image from 'next/image';
import { useGetBankListQuery, useGetBankAccountDetailsMutation, useMakeTransferMutation, useGetPaymentDataQuery } from '@/config/api/client/slice';
import { numberWithCommas } from '@/config/helpers/globals';
import { Button, Loader, LoadingOverlay } from '@mantine/core';
import AppSelect from '@/components/Common/AppSelect';
import { handleMutation } from '@/config/helpers/mutation';

const validationSchema = Yup.object().shape({
	bankCode: Yup.string().required('Bank is required'),
	accountNumber: Yup.string()
		.required('Account number is required')
		.matches(/^[0-9]+$/, 'Must be only digits')
		.length(10, 'Account number must be 10 digits'),
	accountName: Yup.string().required('Account name is required'),
});

const PayoutDetails = () => {
	const router = useRouter();
	const [showSuccess, setShowSuccess] = useState(false);

	const { data: bankList, isLoading: bankListLoading } = useGetBankListQuery();
	const [getBankAccountDetails, { isLoading: resolvingAccount }] = useGetBankAccountDetailsMutation();
	const [makeTransfer, { isLoading: transferLoading }] = useMakeTransferMutation();
	const searchParams = useSearchParams();
	const recipientId = searchParams?.get('id') || '';

	const { data: paymentData, isLoading: detailsLoading } = useGetPaymentDataQuery(recipientId);

	const bankListSelectData = useMemo(() => {
		// eslint-disable-next-line
		const cArr = bankList;
		// eslint-disable-next-line
		if (Array.isArray(cArr)) {
			return cArr.map((v) => ({ label: v?.name || v.bankName, value: v?.code || v?.bankCode }));
		}
		return [];
	}, [bankList]);

	const onSubmit = async (values: any) => {
		const selectedBank = bankList?.find((bank: any) => bank?.code === values?.bankCode);
		const payload = {
			recipient_account_id: recipientId,
			amount: paymentData?.availableBalance,
			sort_code: values?.bankCode,
			bank_name: selectedBank?.name,
			account_number: values?.accountNumber,
			account_name: values?.accountName,
			narration: '',
		};

		handleMutation({
			mutation: () => makeTransfer(payload).unwrap(),
			onSuccess(result) {
				setShowSuccess(true);
			},
		});
	};

	const { handleChange, handleSubmit, errors, touched, values, setFieldTouched, setFieldValue } = useFormik({
		initialValues: { bankCode: '', accountNumber: '', accountName: '' },
		validationSchema,
		onSubmit,
		validateOnChange: true,
	});

	const fetchAccountDetails = (accountNumber: string, bankCode: string, setFieldValue: any) => {
		handleMutation({
			mutation: () => getBankAccountDetails({ account_number: accountNumber, sort_code: bankCode }).unwrap(),
			onSuccess(result) {
				setFieldValue('accountName', result?.accountName);
			},
		});
	};

	if (detailsLoading) {
		return (
			<div className="flex min-h-[300px] items-center justify-center">
				<Loader size={40} />
			</div>
		);
	}

	if (!recipientId) return <></>;

	return (
		<>
			<AppHeader />

			<div className="max-w-[1137px] px-[20px] mx-auto mt-[32px] py-[20px]">
				<LoadingOverlay visible={resolvingAccount} zIndex={20} overlayProps={{ blur: 2, backgroundOpacity: 0.25 }} loaderProps={{ type: 'oval', size: 'md' }} />

				{!showSuccess ? (
					<div>
						<h1 className="text-[14px] md:text-[24px] font-bold text-[#003049] text-center">{paymentData?.accountName}</h1>
						<p className="text-[14px] mt-[24px] text-[#003049] font-medium text-left md:text-center">Enter your account details below to receive payment</p>

						<div className="bg-[#F5F6FA] px-[24px] py-[20px] w-full text-center mt-[16px] mb-[24px]">
							<span className="block text-[#003049] text-[20px] font-bold">₦{paymentData?.availableBalance}</span>
							<span className="block text-[#003049] text-[16px] font-medium mt-[16px]">{paymentData?.paymentGroupName}</span>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="flex flex-col justify-between">
								<AppSelect
									leftSection={bankListLoading && <Loader size={15} />}
									searchable
									placeholder="Select bank"
									label="Country"
									className="mb-[24px]"
									data={bankListSelectData}
									disabled={bankListLoading}
									value={values?.bankCode}
									onChange={(val) => {
										setFieldValue('bankCode', val);
									}}
								/>

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
										value={values?.accountNumber}
										onChange={async (e) => {
											handleChange(e);
											if (e?.target?.value?.length === 10 && values?.bankCode) {
												await fetchAccountDetails(e?.target?.value, values?.bankCode, setFieldValue);
											}
										}}
										onBlur={() => setFieldTouched('accountNumber')}
									/>
									{touched?.accountNumber && errors?.accountNumber && <small className="text-[#E63946]">{errors?.accountNumber}</small>}
								</div>

								<div className="mb-[24px]">
									<label htmlFor="accountName" className="text-[#003049] text-[14px] font-semibold">
										Account Holder Name
									</label>
									<input
										id="accountName"
										name="accountName"
										type="text"
										placeholder="Account name will appear here"
										className="border border-[#92929D] px-[16px] py-[12px] rounded-[4px] w-full mt-[8px]"
										value={values?.accountName}
										readOnly
									/>
									{touched?.accountName && errors?.accountName && <small className="text-[#E63946]">{errors?.accountName}</small>}
								</div>
							</div>

							<Button
								w={'100%'}
								loading={transferLoading}
								onClick={() => handleSubmit()}
								miw={197}
								className="h-[41px] bg-[#008752] text-white text-[14px] font-semibold rounded-[12px]"
							>
								Submit
							</Button>
						</form>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center mt-[40px]">
						<Image src={checklist} alt="Success checklist" width={129} height={129} />
						<span className="text-[20px] text-[#000000] font-bold mb-[12px] text-center">Payment Sent Successfully</span>
						<span className="text-[14px] text-[#3C3B3B] font-[400] text-center">
							Payment of ₦{numberWithCommas(paymentData?.payoutAmount)} has been successfully sent to your account
						</span>
						<button type="button" className="bg-[#008752] rounded-[12px] w-full py-[15px] text-[14px] text-white font-semibold mt-[24px]" onClick={() => router.push('/')}>
							Close
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default PayoutDetails;
