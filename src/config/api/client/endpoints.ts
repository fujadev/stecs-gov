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
	sendSingleNotification: (id: string): string => formatEndpoint(`recipient/resend-notification/${id}`, namespace),
	getBankList: (): string => formatEndpoint('get-bank-list', namespace),
	getBankAccountDetails: (): string => formatEndpoint('get-bank-account-details', namespace),
	makeTransfer: (): string => formatEndpoint('recipient/make-transfer', namespace),
	getPaymentData: (recipientId: string): string => formatEndpoint(`recipient/payment-data/${recipientId}`, namespace),
	deleteRecepientAccount: (recipientId: string): string => formatEndpoint(`recipient/delete/${recipientId}`, namespace),
	bulkDeleteRecepient: (): string => formatEndpoint('recipient/bulk-delete', namespace),
	bulkRecallFunds: (groupID: string): string => formatEndpoint(`group/${groupID}/initiate-take-back`, namespace),
	updateRecepient: (recipientId: string): string => formatEndpoint(`recipient/update/${recipientId}`, namespace),
	recallRecipientFunds: (recipientId: string): string => formatEndpoint(`recipient/take-back/${recipientId}`, namespace),
};
