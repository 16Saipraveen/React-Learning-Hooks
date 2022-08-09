import React, { useState } from "react";

export const Input = (props) => {
  const [value, setValue] = useState(props.value || "");
  return (
    <input
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};
