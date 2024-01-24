import React from "react";
import NavBar from "../NavBar.js";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="body">
        <img className="background" src="/solen-feyissa-LBNJi8qHIbA-unsplash (1).jpg" />
        <div className="box">
          <h1 className="head">TechSchoomze</h1>
          <h1 className="intro">Buzz, Connect, Exchange</h1>

          <Link to="/login">
            <button className="home-button">Get Started</button>
          </Link>
        </div>
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
        <section className="section3">
          <img className="image" src="/samuel-ramos-Kj2TBOyptHo-unsplash.jpg" />
          <div className="column1">
            <h1>Buy, Sell, Borrow or GiveAway</h1>
            <p>
              Welcome to the marketplace hub of TechSchoomze, where MIT students ccome together to
              buy, sell and borrow with ease. Discover the a curated space where textbooks, bikes,
              clothes, and more find new owners.
            </p>
          </div>
        </section>
        <section className="section3">
          <div className="column1">
            <h1>Know Your Events or Parties</h1>
            <p>
              Explore the pulse of MIT campus life with TechSchmooze with the largest buzz and
              hottest Events happening right now. From parties to concerts, and exciting
              opportunities, our Trending section keeps you connected to the heartbeat of MIT.
            </p>
          </div>
          <img className="image" src="/kvalifik-5Q07sS54D0Q-unsplash.jpg" />
        </section>
        <section className="section3">
          <img className="image" src="/jason-leung-mZNRsYE9Qi4-unsplash.jpg" />
          <div className="column1">
            <h1>Keep in Touch</h1>
            <p>
              Engage in direct conversations with fellow students, whether it's to discuss
              opportunities, make new friends explore shared interests, or even plan coffee chats.
              Our user-friendly Chat section enables you to search for classmates, connect with
              peers, and build relationship seamlessly.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
