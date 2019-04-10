import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import BookPage from "./containers/BookPage";

const ErrorMessage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <h2>Error 404</h2>
    <p>Page Not Found.</p>
  </div>
);

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact root component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/book" component={BookPage} />
        <Route render={ErrorMessage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
