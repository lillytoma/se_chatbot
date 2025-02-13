import "./AIChatBot_SignUpPage.css";
import ReactDOM from "react-dom/client";

function CreateAccounttButton() {
  //Created a function for CreateAccount button

  return <button class="buttonCSS CreateAccountButton">Create Account</button>; //created login button
} //create account button function ends

function AIChatBot_SignUpPage() {
  return (
    <div>
      <body class="backroundColor">
        <h2 class="WelcomeMessageCenter">Hello Welcome To Our Chat Bot!</h2>
        <form>
          <label class="CenterName">
            <h4>Enter Name:</h4>
            <input type="Name" />
            {/* input created to ask user for input on Name*/}
          </label>

          <label class="CenterLastName">
            <h4>Enter Last Name:</h4>
            <input type="LastName" />
            {/* input created to ask user for input on LastName*/}
          </label>

          <label class="CenterEmail">
            <h4>Enter Email:</h4>
            <input type="Email" />
            {/* input created to ask user for input on Email*/}
          </label>

          <label class="CenterPassword">
            <h4>Enter Password:</h4>
            <input type="Password" />
            {/* input created to ask user for input on Password*/}
          </label>

          <label class="CenterPasswordConfirmation">
            <h4>Enter Password Confirmation:</h4>
            <input type="PasswordConfirmation" />
            {/* input created to ask user for input on PasswordConfirmation*/}
          </label>
        </form>
        <CreateAccounttButton /> {/* Create Account Button */}
      </body>
    </div>
  );
}

export default AIChatBot_SignUpPage;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AIChatBot_SignUpPage />);
