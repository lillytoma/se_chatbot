import React, { useState } from "react";
import "./AIChatBotHomePage.css";

// ✅ Import Firestore query helper function
import { fetchMatchingSlides } from "./firebase/slideSearch";

// ✅ Import the API call function
import { askQuestion } from "./api/api";

function AIChatBot_HomePage_CommentBox() {
<<<<<<< HEAD
  const [getComments, setComments] = useState([]);
  const [newComment, setNewComments] = useState("");
  const [botResponses, setBotResponses] = useState([]);

=======
  // right here you are creating a state to store comments
  const [getComments, setComments] = useState([]);
  const [newComment, setNewComments] = useState("");

  // right here you are handling the input change event for the comment box
>>>>>>> 4aee74f (fix)
  const handleTheComment = (event) => {
    setNewComments(event.target.value);
  };

<<<<<<< HEAD


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

  

=======
  // right here you are handling the form submission event
  const handleTheSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...getComments, newComment]);
      setNewComments("");
    }
  };

>>>>>>> 4aee74f (fix)
  return (
    <div className="comment-box AiChatBot_HomePage backgroundColor">
      <div className="post-comment">
        <div className="list">
<<<<<<< HEAD
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
=======
          <div className="user">
            <div className="user-meta"></div>
          </div>
          {getComments.map((comment, index) => (
            <div key={index} className="comment-post">
              {comment}
            </div>
          ))}
>>>>>>> 4aee74f (fix)
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
<<<<<<< HEAD
  return (
    <div className="AiChatBot_HomePage backgroundColor">
      <h1>AI CHAT BOT</h1>
=======
  //right here you are creating a state that will be used to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  //right here this function is to update the searchQuery state when the user types something in the input field
  const handleTheSearch = (event) => {
    setSearchQuery(event.target.value); //this right here updates the searchQuery state with the value that the user types in the input field
  };

  //right here this function is to handle the response when the user submits the form in the search field
  const handleResponse = (event) => {
    event.preventDefault(); //this right here prevents the default behavior of the form when the user submits it
    console.log("Search Query:", searchQuery); //this right here logs the searchQuery state to the console
  };

  return (
    //right here is the main container "div" with the class names for the styling portion
    <div className="AiChatBot_HomePage backgroundColor">
      {/* right here is the h1 (HEADING) tag with the text "AI Chat Bot" */}
      <h1>AI CHAT BOT</h1>

      {/* right here is the comment box component */}
>>>>>>> 4aee74f (fix)
      <AIChatBot_HomePage_CommentBox />
    </div>
  );
}

export default AIChatBot_HomePage;