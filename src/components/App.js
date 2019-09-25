import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import Timer from './Timer';
import ToDoList from "./ToDoList";
import MouseTracker from "./MouseTracker";
import ActiveDetail from "./ActiveDetail";

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
    };

    render() {
        return (
            <>
                <ActiveDetail/>
                <ToDoList />
                <Timer />
                <Counter min = {10} max = {20} />
                <MouseTracker />
            </>
        );
    }
}

export default App;

