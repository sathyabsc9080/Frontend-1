import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      count: 0//initiate
    };
  }

  // componentDidMount() { //creating -------- constructor, render, 
  //   console.log('Component mounted');
  //   // Example of setting up event listeners or fetching data
  //   document.addEventListener('mousedown', this.handleMouseDown);
  // }

  // componentDidUpdate(prevProps, prevState) { //update ------ render
  //   if (prevState.count !== this.state.count) {
  //   console.log('Count updated');
  //   }
  // }

  componentWillUnmount() { //removing ----- remove lastState stored in the dom
  console.log('Component will unmount');
    document.removeEventListener('mousedown', this.handleMouseDown);
  }

  handleMouseDown = () => {
    console.log('Mouse down event occurred');
  };

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 20
    }));
  };

  render(){
   console.log('rendered');  
     {
    return (
      <div style={{fontSize:"40px", color:"green" }}>
        <p>COUNT : {this.state.count}</p>
        <button onClick={this.increaseCount} style={{fontSize:"20px", color:"green" }}>Increase Count</button>
      </div>
    );
  }
}
}

export default LifeCycle;
/*constructor
render {return}
important=========lifecycle[ componentDidMount, componentDidUpdate,componentWillUnmount]..............

Mount, update, unmount

 componentdidMount  ======   constructor,  render, didmount

component update ====== render, updatemount

*/