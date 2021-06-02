import React from 'react';
import { Link } from 'react-router-dom';

import './Recommendations.css';

function Recommendations({ results }) {
  return (
    <div className="Recommendations">
      <h1>Recommendations</h1>
      <h2>Questionnaire Results:</h2>
      <h3>Year of birth: {results.yearOfBirth}</h3>
      <Link exact to="/questionnaire/year-of-birth">
        <button>Back to Questionnaire (edit)</button>
      </Link>
      <button>Submit</button>
    </div>
  );
}

export default Recommendations;
