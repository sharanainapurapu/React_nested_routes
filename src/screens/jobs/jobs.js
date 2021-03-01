import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { EditJobs } from "../../screens";

const Jobs = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Jobs</h3>
        </Route>
        <Route path={`${path}/edit`} component={EditJobs} />
      </Switch>
    </div>
  );
};

export default Jobs;
