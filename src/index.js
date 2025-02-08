import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AIChatBot_LoginPage from "./AIChatBot_LoginPage"; //Change: import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AIChatBot_LoginPage /> {/* Change: <App />  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
