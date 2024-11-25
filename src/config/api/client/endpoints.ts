import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	signUp: (): string => formatEndpoint('sign-up', namespace),
};
