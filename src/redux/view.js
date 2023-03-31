import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: { showOnlyActive: false },
  reducers: {
    toggleView: (state) => {
      state.showOnlyActive = !state.showOnlyActive;
    },
  },
});

export const { toggleView } = viewSlice.actions;

export default viewSlice.reducer;
