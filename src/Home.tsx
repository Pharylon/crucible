import React from "react";
import bgCropped from "./images/bg-cropped.jpg";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div id="landing">
      <div>
        <Link to="/history"><h1 className="main-link">History</h1></Link>
        <Link to="/religion"><h1 className="main-link">Religion</h1></Link>
        <Link to="/places"><h1 className="main-link">Places</h1></Link>
      </div>
    </div>
  );
};

export default Home;
