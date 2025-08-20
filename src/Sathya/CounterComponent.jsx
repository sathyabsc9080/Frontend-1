import React, { useEffect } from 'react';
import UseCounter from './UseCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = UseCounter(0);

  useEffect(() => {
    console.log('CounterComponent loaded with initial count:', count);
  }, [count]);

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
    <h1 className="text-3xl font-bold mb-6 text-blue-800">  Count: {count}</h1>
    <div className="space-x-4">
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-800 transition"
      >
         Increment +1
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
         Decrement-1
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default CounterComponent;