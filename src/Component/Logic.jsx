
import React, { useEffect, useState } from 'react';

const Logic = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getloadData();
    
    // eslint-disable-next-line
  }, []);

  const getloadData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <div>
      <h3>User Data</h3>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {data && !error && Array.isArray(data) && (
        <div>
          <ul>
            {data.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email} - {user.address.city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Logic;