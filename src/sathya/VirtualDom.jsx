import React,{ Component} from "react"
class VirtualDom extends Component{
    constructor(props){
        super(props);
        this.state={
            Count:0
        };
    }
    increment =() =>{
        this.setState({Count:this.state.Count+1});
    };
     decrement =() =>{
        this.setState({Count:this.state.Count-1});
    };
     reset =() =>{
        this.setState({Count:0});
    };
    render(){
        return(
            <div>
                <h6 style={{fontSize:"40px",fontFamily:"arial", color:"blue"}}>Count the number:{this.state.Count}</h6>
                <button style={{fontSize:"20px", fontFamily:"time new roman",color:"red"}} onClick={this.increment}>Increment</button><br/>
                <button style={{fontSize:"20px", fontFamily:"time new roman",color:"red"}} onClick={this.decrement}>Decrement</button><br/>
                <button style={{fontSize:"20px", fontFamily:"time new roman",color:"red"}} onClick={this.reset}>Reset</button><br/>

            </div>
        );
    }
    
}
export default VirtualDom;
