import { createRoute } from './helpers/globals';

export const ROUTES = {
	LOGIN: '/',
	UPLOAD: '/upload',
	DASHBOARD: '/dashboard',
	GROUP_DASHBOARD: (id: string) => `/group/${id}`,
};
