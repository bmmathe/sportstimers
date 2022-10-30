import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import timersReducer from "../features/timers/timersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    timers: timersReducer,
  },
});
