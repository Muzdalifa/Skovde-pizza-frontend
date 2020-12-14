import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';
import Header from './Header'
import Details from './Details'
import Order from './Order';
import './App.css'


const App = () => {
  return (
    <div className='container'>
      <header>
        <h3>Skövde Pizza</h3>
      </header>
      <div className='middleContent'>
        <Menu data={data} />
        <section className='orderList'>      
          
        </section>
        <Details />
      </div>
      <footer>
        Skövde Pizza
      </footer> 
    </div>
  )
  }
export default App;
