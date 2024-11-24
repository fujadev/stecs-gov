import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	signUp: (): string => formatEndpoint('auth/user/sign-up', namespace),
};
