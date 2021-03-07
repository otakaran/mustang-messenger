import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import { AuthProvider } from "./fire/AuthContext";
import Header from "./Header";
import Contacts from "./Contacts";
import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";
import MessagesPage from "./MessagesPage";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/messages" component={MessagesPage} exact />
          <PrivateRoute path="/messages/:contact" component={MessagesPage} />
          <PrivateRoute path="/contacts" component={Contacts} />
      </Router>
    </AuthProvider>
  );
};

export default App;
