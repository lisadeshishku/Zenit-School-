import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/ProgramCard.css';

const ProgramCard = ({ program, learnMoreLabel }) => {
  const navigate = useNavigate();

  return (
    <article className="program-card">
      <div className="card-image">
        <img src={program.image} alt={program.imageAlt} />
        <div className="age-badge">{program.level}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{program.title}</h3>
        <p className="card-description">{program.description}</p>
        <button className="learn-more-btn" onClick={() => navigate(program.link)}>
          {learnMoreLabel}
          <ArrowRight className="learn-more-icon" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default ProgramCard;
