import React, { memo } from "react";

 const Child = (props) => {
    console.log("Child component rendered");
  return (
    <>
      <div>Child Component</div>
      <h3>{props.name}</h3>
    </>
  );
};

export default memo(Child);
