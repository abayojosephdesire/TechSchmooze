import React from "react";
import "./Login.css";
import Skeleton from "./Skeleton.js";
function Login() {
  return (
    <div>
      <section className="containerLo">
        <h1 className="title">Sign in to Techschoomze</h1>
        <hr />
        <h4>Username or email address</h4>
        <input className="u-round"></input>
        <div className="password-block">
          <h4>Password</h4>
          <h6 className="u-forgot">Forgot password?</h6>
        </div>
        <input className="u-round" />
        <button className="u-button">Sign in</button>
        <h6 className="Or-container">or</h6>
        <Skeleton />
      </section>
    </div>
  );
}

export default Login;
