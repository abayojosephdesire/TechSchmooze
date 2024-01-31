import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./NavBar.css";

// Google client ID
const GOOGLE_CLIENT_ID = "375397322348-64k2rahhcrctb6gkojf4bdtuunrcp7th.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const location = useLocation();
  useEffect(() => {
    setIsNavVisible(false);
  }, [location]);
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <nav className="NavBar-container">
        <div className="NavBar-content">
          <div>
            <Link to="/"><h2 className="NavBar-title">TechSchmooze</h2></Link>
          </div>
          <div className="NavBar-linkContainer">
            <div><Link to="/" className={`NavBar-link ${isActiveLink("/") && "active"}`}>Home</Link></div>
            <div><Link to="/markets/" className={`NavBar-link ${isActiveLink("/markets/") && "active"}`}>Market</Link></div>
            <div><Link to="/presses/" className={`NavBar-link ${isActiveLink("/presses/") && "active"}`}>Press</Link></div>
            <div><Link to="/discussions/" className={`NavBar-link ${isActiveLink("/discussions/") && "active"}`}>Discussions</Link></div>
            <div><Link to="/messages/" className={`NavBar-link ${isActiveLink("/messages/") && "active"}`}>Messages</Link></div>
          </div>
          <div className="NavBar-buttonLink">
            <div className="NavBar-dropdown">
              <button className="NavBar-addButton NavBar-linkDrop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add
              </button>
              <div className="NavBar-dropContainer">
                <div><Link to="/post/" className="NavBar-dropitem">Post on Market</Link></div>
                <div><Link to="/postdiscussion/" className="NavBar-dropitem">Start a discussion</Link></div>
                <div><Link to="/postpress/" className="NavBar-dropitem">Share on press</Link></div>
              </div>
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
          <div>
            {isNavVisible ? (
              <button className="NavBar-hideNav" onClick={toggleNav}>
                <i class="material-icons">close</i>
              </button>
            ) : (
              <button className="NavBar-showNav" onClick={toggleNav}>
                <i class="material-icons">menu</i>
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className={`PhoneNav-container ${isNavVisible ? 'show' : ''}`}>
          <div className="PhoneNav-item">
            <h3>Directories</h3>
            <div><Link to="/" className={`PhoneNav-link ${isActiveLink("/") && "active"}`}>Home</Link></div>
            <div><Link to="/markets/" className={`PhoneNav-link ${isActiveLink("/markets/") && "active"}`}>Market</Link></div>
            <div><Link to="/presses/" className={`PhoneNav-link ${isActiveLink("/presses/") && "active"}`}>Press</Link></div>
            <div><Link to="/discussions/" className={`PhoneNav-link ${isActiveLink("/discussions/") && "active"}`}>Discussions</Link></div>
            <div><Link to="/messages/" className={`PhoneNav-link ${isActiveLink("/messages/") && "active"}`}>Messages</Link></div>
          </div>
          <div className="PhoneNav-item">
            <h3>Post</h3>
            <div><Link to="/post/" className="PhoneNav-link">Post on Market</Link></div>
            <div><Link to="/postdiscussion/" className="PhoneNav-link">Start a discussion</Link></div>
            <div><Link to="/postpress/" className="PhoneNav-link">Share on press</Link></div>
          </div>
          <div className="PhoneNav-item">
            <h3>Your account</h3>
            <div className="PhoneNav-account">
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
        </div>
    </>
    );
  };

  export default NavBar;
