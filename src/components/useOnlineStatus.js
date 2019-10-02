import {useEffect, useState, useCallback} from 'react';

let useNetworkStatus = () => {
    let [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
    let changeStatusHandler = useCallback(event => {
            setOnlineStatus(event.type === 'online');
        },
    );

    useEffect(() => {
        window.addEventListener('online', changeStatusHandler);
        window.addEventListener('offline', changeStatusHandler);
        return () => {
            window.removeEventListener('online', changeStatusHandler);
            window.removeEventListener('offline', changeStatusHandler);
        }
    }, []);

    return onlineStatus;
};


export default useNetworkStatus;