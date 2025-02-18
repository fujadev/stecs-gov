import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	donation: (): string => formatEndpoint('web-donation',namespace, { removeTrailingSlash: true }),
};
