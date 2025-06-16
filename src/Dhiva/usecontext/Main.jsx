// import React, { createContext, useState } from 'react';
// import Container from './Container';
// import User from './User';
// import Users from './Users';
// import { IoIosRadioButtonOn } from "react-icons/io";
// import { IoMdRadioButtonOff } from "react-icons/io";
 


// // Create context
// export const Themecontext = createContext();

// const Main = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const [theme, setTheme] = useState("dark");

//     // Function to toggle theme between dark and light
//     const toggleTheme = () => {
//         setTheme((curr) => (curr ==="dark"  ? "light" : "dark"));
//         setIsOpen(!isOpen);
//     };
    
//     return (
//         <Themecontext.Provider value={{ theme, toggleTheme }}>
           
//            <div onClick={toggleTheme} >
//             {isOpen ? <IoIosRadioButtonOn size={28} /> : <IoMdRadioButtonOff size={28} />}
//           </div>
          
//             <h1>Main Component</h1>
//             <User/>
//             <Container/>
//             <Users/>
//         </Themecontext.Provider>
//     );
// }

// export default Main;
