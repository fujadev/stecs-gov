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
		retrieveGroups: builder.query<any, void>({
			providesTags: ['groups'],
			query: CLIENT_ENDPOINTS.getGroups,
			transformResponse: ({ data }) => convertKeysCase(data, 'camelCase') as any,
		}),
	}),
});

export const { useSignInMutation, useRetrieveClientQuery, useRetrieveGroupsQuery } = apiSlice;
