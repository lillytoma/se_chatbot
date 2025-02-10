import React, { useState } from "react";
//right here you are importing the css file for the styling portion
import "./AiChatBot_HomePage.css";

//right here you are creating a function that will be exported to the App.js file
function AiChatBot_HomePage() {
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
        //right here is the main containder "div" with the class names for the styling portion
        <div className="AiChatBot_HomePage backgroundColor" >

            {/* right here is the h1 (HEADING) tag with the text "AI Chat Bot" */}
            <h1>AI Chat Bot</h1>
            {/* this is the form to handle the users input and also the search*/}
            <form onSubmit={handleResponse}>
                {/* this is the input field for the user to type in the search query */}
                <input
                    type="text" // this right here is the type of input field and specifies the input as text
                    placeholder="Ask me anything..." // this right here is the placeholder text that will be displayed in the input field, without typing anything
                    value={searchQuery} //this binds the value of the input field to the searchQuery state
                    onChange={handleTheSearch} //this right here is the event handler that will be called when the user types something in the input field
                />
                {/* this is the button that the user will click to submit the form */}
                <button type="submit" className="search-button search-form search-input"> Search </button>

            </form>
        </div>
    );
}
//this will export the component so it can be used in other files
export default AiChatBot_HomePage;
