import { CLIENT_ENDPOINTS } from './endpoints';
import type { SignUpRequest, SignUpResponse } from './types';
import { api } from '@/config/api/config/base';
import { createTag } from '@/config/api/config/tags';
import { convertKeysCase } from '@/config/helpers/caseConverter';

export const apiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<SignUpResponse, SignUpRequest>({
			query: (payload) => ({
				body: convertKeysCase(payload, 'snakeCase') as SignUpRequest,
				method: 'POST',
				url: CLIENT_ENDPOINTS.signUp(),
			}),
			invalidatesTags: [createTag('Client')],
			transformResponse: (data: SignUpResponse) => convertKeysCase(data, 'camelCase') as SignUpResponse,
		}),
	}),
});

export const { useSignUpMutation } = apiSlice;
