import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/dashboard";
import Repository from "../pages/Repository/repository";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
};

export default Routes;
