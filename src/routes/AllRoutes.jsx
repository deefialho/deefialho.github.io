import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";

const AllRoutes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
    </Switch>
  );
};

export default AllRoutes;
