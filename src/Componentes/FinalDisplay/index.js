import React from 'react';
import './FinalDisplay.css';

const FinalDisplay = ({ teams }) => {
  return (
    <div className="final-display">
      {teams.map((team, index) => (
        <div key={index} className="final-team">
          <h3>{`Equipe ${index + 1}`}</h3>
          <ul>
            {team.map((member, i) => (
              <li key={i}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FinalDisplay;
