import React, {useState} from "react";
import './ContactPage.css'
import Home from './HomePage'

const ContactPage = () =>{
  return <div className="row contact-container">
    <label className='contact-heading'>Kontakta oss</label>
    <div className='contact-info'>
      <div>
        <i class='fas fa-phone'></i>          
        <label className='contant-item'>012345678910</label>
      </div>
      <div>
        <i class='fas fa-mobile-alt'></i>
        <label className='contant-item'>0781234567891</label>
      </div>
      <div>
        <i class='far fa-envelope-open'></i>
        <label className='contant-item'>skovde@pizza.se</label>
      </div>
    </div>  

    <form className='contact-form-container'>
      <div className='contact-form-address'>
        <input type ='text' placeholder='Förnamn'></input><br />
        <input type ='text' placeholder='Efternamn'></input><br />
        <input type ='text' placeholder='E-post eller telefone nummer'></input><br /> 
      </div> 

      <div className='contact-form-message'>
        <textarea placeholder='Meddelande' rows="6"></textarea><br /> 
        <button className='contact-button' >Skicka</button>
      </div>   
    </form>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.224033681985!2d13.843415916006842!3d58.38962238133997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465b023761f03dc1%3A0x8f33f49e16ec9437!2sHertig%20Johans%20Torg%2C%20541%2030%20Sk%C3%B6vde!5e0!3m2!1sen!2sse!4v1609915177406!5m2!1sen!2sse" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
}

export default ContactPage;