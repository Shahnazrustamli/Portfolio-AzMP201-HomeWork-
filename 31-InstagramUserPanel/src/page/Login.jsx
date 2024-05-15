import React from "react";

const Login = () => {
  return (
    <>
      <div id="wrapper">
        <div className="main-content">
          <div className="ig-p">
            <img src="https://i.imgur.com/zqpwkLQ.png" />
          </div>
          <div className="l-part">
            <input type="text" placeholder="Username" className="input-1" />
            <div className="overlap-text">
              <input
                type="password"
                placeholder="Password"
                className="input-2"
              />
              <a href="#">Forget?</a>
            </div>
            <input type="button" defaultValue="Log in" className="btn" />
          </div>
        </div>
        <div className="sub-content">
          <div className="s-part">
            Don't have an account?<a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
