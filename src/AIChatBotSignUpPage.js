import React, { useState } from "react";
import { auth } from "./firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "./AIChatBotSignUpPage.css";

<<<<<<< HEAD
function CreateAccounttButton() {
  //Created a function for CreateAccount button

  return; //created login button
} //create account button function ends

=======
>>>>>>> 4aee74f (fix)
function AIChatBot_SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    //this function handle the sign up incase they dont already have an account

    createUserWithEmailAndPassword(auth, email, password) //this use the email and password to create the user
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user); //creates a pop up that verifys the sign up
        alert("Sign-up successful!");
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error("Error signing up:", error.message); //error message
=======
        console.error("Error signing up:", error.messange); //error message
>>>>>>> 4aee74f (fix)
        alert("Sign-up failed: " + error.message);
      });
  }
  return (
    <div>
      <body className="backroundColor">
        <h2 className="WelcomeMessageCenter">Hello Welcome To Our Chat Bot!</h2>
        <form>
          <label className="CenterName">
            <h4>Enter Name:</h4>
            <input type="Name" />
            {/* input created to ask user for input on Name*/}
          </label>

          <label className="CenterLastName">
            <h4>Enter Last Name:</h4>
            <input type="LastName" />
            {/* input created to ask user for input on LastName*/}
          </label>

          <label className="CenterEmail1">
            <h4>Enter Email:</h4>
            <input
              type="Email"
              value={email} // Binds input field to state
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* input created to ask user for input on Email*/}
          </label>

          <label className="CenterPassword1">
            <h4>Enter Password:</h4>
            <input
              type="Password"
              value={password} // Binds input field to state
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* input created to ask user for input on Password*/}
          </label>

          <label className="CenterPasswordConfirmation">
            <h4>Enter Password Confirmation:</h4>
            <input type="PasswordConfirmation" />
            {/* input created to ask user for input on PasswordConfirmation*/}
          </label>
        </form>
        <button
          type="button"
          onClick={handleSignUp}
<<<<<<< HEAD
          class="buttonCSS CreateAccountButton"
=======
          className="buttonCSS CreateAccountButton"
>>>>>>> 4aee74f (fix)
        >
          Create Account
        </button>{" "}
        {/* Create Account Button */}
      </body>
    </div>
  );
}

export default AIChatBot_SignUpPage;
