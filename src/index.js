import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';
import AdminPage from "./components/AdminPage";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="muzdalifa.eu.auth0.com"
    clientId="J1QXAXob6ehhxYnUsjOsz3laBVwviEKZ"
    redirectUri={`${window.location.origin}/admin`}
  >
    <Body />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

