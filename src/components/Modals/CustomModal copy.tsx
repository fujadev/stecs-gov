'use client';

import { ReactNode, useState } from 'react';
import { Modal } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import CancelCircle from '@/assets/icons/CancelCircle';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AppButton from '../Common/AppButton';

type ModalVariant = 'invite' | 'releasePayment' | 'status';

interface CustomModalProps {
	variant: ModalVariant;
	image?: StaticImageData;
	title?: string;
	description?: string;
	buttonText?: string;
	cancelText?: string;
	releaseText?: string;
	children?: ReactNode;
	opened: boolean;
	onClose: () => void;
}

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
});

const CustomModal = ({ variant, image, title, description, buttonText, releaseText, cancelText, children, opened, onClose }: CustomModalProps) => {
	const handleSubmit = (values: { email: string }) => {
		console.log('Form submitted:', values);
		onClose();
	};

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			withCloseButton={false}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
			size="auto"
			padding={0}
		>
			<div>
				{children && children}
				{!children && variant === 'invite' && (
					<div className="flex flex-col items-center text-center w-[719px] py-[40px]">
						{image && <Image src={image} alt="invite success" className="w-[100px] h-[100px] mb-[40px]" />}
						<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
						<p className="text-[16px] text-[#003049] mt-[24px]">{description}</p>
						<button onClick={onClose} className="mt-[40px] rounded-[12px] bg-[#3A86FF] text-white px-[61px] py-[15px] text-[16px] font-semibold">
							{buttonText}
						</button>
					</div>
				)}

				{!children && variant === 'releasePayment' && (
					<div className="flex flex-col items-center text-center w-[719px] py-[40px]">
						<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
						<p className="text-[16px] text-[#003049] mt-[24px]">{description}</p>
						<div className="flex gap-[10px]">
							<button
								onClick={() => setOpened(false)}
								className="mt-[40px] rounded-[12px] bg-[#F5F6FA] text-[#3A86FF] w-[197px] h-[50px] text-[16px] font-semibold border border-[#3A86FF]"
							>
								{cancelText}
							</button>
							<button onClick={() => setOpened(false)} className="mt-[40px] rounded-[12px] bg-[#3A86FF] text-white w-[197px] h-[50px] text-[16px] font-semibold">
								{releaseText}
							</button>
						</div>
					</div>
				)}

				{!children && variant === 'status' && (
					<div className="flex flex-col w-[719px] p-[40px]">
						<div className="flex justify-between items-center">
							<h1 className="text-[#003049] text-[24px] font-semibold">Invite Authorizer</h1>

							<div className="flex items-center gap-[16px]">
								<AppButton title={'Send Invite'} color="#3A86FF" />
								<button type="button" onClick={onClose} className="bg-[#F5F5F5] p-[12px] rounded-full cursor-pointer">
									<CancelCircle />
								</button>
							</div>
						</div>

						<h3 className="text-[16px] font-medium text-[#003049] mt-[24px]">Enter Authorizer Email</h3>

						<Formik initialValues={{ email: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
							{({ handleChange, handleSubmit, errors, touched, values, setFieldTouched }) => (
								<Form onSubmit={handleSubmit} className="mt-[16px]">
									<div>
										<input
											className="border border-[#3C3B3B] px-[16px] py-[12px] rounded-[4px] w-full"
											id="email"
											type="email"
											name="email"
											placeholder="eg. janedoe@gmail.com"
											value={values.email}
											onChange={handleChange('email')}
											onBlur={() => setFieldTouched('email')}
										/>
										{touched.email && errors.email && <small className="text-[#E63946]">{errors.email}</small>}
									</div>
								</Form>
							)}
						</Formik>
					</div>
				)}
			</div>
		</Modal>
	);
};

export default CustomModal;
