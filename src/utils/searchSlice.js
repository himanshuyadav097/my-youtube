import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "SearchYoutube",
  initialState: {},
  reducers: {
    catchSearch: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { catchSearch } = searchSlice.actions;
export default searchSlice.reducer;
