import React from 'react';
import './Payment.css'

import { useLocation } from 'react-router';

const Payment = ()=>{
  const {state} = useLocation();
  console.log(state.orderItems);

  return <div>
    <p>Order number {state.orderNum}</p>
    <form className='form-container'>
      <div>
      <label>Förnamn: </label>
      </div>
      <div>
      <input type ='text' placeholder='Förnamn'></input>
      </div>
      <div>
      <label>Efternamn: </label>
      </div>
      <div>
      <input type ='text' placeholder='Efternamn'></input><br />
      </div>
      <div>
      <label>Adress: </label>
      </div>
      <div>
      <input type ='text' placeholder='Address'></input><br />
      </div>
      <div>Produkt</div>
      <input type='text'></input>
    </form>

    <h4>Köpta produkter</h4>
    {
      state.orderItems.map(
        (orderItemInfo,index)=><div key={index} className='order-item-right-nav-up'>
          <label>{orderItemInfo.item.name}</label>
          <label className='order-item-numericcell'>å{orderItemInfo.item.cost}</label>
          <div className='order-item-order-count'>
          <label className='order-item-count-item'>{orderItemInfo.count}</label>
          </div>
          <label className='order-item-numericcell'>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
        </div>              
      )
    }

    <div className='payment-final-payments'> 
        <p>Total betalning: {state.cost}</p>
        <p>Betalningar</p>
    </div>
  </div>
}

export default Payment