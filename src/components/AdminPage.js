import React from "react"
import "./AdminPage.css"


const AdminPage = ()=>{
   return <div className="row container">
      <p>Här kan du lägga till ett nytt objekt, redigera det gamla och ta bort oönskade. </p>

      <form className='admin-form-container'>
        <input type ='text' placeholder='Namn'></input> <input type ='text' placeholder='Kost'></input>
        <input type ='text' placeholder='Image'></input> <input type ='text' placeholder='Rabbat'></input>
        <button className="add-btn">Lägg</button>
        <button className="clear-btn">Rensa</button>      
      </form>

      <table>
         <tr>
            <th>ID</th>
            <th>Namn</th> 
            <th>Kost</th> 
            <th>Bild</th> 
            <th>Rabbat</th> 
         </tr>
         <tr>
           <td>ID</td>
            <td>Nam</td>
            <td>Kost</td>
            <td>Bild</td>
            <td>Rabbat</td> 
         </tr> 
         <tr>
           <td>ID</td>
            <td>Nam</td>
            <td>Kost</td>
            <td>Bild</td>
            <td>Rabbat</td> 
         </tr> 
         <tr>
           <td>ID</td>
            <td>Nam</td>
            <td>Kost</td>
            <td>Bild</td>
            <td>Rabbat</td> 
         </tr>  
      </table>     
   </div>
}

export default AdminPage