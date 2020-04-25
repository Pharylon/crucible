import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Places from "./Places";
import Arandor from "./Arandor";
import History from "./History";
import Blackport from "./Blackport";
import Crucible from "./Crucible";
import WorldSmith from "./Worldsmith";
import OldWays from "./OldWays";
import Religion from "./Religion";
import Welcome from "./Welcome";
import Grelan from "./Grelan";
import ScrollToTop from "../ScrollToTop";

const Page: React.FC = () => {
  return (
    <div className="article-wrap">
      <div className="main-text articles">
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/religion">
            <Religion/>
          </Route>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/worldSmith">
            <WorldSmith />
          </Route>
          <Route path="/oldWays">
            <OldWays />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/blackport">
            <Blackport />
          </Route>
          <Route path="/arandor">
            <Arandor />
          </Route>
          <Route path="/Crucible">
            <Crucible/>
          </Route>
          <Route path="/Grelan">
            <Grelan/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Page;
