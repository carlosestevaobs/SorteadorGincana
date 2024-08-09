import React from 'react';
import './TeamDisplay.css';
import Button from '../Button';

const TeamDisplay = ({ teamName, members, onNext, buttonText }) => {
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setCurrentIndex(-1);
    setAnimate(true);
  }, [teamName]);

  React.useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        if (currentIndex < members.length - 1) {
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setAnimate(false); 
        }
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, members, animate]);

  return (
    <div className={`team-display ${animate ? 'entering' : ''}`}>
      <h2 className={`team-name ${currentIndex >= 0 ? 'visible' : ''}`}>
        {teamName}
      </h2>
      <div className="team-members">
        {members.map((member, index) => (
          <div
            key={index}
            className={`team-member ${index <= currentIndex ? 'visible' : ''}`}
          >
            {member}
          </div>
        ))}
      </div>
      {currentIndex === members.length - 1 && (
        <Button className="next" text={buttonText} onClick={onNext} />
      )}
    </div>
  );
};

export default TeamDisplay;
