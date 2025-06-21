import React, { useEffect, useState } from 'react';

const LetterCountStats = () => {
  const array = ['a','b','c','d','e','g','h','c','d','e','g','a','b','c','d'];
  const [letterCount, setLetterCount] = useState({});
  const [maxCount, setMaxCount] = useState(0);
  const [minCount, setMinCount] = useState(Infinity);
  const [mostRepeating, setMostRepeating] = useState([]);
  const [leastRepeating, setLeastRepeating] = useState([]);

  useEffect(() => {
    const count = {};
    array.forEach(letter => {
      count[letter] = (count[letter] || 0) + 1;
    });

    setLetterCount(count);

    let max = 0;
    let min = Infinity;

    for (let key in count) {
      if (count[key] > max) max = count[key];
      if (count[key] < min) min = count[key];
    }

    setMaxCount(max);
    setMinCount(min);

    const most = [];
    const least = [];

    for (let key in count) {
      if (count[key] === max) most.push(key);
      if (count[key] === min) least.push(key);
    }

    setMostRepeating(most);
    setLeastRepeating(least);
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Letter Frequency Analysis</h2>
      <p><strong>Occurrences:</strong> {JSON.stringify(letterCount)}</p>
      <p><strong>Max Count:</strong> {maxCount}</p>
      <p><strong>Min Count:</strong> {minCount}</p>
      <p><strong>Most Repeating Letters:</strong> {mostRepeating.join(', ')}</p>
      <p><strong>Least Repeating Letters:</strong> {leastRepeating.join(', ')}</p>
    </div>
  );
};

export default LetterCountStats;
