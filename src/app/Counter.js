 "use client"; 
import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function min() {
    count <= 0 ? 0 : setCount(count -1)
  }
  return (
    <div className="main">
      <button onClick={add}>incerement</button>
      <button onClick={min}>decerement</button>
      <br />
      <br />
      <p>{count} <br /></p>
    </div>
  );
}

export default Counter
