import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  // state for disabling button
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const newState = value.map((i) => {
      if (i.value === item) i.isChecked = isChecked;
      return i;
    });
    setValue(newState);
    setButtonStatus(() => !disableButton());
  };

  const checkBoxes = value.map((item) => {
    return (
      <li key={item.value} className="checkbox">
        <label htmlFor={item.value}>
          {`${item.value[0].toUpperCase()}${item.value.slice(1)}`}
        </label>
        <input name={item.value} type="checkbox" onChange={handleChange} />
      </li>
    );
  });

  const disableButton = () => {
    // dynamically disable button when nothing is checked
    let result = false;
    value.forEach((item) => {
      if (item.isChecked === true) result = true;
    });
    return result;
  };

  return (
    <div className="FinancialRes">
      <h1>Financial Responsibilities 💵</h1>
      <form onSubmit={() => handleSubmit('financialRes', value)}>
        <ul>{checkBoxes}</ul>
        <Link to="/questionnaire/home-situation">
          <span onClick={() => handleSubmit('financialRes', value)}>
            No obligations
          </span>
          <div>
            <button
              onClick={() => handleSubmit('financialRes', value)}
              disabled={buttonStatus}
            >
              Next
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default FinancialRes;
