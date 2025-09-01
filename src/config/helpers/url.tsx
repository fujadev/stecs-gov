// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#encoding_for_content-disposition_and_link_headers
import dayjs from 'dayjs';

import { statusClasses } from './tailwindClasses';

/** Can handle strings with parentheses */
export const safeEncodeURIComponent = (s: string): string => encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16));

export const isValidUrl = (url: string): boolean =>
	/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(
		url
	);

type QueryParams = Record<string, number | string>;

export const createQueryString = (params: QueryParams): string =>
	Object.entries(params)
		.map(([key, value]) => `${safeEncodeURIComponent(key)}=${safeEncodeURIComponent(String(value))}`)
		.join('&');

export const formatEndpoint = (
	endpoint: string,
	namespace: string,
	{ removeTrailingSlash, ...options }: { queryParams?: QueryParams; removeTrailingSlash?: boolean } = {
		removeTrailingSlash: false,
	}
): string => {
	const base = endpoint ? `${namespace}/${endpoint}/` : `${namespace}/`;
	const query = options.queryParams ? `?${createQueryString(options.queryParams)}` : '';
	// Remove last slash if removeTrailingSlash is true
	return `${removeTrailingSlash ? base.replace(/\/$/, '') : base}${query}`;
};
// eslint-disable-next-line
export const validateImageSize2mb = (value: any) => {
	if (!value) return true;
	// eslint-disable-next-line
	return value && value.size <= 2097152;
};
// eslint-disable-next-line
export const validateImageType = (value: any) => {
	if (!value) return true;
	const supportedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
	// eslint-disable-next-line
	return supportedTypes.includes(value.type);
};

export const individualVerificationData = ['Drivers License', 'Voters Card', 'International Passport'];
export const businessVerificationData = ['CAC'];
export const formatAmount = (amount: number) => {
	return new Intl.NumberFormat('en-US').format(amount);
};

export const groupTableColumn = [
	{
		header: 'Recipient name',

		render: (row: any) => (
			<span>
				{row?.lastName} {row?.firstName}
			</span>
		),
	},
	{ header: 'Phone Number', accessor: 'phoneNumber' },
	{ header: 'NIN', accessor: 'nin' },
	{
		header: 'Amount',
		render: (row: any) => <span>{row?.amount || 0}</span>,
	},
	{
		header: 'Transfer Status',
		render: (row: any) => <span className={statusClasses[row.status] ?? 'px-3 py-1 rounded-full text-sm border'}>{row.status}</span>,
	},
	{
		header: 'Withdrawal Status',
		render: (row: any) => <span className={statusClasses['Pending'] ?? 'px-3 py-1 rounded-full text-sm border'}>Pending</span>,
	},
];
export const groupsTableColumn = [
	{ header: 'Group name', accessor: 'groupName' },
	{
		header: 'Date Uploaded',
		render: (row: any) => <span>{dayjs(row.createdAt).format('DD MMM, YYYY')}</span>,
	},
	{ header: 'Total Amount', accessor: 'totalAmount' },
	{
		header: 'Recipient',

		render: (row: any) => <span>{row?.beneficiaries?.length}</span>,
	},
	{
		header: 'Status',
		render: (row: any) => <span className={statusClasses[row.status] ?? 'px-3 py-1 rounded-full text-sm border'}>{row.status}</span>,
	},
];

export const tableData2 = [
	{
		recipientName: 'Fumilayo Bukunmi',
		phoneNumber: '09010001000',
		nin: '123******456',
		amount: '₦15,000,000',
		status: 'Pending',
	},
	{
		recipientName: 'Adebayo Chinedu',
		phoneNumber: '08120002000',
		nin: '987******321',
		amount: '₦10,500,000',
		status: 'Authorized',
	},
	{
		recipientName: 'Ngozi Okafor',
		phoneNumber: '08030003000',
		nin: '654******789',
		amount: '₦7,250,000',
		status: 'Completed',
	},
	{
		recipientName: 'Ibrahim Musa',
		phoneNumber: '07040004000',
		nin: '111******222',
		amount: '₦20,000,000',
		status: 'Processing',
	},
	{
		recipientName: 'Chioma Eze',
		phoneNumber: '09050005000',
		nin: '333******999',
		amount: '₦5,000,000',
		status: 'Pending',
	},
	{
		recipientName: 'Fumilayo Bukunmi',
		phoneNumber: '09010001000',
		nin: '123******456',
		amount: '₦15,000,000',
		status: 'Pending',
	},
];

export const tableData1 = [
	{
		transactionType: 'Student Payment',
		date: '08 Apr, 2024',
		amount: '₦15,000,000',
		reference: 120,
		status: 'Authorized',
	},
	{
		transactionType: 'Student Payment',
		date: '12 Apr, 2024',
		amount: '₦9,500,000',
		reference: 121,
		status: 'Pending',
	},
	{
		transactionType: 'Student Payment',
		date: '15 Apr, 2024',
		amount: '₦25,000,000',
		reference: 122,
		status: 'Completed',
	},
	{
		transactionType: 'Student Payment',
		date: '17 Apr, 2024',
		amount: '₦7,200,000',
		reference: 123,
		status: 'Processing',
	},
	{
		transactionType: 'Student Payment',
		date: '20 Apr, 2024',
		amount: '₦18,300,000',
		reference: 124,
		status: 'Authorized',
	},
	{
		transactionType: 'Student Payment',
		date: '23 Apr, 2024',
		amount: '₦12,000,000',
		reference: 125,
		status: 'Pending',
	},
	{
		transactionType: 'Student Payment',
		date: '25 Apr, 2024',
		amount: '₦30,000,000',
		reference: 126,
		status: 'Completed',
	},
	{
		transactionType: 'Student Payment',
		date: '28 Apr, 2024',
		amount: '₦4,500,000',
		reference: 127,
		status: 'Processing',
	},
];
