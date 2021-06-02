import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeSituation.css';

function HomeSituation({ handleSubmit }) {
  const radioItems = ['own', 'rent'];

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const radioButtons = radioItems.map((item) => {
    return (
      <div key={item} className="radiobuttons" onChange={handleChange}>
        <label htmlFor={item}>{item}</label>
        <input name="homeType" value={item} type="radio" />
      </div>
    );
  });

  return (
    <div className="HomeSituation">
      <h1>Home Situation</h1>
      <span>Do you own or rent the place where you live? 🏡</span>
      <form onSubmit={() => handleSubmit('homeSituation', value)}>
        {radioButtons}
        <Link to="/questionnaire/employment-status">
          <button onClick={() => handleSubmit('homeSituation', value)}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default HomeSituation;
