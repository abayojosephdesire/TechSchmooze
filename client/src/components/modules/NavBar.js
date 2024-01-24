import React from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./NavBar.css";

// Google client ID
const GOOGLE_CLIENT_ID = "375397322348-64k2rahhcrctb6gkojf4bdtuunrcp7th.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  return (
      <nav className="NavBar-container">
        <div className="NavBar-content">
        <div className="NavBar-title">
          <h2>TechSchmooze</h2>
        </div>
        <div className="NavBar-linkContainer">
          <div className="NavBar-item"><Link to="/" className="NavBar-link">Home</Link></div>
          <div className="NavBar-item"><Link to="" className="NavBar-link">Trending</Link></div>
          <div className="NavBar-item NavBar-dropdown">
            <p className="NavBar-linkDrop NavBar-link">Market</p>
            <div className="NavBar-dropContainer">
              <ul>
                <li><Link className="NavBar-dropitem" to="/sales/">Sales</Link></li>
                <li><Link className="NavBar-dropitem" to="/orders/">Orders</Link></li>
                <li><Link className="NavBar-dropitem" to="/borrow/">Borrow</Link></li>
                <li><Link className="NavBar-dropitem" to="giveaway/">Give away</Link></li>
              </ul>
            </div>
          </div>
          <div className="NavBar-item"><Link to="" className="NavBar-link">Events</Link></div>
        </div>
        <div className="NavBar-loginContainer">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {userId ? (
              <button
                className="NavBar-login"
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
        </div>
        </div>
      </nav>
    );
  };

  export default NavBar;
