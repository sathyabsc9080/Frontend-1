import React, { useState } from 'react'

const ArrayOperation = () => {
    const [age,setAge] = useState([10,20,30,15,35])
     const addAge = () => {
    setAge([...age, 30]); // ✅ Add at end without mutating
  };
  const addToStart = () => {
  setAge([5, ...age]);
};

 const removeLastAge = () => {
    setAge(age.slice(0,-1)); // Remove last
  };
  const removeFirstAge = () => {
  setAge(age.slice(1));
};

  return (
    <div  style={{backgroundColor:"green"}}><h1 style={{fontSize:"30px", fontFamily:"Times new roman",color:"white"}}>Array Operation</h1>
             <p style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"black" }}>Current Ages: {JSON.stringify(age)}</p>

      <button onClick={addAge} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"blue" }}>Add 30 to End</button><br/>
        <button onClick={addToStart} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"blue" }}>Add 5 to First</button><br/>
       <button onClick={removeLastAge} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"red" }}>Remove Last</button><br/>
       <button onClick={removeFirstAge} style={{ marginRight: "10px" , fontSize:"20px",fontFamily:"20px",color:"red" }}>Remove First</button>
    </div>
  )
}

export default ArrayOperation
