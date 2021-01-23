import React, {useState} from "react";
import Menu from './Menu';
import OrderdItem from './OrderdItem';
import Details from './Details';
import data from '../data';
import "./OrderPage.css"

const OrderPage = () =>{
  const [selectedItem, setSelectedItem] = useState({id: '',image:'',name:'', Time:''});
  const [orderdItems, setOrderdItems] = useState([]); //array of object(item, count)

  const addOrderdItem=(item)=>{
    //check if exist
    const index = orderdItems.findIndex((x)=>x.item.id===item.id)
    if(index ==-1){ //if false create new and initialize count to 1
      const newOrderedItemInfo = {item, count: 1};
      orderdItems.push(newOrderedItemInfo);
    } else{ //else increment the count
      orderdItems[index].count = orderdItems[index].count + 1
    }
    //Add item
    setOrderdItems([...orderdItems]);

  }

  const removeOrderdItem=(item,removeAll)=>{
    const itemIndex = orderdItems.findIndex((x)=>x.item.id===item.id)
    if(itemIndex !==-1){

      if(orderdItems[itemIndex].count ===1  || removeAll){
        orderdItems.splice(itemIndex,1)
      }else{
        orderdItems[itemIndex].count = orderdItems[itemIndex].count -1
      }
      
      setOrderdItems([...orderdItems])
    }
    
  }

  const menuProps = { data, selectedItem, setSelectedItem }
  const detailsProps = { selectedItem, addOrderdItem }
  const orderdItemsProps = {orderdItems,setOrderdItems,removeOrderdItem,addOrderdItem}
  
  return <div className="row orderPage-container">
    <div className="side">
      <Menu { ...menuProps}   />
    </div>
    <div className="side">
      <Details {...detailsProps}  />
    </div>
    <div className="side">
      <OrderdItem {...orderdItemsProps}/>
    </div>

  </div>
}

export default OrderPage;