import React from 'react';
import './Order.css'

const Order = (props)=>{
  return (
  <div className='order'>
    < img src={props.pizza}/>
  </div>
  )
};

export default Order;