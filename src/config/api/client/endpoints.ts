import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	signIn: (): string => formatEndpoint('admin/login', namespace),
	getUser: (): string => formatEndpoint('admin/current-user', namespace),
	account: (): string => formatEndpoint('account', namespace),
	group: (): string => formatEndpoint('group', namespace),
	singleGroup: (id: string): string => formatEndpoint(`group/${id}`, namespace),
	inviteAuthorizer: (id: string, email: string): string => formatEndpoint(`group/${id}/invite-authorizer`, namespace, { queryParams: { email } }),
	releasePayment: (id: string): string => formatEndpoint(`group/${id}/release-payment`, namespace),
	sendNotification: (id: string): string => formatEndpoint(`group/${id}/send-notifications`, namespace),
};
