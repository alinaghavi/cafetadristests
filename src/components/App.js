import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import Timer from './Timer';

class App extends Component {
    state = {
        showTimer: true
    };

    componentDidMount() {
        console.log("Main Component Mounted");
        // setInterval(() => {
        //     this.setState((prevState) => {
        //         return {
        //             showTimer: !prevState.showTimer
        //         }
        //     })
        // }, 5000)
    };

    componentWillUpdate() {
        console.log("Main Component Has been updated");
    };

    render() {
        return (
            <>
                <Timer />
                <Counter />
            </>
        );
    }
}

export default App;

