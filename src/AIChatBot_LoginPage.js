import "./AIChatBot_LoginPage.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function LoginButton() {
  //Created a function for login button

  return <button class="buttonCSS LoginButtonCentering">Login</button>; //created login button
} //login button function ends

function SignUpButton() {
  //Created a function for sign up button
  return (
    <button class="buttonCSS SignUpButtonCentering">Sign Up</button>
    //created sign up button
  );
} //sign up button function ends

function AIChatBot_LoginPage() {
  //main function

  return (
    // need this to return attriibuites

    <div>
      {" "}
      {/* need div to return multiple attribuites, without div i can only use on attribuite */}
      <body class="backroundColor">
        {" "}
        {/* Body for backround color*/}
        <form>
          <label class="CenterEmail">
            <h3>Enter Email:</h3>
            <input type="Email" />
            {/* input created to ask user for input on email*/}
          </label>
          <label class="CenterPassword">
            <h3>Enter Password:</h3>
            <input type="password" />
            {/* input created to ask user for input on password*/}
          </label>
          <LoginButton /> {/* This is the login button*/}
        </form>{" "}
        <SignUpButton /> {/* This is the sign in button*/}
      </body>
    </div>
  );
}

export default AIChatBot_LoginPage;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AIChatBot_LoginPage />);
