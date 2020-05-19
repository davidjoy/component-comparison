import React, { useState } from "react";

export default function Count(props) {
  // Bonus!  What is with these square brackets?  Does it have a fancy name?
  // Bonus!  We also have a naming collision here - our 'count' state and our 'count' prop.  That's annoying.  Or is it okay?
  const [count, setCount] = useState(props.count);

  return (
    <div>{count}</div>
  )
}
