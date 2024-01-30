import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
      <footer className="Footer-container">
        <div className="Footer-main">
            <div className="Footer-item Footer-item1">
                <Link to="/" className="Footer-Link"><h1>Techschmooze</h1></Link>
                <p>Welcome to our vibrant virtual campus hub exclusively designed for MIT students!
                    Dive into a seamless social networking experience where you can effortlessly connect with your peers.</p>
            </div>
            <div className="Footer-item Footer-item2">
                <h3>Main links</h3>
                <ul>
                    <li><Link to="/markets/" className="Footer-Link">Market</Link></li>
                    <li><Link to="/presses/" className="Footer-Link">Press</Link></li>
                    <li><Link to="/discussions/" className="Footer-Link">Discussions</Link></li>
                    <li><Link to="/messages/" className="Footer-Link">Messages</Link></li>
                </ul>
            </div>
            <div className="Footer-item Footer-item3">
                <h3>Stay connected</h3>
                <ul>
                    <li><Link to="" className="Footer-Link">Phone</Link></li>
                    <li><Link to="" className="Footer-Link">Gmail</Link></li>
                    <li><Link to="" className="Footer-Link">Twitter</Link></li>
                    <li><Link to="" className="Footer-Link">Instagram</Link></li>
                </ul>
            </div>
        </div>
        <div className="Footer-copyright">
            <p>&copy; TechSchmooze 2024. All rights reserved.</p>
        </div>
      </footer>
    );
  };

  export default Footer;
