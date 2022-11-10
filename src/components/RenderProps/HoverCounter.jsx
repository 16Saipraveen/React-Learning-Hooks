import React from "react";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <h3>HoverCounter</h3>
      <h3 onMouseOver={incrementCount}>Hovered {count} times </h3>
    </>
  );
};

export default HoverCounter;
