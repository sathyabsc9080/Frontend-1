
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
  <h3  style={{ fontSize:"30px",color:"blue" , }}>User Data</h3>

  {loading && <div>Loading...</div>}
  {error && <div style={{ color: 'red' }}>Error: {error}</div>}

  {data && !error && Array.isArray(data) && (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr >
          <th style={{ fontSize:"20px",color:"red" , }}>ID</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Name</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Username</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Email</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Address</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Phone</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Website</th>
          <th style={{ fontSize:"20px",color:"red" , }}>Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <strong>Street:</strong>{user.address.street} -
            <strong>Suite:</strong>{user.address.suite} -
            <strong>City:</strong>{user.address.city} -
            <strong>Zipcode:</strong>{user.address.zipcode} 
            </td>
            <td> <strong>Phone:</strong>{user.phone}</td>
            <td> <strong>WebSite:</strong>{user.website}</td>
            <td> <strong>Name:</strong>{user.company.name} -
                  <strong>bs:</strong>{user.company.bs}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
  );
};

export default Logic;