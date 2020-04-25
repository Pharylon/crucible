import React from "react";
import { Link } from "react-router-dom";
// import map from "../images/Arandor.jpg";

const Arandor = () => {
  return (
    <div>
      <h1>Arandor</h1>

      <p>
        The Arandor region of Crucible has been settled for centuries. A thousand years ago, it was the home
        to numerous tribes of humans that rarely banded together into any cohesive government. With the rise of
        Zelath, Arandor was organized into a cohesive principality under the oversight of the empire, with governors appointed by the tiefling nobility.
      </p>

      <div>
        <a href="./Arandor.jpg"><img className="auto-image" src="./Arandor.jpg" alt="Arandor"/></a>
      </div>

      <p>
        With the fall of Zelath, the governorship became more or less inherited. It should be noted, however,
        that a little rebellion and overthrowing of the nobility was more or less accepted by the populace if
        the government was doing poorly. Arandor has no myth of “divine right of kings.”
      </p>

      <p>
        Once Esa rose to power, the religion of the <Link to="/worldSmith">Worldsmith</Link> swept in with most of
        the populace quickly converting in the wake of the Seven Year Winter. Soon the local nobility found
        itself once again bowing to another nation as the new church exerted it’s influence.
      </p>

      <p>
        With the disintegration of the Esathian Empire, the Duke of Arandor is now the local king in all
        but name. The largest city in the region is <Link to="/blackport">Blackport</Link>.
      </p>

      <h2>Geography</h2>

      <p>The Arandor Valley is a large interruption in the Khazarakan Mountain Chain that runs north/south over most of the continent. </p>

      <p>The Arandor river originates in the south, from Lake Astor and flows north where it joins the Ambersong River. It thens makes a westweard turn before emptying into the Bruvkarian Sea.</p>

      
    </div>
  );
};

export default Arandor;
