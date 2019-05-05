import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Route exact path="/" render={() => <Redirect to={ROUTES.SIGN_IN} />} />
    <Route path={ROUTES.SIGN_IN} component={Login} />
    <Route path={ROUTES.DASHBOARD} component={Dashboard} />
  </Router>
);

export default App;
