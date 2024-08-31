import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3/all" }),
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => "",
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
console.log(countriesApi)