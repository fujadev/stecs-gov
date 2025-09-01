export const numberWithCommas = (x: string | number = 0): string => {
	const val = Math.round(Number(x) * 100) / 100;
	const parts = val.toFixed(2).toString().split('.');
	const num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
	return num;
};

export const createRoute = (baseRoute: string, params: ArrayLike<string> | { [s: string]: string }) => {
	const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== undefined && value !== null));

	const searchParams = new URLSearchParams(filteredParams).toString();
	return `${baseRoute}${searchParams ? `?${searchParams}` : ''}`;
};

export const getInitials = (name: string) =>
	name
		.trim()
		.split(/\s+/)
		.map((w) => w[0]!.toUpperCase())
		.join('');

export const fileToBase64 = async (file: File): Promise<string> => {
	const reader = new FileReader();

	return await new Promise((resolve, reject) => {
		reader.onload = () => {
			// remove "data:*/*;base64," if backend only wants pure base64
			const base64String = (reader.result as string).split(',')[1];
			resolve(base64String);
		};
		reader.onerror = (error) => reject(error);

		reader.readAsDataURL(file);
	});
};
