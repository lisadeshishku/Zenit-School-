import React from 'react';
import AdmissionsCTA from '../components/AdmissionsCTA';

const Admissions = () => {
  return (
    <div className="admissions-page">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our community of learners and future leaders.
          </p>
        </div>
      </section>
      <AdmissionsCTA />
    </div>
  );
};

export default Admissions;