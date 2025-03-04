import React, { useState } from "react";
import { auth } from "./firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import AIChatBotSignUpPage from "./AIChatBotSignUpPage"; //we link the sign up page and the sign up page css as well
import "./AIChatBotLoginPage.css";
import AIChatBotHomePage from "./AIChatBotHomePage"; //we link the home page and the home page css as well

import LoginIcon from "./LoginIcon.svg"; // icon for login
import SignUpIcon from "./SignUpIcon.svg"; // icon for sign up
import HomePageIcon from "./HomePageIcon.svg"; // icon for home page
import AboutUsPage from "./AIChatBotAboutUs.js"; // icon for home page

function App() {
  return (
    <body>
      <div className="backroundColor">
        <BrowserRouter>
          <nav>
            <Link to="/login" className="LoginPageLink">
              <img src={LoginIcon} alt="Login Icon" />
            </Link>

            <Link to="/homePage" className="HomePageLink">
              <img src={HomePageIcon} alt="Home Page Icon" />
            </Link>

            <Link to="/signup" className="SignUpPageLink">
              <img src={SignUpIcon} alt="Sign Up Icon" />
            </Link>

            <Link to="/aboutUs" className="aboutUs">
              <h3>About Us</h3>
            </Link>

            <hr className="line" />
          </nav>

          <Routes>
            <Route path="/login" element={<OldApp />} />
            <Route path="/signup" element={<AIChatBotSignUpPage />} />
            <Route path="/homePage" element={<AIChatBotHomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

function OldApp() {
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
        console.error("Error signing up:", error.message); //error message
        alert("Sign-up failed: " + error.message);
      });
  }

  function handleLogin() {
    //if the user already has an account then they will be logged in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user); //creates a pop up that verifys the log in
        alert("Login successful!");
      })
      .catch((error) => {
        console.error("Login error:", error.message); //error message
        alert("Login failed: " + error.message);
      });
  }

  return (
    // need this to return attributes
    <html>
      <header>

        
      </header>
    <div className="Login_Content">
      {/* need div to return multiple attributes, without div I can only use one attribute */}
      {/* Body for background color */}

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
    </html>
  );
}

export default App;
