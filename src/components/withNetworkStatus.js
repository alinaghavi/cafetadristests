import React, {Component} from 'react';
import classNames from "classnames";
import style from "./ToDoList.module.css";

let WithNetworkStatus = WrappedComponent => {
    return class extends Component {
        state = {
            isOnline: navigator.onLine
        };

        changeStatus = (event) => {
            if (event.type) {
                this.setState({
                    isOnline: event.type === 'online'
                })
            }
        };

        componentDidMount() {
            window.addEventListener('offline', this.changeStatus);
            window.addEventListener('online', this.changeStatus);
        };

        componentWillUnmount() {
            window.removeEventListener('offline', this.changeStatus);
            window.removeEventListener('online', this.changeStatus);
        };

        render() {
            return <WrappedComponent  isOnline={this.state.isOnline}/>
        }
    };
};

export default WithNetworkStatus;