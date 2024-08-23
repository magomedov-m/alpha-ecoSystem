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

export const { setData } = dataSlice.actions

export default dataSlice.reducer