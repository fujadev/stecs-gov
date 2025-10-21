import { CLIENT_ENDPOINTS } from './endpoints';
import { api } from '@/config/api/config/base';
import { convertKeysCase } from '@/config/helpers/caseConverter';

export const apiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		signIn: builder.mutation<any, { email: string; password: string }>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase'),
				method: 'POST',
				url: CLIENT_ENDPOINTS.signIn(),
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
		retrieveClient: builder.query<any, void>({
			providesTags: ['user'],
			query: CLIENT_ENDPOINTS.getUser,
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase') as any,
		}),
		retrieveAccount: builder.query<any, void>({
			providesTags: ['user'],
			query: CLIENT_ENDPOINTS.account,
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase') as any,
		}),
		retrieveGroups: builder.query<any, void>({
			providesTags: ['groups'],
			query: CLIENT_ENDPOINTS.group,
			transformResponse: ({ groups = [] }) => convertKeysCase(groups, 'camelCase') as any,
		}),
		retrieveGroup: builder.query<any, string>({
			providesTags: ['group'],
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.singleGroup(payload),
			}),
			transformResponse: ({ group }) => convertKeysCase(group, 'camelCase') as any,
		}),
		createGroup: builder.mutation<any, any>({
			invalidatesTags: ['groups'],
			query: (payload) => ({
				body: payload,
				method: 'POST',
				url: CLIENT_ENDPOINTS.group(),
			}),
			transformResponse: ({ data }: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		updateRecipient: builder.mutation<any, any>({
			invalidatesTags: ['group'],
			query: ({ id, ...rest }) => ({
				body: convertKeysCase(rest, 'snakeCase') as any,
				method: 'POST',
				url: CLIENT_ENDPOINTS.updateRecepient(id),
			}),
			transformResponse: ({ data }: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		releasePayment: builder.mutation<any, string>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.releasePayment(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		inviteAuthorizer: builder.mutation<any, { id: string; email: string }>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.inviteAuthorizer(payload.id, payload.email),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		sendGroupNotification: builder.mutation<any, string>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.sendNotification(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		sendSingleNotification: builder.mutation<any, string>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.sendSingleNotification(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		recallRecipientFunds: builder.mutation<any, string>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				method: 'GET',
				url: CLIENT_ENDPOINTS.recallRecipientFunds(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		deleteBeneficiaryAccount: builder.mutation<any, string>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				method: 'DELETE',
				url: CLIENT_ENDPOINTS.deleteRecepientAccount(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		bulkDeleteBeneficiary: builder.mutation<any, string[]>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				body: { ids: payload },
				method: 'POST',
				url: CLIENT_ENDPOINTS.bulkDeleteRecepient(),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		bulkRecallFunds: builder.mutation<any, string>({
			invalidatesTags: ['group'],
			query: (payload) => ({
				method: 'GET',
				url: CLIENT_ENDPOINTS.bulkRecallFunds(payload),
			}),
			transformResponse: (data: any) => convertKeysCase(data, 'camelCase') as any,
		}),
		getBankList: builder.query<any, void>({
			query: CLIENT_ENDPOINTS.getBankList,
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase') as any,
		}),
		getBankAccountDetails: builder.mutation<any, { account_number: string; sort_code: string }>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.getBankAccountDetails(),
				method: 'POST',
				body: payload,
			}),
			transformResponse: ({ data }: any) => convertKeysCase(data, 'camelCase'),
		}),
		makeTransfer: builder.mutation<any, any>({
			query: (payload) => ({
				url: CLIENT_ENDPOINTS.makeTransfer(),
				method: 'POST',
				body: convertKeysCase(payload, 'snakeCase'),
			}),
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase'),
		}),
		getPaymentData: builder.query<any, any>({
			query: (recipientId: string) => CLIENT_ENDPOINTS.getPaymentData(recipientId),
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase'),
		}),
	}),
});

export const {
	useSignInMutation,
	useRetrieveClientQuery,
	useRetrieveGroupsQuery,
	useCreateGroupMutation,
	useRetrieveGroupQuery,
	useRetrieveAccountQuery,
	useInviteAuthorizerMutation,
	useGetBankListQuery,
	useGetBankAccountDetailsMutation,
	useReleasePaymentMutation,
	useSendGroupNotificationMutation,
	useMakeTransferMutation,
	useGetPaymentDataQuery,
	useSendSingleNotificationMutation,
	useDeleteBeneficiaryAccountMutation,
	useUpdateRecipientMutation,
	useBulkDeleteBeneficiaryMutation,
	useRecallRecipientFundsMutation,
	useBulkRecallFundsMutation,
} = apiSlice;
