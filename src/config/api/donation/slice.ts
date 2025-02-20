import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import type { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { CLIENT_ENDPOINTS } from './endpoint';
import type { DonationResponse, DonationQueryResult } from './types';
import { api } from '@/config/api/config/base';
import { convertKeysCase } from '@/config/helpers/caseConverter';


export const apiSlice = api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, 'api'>) => ({
    donation: builder.query<DonationResponse, DonationQueryResult>({
      query: (): FetchArgs => {
        const url = CLIENT_ENDPOINTS.donation();
        return {
          method: 'GET',
          url,
        };
      },
      transformResponse: (data: unknown): DonationResponse =>
        convertKeysCase(data, 'camelCase') as DonationResponse,
    }),
  }),
});


export const { useDonationQuery } = apiSlice;
