import React from "react";
import MainCat from "../assets/Githubcat.png";
const Maintop = () => {
  return (
    <div className="mainTop">
      <div className="df">
        <img src={MainCat} alt="Cat" className="cat" />
        <div className="mainCat">
          <div className="mainc">
            <h3>The Octocat</h3>
            <p>Joined 25 Jan 2011</p>
          </div>
          <div className="bio">
            <p className="occo">@octocat</p>
            <p>This profile has no bio</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maintop;
