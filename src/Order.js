import React from 'react';
import './Order.css'

const Order = (props)=>{
  return (
  <div className='order'>
    < img src={props.pizza_image}/>
    <h3>{props.pizza_name}</h3>
  </div>
  )
};

export default Order;