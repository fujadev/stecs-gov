import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	signIn: (): string => formatEndpoint('admin/login', namespace),
	getUser: (): string => formatEndpoint('admin/user', namespace),
	getGroups: (): string => formatEndpoint('group', namespace),
};
