import React, {useState}from 'react';
import './Menu.css';

const Menu = (props)=>{
  
  return <div className='lefNav'>
    <h4>Menu</h4>
    {props.data.map((item)=><div 
      className={`navLink ${item.id===props.selectedItem.id ? 'selectedItem': '' }`} 
      key={item.id} 
      onClick={()=>props.setSelectedItem(item)}>{item.name}
    </div>)}    
  </div>
}
export default Menu