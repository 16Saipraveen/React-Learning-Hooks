import React, { useState } from "react";
import { Transition } from "react-transition-group";

const StateTutorial = ({ step = 0 }: props) => {
  const [inputValue, setInputValue] = useState("Pedro");

  const [toggle, setToggle] = useState(false);

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h3>useState</h3>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}

      <h3>React-Transition-Group</h3>
      <button onClick={() => setToggle(!toggle)}>Toggle Transition</button>
      <Transition in={toggle} duration={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
              opacity: state === "exited" ? 0 : 1,
              margin: 'auto',
              transition: 'opacity 1s ease-out'
            }}
          ></div>
        )}
      </Transition>
    </div>
  );
};

export default StateTutorial;
