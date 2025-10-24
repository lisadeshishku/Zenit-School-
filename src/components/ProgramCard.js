import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../styles/ProgramCard.css';

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLearnMore = () => {
    if (program?.link) navigate(program.link);
  };

  const title = program?.title || '';
  const imageAlt = program?.alt || title;

  return (
    <article className="program-card" aria-label={title}>
      <div className="card-image" aria-hidden="true">
        <img
          src={program.image}
          alt={imageAlt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60';
          }}
        />
        {program?.ages && <div className="age-badge">{program.ages}</div>}
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        {/* Prevent overflow: clamped, safe text area */}
        <p className="card-description">{program.description}</p>

        <button
          type="button"
          className="learn-more-btn"
          onClick={handleLearnMore}
          disabled={!program?.link}
          aria-disabled={!program?.link}
        >
          {t('programs.learnMore')}
          <ChevronDown className="learn-more-icon" />
        </button>
      </div>
    </article>
  );
};

export default ProgramCard;
