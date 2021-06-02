import React from 'react';
import { Link } from 'react-router-dom';

function Recommendations({ results }) {
  const finRes = results.financialRes.map((item) => {
    return item.isChecked && <div>{item.value}</div>;
  });

  return (
    <div className="Recommendations">
      <h1>Recommendations</h1>
      Questionnaire Results:
      <ul className="recs">
        <li>
          <span>Year of birth:</span> {results.yearOfBirth}
        </li>
        <li>
          <span>Financial Responsibilities:</span>
          {finRes && 'none'}
        </li>
        <li>
          <span>Home Situation:</span>
          {results.homeSituation}
        </li>
        <li>
          <span>Employmeny Status:</span>
          {results.employmentStatus}
        </li>
        <li>
          <span>Income:</span>
          {results.income}
        </li>
      </ul>
      <Link exact to="/questionnaire/year-of-birth">
        <button>Back to Questionnaire (edit)</button>
      </Link>
      <div>
        <Link exact to="/submit">
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Recommendations;
