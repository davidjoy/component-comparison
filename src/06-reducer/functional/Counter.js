import React, { useReducer, useMemo } from "react";
import CounterContext from "./CounterContext";
import Count from "./Count";
import IncrementButton from "./IncrementButton";

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default function Counter({ count }) {
  const initialState = useMemo(
    () => ({ count }),
    [count],
  );
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Count />
      <IncrementButton />
    </CounterContext.Provider>
  )
}
