import React from "react";
import { Link } from "react-router-dom";

const Religion = () => {
  return (
    <div>

      <h1>Religion</h1>

      <p>
        There are two major religions in Crucible: The Church of the <Link to="/worldSmith">Worldsmith</Link> and the <Link to="/OldWays">Old Ways</Link>.

</p>
      <p>
        The Church of the <Link to="/worldSmith">Worldsmith</Link> is the dominant religion of the world. It is a a monotheistic religion practiced by Humans, Dwarves, and most Halflings.

</p>
      <p>
        By contrast, the Old Ways are a polytheistic, animistic religion, still followed by the Elves, most uncivilized creatures, and a few halflings.

</p>
      <p>
        The two religions are often at odds, and followers of the two often accuse the other of being the root of many evils in the world. Those who do not subscribe to their normal racial beliefs are viewed as strange and not to be trusted, so elves that believe in the Divinity or humans who still follow the Old Ways usually keep such beliefs secret.

</p>
    </div>
  );
};

export default Religion;
