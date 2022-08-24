import React, {useRef , useEffect, useLayoutEffect} from 'react'

const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
      console.log(`useLayoutEffect file`,inputRef.current.value);
    }, []);
  
    useEffect(() => {
      inputRef.current.value = "HELLO";
    }, []);
  
    return (
      <div className="App">
        <h3>UseLayout Effect</h3>
        <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
      </div>
    );
}

export default LayoutEffectTutorial