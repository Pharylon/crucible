
import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div>

      <h1>History</h1>

      <p>
        Legends tell of ancient empires ruled by giants, dragons, and the fey. Only fragments from those times exist today,
        leaving scholars the task of separating history from legend.
      </p>
      
      <p>
        What is known for sure is that nearly a thousand years ago, the human kingdom of Zelath rose up in the Northeast,
        expanding and bringing others under it’s sway so that even the dwarves and elves swore fealty to it. It’s borders
        ever-expanding, Zelath eventually came into contact with the Ixalga, a nation of goblinoids expanding from the
        distant North. The two came into conflict, but the Ixalga had the superior army. Early campaigns did not go well
        for Zelath, and in desperation the human kings made a pact with Asmodeus himself. With his demonic magic, they
        turned the tide. The armies of Zelath and it’s allies fought back the Ixalga and reclaimed much of their lost land.
        The war stretched out over generations, with only small lapses in the fighting, and became known as the Forever War.
      </p>


      <p>
        By the end, both countries had exhausted their wealth. They were two lumbering giants that no longer had the resources
        to fight, but were unable to bring themselves to living in peace. But it was not their endless war that ultimately ruined
        them. The Seven Year Winter marked the end of both empires. For seven years, Crucible experienced unusually frigid winters
        and extremely cool summers with little rain. Crops failed across the continent, and civil order broke down. Rioting engulfed
        both empires. In Zelath, the nobility had long begun to show outward signs of their pact with the demons, their skin having
        turned red and horns sprouting from their heads, becoming the first tieflings. It did not take much to rile the peasantry
        against such obviously demonic leaders.
      </p>

      <p>
        It was during this tumultuous time that the new religion of the <Link to="/worldSmith">Worldsmith</Link> took hold in Esa,
        supplementing the <Link to="/oldWays">Old Ways</Link>. It taught that there was only one true God, and that he was angry at
        the civilized races for allowing monstrous creatures to rule. As the religion spread, the Zelathi government sought to
        tamp down this anti-Tiefling sentiment, and several of the main proponents of the religion were hanged, then drawn and
        quartered. Predictably, this backfired and the spiral of lawlessness within the Zelathi kingdom only accelerated, leading
        to a total collapse.
      </p>

      <p>
        Out of the ashes of Zelath, however, a new empire rose. The Esathian Empire saw it's job to spread the word of
        the <Link to="/worldSmith">Worldsmith</Link> across Crucible. Whatever people they conquered, they took pains to assimilate them into
        the empire. Early expansion was swift and relatively painless. Often, their armies moved into areas that were once part of
        the Zealthi nation, areas now poor and isolated. And while the Zealthians had treated non-humans as second-class citizens, the
        Esatheans saw all races as able to worship the <Link to="/worldSmith">Worldsmith</Link>.
      </p>


      <p>
        But four centuries after it's founding, Esa fell too. Unlike the previous empires, no earth-shaking event heralded it’s fall –
        it was a slow process. The courts of Esa slowly became a viper’s nest of intrigue and and politics that paralyzed the nobility.
        Slowly, local city-states emerged as the true centers of power, paying fealty to Esa at first but eventually only lip-service.
        Esa became irrelevant over the course of a century.
      </p>

      <p>
        With power devolved to city-states, local barons and lords bickered and fought over resources. The games of intrigue played in
        Esa not only failed to unify the city-states again, but actively prevented such reunification, as each lord angled to take the power
        all for their own. Raids from the barbarian peoples, such as orcs and goblins had always been a problem, but without a unified
        national response they became more common.
      </p>

      <p>
        Yet at the same time, the seeds of something new were growing. The power of coal and steam was first being harnessed in the Khazact
        Mountains and the gnome cities. It spread quickly to the human cities in the area, and soon the beginnings of an industrial
        revolutoin began.
      </p>

      <p>
        Much of this new machinery can be traced to the famous team of Tuli Bellowpitch, and the dwarf Drugov Oakfoot. Tuli always 
        seemed to be on the edge of something new. Her ideas were brilliant but half-formed. She would paint a new idea in broad strokes, 
        but before she could refine it into something workable, she was on to the next project. Drugov was a master of refinement. 
        He had an instinct for which of Tuli's ideas were fligths of fantasy with no real potential, and which could be made into something real. 
      </p>

      <p>
        Thier inventions alone couldn't stop the decline of the Empire, though. 
        Fifteen years ago, the capitol of the Esathian empire was sacked. An orcish chieftain united the clans of orcs living on the
        nearby steppes and burned a swath of destruction into the heart of the Empire. While he died in battle, the damage was done.
        The center of the empire had suddenly disintegrated.
      </p>

      <p>
        That brings us to the present day. The orcs haven't left. When the orcish army disbanded, many went back to the steppes,
        but many more disappeared into the woodlands, hills, and mountains throughout the former Esathian Empire. Each day, their
        raids grow more bold. Each day, another town falls, another farming village is burned. Food is becoming scarce in the cities.
      </p>

      <p>
        And yet this has not galvanized the former Esathian cities to unify against a common threat. Instead, the nobles bicker
        and argue about who the "true" heir to the Empire should be. They are building up their own armies, but will they be used
        against the orcs or each other? The world is a powder-keg. Will it explode?
            </p>


    </div>
  );
};

export default History;
