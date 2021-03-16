import React from 'react'
import Form from './Form';
import TodoList from './TodoList';
import { useState, useEffect } from 'react'
import fire from '../Config/Config';

export default function Home() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
      const user = fire.auth().currentUser;
      if(user)  { getTodos() }
      else return
  }, [todos, status])
      //run when todos and status update
  useEffect(() => {
      filterHandler()
  }, [todos, status])
    
  function filterHandler() {
    switch (status) {
      case ("Completed"):
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case ("Not Completed"):
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }
    console.log(fire)
    const getTodos = () => {
        fire.firestore().collection("todos").where('userID', '==', fire.auth().currentUser.uid).onSnapshot(snap => {
          setTodos(snap.docs.map(doc => ({
            id: doc.id,
            text: doc.data().text,
            completed: doc.data().completed,
            timestamp: doc.data.timestamp,
            userID: fire.auth().currentUser.uid
          })))
        })
    }  

    const logoutHandler = () => {
          fire.auth().signOut();
    }

    return (
        <div>
          <header>
            <h1>Tasks</h1>
            <button className="btn btn-secondary" onClick={logoutHandler}>Logout</button>
          </header>
          <div className="wrapper">
            <Form 
              todos={todos} 
              setTodos={setTodos} 
              inputText={inputText} 
              setInputText={setInputText} 
              setStatus={setStatus}
              />
            <TodoList 
              className="list"
              todos={todos} 
              setTodos={setTodos} 
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
    )
}
