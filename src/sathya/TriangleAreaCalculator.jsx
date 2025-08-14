import React, { useState } from 'react';

function TriangleAreaCalculator() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);

    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
      setArea(0.5 * b * h);
    } else {
      setArea('Invalid input');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Triangle Area Calculator
        </h2>

        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          placeholder="Enter base"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={calculateArea}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Calculate
        </button>

        {area !== null && (
          <div className="mt-6 text-lg font-semibold text-center text-green-800">
            Area: {area}
          </div>
        )}
      </div>
    </div>
  );
}

export default TriangleAreaCalculator;
