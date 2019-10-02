import React from "react";

let NetworkActiveDetail = (props) => {
    return (
      <div style={{ fontSize: "25px", textAlign: "center" }}>
        <p>Device is online : {String(props.isOnline)}</p>
        <p>Tab is Active : {String(props.isTabActive)}</p>
      </div>
    );
};

export default NetworkActiveDetail;
