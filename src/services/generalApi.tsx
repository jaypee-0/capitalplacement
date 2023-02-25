import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BaseUrl:string = 'http://127.0.0.1:3100'

interface axiosProps {
  url: string;
  method: string;
  data?: any;
  params?: any;
}
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }: axiosProps) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data }
    } catch (axiosError) {
      let err:any = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
        
      };
    }
  };

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: axiosBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    getFormDetails: builder.query<number, any>({
      query: ({version, programId}) => ({ url: `/api/${version}/programs/${programId}/application-form`, method: 'GET' }),
    }),
    getSiteDetails: builder.query({
      query: () => ({ url: ``, method: 'GET' }),
    }),
    suscribeEmail: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'PUT',
        data: body,
      }),
    }),
  }),
});

export const {
  useGetFormDetailsQuery,
  useSuscribeEmailMutation,
} = generalApi;

export const { endpoints, reducerPath, reducer } = generalApi;
