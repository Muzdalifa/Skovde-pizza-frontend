import React, { useState } from 'react';
import './OrderdItem.css'

const OrderdItem = (props)=>{
//currentOrderdItemInfo: it's an object 
  const sum = (accumulator, currentOrderdItemInfo) =>{ 
    
    return accumulator + currentOrderdItemInfo.item.cost * currentOrderdItemInfo.count
   } 
 
  return <div className='rightNav'>
    <h2>Köpta produkter</h2>
    {
      props.orderdItems.map(
        (orderItemInfo,index)=><div key={index} className='rightNavUp'>
          <label>{orderItemInfo.item.name}</label>
          <label>å{orderItemInfo.item.cost}</label>
          <div className='orderCount'>
          <label className='labelbtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item)}>-</label>
          <label className='countItem'>{orderItemInfo.count}</label>
          <label className='labelbtn' onClick={()=>props.addOrderdItem(orderItemInfo.item)}
            onMouseDown={(event)=>console.log('mouseDown',event.target.classList)}
            onMouseUp={(event)=>console.log('mouseUp',event.target)}
          >+</label>
          </div>
          <label>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
          <button className='orderItemRemoveBtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item, true)}>X</button>
        </div>              
      )
    } 
  <div className='rightNavTotalPayment'>
    <label className='labelTotal'>Att betala:</label>
    <label className='total'>{props.orderdItems.reduce(sum,0)} :-</label> 
    <label>{''}</label>  
  </div>
  <div className='rightNavDown'>

  </div>
  </div>
}
export default OrderdItem