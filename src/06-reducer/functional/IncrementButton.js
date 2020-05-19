import React, { useContext, useCallback } from 'react';
import CounterContext from "./CounterContext";

export default function IncrementButton() {
  const { dispatch } = useContext(CounterContext);

  const handleIncrementClick = useCallback(
    () => {
      dispatch({ type: 'INCREMENT_COUNTER' });
    },
    [dispatch],
  );

  return (
      <button type="button" onClick={handleIncrementClick}>Increment</button>
  )
}
