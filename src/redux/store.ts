import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import tasksSlice from "./features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    tasks: tasksSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
