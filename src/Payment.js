import React from 'react';
import './Payment.css'

import { useLocation } from 'react-router';

const Payment = ()=>{
  const {state} = useLocation();
  console.log(state.orderItems);

  return <div>
    <p>Order number {state.orderNum}</p>
    <div className='payment-info'>
      <form className='form-container'>
        <input type ='text' placeholder='Förnamn'></input>
        <input type ='text' placeholder='Efternamn'></input>
        <input type ='text' placeholder='Address'></input>
      </form>
      <div className='payment-item'>
        <h4>Köpta produkter</h4>
        {
          state.orderItems.map(
            (orderItemInfo,index)=><div key={index} className='order-item-right-nav-up'>
              <label>{orderItemInfo.item.name}</label>
              <label className='order-item-numericcell'>{orderItemInfo.item.cost}x{orderItemInfo.count}</label> 
              <label className='order-item-numericcell'>{orderItemInfo.item.cost*orderItemInfo.count}:-</label><br/>
            </div>              
          )
        }
        <label className='order-item-numericcell'>Total betalning:{state.cost}:-</label>
      </div>
    </div>

    <div className='payment-final-payments'> 
        <p>Betalningar</p>
    </div>
  </div>
}

export default Payment