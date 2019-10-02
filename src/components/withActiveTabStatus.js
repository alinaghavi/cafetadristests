import React, {Component} from 'react';

// const withActiveTabStatus = (WrappedCompontnt) => {
//     return class withActiveTabStatusWrapper extends Component {
//         state = {
//             isActive : !document.hidden
//         };
//
//         handleVisibilityChange = (event) => {
//             this.setState({
//                 isActive : !event.target.hidden
//             })
//         };
//         componentDidMount() {
//           document.addEventListener('visibilitychange', this.handleVisibilityChange)
//         }
//
//         componentWillUnmount() {
//             document.removeEventListener('visibilitychange', this.handleVisibilityChange)
//         }
//
//         render(){
//             return <WrappedCompontnt isActive = {this.state.isActive}/>
//         }
//     }
// };
class WithTabActiveStatus extends Component {
    state = {
        isActive: !document.hidden
    };

    componentDidMount() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }

    componentWillUnmount() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    }

    handleVisibilityChange = (event) => {
        this.setState({
            isActive: !event.target.hidden
        })
    };

    render() {
        return this.props.children({isActive: this.state.isActive})
    }

}

export default WithTabActiveStatus;