import React from "react";
import "./Navigation.css"

import {Link, useLocation} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () =>{
  const {pathname} = useLocation()
  const { loginWithRedirect, logout, } = useAuth0();
  const location = useLocation();
  //show current page location
  console.log(location);

  return <div className="navbar">
          <Link className= {`header-link ${pathname==='/'? 'header-link-active':'' }`} to='/' >Hem </Link>
          <Link className={`header-link ${pathname==='/order'? 'header-link-active':'' }`} to='/order' >Beställa</Link>
          <Link className= {`header-link ${pathname==='/kontakt'? 'header-link-active':'' }`} to='/kontakt'  >Kontakt</Link>  
          { location.pathname == "/admin"
          ? <Link className= {`header-link ${pathname==='/login'? 'header-link-active':'' }`}  onClick={() => logout()}  >Logga ut</Link> 
        : <Link className= {`header-link ${pathname==='/login'? 'header-link-active':'' }`}  onClick={() => loginWithRedirect({redirectUri:`${window.location.origin}/admin`})}  >Logga in</Link> 
        }
      </div>
}
export default Navigation;