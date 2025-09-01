'use client';
import { Modal } from '@mantine/core';
import CancelCircle from '@/assets/icons/CancelCircle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppButton from '../Common/AppButton';
import { handleMutation } from '@/config/helpers/mutation';
import { useInviteAuthorizerMutation } from '@/config/api/client/slice';
import { useEffect, useState } from 'react';
// import SuccesCheckIcon from '@/assets/icons/SuccessCheckIcon';

interface CustomModalProps {
	groupId: string;
	opened: boolean;
	onClose: () => void;
}

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
});

const CustomModal = ({ opened, onClose, groupId }: CustomModalProps) => {
	const [inviteAutorizer, { isLoading: inviteLoading }] = useInviteAuthorizerMutation();
	const [inviteSuccess, setInviteSuccess] = useState(false);

	const onSubmit = async (values: { email: string }) => {
		await handleMutation({
			mutation: () => inviteAutorizer({ email: values.email, id: groupId }).unwrap(),
			onSuccess(result) {
				setInviteSuccess(true);
			},
			onError(error) {
				console.log(error);
			},
		});
	};

	const { handleChange, handleSubmit, errors, touched, values, setFieldTouched, setFieldValue } = useFormik({
		initialValues: { email: '' },
		validationSchema,
		onSubmit,
		validateOnChange: true,
	});

	useEffect(() => {
		if (!opened) setFieldValue('email', '');
	}, [opened]);

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			withCloseButton={false}
			size={719}
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
			padding={0}
		>
			{!inviteSuccess ? (
				<div className="flex flex-col p-[40px]">
					<div className="flex justify-between items-center">
						<h1 className="text-[#003049] text-[24px] font-semibold">Invite Authorizer</h1>

						<div className="flex items-center gap-[16px]">
							<button type="button" onClick={onClose} className="bg-[#F5F5F5] p-[12px] rounded-full cursor-pointer">
								<CancelCircle />
							</button>
						</div>
					</div>

					<h3 className="text-[16px] font-medium text-[#003049] mt-[24px]">Enter Authorizer Email</h3>

					<form onSubmit={handleSubmit} className="mt-[16px]">
						<div className="mb-[18px]">
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

						<AppButton loading={inviteLoading} title={'Send Invite'} color="#3A86FF" fullWidth type="submit" />
					</form>
				</div>
			) : (
				<div className="flex flex-col items-center text-center py-[40px]">
					{/* <SuccesCheckIcon /> */}
					<h3 className="text-lg font-semibold text-gray-900">Invite Successfully</h3>
					<p className="text-[16px] text-[#003049] mt-[8px]">Authorizer has been successfully invited</p>
					<div className="mx-auto w-full mt-[16px] max-w-[197px]">
						<AppButton onClick={onClose} title="Close" color="#3A86FF" fullWidth />
					</div>
				</div>
			)}
		</Modal>
	);
};

export default CustomModal;
