import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  // initialState: { privacyToggle: false },
  initialState: false,
  reducers: {
    privacyToggle(state) {
      // return (state.privacyToggle = !state.privacyToggle);
      return (state = !state);
    },
  },
});

export const privacyAction = privacySlice.actions;

export default privacySlice;
