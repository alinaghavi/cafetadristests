import React, { Component } from "react";
import withNetworkStatus from "./withNetworkStatus";
import withActiveTabStatus from "./withActiveTabStatus";

class NetworkActiveDetail extends Component {
  render() {
    return (
      <div style={{ fontSize: "25px", textAlign: "center" }}>
        Device is online : {String(this.props.isOnline)}
      </div>
    );
  }
}

export default withActiveTabStatus(withNetworkStatus(NetworkActiveDetail));
