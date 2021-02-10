import "./css/App.css";
import "./css/form.css";

function App() {
  return (
    <div class="main">
      <div class="main-title">What is Mustang Messenger?</div>
      <div class="main-body">
        Mustang Messenger is a platform where you can connect and message with
        other users in private 1-on-1. Sign up below with an email to get
        started today!
      </div>
      <div class="email-form">
        Enter your email to get started:
        <form id="signup-email">
          <input
            id="enter-signup-email"
            type="text"
            placeholder="Enter email here..."
          />
          <input id="go-button-signup-email" type="button" value="Go" />
        </form>
        Already have an account? Sign up <a href="">here.</a>
      </div>
    </div>
  );
}

export default App;
