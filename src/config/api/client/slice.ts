import { CLIENT_ENDPOINTS } from './endpoints';
import type {
	CitiesResponse,
	City,
	Client,
	GenerateWalletRequest,
	GenerateWalletResponse,
	ResetPasswordRequest,
	SignInRequest,
	SignUpRequest,
	SignUpResponse,
	State,
	StateResponse,
	UpdateClientResponse,
} from './types';
import { api } from '@/config/api/config/base';
import { createTag } from '@/config/api/config/tags';
import { convertKeysCase } from '@/config/helpers/caseConverter';

export const apiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		signIn: builder.mutation<SignUpResponse, SignInRequest>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase') as SignInRequest,
				method: 'POST',
				url: CLIENT_ENDPOINTS.signIn(),
			}),
			invalidatesTags: [createTag('Client')],
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			transformResponse: ({ user, token }) => convertKeysCase({ user, token }, 'camelCase') as SignUpResponse,
		}),
		signUp: builder.mutation<SignUpResponse, SignUpRequest>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase') as SignUpRequest,
				method: 'POST',
				url: CLIENT_ENDPOINTS.signUp(),
			}),
			invalidatesTags: [createTag('Client')],
			transformResponse: (data: SignUpResponse) => convertKeysCase(data, 'camelCase') as SignUpResponse,
		}),
		generateWallet: builder.mutation<GenerateWalletResponse, GenerateWalletRequest>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase') as GenerateWalletRequest,
				method: 'POST',
				url: CLIENT_ENDPOINTS.generateWallet(),
			}),
			invalidatesTags: [createTag('Client')],
			transformResponse: ({ data }: GenerateWalletResponse) => convertKeysCase(data, 'camelCase') as GenerateWalletResponse,
		}),
		updateClient: builder.mutation<Client, any>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase') as Client,
				method: 'POST',
				url: CLIENT_ENDPOINTS.updateUser(),
			}),
			// invalidatesTags: [createTag('Client')],
			transformResponse: ({ data }: UpdateClientResponse) => convertKeysCase(data, 'camelCase') as Client,
		}),
		updateClientFormData: builder.mutation<Client, any>({
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			query: (payload) => ({
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				body: payload,
				method: 'POST',
				url: CLIENT_ENDPOINTS.updateUser(),
			}),
			transformResponse: ({ data }: UpdateClientResponse) => convertKeysCase(data, 'camelCase') as Client,
		}),
		retrieveClient: builder.query<Client, void>({
			// providesTags: [createTag('Client')],
			query: CLIENT_ENDPOINTS.retrieveClient,
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase') as Client,
		}),

		retriveInvestments: builder.query<any, void>({
			providesTags: [createTag('Client')],
			query: CLIENT_ENDPOINTS.investments,
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		retriveTransactions: builder.query<any, void>({
			providesTags: [createTag('Client')],
			query: CLIENT_ENDPOINTS.transactions,
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		retriveCountries: builder.query<any, void>({
			providesTags: [createTag('Client')],
			query: CLIENT_ENDPOINTS.countries,
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		retriveStates: builder.mutation<State[], string>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.state(payload),
			}),
			transformResponse: ({ data }: StateResponse) => convertKeysCase(data, 'camelCase') as State[],
		}),
		retriveCities: builder.mutation<City[], { stateName: string; countryName: string }>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.cities(payload),
			}),
			transformResponse: ({ data }: CitiesResponse) => convertKeysCase(data, 'camelCase') as City[],
		}),
		retriveInvestment: builder.query<any, string>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.investment(payload),
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		sendForgotPasswordEmail: builder.mutation<any, { email: string }>({
			query: (payload) => ({
				body: payload,
				url: CLIENT_ENDPOINTS.forgotPassword(),
				method: 'POST',
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		resetPassword: builder.mutation<any, ResetPasswordRequest>({
			query: (payload) => ({
				body: payload,
				url: CLIENT_ENDPOINTS.resetPassword(),
				method: 'POST',
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		resendEmailVerification: builder.mutation<any, void>({
			query: () => ({
				method: 'GET',
				url: CLIENT_ENDPOINTS.resendEmailVerification(),
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		verifyEmail: builder.mutation<any, { token: string }>({
			query: (payload) => ({
				body: payload,
				url: CLIENT_ENDPOINTS.verifyEmail(),
				method: 'POST',
			}),
			transformResponse: (res: { message: string; data: SignUpResponse }) => convertKeysCase(res.data, 'camelCase'),
		}),
	}),
});

export const {
	useSignInMutation,
	useSignUpMutation,
	useRetrieveClientQuery,
	useRetriveInvestmentsQuery,
	useRetriveTransactionsQuery,
	useRetriveCountriesQuery,
	useRetriveStatesMutation,
	useRetriveCitiesMutation,
	useUpdateClientMutation,
	useUpdateClientFormDataMutation,
	useGenerateWalletMutation,
	useRetriveInvestmentQuery,
	useSendForgotPasswordEmailMutation,
	useResetPasswordMutation,
	useResendEmailVerificationMutation,
	useVerifyEmailMutation,
} = apiSlice;
