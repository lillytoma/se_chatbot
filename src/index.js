import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AiChatBot_HomePage from "./AiChatBot_HomePage";
import AiChatBot_LoginPage from "./AIChatBot_LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AiChatBot_HomePage />
    <AiChatBot_LoginPage />
  </React.StrictMode>
);
