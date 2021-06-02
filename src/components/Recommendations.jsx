import React from 'react';
import { Link } from 'react-router-dom';

import './Recommendations.css';

function Recommendations({ results }) {
  const finRes = results.financialRes.map((item) => {
    return item.isChecked && <div>{item.value}</div>;
  });

  return (
    <div className="Recommendations">
      <h1>Recommendations</h1>
      <h2>Questionnaire Results:</h2>
      <h3>Year of birth: {results.yearOfBirth}</h3>
      <h3>Financial Responsibilities:</h3>
      {finRes}
      <h3>Income: {results.income}</h3>

      <Link exact to="/questionnaire/year-of-birth">
        <button>Back to Questionnaire (edit)</button>
      </Link>
      <button>Submit</button>
    </div>
  );
}

export default Recommendations;
