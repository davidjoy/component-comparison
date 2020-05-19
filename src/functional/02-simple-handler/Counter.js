import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  const handleIncrementClick = (event) => {
    // Bonus!  Do I need to use the "prevCount" here?  Or could I just do this? setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={handleIncrementClick}>Increment</button>
    </>
  )
}
