import React from "react";
import { Link } from "react-router-dom";

const OldWays = () => {
	return (
		<div>

			<h1>The Old Ways</h1>

			<p>The Old Ways is the name of the collective of belief systems that existed since time immemorial.</p>

			<p>
				While the <Link to="/worldSmith">Church of the Worldsmith</Link>sees beings like Bahamut and Avandra as a cross between saints and angels, the Old Ways believes that these are first primordial creatures of the world, and worship them directly.

</p>

			<h2>Feel</h2>

			<p>
				The Old Ways has a more “primitive” feel to it. While there is no standard, their rites more often involve dancing, chanting, etc. Followers of the Old Ways do not build churches, instead worshiping at shrines or less often small temples.

</p>

			<h2>History</h2>

			<p>
				There is no true history of the Old Ways, as it is more of a collective term for many different religions. Elves who worship Corellon as the god of the Fey are just as much part of the Old Ways as orcs who perform grizzly sacrifices to Gruumsh.

</p>
			<p>
				The Old Ways had no moment of founding or single prophet, and evolved over many years, it’s origin lost in antiquity. However, despite this hodgepodge development, it was the only belief system in the world before the <Link to="/worldSmith">Church</Link>.

</p>
			<p>
				The elves, while they do not worship Gruumsh, certainly believe he exists and gives the orcs their power. Similarly, the orcs see Corellon (or Ioun, Pelor, or any other of the myriad of gods) as real beings, and true gods, though there is much bragging over who’s god is more powerful.

</p>
			<h2>Teachings</h2>

			<p>
				Each God teaches it’s own philosophy, and no two are alike. However, there are broad similarities. Followers of the Old Ways generally hew much closer to nature, and see portents and omens in sunsets and the changing of the seasons. Nearly all feel the need to appease their deity through sacrifice. For the humanoids, they are usually human, but even the elves will often ritually kill the game they bring down in thanks to Corellon.

</p>
		</div>
	);
};

export default OldWays;
