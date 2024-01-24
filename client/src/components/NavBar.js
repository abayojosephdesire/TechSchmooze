import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <section className="container">
        <nav className="navigation">
          <Link to="/" className="tech">
            TechSchoomze
          </Link>
          <div className="dropdown">
            <h4 className="feature">MARKET</h4>
            <div className="dropcontent">
              <Link to="/orders" className="dropLink">
                Orders
              </Link>
              <Link className="dropLink">Sales</Link>
              <Link className="dropLink">Borrow</Link>
              <Link className="dropLink">GiveAway</Link>
            </div>
          </div>
          <h4 to="/login" className="feature">
            EVENTS
          </h4>
          <h4 className="feature">TRENDING</h4>
          <h4 className="feature">CHAT</h4>
          <h4 className="feature">POST</h4>
          <input className="text-area" placeholder="search"></input>
          <i className="fa-solid fa-magnifying-glass" />
        </nav>
        <Link to="/login">
          <button to="/login" className="button">
            Login
          </button>
        </Link>
      </section>
    </div>
  );
}

export default NavBar;
