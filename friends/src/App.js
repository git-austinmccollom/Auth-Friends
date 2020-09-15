import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Friendster from "./Components/Friendster";
import Login from "./Components/Login";
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <header>
        <Link to="/login">Login</Link>
        <Link to="/friendster">Friendster</Link>
      </header>
      <div>
        <Switch>
          <PrivateRoute exact path="/friendster" component={Friendster} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
