import React, { useState, useCallback } from "react";
import CounterContext from "./CounterContext";
import Count from "./Count";
import IncrementButton from "./IncrementButton";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  const handleIncrementClick = useCallback(
    (event) => {
      setCount(prevCount => prevCount + 1);
    },
    []
  );

  return (
    <CounterContext.Provider value={{ count }}>
      <Count />
      <IncrementButton clickHandler={handleIncrementClick} />
    </CounterContext.Provider>
  )
}
