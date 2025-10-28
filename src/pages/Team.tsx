import team_all_member from "../assets/team_all_member.webp";
function Team() {
  return (
    <section className="team page-section" id="team" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <img src="../assets/team_all_member.webp" alt="Team" /> */}
      <img src={team_all_member} alt="Team" style={{ width: '50%', height: '50%', objectFit: 'contain' }} />
    </section>
  );
}

export default Team;


