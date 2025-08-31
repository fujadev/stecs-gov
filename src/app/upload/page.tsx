'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Upload from '@/assets/icons/Upload';
import AppHeader from '@/components/Header';
import { useCreateGroupMutation } from '@/config/api/client/slice';
import { handleMutation } from '@/config/helpers/mutation';
import AppButton from '@/components/Common/AppButton';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Group name is required'),
	file: Yup.mixed()
		.required('CSV file is required')
		.test('fileFormat', 'Only PDF files are allowed', (value: File) => (value ? value.type === 'application/csv' || value.name.endsWith('.csv') : false))
		.test('fileSize', 'File too large (max 2MB)', (value: File) => (value ? value.size <= 2 * 1024 * 1024 : false)),
});

const Uploadcsv = () => {
	const [createGroup, { isLoading }] = useCreateGroupMutation();

	const router = useRouter();

	const handleSubmit = async (values: any) => {
		const formData = new FormData();
		formData.append('name', values.name);
		formData.append('file', values.file);

		await handleMutation({
			mutation: () => createGroup(formData).unwrap(),
			showSuccessToast: false,
			onSuccess(result) {
				console.log('====================================');
				console.log(result);
				console.log('====================================');
			},
		});
	};

	return (
		<div className="bg-[#F5F6FA] min-h-screen">
			<AppHeader />
			<main className="flex justify-center items-center min-h-[calc(100vh-100px)] px-4">
				<Formik initialValues={{ name: '', file: null }} validateOnChange={true} validationSchema={validationSchema} onSubmit={handleSubmit}>
					{({ handleChange, setFieldValue, errors, touched, values, isSubmitting, setFieldTouched }) => (
						<Form>
							<h1 className="text-[24px] font-medium mb-[32px] text-center text-[#003049]">Upload CSV for Payment</h1>

							<div className="bg-white w-[719px] p-[40px] rounded-[12px] shadow-md mb-[40px]">
								{/* Your existing form content */}
								<div className="mb-[20px]">
									<label htmlFor="name" className="block text-[#003049] text-[16px] font-medium mb-[16px]">
										Enter Group Name
									</label>
									<input
										className="border border-[#3C3B3B] px-[16px] py-[12px] rounded-[4px] w-full"
										id="name"
										type="text"
										name="name"
										placeholder="e.g. Staff Salaries - August"
										value={values.name}
										onChange={handleChange}
									/>
									{touched.name && errors.name && <small className="text-[#E63946]">{errors.name}</small>}
								</div>

								<div className="mb-[20px]">
									<label className="block text-[#003049] text-[16px] font-medium mb-[16px]">Upload CV (PDF)</label>
									<input
										id="file"
										name="file"
										type="file"
										accept=".csv"
										className="hidden"
										onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
											setFieldTouched('file', true, true);
											setFieldValue('file', event.currentTarget.files?.[0] || null);
										}}
									/>
									<label
										htmlFor="file"
										className="flex flex-col items-center justify-center border border-dashed border-[#3C3B3B] rounded-[8px] h-[141px] cursor-pointer hover:bg-gray-50"
									>
										<Upload />
										<span className="block mt-[10px] text-[#888585] text-[14px] font-normal">{values.file ? values.file.name : 'Click to browse file or drag and drop here'}</span>
									</label>

									{touched?.file && errors?.file && <small className="text-[#E63946]">{errors.file as string}</small>}
								</div>
							</div>

							<div className="flex gap-[10px] justify-end">
								<AppButton onClick={() => router.back()} variant="outline" title="Cancel" color="#3A86FF" />
								<AppButton loading={isLoading} title="Upload CSV" color="#3A86FF" type="submit" />
							</div>
						</Form>
					)}
				</Formik>
			</main>
		</div>
	);
};

export default Uploadcsv;
