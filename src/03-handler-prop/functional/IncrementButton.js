import React from 'react';

export default function IncrementButton({ clickHandler }) {
  console.log('rendering functional increment button');
  return (
      <button type="button" onClick={clickHandler}>Increment</button>
  )
}
