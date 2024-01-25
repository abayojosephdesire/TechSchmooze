import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Orders from "./pages/Orders.js";
import Sales from "./pages/Sales.js";
import Borrows from "./pages/Borrows.js";
import GiveAways from "./pages/GiveAways.js";
import Post from "./pages/Post.js";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
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
          <Route path="/orders/" element={<Orders userId={userId} />} />
          <Route path="/sales/" element={<Sales userId={userId} />} />
          <Route path="/borrows/" element={<Borrows userId={userId} />} />
          <Route path="/giveaways/" element={<GiveAways userId={userId} />} />
          <Route path="/post/" element={<Post userId={userId} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
