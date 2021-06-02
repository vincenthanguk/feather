import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FinancialRes.css';

function FinancialRes({ handleSubmit }) {
  const checkboxItems = [
    {
      value: 'child',
      isChecked: false,
    },
    {
      value: 'spouse',
      isChecked: false,
    },
    {
      value: 'parent',
      isChecked: false,
    },
    {
      value: 'mortgage',
      isChecked: false,
    },
  ];

  const [value, setValue] = useState(checkboxItems);

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const newState = value.map((i) => {
      if (i.value === item) i.isChecked = isChecked;
      return i;
    });
    setValue(newState);
  };

  const checkBoxes = value.map((item) => {
    return (
      <div key={item.value} className="checkbox">
        <label htmlFor={item.value}>
          {`${item.value[0].toUpperCase()}${item.value.slice(1)}`}
        </label>
        <input name={item.value} type="checkbox" onChange={handleChange} />
      </div>
    );
  });

  return (
    <div className="FinancialRes">
      <h1>Financial Responsibilities 💵</h1>
      <form onSubmit={() => handleSubmit(value)}>
        {checkBoxes}
        <span>No obligations</span>
        <Link to="/questionnaire/home-situation">
          <button onClick={() => handleSubmit(value)}>Next</button>
        </Link>
      </form>
    </div>
  );
}

export default FinancialRes;
