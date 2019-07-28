import React, {Component} from 'react';
import style from './Timer.module.css';

class Timer extends Component {
    state = {
        value: 0,
        started: false
    };

    interval = null;

    componentDidMount() {
        console.log("Timer Component Mounted");
    };


    componentWillUpdate() {
        console.log("Timer Component Has been updated");
    };

    componentWillUnmount() {
        console.log("Timer Component UnMounted");
        // clearInterval(this.interval);
    }

    start = () => {
        if (!this.interval) {
            this.setState({
                started: true
            });
            this.interval = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        value: prevState.value + 1,
                    }
                })
            }, 1000)
        }
    };

    reset = () => {
        this.pause();
        this.setState({
            value: 0,
        });
    };

    pause = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.setState({
                started: false
            })
        }
    };

    toggle = () => {
        if(this.state.started){
            this.pause();
        }
        else {
            this.start();
        }
    };

    render() {
        return (
            <>
                <div className={"header"}>Timer</div>
                <div className={"component-wrapper " + style.componentWrapper}>
                    {this.state.value}
                </div>
                <div className="buttonsWrapper">
                    <button onClick={this.toggle}>{(this.state.started) ? ('Pause') : ('Start')}</button>

                    <button onClick={this.reset}>Reset</button>
                </div>
            </>
        );
    }
}

export default Timer;