import React, {useState}from 'react';
import './Menu.css';

const Menu = (props)=>{
  
  return <div className='lefNav'>
    <h4>Vår Meny</h4>
    <ol>
      {props.data.map((item)=><li 
      className={`navLink ${item.id===props.selectedItem.id ? 'selectedItem': '' }`} 
      key={item.id} 
      onClick={()=>props.setSelectedItem(item)}>{item.name} - {item.cost}:-
    </li>)}
    </ol>
    
       
  </div>
}
export default Menu