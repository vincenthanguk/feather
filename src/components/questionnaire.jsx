import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <h2>Our Recommendation Tool</h2>
        <p>
          We can recommend any kind of insurance that you might need based on
          your situation
        </p>
        <Link exact to="questionnaire/year-of-birth">
          Take me there
        </Link>
      </div>
    );
  }
}

export default Questionnaire;
