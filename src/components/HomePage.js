import React from "react";
import "./HomePage.css"
import {useHistory} from 'react-router-dom';

const HomePage = () =>{
  const history = useHistory();

  return <div className="row">
    <div className="homepage-left-side">
      <div className=" fakeimg " >
        <img className=" fakeimg " src='../asset/logo/home_page_img.jpg' ></img>
      </div>
    </div>
    <div className="homepage-right-side">
      <h2>Välkommen</h2>
      <p>Skövde pizza är en familjeägt och drivs restaurang belägen i Skövde Centrum.
        Vi är speciapserade på djuprätt och traditionell skordiva på västkusten,
        serverad med en rad färska sallader, aptitretare och smörgåsar - allt 
        från grunden varje dag.
      </p>
      <br/>
      <h2>Öppettider</h2>
      <div className ="homepage-open-time">
        <div className="homepage-open-day">
          <div >Mån-Tors </div>
          <div>Fre </div>
          <div>Lör </div>
          <div>Sön </div>
        </div>
        <div className="homepage-open-hour">
          <div>11.00&ensp;-&ensp;23.00</div>
          <div>11.00&ensp;-&ensp;22.00</div>
          <div>12.00&ensp;-&ensp;23.00</div>          
          <div>12.00&ensp;-&ensp;22.00</div>
        </div>
      </div>
    <div className="homepage-button">
      <button onClick={()=> history.push('/order')}>Beställa</button>
    </div>
    </div>

  </div>
}

export default HomePage;