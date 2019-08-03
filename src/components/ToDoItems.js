import React, {Component} from 'react';
import style from "./ToDoList.module.css";

class ToDoItems extends Component {

    render() {
        console.log(this.props);
        const {todo, deleteToDo} = this.props;
        return (
            <ul className={style.listItemsWrapper}>
                <li className={style.listItem}>
                    <span>
                        {todo.name}
                    </span>
                    <button>Edit</button>
                    <button>Done</button>
                    <button onClick={() => {deleteToDo(todo.key)}}>Delete</button>
                </li>
            </ul>
        );
    }
}


export default ToDoItems;
