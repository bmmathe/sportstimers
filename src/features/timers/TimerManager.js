import { store } from "../../app/store";
import { decrement } from "./timersSlice";

class TimerManager {
  constructor() {
    this.timers = [];
  }
  startDecrementTimer(timerName) {
    this.timers[timerName] = setInterval(() => {
      store.dispatch(decrement());
    }, 1000);
  }

  stopTimer(timerName) {
    clearInterval(this.timers[timerName]);
  }
}

export const timerManager = new TimerManager();
