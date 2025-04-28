import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AIChatBotSignUpPage from "./AIChatBotSignUpPage"; // Sign-up page
import "./AIChatBotLoginPage.css";
import AIChatBotHomePage from "./AIChatBotHomePage"; // Home page
import UserAgreement from "./AIChatBot_UserAgreementPage"; // User Agreement page

import LoginIcon from "./LoginIcon.svg"; // Icon for login
import SignUpIcon from "./SignUpIcon.svg"; // Icon for sign up
import UserAgreementIcon from "./UserAgreementIcon.svg"; // Icon for user agreement
import HomePageIcon from "./HomePageIcon.svg"; // Icon for home page
import AboutUsIcon from "./AboutUsIcon.svg"; // Icon for about us
import AboutUsPage from "./AIChatBotAboutUs.js"; // About us page

// Main App Component
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // On Auth State Change, update the currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Clean up
  }, []);

  return (
    <div>
      <BrowserRouter>
        <nav>
          {/* Show login/signup links if no user */}
          {!currentUser ? (
            <>
              <Link to="/UserAgreement" className="UserAgreement">
                <img src={UserAgreementIcon} alt="User Agreement" />
              </Link>
              <Link to="/login" className="LoginPageLink">
                <img src={LoginIcon} alt="Login" />
              </Link>
              <Link to="/signup" className="SignUpPageLink">
                <img src={SignUpIcon} alt="Sign Up" />
              </Link>
            </>
          ) : (
            // No logout button will be rendered
            <></>
          )}

          {/* Common navigation links */}
          <Link to="/homePage" className="HomePageLink">
            <img src={HomePageIcon} alt="Home" />
          </Link>
          <Link to="/aboutUs" className="aboutUs">
            <img src={AboutUsIcon} alt="About Us" />
          </Link>

          <hr className="line" />
        </nav>

        <Routes>
          <Route path="/UserAgreement" element={<UserAgreement />} />
          <Route path="/login" element={<OldApp />} />
          <Route path="/signup" element={<AIChatBotSignUpPage />} />
          <Route path="/homePage" element={<AIChatBotHomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Login/Signup Component
function OldApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign-up function
  function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed up:", userCredential.user);
        alert("Sign-up successful");
      })
      .catch((error) => {
        console.error("Sign-up error:", error.message);
        alert("Sign-up failed: " + error.message);
      });
  }

  // Login function
  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        alert("Login successful");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        alert("Login failed: " + error.message);
      });
  }

  return (
    <div className="backgroundColor FormContainer">
      <div className="Login_Content">
        <form id="User_Login">
          {/* Email input */}
          <label className="CenterEmail">
            <h3>Enter Email:</h3>
            <input
              className="EmailInput"
              type="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Password input */}
          <label className="CenterPassword">
            <h3>Enter Password:</h3>
            <input
              className="PasswordInput"
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Login and Sign-up buttons */}
          <button type="button" onClick={handleLogin} className="LoginButton">
            Login
          </button>
          <button type="button" onClick={handleSignUp} className="SignUpButton">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
