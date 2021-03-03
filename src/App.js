import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Header";
import Landing from "./Landing.js";
import Signup from "./Signup";
import Login from "./Login";
import MessagesPage from "./MessagesPage";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />

        {/* <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/messages" component={MessagesPage} />
      </Switch> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
