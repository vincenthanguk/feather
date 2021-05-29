import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FinancialRes.css';

class FinancialRes extends Component {
  render() {
    return (
      <div className="FinancialRes">
        <h1>Financial Responsibilities 💵</h1>
        <form>
          <div className="checkbox">
            <label htmlFor="child">Child</label>
            <input name="child" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="spouse">spouse</label>
            <input name="spouse" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="parent">parent</label>
            <input name="parent" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="mortgage">mortgage</label>
            <input name="mortgage" type="checkbox" value="asd" />
          </div>
          <span>No obligations</span>
          <Link to="/questionnaire/home-situation">
            <button>Next</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default FinancialRes;
