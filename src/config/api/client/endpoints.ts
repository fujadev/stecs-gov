import { formatEndpoint } from '@/config/helpers/url';

const namespace = '';

export const CLIENT_ENDPOINTS = {
	retrieveClient: (): string => formatEndpoint('user/me', namespace),
	signIn: (): string => formatEndpoint('auth/user/login', namespace),
	signUp: (): string => formatEndpoint('auth/user/sign-up', namespace),
	updateUser: (): string => formatEndpoint('user/update', namespace),
	investments: (): string => formatEndpoint('user/investments', namespace),
	investment: (id: string): string => formatEndpoint('business/investment/read/:investmentId', namespace).replace(':investmentId', id),
	transactions: (): string => formatEndpoint('user/transactions', namespace),
	countries: (): string => formatEndpoint('location/countries', namespace),
	generateWallet: (): string => formatEndpoint('user/generate-wallet', namespace),
	state: (id: string): string => formatEndpoint('location/states/:country_id', namespace).replace(':country_id', id),
	cities: ({ countryName, stateName }: { stateName: string; countryName: string }): string => formatEndpoint(`location/cities/${countryName}/${stateName}`, namespace),
	forgotPassword: (): string => formatEndpoint('auth/user/forgot-password', namespace),
	resetPassword: (): string => formatEndpoint('auth/user/change-password', namespace),
	resendEmailVerification: (): string => formatEndpoint('auth/user/resend-email-verification', namespace),
	verifyEmail: (): string => formatEndpoint('auth/user/verify-email', namespace)
};
