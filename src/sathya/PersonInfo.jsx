import React, { useState } from 'react'

const PersonInfo = () => {
    const [person,setPerson]=useState({
        name:"sathya",
        age :21,
        city:"selam"
    });
    //Modify to age
      const updateAge = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: 25
    }));
  };
// Add a new property: occupation
  const addOccupation = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      occupation: " Software Engineer"
    }));
  };

  return (
    <div style={{backgroundColor:"pink"}}>
      <h1 style={{fontSize:"30px", fontFamily:"Times new roman",color:"red"}}>Person Information</h1>
      <p><strong style={{fontSize:"20px", fontFamily:"arial",color:"darkblue"}}>Name:</strong> {person.name}</p>
      <p><strong style={{fontSize:"20px", fontFamily:"arial",color:"darkblue"}}>Age :</strong> {person.age}</p>
      <p><strong style={{fontSize:"20px", fontFamily:"arial",color:"darkblue"}}>City:</strong> {person.city}</p>
       {person.occupation && <p><strong style={{fontSize:"20px", fontFamily:"arial",color:"darkblue"}}>Occupation:</strong> {person.occupation}</p>}

      <button  onClick={updateAge} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"green" }}>
        Update Age 
      </button><br/>
      <button onClick={addOccupation} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"orange" }}>
        Add Occupation
      </button>
    </div>
  )
}

export default PersonInfo
