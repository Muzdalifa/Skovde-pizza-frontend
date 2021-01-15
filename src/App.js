import React from 'react';
import Header from './Header';
import Order from './Order';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'

// pages
import Home from './Home'
import Error from './Error'
import Payment from './Payment'
import Contact from './Contact'


const App = () => {

  return (      
  <Router>
    <div className='app-container'>
      <Header />
      <div className='app-body'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/order'>
            <Order />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/kontakt'>
            <Contact />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch> 
      </div>
      <Footer/>      
    </div>
  </Router>

  )
  }
export default App;
