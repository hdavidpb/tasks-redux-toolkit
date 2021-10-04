import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  clearState,
} from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import * as sc from "./styles";
const Counter = () => {
  const dispatch = useDispatch();
  const { value, msg } = useSelector((store: RootState) => store.counter.data);
  const [incrementValue, setIncrementValue] = useState<number>(0);

  const handleIncrementValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementValue(Number(e.target.value));
  };

  const handleClearInputValue = () => {
    dispatch(clearState());
    setIncrementValue(0);
  };

  return (
    <sc.CounterContainer>
      <sc.Value>{msg}</sc.Value>
      <sc.Value>{value}</sc.Value>
      <sc.Input
        type="number"
        placeholder="ej: 100"
        onChange={(e) => handleIncrementValue(e)}
        value={incrementValue}
      />
      <sc.ButtonsContainer>
        <sc.Button color="blue" onClick={() => dispatch(increment())}>
          +
        </sc.Button>
        <sc.Button color="red" onClick={() => dispatch(decrement())}>
          -
        </sc.Button>
        <sc.Button
          color="orange"
          value={incrementValue}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          + {incrementValue}
        </sc.Button>
        <sc.Button color="gray" onClick={handleClearInputValue}>
          Clear
        </sc.Button>
      </sc.ButtonsContainer>
    </sc.CounterContainer>
  );
};

export default Counter;
