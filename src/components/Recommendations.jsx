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
      <table>
        <tbody>
          <tr>
            <td>Year of birth:</td>
            <td>{results.yearOfBirth}</td>
          </tr>
          <tr>
            <td>Financial Responsibilities:</td>
            <td>{finRes && 'none'}</td>
          </tr>
          <tr>
            <td>Home Situation:</td>
            <td>{results.homeSituation}</td>
          </tr>
          <tr>
            <td>Employmeny Status:</td>
            <td>{results.employmentStatus}</td>
          </tr>
          <tr>
            <td>Income:</td>
            <td>{results.income}</td>
          </tr>
        </tbody>
      </table>
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
