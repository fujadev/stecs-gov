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
	useReleasePaymentMutation,
	useSendGroupNotificationMutation,
} = apiSlice;
