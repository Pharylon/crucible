import React from "react";
import { Link } from "react-router-dom";

const Crucible = () => {
  return (
    <div>
      <h1>Crucible</h1>

      <h2>Geography</h2>

      <p>
        The world of Crucible itself is approximately the same size as Earth, but is possessed of greater temperature 
        extremes. The continent that bares the same name as the world, Crucible, exists in the southern hemisphere, 
        with icy glaciers in the south and a tropical climate in the north that gives way to a never-ending desert 
        that disappears into the unknown north. The few ships that have ventured far north have reported land so hot that 
        water boils on the rocks, and the heat itself has turned even the most well-rationed ships around as the sailors bake in the hulls.
      </p>

      <p>
        Most areas are populated primarily by humanity, though forests are of course home to the elves, and it seems nearly every 
        mountain has been hollowed out by the dwarves. Human society throughout Crucible is very similar to Europe in the 18th and 19th century. 
        However, no countries truly exist, with the largest power being that of the city-state. Powerful cities are able to exert 
        control as far as their militia takes it’s swords, usually no more than a few days travel. These cities become ringed by 
        hamlets that provide grain and produce to the local baron. A city-state’s power can wax or wane dramatically depending 
        on the ability of the local nobility.
      </p>


      <h2>Development</h2>

      <p>The primary area in which this game starts, which is meant to have a Anglo-american feel, is <Link to="/arandor">Arandor</Link></p>

      <p>
        Many other areas of the world, I know have a certain "feel", but haven't come up with enough to write an entire page on. They are:
      </p>

      <p>
        Prima Archborea: The first forest. The Prima Archborea is a forest of magic and secrets. The elves rule the land and have little contact with outsiders.
      </p>

      <p>
        The Balelands: A cursed land, originally the center of Zelath. Still rulled by Tieflings, this land has a "pop-culture Transylvania" feel. Think Werewolves and vampires.
      </p>

      <p>
        Orcish Steppes: In the icy south, a flat grassland home to some human barbarian tribes, but mostly orcs. 
      </p>

      <p>
        Esa: The capitol of the old empire, got burned by orcs. In the rebuilding phase currently, a shadow of its former self. 
      </p>

      <p>
        Khaz: A dwarven kingdom. These dwarves have a Russian feel. Khaz is fundamentally the center of the current industiral revolution beginning in Crucible.
      </p>

      <h2>Feel</h2>

      <p>
        I'm going for a pseudo-industrial vibe. Steam Engines are just coming into use. <a href="https://www.youtube.com/watch?v=H6NU0SZ7LJ4">Steam Threshers</a> are 
        revolutionizing the countryside while in the cities, hydro and coal power are causing the consolation of small businesses into the first major factories. Coal 
        belches into the sky in these proto-industrial cities.
      </p>

      <p>
        The first high quality repeating rifles and pistols are being produced for war, although swords and bows remain in greater use than historically in the real world.
        Bullets in Crucible don't have quite the velocity they do, and materials such as Ironsilk, and Mithril have allowed the construciton of armor that withstands bullets much better.
      </p>

    </div>
  );
};

export default Crucible;
