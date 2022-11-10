import React, { useRef, createRef, ReactDOM } from 'react'
const RefTutorial = () => {
  const inputRef = useRef(null);
  const ipRef = createRef(null)

  const onClick = () => {
    // inputRef.current.focus()
    inputRef.current.value = "";
    ipRef.current.value = 'Create Ref';
    ipRef.current.className = 'hello'
    // ReactDOM.findDOMNode(this.ipRef.current). = 'Hello'
  };
  return (
    <div>
      <h3>useRef</h3>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <input type="text" placeholder="Ex..." ref={ipRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial