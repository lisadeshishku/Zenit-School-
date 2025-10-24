import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLearnMore = () => {
    if (program?.link) navigate(program.link);
  };

  const title = program?.title || '';
  const imageAlt = program?.alt || title;

  return (
    <article
      className="program-card"
      aria-label={title}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
      }}
    >
      <div className="card-image" aria-hidden="true" style={{ position: 'relative' }}>
        <img
          src={program.image}
          alt={imageAlt}
          loading="lazy"
          style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60';
          }}
        />
        {program?.ages && (
          <div
            className="age-badge"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: '#1d4ed8',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 700,
              boxShadow: '0 6px 16px rgba(37,99,235,.35)',
            }}
          >
            {program.ages}
          </div>
        )}
      </div>

      <div
        className="card-content"
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          gap: '.75rem',
        }}
      >
        <h3 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>
          {title}
        </h3>

        <p className="card-description" style={{ color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
          {program.description}
        </p>

        <button
          type="button"
          className="learn-more-btn"
          onClick={handleLearnMore}
          disabled={!program?.link}
          aria-disabled={!program?.link}
          style={{
            alignSelf: 'flex-start',
            background: 'transparent',
            color: '#2563eb',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {t('programs.learnMore')}
          <ChevronDown size={18} />
        </button>
      </div>
    </article>
  );
};

export default ProgramCard;
