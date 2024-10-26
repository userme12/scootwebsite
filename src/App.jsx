import React from "react";
import { Footer, Navbar } from "./components/layout";
import { Switch, Route } from "react-router-dom";
import { About, Careers, Home, Location } from "./pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/careers">
          <Careers/>
        </Route>
        <Route path="/location">
          <Location/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
