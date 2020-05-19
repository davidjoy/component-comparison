import { useContext } from "react";
import CounterContext from "./CounterContext";

export default function Count() {
  const { count } = useContext(CounterContext);
  return count;
}
