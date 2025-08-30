import { SearchIcon } from '@/assets/icons/SearchIcon';
import { ChangeEventHandler, useEffect, useLayoutEffect, useRef } from 'react';

interface props {
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	value?: string | number | readonly string[] | undefined;
	placeholder?: string | undefined;
	className?: string | undefined;
}
const SearchInput: React.FC<props> = ({ onChange, value, placeholder, className = '' }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = value?.toString() || '';
		}
	}, []);
	return (
		<div className="w-full max-w-[496px] flex items-center gap-[11px] rounded-[11px] py-[15px] px-[22px] bg-[#F7F7FC]">
			<SearchIcon />
			<input
				ref={inputRef}
				autoCorrect="off"
				name="CommunitySearch"
				autoComplete="off"
				placeholder={placeholder}
				onChange={onChange}
				className={`w-full h-full bg-[transparent] text-[14px] font-medium leading-[18px] border-0 outline-0 ${className}`}
			/>
		</div>
	);
};

export default SearchInput;
