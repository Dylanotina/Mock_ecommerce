import React from "react";

function Logininfo() {
  return (
    <div>
      <p>Login</p>

      <div className="inputGroup">
      <label>Username:</label>
      <input type='text' placeholder='username'></input>
      </div>

      <div className="inputGroup">
      <label>Password:</label>
      <input type='password' placeholder='password'></input>
      </div>

      <div className="loginButton">Login</div>
    </div>
  );
}

export default Logininfo;
