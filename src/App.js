import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Header />
    <Route exact path={ROUTES.SIGN_IN} component={Login} />
    <Route path={ROUTES.DASHBOARD} component={Dashboard} />
  </Router>
);

export default App;
