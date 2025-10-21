'use client';

import { useEffect } from 'react';
import { Button, Flex, Modal } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';
import AppInput from '../Common/AppInput';
import { useUpdateRecipientMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';

interface CustomModalProps {
	opened: boolean;
	onClose: () => void;
	onSave?: (vals: FormValues) => void;
	data: any;
}

type FormValues = {
	email: string;
	firstName: string;
	lastName: string;
	middleName: string | null;
	nin: string;
	phoneNumber: string;
};

const schema = Yup.object().shape({
	firstName: Yup.string().min(2).required().label('First name'),
	lastName: Yup.string().min(2).required().label('Last name'),
	middleName: Yup.string().nullable().label('Middle name'),
	email: Yup.string().email().required().label('Email'),
	nin: Yup.string().matches(/^\d+$/, 'NIN must be digits only').min(8, 'NIN is too short').max(15, 'NIN is too long').required().label('NIN'),
});

const EditRecipient = ({ opened, onClose, onSave, data }: CustomModalProps) => {
	const [updateRecipient, { isLoading }] = useUpdateRecipientMutation();

	const handleClose = () => {
		reset();
		onClose();
	};

	const handleUpdateRecipient = (vals: FormValues) => {
		if (!data?.id) return;
		handleMutation({
			mutation: () => updateRecipient({ id: data?.id, ...vals }).unwrap(),
			onSuccess() {
				handleClose();
			},
			onComplete() {},
		});
	};

	const { getInputProps, onSubmit, setValues, getValues, reset } = useForm<FormValues>({
		mode: 'uncontrolled',
		validateInputOnChange: true,
		validateInputOnBlur: true,
		initialValues: {
			email: '',
			firstName: '',
			lastName: '',
			middleName: '',
			nin: '',
			phoneNumber: '',
		},
		validate: yupResolver(schema),
	});

	useEffect(() => {
		if (data)
			setValues({
				email: data.email,
				firstName: data?.firstName,
				lastName: data?.lastName,
				middleName: data?.middleName,
				nin: data?.nin,
				phoneNumber: data?.phoneNumber,
			});
	}, [data, opened]);

	return (
		<Modal opened={opened} onClose={handleClose} centered size={719} withCloseButton={false} overlayProps={{ backgroundOpacity: 0.55, blur: 3 }} padding={24}>
			<h3 className="text-lg font-semibold text-gray-900 mb-[24px]">Edit Recepient</h3>

			<form onSubmit={onSubmit(handleUpdateRecipient)}>
				<div>
					<Flex direction={{ base: 'column', xs: 'row' }} gap={{ base: '24px', sm: 'md' }} justify="space-between" align="flex-start" className="mb-[16px]">
						<AppInput placeholder="Enter first name" label="First Name" {...getInputProps('firstName')} />
						<AppInput placeholder="Enter last name" label="Last Name" {...getInputProps('lastName')} />
					</Flex>

					<Flex direction={{ base: 'column', xs: 'row' }} gap={{ base: '24px', sm: 'md' }} justify="space-between" align="flex-start" className="mb-[16px]">
						<AppInput placeholder="Enter middle name (optional)" label="Middle Name" {...getInputProps('middleName')} />
						<AppInput placeholder="Enter email address" label="Email" type="email" {...getInputProps('email')} />
					</Flex>

					<Flex direction={{ base: 'column', xs: 'row' }} gap={{ base: '24px', sm: 'md' }} justify="space-between" align="flex-start">
						<AppInput placeholder="Enter NIN" label="NIN" {...getInputProps('nin')} />
						<AppInput placeholder="Enter Phone" label="Phone" {...getInputProps('phoneNumber')} />
					</Flex>
				</div>
				<Flex direction={{ base: 'column', xs: 'row' }} className="mt-[16px]" gap={{ base: '24px', sm: 'md' }} justify="center" align="center">
					<Button onClick={handleClose} miw={197} variant="outline" color="#3A86FF" className="h-[41px] text-[14px] font-semibold rounded-[12px]">
						Cancel
					</Button>
					<Button loading={isLoading} type="submit" miw={197} className="h-[41px] bg-[#008752] text-white text-[14px] font-semibold rounded-[12px]">
						Update Recipient
					</Button>
				</Flex>
			</form>
		</Modal>
	);
};

export default EditRecipient;
