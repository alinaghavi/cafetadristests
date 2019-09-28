import React, {Component} from "react";
import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import ToDoList from "./ToDoList";
import MouseTracker from "./MouseTracker";
import NetworkActiveDetail from "./NetworkActiveDetail";
import NetworkActiveVisualizer from "./NetworkActiveVisualizer";


const First = (props) => {
    return (
        <div>
            <h1>Fist Component</h1>
            <Second {...props}/>
        </div>
    );
};


const Second = (props) => {
    return (
        <div>
            <h3>Second Component</h3>
            <Third {...props}/>
        </div>
    );
};

const Third = (props) => {
    return (
        <div>
            <h5>Third Component</h5>
            <p>{props.number}</p>
        </div>
    );
};

class App extends Component {
    // state = {
    //     showTimer: true
    // };

    componentDidMount() {
        // setInterval(() => {
        //     this.setState((prevState) => {
        //         return {
        //             showTimer: !prevState.showTimer
        //         }
        //     })
        // }, 5000)
    }


    render() {
        return (
            <>
                <First number={200} />
                <NetworkActiveDetail/>
                <NetworkActiveVisualizer
                    isOnlineColor={"green"}
                    isOfflineColor={"red"}
                    isOnline={'Hello'}
                />
                <ToDoList/>
                <Timer/>
                <Counter min={10} max={20}/>
                <MouseTracker/>
            </>
        );
    }
}

export default App;
