import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EmploymentStatus.css';

class EmploymentStatus extends Component {
  render() {
    return (
      <div className="EmploymentStatus">
        <h1>Employment Status</h1>
        <form>
          <div className="checkbox">
            <label htmlFor="student">student</label>
            <input name="student" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="semployed">employed</label>
            <input name="employed" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="selfemployed">selfemployed</label>
            <input name="selfemployed" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="unemployed">unemployed</label>
            <input name="unemployed" type="checkbox" value="asd" />
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
