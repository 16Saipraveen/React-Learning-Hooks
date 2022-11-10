import React from "react";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <h3>ClickCounter</h3>
      <button onClick={incrementCount}>Counted {count} times </button>
    </>
  );
};

export default ClickCounter;
