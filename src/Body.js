import React from 'react';
import './Body.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Body = () =>{
  return (
    <Router>
      {/* <!-- Header --> */}
      <div className="header">
        <h1>Skövde Pizza</h1>
      </div>

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

      {/* <!-- Footer --> */}
      <div className="footer">
        <h2>Created by Muzdalifa Ali</h2>
      </div>
    </Router>
  )
}
export default Body;