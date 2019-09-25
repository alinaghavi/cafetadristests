import React, {Component} from 'react';

class ActiveDetail extends Component {
    state = {
        isOnline : navigator.onLine
    };

    changeStatusListener = (event) => {
        this.setState({
            isOnline : event.type === 'online'
        })
    };

    componentDidMount() {
        window.addEventListener('offline', this.changeStatusListener);
        window.addEventListener('online', this.changeStatusListener);
    }

    render() {
        return (
            <div>
                Your Connection is { String(this.state.isOnline) }
            </div>
        );
    }
}

export default ActiveDetail;