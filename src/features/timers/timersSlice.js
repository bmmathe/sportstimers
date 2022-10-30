import { createSlice } from "@reduxjs/toolkit";
import { timerManager } from "./TimerManager";

const initialState = {
  time: 0,
  status: "notset",
};

export const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    decrement: (state) => {
      let time = state.time - 1;
      if (time <= 0) {
        timerManager.stopTimer("gameTimer");
        state.time = 0;
        state.status = "finished";
      } else {
        state.time = time;
      }
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    startTime: (state) => {
      state.status = "running";
      timerManager.startDecrementTimer("gameTimer");
    },
    pauseTime: (state) => {
      state.status = "paused";
      timerManager.stopTimer("gameTimer");
    },
  },
});

export const { decrement, setTime, startTime, pauseTime } = timersSlice.actions;
export default timersSlice.reducer;
