import React,{Component} from "react";

class Counter extends Component{
    constructor(props){ // runs when component is mounted
        super(props);
        this.state={
            count: 0
        };
    }

    increase = () =>{
        this.setState({
            count:this.state.count + 1
        })
    };

    decrease = () =>{
        this.setState({
            count:this.state.count - 1
        })
    };

    render(){
        return(
            <div>
                <p>Current Count:{this.state.count} </p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter; // Allows the class to be exported and used by other classes
