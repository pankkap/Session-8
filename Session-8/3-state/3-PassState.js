import React, { useState } from "react";
 
export default function PassState() {
  const [count, setcount] = useState(0);
  
  function increment() {
    setcount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setcount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h1 className="text-center text-primary">Count: {count}</h1>
      <hr />
      <CustomBtn1 count={count} callback={increment} />
      <hr />
      <CustomBtn2 count={count} callback={decrement} />
    </div>
  );
}
function CustomBtn1(props) {
  return (
    <div className="text-center">
      <h2>Custom Button-1</h2>
      <h3 className="text-info">Count:{props.count}</h3>
      <button className="btn btn-success" onClick={props.callback}>
        Increment
      </button>
    </div>
  );
}
function CustomBtn2(props) {
  return (
    <div className="text-center">
      <h2>Custom Button-2</h2>
      <h3 className="text-info">Count:{props.count}</h3>
      <button className="btn btn-danger" onClick={props.callback}>
        Decrement
      </button>
    </div>
  );
}
