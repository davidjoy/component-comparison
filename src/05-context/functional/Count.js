import React, { useContext } from "react";
import CounterContext from "./CounterContext";

export default function Count() {
  const { count } = useContext(CounterContext);
  return (
    <div>{count}</div>
  );
}
