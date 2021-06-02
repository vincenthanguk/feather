import React from 'react';
import useInputState from '../hooks/useInputState';
import { Link } from 'react-router-dom';

function YearOfBirth({ handleSubmit }) {
  const [value, handleChange] = useInputState('');

  return (
    <div className="YearOfBirth">
      <h1>What's your birth year? 🐣</h1>
      <form onSubmit={() => handleSubmit(value)}>
        <input type="text" value={value} onChange={handleChange} />
        <Link to="/questionnaire/financial-responsibilities">
          <button onClick={() => handleSubmit('yearOfBirth', value)}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default YearOfBirth;
