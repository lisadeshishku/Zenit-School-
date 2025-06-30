import React from 'react';
import ProgramCard from './ProgramCard';
import '../styles/ProgramsSection.css';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Elementary School",
      description: "Foundation years focused on creativity, exploration, and fundamental skills development in a nurturing environment.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: "Ages 5-11",
      link: "/programs#elementary"
    },
    {
      title: "Middle School",
      description: "Transitional years emphasizing critical thinking, collaboration, and personal growth through innovative curriculum.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: "Ages 11-14",
      link: "/programs#middle"
    },
    {
      title: "High School",
      description: "Advanced preparation for university with rigorous academics, leadership opportunities, and global perspectives.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: "Ages 14-18",
      link: "/programs#high"
    },
    {
      title: "Zenit Summer Camp",
      description: "An exciting summer program featuring swimming in our half Olympic pool, arts, sports, and academic enrichment activities.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: "Ages 6-16",
      link: "/programs#summer"
    }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            From early childhood through graduation, plus our exciting summer camp program, 
            we offer comprehensive educational experiences designed to nurture growth and inspire curiosity.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;