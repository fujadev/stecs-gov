import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';
import { TextInput } from '@mantine/core';

interface props {
	rightSection?: ReactNode;
	leftSection?: ReactNode;
	label?: ReactNode;
	type?: HTMLInputTypeAttribute | undefined;
	placeholder?: string | undefined;
	className?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	disabled?: boolean | undefined;
	name?: string | undefined;
	onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
}
const AppInput: React.FC<props> = ({ rightSection, leftSection, name, label, placeholder, type, className = '', onBlur, disabled, onChange, value, ...props }) => {
	return (
		<TextInput
			leftSection={leftSection}
			rightSection={rightSection}
			name={name}
			className={className}
			type={type}
			disabled={disabled}
			label={label}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			onBlur={onBlur}
			classNames={{
				root: 'w-full',
				label: 'text-sm font-medium text-[#07222C]',
				input: 'focus:border-[#EAECF0] border-[#EAECF0] rounded-[8px] font-normal text-sm min-h-[40px]',
				error: 'text-[#c30010]',
			}}
			{...props}
		/>
	);
};

export default AppInput;
