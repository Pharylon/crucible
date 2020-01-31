import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import MarkdownArticle from "./MarkdownArticle";
import Places from "./Places";

const Page: React.FC = () => {
  return (
    <div className="article-wrap">
      <div className="main-text articles">
        <Switch>
          <Route path="/history">
            <MarkdownArticle file="history.txt" />
          </Route>
          <Route path="/religion">
            <MarkdownArticle file="religion.txt" />
          </Route>
          <Route path="/welcome">
            <MarkdownArticle file="welcome.txt" />
          </Route>
          <Route path="/woldSmith">
            <MarkdownArticle file="worldSmith.txt" />
          </Route>
          <Route path="/oldWays">
            <MarkdownArticle file="oldWays.txt" />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/blackport">
            <MarkdownArticle file="blackport.txt" />
          </Route>
          <Route path="/arandor">
            <MarkdownArticle file="arandor.txt" />
          </Route>
          <Route path="/Crucible">
            <MarkdownArticle file="crucible.txt" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Page;
