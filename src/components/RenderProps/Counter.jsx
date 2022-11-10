import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  console.log('Counter rendered')
  return <div>{props.render({count, incrementCount})}</div>;
};

export default Counter;
