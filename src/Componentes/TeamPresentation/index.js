import React from 'react';
import TeamDisplay from '../TeamDisplay';
import './TeamPresentation.css';
import FinalDisplay from '../FinalDisplay';
import Button from '../Button';

const TeamPresentation = () => {
  const { currentTeam, presentedTeams, isFinished, nextTeam, restartPresentation } = usePresentation();

  if (isFinished) {
    return (
      <div className="team-presentation">
        <h2>Apresentação Concluída!</h2>
        <FinalDisplay teams={presentedTeams} />
        <Button text="Reiniciar Apresentação" onClick={restartPresentation} />
      </div>
    );
  }

  const currentMembers = presentedTeams.length > 0 ? presentedTeams[presentedTeams.length - 1] : [];

  return (
    <div className="team-presentation">
      {presentedTeams.length < currentTeam + 1 && (
        <TeamDisplay 
          teamName={`Equipe ${currentTeam + 1}`} 
          members={currentMembers} 
          onNext={nextTeam} 
          buttonText={currentTeam === teams.length - 1 ? "Mostrar Equipes Sorteadas" : "Próxima Equipe"}
        />
      )}
    </div>
  );
};

export default TeamPresentation;
