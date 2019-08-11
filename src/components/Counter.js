import React, {useState} from 'react';
import style from "./Counter.module.css";


// class Counter extends Component {
//     state = {
//         value: 0
//     };
//     inc = () => {
//         console.log("state", this.state);
//         this.setState({
//             value: Math.min(this.props.max, this.state.value + 1)
//         })
//     };
//     dec = () => {
//         this.setState({
//             value: Math.max(this.props.min, this.state.value - 1)
//         })
//     };
//
//     render() {
//         return (
//             <>
//                 <div className={"header"}>Counter</div>
//                 <div className={"component-wrapper " + style.componentWrapper}>
//                     {this.state.value}
//                 </div>
//                 <div className="buttonsWrapper">
//                     <button onClick={this.inc}>Increase</button>
//
//                     <button onClick={this.dec}>Decrease</button>
//                 </div>
//             </>
//         );
//     }
// }
//

function Counter(props) {

    let [value, setValue] = useState(0);

    let inc = () => {
        setValue(++value);
        console.log(value)
    };

    let dec = () => {
        setValue(--value);
    };

    if (value < props.min) {
        setValue(props.min)
    }

    if (value > props.max) {
        setValue(props.max)
    }

    return (
        <div>
            <div className={"header"}>Counter</div>
            <div className={"component-wrapper " + style.componentWrapper}>
                {value}
                <div className="buttonsWrapper" style={{marginTop:'30px'}}>
                    <button onClick={inc}>Increase</button>
                    <button onClick={dec}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;
