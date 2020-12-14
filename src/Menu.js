import React, {useState}from 'react';
import './Menu.css';

const Menu = (props)=>{

  const [selectedItemId,setSelectedItemId] = useState(null);

  return <div className='lefNav'>
    <h4>Menu</h4>
    {props.data.map((item)=><div 
      className={`navLink ${item.id===selectedItemId ? 'selectedItem': '' }`} 
      key={item.id} 
      onClick={()=>setSelectedItemId(item.id)}>{item.name}
    </div>)}    
  </div>
}
export default Menu