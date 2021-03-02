import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    props.filteredTodos.map( todo => (
                        <Todo 
                        text={todo.text} 
                        id={todo.id}
                        todos={props.todos} 
                        setTodos={props.setTodos} 
                        key={todo.id} 
                        todo={todo}
                        completed={todo.completed}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;