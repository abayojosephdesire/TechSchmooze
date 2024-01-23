import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import App from '../App.js';

// Google client ID
const GOOGLE_CLIENT_ID = "375397322348-64k2rahhcrctb6gkojf4bdtuunrcp7th.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {userId ? (
          <button
            onClick={() => {
              googleLogout();
              handleLogout();
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
        )}
      </GoogleOAuthProvider>
    );
  };

  export default NavBar;
