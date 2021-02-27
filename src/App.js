import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Header from "./header";
import Landing from "./landing.js";
import Signup from "./Signup";
import Login from "./Login";
import Messaging from "./Messaging";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/messaging" component={Messaging} />
      </Switch>
    </main>
  );
}

export default App;
