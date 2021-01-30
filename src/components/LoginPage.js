import React from "react"

import { Auth0Provider } from "@auth0/auth0-react";

const LoginPage = ()=>{
   return <Auth0Provider
    domain="muzdalifa.eu.auth0.com"
    clientId="J1QXAXob6ehhxYnUsjOsz3laBVwviEKZ"
    redirectUri={`${window.location.origin}/admin`}
  >
    Login
  </Auth0Provider>
}

export default LoginPage