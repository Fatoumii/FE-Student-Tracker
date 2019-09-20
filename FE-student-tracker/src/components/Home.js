import React from "react";
import Pic from "../home.jpeg";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="home">
      <img src={Pic} alt="project phase celebrations" />
      <div class="hometext">
        <h3>Enter the site to view students and ammend their status</h3>
      </div>
      <button className="enter">
        <a href="/students">Enter</a>
      </button>
    </div>
  );
};

export default Home;
