import React, {Component} from 'react';
import style from "./Counter.module.css";

class Counter extends Component {
    state = {
        value: 0
    };
    inc = () => {
        console.log("state", this.state);
        this.setState({
            value: this.state.value + 1
        })
    };
    dec = () => {
        this.setState({
            value: Math.max(0, this.state.value - 1)
        })
    };

    render() {
        return (
            <>
                <div className={"header"}>Counter</div>
                <div className={"component-wrapper " + style.componentWrapper}>
                    {this.state.value}
                </div>
                <div className="buttonsWrapper">
                    <button onClick={this.inc}>Increase</button>

                    <button onClick={this.dec}>Decrease</button>
                </div>
            </>
        );
    }
}


export default Counter;
