import {useEffect, useState, useCallback} from 'react';

let useTabStatus = () => {
    let [tabStatus, setTabStatus] = useState(!document.hidden);
    let changeStatusHandler = useCallback(event => {
            setTabStatus(!event.type.hidden);
        },
    );

    useEffect(() => {
        document.addEventListener('changevisibility', changeStatusHandler);
        return () => {
            document.removeEventListener('changevisibility', changeStatusHandler);
        }
    }, []);

    return tabStatus;
};


export default useTabStatus;