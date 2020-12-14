import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';
import Header from './Header'
import Details from './Details'
import Order from './Order';
import './App.css'


const App = () => {
  const [pizza,setPizza] = useState(data)
  return (
    <div className='container'>
      <header>
        <h3>Skövde Pizza</h3>
      </header>
      <div className='middleContent'>
        <Menu></Menu>
        <section className='orderList'>      
          {pizza.map((order)=>{
            return (
                <Order key={order.pizzaId} {...order} />
          )
        })}
        </section>
        <Details></Details>
      </div>
      <footer>
        Skövde Pizza
      </footer> 
    </div>
  )
  }
export default App;
