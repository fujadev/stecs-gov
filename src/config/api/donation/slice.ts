import { CLIENT_ENDPOINTS } from './endpoint';
import { api } from '@/config/api/config/base';
import { convertKeysCase } from '@/config/helpers/caseConverter';
import { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { DonationResponse, DonationQueryResult } from './types';


export const apiSlice = api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, 'api'>) => ({
    donation: builder.query<DonationResponse, DonationQueryResult>({
      query: (): FetchArgs => {
        const url = CLIENT_ENDPOINTS.donation();
        return {
          method: "GET",
          url,
        };
      },
      transformResponse: (data: unknown): DonationResponse =>
        convertKeysCase(data, "camelCase") as DonationResponse,
    }),
  }),
});


export const { useDonationQuery } = apiSlice;
