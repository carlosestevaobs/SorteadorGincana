import React, { useState } from 'react';
import TeamDisplay from './Componentes/TeamDisplay';
import FinalDisplay from './Componentes/FinalDisplay';
import Button from './Componentes/Button';
import './App.css';

const primeirosAnos = ['1º info A', '1º info B', '1º agro', '1º meio', '1º adm'];
const segundosAnos = ['2º meio A', '2º meio B', '2º info', '2º adm', '2º agro'];
const terceirosAnos = ['3º meio', '3º info', '3º adm', '3º agro A', '3º agro B'];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function App() {
  const [start, setStart] = useState(false);
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [showAllTeams, setShowAllTeams] = useState(false);

  const handleStart = () => {
    const shuffled1 = shuffleArray([...primeirosAnos]);
    const shuffled2 = shuffleArray([...segundosAnos]);
    const shuffled3 = shuffleArray([...terceirosAnos]);

    const generatedTeams = [];
    for (let i = 0; i < primeirosAnos.length; i++) {
      generatedTeams.push([shuffled1[i], shuffled2[i], shuffled3[i]]);
    }

    setTeams(generatedTeams);
    setStart(true);
    setShowAllTeams(false); 
  };

  const nextTeam = () => {
    if (currentTeam < teams.length - 1) {
      setCurrentTeam(prevTeam => prevTeam + 1);
    } else {
      setShowAllTeams(true); 
    }
  };

  const restartPresentation = () => {
    setCurrentTeam(0);
    setStart(false);
    setShowAllTeams(false); 
  };

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        {!start ? (
          <div className="text-background">
            <Button text="Iniciar Sorteio" onClick={handleStart} className="start" />
          </div>
        ) : (
          <>
            {showAllTeams ? (
              <div className="text-background">
                <FinalDisplay teams={teams} />
                <Button text="Reiniciar Apresentação" onClick={restartPresentation} />
              </div>
            ) : (
              <>
                {currentTeam < teams.length ? (
                  <div className="text-background">
                    <TeamDisplay
                      teamName={`Equipe ${currentTeam + 1}`}
                      members={teams[currentTeam]}
                      onNext={nextTeam}
                      buttonText={currentTeam === teams.length - 1 ? "Mostrar Equipes Sorteadas" : "Próxima Equipe"}
                    />
                  </div>
                ) : (
                  <div className="text-background">
                    <Button text="Mostrar Equipes Sorteadas" onClick={() => setShowAllTeams(true)} className="next" />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
