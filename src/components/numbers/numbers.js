import React, { useState, useEffect } from 'react';

const easeOutCubic = (t) => (--t) * t * t + 1;

const Numbers = ({ end, duration, prefix = '', specialEnd = null }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const t = Math.min(elapsed / (duration * 1000), 1); // normalize time to 0-1
      start = easeOutCubic(t) * end;

      if (now >= endTime) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div>
      <h1>{prefix}{count === end && specialEnd ? specialEnd : count}</h1>
    </div>
  );
};

export default Numbers;