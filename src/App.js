import React, {useState} from 'react';
import data from './data';
import Order from './Order';
import './App.css'

const App = () => {
  return (
    <section className='orderList'>
      {data.map((order)=>{
        return <Order key={order.orderId} {...order} />
      })}
    </section>
  )
  }
export default App;
