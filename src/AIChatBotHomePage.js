import React, { useState } from "react";
//right here you are importing the css file for the styling portion
import "./AIChatBotHomePage.css";

function AIChatBot_HomePage_CommentBox() {
    // right here you are creating a state to store comments
    const [getComments, setComments] = useState([]);
    const [newComment, setNewComments] = useState("");

    // right here you are handling the input change event for the comment box
    const handleTheComment = (event) => {
        setNewComments(event.target.value);
    };

    // right here you are handling the form submission event
    const handleTheSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== "") {
            setComments([...getComments, newComment]);
            setNewComments("");
        }
    };

    return (
        <div className="comment-box">
            <div className="post-comment">
                <div className="list">
                    <div className="user">
                        <div className="user-meta">
                        </div>
                    </div>
                    {getComments.map((comment, index) => (
                        <div key={index} className="comment-post">
                            {comment}
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
                    <button type="submit" className="submit-comment">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

//right here you are creating a function that will be exported to the App.js file
function AIChatBot_HomePage() {
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
            <h1>AI Chat Bot</h1>

            {/* this is the form to handle the user's input and also the search*/}
            <form onSubmit={handleResponse}>
                {/* this is the input field for the user to type in the search query */}
                <input
                    type="text" // this right here is the type of input field and specifies the input as text
                    placeholder="Ask me anything..." // this right here is the placeholder text that will be displayed in the input field, without typing anything
                    value={searchQuery} //this binds the value of the input field to the searchQuery state
                    onChange={handleTheSearch} //this right here is the event handler that will be called when the user types something in the input field
                />
                {/* this is the button that the user will click to submit the form */}
                <button type="submit" className="search-button search-form search-input">
                    Search
                </button>
            </form>

            {/* right here is the comment box component */}
            <AIChatBot_HomePage_CommentBox />
        </div>
    );
}

//this will export the component so it can be used in other files
export default AIChatBot_HomePage;
