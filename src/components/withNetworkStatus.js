import React, { Component } from "react";

let withNetworkStatus = WrapperComponent => {
  return class withNetworkStatusWrapper extends Component {
    state = {
      isActive: navigator.onLine
    };

    componentDidMount() {
      window.addEventListener("online", this.handleStatusChange);
      window.addEventListener("offline", this.handleStatusChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleStatusChange);
      window.removeEventListener("offline", this.handleStatusChange);
    }

    handleStatusChange = event => {
      if (event.type) {
        this.setState({
          isActive: event.type === "online"
        });
      }
    };

    render() {
      return (
        <WrapperComponent {...this.props} isActive={this.state.isActive} />
      );
    }
  };
};

export default withNetworkStatus;
