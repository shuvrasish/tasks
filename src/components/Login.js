import React, { Component } from 'react';
import fire from '../Config/Config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import '../App.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
    });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    })
    .catch((error) => {
        console.log(error);
    })
  }
  render() {
    return (
      <div className="container">
        
        <form id="loginform">
        <div><h1>Tasks</h1></div>
          <div className="form-group">
            <label for="emailInput">EMAIL</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="InputPassword">PASSWORD</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="InputPassword" placeholder="Password" />
          </div>
          <div>
            <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
          </div>
        </form>

      </div>
    );
  }
}
export default Login;
