import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "./countriesApi";

export const store1 = configureStore({
    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
});