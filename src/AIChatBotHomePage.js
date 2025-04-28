import React, { useState, useEffect } from "react";
import "./AIChatBotHomePage.css";
import { auth } from "./firebase/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { fetchMatchingSlides } from "./firebase/slideSearch";
import { askQuestion } from "./api/api"; // RESTORED

// Logout function
function handleLogout() {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
      alert("Logged out successfully!");
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
      alert("Logout failed: " + error.message);
    });
}

function AIChatBot_HomePage_CommentBox() {
  const [getComments, setComments] = useState([]);
  const [newComment, setNewComments] = useState("");
  const [botResponses, setBotResponses] = useState([]);

  const handleTheComment = (event) => {
    setNewComments(event.target.value);
  };

  const handleTheSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...getComments, newComment]);

      // First check Firestore
      const firestoreResults = await fetchMatchingSlides(newComment);

      let finalAnswer;
      if (firestoreResults.length > 0) {
        finalAnswer = firestoreResults[0].text;
      } else {
        // If no match, ask the bot instead
        try {
          const botAnswer = await askQuestion(newComment);
          finalAnswer = botAnswer.answer || "Sorry, I don't know the answer.";
        } catch (error) {
          console.error("Bot error:", error);
          finalAnswer = "There was an error getting a response from the bot.";
        }
      }

      setBotResponses([...botResponses, finalAnswer]);
      setNewComments("");
    }
  };

  return (
    <div className="comment-box AiChatBot_HomePage backgroundColor">
      <div className="post-comment">
        <div className="list">
          {getComments.map((comment, index) => (
            <div key={index} className="comment-post">
              User: {comment}
            </div>
          ))}
          {botResponses.map((response, index) => (
            <div key={`bot-${index}`} className="bot-response">
              Bot: {typeof response === "object" ? response.text : response}
            </div>
          ))}
        </div>
        <form onSubmit={handleTheSubmit}>
          <textarea
            name="comment"
            placeholder="Type your comment here...."
            value={newComment}
            onChange={handleTheComment}
          />
          <button type="submit" className="submit-comment form">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function AIChatBot_HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is not logged in
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="AiChatBot_HomePage backgroundColor">
      <div className="header-section">
        {isLoggedIn && (
          <button onClick={handleLogout} className="LogoutButton">
            Logout
          </button>
        )}
        <h1 className="title">SIMPLE STUDY</h1>
      </div>

      <AIChatBot_HomePage_CommentBox />
    </div>
  );
}

export default AIChatBot_HomePage;
