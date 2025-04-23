import React, { useState } from "react";
import "./AIChatBotHomePage.css";

// ✅ Import Firestore query helper function
import { fetchMatchingSlides } from "./firebase/slideSearch";

// ✅ Import the API call function
import { askQuestion } from "./api/api";

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

      const firestoreResults = await fetchMatchingSlides(newComment);

      const finalAnswer = firestoreResults.length
        ? firestoreResults[0].text
        : "Sorry, no slides matched your query.";

      setBotResponses([finalAnswer]);
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
  return (
    <div className="AiChatBot_HomePage backgroundColor">
      <h1>SIMPLE STUDY</h1>
      <AIChatBot_HomePage_CommentBox />
    </div>
  );
}

export default AIChatBot_HomePage;