import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Page from "./Pages/Page";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  const [menuVisible, setVisible] = useState(false);
  return (
    <Router>
      <div className="app">
        <div>
          <Header visible={menuVisible} setVisible={setVisible} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/">
              <Page />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
