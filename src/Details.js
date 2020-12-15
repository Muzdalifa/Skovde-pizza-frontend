import React from 'react';
import './Details.css'

const Details = (props)=>{

  return (
    <div className='details'>
      {
        props.selectedItem.id !== ''
        ? <div>
            <img src={props.selectedItem.image} />
            <label>Pizza name: {props.selectedItem.name}</label>
            <label>Cost: {props.selectedItem.cost}</label>
            <button onClick>Add</button>
          </div>
        : null
      } 
    </div>
  )
  
};

export default Details;