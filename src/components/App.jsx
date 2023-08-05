import React, { useState } from "react";

function App() {
  // const state = useState(12);
  // console.log(state[0]);

  // Destructure
  // const [red, green, blue] = [9, 139, 127];
  // console.log(blue);

  var [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
