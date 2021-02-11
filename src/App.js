import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Header from "./header";
import Landing from "./landing.js";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default App;
