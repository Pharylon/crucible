import React from "react";
import bgCropped from "./images/bg-cropped.jpg";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div id="landing">
      <div className="image-box">
        <img className="center-fit" src={bgCropped} alt="Crucible" />
      </div>
      <div className="main-text landing-text">
        <p>Welcome to the world of Crucible!</p>
        <p>To get started, first read <Link to="/welcome">Welcome to Crucible</Link>. Then start reading some of the
            history documents. </p>
        <p>I'm trying to keep all this short and sweet, so it's not a lore overload <span role="img" aria-label="grin">😀</span></p>
      </div>
    </div>
  );
};

export default Home;
