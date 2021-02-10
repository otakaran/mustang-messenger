import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Header from "./header";
import Landing from "./landing.js";
import Signup from "./Signup";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} />
      </Switch>
    </main>
  );
}

export default App;
