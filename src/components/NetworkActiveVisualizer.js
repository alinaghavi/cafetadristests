import React from "react";
import useNetworkStatus from "./useOnlineStatus";
import useTabStatus from "./useTabStatus";

let NetworkActiveVisualizer = (props) => {
    let isOnline = useNetworkStatus();
    let tabActive = useTabStatus();
    return (
        <>
            <p>Visual: The Tab Is {String(tabActive)}</p>
            <div
                style={{
                    width: 200,
                    height: 200,
                    margin: "0 auto",
                    backgroundColor: isOnline
                        ? props.isOnlineColor
                        : props.isOfflineColor
                }}
            > </div>
        </>
    );
};

export default NetworkActiveVisualizer;
