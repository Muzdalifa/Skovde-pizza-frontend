import React from 'react';
import './OrderdItem.css'

const OrderdItem = (props)=>{
  return <div className='rightNav'>
    {
      props.orderdItems.map(
        (item,index)=><div key={index}>
          <label>Name: {item.name}</label><br/>
          <label>Cost: {item.cost}</label><br/>
          <button onClick={()=>props.removeOrderdItem(item)}>Remove</button>
        </div>
      
      )
    }
  </div>
}
export default OrderdItem