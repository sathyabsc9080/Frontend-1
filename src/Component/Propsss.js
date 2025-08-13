import React from 'react'
// child parent
const Propsss = (props) => {
  return (
    <div>
        <h1> I love Television</h1>
        <h2>I love to watch tv in this particular =  {props.ball} </h2>
    </div>
  )
}

export default Propsss

//props and state
/************************************* */
// props ====== read message - immutable
//        ======  passing the data
//       =======
//        from one component to another [parent -> child]
//        =======  reusable


//state   ========  change the data - mutable
//        ======== managable /////  updating
//        ======   within the same component
//       ========  storing data
