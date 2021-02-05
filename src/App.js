import './css/App.css';

function App() {
  return (
    <div class="main">
        <div class="main-title">
            What is Mustang Messenger?
        </div>
        <div class="main-body">
        Mustang Messenger is a platform where you can connect and message with other users in private 1-on-1.
        Sign up below with an email to get started today!
        </div>
        <div class="email-form">
            <label for="signup-email">
                Enter your email to get started:
            </label>
            <form>
                <input id="signup-email" type="text" placeholder="Enter email here..."></input>
            </form>
            Already have an account? Sign up <a href="">here.</a>
        </div>
    </div>
  );
}

export default App;