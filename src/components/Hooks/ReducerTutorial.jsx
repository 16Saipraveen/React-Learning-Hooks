import React, { useReducer } from "react";

const intiState = {
  count: 0,
  showText: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case 'Increase': 
      return { count: state.count + action.payload, showText: state.showText };
    default:
      return state;
  }
};
const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, intiState);

    return (
      <div>
        <h3>useReducer</h3>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>

        <button onClick={() => {
            dispatch({ type: "Increase", payload: 5 });
            // dispatch({ type: "toggleShowText" });
          }}>Increase 5</button>
  
        {state.showText && <p>This is a text</p>}
      </div>
    );
};

export default ReducerTutorial;
