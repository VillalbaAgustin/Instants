import React from "react";
import './LoginPages.css'

export const LoginPages = () => {
  return (
<form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button className="log-in">Log In</button>
        <div className="social">
          <div className="go"> Google </div>
          <div className="fb"> Facebook </div>
        </div>
        <div className="button-div">
          <button className="sign-up">Sign up</button>
        </div>
    </form>
  )
};
