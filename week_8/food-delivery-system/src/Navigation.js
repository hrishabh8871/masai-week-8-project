import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import CompanyLogo from './CompanyLogo';
import Home from './Home'
import SignIn from './userKnow';
import SignUp from './SignUp'
import Restaurant from './specialRestaurant';
import signIn from './userKnow'
import Signout from './signout.js'
// import NewArrival from './newArrival';
// import MenClothing from './menClothing';
// import WomenClothing from './womenClothing';
// import BabyKids from './babykids';
// import Furniture from './furniture';
import CartIcon from './Cart';
// import ShowAlertUser from './showLogin';
var getUserName = ' ';
var getUserName = localStorage.getItem('userName');
const getStatus = () => {
    if(getUserName == null) {
        getUserName = 'User'
        return (
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <React.Fragment>
                                <Link to="/login"> Login</Link>             
                        </React.Fragment><br></br>
                        <React.Fragment>
                                <Link to="/signUp"> Sign-Up</Link>             
                        </React.Fragment>
                        
                    </div>
        );
    }
    else {
      return (
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <React.Fragment>
                    <Link to="/login">My order</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                    <Link to="/signUp">History</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                    <Link to="/signout">Sign Out</Link>             
            </React.Fragment>
            
        </div>
      );  
    }
}
const  Navigation = (props) => {
    
   
    
        return (
            <div>
                <div className = "navbar navbar-expand-lg navbar-light bg-white navbar-fixed-top">
                <div className = "navbar-brand">
                    <CompanyLogo />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-lg-6">               
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/">Home</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> <img src="https://img.icons8.com/color/30/000000/two-smartphones.png"/>App</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/specialRestaurant">Special Restaurant</Link>             
                            </React.Fragment>
                           
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> Offer Zone</Link>             
                            </React.Fragment>                        
                        </li>
                        <li className="nav-item">
                            
                        </li>
                    </ul>
                 
                    <div>
                        <CartIcon />
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {
                           'Hi' + ' ' + getUserName
                       }
                    </button>
                    {
                        getStatus()
                    }
               </div>
                    
            </div>     
                
            </div>
          
           
                
            <div>
                {
                    <Route path = "/" exact component = {Home} />
                }
                    {
                        <Route path = "/login" component = {SignIn} />
                    }
                     {
                         <Route path = "/signUp" component = {SignUp} />
                     }
                     {
                         <Route path = "/specialRestaurant" component = {Restaurant} />
                     }
                     {
                         <Route path = "/signout" component = {Signout} />
                     }
                   
              </div>
            </div>
        );
}


export default Navigation;  