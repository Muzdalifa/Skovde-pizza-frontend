import React, { useState } from 'react';
import './OrderdItem.css';
import {useHistory} from 'react-router-dom';


const OrderdItem = (props)=>{
//currentOrderdItemInfo: it's an object 

  const history = useHistory();
  const sum = (accumulator, currentOrderdItemInfo) =>{ 
    
    return accumulator + currentOrderdItemInfo.item.cost * currentOrderdItemInfo.count
   } 

   //get order number
   const orderNum = new Date().getTime().toString().slice(-7);
 
  return <div className='order-item-right-nav'>
    <h4>Köpta produkter</h4>
    {
      props.orderdItems.map(
        (orderItemInfo,index)=><div key={index} className='order-item-right-nav-up'>
          <label>{orderItemInfo.item.name}</label>
          <label className='order-item-numericcell'>å{orderItemInfo.item.cost}</label>
          <div className='order-item-order-count'>
          <label className='order-item-labelbtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item)}>-</label>
          <label className='order-item-count-item'>{orderItemInfo.count}</label>
          <label className='order-item-labelbtn' onClick={()=>props.addOrderdItem(orderItemInfo.item)}
            onMouseDown={(event)=>console.log('mouseDown',event.target.classList)}
            onMouseUp={(event)=>console.log('mouseUp',event.target)}
          >+</label>
          </div>
          <label className='order-item-numericcell'>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
          <button className='order-item-removebtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item, true)}>X</button>
        </div>              
      )
    }
    {
      (props.orderdItems.length === 0)
      ? <div>Varukorgen är tom</div>
      : <>
        <div key={-1} className='order-item-right-nav-up order-item-right-nav-total-payment'>
          <label>Att betala:</label>
          <label className='order-item-hidden'>å67</label>
          <div className='order-item-order-count order-item-hidden' >
            <label className='order-item-labelbtn order-item-hidden'>-</label>
            <label className='order-item-count-item order-item-hidden'></label>
            <label className='order-item-labelbtn order-item-hidden'>+</label>
          </div>
          <label className='order-item-numericcell'>{props.orderdItems.reduce(sum,0)}:-</label>
          <button className='order-item-removebtn order-item-hidden' >X</button>
        </div> 
        <div className='order-item-right-nav-down'>
          <p>Bästalla nummber: {orderNum}</p>
          <button className='order-item-buy-btn' onClick={() => history.push('/payment', {cost:props.orderdItems.reduce(sum,0), orderNum, orderItems: props.orderdItems }) }>Handla</button>
        </div> 
      </>
    }
    
  </div>
}
export default OrderdItem