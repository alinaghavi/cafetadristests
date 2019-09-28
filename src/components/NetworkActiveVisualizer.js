import React, { Component } from "react";
import withNetworkStatus from "./withNetworkStatus";

class NetworkActiveVisualizer extends Component {
  render() {
      console.log(this.props);
    return (
      <div
        style={{
          width: 200,
          height: 200,
          margin: "0 auto",
          backgroundColor: this.props.isOnline
            ? this.props.isOnlineColor
            : this.props.isOfflineColor
        }}
      ></div>
    );
  }
}

export default withNetworkStatus(NetworkActiveVisualizer);
