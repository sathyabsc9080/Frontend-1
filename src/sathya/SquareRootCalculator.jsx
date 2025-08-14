import React, { useState } from 'react';

function SquareRootCalculator() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateSquareRoot = () => {
    const num = parseFloat(number);
    if (!isNaN(num) && num >= 0) {
      setResult(Math.sqrt(num));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded"  style={{backgroundColor:"pink"}}>
      <h2 className="text-xl font-bold mb-4" style={{fontSize:"30px", fontFamily:"Times new roman",color:"blue"}}>Square Root Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        className="border px-3 py-2 rounded w-full mb-4"
      />
      <button
        onClick={calculateSquareRoot}
        className="bg-green-900 text-white px-4 py-2 rounded" style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px" }}
      >
        Calculate
      </button>
      {result !== null && (
        <div className="mt-4 text-lg"style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"purple" }}>
          Result: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default SquareRootCalculator;
