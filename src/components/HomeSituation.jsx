import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeSituation({ handleSubmit }) {
  const radioItems = ['own', 'rent'];

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const radioButtons = radioItems.map((item) => {
    return (
      <li key={item} className="radiobuttons" onChange={handleChange}>
        <label htmlFor={item}>{item}</label>
        <input name="homeType" value={item} type="radio" />
      </li>
    );
  });

  return (
    <div className="HomeSituation">
      <h1>Home Situation</h1>
      <h2>Do you own or rent the place where you live? 🏡</h2>
      <form onSubmit={() => handleSubmit('homeSituation', value)}>
        <ul>{radioButtons}</ul>
        <Link to="/questionnaire/employment-status">
          <button
            onClick={() => handleSubmit('homeSituation', value)}
            disabled={value === '' ? true : false}
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default HomeSituation;
