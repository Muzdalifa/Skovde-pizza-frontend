import React, {useState}from 'react';
import './Menu.css';

const Menu = (props)=>{
  
  return <div className='menu-lefNav'>
    <h4>Vår Meny</h4>
    <ol>
      {props.data.map((item)=><li 
      className={`menu-navLink ${item.id===props.selectedItem.id ? 'menu-selected-item': '' }`} 
      key={item.id} 
      onClick={()=>props.setSelectedItem(item)}>{item.name} - {item.cost}:-
    </li>)}
    </ol>      
  </div>
}
export default Menu