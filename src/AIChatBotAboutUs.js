import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AIChatBotAboutUs.css";
import { auth } from "./firebase/firebase-config"; // make sure this path is correct
import { signOut, onAuthStateChanged } from "firebase/auth";

const teamMembers = [
  {
    name: "Nuri Hannan",
    role: "Frontend Developer",
    description:
      "Responsible for designing and implementing user-friendly, visually appealing interfaces that enhance user experience and engagement.",
    image: "/Nuri.png",
  },
  {
    name: "Lilyan Toma",
    role: "Lead Developer",
    description:
      "Leads development efforts with a focus on AI training, while also contributing to frontend development and database management.",
    image: "/Lilly.png",
  },
  {
    name: "Marina Llakmani",
    role: "Database Manager",
    description:
      "Specializes in managing and deploying databases, with expertise in Firebase and backend infrastructure optimization.",
    image: "/Marina.png",
  },
  {
    name: "Lukas Sagmani",
    role: "Frontend Developer",
    description:
      "Responsible for designing and implementing user-friendly, visually appealing interfaces that enhance user experience and engagement.",
    image: "/Lukas.png",
  },
];

function AIChatBotAboutUs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        alert("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
        alert("Logout failed: " + error.message);
      });
  };

  return (
    <div className="about-me-container">
      <div className="header-section">
        {isLoggedIn && (
          <button className="LogoutButton" onClick={handleLogout}>
            Logout
          </button>
        )}
        <h1 className="title">Meet Our Team</h1>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIChatBotAboutUs;
