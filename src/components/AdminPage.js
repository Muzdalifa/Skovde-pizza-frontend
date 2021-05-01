import React, {useState, useEffect} from "react"
import "./AdminPage.css"


const AdminPage = ()=>{
   //
   const uploadedFile = (e)=>{
   }
   //Variable to store items from the backend
   const [items, setItems] = useState([])
   //fetch items from backend efter page loading.
   useEffect(() => {
      const getItems = async () =>{
         const response = await fetch("/api/items")
         const items = await response.json();
         setItems(items)
      }
      getItems();
   }, []) //Empty array, means fetch data oly once, ie when the page is loading
   console.log(items);

   //catching user input
   const addData = async() =>{
      const name = document.getElementById("itemName").value
      const cost = document.getElementById("itemCost").value
      const discount = document.getElementById("itemDiscount").value
      const image = document.getElementById("file-upload").files[0]
      console.log(document.getElementById("file-upload").files)
      //const response = await fetch("/api/items",{method:"post", body: JSON.stringify({name, cost, discount}), headers:{"Content-Type": "application/json"} });
      
      //in order to be able to upload a file we ca use form data
      const body = new FormData()
      body.append("name", name)
      body.append("cost", cost)
      body.append("discount", discount)
      body.append("image", image)

      // Display the key/value pairs
      for(var pair of body.entries()) {
         console.log(pair[0]+ ', '+ pair[1]);
      }
      
      //send data to backend
      const response = await fetch("/api/items",{method:"post", body: body});
      //convert response to json
      const addedItem = await response.json();
      //Add existing items and new added items using spread operator
      setItems([...items, addedItem])
      console.log("addedItem:")
      console.log(addedItem)
   }

   //clear form data
   const clearData = () =>{
      document.getElementById("itemName").value = ''
      document.getElementById("itemCost").value = ""
      document.getElementById("itemDiscount").value = ""
   }
   //delete row from the table
   const deleteItem = async(id) =>{
      const response = await fetch(`/api/items/${id}`, {method:"delete"})
      if (response.status === 204){
         const remainedItems = items.filter(x=>x.id !== id)
         setItems([...remainedItems])
      }
   }

   return <div className="row container">
      <p>Här kan du lägga till ett nytt objekt, redigera det gamla och ta bort oönskade. </p>

      <div className='admin-form-container'>
        <input type ='text' id="itemName" placeholder='Namn'></input> <input type ='text' id="itemCost" placeholder='Kost'></input>
         <input type ='text' id="itemDiscount" placeholder='Rabbat'></input>
         <label for="file-upload" class="custom-file-upload">Ladda upp fil </label>
         <input type ='file' id="file-upload" placeholder='Bild' onClick={(e)=>uploadedFile(e)}></input>
        <button className="add-btn" onClick={addData}>Lägg</button>
        <button className="clear-btn" onClick={clearData}>Rensa</button>      
      </div>

      <table>
         <tr>
            <th>ID</th>
            <th>Namn</th> 
            <th>Kost</th> 
            <th>Rabbat</th>
            <th>Bild</th>
            <th>Delete</th>
         </tr>
         { //this data come from backend  
            items.map(
               item=><tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.cost}</td>
               <td>{item.discount}</td>
               <td><img src={`./static/images/${item.imagePath}`} style={{heigth:25, width:25, padding:"auto"}}  ></img></td> 
               <td className="delete-item" onClick={()=>deleteItem(item.id)}>X</td>              
            </tr>
            )            
         }  
      </table>     
   </div>
}

export default AdminPage