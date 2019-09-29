import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Home'
export default class SignIn extends React.Component {
  constructor (probs) {
    super(probs);
    this.state = {
        userName:'Enter',
        passcode:'Enter',
        reffer: false,
       
       
    };
}
handleChange = (event) => {
    // console.log(this.state.userName,   this.state.passcode)
    // console.log('handle change called')
    this.setState({[event.target.name]:event.target.value});
    // console.log(event)
}

handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.userName, this.state.passcode)
    localStorage.setItem('userName', this.state.userName)
    this.setState({
      reffer: true,
    })
 
          
            
} 
  render () {
    if(this.state.reffer) {
     return (  
    <div className ='App'>
          
             <h1>You are successfully Login Please Click below to get rid of your Hungry</h1><br></br>
         <a href = "/">Home</a>            
     
      
      
       
    </div>
     );
    }
    return (
      <div className = 'App'>
       <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type = 'text' name = 'userName' onChange = {(e) => this.handleChange(e)} value ={this.state.userName} placeholder = 'Enter User Name' />
        </label><br></br><br></br>
        <label>
          Passcode:
          <input type = 'password' name = 'passcode' onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} placeholder = 'Enter Passcode' />
        </label><br></br>
       <input className ='btn bg-primary text-white' type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}