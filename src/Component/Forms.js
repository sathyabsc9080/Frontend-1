
import React, { useState } from 'react';
import useInput from '../UseInput'; // Adjust the path if needed


function Forms() {
  const [password, setPassword] = useState('');
  const [userName, bindUserName, resetUserName] = useInput('');


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like submitting to a server
    // Example: console.log({ username: userName, password });
    resetUserName();
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        UserName:
        <input
          type="text"
          name="username"
          {...bindUserName}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;