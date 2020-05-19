import React, { useState, useEffect } from 'react';

export default function Watcher() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = (event) => {
    // Bonus!  Should we combine width/height into one state variable?  Should we not?
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Bonus!  Should handleResize be a dependency of this effect?  What happens if we add it here?

  return (
    <div>
      {`${width}w x ${height}h`}
    </div>
  )
}
