import { configureStore, createSlice } from "@reduxjs/toolkit";

const likedElementsSlice = createSlice({
  name: "LikedElem",
  initialState: [],
  reducers: {
    addLikedElem: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeLikedElem: (state, action) => {
      return state.filter((movie) => movie.name !== action.payload.name);
    },
  },
});

export const { addLikedElem, removeLikedElem } = likedElementsSlice.actions;
export default likedElementsSlice.reducer;