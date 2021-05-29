import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Recommendations.css';

class Recommendations extends Component {
  render() {
    return (
      <div className="Recommendations">
        <h1>Recommendations</h1>
        <h2>Questionnaire Results:</h2>
        <Link exact to="/questionnaire/year-of-birth">
          <button>Back to Questionnaire</button>
        </Link>
      </div>
    );
  }
}

export default Recommendations;
