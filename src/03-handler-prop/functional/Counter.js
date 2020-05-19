import React, { useState, useCallback } from "react";
import IncrementButton from "./IncrementButton";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  const handleIncrementClick = useCallback(
    (event) => {
      // Bonus!  Do I need to use the "prevCount" here?  Or could I just do this? setCount(count + 1);
      setCount(prevCount => prevCount + 1);
    },
    // Bonus!  Do I need to add setCount to this dependency array?
    // Bonus!  What happens if I leave out the dependency array completely?  How is that different than an empty dependency array?
    []
  );

  console.log('rendering functional counter');
  return (
    <>
      <div>{count}</div>
      {React.memo(<IncrementButton clickHandler={handleIncrementClick}/>)}
    </>
  )
}
