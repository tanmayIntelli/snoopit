import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-text">
          <div id="err-msg-404">You've landed in the middle of nowhere</div>
          <div className="err-btn-404">
            <center>
              <Link to="/">Let's get you back home</Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
