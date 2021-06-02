import React from 'react';
import useInputState from '../hooks/useInputState';
import { Link } from 'react-router-dom';

function YearOfBirth({ handleSubmit }) {
  const [value, handleChange] = useInputState('');

  return (
    <div className="YearOfBirth">
      <h1>What's your birth year? 🐣</h1>
      <form onSubmit={() => handleSubmit(value)}>
        <input
          type="number"
          min="1"
          step="1"
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <Link to="/questionnaire/financial-responsibilities">
          <button
            onClick={() => handleSubmit('yearOfBirth', value)}
            disabled={value === '' ? true : false}
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default YearOfBirth;
