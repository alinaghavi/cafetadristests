import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import Timer from './Timer';
import ToDoList from "./ToDoList";

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
                <ToDoList />
                <Timer />
                <Counter min = {10} max = {20} />
            </>
        );
    }
}

export default App;

