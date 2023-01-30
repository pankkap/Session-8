import React, { useState } from "react";
 33
export default function UseStateDemo() {
  const [count, setcount] = useState(0);

  // const increment = () => {
  //   setcount((prevcount) => prevcount + 1);
  // };
  // const decrement = () => {
  //   setcount((prevcount) => prevcount - 1);
  // };
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setcount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Inline  */}
      <button onClick={() => setcount((prevcount) => prevcount + 1)}>
        Increment
      </button>
      <button onClick={() => setcount((prevcount) => prevcount - 1)}>
        Decrement
      </button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  );
}
