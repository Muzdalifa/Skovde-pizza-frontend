import React from "react";
import "./Navigation.css"

import {Link, useLocation} from "react-router-dom"

const Navigation = () =>{
  const {pathname} = useLocation()
  return <div className="navbar">
          <Link className= {`header-link ${pathname==='/'? 'header-link-active':'' }`} to='/' >Hem </Link>
          <Link className={`header-link ${pathname==='/order'? 'header-link-active':'' }`} to='/order' >Beställa</Link>
          <Link className= {`header-link ${pathname==='/kontakt'? 'header-link-active':'' }`} to='/kontakt'  >Kontakt</Link>  
          <Link className= {`header-link ${pathname==='/login'? 'header-link-active':'' }`} to='/login'  >Logga in</Link> 
      </div>
}
export default Navigation;