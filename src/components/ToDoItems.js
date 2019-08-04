import React, {Component} from 'react';
import style from "./ToDoList.module.css";

class ToDoItems extends Component {
    state = {
        editing: false,
        inputValue:''
    };

    handelEditPress = () => {
        this.setState({
            editing:true,
            inputValue: this.props.name
        })
    };

    handleSave = () => {
        this.props.editToDo(this.state.inputValue);
        this.setState({
            editing: false
        })
    };

    handleCancel = () => {
        this.setState({
            editing: false
        })
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    render() {
        const {name, done, deleteToDo, toggleToDo} = this.props;
        return (
            <li className={style.listItem}>
                {this.state.editing ? (
                    <>
                        <input value={this.state.inputValue} type="text"  onChange={this.handleInputChange}/>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </>
                    ) : (
                    <>
                        <span>
                        {name}
                    </span>
                        <button onClick={this.handelEditPress}>Edit</button>
                        <button
                            onClick={() => {
                                toggleToDo()
                            }}>
                            {done ? 'Un-Done' : 'Done'}
                        </button>
                        <button
                            onClick={() => {
                                deleteToDo()
                            }}>Delete
                        </button>
                    </>
                )}
            </li>
        );
    }
}


export default ToDoItems;
