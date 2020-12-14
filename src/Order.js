import React from 'react';
import './Order.css'

const Order = (props)=>{
  return (
  <div className='order'>
    < img src={props.image}/>
    <h3>{props.name}</h3>
  </div>
  )
};

export default Order;