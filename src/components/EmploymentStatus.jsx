import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EmploymentStatus.css';

class EmploymentStatus extends Component {
  render() {
    return (
      <div className="EmploymentStatus">
        <h1>Employment Status</h1>
        <form>
          <div className="radio">
            <label htmlFor="student">student</label>
            <input name="employmentStatus" type="radio" value="student" />
            <label htmlFor="semployed">employed</label>
            <input name="employmentStatus" type="radio" value="employed" />
            <label htmlFor="selfemployed">selfemployed</label>
            <input name="employmentStatus" type="radio" value="selfemployed" />
            <label htmlFor="unemployed">unemployed</label>
            <input name="employmentStatus" type="radio" value="unemployed" />
          </div>
          <Link to="/questionnaire/income">
            <button>Next</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EmploymentStatus;
