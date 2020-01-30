import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import MarkdownArticle from "./MarkdownArticle";

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
        </Switch>
      </div>
    </div>
  );
};

export default Page;
