import { useState } from "react";
import team_all_member from "../assets/team_all_member.webp";
import team_0_aiden from "../assets/team_0_aiden_lee.webp";
import team_1_taewoo from "../assets/team_1_taewoo_park.webp";
import team_2_sangho from "../assets/team_2_sangho_sun.webp";
import team_3_jihan from "../assets/team_3_jihan_lee.webp";

const teamMembers = [
  {
    id: 0,
    name: "Aiden Lee",
    image: team_0_aiden,
    description: "I'm Aiden Lee, an eleventh grader at Stevenson School. In the past, I interned at Truharts Inc. and received awards in competitions like Scholastics and National History Day, where I loved combining art with storytelling. I also care deeply about bees and their vital role in supporting ecosystems and producing honey has inspired me to think more about the connection between nature and humanity. I'm really looking forward to working on the Becure project and continuing to explore new ways to express ideas through creative work."
  },
  {
    id: 1,
    name: "Taewoo Park",
    image: team_1_taewoo,
    description: "As the president and founder of the environmental club, I have consistently shown an interest in significant environmental issues worldwide. Bees might seem like a negligible organism, but they still serve as a fundamental basis of the ecosystem. But we often forget that fact, without bees, there is going to be only the demolition of the Earth. That's how I started working on a project that secures the safety of bees, BeCure. My name is Taewoo Park, class of 2027 at St. Johnsbury Acadey Jeju, Republic of Korea. I worked on waste reduction, upcycling design, and community-based environmental engagement across Jeju Island's UNESCO World Natural Heritage sites. I have received multiple recognitions for his contributions to climate and sustainability initiatives, including the Best Delegate Award at the MUN Climate Change Conference 2024, 1st Prizes at the National Youth Debate Competition on Climate Change and the International Youth Cyber Environment Forum, and a Bronze Award at the National Youth Volunteer Competition 2025.BeCure for me isn't just a company for profit. BeCure is the first and most significant step toward environment protection."
  },
  {
    id: 2,
    name: "Sangho Sun",
    image: team_2_sangho,
    description: "I've loved nature and the environment since I was a kid, and I've always wanted to do something meaningful to protect it. I started Becure because bees are disappearing fast, and that affects everything — our food, our planet, and our future. Bees may be small, but they play a huge role in keeping nature alive. Through Becure, I want to spread awareness and inspire people to care for the environment and take small actions that make a difference."
  },
  {
    id: 3,
    name: "Jihan Lee",
    image: team_3_jihan,
    description: "It all started when a Varroa mite outbreak struck the beehives on our school campus. I remember watching the colonies weaken, almost helplessly, as the infestation spread faster than anyone expected. What struck me most wasn't just the loss of the bees, but how difficult it was to even realize something was wrong until it was too late. That moment made me wonder - what if there was a way to detect the signs earlier? That question became the seed for BeCure - an idea to use AI and image recognition to help beekeepers identify mite infections before they devastate entire hives. What began as a school observation turned into a mission to protect bees globally through technology. Our team started working with real image data from local apiaries, experimenting with machine learning models, and building an app that could make early detection practical and accessible. I am Jihan Lee, an entrepreneur who visions business as a vehicle and means towards feasible change. Merging technology, business, and insight into the environment, before BeCure, I found myself with experiences and learnings. Prior to BeCure, I have entered the CONRAD challenge with a proposal for bees, an adaptive beehive that promotes biodiversity. I co-developed EntoFarm, a genetically modified fungi to combat climate-driven mosquito expansion as an environment-friendly alternative to DDT. Awarded 2nd place at the Climate Change Challenge, I was able to present my prospects at COP 28 in Dubai and participate in Oxford University's Said Business School's summer school with youth visionaries and inspiring educational opportunities. Through each of these experiences, I've come to believe that entrepreneurship can be a tool for regeneration, not just growth. BeCure represents that belief - a small step toward a future where technology doesn't just serve people, but also helps heal the ecosystems that sustain us."
  }
];

function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="team page-section" id="team" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <div style={{
        position: 'relative',
        width: '80%',
        maxWidth: '800px',
        marginBottom: '2rem'
      }}>
        <img
          src={team_all_member}
          alt="Team"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        />

        {/* Hover areas for each team member */}
        {teamMembers.map((member) => {
          let left, width;
          if (member.id === 0) { // Aiden
            left = '5%';
            width = '20%';
          } else if (member.id === 1) { // Taewoo
            left = '20%';
            width = '25%';
          } else if (member.id === 2) { // Sangho
            left = '65%';
            width = '25%';
          } else { // Jihan
            left = '85%';
            width = '15%';
          }

          return (
            <div
              key={member.id}
              style={{
                position: 'absolute',
                top: '0px',
                left: left,
                width: width,
                height: 'calc(100% - 10px)',
                cursor: 'pointer',
                backgroundColor: hoveredMember === member.id ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
                border: hoveredMember === member.id ? '2px solid rgba(0, 0, 0, 0.6)' : '2px solid transparent',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: hoveredMember === member.id ? 'white' : 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              {hoveredMember === member.id && member.name}
            </div>
          );
        })}
      </div>

      {/* Team introduction */}
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        marginBottom: '2rem',
        padding: '0 1rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#333',
          fontWeight: 'bold'
        }}>
          Meet Our Team
        </h2>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          color: '#666',
          marginBottom: '1rem'
        }}>
          We are BeCure, a student-founded team united by our shared passion for the environment and our determination to protect one of its smallest yet most essential creatures — the bee.
        </p>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#666'
        }}>
          Our journey began from a simple realization: bees are disappearing, and with them, the balance of our ecosystems. What started as curiosity and concern grew into an innovative project — developing an AI-based solution to detect Varroa mite infestations early, helping beekeepers protect their hives before it's too late.
        </p>
      </div>

      {/* Dialog for selected member details */}
      {selectedMember !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem',
          animation: 'fadeIn 0.3s ease-in'
        }}
          onClick={() => setSelectedMember(null)}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            maxWidth: '1200px',
            width: '100%',
            height: '600px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'slideIn 0.3s ease-out'
          }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Horizontal layout: photo | content */}
            <div className="dialogContent" style={{ display: 'flex', gap: '0', width: '100%', height: '100%' }}>
              {/* Member photo */}
              <div style={{ position: 'relative', flex: '1 1 50%', minWidth: 0, height: '100%', backgroundColor: 'black' }}>
                <img
                  src={teamMembers[selectedMember].image}
                  alt={teamMembers[selectedMember].name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              {/* Member info */}
              <div style={{ flex: '1 1 50%', minWidth: 0, padding: '2rem', overflowY: 'auto', height: '100%' }}>
                <h3 style={{
                  fontSize: '2rem',
                  color: '#333',
                  margin: '0 0 1rem 0'
                }}>
                  {teamMembers[selectedMember].name}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#555',
                  margin: 0,
                }}>
                  {teamMembers[selectedMember].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        /* Responsive: stack on small screens */
        @media (max-width: 640px) {
          .dialogContent { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}

export default Team;


