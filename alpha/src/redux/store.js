import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "./countriesApi";
import likedElementsReducer from './likedElementsSlice'

export const store = configureStore({
    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
        likedElem: likedElementsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
});