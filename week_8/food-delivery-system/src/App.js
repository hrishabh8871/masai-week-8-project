import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { ParallaxProvider } from 'react-scroll-parallax';
import SignIn from './userKnow.js'
import AddressForm from './AddressForm'
import PaymentFrom from './PaymentForm'
import Checkout from './Checkout'
import Navigation from './Navigation'
import Home from './Home'
import RecipeReviewCard from './HomeProduct'
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Restaurant from './specialRestaurant';

function App() {
  return (
    <div>    
      {/* <SignIn />       */}
      {/* <AddressForm /> */}
      {/* <PaymentFrom /> */}
      {/* <Checkout /> */}
      
      <ParallaxProvider>
            <Navigation />
            
            
           
      </ParallaxProvider>
    </div>
  );
}

export default App;
