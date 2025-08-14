import React, { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value); // Update state
  };

  return (
    <div>
      <h2 style={{fontSize:"40px",fontFamily:"arial", color:"blue"}}>Your name: {name}</h2>
      <input
        type="text"
        value={name}        // Controlled by state
        onChange={handleChange}  // Updates state
      />
    </div>
  );
}

export default ControlledInput;
