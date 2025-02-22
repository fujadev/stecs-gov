import { CLIENT_ENDPOINTS } from './endpoints';
import { api } from '@/config/api/config/base';
import { convertKeysCase } from '@/config/helpers/caseConverter';

export const apiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<any, any>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase'),
				method: 'POST',
				url: CLIENT_ENDPOINTS.signUp(),
			}),
			transformResponse: (data) => convertKeysCase(data, 'camelCase'),
		}),
	}),
});

export const { useSignUpMutation } = apiSlice;
