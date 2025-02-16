import { CLIENT_ENDPOINTS } from './endpoint';
import { api } from '@/config/api/config/base';
import { convertKeysCase } from '@/config/helpers/caseConverter';

export const apiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
      donation: builder.query<any, void>({
        query: () => {
          const url = CLIENT_ENDPOINTS.donation();
          return {
            method: "GET",
            url,
          };
        },
        transformResponse: (data) => convertKeysCase(data, "camelCase"),
      }),
    }),
  });

  
  export const { useDonationQuery } = apiSlice;
  
