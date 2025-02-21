import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


// import AiChatBot_HomePage from "./AiChatBot_HomePage";
import AIChatBot_LoginPage from "./AIChatBot_LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AiChatBot_HomePage /> */}
    <AIChatBot_LoginPage />
  </React.StrictMode>
);
