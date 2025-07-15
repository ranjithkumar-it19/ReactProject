import React, { useState } from "react";
import styled from "styled-components";

let Buttton = styled.button`
  background-color: green;
  color: white;
  height: 50px;
  width: "100px";
`;
let Buttton1 = styled.button`
  background-color: red;
  color: white;
  height: 50px;
  width: "100px";
`;

function Content() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }
  function decreaseCount() {
    setCount((count) => count - 1);
  }

  return (
    <main>
      <h1>Count - {count}</h1>
      <Buttton onClick={increaseCount} style={{ Buttton }}>
         ( + )
      </Buttton>
      <Buttton1 onClick={decreaseCount} style={{ Buttton1 }}>
         ( - )
      </Buttton1>
    </main>
  );
}

export default Content;
