import "./AIChatBot_LoginPage.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

// grabs the UserLogin data
// db.collection('UserLogins').get().then(() =>{
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
// })

function LoginButton() {
  //Created a function for login button

  return <button class="LoginButton">Login</button>; //created login button
} //login button function ends

function SignUpButton() {
  //Created a function for sign up button
  return (
    <button class="SignUpButton">Sign Up</button>
    //created sign up button
  );
} //sign up button function ends

function AIChatBot_LoginPage() {
  //main function

  return (
    // need this to return attriibuites

    <div class = "Login_Content">
      
      {/* need div to return multiple attribuites, without div i can only use on attribuite */}
      <body class="backroundColor">
     
        {/* Body for backround color*/}
        <form id = "User_Login">
          <label class="CenterEmail">
            <h3>Enter Email:</h3>
            <input type="Email"
            pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/> 
            {/* After the "." sign, add at least 2 letters from a to z */}
            {/* input created to ask user for input on email*/}
          </label>
          <label class="CenterPassword">
            <h3>Enter Password:</h3>
            <input type="password" 
            pattern= "[?=*!A-Za-z]"/> 
            {/* input created to ask user for input on password no special characters such as @#().. etc*/}
          </label>
          <LoginButton /> {/* This is the login button*/}
        </form>
        <SignUpButton /> {/* This is the sign in button*/}
      </body>
    </div>
  );
}

export default AIChatBot_LoginPage;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AIChatBot_LoginPage />);
