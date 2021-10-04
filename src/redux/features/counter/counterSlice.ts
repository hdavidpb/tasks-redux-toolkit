import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ICounter {
  value: number;
  msg: string;
}

export interface CounterState {
  data: ICounter;
}

const initialState: CounterState = {
  data: {
    value: 0,
    msg: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.data.value += 1;
      state.data.msg = `Incrementando... ⬆️ ${state.data.value}`;
    },
    decrement: (state) => {
      state.data.value -= 1;
      state.data.msg = `Disminuyendo... ⬇️ ${state.data.value}`;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.data.value += action.payload;
    },
    clearState: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { increment, decrement, incrementByAmount, clearState } =
  counterSlice.actions;

export default counterSlice;
