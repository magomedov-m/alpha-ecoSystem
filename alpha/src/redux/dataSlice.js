import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const dataSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
  },
})

console.log('dataSlice', initialState)

export const { setData } = dataSlice.actions

export const selectData = (state) => state.data.items;

export default dataSlice.reducer