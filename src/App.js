import React, { Component } from 'react';
import './App.css';
import fire from './Config/Config';
//importing components
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
    
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Login />}
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
    )
  }
}

export default App;
