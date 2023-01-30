import React, { useState } from "react";
 
export default function UseStateWithObject() {
  const [name, setname] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      {/* <input
        type="text"
        onChange={(e) => console.log(e)}
      /> */}
      <input
        type="text"
        onChange={(e) => setname({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setname({ ...name, lastName: e.target.value })}
      />
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
