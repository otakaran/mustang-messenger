import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fire } from "./fire/Fire";
import "./css/App.css";
import Header from "./Header";
import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";
import MessagesPage from "./MessagesPage";

const App = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  // Stuff that happens when App gets rendered (I think.)
  useEffect(() => {
    // Check if user is logged in
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("We're logged in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setCurrentUserEmail(user.email);
      } else {
        // User is signed out
      }
    });
  });

  return (
    <BrowserRouter>
      <main>
        <Header userID={currentUserEmail} />
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/messages" component={MessagesPage} exact />
      </main>
    </BrowserRouter>
  );
};

export default App;
