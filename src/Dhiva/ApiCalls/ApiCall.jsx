import React, { useEffect, useState } from 'react';

const ApiCall = () => {
    const [users, setUsers] = useState([]); 
    const [newName, setNewName] = useState(); 
    const [newEmail, setNewEmail] = useState(); 
    const [newAddress, setNewAddress] = useState(); 
    const [newPhone, setNewphone] = useState(); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []); 

    return (
        <div>
            <h1>Trigger API</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{`${user.address.street}, ${user.address.city}`}</td> 
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ApiCall;
