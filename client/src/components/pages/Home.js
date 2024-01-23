import React from "react";
import NavBar from "../NavBar.js";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="intro">
        <img src="zachary-nelson-98Elr-LIvD8-unsplash.jpg" alt="Description" />
        <h1 className="head">TechSchoomze</h1>
        <h1>Buzz, Connect, Exchange</h1>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Home;
