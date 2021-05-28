import React, { Component } from 'react';
import YearOfBirth from './YearOfBirth';
import { NavLink } from 'react-router-dom';

import './questionnaire.css';

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnaire: { answers: { year_of_birth: '' } },
    };
  }
  render() {
    return (
      <div className="Questionnaire">
        <h1>Questionnaire</h1>
        <h2>Our Recommendation Tool</h2>
        <p>
          We can recommend any kind of insurance that you might need based on
          your situation
        </p>
        <NavLink exact activeClassName="active-link" to="/questionnaire">
          Take me there
        </NavLink>
        <YearOfBirth />
      </div>
    );
  }
}

export default Questionnaire;
