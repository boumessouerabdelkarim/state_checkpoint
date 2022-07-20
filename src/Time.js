import React, { useState, useEffect } from "react";

const Time = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return <h1>the last component has been fitted ago {count} seconds</h1>;
};

export default Time;