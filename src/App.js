import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './Config/Config';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // const [userName, setUserName] = useState("Random");
  
  //run when the app starts
  useEffect(() => {
    getTodos()
  }, [])

  //run when todos and status update
  useEffect(() => {
    filterHandler()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case ("Completed"):
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case ("Not Completed"):
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  const getTodos = () => {
    db.collection("todos").onSnapshot(snap => {
      setTodos(snap.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        completed: doc.data().completed,
        timestamp: doc.data.timestamp
      })))
    })
  }  

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
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
      <footer>
      <p>Made with ❤️ by <strong>Shuvrasish Roy</strong></p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/shuvrasish-roy-42719a190/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/shuvrasish.roy.96/"><i className="fab fa-facebook"></i></a>
        <a href="https://github.com/shuvrasish"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/duckfizz_/"><i className="fab fa-instagram"></i></a>
      </div>
      </footer>
    </div>
  );
}

export default App;
