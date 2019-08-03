import React, {Component} from 'react';
import style from './ToDoList.module.css';
import ToDoItems from "./ToDoItems";
import classNames from 'classnames';

class ToDoList extends Component {
    state = {
        todos: [
            {
                name: 'Wash the dishes',
                done: false,
                key:1
            },
            {
                name: 'Going bathroom',
                done: true,
                key:2
            },
            {
                name: 'Buy somethings',
                done: true,
                key:3
            },
            {
                name: 'Working react',
                done: false,
                key:4
            },
        ],
        inputValue: ''
    };


    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    handleAddClick = (todo) => {
        if (this.state.inputValue) {
            this.setState((prevState) => {
                return {
                    todos: [...prevState.todos, {name: this.state.inputValue, done: false, key: Math.random()}]
                }
            });
            this.setState({
                inputValue: ''
            })
        }
    };

    deleteToDo = (itemIndex) => {
        console.log("itemIndex", itemIndex);
        console.log("todossssssssss", this.state.todos);
        let newTodos = this.state.todos.filter((todo) => {
            return todo.key !== itemIndex
        });
        console.log("newTodos", newTodos);
        this.setState({
            todos: newTodos
        })
    };

    render() {
        return (
            <div>
                <div className={"header"}>To DO'S</div>
                <div className={classNames("component-wrapper", style.componentWrapper)}>
                    {
                        this.state.todos.map((todo) =>
                            <ToDoItems todo={todo} deleteToDo={this.deleteToDo} key={todo.key} />
                        )
                    }
                </div>
                <div className={classNames("buttonsWrapper", style.buttonsWrapper)}>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                    <button onClick={this.handleAddClick}>Add Task</button>
                </div>
            </div>
        );
    }
}

export default ToDoList;
