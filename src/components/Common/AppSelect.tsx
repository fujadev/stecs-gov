import { FocusEventHandler, ReactNode } from 'react';
import { ComboboxData, ComboboxItem, ComboboxLikeRenderOptionInput, Select } from '@mantine/core';
import ChevronDown from '@/assets/icons/ChevronDown';

interface props {
	data?: ComboboxData | undefined;
	label?: ReactNode;
	leftSection?: ReactNode;
	placeholder?: string | undefined;
	renderOption?: ((item: ComboboxLikeRenderOptionInput<ComboboxItem>) => React.ReactNode) | undefined;
	className?: string;
	onChange?: ((value: string | null, option: ComboboxItem) => void) | undefined;
	disabled?: boolean | undefined;
	name?: string | undefined;
	onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
	value?: string | null | undefined;
	searchable?: boolean;
	maxDropdownHeight?: string | number | undefined;
}
const AppSelect: React.FC<props> = ({
	leftSection,
	maxDropdownHeight = '200',
	searchable,
	data,
	label,
	placeholder,
	renderOption,
	className = '',
	value,
	disabled,
	name,
	onBlur,
	onChange,
	...props
}) => {
	return (
		<Select
			maxDropdownHeight={maxDropdownHeight}
			name={name}
			searchable={searchable}
			label={label}
			placeholder={placeholder}
			checkIconPosition="right"
			data={data}
			renderOption={renderOption}
			rightSection={
				<div className="max-w-[20px] max-h-[20px]">
					<ChevronDown />
				</div>
			}
			leftSection={leftSection}
			disabled={disabled}
			onChange={onChange}
			value={value}
			onBlur={onBlur}
			className={className}
			classNames={{
				root: 'w-full',
				label: 'text-[#003049] text-[14px] font-semibold mb-[8px]',
				input: 'focus:border-[#EAECF0] border-[#92929D] rounded-[4px] font-normal text-[14px] min-h-[45px]',
			}}
			comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
			{...props}
		/>
	);
};

export default AppSelect;
