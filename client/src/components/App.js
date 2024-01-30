import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Presses from "./pages/Presses.js";
import Markets from "./pages/Markets.js";
import Discussions from "./pages/Discussions.js";
import DiscussionMessages from "./pages/DiscussionMessages.js";
import Messages from "./pages/Messages.js";
import Post from "./pages/Post.js";
import PostDiscussion from "./pages/PostDiscussion.js";
import Footer from "./modules/Footer.js";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
    navigate('/');
  };

  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <div class="App-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presses/" element={<Presses userId={userId} />} />
          <Route path="/markets/" element={<Markets userId={userId} />} />
          <Route path="/discussions/" element={<Discussions userId={userId} />} />
          <Route path="/messages/" element={<Messages userId={userId} />} />
          <Route path="/post/" element={<Post userId={userId} />} />
          <Route path="/postdiscussion/" element={<PostDiscussion userId={userId} />} />
          <Route path="/discussionMessages/" element={<DiscussionMessages userId={userId} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
