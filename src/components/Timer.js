import React, {useState} from 'react';
import style from './Timer.module.css';

// class Timer extends Component {
//     state = {
//         value: 0,
//         started: false
//     };
//
//     interval = null;
//
//     start = () => {
//         if (!this.interval) {
//             this.setState({
//                 started: true
//             });
//             this.interval = setInterval(() => {
//                 this.setState((prevState) => {
//                     return {
//                         value: prevState.value + 1,
//                     }
//                 })
//             }, 1000)
//         }
//     };
//
//     reset = () => {
//         this.pause();
//         this.setState({
//             value: 0,
//         });
//     };
//
//     pause = () => {
//         if (this.interval) {
//             clearInterval(this.interval);
//             this.interval = null;
//             this.setState({
//                 started: false
//             })
//         }
//     };
//
//     toggle = () => {
//         if(this.state.started){
//             this.pause();
//         }
//         else {
//             this.start();
//         }
//     };
//
//     render() {
//         return (
//             <>
//                 <div className={"header"}>Timer</div>
//                 <div className={"component-wrapper " + style.componentWrapper}>
//                     {this.state.value}
//                 </div>
//                 <div className="buttonsWrapper">
//                     <button onClick={this.toggle}>{(this.state.started) ? ('Pause') : ('Start')}</button>
//
//                     <button onClick={this.reset}>Reset</button>
//                 </div>
//             </>
//         );
//     }
// }
let interval = null;

function Timer() {
    let [value, setValue] = useState(0);
    let [start, setStart] = useState(false);
    let startFunc = () => {
        if (!interval) {
            setStart(true);
            interval = setInterval(() => {
                setValue(++value)
            }, 1000);
            console.log("interval", interval)
        }
    };

    let pause = () => {
        console.log("pouse 1");
        console.log("interval", interval);
        if (interval) {
            console.log("pouse 2");
            clearInterval(interval);
            interval = null;
            setStart(false);
        }
    };

    let reset = () => {
        pause();
        setValue(0);
    };


    let toggle = () => {
        if(start){
            pause();
        }
        else {
            startFunc();
        }
    };

    return (
        <>
            <div className={"header"}>Timer</div>
            <div className={"component-wrapper " + style.componentWrapper}>
                {value}
            </div>
            <div className="buttonsWrapper">
                <button onClick={toggle}>{(start) ? ('Pause') : ('Start')}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Timer;