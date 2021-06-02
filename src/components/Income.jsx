import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Income({ handleSubmit }) {
  const radioItems = [
    {
      value: 'belowTwenty',
      label: '0-19k',
    },
    {
      value: 'belowThirty',
      label: '20-29k',
    },
    {
      value: 'belowForty',
      label: '30-39k',
    },
    {
      value: 'belowSixty',
      label: '40-59k',
    },
    {
      value: 'belowEighty',
      label: '60-79k',
    },
    {
      value: 'aboveEighty',
      label: '80k and above',
    },
  ];

  const [income, setIncome] = useState('');

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const radioButtons = radioItems.map((item) => {
    return (
      <li key={item.value} className="radio">
        <label htmlFor={item.value}>{item.label}</label>
        <input name="grossIncome" type="radio" value={item.value} />
      </li>
    );
  });

  return (
    <div className="EmploymentStatus">
      <h1>Annual Gross Income (before taxes) 💵</h1>

      <form onSubmit={() => handleSubmit('income', income)}>
        <div className="income" onChange={handleChange}>
          <ul>{radioButtons}</ul>
        </div>

        <Link to="/recommendations">
          <button
            onClick={() => handleSubmit('income', income)}
            disabled={income === '' ? true : false}
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Income;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Income.css';

// class Income extends Component {
//   render() {
//     return (
//       <div className="Income">
//         <h1>Annual Gross Income (before taxes) 💵</h1>
//         <form>
//           <div className="radio">
//             <label htmlFor="belowTwenty">0-19k</label>
//             <input name="grossIncome" type="radio" value="belowTwenty" />

//             <label htmlFor="belowThirty">20-29k</label>
//             <input name="grossIncome" type="radio" value="belowThirty" />

//             <label htmlFor="belowForty">30-39k</label>
//             <input name="grossIncome" type="radio" value="belowForty" />

//             <label htmlFor="belowFifty">40-59k</label>
//             <input name="grossIncome" type="radio" value="belowFifty" />

//             <label htmlFor="belowEighty">60-79k</label>
//             <input name="grossIncome" type="radio" value="belowEighty" />

//             <label htmlFor="aboveEighty">80k and above</label>
//             <input name="grossIncome" type="radio" value="aboveEighty" />

//             <input name="consent" type="checkbox" value="consent" />
//             <label htmlFor="consent">
//               I understand that this is not an official consultation and just
//               used for information purposes
//             </label>
//           </div>
//           <Link to="/recommendations">
//             <button>Next</button>
//           </Link>
//         </form>
//       </div>
//     );
//   }
// }

// export default Income;
