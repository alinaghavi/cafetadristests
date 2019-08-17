import React, {Component} from 'react';
import classNames from "classnames";
import style from "./ToDoList.module.css";
import WithNetworkStatus from "./withNetworkStatus";

class VisualActiveDetail extends Component {
    render() {
        return (
            <div>
                <div className={"header"}>Visual Active Details</div>
                <div className={classNames("component-wrapper", style.componentWrapper)} style={{backgroundColor:'#ffcc00'}}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        margin: '0 auto',
                        backgroundColor: this.props.isOnline ? 'green' : 'red'
                    }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default WithNetworkStatus(VisualActiveDetail);