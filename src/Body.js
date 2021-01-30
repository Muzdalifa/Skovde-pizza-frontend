import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import "./Body.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import Payment from "./components/Payment"
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";


const Body = () =>{
  return (
    <Router>
      
      <Header />
      <Navigation />
      <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/order'>
            <OrderPage />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/kontakt'>
            <ContactPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          {/* <Route path='*'>
            <Error />
          </Route> */}
        </Switch> 
      <Footer />
    </Router>
  )
}
export default Body;