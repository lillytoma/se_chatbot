import React from "react";
import "./AIChatBotAboutUs.css";

const teamMembers = [
  {
    name: "Nuri Hannan",
    role: "Frontend Developer",
    description:
      "Responsible for designing and implementing user-friendly, visually appealing interfaces that enhance user experience and engagement.",
    image: "/Nuri.png", // Replace with actual image URL
  },
  {
    name: "Lilyan Toma",
    role: "Lead Developer",
    description:
      "Leads development efforts with a focus on AI training, while also contributing to frontend development and database management.",
    image: "/Lilly.png", // Replace with actual image URL
  },
  {
    name: "Marina Llakmani",
    role: "Database Manager",
    description:
      "Specializes in managing and deploying databases, with expertise in Firebase and backend infrastructure optimization.",
    image: "/Marina.png", // Replace with actual image URL
  },
  {
    name: "Lukas Sagmani",
    role: "Frontend Developer",
    description:
      "Responsible for designing and implementing user-friendly, visually appealing interfaces that enhance user experience and engagement.",
    image: "/Lukas.png", // Replace with actual image URL
  },
];

function AIChatBotAboutUs() {
  return (
    <div className="backgroundColor">
      <h1 className="title">Meet Our Team</h1>
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
