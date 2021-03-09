import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // Reducers are functions that allow us to store data in the store slice
    increment: (sliceState) => {
      sliceState.value += 1;
    },
    decrement: (sliceState) => {
      sliceState.value -= 1;
    },
    incrementByAmount: (sliceState, action) => {
      sliceState.value += action.payload;
    },
  },
});

export default counterSlice;
