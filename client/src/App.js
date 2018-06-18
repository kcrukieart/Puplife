import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SearchDash from "./Pages/SearchDash";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/searchdash" component={SearchDash} />
        <Route component={SignUp} />
      </Switch>
    </div>
  </Router>
);

export default App;
