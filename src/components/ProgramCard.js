import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../styles/ProgramCard.css';

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (program.link) {
      // Handle anchor links within the programs page
      if (program.link.includes('#')) {
        navigate(program.link);
      } else {
        navigate(program.link);
      }
    }
  };

  return (
    <div className="program-card">
      <div className="card-image">
        <img src={program.image} alt={program.title} />
        <div className="age-badge">{program.ages}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{program.title}</h3>
        <p className="card-description">{program.description}</p>
        <button className="learn-more-btn" onClick={handleLearnMore}>
          Learn More
          <ChevronDown className="learn-more-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;