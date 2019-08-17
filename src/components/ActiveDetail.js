import React, {Component} from 'react';
import classNames from "classnames";
import style from "./ToDoList.module.css";
import withNetworkStatus from "./withNetworkStatus";

class ActiveDetail extends Component {
    render() {
        return (
            <div>
                <div className={"header"}>Active Details</div>
                <div className={classNames("component-wrapper", style.componentWrapper)}>
                    You Device Is {this.props.isOnline ? "Online" : "Offline"}
                </div>
            </div>
        );
    }
}

export default withNetworkStatus(ActiveDetail);