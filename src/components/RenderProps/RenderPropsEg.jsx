import React from "react";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const RenderPropsEg = () => {
  return (
    <>
      <h2>RenderProps Tutorial</h2>
      <Counter
        render={(count, incrementCount) => {
          <ClickCounter count={count} incrementCount={incrementCount} />;
        }}
      />
      <Counter
        render={(count, incrementCount) => {
          <HoverCounter count={count} incrementCount={incrementCount} />;
        }}
      />
    </>
  );
};

export default RenderPropsEg;
