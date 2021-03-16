import React from 'react';
import fire from '../Config/Config';

const Todo = (props) => {
    const deleteHandler = () => {
		// props.setTodos(props.todos.filter(el => el.id !== props.key))
		fire.firestore().collection("todos").doc(props.id).delete()
    }

    const completeHandler = () => {
        // props.setTodos(props.todos.map(item => {
        //     if(item.id === props.id) {
        //         return {
        //             ...item, completed: !item.completed
        //         }
        //     }
        //     return item;
		// }))
		fire.firestore().collection("todos").doc(props.id).update({
			completed: !props.completed
		})
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>{props.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
            <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;