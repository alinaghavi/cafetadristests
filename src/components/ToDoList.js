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
                key:0
            },
            {
                name: 'Going bathroom',
                done: true,
                key:1
            },
            {
                name: 'Buy somethings',
                done: true,
                key:2
            },
            {
                name: 'Working react',
                done: false,
                key:3
            },
        ],
        inputValue: '',
        filter: 'ALL'
    };

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    handleAddClick = () => {
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

    deleteToDo = (indexItem) => {
        let newTodos = this.state.todos.filter((todo, index) => {
            return index !== indexItem
        });
        this.setState({
            todos: newTodos
        })
    };

    toggleToDo = (todoIndex) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map((todo, index) => {
                    if(todoIndex === index)
                        return {...todo, done: !todo.done};
                    else return todo;
                })
            }
        })
    };

    editToDo = (newName, todoIndex) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map((todo, item) => {
                    if(item === todoIndex) return {...todo, name : newName};
                    else return todo
                })
            }
        })
    };

    changeFilter = (filter) => {
        this.setState({
            filter: filter
        })
    };

    setFilter = () => {
        switch (this.state.filter) {
            case 'ALL' : return this.state.todos;
            case 'DONS' : return this.state.todos.filter(f => f.done);
            case 'UNDONS' : return this.state.todos.filter(f => !f.done);
            default: return
        }
    };

    render() {
        return (
            <div>
                <div className={"header"}>To DO'S</div>
                <div className={classNames("component-wrapper", style.componentWrapper)}>
                    <ul className={style.listItemsWrapper}>
                    {
                        this.setFilter().map((todo,index) =>
                            <ToDoItems {...todo}
                                       deleteToDo={() => {this.deleteToDo(index)}}
                                       toggleToDo={() => {this.toggleToDo(index)}}
                                       editToDo={(newName) => {this.editToDo(newName, index)}}
                            />
                        )
                    }
                    </ul>
                    <div className={classNames("buttonsWrapper", style.buttonsWrapper)} style={{marginTop:'30px'}}>
                        <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                        <button onClick={this.handleAddClick}>Add Task</button>
                    </div>
                    <div className={classNames("buttonsWrapper")} style={{marginTop:'30px'}}>
                        <p>Filters</p>
                        <button onClick={() => {this.changeFilter('ALL')}} className={classNames({[style.activeFilter]: this.state.filter === "ALL"})}>All</button>
                        <button onClick={() => {this.changeFilter('DONS')}} className={classNames({[style.activeFilter]: this.state.filter === "DONS"})}>Dons</button>
                        <button onClick={() => {this.changeFilter('UNDONS')}} className={classNames({[style.activeFilter]: this.state.filter === "UNDONS"})}>Un-Dons</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;
