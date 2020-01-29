import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import History from "./History";
import Religion from "./Religion";
import Welcome from "./Welcome";

const Page: React.FC = () => {
  return (
    <div className="article-wrap">
      <div className="main-text articles">
      <Switch>
          <Route path ="/history">
            <History/>
          </Route>
          <Route path ="/religion">
            <Religion/>
          </Route>
          <Route path ="/welcome">
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Page;
