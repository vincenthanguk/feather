import React from 'react';
import { Link } from 'react-router-dom';

function Questionnaire() {
  return (
    <div className="Questionnaire">
      <h1>Our Recommendation Tool</h1>
      <p>
        We can recommend any kind of insurance that you might need based on your
        situation
      </p>
      <Link exact to="questionnaire/year-of-birth">
        Take me there
      </Link>
    </div>
  );
}

export default Questionnaire;
