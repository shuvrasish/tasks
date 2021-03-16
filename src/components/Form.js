import React from 'react';
import fire from '../Config/Config';
import firebase from 'firebase/app';

const Form = (props) => {
    const inputTextHandler = (event) => {
        // console.log(event.target.value)
        props.setInputText(event.target.value)
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        
        if(props.inputText === "") //don't add empty inputs
            return
        
        fire.firestore().collection("todos").add({
            completed: false,
            text: props.inputText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userID: fire.auth().currentUser.uid
        })

        props.setInputText("");
    }

    const statusHandler = (event) => {
        props.setStatus(event.target.value);
    }

    return (
        <form id="inputform">
            <input onChange={inputTextHandler} type="text" className="todo-input" value={props.inputText}/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not completed</option>
                </select>
            </div>
        </form>
    );
}

export default Form;