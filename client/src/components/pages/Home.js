import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="Home-section1">
        <div className="Home-section1Image"></div>
        <div className="Home-section1Text">
          <h1 className="Home-sectionTitle">
            <p>Empowering MIT with</p>
            <p>Campus Connectivity</p>
          </h1>
          <p>Dive into a seamless social networking experience where you can effortlessly connect with your peers.</p>
          <ul className="Home-section1Links">
            <li><Link to="/markets/" className="Home-section1Link">Market</Link></li>
            <li><Link to="/presses/" className="Home-section1Link">Press</Link></li>
            <li><Link to="" className="Home-section1Link">Discussions</Link></li>
            <li><Link to="/messages/" className="Home-section1Link">Messages</Link></li>
          </ul>
        </div>
      </div>
      <div className="Home-section2">
        <div className="Home-section">
        <h1 className="Home-sectionTitle">TechSchmooze - Stay tuned!</h1>
        <p>Welcome to our vibrant virtual campus hub exclusively designed for MIT students! Dive into a seamless social
          networking experience where you can effortlessly connect with your peers. Our innovative platform goes beyond
          the conventional by offering a dynamic marketplace where you can buy, sell, order, borrow, or generously give
          away items to fellow students, fostering a sense of community and sustainability. Stay in the loop with real-time
          updates on campus events, parties, gatherings, and meetings, ensuring you never miss out on the excitement.
          Engage in direct conversations with classmates, or spark discussions about campus life and beyond. Your go-to
          destination for meaningful connections, resourceful exchanges, and the pulse of MIT life – welcome to a digital
          realm where campus camaraderie thrives!</p>
        </div>
      </div>
      <div className="Home-section3">
        <div className="Home-section">
        <h1 className="Home-sectionTitle">Our services</h1>
        <div className="Home-section3Container">
          <div className="Home-section3Item">
            <div className="Home-section3MarketImage"></div>
            <p>Dive into the vibrant marketplace section to discover, buy, sell, borrow, share, or give away a diverse array of items,
              fostering a dynamic exchange within the MIT student community. This hub enables resourceful exchange within trapesty of campus life.</p>
            <Link to="/markets/" className="Home-section3Link">Market</Link>
          </div>
          <div className="Home-section3Item">
            <div className="Home-section3PressImage"></div>
            <p>Explore the Press Page for the latest news, features, and accolades highlighting our campus social networking app's
              impact on fostering community, innovation, and connectivity among MIT students.</p>
            <Link to="/presses/" className="Home-section3Link">Press</Link>
          </div>
          <div className="Home-section3Item">
            <div className="Home-section3DiscussionImage"></div>
            <p>Engage in lively discussions on the Discussions page, where MIT students come together to share insights, thoughts,
              and experiences, creating a dynamic space for diverse conversations about campus life and beyond.</p>
            <Link to="" className="Home-section3Link">Discussions</Link>
          </div>
          <div className="Home-section3Item">
            <div className="Home-section3MessageImage"></div>
            <p>Connect seamlessly through private messaging on the Message page, fostering direct communication and collaboration
              among MIT students within our vibrant campus social networking app.</p>
            <Link to="/messages/" className="Home-section3Link">Messages</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
