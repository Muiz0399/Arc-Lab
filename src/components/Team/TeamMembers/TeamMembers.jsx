import React from "react";
import "./TeamMembers.css";
import team1 from "../../../img/team1.jpg";
import team2 from "../../../img/team2.jpg";
import team3 from "../../../img/team3.jpg";
import team4 from "../../../img/team4.jpg";
import team5 from "../../../img/team5.jpg";
import team6 from "../../../img/team6.jpg";
import team7 from "../../../img/team7.jpg";
import team8 from "../../../img/team8.jpg";

const photos = [
    { img: team1, firstName: "John", lastName: "Wilson", occupation: "Architect" },
    { img: team2, firstName: "Robert", lastName: "Wills", occupation: "Engineer" },
    { img: team3, firstName: "Mike", lastName: "Smith", occupation: "Architect" },
    { img: team4, firstName: "Adrian", lastName: "Henderson", occupation: "Engineer" },
    { img: team5, firstName: "John", lastName: "Wilson", occupation: "Architect" },
    { img: team6, firstName: "Robert", lastName: "Wills", occupation: "Engineer" },
    { img: team7, firstName: "Mike", lastName: "Smith", occupation: "Architect" },
    { img: team8, firstName: "Adrian", lastName: "Henderson", occupation: "Engineer" },
];

const TeamMembers = () => {
    return (
        <div className="team-member-container">
            <div className="photo-grid">
                {photos.map((person, index) => (
                    <div className="photo-item" key={index}>
                        <div className="photo-container" data-aos="fade-up">
                            <img src={person.img} alt={`${person.firstName} ${person.lastName}`} />
                            <div className="first-name">{person.firstName}</div>
                            <div className="last-name">{person.lastName}</div>
                        </div>
                        <div className="occupation">{person.occupation}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
