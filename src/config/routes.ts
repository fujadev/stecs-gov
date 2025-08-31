import { createRoute } from './helpers/globals';

export const ROUTES = {
	LOGIN: '/',
	UPLOAD: '/upload',
	DASHBOARD: '/dashboard',
	PAYOUTDETAILS: '/payout-details',
	GROUP_DASHBOARD: (id: string) => `/group/${id}`,
};
