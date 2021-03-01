import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LeftNav } from "../../components";
import { AboutCoumpany, Jobs } from "../../screens";
import "./about.module.scss";
const About = () => {

  let { path } = useRouteMatch();
  return (
    <div className="about">
     <LeftNav />
     <Switch>
        <Route exact path={path}>
          <h3>About Us</h3>
        </Route>
        <Route path={`${path}/company`} component={AboutCoumpany}/>
        <Route path={`${path}/jobs`} component={Jobs}/>
      </Switch>
    </div>
  );
};

export default About;
