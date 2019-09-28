import React, { Component } from 'react';

const withActiveTabStatus = (WrappedCompontnt) => {
    return class withActiveTabStatusWrapper extends Component {
        state = {
            isTabActive : !document.hidden
        };

        handleVisibilityChange = (event) => {
            this.setState({
                isTabActive : !event.target.hidden
            })
        };
        componentDidMount() {
          document.addEventListener('visibilitychange', this.handleVisibilityChange)
        }

        componentWillUnmount() {
            document.removeEventListener('visibilitychange', this.handleVisibilityChange)
        }

        render(){
            return <WrappedCompontnt isTabActive = {this.state.isTabActive}/>
        }
    }
};

export default withActiveTabStatus;