import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../components/types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/' }),
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => 'cards',
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    likedCards: [] as string[],
  },
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const index = state.likedCards.indexOf(action.payload);
      if (index === -1) {
        state.likedCards.push(action.payload);
      } else {
        state.likedCards.splice(index, 1);
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.likedCards = state.likedCards.filter(card => card !== action.payload);
    },
  },
});

export const { toggleLike, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;