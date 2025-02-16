import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { keys } from 'lodash';

// Rules of rtk caching:
// 1. Mutations cannot provide tags to the cache, only queries can
// 2. Queries cannot invalidate tags, only mutations can
// 3. When querying a *specific* resource, provide a tag with the resource's id, and a prefix for the type of id
// Example: {..., providesTags: (_result, _error, deliveryId) => [ createTag({ id: deliveryId, prefix: 'deliveryId', type: 'Delivery' }) }
// 4. When querying a *list* of resources, provide a tag with the id 'LIST'
// Example: {..., providesTags: [ createTag({ id: 'LIST', type: 'Delivery' }) ] }

const API_TAG_CONFIG = {
	Client: {
		prefixes: ['clientId'] as const,
	},
	Transaction: {
		prefixes: ['transactionId'] as const,
	},
} as const;

const getTagTypes = (): string[] => keys(API_TAG_CONFIG);

export type TagType = keyof typeof API_TAG_CONFIG;

export type ApiTagConfig = typeof API_TAG_CONFIG;
const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		// prettier-ignore
		// @ts-expect-error this might be null
		const {	auth: { token }} = getState();

		if (token) {
			headers.append('Authorization', `Bearer ${token}`);
		}
	},
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: getTagTypes(),
	endpoints: () => ({}),
});
