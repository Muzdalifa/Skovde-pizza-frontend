import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'

// pages
import Home from './Home'
import Error from './Error'
import AboutUs from './AboutUs'
import Contact from './Contact'





const App = () => {

  return (      
  <Router>
    <div className='app-container'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
        <Route path='/omoss'>
          <AboutUs />
        </Route>
        <Route path='/kontakt'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch> 
      <Footer/>      
    </div>
  </Router>

  )
  }
export default App;
