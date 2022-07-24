import React, { useRef } from 'react'

const RefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus()
    inputRef.current.value = "";
  };
  return (
    <div>
      <h3>useRef</h3>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial