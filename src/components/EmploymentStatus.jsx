import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmploymentStatus({ handleSubmit }) {
  const radioItems = ['student', 'employed', 'selfemployed', 'unemployed'];

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const radioButtons = radioItems.map((item) => {
    return (
      <li key={item} className="radiobuttons" onChange={handleChange}>
        <label htmlFor={item}>{item}</label>
        <input name="employmentStatus" value={item} type="radio" />
      </li>
    );
  });

  return (
    <div className="EmploymentStatus">
      <h1>Employment Status</h1>
      <form onSubmit={() => handleSubmit('employmentStatus', value)}>
        <ul>{radioButtons}</ul>
        <Link to="/questionnaire/income">
          <button
            onClick={() => handleSubmit('employmentStatus', value)}
            disabled={value === '' ? true : false}
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default EmploymentStatus;
