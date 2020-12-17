import React, {useState} from 'react';
import './Main.css'
import data from './data';
import Menu from './Menu';
import OrderdItem from './OrderdItem';
import Details from './Details';

const Main = ()=>{
  const [selectedItem, setSelectedItem] = useState({id: '',image:'',name:'', Time:''});
  const [orderdItems,setOrderdItems] = useState([]);

  const addOrderdItem=(item)=>{
    orderdItems.push(item);
    setOrderdItems([...orderdItems]);
  }

  const removeOrderdItem=(item)=>{
    const itemIndex = orderdItems.findIndex((x)=>x.id===item.id)
    orderdItems.splice(itemIndex,1)
    setOrderdItems([...orderdItems])
  }

  const menuProps = { data, selectedItem, setSelectedItem }
  const detailsProps = { selectedItem, addOrderdItem }
  const orderdItemsProps = {orderdItems,setOrderdItems,removeOrderdItem}
  return <div className='main'>
        <Menu { ...menuProps}   />
        <Details {...detailsProps}  />
        <OrderdItem {...orderdItemsProps}/>
      </div>
}
export default Main