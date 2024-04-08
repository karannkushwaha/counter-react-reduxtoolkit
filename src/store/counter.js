import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 5 },
  reducers: {
    increment(state) {
      state.counterVal++;
    },
    decrement(state) {
      state.counterVal--;
    },
    add(state, action) {
      state.counterVal += Number(action.payload.num);
    },
    sub(state, action) {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice;
