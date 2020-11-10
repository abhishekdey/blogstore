import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthButton from './functionalComp/AuthButton.component';
import HomePage from "./functionalComp/Home.component";
import LoginPage from './functionalComp/LoginPage.component';

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}