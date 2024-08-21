import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './cardSlice';
import cardsReducer from './cardSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;