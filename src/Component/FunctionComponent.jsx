//function Component
/*
Hooks techniques
*/
import React, { useEffect, useState } from 'react'

const FunctionComponent = () => {

  const[ball, setball] = useState(200);//initiate const , let, var keyword
const [count, setCount ] = useState();


   useEffect(()=>{ //hook
   // console.log("Checkball",checkBall);
   
    checkBall();
   },[ball]);

   
   function checkBall(){
    if(ball>=0){ //   condition
  setball(200); //  updating state
    }}

function updateNumber(){
  
  setball((prevstate)=>
  {return prevstate -10})
}



//in  return part CSS and Mapping
  return (
    <div>


      <h1 style={{fontSize:"40px", color:"violet" }}>
        I am going to count the number of balls : {ball}
      </h1>
      
      <button size="lg "style={{color :"red", fontSize:"20px" }}
onClick={ updateNumber}> 
add the ball
  </button>


    </div>
  )
}

export default FunctionComponent




/** HOOK TECHNIQUES
 * useEffect
 * useState
 * useRef
 * useContext
 * useReducer
 * useCallabe
 * 
 * 
 * jsx
 */
/*



const [] = useState(); // hook,    initiate, update




const test = () => {

//logic

  return(
  
  <div>
  css part
  </div>
  
  )
  
  
  }

  export default test
*/