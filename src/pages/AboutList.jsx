import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";


function AboutList() {
  return (
    <div className="about-section">
      <div className="team-section">
        {teamMembers.map((teamMember) => (
          <AboutCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
}

export default AboutList;
