import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
const Signout = () => {
    localStorage.removeItem('userName')
    return (        
       <div className ='App'>
           <h1>You Have Successfuly Logout Thank-You For Visiting.</h1>
           <a href ='/'>Click to continue</a>
       </div>
    );
    
}
export default Signout;