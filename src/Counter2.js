import { Component } from "react";

class Counter extends Component {
    constructor(props){
        // console.log(props)
        super(props);
        this.state = {
            number: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }


    handleIncrease (){
        this.setState({
            number : this.state.number + 1
        })
    }

    handleDecrease (){
        this.setState({
            number : this.state.number - 1
        })
    }

    render() {
        return(
            <div>
                <h1>카운터2</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;