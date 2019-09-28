import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import ToDoList from "./ToDoList";
import MouseTracker from "./MouseTracker";
import NetworkActiveDetail from "./NetworkActiveDetail";
import NetworkActiveVisualizer from "./NetworkActiveVisualizer";

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
  }

  render() {
    return (
      <>
        <NetworkActiveDetail />
        <NetworkActiveVisualizer
          isOnlineColor={"green"}
          isOfflineColor={"red"}
          isOnline={'Hello'}
        />
        <ToDoList />
        <Timer />
        <Counter min={10} max={20} />
        <MouseTracker />
      </>
    );
  }
}

export default App;
