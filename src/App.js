import React, { useState } from "react";
import { auth } from './firebase/firebase-config'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 

import "./AIChatBotLoginPage.css";  


function App() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() { //this function handle the sign up incase they dont already have an account

    createUserWithEmailAndPassword(auth, email, password) //this use the email and password to create the user 
      .then((userCredential) => {   
        console.log("User signed up:", userCredential.user);  //creates a pop up that verifys the sign up
        alert("Sign-up successful!");  
      })
      .catch((error) => {
        console.error("Error signing up:", error.message); //error message 
        alert("Sign-up failed: " + error.message); 
      });
  } 

  function handleLogin() { //if the user already has an account then they will be logged in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);  //creates a pop up that verifys the log in
        alert("Login successful!"); 
      })
      .catch((error) => {
        console.error("Login error:", error.message); //error message
        alert("Login failed: " + error.message); 
      });
  } 

  return (
    // need this to return attributes

    <div className="Login_Content">
      {/* need div to return multiple attributes, without div I can only use one attribute */}
      {/* Body for background color */}

      <form id="User_Login"> 
        <label className="CenterEmail">
          <h3>Enter Email:</h3>
          <input
            type="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            value={email} // Binds input field to state
            onChange={(e) => setEmail(e.target.value)} // Updates state on input change
          />
          {/* After the "." sign, add at least 2 letters from a to z */}
          {/* Input created to ask user for input on email */}
        </label>

        <label className="CenterPassword">
          <h3>Enter Password:</h3>
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            value={password} // Binds input field to state
            onChange={(e) => setPassword(e.target.value)} // Updates state on input change
          />
          {/* Input created to ask user for input on password */}
          {/* Password must contain at least one digit, one lowercase, and one uppercase letter */}
        </label>

        <button type="button" onClick={handleLogin} className="LoginButton">
          Login
        </button>
        {/* This is the login button */}

        <button type="button" onClick={handleSignUp} className="SignUpButton">
          Sign Up
        </button>
        {/* This is the sign-up button */}
      </form>
    </div>
  );
}

export default App;
