import React from 'react';

export default function IncrementButton({ clickHandler }) {
  console.log('increment button rendering');
  return (
      <button type="button" onClick={clickHandler}>Increment</button>
  )
}
