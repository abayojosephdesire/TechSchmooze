import React from "react";
import NavBar from "../NavBar.js";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="body">
        <h1 className="head">TechSchoomze</h1>
        <h1>Buzz, Connect, Exchange</h1>

        <Link to="/login">
          <button className="home-button">Get Started</button>
        </Link>

        <section className="section1">
          <p>
            <h2 className="body-tech">TechSchoomze</h2>
            <h2>is a social platform looking to change the way people connect</h2>
          </p>
          <h3 className="p1">
            Our platform is built to seek, forge, and grow links between you, people, you know, and
            people you want to know. TechSchooze is set to become your go-to platform for seamless
            networking, posting, buying, selling and borrowing. We aim to create an all-encompassing
            social experience tailored for the MIT community.
          </h3>
        </section>
        <section className="section2">
          <h1>Buy, Sell, Borrow or GiveAway</h1>
          <p>
            Welcome to the marketplace hub of TechSchoomze, where MIT students ccome together to
            buy, sell and borrow with ease. Discover the a curated space where textbooks, bikes,
            clothes, and more find new owners.
          </p>
        </section>
        <section className="section3">
          <h1>Know Your Events or Parties</h1>
          <p></p>
        </section>
        <section>
          <h1>Keep in Touch</h1>
          <p></p>
        </section>
      </section>
    </div>
  );
}

export default Home;
