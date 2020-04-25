import React from "react";
import { Link } from "react-router-dom";

const Grelan = () => {
  return (
    <div>
      <h1>Grelan</h1>

      <p>
        A historic trade city along the Long Road, Grelan has seen an explosion in it's population and stature over the last 200 years,
        due to the coal reserves in the hills east, the fertile ground of the Adleman River basin, and 
      </p>

      <div>
        <a href="./Grelan.jpg"><img className="auto-image" src="./Grelan.jpg" alt="Grelan"/></a>
      </div>

      <h2>Places</h2>

      <ul className="spaced-list">
        <li>
          <strong>Oldtown</strong>: Found in the center of the city and extending south towards the Adleman River, Oldtown is full of large buildings
          of the wealthy constructed when the city was smaller. As once leaves the southern river portions and travels north into Oldtown and 
          then towards the Castle Rehlis (1), you would find yourself walking up the hill the city was built on.
        </li>
        <li>
          <strong>The Stacks</strong>: As Grelan expanded, it crawned up the river to the west. Crucible now finds itself at the beginning of an Industrial Revolutoin
          and The Stacks is Grelan's testament to this. Smokestakcs from which the district gets it's name billow coal smoke and soot into the air at all hours, and a 
          series of low dams along the Adleman River (4) provide hydro power to many of hte other buildings. Of special note is The Foundry (3), a buildings
          taking up many blocks on the river's edge run by the Church. They rent out space to inventers and tinkerers, always looking for the next idea
          over the horizon. 
        </li>
        <li>
          <strong>The Guildhall District</strong>: If The Stacks represents the industrial future of Grelan, the Guildhall District represents the past. Here, bespoke 
          craftsmen still ply their wares. Bakers, carters, and ferriers practice their craft much as they have for centuries, even in the face of the 
          emerging mass-produced goods of The Stacks. Here one can still find apothecaries, tinkerers working alone, and clothiers who can do the delicate
          work of weaving ironsilk garments or alloying mithril into chainmain to make it bullet-resistent.
        </li>
        <li>
          <strong>The Mazes</strong>: Forty years ago, the wizard Ozwald disappeared. Since then, an increasing number of strange occurences have been reported in the 
          surrounding area. After an increasing number of disappearnces and strange monsters were seen walking the streets at night, property values
          plumeted in what was once part of the Castle District. The land was declared off-limits. But that only means that squatters moved in.
          Today, the Mazes gets it's name from the maze of lean-tos, stalls, and buildings that have been half-demolished for resources.
        </li>
        <li>
          Bekkit: If you work in The Stacks, you sleep in Bekkit, as the syaing goes. Full of slums and tenaments, the only place down from Bekkit
          is The Mazes. 
        </li>
        <li>
          <strong>The Amberg Hills</strong>: While many areas of the city have their own feel, the Amberg Hills is a bit of a mix. The heart of Amberg Hills is a stature
          to Edmund Amberg (6), one of <Link to="/worldSmith">Justinia's</Link> closest disciples. After Justinia's death, his arrival in Grelan is credited with much of the city's 
          industry and reputation for new creations and inventions. The Amberg Hills as a whole has a quiet reputation,
          populated by the middle-class who can afford homes away from their businesses, by specialty shops looking for lower rent outside of the butsling city center
          or Market Ward, and by tenanments in the north, where the border with Bekkit is fuzzy at best.
        </li>
        <li>
          <strong>Market Ward</strong>: In Grelan, the Market Ward is where you can buy all the goods produced in The Stacks, as well as well as imports from the countryside or
          even foreign lands.
        </li>
      </ul>

      <h2>People</h2>

      <p>Important People in Grelan include</p>

      <ul className="spaced-list">
        <li>
          Farrah Wilmere: A priestess of the Worldsmith and an artificer, she takes the smithing portion of the Worldsmith faith very seriously, although
          these days she spends more time running soup kitchens than crafting.
        </li>
        <li>
          Marlee Cokes: The youngest of the Merchant Barons that run the city, Marlee is said to be ruthless to those who stand in her way and kind
          to those in need. 
        </li>
        <li>
          Kelcie Fairchilde: The eldest Baron, Kelcie is in her 70s, and sees her role as a city leader in a conservative light. The greater Arandor region is not
          of her concern, and she wishes to keep Grelan's interests focuses squarely on the city.
        </li>
        <li>
          Devilyn Westcotte: Devilyn, the third and last Merchant Baron, is a consummate businessman, always looking for an angle, and he's not afraid to say it. He's blunt Adleman
          straight to the point, and has a reputation for honesty.
        </li>
      </ul>
    </div>
  );
};

export default Grelan;
