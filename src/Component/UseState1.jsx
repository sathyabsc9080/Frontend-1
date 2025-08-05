
                                                     // useState                                                

import React, { useState } from 'react'

const UseState1 = () => {


 const[colour , setColour] = useState(" violet ")  // 2 functionalities 1---- state  2---- update state


  return (
<div>
   <h1>My favourite color is : {colour} </h1>
  <button onClick={()=> {setColour('Red')}}> Change Colours </button>
  
  </div>
  )
}

export default UseState1


// hook techniques========Functional component 
// useState, useEffect, useReduer, useCallback, useMemo, useRef, custom hook.....
//  (1+2=3) ? true : false