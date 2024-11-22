export const numberWithCommas = (x: string | number): string => {
	const val = Math.round(Number(x) * 100) / 100;
	const parts = val.toFixed(2).toString().split('.');
	const num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
	return num;
};
