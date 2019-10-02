import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import ToDoList from "./ToDoList";
import MouseTracker from "./MouseTracker";
import NetworkActiveDetail from "./NetworkActiveDetail";
import WithNetworkStatus from "./withNetworkStatus";
import NetworkActiveVisualizer from "./NetworkActiveVisualizer";
import WithTabActiveStatus from "./withActiveTabStatus";

const First = props => {
  return (
    <div>
      <h1>Fist Component</h1>
      {props.children}
    </div>
  );
};

const Second = props => {
  return (
    <div>
      <h3>Second Component</h3>
      {props.children({ text: "Hello" })}
    </div>
  );
};

const Third = props => {
  return (
    <div>
      <h5>Third Component</h5>
      <p>Text: {props.text}</p>
      <p>Number: {props.number}</p>
    </div>
  );
};

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
        <First>
          <Second>{({ text }) => <Third number={200} text={text} />}</Second>
        </First>

          <NetworkActiveVisualizer isOnlineColor={"green"} isOfflineColor={"red"}/>

        {/*<WithNetworkStatus>*/}
          {/*{({ isActive: isOnline }) => (*/}
            {/*<WithTabActiveStatus>*/}
              {/*{({ isActive: isTabActive }) => (*/}
                {/*<NetworkActiveDetail*/}
                  {/*isOnline={isOnline}*/}
                  {/*isTabActive={isTabActive}*/}
                {/*/>*/}
              {/*)}*/}
            {/*</WithTabActiveStatus>*/}
          {/*)}*/}
        {/*</WithNetworkStatus>*/}

        {/*<WithTabActiveStatus>*/}
          {/*{({ isActive: isTabActive }) => (*/}
            {/*<WithNetworkStatus>*/}
              {/*{({ isActive: isOnline }) => (*/}
                {/*<NetworkActiveDetail*/}
                  {/*isOnline={isOnline}*/}
                  {/*isTabActive={isTabActive}*/}
                {/*/>*/}
              {/*)}*/}
            {/*</WithNetworkStatus>*/}
          {/*)}*/}
        {/*</WithTabActiveStatus>*/}

        {/*<WithNetworkStatus>*/}
          {/*{({ isActive: isOnline }) => (*/}
              {/*<WithTabActiveStatus>*/}
                  {/*{( {isActive: isTabActive} ) =>*/}
                      {/*<NetworkActiveVisualizer*/}
                          {/*isOnline={isOnline}*/}
                          {/*isTabActive={isTabActive}*/}
                          {/*isOnlineColor={"green"}*/}
                          {/*isOfflineColor={"red"}*/}
                      {/*/>*/}
                  {/*}*/}
              {/*</WithTabActiveStatus>*/}
          {/*)}*/}
        {/*</WithNetworkStatus>*/}

        <ToDoList />
        <Timer />
        <Counter min={10} max={20} />
        <MouseTracker />
      </>
    );
  }
}

export default App;
