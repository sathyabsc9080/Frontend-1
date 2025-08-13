import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit} style={{fontSize:"20px",fontFamily:"arial", color:"blue"}}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
