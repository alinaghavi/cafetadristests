import React, {Component} from 'react';
import classNames from "classnames";
import style from "./MouseTracker.module.css";
import InputRange from 'react-input-range';
import '../../node_modules/react-input-range/lib/css/index.css';
import { SketchPicker } from 'react-color';


class MouseTracker extends Component {
    squ = React.createRef();
    state = {
        mouseX: 0,
        mouseY: 0,
        divX: 0,
        divY: 0,
        isMouseDown: false,
        dots: [],
        rangeValue: 5,
        dotColor: 'green'
    };

    addDot = (x, y) => {
        this.setState((prevState) => {
            return {
                dots: [...prevState.dots, {x, y}]
            }
        })
    };

    handleMouseMove = (event) => {
        this.setState({
            mouseX: event.pageX - this.state.divX,
            mouseY: event.pageY - this.state.divY
        }, () => {
            if (this.state.isMouseDown) {
                this.addDot(this.state.mouseX, this.state.mouseY)
            }
        });

    };

    handleMouseEnter = (event) => {
        if (event.buttons === 1) {
            this.setState({
                isMouseDown: true
            })
        }
    };

    handleMouseLeave = (event) => {
        this.setState({
            mouseX: 0,
            mouseY: 0,
            isMouseDown: false
        })
    };

    componentDidMount() {
        this.setState({
            divX: this.squ.current.offsetLeft,
            divY: this.squ.current.offsetTop
        })
    }

    handleMouseDown = (event) => {
        this.setState({
            isMouseDown: true
        })
    };

    handleMouseUp = (event) => {
        this.setState({
            isMouseDown: false
        })
    };

    handleChangeColorComplete = (color) => {
        this.setState({
            dotColor: color.hex
        })
    };


    render() {
        return (
            <div>
                <div className={"header"}>Mouse Tracker</div>
                <div className={classNames("component-wrapper", style.componentWrapper)}>
                    <div>Mouse Position:</div>
                    <div style={{marginBottom: '40px'}}>
                        <div>
                            X Position is: {this.state.mouseX}
                        </div>
                        <div>
                            Y Position is: {this.state.mouseY}
                        </div>
                        <div>
                            Is Mouse Down: {String(this.state.isMouseDown)}
                        </div>
                        <div style={{width:'200px', margin:'0 auto' , marginTop:'40px'}}>
                            <InputRange
                                maxValue={25}
                                minValue={5}
                                value={this.state.rangeValue}
                                onChange={rangeValue => this.setState({ rangeValue })}
                            />
                        </div>
                        <div style={{width:'200px', margin:'0 auto' , marginTop:'40px'}}>
                            <SketchPicker
                                color={ this.state.dotColor }
                                onChangeComplete={ this.handleChangeColorComplete}
                            />
                        </div>
                    </div>
                    <div ref={this.squ}
                         className={style.boxWrapper}
                         onMouseMove={this.handleMouseMove}
                         onMouseEnter={this.handleMouseEnter}
                         onMouseLeave={this.handleMouseLeave}
                         onMouseDown={this.handleMouseDown}
                         onMouseUp={this.handleMouseUp}
                    >
                        {this.state.dots.map((dot, index) => {
                            return (
                                <div className={style.dot}
                                     style={{left: dot.x, top : dot.y, width: this.state.rangeValue, height: this.state.rangeValue, backgroundColor: this.state.dotColor}} key={index}
                                     >
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MouseTracker;