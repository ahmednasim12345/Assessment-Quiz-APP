import "./App";
import React from "react";
import Home from "./Components/Home/Home";
import Assessment from "./Components/Assessment/Assessment";
import Page from './Components/Page/Page';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/assessment" component={Assessment} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
