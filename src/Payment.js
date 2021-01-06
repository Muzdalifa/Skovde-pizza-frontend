import React from 'react';
import './Payment.css'

import { useLocation } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';

//This is your test publishable API key.
const stripePromise = loadStripe('pk_test_51I6bvkHTHUtbDw8mPtB00mwyaUd9vgLez02Sc7bbRZLYcLYKeGeH1z2Y8Qy0AKVndZuutOVBjOIp8eVhEc6cqGKA00GxO7hHfT');

const checkout = async()=>{
// Get Stripe.js instance
const stripe = await stripePromise;
// Call backend to create the Checkout Session
const response = await fetch("https://localhost:44375/api/Payments",{method:"post"});

const session = await response.json();
// When the customer clicks on the button, redirect them to Checkout.
const result = await stripe.redirectToCheckout(session);



}

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
        <label className='order-item-numericcell'>Total betalning:{state.cost}:-</label><br />
        <button className='payment-paybtn' id="checkout-button" onClick={checkout}>Betala</button>
      </div>
    </div>
  </div>
}

export default Payment