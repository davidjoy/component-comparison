import React from 'react';

export default function IncrementButton({ clickHandler }) {
  return (
      <button type="button" onClick={clickHandler}>Increment</button>
  )
}
