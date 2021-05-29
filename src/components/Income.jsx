import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Income.css';

class Income extends Component {
  render() {
    return (
      <div className="Income">
        <h1>Annual Gross Income (before taxes) 💵</h1>
        <form>
          <div className="radio">
            <label htmlFor="belowTwenty">0-19k</label>
            <input name="grossIncome" type="radio" value="belowTwenty" />

            <label htmlFor="belowThirty">20-29k</label>
            <input name="grossIncome" type="radio" value="belowThirty" />

            <label htmlFor="belowForty">30-39k</label>
            <input name="grossIncome" type="radio" value="belowForty" />

            <label htmlFor="belowFifty">40-59k</label>
            <input name="grossIncome" type="radio" value="belowFifty" />

            <label htmlFor="belowEighty">60-79k</label>
            <input name="grossIncome" type="radio" value="belowEighty" />

            <label htmlFor="aboveEighty">80k and above</label>
            <input name="grossIncome" type="radio" value="aboveEighty" />

            <input name="consent" type="checkbox" value="consent" />
            <label htmlFor="consent">
              I understand that this is not an official consultation and just
              used for information purposes
            </label>
          </div>
          <Link to="/recommendations">
            <button>Next</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Income;
