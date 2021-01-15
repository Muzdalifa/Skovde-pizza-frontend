import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import "./Body.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Body = () =>{
  return (
    <Router>
      
      <Header />
      {/* <!-- Navigation Bar --> */}
      <div className="navbar">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>

      {/* <!-- The flexible grid (content) --> */}
      <div className="row">
        <div className="side">
          <h2></h2>
          <h5></h5>
          <div className="fakeimg" style={{height:200}}>Image</div>
        </div>
        <div className="main">
          <h2>TITLE HEADING</h2>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <br/>
          <h2>TITLE HEADING</h2>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
      <Footer />
    </Router>
  )
}
export default Body;