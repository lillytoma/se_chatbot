import "./AIChatBot_UserAgreementPage.css";
import React, { useState } from "react";
import { auth } from "./firebase/firebase-config";

function AIChatBot_UserAgreementPage() {
  const [isAgreed, setIsAgreed] = useState(false); // State to manage checkbox

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = () => {
    if (isAgreed) {
      // Proceed with what should happen if the user agrees
      alert("You have agreed to the terms.");
    } else {
      alert("You must agree to the terms before proceeding.");
    }
  };

  return (
    <div className="backgroundColor">
      <h5>
        Software Engineering ChatBot User Agreement
        <br />
        Effective Date: 02/21/25 Last Updated: 02/21/25
        <br />
        <br />
        1. Introduction: Welcome to the Software Engineering ChatBot (the
        “ChatBot”). By accessing or using this ChatBot, you agree to be bound by
        this User Agreement. If you do not agree, please do not use the ChatBot.
        <br />
        2. Purpose: The ChatBot is designed to assist users in learning about
        software engineering by providing guidance, answering technical
        questions, and offering general insights into the field.
        <br />
        3. User Eligibility: The ChatBot is available to anyone who wishes to
        use it, regardless of experience level.
        <br />
        4. Data Handling & Privacy: The ChatBot does not currently store or
        retain user data. No personally identifiable information is collected.
        <br />
        5. Limitations & Disclaimers: The ChatBot is still in development and
        may not always provide fully accurate or up-to-date information. The
        ChatBot's responses should not be considered a replacement for
        professional advice. The creators of the ChatBot are not responsible for
        any decisions or actions taken based on its responses.
        <br />
        6. Security & Indemnity: You agree to provide a unilateral indemnity to
        preclude Forestview from legal ramifications for issues such as data
        breaches, zero-day attacks, and database worms, including but not
        limited to SQL injection attacks. The creators of the ChatBot will not
        be held liable for damages resulting from such incidents. We conduct
        periodic vulnerability assessments against our system and require all
        key vendors to implement preventive security measures. As technology and
        the overall security landscape evolve, security requirements will change
        over time to ensure the continued protection of our system and users.
        <br />
        7. Compliance with Industry Standards: The ChatBot and its underlying
        software comply with relevant industry-specific security and regulatory
        standards, ensuring best practices in data protection and user safety.
        <br />
        8. Updates & Modifications: This agreement and the ChatBot may be
        updated or modified at any time to improve functionality, accuracy, and
        user experience. Continued use after changes means you accept the
        updated terms.
        <br />
        9. Termination: At this time, there are no restrictions on usage, and no
        users will be banned for misuse. However, future updates may introduce
        usage guidelines.
        <br />
        10. Governing Law: This User Agreement is not currently governed by any
        specific legal jurisdiction. By using the Software Engineering ChatBot,
        you acknowledge that you have read, understood, and agreed to this User
        Agreement.
      </h5>

      <div className="agreementFooter">
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          I agree to the terms and conditions
        </label>
        <button onClick={handleSubmit} disabled={!isAgreed}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AIChatBot_UserAgreementPage;
